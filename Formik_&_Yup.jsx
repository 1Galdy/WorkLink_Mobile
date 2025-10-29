import React from 'react';
import { View, TextInput, Button, Text, StyleSheet, Alert } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';

// Schéma de validation avec Yup
const validationSchema = Yup.object().shape({
  nom: Yup.string()
    .required('Le nom est requis')
    .min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: Yup.string()
    .email('Email invalide')
    .required('L’email est requis'),
  motDePasse: Yup.string()
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
    .required('Le mot de passe est requis'),
});

const MonFormulaire = () => {
  const handleFormSubmit = (values) => {
    // Affiche les données dans une alerte
    Alert.alert(
      'Données du formulaire',
      `Nom : ${values.nom}\nEmail : ${values.email}\nMot de passe : ${values.motDePasse}`
    );
  };

  return (
    <Formik
      initialValues={{ nom: '', email: '', motDePasse: '' }}
      validationSchema={validationSchema}
      onSubmit={handleFormSubmit}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => (
        <View style={styles.container}>
          {/* Champ Nom */}
          <Text>Nom :</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre nom"
            onChangeText={handleChange('nom')}
            onBlur={handleBlur('nom')}
            value={values.nom}
          />
          {touched.nom && errors.nom && <Text style={styles.error}>{errors.nom}</Text>}

          {/* Champ Email */}
          <Text>Email :</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre email"
            keyboardType="email-address"
            onChangeText={handleChange('email')}
            onBlur={handleBlur('email')}
            value={values.email}
          />
          {touched.email && errors.email && <Text style={styles.error}>{errors.email}</Text>}

          {/* Champ Mot de passe */}
          <Text>Mot de passe :</Text>
          <TextInput
            style={styles.input}
            placeholder="Entrez votre mot de passe"
            secureTextEntry
            onChangeText={handleChange('motDePasse')}
            onBlur={handleBlur('motDePasse')}
            value={values.motDePasse}
          />
          {touched.motDePasse && errors.motDePasse && (
            <Text style={styles.error}>{errors.motDePasse}</Text>
          )}

          {/* Bouton Envoyer */}
          <Button title="Envoyer" onPress={handleSubmit} />
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 16,
    marginTop: 40,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 8,
    borderRadius: 5,
  },
  error: {
    color: 'red',
    fontSize: 12,
    marginBottom: 8,
  },
});

export default MonFormulaire;
