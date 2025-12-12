import { useLocalSearchParams } from "expo-router";
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function UserCard() {
  const { id } = useLocalSearchParams();

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    const userId = Number(id);

    if (!userId) {
      setError("ID invalide");
      return;
    }

    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
      .then((res) => res.json())
      .then((data) => setUser(data))
      .catch(() => setError("Erreur API"));
  }, []);

  if (error) return <Text>{error}</Text>;
  if (!user) return <ActivityIndicator />;

  return (
    <View style={{ padding: 20 }}>
      <Text>Utilisateur ID : {id}</Text>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>{user.name}</Text>
      <Text>Email : {user.email}</Text>
      <Text>Téléphone : {user.phone}</Text>
    </View>
  );
}
