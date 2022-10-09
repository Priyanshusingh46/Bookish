import React from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import * as OpenAnything from "react-native-openanything"

function Stories({navigation})
{
    return( <ScrollView style ={Styles.top}>
            
        <View style={Styles.imageContainer}>
        <Image style={Styles.image}source={require('../Images/Stories.jpg')}/>
        <Text style ={Styles.text}>Stories  Books</Text>
        </View>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/18nGH6C3pwtsD_tkUKPTHz9kXIjM7mFzJ/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/Living.png')}/>
        <Text style ={Styles.text1}>Living in the Light</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1S6raIFswnXR2I6Hm5Qv9Ley_PbdyaNhF/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/Ballidan.png')}/>
        <Text style ={Styles.text1}>Ballidan(Hindi)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1XFCTpjx47pcMMt_yUV3vD25ZtV3yG6df/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/RichDad.png')}/>
        <Text style ={Styles.text1}>Rich Dad Stories</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1wXxAjywJzzkK_80gyxTfKj8RtzI-KE6I/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/BedTime.png')}/>
        <Text style ={Styles.text1}>BedTime Stories</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1QC5jMeJerO73TpH5ZPbR9H89_H-BWuCW/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/Fuck.png')}/>
        <Text style ={Styles.text1}>Art Of not Giving Fuck</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1CIvf07T5-gEWnTcLkWdwCSfB0AsgP80L/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/Gulivers.png')}/>
        <Text style ={Styles.text1}>Guliver's Travel</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1nBBxHK_ZzsggXeQhVfEjbq394509rB80/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/Hope.png')}/>
        <Text style ={Styles.text1}>Hope in Dark</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1sXdpVQ47UpzhnEhBihoOXqewVmJ8nw3T/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/Love.png')}/>
        <Text style ={Styles.text1}>Love Story</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1zNmVLzMbTToZuFZXTOJehtDFV9KxBu-7/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/Wings.png')}/>
        <Text style ={Styles.text1}>Wings Of Fire</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1xelJqZbwXKW3SA3wtOMb-OaNJZ266TfX/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/Gandhi.png')}/>
        <Text style ={Styles.text1}>Mahatma Gandhi</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/15xUhk-jxdncjKl9_Ad2CBGI48Vpg_3ml/view?usp=sharing")}>
        <Image style={Styles.image}source={require('../Images/Sachin.png')}/>
        <Text style ={Styles.text1}>Sachin Tendulkar</Text>
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
export default Stories;