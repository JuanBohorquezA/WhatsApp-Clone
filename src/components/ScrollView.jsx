import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList } from 'react-native';
import moment from 'moment';

const isToday = (date) => {
    // Crea un objeto moment para la fecha dada sin formatearla como cadena
    const givenDate = moment(date, 'HH:mm-DD-MM-YYYY');

    // Crea un objeto moment para la fecha actual
    const today = moment();

    // Compara si ambas fechas son el mismo día
    return today.isSame(givenDate, 'day')? date.split('-').slice(0, 1).join('').split(':').slice(0, 2).join(':'): date.split('-').slice(1, 4).join('/');

};
const compareDates = (date1, date2) => {
    const momentDate1 = moment(date1, 'HH:mm:ss-DD-MM-YYYY');
    const momentDate2 = moment(date2, 'HH:mm:ss-DD-MM-YYYY');
    return momentDate1.diff(momentDate2);
};


const contacts = (user, navigation)=>{
    const handlePress = (Id) => {
        navigation.navigate('Chat', {userId: Id});
    };
    return (
        <TouchableOpacity key={user._id} onPress={() => handlePress(user._id)}>
                <View style={styles.container}>
                    <Image source={user.Photo} style={styles.profilePhoto}/>
                    <View style={styles.chatContainer}>                  
                        <View style={styles.TextContainer}>
                            <Text style={styles.username}>
                                {user.Name.length > 20 ? user.Name.substring(0, 20)+'...' : user.Name}
                            </Text>
                            {/* <Text style={styles.date}>{isToday(user.Chat[user.Chat.length-1].date)}</Text> */}
                        </View>               
                        <Text style={styles.lastChat}>
                            {/* {(user.Chat[user.Chat.length-1].message.length > 20) ? user.Chat[user.Chat.length-1].message.substring(0, 20)+'...' : user.Chat[user.Chat.length-1].message} */}
                        </Text> 
                    </View>
                    
                </View>
        </TouchableOpacity>
    )
}
export default function Chatviews({navigation, data}) {
     // Ordenar usuarios por la fecha del último mensaje
     return (
        <FlatList
            data={data}
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