import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';
import {
    Image,
    ScrollView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
} from 'react-native';

export default function ConnectionRequests() {
  // Toggle entre les demandes reçues et envoyées
  const [activeTab, setActiveTab] = useState('received'); // 'received' ou 'sent'

  // État pour gérer les demandes (simulé - à remplacer par un appel API)
  const [receivedRequests, setReceivedRequests] = useState([
    {
      id: 1,
      name: 'Jhon',
      subtitle: 'Alternance MCD',
      status: 'pending', // pending, accepted, refused
      avatar: 'https://images.unsplash.com/photo-1737306284207-1a6f8db27b5a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 2,
      name: 'Jhon',
      subtitle: 'Alternance MCD',
      status: 'accepted',
      avatar: 'https://images.unsplash.com/photo-1699220274995-a37956b7e43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 3,
      name: 'Jhon',
      subtitle: 'Alternance MCD',
      status: 'refused',
      avatar: 'https://images.unsplash.com/photo-1762331660026-ff27a40f2875?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]);

  const [sentRequests, setSentRequests] = useState([
    {
      id: 4,
      name: 'Jhon',
      subtitle: 'Alternance MCD',
      status: 'pending',
      avatar: 'https://images.unsplash.com/photo-1737306284207-1a6f8db27b5a?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 5,
      name: 'Jhon',
      subtitle: 'Alternance MCD',
      status: 'accepted',
      avatar: 'https://images.unsplash.com/photo-1762331660026-ff27a40f2875?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
    {
      id: 6,
      name: 'Jhon',
      subtitle: 'Alternance MCD',
      status: 'member',
      avatar: 'https://images.unsplash.com/photo-1699220274995-a37956b7e43e?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    },
  ]);

  // Fonction pour accepter une demande reçue
  const handleAccept = (requestId) => {
    setReceivedRequests(prev =>
      prev.map(req =>
        req.id === requestId ? { ...req, status: 'accepted' } : req
      )
    );
  };

  // Fonction pour refuser une demande reçue
  const handleRefuse = (requestId) => {
    setReceivedRequests(prev =>
      prev.map(req =>
        req.id === requestId ? { ...req, status: 'refused' } : req
      )
    );
  };

  // Fonction pour annuler une demande envoyée
  const handleCancel = (requestId) => {
    setSentRequests(prev => prev.filter(req => req.id !== requestId));
  };

  // Fonction pour discuter avec un contact accepté
  const handleDiscuss = (contactName) => {
    console.log(`Ouvrir la discussion avec ${contactName}`);
    // Navigation vers la messagerie
  };

  return (
    <View style={styles.container}>
      {/* Toggle entre Reçues et Envoyées */}
      <View style={styles.tabContainer}>
        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'received' && styles.activeTab
          ]}
          onPress={() => setActiveTab('received')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'received' && styles.activeTabText
          ]}>
            Reçues
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tab,
            activeTab === 'sent' && styles.activeTab
          ]}
          onPress={() => setActiveTab('sent')}
        >
          <Text style={[
            styles.tabText,
            activeTab === 'sent' && styles.activeTabText
          ]}>
            Demandes envoyées
          </Text>
        </TouchableOpacity>
      </View>

      {/* Liste des demandes selon l'onglet actif */}
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        {activeTab === 'received' ? (
          // DEMANDES REÇUES
          receivedRequests.map((request) => (
            <ReceivedRequestCard
              key={request.id}
              request={request}
              onAccept={() => handleAccept(request.id)}
              onRefuse={() => handleRefuse(request.id)}
              onDiscuss={() => handleDiscuss(request.name)}
            />
          ))
        ) : (
          // DEMANDES ENVOYÉES
          sentRequests.map((request) => (
            <SentRequestCard
              key={request.id}
              request={request}
              onCancel={() => handleCancel(request.id)}
              onDiscuss={() => handleDiscuss(request.name)}
            />
          ))
        )}

        <View style={styles.bottomSpacing} />
      </ScrollView>
    </View>
  );
}

// ========================================
// CARTE POUR LES DEMANDES REÇUES
// ========================================
const ReceivedRequestCard = ({ request, onAccept, onRefuse, onDiscuss }) => {
  return (
    <View style={styles.card}>
      {/* Avatar et informations */}
      <View style={styles.cardHeader}>
        <Image source={{ uri: request.avatar }} style={styles.avatar} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{request.name}</Text>
          <Text style={styles.cardSubtitle}>{request.subtitle}</Text>
        </View>

        {/* Badge de statut */}
        {request.status === 'pending' && (
          <View style={[styles.badge, styles.badgePending]}>
            <Text style={styles.badgeText}>Demande reçue</Text>
          </View>
        )}
        {request.status === 'accepted' && (
          <View style={[styles.badge, styles.badgeAccepted]}>
            <Text style={styles.badgeTextAccepted}>Demande accepté</Text>
          </View>
        )}
        {request.status === 'refused' && (
          <View style={[styles.badge, styles.badgeRefused]}>
            <Text style={styles.badgeTextRefused}>Refusée</Text>
          </View>
        )}
      </View>

      {/* Boutons d'action selon le statut */}
      <View style={styles.cardActions}>
        {request.status === 'pending' && (
          <>
            {/* Bouton Refuser (X rouge) */}
            <TouchableOpacity style={styles.rejectButton} onPress={onRefuse}>
              <Ionicons name="close" size={20} color="#FF3B30" />
            </TouchableOpacity>

            {/* Bouton Accepter (✓ vert) */}
            <TouchableOpacity style={styles.acceptButton} onPress={onAccept}>
              <Ionicons name="checkmark" size={20} color="#FFF" />
            </TouchableOpacity>
          </>
        )}

        {request.status === 'accepted' && (
          <>
            {/* Bouton Supprimer (X) */}
            <TouchableOpacity style={styles.deleteButton}>
              <Ionicons name="close" size={20} color="#999" />
            </TouchableOpacity>

            {/* Bouton Discuter */}
            <TouchableOpacity style={styles.discussButton} onPress={onDiscuss}>
              <Text style={styles.discussButtonText}>Discuter</Text>
            </TouchableOpacity>
          </>
        )}

        {request.status === 'refused' && (
          <>
            {/* Bouton Supprimer (X rouge) */}
            <TouchableOpacity style={styles.deleteButtonRed}>
              <Ionicons name="close" size={20} color="#FF3B30" />
            </TouchableOpacity>

            {/* Bouton Discuter désactivé */}
            <TouchableOpacity style={styles.discussButtonDisabled} disabled>
              <Text style={styles.discussButtonTextDisabled}>Discuter</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
    </View>
  );
};

// ========================================
// CARTE POUR LES DEMANDES ENVOYÉES
// ========================================
const SentRequestCard = ({ request, onCancel, onDiscuss }) => {
  return (
    <View style={styles.card}>
      {/* Avatar et informations */}
      <View style={styles.cardHeader}>
        <Image source={{ uri: request.avatar }} style={styles.avatar} />
        <View style={styles.cardInfo}>
          <Text style={styles.cardName}>{request.name}</Text>
          <Text style={styles.cardSubtitle}>{request.subtitle}</Text>
        </View>

        {/* Badge de statut */}
        {request.status === 'pending' && (
          <View style={[styles.badge, styles.badgePending]}>
            <Text style={styles.badgeText}>Demande envoyé</Text>
          </View>
        )}
        {request.status === 'accepted' && (
          <View style={[styles.badge, styles.badgeAccepted]}>
            <Text style={styles.badgeTextAccepted}>Demande accepté</Text>
          </View>
        )}
        {request.status === 'member' && (
          <View style={[styles.badge, styles.badgeMember]}>
            <Text style={styles.badgeTextMember}>Membre</Text>
          </View>
        )}
      </View>

      {/* Boutons d'action selon le statut */}
      <View style={styles.cardActions}>
        {request.status === 'pending' && (
          <>
            {/* Bouton Annuler (X) */}
            <TouchableOpacity style={styles.deleteButton} onPress={onCancel}>
              <Ionicons name="close" size={20} color="#999" />
            </TouchableOpacity>

            {/* Pas de second bouton en attente */}
          </>
        )}

        {request.status === 'accepted' && (
          <>
            {/* Bouton Annuler avec icône check */}
            <TouchableOpacity style={styles.acceptedIconButton}>
              <Ionicons name="checkmark" size={20} color="#FFF" />
            </TouchableOpacity>

            {/* Bouton Discuter */}
            <TouchableOpacity style={styles.discussButton} onPress={onDiscuss}>
              <Ionicons name="chatbubble-outline" size={18} color="#FFF" style={styles.discussIcon} />
              <Text style={styles.discussButtonText}>Discuter</Text>
            </TouchableOpacity>
          </>
        )}

        {request.status === 'member' && (
          <>
            {/* Bouton Annuler (X) */}
            <TouchableOpacity style={styles.deleteButton}>
              <Ionicons name="close" size={20} color="#999" />
            </TouchableOpacity>

            {/* Bouton Discuter (style actif sans icône) */}
            <TouchableOpacity style={styles.discussButtonActive} onPress={onDiscuss}>
              <Text style={styles.discussButtonTextActive}>Discuter</Text>
            </TouchableOpacity>
          </>
        )}
      </View>
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
  
  // Styles pour le toggle Reçues/Envoyées
  tabContainer: {
    flexDirection: 'row',
    backgroundColor: '#FFF',
    paddingHorizontal: 16,
    paddingVertical: 12,
    gap: 12,
  },
  tab: {
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 20,
    backgroundColor: 'transparent',
  },
  activeTab: {
    backgroundColor: '#00695C',
  },
  tabText: {
    fontSize: 15,
    color: '#666',
    fontWeight: '500',
  },
  activeTabText: {
    color: '#FFF',
  },

  // Styles pour la liste
  scrollView: {
    flex: 1,
    paddingTop: 16,
  },
  
  // Styles pour les cartes
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
  },

  // Styles pour les badges de statut
  badge: {
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  badgePending: {
    backgroundColor: '#00695C',
  },
  badgeAccepted: {
    backgroundColor: '#E8F5F3',
  },
  badgeRefused: {
    backgroundColor: '#FFE5E5',
  },
  badgeMember: {
    backgroundColor: '#E8F5F3',
  },
  badgeText: {
    fontSize: 12,
    color: '#FFF',
    fontWeight: '500',
  },
  badgeTextAccepted: {
    fontSize: 12,
    color: '#00A884',
    fontWeight: '500',
  },
  badgeTextRefused: {
    fontSize: 12,
    color: '#FF3B30',
    fontWeight: '500',
  },
  badgeTextMember: {
    fontSize: 12,
    color: '#00695C',
    fontWeight: '500',
  },

  // Styles pour les actions
  cardActions: {
    flexDirection: 'row',
    gap: 8,
  },

  // Boutons d'action - Demandes reçues
  rejectButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
  },
  acceptButton: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#00A884',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  deleteButtonRed: {
    width: 44,
    height: 44,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: '#FF3B30',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discussButton: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#00A884',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discussButtonText: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },
  discussButtonDisabled: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#E0E0E0',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discussButtonTextDisabled: {
    color: '#999',
    fontSize: 15,
    fontWeight: '600',
  },

  // Boutons d'action - Demandes envoyées
  acceptedIconButton: {
    width: 44,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#00A884',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discussIcon: {
    marginRight: 6,
  },
  discussButtonActive: {
    flex: 1,
    height: 44,
    borderRadius: 8,
    backgroundColor: '#00695C',
    justifyContent: 'center',
    alignItems: 'center',
  },
  discussButtonTextActive: {
    color: '#FFF',
    fontSize: 15,
    fontWeight: '600',
  },

  bottomSpacing: {
    height: 20,
  },
});