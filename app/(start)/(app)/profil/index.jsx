import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native";

import { Link } from "expo-router";

//Les icons
import { FontAwesome, Ionicons, MaterialCommunityIcons, MaterialIcons, Octicons, SimpleLineIcons } from '@expo/vector-icons';

import Foundation from 'react-native-vector-icons/Foundation';

import Entypo from 'react-native-vector-icons/Entypo';

export default function Profil() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      
      <ScrollView 
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ 
          alignItems: "center",
          paddingVertical: 25
        }}
      >
        <View style={[styles.cardProfil, {marginBottom: 30}]}>
          <Image
            source={require('../../../../assets/images/userProfil.jpg')}
            style={styles.logo}
            resizeMode="cover" // ou "cover" selon ton besoin
          />
          <Text style={{marginTop: 20}}>Léo Dubois</Text>
          <Text style={{color: "gray"}}>Développeur FullStack</Text>
        </View>
        
        <View style={styles.linkContainer}>
        <Link href="/profil/informations" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <MaterialIcons name="info" size={24} color="green" />
            <Text style={styles.textColor}>Informations</Text>
          </View>
          </Pressable>
        </Link>

        <Link href="/profil/informations" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <MaterialIcons name="search" size={24} color="green" />
            <Text style={styles.textColor}>Recherches</Text>
          </View>
          </Pressable>
        </Link>

        <Link href="/profil/informations" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <Ionicons name="document-text-outline" size={24} color="green" />
            <Text style={styles.textColor}>Mon CV</Text>
          </View>
          </Pressable>
        </Link>

        <Link href="/profil/informations" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <MaterialIcons name="subscriptions" size={24} color="green" />
            <Text style={styles.textColor}>Prix et Abonnements</Text>
          </View>
          </Pressable>
        </Link>

        <Link href="/profil/amies" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <MaterialIcons name="groups-2" size={24} color="green" />
            <Text style={styles.textColor}>Membres/Amis</Text>
          </View>
          </Pressable>
        </Link>

        <Link href="/profil/ajouts" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <Octicons name="diff-added" size={24} color="green" />
            <Text style={styles.textColor}>Demandes et Ajouts</Text>
          </View>
          </Pressable>
        </Link>

        <Link href="/profil/langues" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <FontAwesome name="language" color="green" size={24} />
            <Text style={styles.textColor}>Langues</Text>
          </View>
          </Pressable>
        </Link>

        <Link href="/profil/professeurs" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <MaterialCommunityIcons name="stamper" color="green" size={24} />
            <Text style={styles.textColor}>Professeurs</Text>
          </View>
          </Pressable>
        </Link>

        <Link href="/profil/mentors" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <Foundation name="torsos" color="green" size={24} />
            <Text style={styles.textColor}>Mentors</Text>
          </View>
          </Pressable>
        </Link>

        <Link href="/profil/about" style={[styles.containerPoste, styles.block]} asChild>
          <Pressable>
          <View style={styles.rowInside}>
            <Entypo name="fingerprint" color="green" size={24} />
            <Text style={styles.textColor}>Qui sommes nous ?</Text>
          </View>
          </Pressable>
        </Link>

        <View style={styles.endProfile}>
          <Link
            href="/(auth)/logout"
            style={[styles.containerPosteAccount, { borderColor: "green", borderWidth: 1, flex: 1 }]}
            asChild
          >
            <View style={styles.rowInsideAccount}>
              <SimpleLineIcons name="logout" color="green" size={20} />
              <Text style={{ color: "green", fontSize: 11 }}>Déconnexion</Text>
            </View>
          </Link>

          <Link
            href="../../../index.jsx"
            style={[styles.containerPosteAccount, { backgroundColor: "red", flex: 1.5, borderColor: "red" }]}
            asChild
          >
            <View style={styles.rowInsideAccount}>
              <MaterialCommunityIcons name="delete-alert" size={20} color="white" />
              <Text style={{ color: "white", fontSize: 11 }}>Supprimer le compte</Text>
            </View>
          </Link>
        </View>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  cardProfil: {
    backgroundColor: "white",
    width: 370,
    padding: 20,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10
  },
  logo: {
    width: 150,
    height: 150,
    borderRadius: 70
  },
  linkContainer: {
    // backgroundColor: "red",
    width: "95%", 
    alignItems: "center",
  },
  containerPoste: {
    backgroundColor: "white",
    flexDirection: "row",
    justifyContent: "flex-start",
    borderColor: "lightgray",
    alignItems: "center",
    borderWidth: 1,
    width: 370,
    height: "auto",
    // padding: 10,
    borderRadius: 8,
    // gap: 20
  },
  block: {
    marginBottom: 15,   // <--- ESPACEMENT UNIFORME iOS & Android
  },
  rowInside: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    padding: 20,     // ✔ padding uniforme
    gap: 20,         // ✔ espacement uniforme
  },
  endProfile: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: 370,      // ok !
    gap: 5,
  },
  containerPosteAccount: {
    backgroundColor: "white",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 8,
    borderWidth: 1,
  },
  rowInsideAccount: {
    // backgroundColor: "yellow",
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
    gap: 10,
  },
  textColor : {
    color: "black"
  }
})