import DateTimePicker from '@react-native-community/datetimepicker';
import { useState } from 'react';
import { useTranslation } from "react-i18next";
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function DatePickerInput({ value, onChange, onBlur, error, touched }) {

  const { t, i18n } = useTranslation();

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
      <Text style={styles.label}>{t("signup.dateLabel")}</Text>

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
