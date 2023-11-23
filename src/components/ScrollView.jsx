import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import moment from 'moment';
import config from '../../config/config';

const isToday = (date) => {
    // Crea un objeto moment para la fecha dada
    const givenDate = moment(date);

    // Crea un objeto moment para la fecha actual
    const today = moment();

    // Comprueba si la fecha dada es 'hoy'
    if (today.isSame(givenDate, 'day')) {
        // Retorna la hora en formato HH:mm AM/PM
        return givenDate.format('hh:mm A');
    } else {
        // Retorna la fecha en formato DD/MM/YYYY
        return givenDate.format('DD/MM/YYYY');
    }
};
const contacts = (conversation, navigation) => {
    // Obtener el último mensaje
    const lastMessage = conversation.messages[conversation.messages.length - 1];

    // Determinar cuál de los participantes es el otro usuario
    const indexOtherParticipant = conversation.participants.findIndex(p => p !== config.PhoneNumber);
    const otherParticipant = conversation.participantDetails[indexOtherParticipant];
    const phoneOtherParticipant = conversation.participants[indexOtherParticipant];

    const handlePress = () => {
        navigation.navigate('Chat', { PhoneNumber: phoneOtherParticipant });
    };

    return (
        <TouchableOpacity key={conversation._id} onPress={handlePress}>
            <View style={styles.container}>
                <Image source={{ uri: otherParticipant.Photo }} style={styles.profilePhoto}/>
                <View style={styles.chatContainer}>
                    <View style={styles.TextContainer}>
                        <Text style={styles.username}>
                            {otherParticipant.Name.length > 20 ? otherParticipant.Name.substring(0, 20) + '...' : otherParticipant.Name}
                        </Text>
                        {lastMessage && (
                            <Text style={styles.date}>
                                {isToday(lastMessage.timestamp)}
                            </Text> 
                        )}
                    </View>
                    {lastMessage && (                 
                        <Text style={styles.lastChat}>
                            {lastMessage.content.length > 20 ? lastMessage.content.substring(0, 20) + '...' : lastMessage.content}
                        </Text>
                    )}
                </View>
            </View>
        </TouchableOpacity>
    );
};

export default function Chatviews({navigation, data}) {
    const sortedData = data.sort((a, b) => {
        // Asegurarse de que hay mensajes en las conversaciones
        if (a.messages.length > 0 && b.messages.length > 0) {
            const lastMessageA = a.messages[a.messages.length - 1];
            const lastMessageB = b.messages[b.messages.length - 1];

            // Convertir las fechas a objetos moment para la comparación
            return moment(lastMessageB.timestamp).diff(moment(lastMessageA.timestamp));
        }
        return 0;
    });

    return (
        <FlatList
            data={sortedData}
            renderItem={({ item }) => contacts(item, navigation)}
            keyExtractor={(item) => item._id.toString()}
            extraData={data}
            style={{ flex: 1, marginTop: 65 }}
        />
    );
}
const styles = StyleSheet.create({
    container: {
        backgroundColor: '#FFF',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#E5E5E5',
        paddingVertical: 10,
        paddingHorizontal: 15,
        borderBottomWidth: 1,
    },
    profilePhoto: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight:10,
    },
    chatContainer: {
        flex: 1,
    },
    TextContainer:{
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    username: {
        fontWeight: '500',
        color: '#444',
        fontSize: 15,
    },
    date:{
        color: '#B2B2B2',
        fontSize: 11,
    },
    lastChat: {
        color: '#777',
    }

})