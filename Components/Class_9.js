import React from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import * as OpenAnything from "react-native-openanything"

function Class_9()
{
    return(
        <ScrollView style ={Styles.top}>
            
        <View style={Styles.imageContainer}>
        <Image style={Styles.image}source={require('../Images/nine.jpg')}/>
        <Text style ={Styles.text}>Class  Books</Text>
        </View>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1_WBR_X4l1nTV-tBKNA2tHpNjcBfJxSdd/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_science_ncert.jpg')}/>
        <Text style ={Styles.text1}>Science(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}>
        <Image style={Styles.image}source={require('../Images/six_schand.jpg')}/>
        <Text style ={Styles.text1}>Science(S.Chand)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1m8p7CgUxnI-SVgqE7V3Skzk4035jjaaf/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_geography.jpg')}/>
        <Text style ={Styles.text1}>Geography(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1gTqArHPOt4Gw701_5LczSNuQo0rXRZLn/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_history.jpg')}/>
        <Text style ={Styles.text1}>History(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1usFpV3QtEiCuMbnlGnNhrtLEL-aqPoKC/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_politics.jpg')}/>
        <Text style ={Styles.text1}>Politics(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1G6Q46Jp61jAARhY-RnuEhzocwz8szVhy/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/nine_eco.jpg')}/>
        <Text style ={Styles.text1}>Economics(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}>
        <Image style={Styles.image}source={require('../Images/six_socialscience.jpg')}/>
        <Text style ={Styles.text1}>S.Science(S.chand)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
         onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1_BkmXMY7798M3wlukjgzK_wu5kRvSAgL/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/Six_maths.jpg')}/>
        <Text style ={Styles.text1}>Maths(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}>
        <Image style={Styles.image}source={require('../Images/six_rd_.jpg')}/>
        <Text style ={Styles.text1}>Maths(RD Sharma)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}>
        <Image style={Styles.image}source={require('../Images/six_rs.jpg')}/>
        <Text style ={Styles.text1}>Maths(Rs Aggarwal)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1_OSmhFiE1UfBMT25C-64_qFoBHqdrBo5/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>
        
        <Text style ={Styles.text1}>English(Beehive)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1cz5a0NmmgMaEuRWGZc5HjFPJX2lH8UMG/view?usp=sharing")}>
        <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>
        
        <Text style ={Styles.text1}>English(word_exp.)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1pYlqZeHyhXVoLYw1RsrraEiQmJAuv7Q1/view?usp=sharing")}>
        <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>
        
        <Text style ={Styles.text1}>English(Moments)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1s68xXAdOUJGsuj4WDH8EtA5GL5OZqk0M/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
        <Text style ={Styles.text1}>Hindi(chitiz)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1BwPS9dHsjLO_bBoV_3nTZEtmK9LxGi7P/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
        <Text style ={Styles.text1}>Hindi(Kritika)</Text>
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
export default Class_9;