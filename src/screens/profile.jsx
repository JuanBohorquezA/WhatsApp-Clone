import React from 'react';
import { View, StyleSheet, Image, SafeAreaView } from 'react-native';
import Header from '../components/header';
import ContentProfile from '../components/Profile';


export default function Profile({navigation, route}) {
  const {data} = route.params;
    return (
        <SafeAreaView style={styles.container}>
            <Header username={'Porfile'} IsPicture={false} navigation={navigation} view={'principal'} Data={data}/>
            <View style={styles.profileContainer}>
                <View style={styles.photoContainer}>
                        <Image source={{uri: 'https://i.pravatar.cc/300'}} style={styles.profilePhoto}/>
                </View>
                <ContentProfile title={'Name'} context={data.Name} icon={'user'} extra={'Este no es un nombre de usuario ni un PIN. Este nombre será visible para tus contactos de WhatsApp'}/>
                <ContentProfile title={'Info.'} context={'Ocupado'} icon={'info'}/>
                <ContentProfile title={"Telefono"} context={data.PhoneNumber} icon={'phone'}/>
                <ContentProfile title={'Email'} context={data.Email} icon={'envelope'}/>
            </View>
            
        </SafeAreaView>
    );
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
    },
    profileContainer:{
      marginTop:65
    },
    photoContainer: {
      width: '100%',
      height: '35%',
    },
    profilePhoto: {
      width: 200,
      height: 200,
      borderRadius: 100,
      justifyContent: 'center',
      alignContent: 'center',
      alignSelf: 'center',
      marginTop: 15,
    },
   
    // Resto de tus estilos...
  });
  