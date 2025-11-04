import { useFormik } from 'formik';
import * as Yup from 'yup';
import { Alert } from 'react-native';

import { useRouter } from "expo-router";

//Faire le choix de la langue
import { useTranslation } from "react-i18next";

export default function DatasForm(){

    const { t} = useTranslation();

    const router = useRouter();

    const formik = useFormik({
    initialValues: {
      nom: '',
      password: '',
    },
    validationSchema: Yup.object({
      nom: Yup.string()
        .required(t("login.errorMessage.inputName.required"))
        .min(3, 'login.errorMessage.inputName.min')
        .matches(
            /^[a-zA-ZÀ-ÿ' -]+$/,
            t("login.errorMessage.inputName.matches")
        ),
      password: Yup.string()
        .required(t("login.errorMessage.inputPassword.required"))
        .min(8, 'login.errorMessage.inputPassword.min')
        .matches(/[a-zA-Z]/, 'login.errorMessage.inputPassword.firstMatches')
        .matches(/\d/, 'login.errorMessage.inputPassword.secondMatches')
        .matches(/[!@#$%^&*(),.?":{}|<>]/, 'login.errorMessage.inputPassword.thirdMatches'),
    }),
    onSubmit: (values) => {
      Alert.alert('Infos saisies', `Nom : ${values.nom}\nMot de passe : ${values.password}`);
      router.push("/home");
    },
  });

  return formik;
}