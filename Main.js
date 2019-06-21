import React from 'react';
import { StyleSheet, Text, View, TextInput, TouchableHighlight, Image } from 'react-native';
import Header from "./Header";
import { ScrollView } from 'react-native-gesture-handler';


export default class Main extends React.Component {

  render() {
    return (
    <View style={styles.containerMain}>

      <Header judul={"E-INVENTORY \n Aplikasi Daftar Inventaris"} />

      <ScrollView>

      <View style={styles.judul}>
      <Text style={styles.judul}> MENU UTAMA </Text>
      </View>
      <Image
      style={styles.gambar}
      source={require("./iconbarang.png")}
      resizeMode="contain"
       />

      <View style={styles.box1}>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Tambah') }>
                    <Text style={styles.buttonText}>Tambah Barang</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('GetBarang1') }>
                    <Text style={styles.buttonText}>Daftar Barang</Text>
                </TouchableHighlight>

                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('GetKategori') }>
                    <Text style={styles.buttonText}>Kategori Barang</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Bantuan') }>
                    <Text style={styles.buttonText}>Bantuan</Text>
                </TouchableHighlight>
                <TouchableHighlight activeOpacity={0.5} style={styles.button2Style} onPress={()=> this.props.navigation.navigate('Login') }>
                    <Text style={styles.buttonText}>Log Out</Text>
                </TouchableHighlight>

            </View>
            </ScrollView>
    </View>
    );
  }
}
const styles = StyleSheet.create({
  containerMain: {
    backgroundColor: '#87CEEB',
    flex: 1,
    flexDirection: 'column'
  },

  box1: {
    flex: 1,
    width: "90%",
    paddingTop: 20,
    marginLeft: 10,
    marginRight: 10,
    marginTop: 15,
    //justifyContent: "space-between",
    flexDirection: "column",
    alignItems: "center"

  },
  buttonText: {
        textAlign: "center",
        height: 40,
        width: "100%",
        marginTop: 10,
        color: "#ffff00",
        fontSize: 16
    },
  txtInput: {
        height: 30,
        backgroundColor:'#fff',
        borderColor: 'gray',
        borderWidth: 1,
    },

  button2Style: {
      paddingLeft: 20,
      paddingRight: 20,
      justifyContent: 'center',
      backgroundColor: "#1E90FF",
      marginTop: 20,
      marginBottom: 20,
      height: 60,
      width: 300,
      borderRadius: 5,
  },
  judul: {
    alignItems:'center',
    justifyContent:'center',
    marginTop:20,
    fontSize: 30,
    color: 'red',
    marginBottom:20,
    fontFamily: 'vincHand',
    fontWeight:'bold'
     },
  gambar: {
    height:200,
    width:200,
    //marginBottom:50,
    marginLeft:80,
    marginRight:100,
    },
});
