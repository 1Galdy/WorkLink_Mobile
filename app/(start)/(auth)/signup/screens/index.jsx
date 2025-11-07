import { Link } from "expo-router";
import { Keyboard, KeyboardAvoidingView, Platform, ScrollView, StyleSheet, Text, TouchableWithoutFeedback, View } from "react-native";
// import { useRouter } from "expo-router";

// import component
import Button from "../components/Button";
import Input from "../components/Input";
import PasswordInput from "../hooks/PasswordInput";
import RadioButtons from "../hooks/RadioButtons";

//Thème/style de l'application
import { theme } from "../../../../../src/theme/themeGlobal";

//form
import DatasForm from "../hooks/DatasForm";

//Traduction
import { useTranslation } from "react-i18next";

export default function SignSecondPart() {

  const { t } = useTranslation();

  const formik = DatasForm(2);

  // const router = useRouter();

  // const connexion = () => {
  //   router.push("/home");
  // }

  return (
    <KeyboardAvoidingView
      style={styles.firstContainer}
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
              <Text style={styles.title}>{t("signup.title")}</Text>
              <PasswordInput 
                title={t("signup.pageTwo.passwordLabel")} 
                placeholder={t("signup.pageTwo.passwordPlaceholder")}
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <Input 
                text={t("signup.pageTwo.phoneLabel")} 
                placeholder={t("signup.pageTwo.phonePlaceholder")} 
                type="phone-pad" 
                boolean={false} 
                value={formik.values.telephone}
                onChangeText={formik.handleChange('telephone')}
                onBlur={formik.handleBlur('telephone')}
                error={formik.errors.telephone}
                touched={formik.touched.telephone}
              />
              <Input 
                text={t("signup.pageTwo.paysLabel")} 
                placeholder={t("signup.pageTwo.paysPlaceholder")} 
                type="default" boolean={false}
                value={formik.values.pays}
                onChangeText={formik.handleChange('pays')}
                onBlur={formik.handleBlur('pays')}
                error={formik.errors.pays}
                touched={formik.touched.pays}
              />
              <RadioButtons
                value={formik.values.statut}
                onChange={(val) => formik.setFieldValue('statut', val)}
                error={formik.errors.statut}
                touched={formik.touched.statut}
              />
              <Button style={styles.button} onPress={formik.handleSubmit} title={t("signup.pageTwo.registerButton")} color="rgb(0, 92, 69)" />
              <Text style={styles.texte}>{t("signup.loginAccountText")}<Link href="/login" style={{color: "blue"}}>{t("signup.loginAccountLink")}</Link></Text>
            </View>
            
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  firstContainer: { 
    flex: 1,
    backgroundColor: theme.colors.background,
  },
  scrollContainer: {
    flexGrow: 1,
    justifyContent: "center",
    alignItems: "center",
    marginVertical: 30,
  },
  container: {
    borderWidth: 1,
    width: 360,
    flexDirection: "column",
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 8,
    marginVertical: 40,
  },
  title: { 
    fontFamily: theme.fonts.main.RobotoRegular,
    fontWeight: theme.fonts.sizeStyle.fontWeight,
    marginBottom: 40, 
    textAlign: "center", 
    fontSize: theme.fonts.sizeStyle.loginTitle, 
    // fontWeight: "bold",
  },
  texte: {
    fontFamily: theme.fonts.main.RobotoRegular,
    fontSize: theme.fonts.sizeStyle.texte,
    textAlign: "center"
  }
})
