import { Link } from "expo-router";
import { useTranslation } from "react-i18next";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
// import { useRouter } from "expo-router";

// import component
import Button from "./components/Button";
import Input from "./components/Input";
import PasswordInput from "./hooks/PasswordInput";

// Import Hook from form
import DatasForm from "./hooks/DatasForm";

//Thème/style de l'application
import { theme } from "../../../../src/theme/themeGlobal";

export default function Login() {

  const formik = DatasForm();

  const { t, i18n } = useTranslation();

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
              <Text style={{ marginBottom: 70, textAlign: "center", fontSize: 20, fontWeight: "bold" }}>{t("login.title")}</Text>
              <Input
                text={t("login.nameLabel")}
                placeholder={t("login.namePlaceholder")}
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
              <Button style={styles.button} onPress={formik.handleSubmit} title={t("login.connexionButton")} color="rgb(0, 92, 69)" />
              <Text style={styles.loginButtonTexte}>{t("login.createAccountText")}<Link href="/signup" style={{color: "blue"}}>{t("login.createAccountLink")}</Link></Text>
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
    backgroundColor: theme.colors.background
  },
  container: {
    borderWidth: 1,
    width: 360,
    flexDirection: "column",
    borderColor: "lightgray",
    padding: 30,
    borderRadius: 8,
  },
  loginButtonTexte: {
    textAlign: "center",
    fontFamily: theme.fonts.main.RobotoRegular,
  }
})
