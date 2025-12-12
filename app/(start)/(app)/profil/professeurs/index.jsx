import { Ionicons } from '@expo/vector-icons';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function TeachersList() {
  // Données des enseignants (à remplacer par des données dynamiques)
  const teachers = [
    {
      id: 1,
      name: 'Dr. Émilie Dubois',
      avatar: 'https://images.unsplash.com/photo-1762331660026-ff27a40f2875?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      students: 120,
      experience: 3500,
      subject: 'Mathématiques',
      subjectColor: '#E8F5F3',
    },
    {
      id: 2,
      name: 'Prof. Laurent Garcia',
      avatar: 'https://images.unsplash.com/photo-1714974528959-d082e5053d9d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      students: 95,
      experience: 2800,
      subject: 'Informatique',
      subjectColor: '#E8F5F3',
    },
    {
      id: 3,
      name: 'Mme. Sophie Lefevre',
      avatar: 'https://images.unsplash.com/photo-1762331660026-ff27a40f2875?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      students: 150,
      experience: 4100,
      subject: 'Physique',
      subjectColor: '#E8F5F3',
    },
    {
      id: 4,
      name: 'Dr. Marc Bertrand',
      avatar: 'https://images.unsplash.com/photo-1714974528959-d082e5053d9d?q=80&w=1332&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      students: 80,
      experience: 2200,
      subject: 'Biologie',
      subjectColor: '#E8F5F3',
    },
  ];

  const handleBookSession = (teacherName) => {
    console.log(`Réserver une session avec ${teacherName}`);
    // Navigation ou logique de réservation
  };

  return (
    <ScrollView style={styles.container} showsVerticalScrollIndicator={false}>
      {teachers.map((teacher, index) => (
        <View key={teacher.id}>
          <TeacherCard
            teacher={teacher}
            onBookSession={() => handleBookSession(teacher.name)}
          />
          {/* Séparateur visuel entre les cartes */}
          {index < teachers.length - 1 && <View style={styles.separator} />}
        </View>
      ))}

      {/* Espacement en bas */}
      <View style={styles.bottomSpacing} />
    </ScrollView>
  );
}

// Composant pour chaque carte d'enseignant
const TeacherCard = ({ teacher, onBookSession }) => (
  <View style={styles.card}>
    {/* En-tête avec avatar et infos */}
    <View style={styles.header}>
      <Image
        source={{ uri: teacher.avatar }}
        style={styles.avatar}
      />
      <View style={styles.headerInfo}>
        <Text style={styles.teacherName}>{teacher.name}</Text>
        
        <View style={styles.statRow}>
          <Ionicons name="people-outline" size={16} color="#666" />
          <Text style={styles.statText}>{teacher.students} étudiants suivis</Text>
        </View>
        
        <View style={styles.statRow}>
          <Ionicons name="trophy-outline" size={16} color="#666" />
          <Text style={styles.statText}>{teacher.experience} points d'expérience</Text>
        </View>
      </View>
    </View>

    {/* Badge de matière */}
    <View style={[styles.subjectBadge, { backgroundColor: teacher.subjectColor }]}>
      <Text style={styles.subjectText}>{teacher.subject}</Text>
    </View>

    {/* Bouton de réservation */}
    <TouchableOpacity style={styles.bookButton} onPress={onBookSession}>
      <Ionicons name="calendar-outline" size={20} color="#FFF" />
      <Text style={styles.bookButtonText}>Réserver une session</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    padding: 20,
    paddingTop: 10
  },
  card: {
    backgroundColor: '#FFF',
    paddingVertical: 20,
    paddingHorizontal: 16,
  },
  separator: {
    height: 8,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    marginBottom: 16,
  },
  avatar: {
    width: 80,
    height: 80,
    borderRadius: 40,
    backgroundColor: '#E0E0E0',
  },
  headerInfo: {
    marginLeft: 16,
    flex: 1,
    justifyContent: 'center',
  },
  teacherName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 8,
  },
  statRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  statText: {
    fontSize: 13,
    color: '#666',
    marginLeft: 6,
  },
  subjectBadge: {
    alignSelf: 'flex-start',
    paddingHorizontal: 16,
    paddingVertical: 6,
    borderRadius: 16,
    marginBottom: 16,
  },
  subjectText: {
    fontSize: 13,
    color: '#00A884',
    fontWeight: '500',
  },
  bookButton: {
    flexDirection: 'row',
    backgroundColor: '#005C45',
    paddingVertical: 14,
    borderRadius: 8,
    alignItems: 'center',
    justifyContent: 'center',
  },
  bookButtonText: {
    color: '#FFF',
    fontSize: 16,
    fontWeight: '600',
    marginLeft: 8,
  },
  bottomSpacing: {
    height: 20,
  },
});