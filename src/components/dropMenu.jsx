import React, { useState } from 'react';
import { View, Text, TouchableHighlight, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const DropdownMenu = () => {
  const [menuVisible, setMenuVisible] = useState(false);

  return (
    <View style={styles.container}>
      {/* Botón para mostrar/ocultar el menú */}
      <TouchableHighlight
        onPress={() => setMenuVisible(!menuVisible)}
      >
        <Icon name='ellipsis-v' style={styles.icon}/>
      </TouchableHighlight>

      {/* Menú desplegable */}
      {menuVisible && (
        <View style={styles.dropdownMenu}>
          <TouchableHighlight onPress={()=>console.log('New Group')}>
            <Text style={styles.dropdownItem}>New Group</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>console.log('Archived')}>
            <Text style={styles.dropdownItem}>Archived</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>console.log('Starred')}>
            <Text style={styles.dropdownItem}>Starred</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>console.log('Settings')}>
            <Text style={styles.dropdownItem}>Settings</Text>
          </TouchableHighlight>
          <TouchableHighlight onPress={()=>console.log('Log Out')}>
            <Text style={styles.dropdownItem}>Log Out</Text>
          </TouchableHighlight>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    right: 10,  
    zIndex: 1,
  },
  icon: {
    position: 'absolute',
    top: 23,
    right: 14,
    fontSize: 18,
    color: '#fff',

  },
  dropdownMenu: {
    backgroundColor: '#fff',
    borderRadius: 3,
    borderColor: '#ccc',
    borderWidth: 1,
    width: 160,
    right:0,
    top: 55,
    gap: 10,
    position: 'absolute',
    paddingHorizontal: 20,
    paddingVertical: 10,
    // Estilos adicionales para tu menú desplegable...
  },
  dropdownItem: {
    fontSize: 14,
    fontWeight: '400',
    // Estilos para cada opción del menú...
  },
});

export default DropdownMenu;
