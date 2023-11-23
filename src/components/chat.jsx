import React,{ useRef, useEffect } from 'react';
import { FlatList, Text, View, StyleSheet } from 'react-native';
import moment from 'moment';
import config from '../../config/config';

const valueDate = (date1, date2) => {
  const moment1 = moment(date1);
  const moment2 = moment(date2);
  return moment2.diff(moment1, 'days') >= 1;
}
const converToHour = (date) => {
  return moment(date).format('hh:mm A');
}

const MessageItem = ({ chat, showDate }) => (
    <View>
        {showDate && (
            <View style={styles.DateContainer}>
                <Text style={styles.date}>
                  {moment(chat.messages.timestamp).format("DD/MM/YYYY")}
                </Text>
            </View>
        )}
        <View style={chat.messages[0]?.sender != config.PhoneNumber ? styles.chatContainerReceptor : styles.chatContainerEmisor}>
            <View style={chat.messages[0]?.sender != config.PhoneNumber ? styles.chatReceptor : styles.chatEmisor}>
                <Text style={styles.Text}>
                    {chat.messages[0]?.content}
                </Text>
                <View style={styles.hourContainer}>
                    <Text style={styles.hour}>
                        {converToHour(chat.messages[0]?.timestamp)}
                    </Text>
                </View>
            </View>
        </View>
    </View>
);

export default function Messages({chatMessages}) {
  const flatListRef = useRef();

    useEffect(() => {
        if (flatListRef.current) {
            flatListRef.current.scrollToEnd({ animated: false });
        }
    }, [chatMessages]);
  const renderItem = ({ item, index }) => {
    const showDate = index === 0 || valueDate(chatMessages[index - 1].messages.timestamp, item.messages.timestamp);
    return <MessageItem chat={item} showDate={showDate} />;
};
    return (
        <FlatList
        ref={flatListRef}
        data={chatMessages}
        renderItem={renderItem}
        keyExtractor={(item) => item._id.toString()}
        extraData={chatMessages}
        style={{ flex: 1, marginTop: 65, marginBottom: 82 }}
    />
    );
}
const styles = StyleSheet.create({
    navbar: {
        paddingHorizontal: 15,
      },
      DateContainer: {
        display:'flex',
        paddingTop: 10,
        justifyContent: 'center',
        alignItems: 'center',
      },
      date: {
        width: 100,
        backgroundColor: 'white',
        paddingVertical: 5,
        paddingHorizontal: 10,
        borderRadius: 5,
        fontSize: 14,
        color: 'grey',
      },
      chatContainerReceptor:{
        paddingTop: 10,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        paddingHorizontal: 20,
      },
      chatContainerEmisor:{
        paddingTop: 10,
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        paddingHorizontal: 20,
      },
      chatReceptor:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: 'white',
        borderRadius: 5,
        flexDirection: 'row',
      },
      chatEmisor:{
        paddingHorizontal: 10,
        paddingVertical: 5,
        backgroundColor: '#dcf8c6',
        borderRadius: 5,
        flexDirection: 'row',
      },
      Text:{
        paddingVertical: 5,
        maxWidth: 235,
        fontSize: 14,
        color: '#444',
      },
      hourContainer:{
        width: 60,
        justifyContent: 'flex-end',
        alignItems:'flex-end',
        
      },
      hour:{
        fontSize: 12,
        color: '#666',
      }

});