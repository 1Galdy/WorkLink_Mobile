import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, Pressable, Text, View } from "react-native";

export default function Start() {

  const { t, i18n } = useTranslation();

  return (
    <View style={{ flex: 1, backgroundColor: "#F0F1EC" }}>
      {/* Bloc centré au milieu de l'écran */}
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          paddingHorizontal: 20,
        }}
      >
        <Image
          source={require('../../assets/images/WorkLink_Logo.jpg')} // ✅ adapte le chemin si besoin
          style={{
            width: 140,       // ✅ largeur souhaitée
            height: 140,      // ✅ hauteur souhaitée
            resizeMode: 'contain', // pour garder les proportions
            marginBottom: 20, // espace avec les autres éléments
          }}
        />

        <Text
          style={{
            color: "gray",
            textAlign: "center",
            marginTop: 20,
            fontSize: 13,
            fontWeight: "bold",
          }}
        >
          {t("secondPage.paragraphe")}
        </Text>
      </View>

      {/* Bouton fixé en bas */}
      <View
        style={{
          padding: 20,
          marginBottom: 40
        }}
      >
        <Link href="/login" asChild>
          <Pressable
            style={{
              backgroundColor: "rgb(0, 92, 69)",
              padding: 12,
              borderRadius: 5,
              width: "100%",
              alignSelf: "center",
            }}
          >
            <Text style={{ color: "#fff", textAlign: "center" }}>{t("secondPage.continueButton")}</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
