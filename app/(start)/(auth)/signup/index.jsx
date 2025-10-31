import {
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  ScrollView,
  Platform,
  TouchableWithoutFeedback,
  Keyboard
} from "react-native";
import { Link, useRouter } from "expo-router";

// Import composants
import Input from "./components/Input";
import Button from "./components/Button";
import DatePickerInput from "./hooks/DatePickerInput";

// Import Hook from form
import DatasForm from "./hooks/DatasForm";
import { useFormData } from "./hooks/FormContext";

// --------------------------------------------------------------------------------------------
// ------------------------------------- explication ------------------------------------------
// --------------------------------------------------------------------------------------------
// KeyboardAvoidingView → pour ajuster le layout quand le clavier est ouvert

// ScrollView → pour rendre la page scrollable si le contenu dépasse

// TouchableWithoutFeedback + Keyboard.dismiss() → pour fermer le clavier quand on tape à côté

export default function Signup() {

  const { updateFormData } = useFormData(); // Sauvegarde des données avant de changer dde pages

  const formik = DatasForm(1);

  const router = useRouter();

  const SecondForm = async () => {
  const errors = await formik.validateForm();

  formik.setTouched({
    nom: true,
    prenom: true,
    email: true,
    birthday: true,
  });

  if (Object.keys(errors).length === 0) {
    updateFormData(formik.values); // 👈 Enregistre les données dans le contexte
    router.push("/signup/screens");
  } else {
    console.log("❌ Erreurs :", errors);
  }
};

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
          <View style={styles.container}>
            <Text style={styles.title}>Inscription</Text>
            <Input 
              text="Nom" 
              placeholder="Entrez votre Nom" 
              type="default" boolean={false} 
              value={formik.values.nom}
              onChangeText={formik.handleChange('nom')}
              onBlur={formik.handleBlur('nom')}
              error={formik.errors.nom}
              touched={formik.touched.nom} 
            />
            <Input 
              text="Prénom" 
              placeholder="Entrez votre Prénom" 
              type="default" boolean={false}
              value={formik.values.prenom}
              onChangeText={formik.handleChange('prenom')}
              onBlur={formik.handleBlur('prenom')}
              error={formik.errors.prenom}
              touched={formik.touched.prenom} 
            />
            <Input 
              text="Email" 
              placeholder="Entrez votre Email" 
              type="email-address" 
              boolean={false} 
              value={formik.values.email}
              onChangeText={formik.handleChange('email')}
              onBlur={formik.handleBlur('email')}
              error={formik.errors.email}
              touched={formik.touched.email} 
            />
            <DatePickerInput
              value={formik.values.birthday}
              onChange={(val) => formik.setFieldValue('birthday', val)}
              onBlur={() => formik.setFieldTouched('birthday', true)}
              error={formik.errors.birthday}
              touched={formik.touched.birthday}
            />
            <Button style={styles.button} onPress={SecondForm} title="Suivant" color="rgb(0, 92, 69)" />
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              Vous avez un compte ? <Link href="/login" style={{ color: "blue" }}>Connectez-vous</Link>
            </Text>
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
    marginVertical: 50
  },
  container: {
    borderWidth: 1,
    width: 360,
    flexDirection: "column",
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 8,
    // marginVertical: 40
  },
  title: {
    marginBottom: 60,
    textAlign: "center",
    fontSize: 20,
    fontWeight: "bold",
  }
});
