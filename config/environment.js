require('dotenv').config();

module.exports = {
  port: process.env.PORT || '3000',
  imageInlineSizeLimit: process.env.IMAGE_INLINE_SIZE_LIMIT || '10000',
  isEnvProduction: process.env.NODE_ENV === 'development',
};