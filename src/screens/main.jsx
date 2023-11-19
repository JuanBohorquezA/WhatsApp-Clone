import React,{useEffect, useState} from 'react';
import { StyleSheet, SafeAreaView } from 'react-native';
import Header from '../components/header';
import Chatview from '../components/ScrollView';
import DropdownMenu from '../components/dropMenu';
import {getDataUser} from '../../public/integrations';
import {getUsersList } from '../../public/integrations';
import user from '../../public/userList';


const Main = ({ navigation }) => {
  const [userData, setUserData] = useState([]);
  const [Users, setUsers] = React.useState([]);

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const data = await getDataUser();
                setUserData(data.data);
            } catch (error) {
                console.error("Error al obtener los datos del usuario:", error);
            }
        };

        fetchUserData();
    }, [])

    useEffect(()=>{
      const fetchUsersList = async ()=>{
        try{
            const data = await getUsersList();
            setUsers(data.data)
        }
        catch (error){
          console.error("Error al obtener los datos del usuario:", error);
        }
      };
      fetchUsersList();

    },[]);


  return (
      <SafeAreaView style={styles.container}>
          <Header username={userData.Name} profilePhoto={userData.Photo} IsPicture={true} navigation={navigation} view={'Profile'} Data={userData}/>
          <DropdownMenu />
          <Chatview navigation={navigation} data={Users}/>
      </SafeAreaView>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
  },
  chatList: {
    flex: 1,
  },
});

export default Main;
