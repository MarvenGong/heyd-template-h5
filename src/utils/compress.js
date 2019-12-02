
import toastr from 'toastr';

/**
 * 图片压缩
 * @param fileObj => 文件对象
 * @param maxSize => 要压缩的最大的大小file.size
 * @param picQuality => canvas.toDataURL的要说比例（quality值越小，所绘制出的图像越模糊）
 * @param maxWith => 文件压缩的尺度控制（可不传）。不传则为原尺寸。传，则控制压缩后宽和高都不能超过maxWith。
 * @returns {Promise}
 */
export function compress(fileObj, maxSize, picQuality, maxWith) {
  return new Promise((resolve, reject) => {
    const isJPG = (fileObj.type === 'image/jpeg');
    let fileName = fileObj.name;
    if (fileObj.size && ((fileObj.size / 1024 / 1024) > maxSize) && isJPG) {
      try {
        const image = new Image();
        image.src = URL.createObjectURL(fileObj);
        image.onload = function() {
          const that = this;
          // 默认按比例压缩
          let w = that.width;
          let h = that.height;
          const scale = w / h;
          if (maxWith) {
            if (scale > 1) {
              w = maxWith;
              h = maxWith / scale;
            } else {
              w = maxWith / scale;
              h = maxWith;
            }
          } else {
            w = fileObj.width || w;
            h = fileObj.height || (w / scale);
          }
          let quality = picQuality; // 默认图片质量为0.7
          // 生成canvas
          const canvas = document.createElement('canvas');
          const ctx = canvas.getContext('2d');
          // 创建属性节点
          const anw = document.createAttribute('width');
          anw.nodeValue = w;
          const anh = document.createAttribute('height');
          anh.nodeValue = h;
          canvas.setAttributeNode(anw);
          canvas.setAttributeNode(anh);
          ctx.drawImage(that, 0, 0, w, h);
          // 图像质量
          if (fileObj.quality && fileObj.quality <= 1 && fileObj.quality > 0) {
            quality = fileObj.quality;
          }
          // quality值越小，所绘制出的图像越模糊
          const data = canvas.toDataURL('image/jpeg', quality);
          // 压缩完成执行回调
          const newFile = convertBase64UrlToBlob(data);
          newFile.name = fileName;
          resolve(newFile);
        };
      } catch (e) {
        toastr.warning('图片压缩失败~');
        resolve(fileObj);
      }
    } else {
      resolve(fileObj);
    }
  });
}
function convertBase64UrlToBlob(urlData) {
  const bytes = window.atob(urlData.split(',')[1]); // 去掉url的头，并转换为byte
  // 处理异常,将ascii码小于0的转换为大于0
  const ab = new ArrayBuffer(bytes.length);
  const ia = new Uint8Array(ab);
  for (let i = 0; i < bytes.length; i++) {
    ia[i] = bytes.charCodeAt(i);
  }
  return new Blob([ab], { type: 'image/jpeg' });
};
