import React from 'react';
import { View, StyleSheet, Text } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

export default function ContentProfile({title, context, icon, extra}) {
    return (
        <View style={styles.ContainerContext}>
                <Icon name={icon} style={styles.iconStyle}/>
                <View style={styles.Context}>
                    <Text style={styles.text}>{title}</Text>
                    <Text style={styles.username}>{context}</Text>
                    <Text style={styles.text}>{extra}</Text>
                </View >
        </View>
    )
}
const styles = StyleSheet.create({
    ContainerContext:{
        flexDirection: 'row',
        alignItems: 'center',
        paddingHorizontal: 20,
        paddingVertical: 20,
        gap:15,
        borderBottomColor: '#bbb',
        borderBottomWidth: 1,
    },
    username: {
      color: '#333',
      fontWeight: 'bold',
    },
    text:{
        color: '#777',
        fontWeight: '200',
        fontSize: 12,
    },
    Context:{
        flex: 1,
        gap:2,
        color: '#111',
        fontWeight: '200',
        fontSize: 12,
    },
    iconStyle:{
        fontSize: 25,
        color: '#009688',
    }
})