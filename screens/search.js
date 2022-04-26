import React,{Component} from "react";
import { Text, View, Stylesheet } from "react-native";
export default class SearchScreen extends Component{
    render(){
        return(
            <View style={styles.container}>
             <Text style={styles.text}>
                 Search Screen
             </Text>
            </View>
        )
    }
}
const styles=Stylesheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
        backgroundColor:'yellow'
    },
    text:{
        color:'white',
        fontSize:30
    }
});