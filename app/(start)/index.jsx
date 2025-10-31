import { Link } from "expo-router";
import { Image, Pressable, Text, View } from "react-native";

export default function Start() {
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
          Vous ne savez pas comment entrer en contact avec l'entreprise ou le travail de vos rêves ? WorkLink crée la connexion. Directement. En un clic.
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
            <Text style={{ color: "#fff", textAlign: "center" }}>Continuer</Text>
          </Pressable>
        </Link>
      </View>
    </View>
  );
}
