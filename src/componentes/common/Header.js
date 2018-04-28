// componente funcional
// funcionalidad limitada
// mostar un simple objeto al usuario

// Importar librerias para crear componente
import React from 'react';
import { Text, View } from 'react-native';
// Hacer componente
const Header = (props) => {
  const { viewStyle, textStyle } = styles;
  return (
    <View style={viewStyle}>
      <Text style={textStyle}>{props.headerText}</Text>
    </View>
  );
};


const styles = {
  textStyle: {
    fontSize: 20
  },
  viewStyle: {
    backgroundColor: '#f8f8f8',
    justifyContent: 'center', //manipulacion vertical // flex-start // flex-end
    alignItems: 'center', //manipulacion horizontal // flex-start // flex-end
    height: 60,
    paddingTop: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    elevation: 2,
    position: 'relative'
  }
};

// Hacer componente disponible
// Sera un componente hijo del root, albums
// ya que no usa la declaracion del root component, debe hacerse usable, o exportable

export default Header;
