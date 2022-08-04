import React from 'react';
import {View, Text, FlatList,Dimensions} from 'react-native';
import styles from './styles.js';
import cars from './cars.js';
import Caritem from '../caritem/index.js';

const Carlist  = (props) =>{
    return(
     <View style={styles.container}>

         <FlatList
           data={cars}
           renderItem={({item})=> <Caritem car={item} />}
           snapToAlignment={'start'}
           decelerationRate={'fast'}
           snapToInterval={Dimensions.get('window').height}
          // showsVerticalScrollIndicator={false}
         />    
         
     </View>
    );
};

export default Carlist;