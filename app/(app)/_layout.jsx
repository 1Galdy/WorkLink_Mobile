import { Tabs } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: 'rgb(0, 92, 69)',
        tabBarInactiveTintColor: 'gray',
        headerShown: true, // *** Cacher le header pour tous les onglets à ce niveau
      }}
    >
      <Tabs.Screen
        name="home/index"
        options={{
          title: 'Accueil',
          tabBarIcon: ({ color, size }) => <Ionicons name="home" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="offres/index"
        options={{
          title: 'Offres',
          tabBarIcon: ({ color, size }) => <MaterialIcons name="work" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="messages/index"
        options={{
          title: 'Messages',
          tabBarIcon: ({ color, size }) => <Ionicons name="mail-unread" size={size} color={color} />,
        }}
      />
      <Tabs.Screen
        name="profil"
        options={{
          title: 'Profil',
          tabBarIcon: ({ color, size }) => <FontAwesome6 name="user-large" size={size} color={color} />,
          headerShown: false,
        }}
      />
    </Tabs>
  );
}
