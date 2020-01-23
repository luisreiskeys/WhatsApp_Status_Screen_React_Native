import React,{useState,useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { View,StyleSheet,Text } from 'react-native';

// import { Container } from './styles';

export default function IconNotify({size,color,icon,qtd}) {

    const [qtdNoty, setQtdNoty] = useState(0);
    useEffect(()=>{
        setQtdNoty(qtd)
    },[qtd])

    return (
        <View>
            <FontAwesomeIcon size={size} color={color} icon={ icon } />
            {qtdNoty > 0 ? 
            <View style={styles.noty}>
                <Text style={styles.textNoty}>{qtdNoty}</Text>
            </View>
            :null}
        </View>
    );
    }

const styles = StyleSheet.create({
    noty:{
        paddingHorizontal:4,
        borderRadius:7.5,
        backgroundColor:'#ee3b3b',
        justifyContent:"center",
        alignItems:"center",
        position:'absolute',
        left:15
    },
    textNoty:{
        color:'#fff',
        fontSize:11
    }
})