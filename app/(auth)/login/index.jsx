import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard, Platform } from "react-native";
import { Link } from "expo-router";
// import { useRouter } from "expo-router";

// import component
import Input from "./components/Input";
import Button from "./components/Button";
import PasswordInput from "./hooks/PasswordInput";

// Import Hook from form
import DatasForm from "./hooks/DatasForm";

export default function Login() {

  const formik = DatasForm();

  // const router = useRouter();

  // const connexion = () => {
  //   router.push("/home");
  // }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <ScrollView
          contentContainerStyle={styles.scrollContainer}
          keyboardShouldPersistTaps="handled"
        >
          <View
            style={{
              flex: 1,
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <View style={styles.container}>
              <Text style={{ marginBottom: 70, textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Connexion</Text>
              <Input
                text="Nom"
                placeholder="Entrez votre nom"
                type="default"
                boolean={false}
                value={formik.values.nom}
                onChangeText={formik.handleChange('nom')}
                onBlur={formik.handleBlur('nom')}
                error={formik.errors.nom}
                touched={formik.touched.nom}
              />
              <PasswordInput
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <Button style={styles.button} onPress={formik.handleSubmit} title="Connexion" color="rgb(0, 92, 69)" />
              <Text style={{textAlign: "center"}}>Vous n'avez pas de compte ? <Link href="/signup" style={{color: "blue"}}>Créer un compte</Link></Text>
            </View>
            
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
  },
  container: {
    borderWidth: 1,
    width: 360,
    flexDirection: "column",
    borderColor: "lightgray",
    padding: 30,
    borderRadius: 8,
  },
})
