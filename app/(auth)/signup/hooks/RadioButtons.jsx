import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';

export default function RadioButtons({ value, onChange, error, touched }) {
  const options = [
    { label: "Particulier", value: "particulier" },
    { label: "Entreprise", value: "entreprise" },
  ];

  const showError = error && touched;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Vous êtes :</Text>

      <View style={styles.radioWrapper}>
        {options.map((option) => (
          <RadioOption
            key={option.value}
            label={option.label}
            value={option.value}
            selected={value}
            setSelected={onChange}
          />
        ))}
      </View>

      {showError && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

function RadioOption({ label, value, selected, setSelected }) {
  const isSelected = selected === value;

  return (
    <Pressable
      onPress={() => setSelected(value)}
      style={[
        styles.option,
        isSelected ? styles.optionSelected : styles.optionUnselected,
      ]}
    >
      <Text style={isSelected ? styles.textSelected : styles.textUnselected}>
        {label}
      </Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 15,
  },
  label: {
    fontSize: 16,
    marginBottom: 10,
  },
  radioWrapper: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'lightgray',
    borderRadius: 8,
    padding: 10,
    gap: 5,
    width: "100%"
  },
  option: {
    width: "49%",
    alignItems: 'center',
    paddingVertical: 10,
    borderRadius: 6,
    borderWidth: 1,
  },
  optionSelected: {
    backgroundColor: 'rgb(0, 92, 69)',
    borderColor: 'rgb(0, 92, 69)',
  },
  optionUnselected: {
    backgroundColor: 'white',
    borderColor: 'gray',
  },
  textSelected: {
    color: 'white',
    fontWeight: 'bold',
  },
  textUnselected: {
    color: 'black',
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});
