import { Pressable, Text, View } from 'react-native';

//i18next
import { useTranslation } from "react-i18next";
import CountryFlag from "react-native-country-flag";
import { notify } from '../../../../../src/components/notifications';
import { changeLanguage } from "../../../../../src/i18n";

//Expo router

export default function ChoiceLanguage(){

    const { t, i18n } = useTranslation();
    
      const handleLanguageChange = async (lang) => {
        await changeLanguage(lang); // On change la langue dynamiquement
      };

    return(
        <View style={{ flex: 1, backgroundColor: "#F0F1EC" }}>
      <View
        style={{
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
          gap: 20,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            fontWeight: "bold",
            width: 400,
            paddingHorizontal: 20,
            paddingBottom: 20,
            marginTop: 40,
            color: "gray",
          }}
        >
          {t("profil.langues.titre") /* 🔹 traduit automatiquement */}
        </Text>

        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            width: 400,
            paddingHorizontal: 20,
            paddingBottom: 20,
            marginTop: -40,
            color: "black",
          }}
        >
          {t("profil.langues.langue")}
        </Text>

        {/* ---- FRANÇAIS ---- */}
        <Pressable
          onPress={() => handleLanguageChange("fr")}
          style={{
            backgroundColor: "#F0EEE9",
            borderColor: i18n.language === "fr" ? "#005E46" : "gray",
            borderWidth: 4,
            borderRadius: 15,
            padding: 20,
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
            borderRadius: 15,
            padding: 20,
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
        <Pressable
            onPress={() => notify.successDefault()} // Pas besoin d’écrire le message ici
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
      </View>
    </View>
    )
}