import { Stack } from 'expo-router';

//Faire le choix de la langue
import { useTranslation } from "react-i18next";

// Import du composant HeaderRight
import HeaderRight from '../../../../src/components/HeaderRight';

export default function ProfilLayout() {

  const { t} = useTranslation();

  return (
    <Stack
      screenOptions={{
        headerShown: true,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,     // Afficher header pour /profil
          title: t("profilPage.headerTitle"),
          headerRight: () => <HeaderRight showProfile={false} />, // ← Cache la photo
        }}
      />
      <Stack.Screen
        name="informations/index"
        options={{
          headerShown: true,     // Afficher header pour /profil/informations
          title: t("profilPage.informationsPage.headerTitle"),
        }}
      />
      <Stack.Screen
        name="langues/index"
        options={{
          headerShown: true,     // Afficher header pour /profil/langues
          title: t("profilPage.languesPage.headerTitle"),
        }}
      />
    </Stack>
  );
}
