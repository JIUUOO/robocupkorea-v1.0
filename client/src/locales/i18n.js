import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import translationKO from "./kr/translation.json";
import translationEN from "./en/translation.json";

const resources = {
  ko: {
    translation: translationKO,
  },
  en: {
    translation: translationEN,
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: "ko",
  fallbackLng: "en",
  interpolation: {
    escapeValue: false,
  },
});

export default i18n;
