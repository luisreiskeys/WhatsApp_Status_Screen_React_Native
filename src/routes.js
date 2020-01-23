import React from 'react';

import {createAppContainer} from 'react-navigation'
import {createBottomTabNavigator} from 'react-navigation-tabs'

import IconNotify from './componentes/IconNotify'
import { faCamera, faCog, faComments, faPhone, faCircleNotch } from '@fortawesome/free-solid-svg-icons'

import Status from './pages/status'
import Calls from './pages/calls'
import Camera from './pages/camera'
import Settings from './pages/settings'
import Chats from './pages/chats'

const tabs = createBottomTabNavigator(
    {

        Status: {
            screen : Status,
            navigationOptions:{
                tabBarLabel:'Status',
                tabBarIcon:({tintColor})=>(
                    <IconNotify size={20} qtd={1} color={tintColor} icon={ faCircleNotch } />
                )
            }
        },
        Calls: {
            screen : Calls,
            navigationOptions:{
                tabBarLabel:'Ligações',
                tabBarIcon:({tintColor})=>(
                    <IconNotify size={20} color={tintColor} icon={ faPhone } />
                )
            }
        },
        Camera: {
            screen : Camera,
            navigationOptions:{
                tabBarLabel:'Câmera',
                tabBarIcon:({tintColor})=>(
                    <IconNotify size={20} color={tintColor} icon={ faCamera } />
                )
            }
        },
        Chats: {
            screen : Chats,
            navigationOptions:{
                tabBarLabel:'Conversas',
                tabBarIcon:({tintColor})=>(
                    <IconNotify size={20} qtd={90}color={tintColor} icon={ faComments } />
                )
            }
        },
        Settings: {
            screen : Settings,
            navigationOptions:{
                tabBarLabel:'Ajustes',
                tabBarIcon:({tintColor})=>(
                    <IconNotify size={20} color={tintColor} icon={ faCog } />
                )
            }
        },
    },
    {   
        
        initialRouteName:'Status',
        navigationOptions:{
            gesturesEnabled:false
        },
        tabBarOptions:{
            activeTintColor:'#007dff',
            inactiveTintColor:'#b7b7b7',
            upperCaseLabel:false,
            indicatorStyle:{
              height:0
            },
            showIcon:true,
            showLabel:true,
            style:{
                backgroundColor:'#f8f8f8',
            },
        },
        
    }
)

export default createAppContainer(
    tabs
)