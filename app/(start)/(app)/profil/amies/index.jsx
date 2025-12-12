import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Alert,
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
} from 'react-native';

export default function FriendsList() {
  // Barre de recherche
  const [searchQuery, setSearchQuery] = useState('');

  // Liste de tous les amis/membres
  const [friends, setFriends] = useState([
    {
      id: 1,
      name: 'Dr. Émilie Dubois',
      subtitle: 'Mathématiques • Mentor',
      avatar: 'https://images.unsplash.com/photo-1737306284207-1a6f8db27b5a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      addedBy: 'me', // 'me' = j'ai ajouté, 'them' = ils m'ont ajouté
      status: 'connected', // connected = ami
    },
    {
      id: 2,
      name: 'Prof. Laurent Garcia',
      subtitle: 'Informatique • Professeur',
      avatar: 'https://images.unsplash.com/photo-1699220274995-a37956b7e43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      addedBy: 'them',
      status: 'connected',
    },
    {
      id: 3,
      name: 'Mme. Sophie Lefevre',
      subtitle: 'Physique • Mentor',
      avatar: 'https://images.unsplash.com/photo-1737306284207-1a6f8db27b5a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      addedBy: 'me',
      status: 'connected',
    },
    {
      id: 4,
      name: 'Dr. Marc Bertrand',
      subtitle: 'Biologie • Professeur',
      avatar: 'https://images.unsplash.com/photo-1699220274995-a37956b7e43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      addedBy: 'them',
      status: 'connected',
    },
    {
      id: 5,
      name: 'Dre. Camille Petit',
      subtitle: 'Chimie • Mentor',
      avatar: 'https://images.unsplash.com/photo-1762331660026-ff27a40f2875?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      addedBy: 'me',
      status: 'connected',
    },
  ]);

  // Fonction pour supprimer un ami
  const handleRemoveFriend = (friendId, friendName) => {
    Alert.alert(
      'Retirer de vos contacts',
      `Êtes-vous sûr de vouloir retirer ${friendName} de vos contacts ?`,
      [
        { text: 'Annuler', style: 'cancel' },
        {
          text: 'Retirer',
          style: 'destructive',
          onPress: () => {
            setFriends(prev => prev.filter(friend => friend.id !== friendId));
            console.log(`${friendName} retiré de vos contacts`);
          }
        }
      ]
    );
  };

  // Fonction pour envoyer un message
  const handleSendMessage = (friendName) => {
    console.log(`Ouvrir la conversation avec ${friendName}`);
    // Navigation vers la messagerie
  };

  // Fonction pour voir le profil
  const handleViewProfile = (friendName) => {
    console.log(`Voir le profil de ${friendName}`);
    // Navigation vers le profil
  };

  // Filtrer les amis selon la recherche
  const filteredFriends = friends.filter(friend =>
    friend.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    friend.subtitle.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <View style={styles.container}>
      {/* Barre de recherche */}
      <View style={styles.searchContainer}>
        <Ionicons name="search-outline" size={20} color="#999" style={styles.searchIcon} />
        <TextInput
          style={styles.searchInput}
          placeholder="Rechercher un ami..."
          placeholderTextColor="#999"
          value={searchQuery}
          onChangeText={setSearchQuery}
        />
        {searchQuery.length > 0 && (
          <TouchableOpacity onPress={() => setSearchQuery('')}>
            <Ionicons name="close-circle" size={20} color="#999" />
          </TouchableOpacity>
        )}
      </View>

      {/* Nombre total d'amis */}
      <View style={styles.countContainer}>
        <Text style={styles.countText}>
          {filteredFriends.length} ami{filteredFriends.length > 1 ? 's' : ''}
        </Text>
      </View>

      {/* Liste des amis */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {filteredFriends.length > 0 ? (
          filteredFriends.map((friend) => (
            <FriendCard
              key={friend.id}
              friend={friend}
              onRemove={() => handleRemoveFriend(friend.id, friend.name)}
              onMessage={() => handleSendMessage(friend.name)}
              onViewProfile={() => handleViewProfile(friend.name)}
            />
          ))
        ) : (
          // Message si aucun résultat
          <View style={styles.emptyContainer}>
            <Ionicons name="people-outline" size={60} color="#CCC" />
            <Text style={styles.emptyText}>Aucun ami trouvé</Text>
            <Text style={styles.emptySubtext}>
              {searchQuery ? 'Essayez une autre recherche' : 'Vous n\'avez pas encore d\'amis'}
            </Text>
          </View>
        )}

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

// ========================================
// CARTE POUR CHAQUE AMI
// ========================================
const FriendCard = ({ friend, onRemove, onMessage, onViewProfile }) => {
  // État pour gérer le menu d'options (3 points)
  const [showMenu, setShowMenu] = useState(false);

  return (
    <View style={styles.card}>
      {/* En-tête avec avatar et infos */}
      <TouchableOpacity 
        style={styles.cardHeader}
        onPress={onViewProfile}
        activeOpacity={0.7}
      >
        <Image source={{ uri: friend.avatar }} style={styles.avatar} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{friend.name}</Text>
          <Text style={styles.cardSubtitle}>{friend.subtitle}</Text>
          
          {/* Badge indiquant qui a ajouté qui */}
          <View style={styles.addedByContainer}>
            <Ionicons 
              name={friend.addedBy === 'me' ? 'person-add-outline' : 'person-outline'} 
              size={12} 
              color="#999" 
            />
            <Text style={styles.addedByText}>
              {friend.addedBy === 'me' ? 'Vous avez ajouté' : 'Vous a ajouté'}
            </Text>
          </View>
        </View>

        {/* Menu 3 points */}
        <TouchableOpacity 
          style={styles.menuButton}
          onPress={() => setShowMenu(!showMenu)}
        >
          <Ionicons name="ellipsis-vertical" size={20} color="#666" />
        </TouchableOpacity>
      </TouchableOpacity>

      {/* Menu déroulant (si activé) */}
      {showMenu && (
        <View style={styles.menuDropdown}>
          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              setShowMenu(false);
              onViewProfile();
            }}
          >
            <Ionicons name="person-outline" size={18} color="#333" />
            <Text style={styles.menuItemText}>Voir le profil</Text>
          </TouchableOpacity>

          <TouchableOpacity 
            style={styles.menuItem}
            onPress={() => {
              setShowMenu(false);
              onRemove();
            }}
          >
            <Ionicons name="person-remove-outline" size={18} color="#FF3B30" />
            <Text style={[styles.menuItemText, styles.menuItemTextDanger]}>
              Retirer des contacts
            </Text>
          </TouchableOpacity>
        </View>
      )}

      {/* Bouton d'action principal */}
      <TouchableOpacity style={styles.messageButton} onPress={onMessage}>
        <Ionicons name="chatbubble-outline" size={18} color="#FFF" />
        <Text style={styles.messageButtonText}>Envoyer un message</Text>
      </TouchableOpacity>
    </View>
  );
};

// ========================================
// STYLES
// ========================================
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },

  // Barre de recherche
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginTop: 16,
    marginBottom: 12,
    paddingHorizontal: 12,
    paddingVertical: 10,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#E0E0E0',
  },
  searchIcon: {
    marginRight: 8,
  },
  searchInput: {
    flex: 1,
    fontSize: 15,
    color: '#333',
  },

  // Compteur d'amis
  countContainer: {
    paddingHorizontal: 16,
    marginBottom: 12,
  },
  countText: {
    fontSize: 14,
    color: '#666',
    fontWeight: '500',
  },

  // Liste
  scrollView: {
    flex: 1,
  },

  // Carte d'ami
  card: {
    backgroundColor: '#FFF',
    marginHorizontal: 16,
    marginBottom: 12,
    borderRadius: 12,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 25,
    backgroundColor: '#E0E0E0',
  },
  cardInfo: {
    marginLeft: 12,
    flex: 1,
  },
  cardName: {
    fontSize: 16,
    fontWeight: '600',
    color: '#333',
    marginBottom: 2,
  },
  cardSubtitle: {
    fontSize: 13,
    color: '#666',
    marginBottom: 4,
  },
  addedByContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 2,
  },
  addedByText: {
    fontSize: 11,
    color: '#999',
    marginLeft: 4,
    fontStyle: 'italic',
  },

  // Menu 3 points
  menuButton: {
    padding: 4,
  },
  menuDropdown: {
    backgroundColor: '#FFF',
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    marginBottom: 12,
    overflow: 'hidden',
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#F5F5F5',
  },
  menuItemText: {
    fontSize: 14,
    color: '#333',
    marginLeft: 12,
  },
  menuItemTextDanger: {
    color: '#FF3B30',
  },

  // Bouton d'envoi de message
  messageButton: {
    flexDirection: 'row',
    backgroundColor: '#00A884',
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

  // État vide
  emptyContainer: {
    alignItems: 'center',
    justifyContent: 'center',
    paddingTop: 80,
  },
  emptyText: {
    fontSize: 18,
    fontWeight: '600',
    color: '#999',
    marginTop: 16,
  },
  emptySubtext: {
    fontSize: 14,
    color: '#BBB',
    marginTop: 8,
  },

  bottomSpacing: {
    height: 20,
  },
});