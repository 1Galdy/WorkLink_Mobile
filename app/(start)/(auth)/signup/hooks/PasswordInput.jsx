import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

//Thème/style de l'application
import { theme } from "../../../../../src/theme/themeGlobal";

export default function PasswordInput({title, placeholder, value, onChangeText, onBlur, error, touched}) {

  const { t } = useTranslation();

  // const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{title}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder={placeholder}
          placeholderTextColor="#999"
          // onChangeText={setPassword}
          secureTextEntry={!showPassword} // ← Cacher ou afficher
          value={value} 
          onChangeText={onChangeText} 
          onBlur={onBlur}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.toggle}>
            {showPassword ? t("signup.passwordHidden") : t("signup.passwordVisible")}
          </Text>
        </TouchableOpacity>
      </View>
      {/* ✅ Affichage du message d'erreur */}
      {touched && error && (
        <Text style={styles.errorText}>{error}</Text>
      )}
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    fontFamily: theme.fonts.main.RobotoRegular,
    marginBottom: 6,
    fontSize: theme.fonts.sizeStyle.texte,
    fontWeight: theme.fonts.sizeStyle.fontWeight,
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  // ✅ Style optionnel pour indiquer visuellement l'erreur
  inputError: {
    borderColor: 'red',
    borderWidth: 1.5,
  },
  input: {
    fontFamily: theme.fonts.main.RobotoRegular,
    flex: 1,
    paddingVertical: 12,
    fontSize: theme.fonts.sizeStyle.placeholderInput,
  },
  toggle: {
    fontFamily: theme.fonts.main.RobotoRegular,
    color: 'rgb(0, 92, 69)',
    fontWeight: 'bold',
    marginLeft: 10,
  },
  // ✅ AJOUT : Style pour le message d'erreur
  errorText: {
    fontFamily: theme.fonts.main.RobotoRegular,
    color: theme.colors.errorColor,
    fontSize: theme.fonts.sizeStyle.placeholderInput,
    marginTop: 5,
  },
});
