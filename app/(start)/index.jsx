import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";

//Thème/style de l'application
import { theme } from "../../src/theme/themeGlobal";

export default function Start() {

  const { t, i18n } = useTranslation();

  return (
    <View style={styles.container} >
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
          style={styles.paragraphe}
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
            style={styles.pressableButton}
          >
            <Text style={styles.buttonTexte}>{t("secondPage.continueButton")}</Text>
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
    paragraphe: {
      color: theme.colors.defaultGray,
      textAlign: "center",
      marginTop: 20,
      fontSize: 13,
      fontWeight: "bold",
    },
    pressableButton: {
      backgroundColor: theme.colors.important,
      padding: 12,
      borderRadius: 5,
      width: "100%",
      alignSelf: "center",
    },
    buttonTexte: { 
      color: theme.colors.defaultWhite, 
      textAlign: "center" 
    }
})