import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

//Thème/style de l'application
import { theme } from "../../../../../src/theme/themeGlobal";

export default function PasswordInput({ value, onChangeText, onBlur, error, touched }) {

  const { t } = useTranslation();

  const [showPassword, setShowPassword] = useState(false);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{t("login.passwordLabel")}</Text>

      <View style={styles.inputContainer}>
        <TextInput
          style={[styles.input, error && touched && { borderColor: 'red' }]}
          placeholder={t("login.passwordPlaceholder")}
          placeholderTextColor="#999"
          value={value}
          onChangeText={onChangeText}
          onBlur={onBlur}
          secureTextEntry={!showPassword}
        />

        <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
          <Text style={styles.toggle}>
            {showPassword ? t("login.passwordHidden") : t("login.passwordVisible")}
          </Text>
        </TouchableOpacity>
      </View>

      {error && touched && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginBottom: 20,
  },
  label: {
    marginBottom: 6,
    fontFamily: theme.fonts.main.RobotoRegular,
    fontSize: theme.fonts.sizeStyle.loginTitle,
    fontWeight: '500',
  },
  inputContainer: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  input: {
    flex: 1,
    paddingVertical: 12,
    fontFamily: theme.fonts.main.RobotoRegular,
    fontSize: theme.fonts.sizeStyle.placeholderInput,
  },
  toggle: {
    color: 'rgb(0, 92, 69)',
    fontWeight: 'bold',
    marginLeft: 10,
  },
    error: {
    color: 'red',
    fontFamily: theme.fonts.main.RobotoRegular,
    fontSize: theme.fonts.sizeStyle.loginTitle,
    marginTop: 4,
  },
});
