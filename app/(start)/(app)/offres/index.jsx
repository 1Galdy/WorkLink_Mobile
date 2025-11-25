import { ActivityIndicator, ScrollView, StyleSheet, Text, View } from "react-native";

import { useOffresDatasBdd } from "../../../../src/hooks/useOffreDatasBdd";

export default function Home() {

  const { datas, loading } = useOffresDatasBdd();
  
    if (loading) return <ActivityIndicator />;

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 30
      }}
    >
      <Text style={styles.count}>10 Candidatures</Text>

      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={styles.gapCards}>
          {datas.map((user) => (
            <View key={user.id} style={styles.containerPoste}>
              <View style={styles.textePoste}>
                {/* Code de la carde à transformer en component */}
                <View style={styles.infosDown}>
                  <Text style={{fontWeight: "bold", fontSize: 15}}>{user.name}</Text>
                  <Text style={{fontSize: 12}}>{user.username}</Text>
                </View>
                <Text style={{color: "gray", fontSize: 12}}>{user.address.street}</Text>
                <View style={styles.infosDown}>
                  <Text style={{fontSize: 12, borderColor: "green", borderWidth: 1, padding: 6, borderRadius: 20, color: "green"}}>{user.address.city}</Text>
                  <Text style={{fontSize: 12, color: "gray"}}>{user.username}</Text>
                </View>
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  count: {
    // backgroundColor: "green",
    width: 370,
    marginTop: 25
  },
  gapCards: {
    // backgroundColor: "blue",
    gap: 10,
    paddingBottom: 20
  },
  containerPoste: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "lightgray",
    alignItems: "center",
    borderWidth: 1,
    width: 370,
    height: "auto",
    padding: 10,
    borderRadius: 8,
  },
  textePoste: {
    // backgroundColor: "brown",
    width: "100%",
    height: "auto",
    paddingVertical: 10,
    paddingHorizontal: 10,
    gap: 15
  },
  infosDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})