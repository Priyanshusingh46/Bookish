import React from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import * as OpenAnything from "react-native-openanything"

function Class_11()
{
    return(
        <ScrollView style ={Styles.top}>
            
        <View style={Styles.imageContainer}>
        <Image style={Styles.image}source={require('../Images/class_11.jpg')}/>
        <Text style ={Styles.text}>Class  Books</Text>
        </View>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1YWLuBvobrJt6f0IqxtTSMOKwC4Drpw3i/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/six_science_ncert.jpg')}/>
        <Text style ={Styles.text1}>Maths(NCERT)</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1ajDRPhzAWg0htKMuthCKTGg6tR5emPOh/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/phy_11.jpg')}/>
        <Text style ={Styles.text1}>Physcis-I(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1-YB5UyGFwbUIeeJJPz45lb-otF_mqOa1/view?usp=sharing")}
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
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1ttLz1xP_J53iJMVeQzYf6fU3yNOpNSLK/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/chem_11.jpg')}/>
        <Text style ={Styles.text1}>Chemistry-I(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1RCmjdD7WiC6DXSvZn9-cie_nU1WE_-J7/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/chem_11.jpg')}/>
        <Text style ={Styles.text1}>Chemistry-II(NCERT)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1d1c4ZGK0G6QtIU4zQvjWToe8a0vuiP-O/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/pradeep_11.jpg')}/>
        <Text style ={Styles.text1}>Chemistry(Pradeep)</Text>
        </TouchableOpacity>


        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1_rFYpEe43HYiv2D8es-y9PgYvyNqjWJ_/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/hornwill.jpg')}/>
        <Text style ={Styles.text1}>English(Hornbill)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1CAdHz_rXD4dErJAmkPlA6MpyVXN9sjfT/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/hornwill.jpg')}/>
        <Text style ={Styles.text1}>English(SnapShot)</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1eaBL9HYuvxVr1ZV_1vnckmsZ8AUSMztY/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/paint.jpg')}/>
        <Text style ={Styles.text1}>Painting</Text>
        </TouchableOpacity>

        <TouchableOpacity style={Styles.imageContainer1}
        onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1L3vhOGrYonXayTSxpbDPB57V-aTtdcGj/view?usp=sharing")}
        >
        <Image style={Styles.image}source={require('../Images/physical.jpg')}/>
        <Text style ={Styles.text1}>Physical Education</Text>
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
export default Class_11;