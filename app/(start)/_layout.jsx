import { Stack } from 'expo-router';
// import "../src/i18n";

export default function RootLayout() {
  return (
    <Stack
      screenOptions={{ headerShown: false }}  // par défaut, pas de header au root
    >
      <Stack.Screen name="index" />
      {/* <Stack.Screen name="(auth)" />
      <Stack.Screen name="(app)" /> */}
    </Stack>
  );
}
