// src/i18n.js
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import des fichiers de traduction
import en from "./locales/en/translations.json";
import fr from "./locales/fr/translations.json";

//Affiche ma localisation
console.log("📱 Locale détectée :", Localization.locale);


// Configuration de i18next
i18n
  .use(initReactI18next)
  .init({
    compatibilityJSON: "v3", // utile pour éviter certains warnings
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng: (Localization.locale || "en").startsWith("fr") ? "fr" : "en", // langue actuelle
    fallbackLng: "fr",   // langue par défaut si non trouvée
    interpolation: {
      escapeValue: false, // React s’occupe de la sécurité
    },
  });

export default i18n;
