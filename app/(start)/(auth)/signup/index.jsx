import { Link, useRouter } from "expo-router";
import {
  Keyboard,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from "react-native";

// Import composants
import Button from "./components/Button";
import Input from "./components/Input";
import DatePickerInput from "./hooks/DatePickerInput";

// Import Hook from form
import DatasForm from "./hooks/DatasForm";
import { useFormData } from "./hooks/FormContext";

//Changer de langue
import { useTranslation } from "react-i18next";

// --------------------------------------------------------------------------------------------
// ------------------------------------- explication ------------------------------------------
// --------------------------------------------------------------------------------------------
// KeyboardAvoidingView → pour ajuster le layout quand le clavier est ouvert

// ScrollView → pour rendre la page scrollable si le contenu dépasse

// TouchableWithoutFeedback + Keyboard.dismiss() → pour fermer le clavier quand on tape à côté

export default function Signup() {

  const { t, i18n } = useTranslation();

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
            <Text style={styles.title}>{t("signup.title")}</Text>
            <Input 
              text={t("signup.nameLabel")} 
              placeholder={t("signup.namePlaceholder")} 
              type="default" boolean={false} 
              value={formik.values.nom}
              onChangeText={formik.handleChange('nom')}
              onBlur={formik.handleBlur('nom')}
              error={formik.errors.nom}
              touched={formik.touched.nom} 
            />
            <Input 
              text={t("signup.firstNameLabel")} 
              placeholder={t("signup.firstNamePlaceholder")} 
              type="default" boolean={false}
              value={formik.values.prenom}
              onChangeText={formik.handleChange('prenom')}
              onBlur={formik.handleBlur('prenom')}
              error={formik.errors.prenom}
              touched={formik.touched.prenom} 
            />
            <Input 
              text={t("signup.emailLabel")} 
              placeholder={t("signup.emailPlaceholder")} 
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
            <Button style={styles.button} onPress={SecondForm} title={t("signup.nextStepButton")} color="rgb(0, 92, 69)" />
            <Text style={{ textAlign: "center", marginTop: 20 }}>
              {t("signup.loginAccountText")} <Link href="/login" style={{ color: "blue" }}>{t("signup.loginAccountLink")}</Link>
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
