import { Text, View } from "react-native";

import { Link } from "expo-router";

export default function Profil() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Pofil page</Text>
      <Link href="/profil/informations" style={{color: "blue"}}>Informations</Link>
      <Link href="/(auth)/logout" style={{color: "red"}}>Déconnexion</Link>
    </View>
  );
}
