import React from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import * as OpenAnything from "react-native-openanything"

function Class_7()
{
    return(
        <ScrollView style ={Styles.top}>
            
            <View style={Styles.imageContainer}>
            <Image style={Styles.image}source={require('../Images/seven.jpg')}/>
            <Text style ={Styles.text}>Class  Books</Text>
            </View>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/109ZQFW5BC_I3FIdsE5B9zZCclc6ddfWs/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_science_ncert.jpg')}/>
            <Text style ={Styles.text1}>Science(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1nUc_K-qQOpR28u0zIUidQOp1JwhkPCFf/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_geography.jpg')}/>
            <Text style ={Styles.text1}>Geography(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1w7DFhd-mUOm2MHF3IlGubGY1sKPbDd98/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_history.jpg')}/>
            <Text style ={Styles.text1}>History(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1hkxTcF2HauSd9LnLkppwlKNHsUoL3Zsv/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_politics.jpg')}/>
            <Text style ={Styles.text1}>Politics(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1h5i594EV7F-khB5FlIYZxFsiCpOm7tYg/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/Six_maths.jpg')}/>
            <Text style ={Styles.text1}>Maths(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1m8syLxB5RoApe-0hEDhvo1eQ3fGWy8n6/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>
            
            <Text style ={Styles.text1}>English(HoneComb)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1Dfi9fXpUxgHt8DqugPv2CjGBB8KJMgkM/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>
            
            <Text style ={Styles.text1}>English(Alien Hand)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/10wxrsJDswm6Xa63b6h0dVJHxtOGNZrB0/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
            <Text style ={Styles.text1}>Hindi(Vasant)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1WpZ6us_XZLVpCc6mHx1b1VgkgpYjVkDu/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
            <Text style ={Styles.text1}>Hindi(durva)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/19iN_7tAO1R-flDiZUduKsSIdZNiLIvrF/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
            <Text style ={Styles.text1}>Hindi(Mahabhart)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1OGFIoLrcJlqB_0O3UASxcCfJECEYY06f/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/computer.jpg')}/>
            <Text style ={Styles.text1}>C Programming</Text>
            </TouchableOpacity>

        </ScrollView>
    );
} 
const Styles= StyleSheet.create({
    top:{
        flex:1,
        marginTop:40,
    },
    imageContainer:{
        flex:0.13,
        flexDirection:'row',
        width:365,
        height:95,
        backgroundColor:"#256D85",
        marginBottom:18,
        borderRadius:25,
        marginLeft:5,
        marginLeft:12,
        borderColor:"white",
        borderWidth:5
    },
    imageContainer1:{
        flex:0.13,
        flexDirection:'row',
        width:365,
        height:95,
        backgroundColor:"#11468F",
        marginBottom:18,
        borderRadius:25,
        marginLeft:5,
        marginLeft:12,
        borderColor:"white",
        borderWidth:5
    },
    image:{
        width:70,
        height:70,
        borderRadius:35,
        marginLeft:15,
        marginTop:8
    },
    text:{
        marginLeft:30,
        marginTop:22,
        fontSize:35,
        fontFamily: 'Roboto',
        color:"white",
        fontWeight:"bold"
    },
    text1:{
        marginLeft:20,
        marginTop:22,
        fontSize:25,
        color:"white",
        fontWeight:"bold",
        fontFamily: 'Roboto',

    },
})
export default Class_7;