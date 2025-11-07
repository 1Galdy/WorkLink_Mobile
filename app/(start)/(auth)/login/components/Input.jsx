import { StyleSheet, Text, TextInput, View } from 'react-native';

//Thème/style de l'application
import { theme } from "../../../../../src/theme/themeGlobal";

export default function Input({ 
  text, 
  placeholder, 
  type, 
  boolean, 
  value, 
  onChangeText, 
  onBlur, 
  error, 
  touched 
}) {
  const showError = error && touched;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>{text}</Text>
      <TextInput
        style={[styles.input, showError && { borderColor: 'red' }]}
        placeholder={placeholder}
        placeholderTextColor="#999"
        keyboardType={type}
        secureTextEntry={boolean}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
      />
      {showError && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  label: {
    fontFamily: theme.fonts.main.RobotoRegular,
    fontWeight: theme.fonts.sizeStyle.fontWeight,
    marginBottom: 6,
    fontSize: theme.fonts.sizeStyle.loginTitle,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    fontFamily: theme.fonts.main.RobotoRegular,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: theme.fonts.sizeStyle.placeholderInput,
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontFamily: theme.fonts.main.RobotoRegular,
    fontSize: theme.fonts.sizeStyle.loginTitle,
  },
});
