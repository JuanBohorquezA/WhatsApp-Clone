import React,{useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, ImageBackground,TextInput, View } from 'react-native';
import Header from '../components/header';
import DropdownMenu from '../components/dropMenu';
import Messages from '../components/chat';
import Icon from 'react-native-vector-icons/FontAwesome';
import {getChat,getDataUser,postSendMessage} from '../../public/integrations';


export default function Chat({navigation, route}) {
    const [chatMessages, setChatMessages] = useState([]);
    const [userData, setUserData] = useState([]);
    const {PhoneNumber} = route.params;
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getChat(PhoneNumber  );
                setChatMessages(data.data);
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        };
        fetchUserData();
    }, [PhoneNumber]);
    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getDataUser(PhoneNumber);
                setUserData(data.data);
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        };
        fetchUserData();
    }, [PhoneNumber]);
    const fetchChatMessages = async () => {
        try {
            const data = await getChat(PhoneNumber);
            setChatMessages(data.data);
        } catch (error) {
            console.error("Error al obtener los mensajes del chat:", error);
        }
    };
    
    useEffect(() => {
        fetchChatMessages();
    }, [PhoneNumber]);

    useEffect(() => {
        const intervalId = setInterval(() => {
            fetchChatMessages();
        }, 1000); // Actualiza cada 1 segundos
    
        return () => clearInterval(intervalId); // Limpieza al salir
    }, [PhoneNumber]);
    
   return(
        <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require('../assets/Images/BG.png')}
                    style={styles.backgroundImage}  
                    >
                    <Header username={userData} IsPicture={false} profilePhoto={'_'} navigation={navigation}  view={'principal'} />
                    <DropdownMenu />
                    <Messages chatMessages={chatMessages}/>        
                    <ChatInput PhoneNumber={PhoneNumber} onSendMessage={fetchChatMessages}/>
                </ImageBackground>
        </SafeAreaView>
   )
}

function ChatInput({PhoneNumber, onSendMessage}) {
    const [text, setText] = useState('');
    const AddMessage = async(message) => {
        setText('');
        if(message != ""){  
            await postSendMessage(PhoneNumber, message);
            onSendMessage(); // Llama a esta función después de enviar el mensaje
        }
    }
    return(
       <SafeAreaView style={styles.navbar}>
            <Icon name='smile-o' style={styles.icon}/>
            <TextInput 
            style={styles.input}
            onChangeText={text => setText(text)}
            value={text}
            placeholder="Type a message"
          /> 
            <Icon name='send' style={styles.icon} onPress={()=>AddMessage(text)}/>
       </SafeAreaView>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        resizeMode: 'cover',
    },
    backgroundImage: {
        flex: 1,
        resizeMode: 'cover',
    },
    navbar: {   
        height: 72,
        backgroundColor: '#f2f2f2',
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
        gap:10,
        paddingHorizontal: 30,
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0
      },
      icon: {
          fontSize: 24,
          color: '#212529'
      },
      input:{
          height: 40,
          width: '70%',
          backgroundColor: '#fff',
          paddingHorizontal: 10
      }


  });
