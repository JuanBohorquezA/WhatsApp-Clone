import React from 'react';
import { View, Text, StyleSheet, Image, TouchableHighlight } from 'react-native';
import user from '../../public/userList';
import Icon from 'react-native-vector-icons/FontAwesome';




export default function Header({username, profilePhoto, IsPicture,  navigation , view, Data}) {
    var item = {}
    if(!IsPicture && profilePhoto === "_"){
        return(
            <View style={styles.navbar}>
                <View style={styles.container}>
                    <Icon name='arrow-left' style={styles.iconStyle} onPress={() => navigation.navigate(view,{data:Data})}/>
                </View>
                <Image source={username.Photo} style={styles.profilePhoto}/>
                <View style={{justifyContent: 'center', alignItems: 'flex-start'}}>
                    <Text style={styles.username}>{username.Name}</Text>
                    <Text style={styles.data}>last seen {"Today"}</Text>

                </View>
            </View>
        )
    }else{
        if(IsPicture){
            item = <Image source={profilePhoto} style={styles.profilePhoto}/>
        }
        else{
            item = 
            <View style={styles.container}>
                <Icon name='arrow-left' style={styles.iconStyle}/>
            </View>
        }
    }
    
    return (
        
        <View style={styles.navbar}>
            <TouchableHighlight onPress={() => navigation.navigate(view,{data:Data})}>
                {item}
            </TouchableHighlight>
            
            <Text style={styles.username}>{username}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    navbar: {
      height: 65,
      width: '100%',
      backgroundColor: '#009688',
      flexDirection: 'row',
      alignItems: 'center',
      paddingHorizontal: 15,
      position:'absolute',
      zIndex: 1,
      top: 0,
    },
    profilePhoto: {
        width: 50,
        height: 50, 
        borderRadius: 25,
        marginRight:10,
    },
    iconStyle: { 
        fontSize: 20,
        color: '#FFF',  
    },
    container:{
        width: 50,
        height: 50, 
        justifyContent: 'center',
        alignItems: 'center',
    },
    username: {
      color: '#FFF',
      fontSize:'1rem',
      fontWeight: 'bold',
      textAlign: 'left',
      width: '100%',
    },
    icon: {
        position: 'absolute',
        top: -5,
        left: 100,
        fontSize: 18,
        color: '#fff',
      },
    data:{
        color: '#FFF',
        fontSize:'0.7rem',
        fontWeight: 'bold',
        textAlign: 'right',
    }
    

  });