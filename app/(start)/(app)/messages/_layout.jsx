import { Stack } from "expo-router";

import HeaderRight from '../../../../src/components/HeaderRight';

export default function MessagesLayout() {
  return (
    <Stack
      screenOptions={{
        headerShown: false,
        headerRight: () => <HeaderRight />,
      }}
    >
      <Stack.Screen
        name="index"
        options={{
          headerShown: true,
            title: "Messages",
        }}
      />
      
      <Stack.Screen
        name="chat/index"
        options={{
          headerShown: true,
          title: "Conversation",
          headerBackTitle: "Retour",
        }}
      />
    </Stack>
  );
}