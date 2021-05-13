import { StatusBar } from 'expo-status-bar';
import React from 'react';
import {createAppContainer, createSwitchNavigator} from "react-navigation";
import {createStackNavigator} from "react-navigation-stack";
import {createBottomTabNavigator} from "react-navigation-tabs";
import { StyleSheet, Text, View } from 'react-native';
import {Ionicons, MaterialCommunityIcons,FontAwesome, MaterialIcons} from '@expo/vector-icons';

import HomeScreen from './src/Screens/HomeScreen'
import RegisterScreen from './src/Screens/RegisterScreen'
import LoadingScreen from './src/Screens/loadingScreen'
import LoginScreen from './src/Screens/LoginScreen'
import MessageScreen from './src/Screens/MessageScreen'
import MapScreen from './src/Screens/MapScreen'
import PostScreen from './src/Screens/PostScreen'
import ProfileScreen from './src/Screens/ProfileScreen'

import * as firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDbtMrD7-fh0qvDRgzd7SD76zv7H2EcNAc",
  authDomain: "react-native-proyecto.firebaseapp.com",
  projectId: "react-native-proyecto",
  storageBucket: "react-native-proyecto.appspot.com",
  messagingSenderId: "373272391635",
  appId: "1:373272391635:web:dda11a9330c2aef8688926"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const ContainerApp = createStackNavigator(

    {
      default: createBottomTabNavigator(

          {
            Home: {
              screen: HomeScreen,
              navigationOptions:{
                tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="home-circle" size={30} color={tintColor} />
              }
            },
            Message: {
              screen: MessageScreen,
              navigationOptions:{
                tabBarIcon: ({tintColor}) => <MaterialCommunityIcons name="message-reply" size={30} color={tintColor} />
              }
            },
            Post: {
              screen: PostScreen,
              navigationOptions:{
                tabBarIcon: ({tintColor}) => <MaterialIcons name="add-circle-outline" size={48} color={tintColor} />
              }
            },
            Map: {
              screen: MapScreen,
              navigationOptions:{
                tabBarIcon: ({tintColor}) => <FontAwesome name="map-marker" size={30} color={tintColor} />
              }
            },

            profile:{
              screen: ProfileScreen,
              navigationOptions:{
                tabBarIcon: ({tintColor}) => <MaterialIcons name="person-pin" size={30} color={tintColor} />
              }
            }
          },

          {


            tabBarOptions:{
              activeTintColor: "#9645e3",
              inactiveTintColor: "#bbbbbb",
              showLabel: false
            }
          }

      ),
    },
    {
      mode:'modal',
      headerMode:'none'
    }

);

const StackAuth = createStackNavigator({

  Login: LoginScreen,
  Register: RegisterScreen
});

export default createAppContainer(
    createSwitchNavigator(

        {
          Loading: LoadingScreen,
          App: ContainerApp,
          Auth: StackAuth
        },
        {
          initialRouteName: "Loading"
        }

    )
);
