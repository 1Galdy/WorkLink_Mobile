import { Ionicons } from '@expo/vector-icons';
import * as DocumentPicker from 'expo-document-picker';
import * as ImagePicker from 'expo-image-picker';
import { useState } from 'react';
import {
  Alert,
  FlatList,
  Image,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

// Liste des mots interdits (à mettre dans un fichier séparé en production)
const BANNED_WORDS = [
  'connard',
  'salope',
  'putain',
  'merde',
  'con',
  'idiot',
  'imbécile',
  // Ajoute d'autres mots ici
];

// Fonction pour vérifier et nettoyer le message
const validateMessage = (text) => {
  // 1. Vérifier que le message n'est pas vide ou uniquement des espaces
  if (!text || text.trim().length === 0) {
    return { isValid: false, error: 'Le message ne peut pas être vide' };
  }

  // 2. Limiter la longueur du message (par exemple 1000 caractères)
  if (text.length > 1000) {
    return { isValid: false, error: 'Le message est trop long (max 1000 caractères)' };
  }

  // 3. Bloquer les caractères spéciaux dangereux (injection SQL/XSS)
  const dangerousCharsRegex = /[<>{}[\]\\]/g;
  if (dangerousCharsRegex.test(text)) {
    return { isValid: false, error: 'Caractères interdits détectés (<, >, {, }, [, ], \\)' };
  }

  // 4. Vérifier les mots bannis (insensible à la casse)
  const lowerText = text.toLowerCase();
  const foundBannedWord = BANNED_WORDS.find(word => lowerText.includes(word));
  if (foundBannedWord) {
    return { isValid: false, error: 'Langage inapproprié détecté' };
  }

  // 5. Bloquer les liens suspects (optionnel)
  const suspiciousLinksRegex = /(http|https|ftp):\/\/[^\s]+/gi;
  if (suspiciousLinksRegex.test(text)) {
    return { isValid: false, error: 'Les liens ne sont pas autorisés' };
  }

  // 6. Bloquer le spam (messages répétitifs)
  const repeatingCharsRegex = /(.)\1{10,}/; // 10 caractères identiques consécutifs
  if (repeatingCharsRegex.test(text)) {
    return { isValid: false, error: 'Spam détecté' };
  }

  return { isValid: true, cleanText: text.trim() };
};

export default function ChatConversation() {
  const [message, setMessage] = useState('');
  
  // STOCKAGE DES MESSAGES
  // En production, tu récupèrerais ces données depuis:
  // 1. Une API (fetch/axios) -> const response = await fetch('/api/messages')
  // 2. AsyncStorage (stockage local) -> await AsyncStorage.getItem('messages')
  // 3. Une base de données Firebase/Supabase
  const [messages, setMessages] = useState([
    {
      id: '1',
      text: "Bonjour, je suis intéressé par votre offre d'emploi. Merci de me contacter dès que possible.",
      sender: 'user',
      time: '2025-02-18 10:25',
    },
    {
      id: '2',
      text: "Bonjour Jean, merci de votre intérêt. Nous souhaitons avoir plus d'informations concernant votre parcours. Pourriez-vous nous en dire plus ?",
      sender: 'other',
      time: '2025-02-18 10:30',
    },
    {
      id: '3',
      text: 'Merci beaucoup, je vous envoie mon CV et lettre de motivation. J\'aimerais aussi savoir si l\'entretien se fera en présentiel ou à distance.',
      sender: 'user',
      time: '2025-02-18 10:35',
    },
    {
      id: '4',
      text: "Nous avons bien reçu vos documents. L'entretien se fera en présentiel dans nos locaux. Seriez-vous disponible la semaine prochaine pour un entretien ?",
      sender: 'other',
      time: '2025-02-18 10:40',
    },
    {
      id: '5',
      text: 'Oui je suis disponible la semaine prochaine. Quel jour vous conviendrait le mieux ? Je peux me libérer du lundi au vendredi entre 9h et 17h.',
      sender: 'user',
      time: '2025-02-18 10:45',
    },
  ]);

  // Fonction pour sélectionner une image
  const pickImage = async () => {
    try {
      // Demander la permission d'accès à la galerie
      const permissionResult = await ImagePicker.requestMediaLibraryPermissionsAsync();
      
      if (permissionResult.granted === false) {
        Alert.alert('Permission refusée', 'Vous devez autoriser l\'accès à la galerie');
        return;
      }

      const result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ['images'], // Utiliser un tableau au lieu de MediaType.Images
        allowsEditing: true,
        quality: 1,
      });

      if (!result.canceled) {
        Alert.alert('Image sélectionnée', result.assets[0].uri);
        // En production: uploader l'image vers un serveur
        // const formData = new FormData();
        // formData.append('image', { uri: result.assets[0].uri, type: 'image/jpeg', name: 'photo.jpg' });
        // await fetch('/api/upload', { method: 'POST', body: formData });
      }
    } catch (error) {
      Alert.alert('Erreur', 'Impossible d\'ouvrir la galerie: ' + error.message);
    }
  };

  // Fonction pour sélectionner un document/fichier
  const pickDocument = async () => {
    try {
      const result = await DocumentPicker.getDocumentAsync({
        type: '*/*',
        copyToCacheDirectory: true,
      });

      if (!result.canceled && result.assets && result.assets.length > 0) {
        Alert.alert('Fichier sélectionné', result.assets[0].name);
        // En production: uploader le fichier vers un serveur
      }
    } catch (error) {
      Alert.alert('Erreur', 'Impossible de sélectionner le fichier: ' + error.message);
    }
  };

  // ENVOI DU MESSAGE AVEC VALIDATION
  const handleSend = async () => {
    // Validation du message
    const validation = validateMessage(message);
    
    if (!validation.isValid) {
      Alert.alert('Erreur', validation.error);
      return;
    }

    // Créer le nouveau message
    const newMessage = {
      id: Date.now().toString(),
      text: validation.cleanText,
      sender: 'user',
      time: new Date().toLocaleString('fr-FR', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
      }),
    };

    // Ajouter au state local (affichage immédiat)
    setMessages([...messages, newMessage]);
    setMessage('');

    // EN PRODUCTION: Envoyer à l'API
    /*
    try {
      const response = await fetch('/api/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          conversationId: 'conv_123',
          text: validation.cleanText,
          sender: 'user_456',
        }),
      });
      
      const data = await response.json();
      
      if (!response.ok) {
        Alert.alert('Erreur', 'Impossible d\'envoyer le message');
        // Retirer le message du state si l'envoi échoue
        setMessages(messages);
      }
    } catch (error) {
      Alert.alert('Erreur', 'Problème de connexion');
    }
    */
  };

  const renderMessage = ({ item }) => {
    const isUser = item.sender === 'user';
    
    return (
      <View style={[styles.messageContainer, isUser ? styles.userMessage : styles.otherMessage]}>
        {!isUser && (
          <Image
            source={{ uri: 'https://via.placeholder.com/40' }}
            style={styles.avatar}
          />
        )}
        <View style={[styles.messageBubble, isUser ? styles.userBubble : styles.otherBubble]}>
          {!isUser && <Text style={styles.senderName}>JC Jean</Text>}
          <Text style={[styles.messageText, isUser && styles.userText]}>{item.text}</Text>
          <Text style={[styles.messageTime, isUser && styles.userTime]}>{item.time}</Text>
        </View>
      </View>
    );
  };

  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={0}
    >
      {/* Messages List */}
      <FlatList
        data={messages}
        renderItem={renderMessage}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.messagesList}
        showsVerticalScrollIndicator={false}
      />

      {/* Input Area */}
      <View style={styles.inputContainer}>
        <TouchableOpacity style={styles.attachButton} onPress={pickDocument}>
          <Ionicons name="attach" size={24} color="#666" />
        </TouchableOpacity>
        
        <TouchableOpacity style={styles.imageButton} onPress={pickImage}>
          <Ionicons name="image-outline" size={24} color="#666" />
        </TouchableOpacity>
        
        <TextInput
          style={styles.input}
          placeholder="Écrire votre message..."
          placeholderTextColor="#999"
          value={message}
          onChangeText={setMessage}
          multiline
          numberOfLines={4}
          textAlignVertical="top"
          maxLength={1000}
        />
        
        <TouchableOpacity style={styles.sendButton} onPress={handleSend}>
          <Ionicons name="send" size={20} color="#FFF" />
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  messagesList: {
    paddingHorizontal: 16,
    paddingVertical: 20,
    paddingBottom: 10,
  },
  messageContainer: {
    flexDirection: 'row',
    marginBottom: 16,
    alignItems: 'flex-end',
  },
  userMessage: {
    justifyContent: 'flex-end',
  },
  otherMessage: {
    justifyContent: 'flex-start',
  },
  avatar: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 8,
  },
  messageBubble: {
    maxWidth: '75%',
    paddingHorizontal: 14,
    paddingVertical: 10,
    borderRadius: 16,
  },
  userBubble: {
    backgroundColor: '#00A884',
    borderBottomRightRadius: 4,
  },
  otherBubble: {
    backgroundColor: '#FFF',
    borderBottomLeftRadius: 4,
  },
  senderName: {
    fontSize: 12,
    fontWeight: '600',
    color: '#333',
    marginBottom: 4,
  },
  messageText: {
    fontSize: 15,
    lineHeight: 20,
    color: '#333',
  },
  userText: {
    color: '#FFF',
  },
  messageTime: {
    fontSize: 11,
    color: '#999',
    marginTop: 4,
  },
  userTime: {
    color: '#E0F7F0',
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    paddingVertical: 12,
    backgroundColor: '#FFF',
    borderTopWidth: 1,
    borderTopColor: '#E0E0E0',
    gap: 8,
  },
  attachButton: {
    padding: 8,
    marginBottom: 4,
  },
  imageButton: {
    padding: 8,
    marginBottom: 4,
  },
  input: {
    flex: 1,
    minHeight: 80,
    maxHeight: 120,
    backgroundColor: '#F5F5F5',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 15,
    lineHeight: 20,
  },
  sendButton: {
    backgroundColor: '#00A884',
    width: 44,
    height: 44,
    borderRadius: 22,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 4,
  },
});