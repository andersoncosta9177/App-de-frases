import React, {useState} from "react";
import {View,Text,Image,TouchableOpacity, TextInput, StyleSheet, Button} from 'react-native'


function App(){
const [img, setImg] =  useState(require('./src/biscoito.png'))
const [textoFrase, setTextoFrase] = useState('teste')




let frases=[
  'Superei já, só choro quando lembro. 😂😒',
  'Trabalhar até os vizinhos falarem "só pode tá roubando". 😂😂',
  'Eu até me avisei.. mas não me ouvi. 😂😒',
  'Objetivo: reeducação alimentar. Obstáculo: comida. 😂😂',
  'Se tem concorrência, serei desistência. 😂👌',
  'Parei com esse negócio de uma mão lava a outra: chega na minha vez, nunca tem água. 😂😒',
  'Trabalhar bastante pra ver se compro a paciência que me falta. 😂👌',
  'Bala perdida tem mais rumo que eu! 😂👌',
  'Com sono eu me deito, com sono eu me levanto. 😂😒',
  'Olha se tem uma coisa que eu confio é na minha desconfiança. 😂😂',
  'Horrível ser pobre e não poder quebrar as coisas quando tá com raiva. 😂😒',
  'Não tem a mínima possibilidade disso dar certo... tô dentro. 😂😂',
  'A pessoa com sono desregulado quer guerra com praticamente todo mundo. 😂😒',
  'Se não for pra me atrasar prefiro nem ir. 😂😂',
  'Ano que vem vou tomar um rumo, esse ano foi só pra testar um negócio. 😂👌',
  'Queria não virar um bicho agressivo quando tô com fome 😂👌',
  'Tantos dias de luta, que já tô ficando violento... 😂😂',
  'Não discuta. Fale "pode crer" e se retire. 😂👌'
]




// funcao onde quebra o biscoito e mostra a frase
function quebrarBiscoito(){
let numeroAleatorio = Math.floor(Math.random() * frases.length )
setTextoFrase(frases[numeroAleatorio])
setImg(require('./src/biscoitoAberto.png'))
}

function reiniciar(){
setImg(require('./src/biscoito.png'))
setTextoFrase('')
}


return(
  <View style={styles.container}>
    <Image
    source={img}
    style={styles.img}
    />

    <Text style={styles.textofrase}>{textoFrase}</Text>
  {/* BOTAO QUEBRAR BISCOITO */}
  <TouchableOpacity style={styles.botao} onPress={quebrarBiscoito}>
    <View style={styles.btnArea}>
      <Text style={styles.btnTexto}>Quebrar biscoito</Text>
    </View>
  </TouchableOpacity>

{/* botao para ZERAR biscoito */}
  <TouchableOpacity style={[styles.botao,{marginTop: 15, borderColor: '#121212'} ]} onPress={reiniciar}>
    <View style={styles.btnArea}>
      <Text style={[styles.btnTexto, {color:"#121212"}]}>Zerar biscoito</Text>

    </View>
  </TouchableOpacity>

  </View>
)}  

 const styles = StyleSheet.create({
  container:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center'
  },
  img:{
    width: 230,
    height: 230,
  },
  textofrase:{
    fontSize: 20,
    color: '#dd7b22',
    margin: 30,
    fontStyle: 'italic',
    textAlign: 'center'
  },
  botao:{
    width: 230,
    height: 50,
    borderColor: '#dd7b22',
    borderWidth: 2,
    borderRadius: 25

  },
  btnArea:{
       flex: 1,
       justifyContent: 'center',
       alignItems: 'center'
  },
  btnTexto:{
    fontSize: 18,
    fontWeight: 'bold',
    color: '#dd7b22'
  }
})


export default App;


