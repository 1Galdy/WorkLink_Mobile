import { Stack } from 'expo-router';
import { FormProvider } from './hooks/FormContext';

export default function RootLayout() {
  return (
    <FormProvider>
    <Stack
      screenOptions={{ headerShown: false }} />
    </FormProvider>
  );
}
