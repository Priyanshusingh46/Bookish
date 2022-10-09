import React from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import * as OpenAnything from "react-native-openanything"

function Class_12({navigation})
{
    return( <ScrollView style ={Styles.top}>
            
        <View style={Styles.imageContainer}>
        <Image style={Styles.image}source={require('../Images/class-12.jpg')}/>
        <Text style ={Styles.text}>Class  Books</Text>
        </View>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1Ensmifc1SyVEZCKwNlmdXOGhwLcn487v/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_science_ncert.jpg')}/>
        <Text style ={Styles.text1}>Maths-I(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1Uyp5U46wHupIOlJkNDJwi_t9YYhgDtD2/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_science_ncert.jpg')}/>
        <Text style ={Styles.text1}>Maths-II(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}>
        <Image style={Styles.image}source={require('../Images/six_rs.jpg')}/>
        <Text style ={Styles.text1}>Maths(Rs Aggrawal)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}>
        <Image style={Styles.image}source={require('../Images/six_rd_.jpg')}/>
        <Text style ={Styles.text1}>Maths(RD sharma)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}>
        <Image style={Styles.image}source={require('../Images/eleven_kc.jpg')}/>
        <Text style ={Styles.text1}>Maths(KC Sinha)</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1cF1zmxn2F-M7rWey0X5vs06CboNGyx2c/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/phy_11.jpg')}/>
        <Text style ={Styles.text1}>Physcis-I(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1-8pDB5Q5ZMxVvL04-qWOY-nFFoypu3IB/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/phy_11.jpg')}/>
        <Text style ={Styles.text1}>Physcis-II(NCERT)</Text>
        </TouchableOpacity>
        
        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1uIk04vZpS2JZ-3TRPM3EuKzb8xXFQKhn/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/halliday.jpg')}/>
        <Text style ={Styles.text1}>Halliday/Resnick</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1UoEjPVPUL1Pft9-EY-XUOOC1oUOW13tk/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/chem_11.jpg')}/>
        <Text style ={Styles.text1}>Chemistry-I(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1KWXpkdY6fobi-i--0G2mALMMw81Fq1mV/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/chem_11.jpg')}/>
        <Text style ={Styles.text1}>Chemistry-II(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/19SE_bwfQK28h5GpnHvW9kikPpmSx9FXE/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/pradeep_11.jpg')}/>
        <Text style ={Styles.text1}>Chemistry(Pradeep)</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1Qe5Lcp18AwwBQ8_dFSoMQpeV5C1hsvpQ/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/hornwill.jpg')}/>
        <Text style ={Styles.text1}>English(Flamingo)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1bDk-LiK6PDxhNrYFmzgZlif21yBq1ESk/view?usp=sharing")}>
        <Image style={Styles.image}source={require('../Images/hornwill.jpg')}/>
        <Text style ={Styles.text1}>English(Vitas)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1eaBL9HYuvxVr1ZV_1vnckmsZ8AUSMztY/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/paint.jpg')}/>
        <Text style ={Styles.text1}>Painting</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1ApeYTE1OCqVLEy6zik358aQyM4mE5Op1/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/physical.jpg')}/>
        <Text style ={Styles.text1}>Physical Education</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/114LBjwsW4ems7YVh656nTeMD8OP0nbnz/view?usp=sharing")}
        >
            <Image style={Styles.image}source={require('../Images/ten_math.jpg')}/>
            <Text style ={Styles.text1}>Xam Idea(Maths)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1p18iP7F6BEcZBvUOUCl7n0Q8wWIR4cG4/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/ten_english.jpg')}/>
            <Text style ={Styles.text1}>Xam Idea(English)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1W5OfX7uVW58UJhryvvN1JY0SRKYFgHzI/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/xam_physics.jpg')}/>
            <Text style ={Styles.text1}>Xam Idea(Physics)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1zHczK0gG5ownEC6eqjGKhYtkju2nAHBF/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/xam_chem.jpg')}/>
            <Text style ={Styles.text1}>Xam Idea(Chemistry)</Text>
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
export default Class_12;