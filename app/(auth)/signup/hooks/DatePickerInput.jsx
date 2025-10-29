import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Platform } from 'react-native';
import DateTimePicker from '@react-native-community/datetimepicker';

export default function DatePickerInput({ value, onChange, onBlur, error, touched }) {
  const [showPicker, setShowPicker] = useState(false);

  const handleChange = (event, selectedDate) => {
    setShowPicker(false);
    if (selectedDate) {
      onChange(selectedDate); // Met à jour formik
    }
  };

  const formatDate = (date) => {
    if (!date) return 'Choisissez une date';
    return new Date(date).toLocaleDateString('fr-FR'); // Exemple : 14/10/1997
  };

  const showError = error && touched;

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Date de naissance</Text>

      <TouchableOpacity style={styles.input} onPress={() => setShowPicker(true)}>
        <Text>{formatDate(value)}</Text>
      </TouchableOpacity>

      {showPicker && (
        <DateTimePicker
          value={value ? new Date(value) : new Date()}
          mode="date"
          display="default"
          onChange={handleChange}
          maximumDate={new Date()} // Pas de dates futures
        />
      )}

      {showError && <Text style={styles.error}>{error}</Text>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginBottom: 20,
    width: '100%',
  },
  label: {
    marginBottom: 6,
    fontSize: 16,
    fontWeight: '500',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
  },
  error: {
    color: 'red',
    marginTop: 4,
    fontSize: 12,
  },
});
