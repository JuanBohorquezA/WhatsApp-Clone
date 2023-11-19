import React,{useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView, ImageBackground,TextInput } from 'react-native';
import Header from '../components/header';
import DropdownMenu from '../components/dropMenu';
import Messages from '../components/chat';
import Icon from 'react-native-vector-icons/FontAwesome';
import user from '../../public/userList';



export default function Chat({navigation, route}) {
    const [chatMessages, setChatMessages] = useState([]);
    const {userId} = route.params;
    useEffect(() => {
        const userFound = user.findUser(userId);
        if (userFound && userFound.Chat) {
            setChatMessages(userFound.Chat);
            
        }
    }, [userId]);
   return(
        <SafeAreaView style={styles.container}>
                <ImageBackground
                    source={require('../assets/Images/BG.png')}
                    style={styles.backgroundImage}  
                    >
                    <Header username={userId} IsPicture={false} profilePhoto={'_'} navigation={navigation}  view={'principal'} />
                    <DropdownMenu />
                    <Messages chatMessages={chatMessages}/>
                    {ChatInput({userId})}
                </ImageBackground>
        </SafeAreaView>
   )
}

function ChatInput({userId}) {
    const [text, setText] = useState('');
    const AddMessage = (message) => {
        setText('');
        if(message != ""){  
            user.addMessage(userId, message);
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
