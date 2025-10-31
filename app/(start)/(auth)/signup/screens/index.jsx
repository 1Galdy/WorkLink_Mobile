import { StyleSheet, Text, View, KeyboardAvoidingView, TouchableWithoutFeedback, ScrollView, Keyboard, Platform  } from "react-native";
import { Link } from "expo-router";
// import { useRouter } from "expo-router";

// import component
import Input from "../components/Input";
import Button from "../components/Button";
import PasswordInput from "../hooks/PasswordInput";
import RadioButtons from "../hooks/RadioButtons";

//form
import DatasForm from "../hooks/DatasForm";

export default function SignSecondPart() {

  const formik = DatasForm(2);

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
              <Text style={{ marginBottom: 60, textAlign: "center", fontSize: 20, fontWeight: "bold" }}>Inscription</Text>
              <PasswordInput 
                title="Mot-de-passe" 
                placeholder="Entrez votre mot de passe"
                value={formik.values.password}
                onChangeText={formik.handleChange('password')}
                onBlur={formik.handleBlur('password')}
                error={formik.errors.password}
                touched={formik.touched.password}
              />
              <Input 
                text="Numéro de téléphone" 
                placeholder="+242 6 458.../+33 7 85... " 
                type="phone-pad" 
                boolean={false} 
                value={formik.values.telephone}
                onChangeText={formik.handleChange('telephone')}
                onBlur={formik.handleBlur('telephone')}
                error={formik.errors.telephone}
                touched={formik.touched.telephone}
              />
              <Input 
                text="Pays de résidence" 
                placeholder="Votre pays" 
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
              <Button style={styles.button} onPress={formik.handleSubmit} title="Inscription" color="rgb(0, 92, 69)" />
              <Text style={{textAlign: "center"}}>Vous avez un compte ? <Link href="/login" style={{color: "blue"}}>Connectez-vous</Link></Text>
            </View>
            
          </View>
        </ScrollView>
      </TouchableWithoutFeedback>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 1,
    width: 360,
    flexDirection: "column",
    borderColor: "lightgray",
    padding: 20,
    borderRadius: 8,
    marginVertical: 40,
  },
})
