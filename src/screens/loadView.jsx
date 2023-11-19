import React,{useEffect} from 'react';
import { View, ActivityIndicator, StyleSheet, Text } from 'react-native';

const LoadingScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('principal');
        }, 2000);
    })
    return (
    <View style={styles.container}>
        <ActivityIndicator size={'large'} color={'#fff'} />
        <Text style={styles.text}>Cargando...</Text>
    </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#009688',
  },
  text:{
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',


  }
});

export default LoadingScreen;
