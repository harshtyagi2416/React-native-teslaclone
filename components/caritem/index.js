import React from 'react';
import {View, Text, ImageBackground} from 'react-native';
import styles from './styles';
import Styledbutton from '../styledbutton';

const Caritem = (props) => {
  const {name,tagline, image, taglineCTA}=props.car;
    return(
     <View style={styles.carcontainer}>

      <ImageBackground source={image}
      
       style={styles.image}
       />
        <View style={styles.titles}>
          <Text style={styles.name}>{name}</Text>
          <Text style={styles.price}>{tagline} {''} 
          <Text style={styles.CTA}>{taglineCTA}</Text>
          </Text>
        </View>
        
        <View style={styles.buttonconatiner}>
         <Styledbutton 
          type='primary' 
          content={"Custom order"} 
          onPress={() => {
          console.warn('Custom order pressed!!')
          }}  
         />

         <Styledbutton 
          type='secondary' 
          content={"Existing Inventory"} 
          onPress={() => {
          console.warn('Existing Inventory pressed!!')
          }}  
         />
         </View>
         
        </View>
    );
};
export default Caritem;

