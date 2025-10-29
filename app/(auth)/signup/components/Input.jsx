import {StyleSheet, TextInput, Text, View} from 'react-native';

export default function Input({text, placeholder, type, boolean, value, onChangeText, onBlur, error, touched}){
  
 const showError = error && touched;

 return(
    <View style={styles.container}>
        <Text>{text}</Text>
        <TextInput style={styles.input} placeholder={placeholder} keyboardType={type} secureTextEntry={boolean} value={value} onChangeText={onChangeText} onBlur={onBlur} />
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
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '500',
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});