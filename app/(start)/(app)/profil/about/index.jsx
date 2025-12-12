import { ScrollView, View } from "react-native";

import Card from './components/card';

export default function About(){

    const datas = [
        {
            "h1": "À Propos",
            "paragraphe": `Notre plateforme permet aux entreprises de publier facilement leurs offres d'emploi et de trouver des candidats qualifiés.

                            Nous mettons également un point d'honneur à accompagner les profils sérieux qui souhaitent fournir les efforts nécessaires pour décrocher un contrat, quel qu'il soit.

                            L'application dispose de services gratuits ainsi que de services payants, que vous pourrez retrouver dans les différentes rubriques de l'application.

                            Nous nous engageons à offrir un service de qualité et à améliorer continuellement notre plateforme pour répondre aux besoins de nos utilisateurs.

                            Vous voulez en savoir plus sur nous ? Rendez-vous dans les différentes rubriques de WorkLink ou visitez notre site internet à l’adresse suivante : www.WorkLinkApp.com.

                            Pour toute question ou assistance, n'hésitez pas à contacter notre équipe de support.`,
        },
        {
            "h1": "FAQ et aide",
            "paragrapheList": [
                {
                    "title": "Comment créer un compte",
                    "paragraphe": `Télécharger l'application sur notre site web via le lien : www.WorkLinkApp.com. Inscrivez-vous à WorkLink via le formulaire d'inscription sur l'application et suivez les étapes`
                },
                {
                    "title": "Comment publier une offre",
                    "paragraphe": `Vous pouvez publier une offre via le bouton publier via la section profil puis renseigner les informations demandés`
                },
                {
                    "title": "Modifier et supprimer une offre",
                    "paragraphe": `Il suffit d'accéder à la liste des posts publier et dessus vous pouvez visualiser l'offre et la modifier ou même la supprimer`
                },
                {
                    "title": "Modifier et supprimer une offre",
                    "paragraphe": `Rendez vous dans profil puis aller sur Contactez notre support`,
                },
            ],
        },
        {
            "h1": "Contactez notre Service Client",
            "paragrapheList": [
                {
                    "title": "Email",
                    "coordonnee": "contact@worklink.fr",
                    "icon": <Text>Icon</Text>,
                },
                {
                    "title": "Contact",
                    "coordonnee": "+33123456789",
                    "icon": <Text>Icon</Text>,
                },
                {
                    "title": "Location",
                    "coordonnee": "123 Rue de l'Emploi, 75001 Paris, France",
                    "icon": <Text>Icon</Text>,
                },
            ],
        },
        {
            "paragraphe": `Vous préférez envoyé un mail via notre formulaire ou découvrir d'autres sevices à contactez en cas de besoin, allez sur :
 www.WorkLinkApp.com`
        },
        {
            "paragraphe": `Si vous avez besoin d'aide, n'hésitez pas à nous envoyer un message. Nous serons ravis de vous venir en aide en vous apportant un service de qualité.`
        }
    ]

    return(
        <View style={{flex: 1, padding: 20}}>
            <ScrollView showsVerticalScrollIndicator={false}>
                {datas.map((item, i) => (
                    <Card
                    key={i}
                    h1={item.h1}
                    paragraphe={item.paragraphe}
                    paragrapheList={item.paragrapheList}
                    />
                ))}
            </ScrollView>
        </View>
    );
}

// const styles = StyleSheet.create({

// })