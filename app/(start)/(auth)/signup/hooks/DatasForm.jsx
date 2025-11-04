import { useRouter } from "expo-router";
import { useFormik } from "formik";
import { useTranslation } from "react-i18next";
import { Alert } from "react-native";
import * as Yup from "yup";
import { useFormData } from "../hooks/FormContext";

export default function DatasForm(step = 1) {
  const { t, i18n } = useTranslation();
  const router = useRouter();
  const { formData, updateFormData, resetForm } = useFormData();

  // ✅ Maintenant, on crée les schémas APRÈS avoir récupéré `t`
  const firstStepSchema = Yup.object({
    nom: Yup.string()
      .required(t("signup.errorMessage.stepOne.inputName.required"))
      .min(3, t("signup.errorMessage.stepOne.inputName.min"))
      .matches(
        /^[a-zA-ZÀ-ÿ' -]+$/,
        t("signup.errorMessage.stepOne.inputName.matches")
      ),
    prenom: Yup.string()
      .required(t("signup.errorMessage.stepOne.inputFirstName.required"))
      .min(3, t("signup.errorMessage.stepOne.inputFirstName.min"))
      .matches(
        /^[a-zA-ZÀ-ÿ' -]+$/,
        t("signup.errorMessage.stepOne.inputFirstName.matches")
      ),
    email: Yup.string()
      .email(t("signup.errorMessage.stepOne.inputEmail.email"))
      .required(t("signup.errorMessage.stepOne.inputEmail.required")),
    birthday: Yup.date()
      .nullable()
      .required(t("signup.errorMessage.stepOne.inputDate.required"))
      .max(
        new Date(new Date().setFullYear(new Date().getFullYear() - 18)),
        t("signup.errorMessage.stepOne.inputDate.max")
      ),
  });

  const secondStepSchema = Yup.object({
    password: Yup.string()
      .required(t("signup.errorMessage.stepTwo.inputPassword.required"))
      .min(8, t("signup.errorMessage.stepTwo.inputPassword.min"))
      .matches(/[a-zA-Z]/, t("signup.errorMessage.stepTwo.inputPassword.firstMatches"))
      .matches(/\d/, t("signup.errorMessage.stepTwo.inputPassword.secondMatches"))
      .matches(/[!@#$%^&*(),.?\":{}|<>]/, t("signup.errorMessage.stepTwo.inputPassword.thirdMatches")),
    telephone: Yup.string()
      .required(t("signup.errorMessage.stepTwo.inputPhone.required"))
      .matches(/^\+?[0-9]{7,15}$/, t("signup.errorMessage.stepTwo.inputPhone.matches")),
    pays: Yup.string()
      .required(t("signup.errorMessage.stepTwo.inputPays.required"))
      .oneOf(["France", "Congo", "Canada", "Belgique", "Suisse"], t("signup.errorMessage.stepTwo.inputPays.oneOf")),
    statut: Yup.string()
      .required(t("signup.errorMessage.stepTwo.inputStatut.required"))
      .oneOf(["particulier", "entreprise"], t("signup.errorMessage.stepTwo.inputStatut.oneOf")),
  });

  const formik = useFormik({
    initialValues: formData,
    validationSchema: step === 1 ? firstStepSchema : secondStepSchema,
    validateOnChange: true,
    validateOnBlur: true,
    enableReinitialize: true,
    onSubmit: (values) => {
      updateFormData(values);

      if (step === 2) {
        Alert.alert(
          "Infos saisies",
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
