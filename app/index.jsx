import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Pressable, Text, View } from "react-native";
import CountryFlag from "react-native-country-flag";
import { changeLanguage } from "../src/i18n"; // ⚙️ Import de notre fonction utilitaire

export default function Language() {
  const { t, i18n } = useTranslation();

  const handleLanguageChange = async (lang) => {
    await changeLanguage(lang); // On change la langue dynamiquement
  };

  return (
    <View style={{ flex: 1, backgroundColor: "#F0F1EC" }}>
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
          style={{
            fontSize: 30,
            fontWeight: "bold",
            width: 400,
            textAlign: "center",
            paddingBottom: 50,
            color: "#005E46",
          }}
        >
          {t("select_language") /* 🔹 traduit automatiquement */}
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
            style={{
              backgroundColor: "#005E46",
              padding: 12,
              borderRadius: 10,
              width: "100%",
              marginTop: 30,
            }}
          >
            <Text style={{ color: "white", textAlign: "center" }}>
              {t("continue")}
            </Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
