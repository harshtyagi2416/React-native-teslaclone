import React from 'react';
import {View,Text, Pressable} from 'react-native';
import styles from './styles';

const Styledbutton = (props) => {

    const type= props.type;
    const content=props.content;
    const onpress= props.onPress;

    const backgroundcolor= type === 'primary'? 'black' : 'white';
    const textcolor= type === 'primary'? 'white' : 'black'; 
    return(
     <View style={styles.container}>
         <Pressable 
         style= {[styles.button, {backgroundColor: backgroundcolor}]}
         onPress={() => onpress()
         }
         >
           <Text style= {[styles.text,{color:textcolor}]}>{content}</Text>   
         </Pressable>   
     </View>
  );
};

export default Styledbutton;