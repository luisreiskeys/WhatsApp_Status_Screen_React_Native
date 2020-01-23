import React, { useState } from 'react';
import { View,Text,SafeAreaView,TouchableOpacity,FlatList,TextInput,StyleSheet,Dimensions } from 'react-native';
import Animated, {Easing} from 'react-native-reanimated'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSearch, faPlusCircle,faCamera,faPencilAlt } from '@fortawesome/free-solid-svg-icons'
import StatusAvatar from '../componentes/StatusAvatar'
export default function Status() {
  const [searchWidth] = useState(new Animated.Value(Dimensions.get("window").width)); 
  const [marginHeader] = useState(new Animated.Value(0)); 
  const [showText,setShowtext] = useState(true);

  // O Objeto com os Stories estão fixos para testes, o campo stories deve ser 
  // preenchido com um array de stories de cada usuário
  // cada item do array de stories é um array de duas posições, sendo a primeira
  // o id de cada story e a segunda posição 1 ou 0 para visto ou não visto
  // para teste estou usando o pravatar para gerar imagens aleatórias para os usuários
  const [stories, setStories] = useState([ 
    {
      id:'1',
      name:'Barry Allen',
      stories:[[1,1],[2,0],[3,0],[4,0],[5,0]],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'2',
      name:'Izo Henrique',
      stories:[[12,1],[1231,0],[123,0],[1231,0],[123,0],[1231,0],[123,0],],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'3',
      name:'Mary',
      stories:[[12,1],[1231,0],[123,0],[1231,0]],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'4',
      name:'Jhon',
      stories:[[12,0]],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'5',
      name:'Philip',
      stories:[[12,1],[1231,0],[123,0]],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'6',
      name:'Alice',
      stories:[[12,1],[1231,0]],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'7',
      name:'Marcus',
      stories:[[12,1],[1231,0],[1231,0],[1231,0],[123,0]],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'8',
      name:'James',
      stories:[[12,1],[1231,0],[123,0],[1231,0],[123,0],[1231,0],[123,0],],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'9',
      name:'Stephen',
      stories:[[12,1],[1231,0],[123,0],[1231,0]],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'10',
      name:'Michael',
      stories:[[12,0]],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'11',
      name:'Lenon',
      stories:[[12,1],[1231,0],[123,0]],
      image:'https://i.pravatar.cc/300'
    },
    {
      id:'12',
      name:'Jhon Doe',
      stories:[[12,1],[1231,0]],
      image:'https://i.pravatar.cc/300'
    },
  ])

  const searchInput = React.createRef()
  function renderItem(item){
    return(
      <View style={{flexDirection:'row',padding:15, height:80,alignItems:'center', marginLeft:15}}>
        <StatusAvatar array={item.stories} image={item.image} />
        
        <View style={{marginLeft:70, height:80,justifyContent:'center', width:"100%",borderBottomColor:'#ccc',borderBottomWidth:0.3}}>
          <Text style={{fontWeight:'bold'}}>{item.name}</Text>
          <Text style={{color:'grey'}}>agora mesmo</Text>
        </View>
      </View>
    )
  }

  function animateInput(a,b,c){
    Animated.timing(searchWidth,{
      toValue:Dimensions.get("window").width*a,
      useNativeDriver:true,             
      duration: 250,  
      easing: Easing.elastic(),
    }).start();
    Animated.timing(marginHeader,{
      toValue:b,
      useNativeDriver:true,             
      duration: 250,  
      easing: Easing.elastic(),
    }).start();
    setShowtext(c)
  }
  function renderHeader(){
    return(
      <View style={styles.header}>
        <View style={styles.mystatus}>
          <View style={{flexDirection:'row',padding:15, height:80,alignItems:'center', marginLeft:15}}>
            <StatusAvatar array={[[0,0]]} image='https://avatars2.githubusercontent.com/u/27819268?s=460&v=4'/>
            <View style={{marginLeft:35,marginTop:30,backgroundColor:'#fff',width:20,height:20,borderRadius:10}}>
              <FontAwesomeIcon size={20} color='#007dff' icon={ faPlusCircle } />
            </View>

            <View style={{marginLeft:15, height:80,justifyContent:'center'}}>
              <Text style={{fontWeight:'bold'}}>Meu Status</Text>
              <Text style={{color:'grey'}}>Adicionar ao meu status</Text>
            </View>
            <View style={{height:40,width:40,borderRadius:20,backgroundColor:'#efeff2',justifyContent:'center',alignItems:'center', marginLeft:15}}>
              <FontAwesomeIcon size={20} color='#007dff' icon={ faCamera } />
            </View>
            <View style={{height:40,width:40,borderRadius:20,backgroundColor:'#efeff2',justifyContent:'center',alignItems:'center', marginLeft:15}}>
              <FontAwesomeIcon size={20} color='#007dff' icon={ faPencilAlt } />
            </View>
          </View>
        </View>
        <Text style={styles.txtHeader}>ATUALIZAÇÕES RECENTES</Text>
      </View>
    )
  }
  return (
    <SafeAreaView style={{flex:1}}>
      
      <Animated.View style={{transform:[{translateY:marginHeader}]}}>
        <View style={{flexDirection:'row',marginHorizontal:20,marginVertical:10}}>
          <TouchableOpacity>
            <Text style={{color:'#007dff',fontSize:18}}>{showText?"Privacidade":null}</Text>
          </TouchableOpacity>
        </View>
        <Text style={{fontWeight:'bold', fontSize:30, marginLeft:20}}>{showText?"Status":null}</Text>
        <View style={{flexDirection:'row', marginVertical:7}}>
          <Animated.View style={{marginLeft:20,width:searchWidth}}>
            <TextInput ref={searchInput} style={styles.input} keyboardType="default" placeholder="Buscar" placeholderTextColor="#959698" onFocus={()=>animateInput(0.8,-50,false)}/>
          </Animated.View>
          <TouchableOpacity style={{justifyContent:"center"}} onPress={()=>{animateInput(1,0,true);searchInput.current.blur()}}>
            <Text style={{color:'#007dff',fontSize:16, marginLeft:-20}}>Cancelar</Text>
          </TouchableOpacity>
          <View style={{position:'absolute',marginTop:18,marginLeft:32}}>
            <FontAwesomeIcon size={20} color="#959698" icon={ faSearch } />  
          </View>
        </View>
        <FlatList 
          data={stories}
          renderItem={({item}) => renderItem(item)}
          ListHeaderComponent={renderHeader}
        />
      </Animated.View>
      
      {/*  */}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  input:{
    height:40,
    width:'90%',
    borderRadius:7,
    backgroundColor:'#e4e5e6',
    marginVertical:7,
    paddingLeft:40,
  },
  header:{
    backgroundColor:'#efeff2',
    height:180,
    borderTopColor:'#aeaeb0',
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    borderBottomColor:'#aeaeb0',
  },
  mystatus:{
    height:88,
    backgroundColor:'#fff',
    borderTopColor:'#aeaeb0',
    borderTopWidth:0.5,
    borderBottomWidth:0.5,
    borderBottomColor:'#aeaeb0',
    marginTop:40
  },
  txtHeader:{
    color:'#737375',
    marginTop:30,
    marginLeft:20
  }

})