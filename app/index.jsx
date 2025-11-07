import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Pressable, StyleSheet, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";
import { changeLanguage } from "../src/i18n"; // ⚙️ Import de notre fonction utilitaire

//Thème/style de l'application
import { theme } from "../src/theme/themeGlobal";

export default function Language() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async (lang) => {
    await changeLanguage(lang); // On change la langue dynamiquement
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          gap: 20,
        }}
      >
        <Text
          style={styles.titleH1}
        >
          {t("firstPage.select_language") /* 🔹 traduit automatiquement */}
        </Text>

        {/* ---- FRANÇAIS ---- */}
        <Pressable
          onPress={() => handleLanguageChange("fr")}
          style={{
            backgroundColor: "#F0EEE9",
            borderColor: i18n.language === "fr" ? "#005E46" : "gray",
            borderWidth: 4,
            borderRadius: 10,
            padding: 12,
            width: "100%",
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <CountryFlag isoCode="fr" size={32} />
          <Text style={{ marginLeft: 20 }}>Français</Text>
        </Pressable>

        {/* ---- ENGLISH ---- */}
        <Pressable
          onPress={() => handleLanguageChange("en")}
          style={{
            backgroundColor: "#F0EEE9",
            borderColor: i18n.language === "en" ? "#005E46" : "gray",
            borderWidth: 4,
            borderRadius: 10,
            padding: 12,
            width: "100%",
            alignSelf: "center",
            flexDirection: "row",
            justifyContent: "flex-start",
          }}
        >
          <CountryFlag isoCode="gb" size={32} />
          <Text style={{ marginLeft: 20 }}>English</Text>
        </Pressable>

        {/* ---- Continuer ---- */}
        <Link href="/(start)" asChild>
          <Pressable
            style={styles.pressableButton}
          >
            <Text style={styles.buttonTexte}>
              {t("firstPage.continueButton")}
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor: theme.colors.background 
  },
  titleH1: {
    fontFamily: theme.fonts.main.RobotoRegular,
    fontSize: theme.fonts.sizeStyle.title,
    fontWeight: "bold",
    width: 400,
    textAlign: "center",
    paddingBottom: 50,
    color: theme.colors.important
  },
  pressableButton: {
    backgroundColor: theme.colors.important,
    padding: 12,
    borderRadius: 10,
    width: "100%",
    marginTop: 30,
  },
  buttonTexte: { 
    color: theme.colors.defaultWhite, 
    textAlign: "center",
  }
})