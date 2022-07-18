import React, {useState} from 'react';
import {View, FlatList, StyleSheet, Text, TouchableOpacity, Header} from 'react-native';

const App = () => {
  const DATA = [
    {
      id: '1',
      name: 'ravi',
      city: 'indore',
     
    },
    {
      id: '2',
      name: 'ram',
      city: 'jbp',
     
    },
    {
      id: '3',
      name: 'mohit',
      city: 'dhar',
    
    },

    {
      id: '4',
      name: 'mani',
      city: 'bhopal',
      
    },
    {
      id: '5',
      name: 'rohit',
      city: 'ujjain',
     
    },
    {
      id: '6',
      name: 'monu',
      city: 'rewa',
   
    },
    {
      id: '7',
      name: 'sumit',
      city: 'dewas',
    
    },
    {
      id: '8',
      name: 'sahil',
      city: 'damoh',
      
    },
  ];

  const [select, setSelect] = useState(DATA);

  console.log('selecteditem', select);
  const ItemDivider = () => {
    return (
      <View
        style={styles.item}
          
        
      />
    );
  }
  

  
    
  

  const handleOnpress = item => {
    const newName = select.map(value => {
      if (value.id === item.id) {
        return {...value, selected: !value.selected};
      } else {
        return value;
      }
    });
    setSelect(newName);
  };

  return (
    <View style={styles.container}>
      <FlatList
        data={select}
        keyExtractor={item => item.id}
        showsVerticalScrollIndicator={false}
        onRefresh={() => {
          console.log('Data Refreshed');
        }}
        refreshing={false}
        
        renderItem={({item}) => {
          return (
            <TouchableOpacity onPress={() => handleOnpress(item)}>
              <View
                style={[
                  styles.View,
                  {
                    backgroundColor: item.selected ? 'pink' : 'lightblue',
                    borderColor: item.selected ? 'green' : 'red',
                  },
                ]}>
                <Text
                  style={[
                    styles.text,
                    {color: item.selected ? 'green' : 'blue'},
                  ]}>
                  Id: {item.id}
                </Text>
                <Text
                  style={[
                    styles.text,
                    {color: item.selected ? 'brown' : 'purple'},
                  ]}>
                  Name: {item.name}
                </Text>
                <Text
                  style={[
                    styles.text,
                    {color: item.selected ? 'blue' : 'red'},
                  ]}>
                  City: {item.city}
                </Text>
              </View>
            </TouchableOpacity>
          );
        }}
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
        

      
      />
      
     </View>   

    
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
  },
  View: {
    marginTop: 10,
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderLeftColor: 'blue',
    borderRightColor: 'blue',

  },
  item:{
    borderWidth:1,
  },

  text: {
    fontSize: 20,
    padding: 20,
    height: 40,
    width: 200,
    paddingTop:10,
    textAlign: 'center',
    color: 'blue',
    fontWeight: 'bold'
    
  },
  header:{
    borderRadius:5,
    borderWidth:1,
    borderLeftColor:'red',
    borderRightColor:'red',
    height:50,margin:10,
    paddingBottom:10,
    backgroundColor:'lightgreen'
  }, 
  txt:{
    fontSize:20,
    textAlign:'center',
    padding:10,
    color:'blue',
    padding:10
  }
});

export default App;
