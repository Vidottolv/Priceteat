import { React } from 'react'
import { View, Text, StyleSheet, TouchableOpacity }from 'react-native'

export function Consultas(){
  return (
    <View style={styles.container}>
      <View style={styles.containerRecipes}>
        <Text style={[styles.title, styles.underline]}>Consultar Ingredientes</Text>
        <Text style={styles.textCompound}>
          Aba destinada para consultar todos os ingredientes do seu restaurante
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Consultar</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.containerRecipes}>
        <Text style={[styles.title, styles.underline]}>Consultar Receitas</Text>
        <Text style={styles.textCompound}>
        Aba destinada para a consulta de todas as receitas do seu restaurante
        </Text>
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Consultar</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}
const styles = StyleSheet.create({
  container:{
    flex:1,
    backgroundColor:"#E7A17A",
    justifyContent:'center',
    alignItems:'center'
  },
  containerRecipes:{
    height:'30%',
    width:'85%',
    borderWidth:1,
    borderRadius:16,
    margin:4,
    borderColor:'#FFF'
  },
  title:{
    fontSize:24,
    color:'#FFF',
    marginLeft:'4%',
    marginTop:'3%'
  },
  textCompound:{
    fontSize:18,
    color:'#FFF',
    marginLeft:'8%',
    marginTop:'2%',
    marginRight:'2%'
  },
  button:{
    height:50,
    alignItems: 'center',
    marginTop:40,
    marginBottom:6,
    padding:12,
    borderRadius:40,
    backgroundColor:"#E19063",
    margin: '10%',
    borderWidth: 1,
    borderColor:'#FFF'
  },
  buttonText:{
    color:"#FFF",
    fontSize:16,
  },
  underline: {
   textDecorationLine: 'underline'
  },
})