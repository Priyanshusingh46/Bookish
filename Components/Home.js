import React from "react";
import {View,Text, ScrollView,StyleSheet ,TouchableOpacity} from 'react-native';
function Home({navigation}){
    const data ="Class 6"
    const data1 ="Class 7"
    const data2 ="Class 8"
    const data3 ="Class 9"
    const data4="Class 10"
    const data5="Class 11"
    const data6="Class 12"
    const data7="Stories"
    return(
        <ScrollView>
            <View >
                <View style={styles.textbox}>
                <Text style={styles.text}>BOOKISH</Text> 
                </View>
                <View style={styles.container}>
                <View style={styles.container1}>
                
                <View style ={styles.Container2}> 
                <TouchableOpacity style ={styles.box}
                onPress={()=>navigation.navigate('Class_6')}
                >
                <Text style={styles.text1}>Class 6</Text>
                </TouchableOpacity>
                </View>
                

                <View style ={styles.Container2}> 
                <TouchableOpacity style ={styles.box}
                 onPress={()=>navigation.navigate('Class_7')}
                >
                <Text style={styles.text1}>Class 7</Text>
                </TouchableOpacity>
                </View>

                </View>

                <View style={styles.container1}>

                <View style ={styles.Container2} > 
                <TouchableOpacity style ={styles.box}onPress={()=>navigation.navigate('Class_8')}>
                <Text style={styles.text1}>Class 8</Text>
                </TouchableOpacity>
                </View>

                <View style ={styles.Container2} > 
                <TouchableOpacity style ={styles.box} onPress={()=>navigation.navigate('Class_9')}>
                <Text style={styles.text1}>Class 9</Text>
                </TouchableOpacity>
                </View>

                </View>


                <View style={styles.container1}>

                <View style ={styles.Container2}> 
                <TouchableOpacity style ={styles.box} onPress={()=>navigation.navigate('Class_10')}>
                <Text style={styles.text1}>Class 10</Text>
                </TouchableOpacity>
                </View>

                <View style ={styles.Container2}> 
                <TouchableOpacity style ={styles.box} onPress={()=>navigation.navigate('Class_11')}>
                <Text style={styles.text1}>Class 11</Text>
                </TouchableOpacity>
                </View>

                </View>

                <View style={styles.container1}>

                <View style ={styles.Container2}> 
                <TouchableOpacity style ={styles.box}  onPress={()=>navigation.navigate('Class_12')}>
                <Text style={styles.text1}>Class 12</Text>
                </TouchableOpacity>
                </View>

                <View style ={styles.Container2}> 
                <TouchableOpacity style ={styles.box} onPress={()=>navigation.navigate('Stories')}>
                <Text style={styles.text1}>Stories</Text>
                </TouchableOpacity>
                </View>

                </View>
                </View>
            </View>
        </ScrollView>
    );
    }
const styles= StyleSheet.create({
    text:{
        flex:1,
        fontSize:25,
        color:"white",
        textAlign:"center",
        paddingTop:2,
        fontWeight:"bold",
    },
    textbox:{
        flex:1,
        paddingTop:45,
        backgroundColor:"#256D85",
        height:90,
    },
    container1:{
        flex:1,
        flexDirection:"row",
        justifyContent:"space-between",
        marginRight:-25,
        marginLeft: 25,
        marginBottom:15
    },
    container:{
        backgroundColor:"white",
        paddingTop:45
    },

    //card
    Container2:{
        flex:1,
   },
   box:{
    width:150,
    height:150,
    backgroundColor:"#11468F",
    borderWidth:2,
    borderColor:"White",
    borderRadius:15,
    marginBottom:10
   },
   text1:{
    flex:1,
    fontSize:25,
    color:"white",
    textAlign:"center",
    paddingTop:2,
    fontWeight:"bold",
    paddingTop:55
},

})
export default Home;