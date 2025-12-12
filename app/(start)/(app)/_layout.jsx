import { Ionicons } from '@expo/vector-icons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { Tabs } from 'expo-router';

//Faire le choix de la langue
import { useTranslation } from "react-i18next";

// Import du composant HeaderRight
import HeaderRight from '../../../src/components/HeaderRight';

export default function TabsLayout() {

  const { t} = useTranslation();
  
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'rgb(0, 92, 69)',
        tabBarInactiveTintColor: 'gray',
        headerShown: true, // *** Cacher le header pour tous les onglets à ce niveau
        // Utilisez simplement le composant
        headerRight: () => <HeaderRight />,
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: t("homePage.headerTitle"),
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="offres/index"
        options={{
          title: t("offresPage.headerTitle"),
          tabBarIcon: ({ color, size }) => <MaterialIcons name="work" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages"
        options={{
          title: t("messagesPage.headerTitle"),
          tabBarIcon: ({ color, size }) => <Ionicons name="mail-unread" size={size} color={color} />,
          headerShown: false, // Important pour laisser le Stack gérer le header
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: t("profilPage.headerTitle"),
          tabBarIcon: ({ color, size }) => <FontAwesome6 name="user-large" size={size} color={color} />,
          headerShown: false,
        }}
      />
      {/* Pages cachées de la bottom navigation mais accessibles */}
      <Tabs.Screen
        name="notifications/index"
        options={{
          href: null, // ← Masque de la bottom navigation
          title: "Notifications",
          headerShown: true,
        }}
      />
      
      <Tabs.Screen
        name="candidatures"
        options={{
          href: null, // ← Masque de la bottom navigation
          title: "Mes candidatures",
          headerShown: true,
        }}
      />
    </Tabs>
  );
}