import {StyleSheet , Text, TouchableOpacity, View} from 'react-native';

export default function Input({onPress, title, color}){
 return(
    <View>
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    </View>
 );
}

const styles = StyleSheet.create({
  button: {
    backgroundColor: 'rgb(0, 92, 69)',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 30,
    marginBottom: 20,
  },
  text: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});