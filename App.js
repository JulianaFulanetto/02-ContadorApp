import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import {  StyleSheet, Text, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [contador, setContador] = useState(0);

  const handleIncrement = () => {
    setContador(contador + 1);
  };

  const handleDecrement = () => {
   contador > 0 && setContador(contador - 1);
  };

  const handleReset = () => {
    setContador(0);
  }

  return (

    <View style={styles.container}>
    
        <View style={styles.containerCont}>
      <Text style={styles.title}>Contador</Text>
      <Text style={styles.counterText}>{contador}</Text>
      </View>

      <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button} onPress={handleDecrement}>
          <Text style={styles.buttonText} >-1</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.button} onPress={handleIncrement}>
          <Text  style={styles.buttonText}>+1</Text>
        </TouchableOpacity>



      </View>
        <TouchableOpacity style={[styles.zerar, styles.resetButton]} onPress={handleReset}>
          <Text style={styles.buttonText} >zerar</Text>
        </TouchableOpacity>
      <StatusBar style="auto" />        
    </View>
  );
}

const styles = StyleSheet.create({
  containerCont:{
    marginBottom:20,
    backgroundColor: '#C890A7',
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title:{
    justifyContent:'center',
    alignItems:'center',
    color:"#ffffff",
    fontSize:32,
    fontWeight: "bold",
    marginBottom: 20,
  },
  counterText:{
    fontSize:64,
    fontWeight: "bold",
    color: "#ffffff",
    marginBottom:30
  },
  button:{
    backgroundColor: "#DD88CF",
    paddingVertical: 35,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  zerar:{
    backgroundColor: "#4B164C",
    paddingVertical: 30,
    paddingHorizontal: 40,
    borderRadius: 10,
  },
  buttonText:{
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
  },
  buttonContainer:{
    flexDirection: "row",
    marginBottom: 20,
    gap: 6,
  },
  resetButton:{
    backgroundColor: "#FF0066",
    
  }
});
