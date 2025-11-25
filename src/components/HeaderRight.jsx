import { Ionicons } from '@expo/vector-icons';
import { useRouter } from 'expo-router';
import { Image, StyleSheet, TouchableOpacity, View } from 'react-native';

export default function HeaderRight({ showProfile = true }) {
  const router = useRouter();
  
  return (
    <View style={styles.headerRight}>
      {/* Icône de notification cliquable */}
      <TouchableOpacity 
        style={styles.notificationButton}
        onPress={() => router.push('/notifications')}
        activeOpacity={0.7}
      >
        <Ionicons name="notifications-outline" color="rgb(0, 92, 69)" size={26} />
      </TouchableOpacity>
      
      {/* Photo de profil cliquable - affichée conditionnellement */}
      {showProfile && (
        <TouchableOpacity 
          style={styles.profileButton}
          onPress={() => router.push('/profil')}
          activeOpacity={0.7}
        >
          <Image 
            source={require('../../assets/images/userProfil.jpg')}
            style={styles.profileImage}
          />
        </TouchableOpacity>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 15,
    gap: 15,
  },
  notificationButton: {
    padding: 4,
  },
  profileButton: {
    // Pas de padding pour garder l'image compacte
  },
  profileImage: {
    width: 36,
    height: 36,
    borderRadius: 18,
    borderWidth: 2,
    borderColor: 'rgb(0, 92, 69)',
  },
});