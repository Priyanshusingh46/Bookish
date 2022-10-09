import React from 'react';
import {View,Text,Image,StyleSheet, TouchableOpacity,ScrollView} from 'react-native';
import * as OpenAnything from "react-native-openanything"

function Class_10({navigation})
{
    return(
        <ScrollView style ={Styles.top}>
            
            <View style={Styles.imageContainer}>
            <Image style={Styles.image}source={require('../Images/tenth.jpg')}/>
            <Text style ={Styles.text}>Class  Books</Text>
            </View>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/10pB4nuBRP4ppKMQZopGhWE6sefZFCHzz/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_science_ncert.jpg')}/>
            <Text style ={Styles.text1}>Science(NCERT)</Text>
            </TouchableOpacity>


            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1d6l8rdRmxTIWNpC201kxLezRQ6pIlJWw/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_geography.jpg')}/>
            <Text style ={Styles.text1}>Geography(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1JOPAXugaxahSvUtbvrVPXmQaWYqLUKH3/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_history.jpg')}/>
            <Text style ={Styles.text1}>History(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1gd68WuylLKQrCZvl5fWRdcPcaKJi4VPN/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/ten_eco.jpg')}/>
            <Text style ={Styles.text1}>Economics(NCERT)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1DLPoEw8dVxVWccVmug02aPZZzHCJaz5z/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_politics.jpg')}/>
            <Text style ={Styles.text1}>Politics(NCERT)</Text>
            </TouchableOpacity>


            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1_UImlxZwV40ovqWGYakdEP0wHgsjzWvB/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/Six_maths.jpg')}/>
            <Text style ={Styles.text1}>Maths(NCERT)</Text>
            </TouchableOpacity>


            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1v4jDCBL2pPHw7OqqLqf8F3UaKteryHyh/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>
            
            <Text style ={Styles.text1}>English(First Flight)</Text>
            </TouchableOpacity>


            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1pU5WMfYmLH5PXE3CCGUPOW6rC7kcE6vg/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_english.jpg')}/>
            
            <Text style ={Styles.text1}>English(Foot Print)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1_uJUvmvGu5RJUvy1yXFyWrL_3IC3goT1/view?usp=sharing")}
            >
            <Image style={Styles.image}source={require('../Images/six_hindi.jpg')}/>
            <Text style ={Styles.text1}>Hindi(chitiz)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}
            onPress={()=>OpenAnything.Pdf("https://drive.google.com/file/d/1cnMXyMSTLaW4IqbS71lIh5KVSbAgp0u9/view?usp=sharing")}
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
export default Class_10;

/*

            <TouchableOpacity style={Styles.imageContainer1}>
            <Image style={Styles.image}source={require('../Images/six_rd_.jpg')}/>
            <Text style ={Styles.text1}>Maths(RD Sharma)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}>
            <Image style={Styles.image}source={require('../Images/six_rs.jpg')}/>
            <Text style ={Styles.text1}>Maths(Rs Aggarwal)</Text>
            </TouchableOpacity>


             <TouchableOpacity style={Styles.imageContainer1}>
            <Image style={Styles.image}source={require('../Images/ten_science.jpg')}/>
            <Text style ={Styles.text1}>Xam Idea(Science)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}>
            <Image style={Styles.image}source={require('../Images/ten_sscience.jpg')}/>
            <Text style ={Styles.text1}>Xam Idea(S.Science)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}>
            <Image style={Styles.image}source={require('../Images/ten_math.jpg')}/>
            <Text style ={Styles.text1}>Xam Idea(Maths)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}>
            <Image style={Styles.image}source={require('../Images/ten_english.jpg')}/>
            <Text style ={Styles.text1}>Xam Idea(English)</Text>
            </TouchableOpacity>

            <TouchableOpacity style={Styles.imageContainer1}>
            <Image style={Styles.image}source={require('../Images/ten_hindi.jpg')}/>
            <Text style ={Styles.text1}>Xam Idea(Hindi)</Text>
            </TouchableOpacity>

            */