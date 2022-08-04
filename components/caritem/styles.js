import {StyleSheet,Dimensions} from 'react-native';

const styles = StyleSheet.create({

    carcontainer:{
        width: '100%',
        height:Dimensions.get('window').height,
      },
      titles:{
         marginTop:'30%',
         width:'100%',
         alignItems: 'center',
      },
      name:{
        fontSize:40,
        fontWeight:"500",
      },
      CTA:{
       textDecorationLine:'underline',
      },
      price:{
       color:'#5c5e62' , 
       fontSize:18 ,
      },
      image:{
       width:'100%',
       height:'100%',
       position:'absolute',
       resizeMode:'cover',
      },
      buttonconatiner:{
          position:'absolute',
          bottom: 50,
          width:'100%'
      // marginTop:'80%'
      },
});

export default styles;