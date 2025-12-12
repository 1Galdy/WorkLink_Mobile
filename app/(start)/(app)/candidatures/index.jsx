import { Ionicons } from '@expo/vector-icons';
import { useRouter } from "expo-router";
import { useState } from 'react';
import {
    Image,
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native';

export default function JobOfferDetail() {

  const router = useRouter();

  const [isExpanded, setIsExpanded] = useState(false);

  // Données de l'offre (à remplacer par des données dynamiques)
  const jobData = {
    company: 'MTN',
    postedDate: '05/08/2025 • 14h30',
    title: 'Développeur Full-Stack H/F',
    subtitle: "Résumé de l'offre",
    details: {
      salaire: '35 kF',
      localisation: 'Cameroun',
      contrat: 'Freelance',
      experience: '3 à 5 ans',
      niveau: 'BAC+5',
      langue: 'Français',
      condition: 'CDI/CDD/Seulement',
      teletravail: 'Télétravail partiel'
    },
    skills: ['Node.js', 'React.js', 'Express.js'],
    missions: [
      "Développer des fonctionnalités backend et frontend en utilisant Node.js, Express, React.js et PostgreSQL.",
      "Collaborer avec les équipes produit, UX/UI et technique pour concevoir des solutions actuelles et maintenables.",
      "Assurer la qualité du code et contribuer aux tests automatisés et à la rédaction des spécifications.",
      "Aider à l'optimisation des performances et sécurité nécessaires au bon développement du projet.",
      "Participer à des revues de code, contribuer aux discussions d'architecture et informatiques analytiques etou mobile."
    ],
    profile: [
      "Suivre la mise en production, déploiement et monitoring des stratégiques.",
      "Participation à la maintenance corrective et évolutive."
    ],
    search: [
      "Bon relationnel et esprit d'équipe",
      "Capacités d'encadrement, d'adaptation et de proactivité",
      "Autonomie, rigueur, bon sens de l'analyse",
      "Une première expérience en contexte agile serait un avantage"
    ],
    presentation: "Nous sollicitons nos clients à prendre soin d'eux et de leur famille. Situé en plus de 200 ans. Par le biais de nos agences du personnel dédié et l'emploi, nous constituons l'un des partenaires du personnel - manager à l'échelle internationale du recrutement de professionnel. Nous sélectionnons par le développement d'intelligences Distribuées, le bien-être de nos salariés est au cœur de nos priorités.",
    whyJoin: "Vous serez intégré à une équipe dynamique et collaborative, travaillez sur des projets ambitieux dans un environnement technologique moderne. Nous encourageons le développement professionnel et accompagnons chacun dans la progression de ses compétences et participent à l'innovation et au partage de nos clients.",
    difference: "Rejoignez une entreprise où votre talent contribue à faire grandir les équipes. Ensemble, faisons la différence."
  };

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {/* En-tête avec logo */}
        <View style={styles.header}>
          <Pressable
            onPress={() => router.push(`/candidatures/details`)}
          >
            <Image
                source={{ uri: 'https://businesstech.co.za/news/wp-content/uploads/2016/01/MTN-logo-yellow-300x202.jpg' }}
                style={styles.logo}
            />
          </Pressable>
          <View style={styles.headerInfo}>
            <Text style={styles.companyName}>{jobData.company}</Text>
            <Text style={styles.postedDate}>{jobData.postedDate}</Text>
          </View>
        </View>

        {/* Titre */}
        <Text style={styles.jobTitle}>{jobData.title}</Text>
        <Text style={styles.subtitle}>{jobData.subtitle}</Text>

        {/* Détails en grille */}
        <View style={styles.detailsGrid}>
          <DetailItem label="Salaire" value={jobData.details.salaire} />
          <DetailItem label="Localisation" value={jobData.details.localisation} />
          <DetailItem label="Contrat" value={jobData.details.contrat} />
          <DetailItem label="Expérience" value={jobData.details.experience} />
          <DetailItem label="Niveau" value={jobData.details.niveau} />
          <DetailItem label="Langue" value={jobData.details.langue} />
          <DetailItem label="Condition" value={jobData.details.condition} />
          <DetailItem label="Télétravail" value={jobData.details.teletravail} />
        </View>

        {/* Lien du site */}
        <TouchableOpacity style={styles.linkContainer}>
          <Text style={styles.link}>https://exemple.com</Text>
          <Ionicons name="open-outline" size={16} color="#007AFF" />
        </TouchableOpacity>

        {/* Compétences requises */}
        <Text style={styles.sectionTitle}>Compétences requises</Text>
        <View style={styles.skillsContainer}>
          {jobData.skills.map((skill, index) => (
            <View key={index} style={styles.skillBadge}>
              <Text style={styles.skillText}>{skill}</Text>
            </View>
          ))}
        </View>

        {/* Les missions du poste */}
        <Text style={styles.sectionTitle}>Les missions du poste</Text>
        {jobData.missions.map((mission, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#00A884" style={styles.checkIcon} />
            <Text style={styles.listText}>{mission}</Text>
          </View>
        ))}

        {/* Le profil recherché */}
        <Text style={styles.sectionTitle}>Le profil recherché</Text>
        {jobData.profile.map((item, index) => (
          <View key={index} style={styles.listItem}>
            <Ionicons name="checkmark-circle" size={20} color="#00A884" style={styles.checkIcon} />
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}

        {/* Le profil recherché (suite) */}
        <Text style={styles.sectionSubtitle}>Bon relationnel et esprit d'équipe</Text>
        {jobData.search.map((item, index) => (
          <View key={index} style={styles.bulletItem}>
            <Text style={styles.bullet}>•</Text>
            <Text style={styles.listText}>{item}</Text>
          </View>
        ))}

        {/* Présentation */}
        <Text style={styles.sectionTitle}>Présentation</Text>
        <Text style={styles.paragraph}>
          {isExpanded ? jobData.presentation + ' ' + jobData.whyJoin + ' ' + jobData.difference : jobData.presentation.substring(0, 200) + '...'}
        </Text>
        
        <TouchableOpacity onPress={() => setIsExpanded(!isExpanded)}>
          <Text style={styles.readMore}>
            {isExpanded ? 'Voir moins' : 'Lire la suite'}
          </Text>
        </TouchableOpacity>

        {/* Espacement pour les boutons fixes */}
        <View style={styles.bottomSpacing} />
      </ScrollView>

      {/* Boutons fixes en bas */}
      <View style={styles.bottomButtons}>
        <TouchableOpacity style={styles.applyButton}>
          <Text style={styles.applyButtonText}>Postuler</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.declineButton}>
          <Text style={styles.declineButtonText}>Pas intéressé</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

// Composant pour les détails en grille
const DetailItem = ({ label, value }) => (
  <View style={styles.detailItem}>
    <Text style={styles.detailLabel}>{label}</Text>
    <Text style={styles.detailValue}>{value}</Text>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  scrollView: {
    flex: 1,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#E0E0E0',
  },
  logo: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#F0F0F0',
  },
  headerInfo: {
    marginLeft: 12,
  },
  companyName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  postedDate: {
    fontSize: 12,
    color: '#999',
    marginTop: 4,
  },
  jobTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 16,
    marginTop: 16,
  },
  subtitle: {
    fontSize: 16,
    color: '#666',
    paddingHorizontal: 16,
    marginTop: 8,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    marginTop: 20,
  },
  detailItem: {
    width: '50%',
    marginBottom: 16,
  },
  detailLabel: {
    fontSize: 12,
    color: '#999',
    marginBottom: 4,
  },
  detailValue: {
    fontSize: 14,
    color: '#333',
    fontWeight: '500',
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
    marginTop: 12,
  },
  link: {
    fontSize: 14,
    color: '#007AFF',
    marginRight: 6,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    paddingHorizontal: 16,
    marginTop: 24,
    marginBottom: 12,
  },
  sectionSubtitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    paddingHorizontal: 16,
    marginTop: 16,
    marginBottom: 8,
  },
  skillsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: 16,
    gap: 8,
  },
  skillBadge: {
    backgroundColor: '#E8F5F3',
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#00A884',
  },
  skillText: {
    fontSize: 14,
    color: '#00A884',
    fontWeight: '500',
  },
  listItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 12,
    alignItems: 'flex-start',
  },
  checkIcon: {
    marginRight: 8,
    marginTop: 2,
  },
  bulletItem: {
    flexDirection: 'row',
    paddingHorizontal: 16,
    marginBottom: 8,
    paddingLeft: 32,
  },
  bullet: {
    fontSize: 16,
    color: '#333',
    marginRight: 8,
  },
  listText: {
    fontSize: 14,
    color: '#333',
    lineHeight: 20,
    flex: 1,
  },
  paragraph: {
    fontSize: 14,
    color: '#333',
    lineHeight: 22,
    paddingHorizontal: 16,
  },
  readMore: {
    fontSize: 14,
    color: '#007AFF',
    paddingHorizontal: 16,
    marginTop: 8,
    fontWeight: '500',
  },
  bottomSpacing: {
    height: 120,
  },
  bottomButtons: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 10,
  },
  applyButton: {
    backgroundColor: '#00A884',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  applyButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
  declineButton: {
    backgroundColor: '#FF3B30',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
  },
  declineButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
  },
});