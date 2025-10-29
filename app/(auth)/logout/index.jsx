import { Text, View } from "react-native";

import { Link } from "expo-router";

export default function Logout() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Logout page</Text>
      <Link href="/" style={{color: "red"}}>Confirmer pour vous déconnecté</Link>
    </View>
  );
}
