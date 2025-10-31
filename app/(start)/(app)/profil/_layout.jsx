import { Stack } from 'expo-router';

export default function ProfilLayout() {
  return (
    <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,     // Afficher header pour /profil
          title: 'Profil',
        }}
      />
      <Stack.Screen
        name="informations/index"
        options={{
          headerShown: true,     // Afficher header pour /profil/informations
          title: 'Informations',
        }}
      />
    </Stack>
  );
}
