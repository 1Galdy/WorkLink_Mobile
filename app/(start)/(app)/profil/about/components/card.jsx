import { StyleSheet, Text, View } from "react-native";

export default function Card({ h1, paragraphe, paragrapheList }) {
  return (
    <View style={styles.container}>
      
      {/* Titre principal */}
      <Text style={styles.title}>{h1}</Text>

      {/* Cas 1 → Un seul paragraphe */}
      {paragraphe && (
        <Text style={styles.paragraphe}>{paragraphe}</Text>
      )}

      {/* Cas 2 & 3 → Liste */}
      {paragrapheList && paragrapheList.map((item, index) => (
        <View key={index} style={{ marginTop: 10 }}>
          <Text style={styles.subTitle}>{item.title}</Text>

          {item.paragraphe && (
            <Text style={styles.paragraphe}>{item.paragraphe}</Text>
          )}

          {item.coordonnee && (
            <Text style={styles.coordonnee}>{item.coordonnee}</Text>
          )}
        </View>
      ))}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 25,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subTitle: {
    fontSize: 16,
    fontWeight: "600",
  },
  paragraphe: {
    fontSize: 14,
    marginTop: 4,
    lineHeight: 20,
  },
  coordonnee: {
    fontSize: 14,
    color: "#009688",
    marginTop: 4,
  }
});
