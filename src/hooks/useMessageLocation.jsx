// UserCard.js
import { useEffect, useState } from "react";
import { ActivityIndicator, Text, View } from "react-native";

export default function UserCard({ route, navigation }) {
  const { id } = route.params;

  const [user, setUser] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    // Vérifier que l'id reçu est un nombre
    if (!id || typeof id !== "number") {
      setError("ID invalide (doit être un nombre).");
      return;
    }

    // Appel API JSONPlaceholder
    fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then(res => res.json())
      .then(data => {
        setUser(data);
      })
      .catch(() => {
        setError("Impossible de charger l'utilisateur.");
      });
  }, []);

  if (error) return <Text>{error}</Text>;

  if (!user) return <ActivityIndicator size="large" />;

  return (
    <View style={{ padding: 20 }}>
      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
        {user.name}
      </Text>
      <Text>Email : {user.email}</Text>
      <Text>Téléphone : {user.phone}</Text>
    </View>
  );
}
