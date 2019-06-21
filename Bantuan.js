import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class Bantuan extends React.Component{
  render() {
    return (
      <View style={styles.container}>
          <Image
      style={styles.gambar}
      source={require("./iconbarang.png")}
      resizeMode="contain"
       />
       <View style={styles.container}>
        <Text style={styles.tulisan}>Helloo</Text>
        <Text style={styles.tulisan}>Aplikasi ini membantu anda untuk mengatur barang inventaris yang ada, anda bisa melihat daftar barang dan kategori barang pada menu utama</Text>
        </View>
      </View>
    );
  }
}

  const styles = StyleSheet.create({
    container: {
    flex: 1,
    backgroundColor: '#87CEEB',
    alignItems: 'center',
    justifyContent: 'center',
    },
    gambar: {
        height:200,
        width:200,
        //marginBottom:50,
        marginLeft:80,
        marginRight:100,
        },
    tulisan: {
        alignItems:'center',
        justifyContent:'center',
        //marginTop:20,
        fontSize: 30,
        color: 'black',
        marginBottom:10,
        fontFamily: 'vincHand',
        //fontWeight:'bold'
        },
  });
