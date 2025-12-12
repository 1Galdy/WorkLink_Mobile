import { useRouter } from "expo-router";
import { ActivityIndicator, Image, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import { useHomeDatasBdd } from '../../../../src/hooks/useHomeDatasBdd';

//Import hooks components

//Import Icons
import { Ionicons } from '@expo/vector-icons';

//Thème/style de l'application
import { theme } from "../../../../src/theme/themeGlobal";

export default function Home() {

  const router = useRouter();

  const { datas, loading } = useHomeDatasBdd();

  if (loading) return <ActivityIndicator />;

  const categories = ["CDI", "CDD", "Alternance", "Stage", "Temporaire", "Intermittent", "Apprentissage", "Professionnalisation", "Insertion"];

  return (
    <View
      style={styles.container}
    >
      <View style={styles.divFirst}>
        <View style={styles.ContainerInputSearch}>
          <Ionicons style={styles.icon} name="search" size={30} color="#333" />
          <TextInput style={styles.inputSearch} placeholderTextColor="#999999" placeholder="Rechercher une offre..."></TextInput>
        </View>
        <ScrollView 
          style={styles.jobList}
          horizontal={true} // <-- ajoute ça
          showsHorizontalScrollIndicator={false} // optionnel : cache la scrollbar
        >
          {categories.map((cat, index) => (
            <View key={index} style={styles.categoryBox}>
              <Text style={styles.categoryText}>{cat}</Text>
            </View>
          ))}
        </ScrollView>
        
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={{paddingBottom: 20, gap: 20}}>
            {datas.map((user) => (
              <Pressable
                key={user.id}
                style={styles.containerPoste}
                onPress={() => router.push(`/candidatures?id=${user.id}`)}
              >
                  <View style={styles.imagePoste}>
                    <Image
                      source={{ uri: "https://static.ib-formation.fr/content/uploads/2024/04/15110010/tendances-developpement-web-2024-ib-cegos-1.jpg" }}
                      style={{ width: 80, height: 80, borderRadius: 5 }}
                    />
                  </View>
                  <View style={styles.textePoste}>
                    {/* {datas.map((user) => (
                      <Text key={user.id}>{user.name}</Text>
                    ))} */}

                    {/* Code de la carde à transformer en component */}
                    <Text style={{fontWeight: "bold", fontSize: 15}}>{user.name}</Text>
                    <Text style={{color: "gray", fontSize: 12}}>{user.address.street}</Text>
                    <View style={styles.infosDown}>
                      <Text style={{fontSize: 12, backgroundColor: "green", padding: 6, borderRadius: 20, color: "white"}}>{user.address.city}</Text>
                      <Text style={{fontSize: 12}}> {user.id} jours</Text>
                      <Text style={{fontSize: 12, color: "blue"}}>{user.username}</Text>
                    </View>
                  </View>
              </Pressable>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  ContainerInputSearch: {
    borderColor: "gray",
    borderWidth: 1,
    flexDirection: "row",
    justifyContent: "space-between",
    marginVertical: 15,
    padding: 0.5,
    paddingEnd: 1.5,
    width: 370,
    height: 48,
    borderRadius: 5,
  },
  icon: {
    marginVertical: 7,
    marginLeft: 8
  },
  inputSearch: {
    // borderColor: "gray",
    // borderWidth: 1,
    width: 320,
    height: 45
  },
  divFirst: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  },
  jobList: {
    // backgroundColor: "red",
    width: 370,
    paddingBottom: 20,
    paddingTop: 5,
    paddingLeft: 5
  },
  categoryBox: {
    marginVertical: 5,
    alignSelf: "center", // pour centrer le bouton
    justifyContent: "space-between",
     marginRight: 10, // espace entre les boutons
    // backgroundColor: "yellow"
  },
  categoryText: {
    backgroundColor: theme.colors.primary, // couleur du bouton
    color: theme.colors.defaultWhite,              // texte blanc
    paddingVertical: 10,        // hauteur du bouton
    paddingHorizontal: 20,      // largeur du bouton
    borderRadius: 25,           // arrondi
    textAlign: "center",        // centrer le texte
    fontWeight: "bold",         // texte en gras
    fontSize: 16,
    height: 50
  },
  containerPoste: {
    // backgroundColor: "red",
    flexDirection: "row",
    justifyContent: "space-between",
    borderColor: "lightgray",
    alignItems: "center",
    borderWidth: 1,
    width: 370,
    height: "auto",
    padding: 10,
    borderRadius: 5,
  },
  imagePoste: {
    // backgroundColor: "blue",
    width: 80,
    height: 80,
    borderRadius: 5
  },
  textePoste: {
    // backgroundColor: "brown",
    width: 260,
    height: "auto",
    padding: 5,
    gap: 10
  },
  infosDown: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center"
  }
})