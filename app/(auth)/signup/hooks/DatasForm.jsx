import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-native';
import { useRouter } from "expo-router";
import { useFormData } from "../hooks/FormContext";

// Schéma de validation pour l'étape 1
const firstStepSchema = Yup.object({
  nom: Yup.string()
    .required("Le nom est requis")
    .min(3, 'Le nom doit contenir au moins 3 caractères')
    .matches(
      /^[a-zA-ZÀ-ÿ' -]+$/,
      "Le nom ne doit contenir que des lettres, espaces, tirets ou apostrophes"
    ),
  prenom: Yup.string()
    .required("Le prénom est requis")
    .min(3, 'Le prénom doit contenir au moins 3 caractères')
    .matches(
      /^[a-zA-ZÀ-ÿ' -]+$/,
      "Le prénom ne doit contenir que des lettres, espaces, tirets ou apostrophes"
    ),
  email: Yup.string()
    .email("Email invalide")
    .required("L'email est requis"),
  birthday: Yup.date()
    .nullable()
    .required("Date de naissance requise")
    .max(
      new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
      "Vous devez avoir au moins 18 ans"
    ),
});

// Schéma de validation pour l'étape 2
const secondStepSchema = Yup.object({
  password: Yup.string()
    .required('Mot de passe requis')
    .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
    .matches(/[a-zA-Z]/, 'Doit contenir au moins une lettre')
    .matches(/\d/, 'Doit contenir au moins un chiffre')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Doit contenir au moins un caractère spécial'),
  telephone: Yup.string()
    .required("Le numéro de téléphone est requis")
    .matches(/^\+?[0-9]{7,15}$/, "Numéro invalide"),
  pays: Yup.string()
    .required("Le pays est requis")
    .oneOf(["France", "Congo", "Canada", "Belgique", "Suisse"], "Choisissez un pays valide"),
  statut: Yup.string()
    .required('Faites le choix de votre profil')
    .oneOf(["particulier", "entreprise"], "Choisissez un statut valide"),
});

export default function DatasForm(step = 1) {
  const router = useRouter();
  const { formData, updateFormData, resetForm } = useFormData();

  const formik = useFormik({
    initialValues: formData,
    validationSchema: step === 1 ? firstStepSchema : secondStepSchema,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true, // important pour remettre les données à jour
    onSubmit: (values) => {
      updateFormData(values);

      if (step === 2) {
        // Étape 2 terminée → afficher toutes les données
        Alert.alert(
          'Infos saisies',
          `Nom : ${values.nom}
           Prénom : ${values.prenom}
           Email : ${values.email}
           Date de naissance : ${values.birthday}
           Mot de passe : ${values.password}
           Téléphone : ${values.telephone}
           Pays : ${values.pays}
           Statut : ${values.statut}`
        );

        resetForm();
        router.push("/home");
      }
    },
  });

  return formik;
}
