import React, {Component} from 'react'
import {View,Text,StyleSheet} from 'react-native'

class ProfileScreen extends Component{
    render(){
        return(

            <View style={styles.container}>
                <Text>Profile Proximamente....</Text>
            </View>

        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    }
});

export default ProfileScreen
