import { StyleSheet, Text, TextInput, View } from 'react-native';

//Thème/style de l'application
import { theme } from "../../../../../src/theme/themeGlobal";

export default function Input({text, placeholder, type, boolean, value, onChangeText, onBlur, error, touched}){
  
 const showError = error && touched;

 return(
    <View style={styles.container}>
        <Text style={styles.texte}>{text}</Text>
        <TextInput style={styles.input} placeholder={placeholder} placeholderTextColor="#999" keyboardType={type} secureTextEntry={boolean} value={value} onChangeText={onChangeText} onBlur={onBlur} />
        {showError && <Text style={styles.error}>{error}</Text>}
    </View>
 );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 16,
    width: '100%',
  },
  texte: {
    fontFamily: theme.fonts.main.RobotoRegular,
    fontSize: theme.fonts.sizeStyle.texte,
    fontWeight: theme.fonts.sizeStyle.fontWeight,
  },
  label: {
    fontFamily: theme.fonts.main.RobotoRegular,
    marginBottom: 6,
    fontSize: theme.fonts.sizeStyle.texte,
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
    fontFamily: theme.fonts.main.RobotoRegular,
    color: 'red',
    marginTop: 4,
    fontSize: theme.fonts.sizeStyle.texte,
  },
});