const path = require('path')

const CMS_MEDIA_PATH = process.env.GRIDSOME_CMS_MEDIA_PATH
const CMS_BUILD_VERSION_FILE = process.env.CMS_BUILD_VERSION_FILE

module.exports = {
  INCLUDE_DERIVED_MEDIA_ASSETS: true,
  CMS_URL: process.env.CMS_URL,
  CMS_MEDIA_URL: process.env.CMS_MEDIA_URL,
  CMS_MEDIA_PATH: CMS_MEDIA_PATH,
  CMS_MEDIA_FULL_PATH: path.join(process.cwd(), CMS_MEDIA_PATH),
  CMS_POSTS_PAGELIMIT: process.env.GRIDSOME_CMS_POSTS_PAGELIMIT,
  CMS_BUILD_VERSION_FILE: CMS_BUILD_VERSION_FILE,
  CMS_BUILD_VERSION_FULL_PATH: path.join(process.cwd(), CMS_BUILD_VERSION_FILE),
  IS_PRODUCTION: process.env.NODE_ENV === "production"
}