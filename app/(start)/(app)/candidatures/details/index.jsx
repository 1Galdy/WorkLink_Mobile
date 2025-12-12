import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from 'react-native';

export default function CompanyInfo() {
  // Données de l'entreprise (à remplacer par des données dynamiques)
  const companyData = {
    name: 'JobLink Corporation',
    tagline: 'Innover pour l\'emploi de demain',
    email: 'contact@joblink.fr',
    phone: '+33 1 23 45 67 89',
    address1: '123 Rue de l\'Emploi, 75001 Paris, France',
    address2: '123 Rue de l\'Emploi, 75001 Paris, France',
    avatar: 'https://businesstech.co.za/news/wp-content/uploads/2016/01/MTN-logo-yellow-300x202.jpg',
    presentation: [
      "Nous aidons nos clients à prendre soin d'eux et de leur maison, depuis plus de 20 ans. Par le biais de nos agences de proximité partout en France, nous proposons des services à domicile personnalisés : ménage & repassage, maintien à domicile, garde d'enfant, jardinage, nettoyage de bureau. Chez Domialiance, le bien-être de nos salariés est au cœur de nos priorités.",
      "Vous serez intégré à une équipe dynamique et collaborative, travaillant sur des projets stimulants avec des technologies modernes. Nous encourageons le développement professionnel continu et offrons un environnement de travail qui valorise l'innovation et le partage de connaissances.",
      "Rejoignez une entreprise où votre talent sera reconnu et où vous pourrez réellement faire la différence."
    ]
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {/* Section Mes informations */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="newspaper-outline" size={24} color="#333" />
          <Text style={styles.sectionTitle}>Mes informations</Text>
        </View>

        {/* Avatar et nom de l'entreprise */}
        <View style={styles.companyHeader}>
          <Image
            source={{ uri: companyData.avatar }}
            style={styles.avatar}
          />
          <View style={styles.companyInfo}>
            <Text style={styles.companyName}>{companyData.name}</Text>
            <Text style={styles.companyTagline}>{companyData.tagline}</Text>
          </View>
        </View>

        {/* Informations de contact */}
        <View style={styles.contactSection}>
          <ContactItem
            icon="mail-outline"
            text={companyData.email}
          />
          <ContactItem
            icon="call-outline"
            text={companyData.phone}
          />
          <ContactItem
            icon="location-outline"
            text={companyData.address1}
          />
          <ContactItem
            icon="location-outline"
            text={companyData.address2}
          />
        </View>
      </View>

      {/* Section Présentation */}
      <View style={styles.section}>
        <View style={styles.sectionHeader}>
          <Ionicons name="document-text-outline" size={24} color="#333" />
          <Text style={styles.sectionTitle}>Présentation</Text>
        </View>

        <View style={styles.presentationContent}>
          {companyData.presentation.map((paragraph, index) => (
            <Text key={index} style={styles.paragraph}>
              {paragraph}
            </Text>
          ))}
        </View>
      </View>

      {/* Espacement en bas */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

// Composant pour les éléments de contact
const ContactItem = ({ icon, text }) => (
  <View style={styles.contactItem}>
    <Ionicons name={icon} size={20} color="#666" style={styles.contactIcon} />
    <Text style={styles.contactText}>{text}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  section: {
    backgroundColor: '#FFF',
    marginBottom: 16,
    paddingVertical: 20,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginLeft: 8,
  },
  companyHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginBottom: 20,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E0E0',
  },
  companyInfo: {
    marginLeft: 16,
    flex: 1,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 4,
  },
  companyTagline: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
  },
  contactSection: {
    paddingHorizontal: 16,
  },
  contactItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 12,
  },
  contactIcon: {
    marginRight: 12,
    marginTop: 2,
  },
  contactText: {
    fontSize: 14,
    color: '#333',
    flex: 1,
    lineHeight: 20,
  },
  presentationContent: {
    paddingHorizontal: 16,
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
    marginBottom: 16,
    textAlign: 'justify',
  },
  bottomSpacing: {
    height: 20,
  },
});