import React from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import * as OpenAnything from "react-native-openanything"
function Class_6()
{
    return(
        <ScrollView style ={Styles.top}>
            
            <View style={Styles.imageContainer}>
            <Image style={Styles.image}source={require('../Images/six.jpg')}/>
            <Text style ={Styles.text}>Class  Books</Text>
            </View>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1orbJnJJAK6d5NfW5Ffif2rXZLdZrQ-i1/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_science_ncert.jpg')}/>
            <Text style ={Styles.text1}>Science(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1K33s1pebvpqKlq3qV1-XsCx9dI2U3LXV/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_schand.jpg')}/>
            <Text style ={Styles.text1}>Geography(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1FWo66rT9_Yz9IyBWorIj0r0swPyZONYQ/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_schand.jpg')}/>
            <Text style ={Styles.text1}>History(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/18R2hx_2ROjktNIVxRrvjYT3e5G4g3hGS/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_schand.jpg')}/>
            <Text style ={Styles.text1}>Politics(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1sKQlkU3xyKVmCj1Uvdt3sxmje6sNzkd1/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/Six_maths.jpg')}/>
            <Text style ={Styles.text1}>Maths(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1ENFFw5OPvCU3F6e4A20yeq36nLyoZyvL/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>

            <Text style ={Styles.text1}>English(HoneySuck.)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1avLOFq8pvIWtzoMhgmLedf69b1kyxWVq/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>

            <Text style ={Styles.text1}>English(Pact sun)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1Xj5QcIX38b-jkz0oIU-fkrDxKFdbtKmU/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
            <Text style ={Styles.text1}>Hindi(Wasant)</Text>
            </TouchableOpacity>


            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1_GIivqgXpaMVs1Qki079lE3Uh7kEPCPt/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
            <Text style ={Styles.text1}>Hindi(durva)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1NQSJcNJ7s57CUnZUKKoFiOwNN_FQ5dFC/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
            <Text style ={Styles.text1}>Hindi(Baal Katha)</Text>
            </TouchableOpacity>


            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1K30fBufs0j_jrpxEy7IDRXhadB6s1wjV/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/computer.jpg')}/>
            <Text style ={Styles.text1}>Basic of Computer</Text>
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
export default Class_6;