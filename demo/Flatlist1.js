import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, Modal, Alert, Button, Pressable,TouchableHighlight, TouchableOpacity} from 'react-native';

const Flatlist1 = () => {

const DATA = [
{id:'1', name:'ravi'},
{id:'2', name:'ram'},
{id:'3', name:'mohit'},
{id:'4', name:'mani'},
{id:'5', name:'rohit'},
{id:'6', name:'jay'},
{id:'7', name:'sumit'},
{id:'8', name:'sahil'},
];

const [isVisible, setVisible] = React.useState(false);


const ItemDivider = () => {
  return (
    <View
      style={styles.View}
        
      
    />
  );
}

    return(
     <View style={styles.container}>
     <FlatList
       data={DATA}
      renderItem={({item}) => (
      <TouchableOpacity style={styles.buttonStyle} onPress={() => setVisible(true)}>
      <View>
      <Text style={styles.textStyle}>{item.name}</Text>
      </View>
      
      </TouchableOpacity>
    
        )}
      
      ItemSeparatorComponent={ItemDivider}
      ListHeaderComponent={()=>(
        <View style={styles.header}>
        <Text style={styles.txt}>Header</Text>
        </View>
      )}
        ListFooterComponent={()=>(
          <View style={styles.header}>
          <Text style={styles.txt}>Footer</Text>
          </View>
      )}
      inverted={false}
      initialScrollIndex={3}
        getItemLayout={(data, index) => ({
          length: DATA.length,
          offset: DATA.length * index,
          index,})}
      //  numColumns={1}   
       keyExtractor={item => item.id}
       showsVerticalScrollIndicator={false}
      // horizontal
      // showsHorizontalScrollIndicator={false}
       onRefresh={() => {console.log("Data Refreshed")}}
       refreshing={false}/>
 
        
     <Modal
      animation Type={'slide'}
      visible={isVisible}
      onDismiss={() => setVisible(false)}
    onRequestClose={() => setVisible(true)}>
      <View style={{padding:30, marginTop:20}}/>
        <Button title="close" color='black' onPress={() => setVisible("")}/>
            </Modal>
          
          
      </View>
            
            
      )
      };
  



 const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#fff',
    paddingHorizontal:20,
    padding:40,
    alignItems:'center',
    justifyContent:'center',
    marginTop:50,
    },
    View:{
    height: 1,
        width: "100%",
        backgroundColor: "black"
    },
  item: {
    backgroundColor: 'pink',
    padding: 30,
    fontSize:'24',
    borderRadius:2,
    marginVertical: 8,
    marginHorizontal: 10,
    marginTop:'24'
  },
  text:{
    fontSize:28,
    padding:10,
  },
  name:{
    fontSize:12
  },
  buttonText:{
  height:40,
  width:"100%",
  alignItems:'center',
  borderRadius:12,
  backgroundColor:'lightblue',
  textAlign:'center',
  justifyContent:'center',
  marginBottom:100
},
buttonStyle:{
  marginBottom:0,
  marginTop:5,
  fontSize:20,
  backgroundColor:'pink',
  borderRadius:12,
  height:60,
  width:"100%",
  alignItems:'center'

},
textStyle:{
  fontSize:20,
  height:40,
  width:"10%",
  borderRadius:10,
  marginVertical: 10,
  marginHorizontal: 15,
  marginTop:12,
  
},
header:{
  height:50,
  width:"80%",
  marginBottom:20,
  marginTop:10,
  fontSize:20,
  backgroundColor:'blue',
  borderRadius:12,
  alignItems:'center'
},
txt:{
fontSize:18,
  height:50,
  width:"30%",
  borderRadius:10,
  marginVertical: 10,
  marginHorizontal: 100,
  marginTop:12,
  color:'white'
}

});

export default Flatlist1;

