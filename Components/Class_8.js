import React from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import * as OpenAnything from "react-native-openanything"

function Class_8()
{
    return(
        <ScrollView style ={Styles.top}>
            
            <View style={Styles.imageContainer}>
            <Image style={Styles.image}source={require('../Images/eight.jpg')}/>
            <Text style ={Styles.text}>Class  Books</Text>
            </View>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1XfDC8c3k-asVHOzNyCMg02_fcss6wASQ/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_science_ncert.jpg')}/>
            <Text style ={Styles.text1}>Science(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1HXrXPZAA1j9-3LgGtVVF3etw_kmUz1Jk/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_geography.jpg')}/>
            <Text style ={Styles.text1}>Geography(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1eUXvntr_ngwei0H5BqjGziiro7AwotsK/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_history.jpg')}/>
            <Text style ={Styles.text1}>History(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1Nv0GAyohyF-VGzcTb5_32fchPWegx4_c/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_politics.jpg')}/>
            <Text style ={Styles.text1}>Politics(NCERT)</Text>
            </TouchableOpacity>


            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1j3MXTMp0Lu__cpPAiHPz91gBVzpmyar-/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/Six_maths.jpg')}/>
            <Text style ={Styles.text1}>Maths(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1mFAYrlUhZrq8mlCwuGzjb1OY3NRRWr0r/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>
            
            <Text style ={Styles.text1}>English(HoneyDew)</Text>
            </TouchableOpacity>


            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1sINz6S2wlH8UL9-rZ7jMTkSJYrTlCz79/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>
            
            <Text style ={Styles.text1}>English(It so Happened)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1dnXcBqYn5xkQFfA9ynHOsfI6y6OszykM/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
            <Text style ={Styles.text1}>Hindi(Vasant)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1T9nX5oTBmtDlIDBfD9VCipAym0SmTLyR/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
            <Text style ={Styles.text1}>Hindi(Durva)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1ftk2ysrUXRvJuzDtzutxF95UfaPAVjzo/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/computer.jpg')}/>
            <Text style ={Styles.text1}>Computer(Java)</Text>
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
export default Class_8;