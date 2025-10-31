import { Stack } from 'expo-router';
import FlashMessage from "react-native-flash-message"; //import de la lib pour afficher une notification
import "../src/i18n";

export default function RootLayout() {
  return (
    <>
      <Stack
        screenOptions={{ headerShown: false }}  // par défaut, pas de header au root
      >
        <Stack.Screen name="index" />
        {/* <Stack.Screen name="(auth)" />
        <Stack.Screen name="(app)" /> */}
      </Stack>
      {/* ✅ Il doit exister UNE SEULE FOIS dans l'app */}
      <FlashMessage position="top" />
    </>
  );
}
