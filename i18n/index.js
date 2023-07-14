var en = require("../public/locales/en/common.json");
var zh = require("../public/locales/zh/common.json");

const i18n = {
  translations: {
    en,
    zh,
  },
  defaultLang: "zh",
  useBrowserDefault: true,
};

module.exports = i18n;
