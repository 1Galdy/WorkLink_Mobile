import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function MentorsList() {
  // Données des mentors (à remplacer par des données dynamiques)
  const mentors = [
    {
      id: 1,
      name: 'Dr. Émilie Dubois',
      avatar: 'https://images.unsplash.com/photo-1699220274995-a37956b7e43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      students: 125,
      contracts: 48,
      experience: 3,
    },
    {
      id: 2,
      name: 'Pr. Antoine Lefevre',
      avatar: 'https://images.unsplash.com/photo-1762331660026-ff27a40f2875?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      students: 98,
      contracts: 35,
      experience: 5,
    },
    {
      id: 3,
      name: 'Mme. Sophie Bernard',
      avatar: 'https://images.unsplash.com/photo-1714974528959-d082e5053d9d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      students: 150,
      contracts: 60,
      experience: 2,
    },
    {
      id: 4,
      name: 'M. Marc Moreau',
      avatar: 'https://images.unsplash.com/photo-1699220274995-a37956b7e43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      students: 70,
      contracts: 25,
      experience: 4,
    },
    {
      id: 5,
      name: 'Dre. Camille Petit',
      avatar: 'https://images.unsplash.com/photo-1714974528959-d082e5053d9d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      students: 110,
      contracts: 40,
      experience: 3,
    },
  ];

  const handleSendMessage = (mentorName) => {
    console.log(`Envoyer un message à ${mentorName}`);
    // Navigation vers la messagerie
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {mentors.map((mentor) => (
        <MentorCard
          key={mentor.id}
          mentor={mentor}
          onSendMessage={() => handleSendMessage(mentor.name)}
        />
      ))}

      {/* Espacement en bas */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

// Composant pour chaque carte de mentor
const MentorCard = ({ mentor, onSendMessage }) => (
  <View style={styles.card}>
    {/* En-tête avec avatar et nom */}
    <View style={styles.header}>
      <Image
        source={{ uri: mentor.avatar }}
        style={styles.avatar}
      />
      <Text style={styles.mentorName}>{mentor.name}</Text>
    </View>

    {/* Statistiques */}
    <View style={styles.statsContainer}>
      <View style={styles.statRow}>
        <Ionicons name="people-outline" size={16} color="#00695C" />
        <Text style={styles.statText}>{mentor.students} Apprenants suivis</Text>
      </View>
      
      <View style={styles.statRow}>
        <Ionicons name="document-text-outline" size={16} color="#00695C" />
        <Text style={styles.statText}>{mentor.contracts} Contrats sécurisés</Text>
      </View>
      
      <View style={styles.statRow}>
        <Ionicons name="star-outline" size={16} color="#00695C" />
        <Text style={styles.statText}>{mentor.experience} ans d'ancienneté</Text>
      </View>
    </View>

    {/* Bouton d'envoi de message */}
    <TouchableOpacity style={styles.messageButton} onPress={onSendMessage}>
      <Ionicons name="chatbubble-outline" size={18} color="#FFF" />
      <Text style={styles.messageButtonText}>Envoyer un message</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    paddingTop: 16,
  },
  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginBottom: 16,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  header: {
    alignItems: 'center',
    marginBottom: 16,
  },
  avatar: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: '#E0E0E0',
    marginBottom: 12,
  },
  mentorName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#00695C',
    textAlign: 'center',
  },
  statsContainer: {
    marginBottom: 16,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  statText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 8,
  },
  messageButton: {
    flexDirection: 'row',
    backgroundColor: '#00695C',
    paddingVertical: 12,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  messageButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
    marginLeft: 8,
  },
  bottomSpacing: {
    height: 20,
  },
});