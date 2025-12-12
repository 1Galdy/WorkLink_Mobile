import { useRouter } from "expo-router";
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";
import { useOffresDatasBdd } from "../../../../src/hooks/useOffreDatasBdd"; // corrige le chemin selon ton projet

export default function Notifications() {
  const router = useRouter();
  const { datas, loading } = useOffresDatasBdd();

  if (loading) return <ActivityIndicator />;

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <ScrollView 
        showsVerticalScrollIndicator={false}
        style={styles.scroll}
      >
        {datas.map((user) => (
          <Pressable
            key={user.id}
            style={styles.card}
            onPress={() => router.push(`/messages/chat?id=${user.id}`)}
          >
            <Image
              source={{
                uri:
                  "https://images.unsplash.com/photo-1615813967515-e1838c1c5116?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
              }}
              style={{ width: 80, height: 80 }}
            />

            <View>
              <Text style={{ fontSize: 14 }}>{user.username}</Text>
              <Text style={{ color: "gray" }}>{user.address.street}</Text>
            </View>
          </Pressable>
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  scroll: {
    // backgroundColor: "red",
  },
  card: {
    flexDirection: "row",
    gap: 10,
    alignItems: "center",
    padding: 10,
    marginBottom: 10,
    backgroundColor: "white",
    borderRadius: 8,
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
