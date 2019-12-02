export default {
  HTTPMOCK_ON: process.env.VUE_APP_HTTPMOCK_ON === 'true',
  MOCK_URL: process.env.VUE_APP_MOCK_URL,
  ENV: process.env.VUE_APP_NODE_ENV,
  UPLOAD_FILE_MAX_SIZE: process.env.VUE_APP_UPLOAD_FILE_MAX_SIZE, // 上传文件限制，50M
  XHRLOG: process.env.VUE_APP_XHRLOG === 'true', // 是否console出ajax的详细信息；右上角的Notice是否打印url和code
  HTTPBASEURL: process.env.VUE_APP_HTTPBASEURL, // 开发服务器
  APPID: process.env.VUE_APP_APPID
};
