// src/i18n.js
import AsyncStorage from "@react-native-async-storage/async-storage";
import * as Localization from "expo-localization";
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// Import des fichiers de traduction
import en from "./locales/en/translations.json";
import fr from "./locales/fr/translations.json";

// ------------------------------------------------------
// 🔹 Fonction pour initialiser la langue
// ------------------------------------------------------
const initLanguage = async () => {
  try {
    // 🔸 On essaie de lire la langue sauvegardée par l'utilisateur
    const savedLang = await AsyncStorage.getItem("userLanguage");

    // 🔸 Sinon on récupère la langue du téléphone
    const deviceLang = Localization.locale?.startsWith("fr") ? "fr" : "en";

    // 🔸 On choisit celle à utiliser
    const langToUse = savedLang || deviceLang;

    console.log("🌍 Langue utilisée :", langToUse);
    return langToUse;
  } catch (error) {
    console.warn("Erreur lors du chargement de la langue :", error);
    return "en";
  }
};

// ------------------------------------------------------
// 🔹 Initialisation d'i18next
// ------------------------------------------------------
const initializeI18n = async () => {
  const lng = await initLanguage();

  i18n.use(initReactI18next).init({
    compatibilityJSON: "v3",
    resources: {
      en: { translation: en },
      fr: { translation: fr },
    },
    lng,
    fallbackLng: "fr",
    interpolation: { escapeValue: false },
    react: { useSuspense: false },
  });
};

// ⚙️ On lance l’initialisation au démarrage
initializeI18n();

// ------------------------------------------------------
// 🔹 Fonction utilitaire pour changer la langue
// ------------------------------------------------------
export const changeLanguage = async (lang) => {
  await i18n.changeLanguage(lang); // i18next change la langue
  await AsyncStorage.setItem("userLanguage", lang); // on sauvegarde le choix
  console.log("✅ Langue changée :", lang);
};

export default i18n;
