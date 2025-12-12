import { Stack } from "expo-router";

import HeaderRight from '../../../../src/components/HeaderRight';

export default function CandidaturesLayout() {
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
              headerShown: false,
                title: "Messages",
            }}
          />
          <Stack.Screen
            name="details/index"
            options={{
              headerShown: false,
                title: "Détails du post",
            }}
          />
        </Stack>
  );
}