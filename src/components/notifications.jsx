// 📁 src/components/Notify.js
import { showMessage } from "react-native-flash-message";

/**
 * 🔔 Fonction utilitaire pour afficher une notification.
 * Tu peux la réutiliser depuis n'importe où.
 */
export const notify = {
  success: (msg) =>
    showMessage({
      message: msg,
      type: "success",
      icon: "success",
      duration: 2500,
      floating: true,
    }),

  error: (msg) =>
    showMessage({
      message: msg,
      type: "danger",
      icon: "danger",
      duration: 2500,
      floating: true,
    }),

  warning: (msg) =>
    showMessage({
      message: msg,
      type: "warning",
      icon: "warning",
      duration: 2500,
      floating: true,
    }),

  info: (msg) =>
    showMessage({
      message: msg,
      type: "info",
      icon: "info",
      duration: 2500,
      floating: true,
    }),

  // ---- Notifications prédéfinies ----
  successDefault: () => notify.success("Langue changée avec succès 🎉"),
  errorDefault: () => notify.error("Une erreur est survenue ❌"),
  warningDefault: () => notify.warning("Attention ⚠️"),
  infoDefault: () => notify.info("Information 📌"),
};

//Ancienne version

// export const notify = (message, type = "info") => {
//   showMessage({
//     message,             // le texte à afficher
//     type,                // success | danger | warning | info
//     duration: 2500,      // disparaît après 2.5s
//     floating: true,      // petit effet "flottant"
//     icon: type,          // affiche une icône selon le type
//   });
// };


// Elle s'utilisait ainsi dans un Button, Pressable ou autre
// onPress={() => notify("Langue changée avec succès 🎉", "success")}