import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-native';

import { useRouter } from "expo-router";

export default function DatasForm(){

    const router = useRouter();

    const formik = useFormik({
    initialValues: {
      nom: '',
      password: '',
    },
    validationSchema: Yup.object({
      nom: Yup.string()
        .required("Le nom est requis")
        .min(3, 'Le nom ne doit contenir au moins 3 caractères')
        .matches(
            /^[a-zA-ZÀ-ÿ' -]+$/,
            "Le nom ne doit contenir que des lettres, espaces, tirets ou apostrophes"
        ),
      password: Yup.string()
        .required('Mot de passe requis')
        .min(8, 'Le mot de passe doit contenir au moins 8 caractères')
        .matches(/[a-zA-Z]/, 'Doit contenir au moins une lettre')
        .matches(/\d/, 'Doit contenir au moins un chiffre')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Doit contenir au moins un caractère spécial'),
    }),
    onSubmit: (values) => {
      Alert.alert('Infos saisies', `Nom : ${values.nom}\nMot de passe : ${values.password}`);
      router.push("/home");
    },
  });

  return formik;
}