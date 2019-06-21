import React, { Component } from 'react';
import Header from "./Header";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Image,
  Alert,
  TouchableOpacity, 
  ActivityIndicator, 
  Platform
} from 'react-native';

export default class Tambah extends React.Component {

  constructor()
  {
      super();

      this.state = { kode_barang: '', nama_barang: '', jenis_barang: '', kode_kategori: '', loading: false, disabled: false }
  }

  saveData= () =>
  {
      this.setState({ loading: true, disabled: true }, () =>
      {
          fetch('https://latihanuas.000webhostapp.com/tambahBarang.php',
          {
              method: 'POST',
              headers: 
              {
                  'Accept': 'application/json',
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify(
              {
                kode_barang: this.state.kode_barang,
                nama_barang: this.state.nama_barang,
                jenis_barang: this.state.jenis_barang,
                kode_kategori: this.state.kode_kategori,
              })

          }).then((response) => response.text()).then((responseJson) =>
          {
              alert(responseJson);
              this.setState({ loading: false, disabled: false });
          }).catch((error) =>
          {
              console.error(error);
              this.setState({ loading: false, disabled: false });
          });
      });
  }
  render() {
    return (
      <View style={styles.container}>
        <Header judul={"E-INVENTORY \n --------------Aplikasi Daftar Inventaris---------------"} />

        <View style={{ justifyContent: 'center', alignItems: 'center', marginBottom:80,}}>
        <Text style={{ fontSize: 25, fontWeight: 'bold', color: "black" }}>TAMBAH BARANG</Text>
         </View>

        
        <View style={styles.inputContainer}>
        <Text style={styles.txtLabelInput}>Kode Barang:</Text>
          <TextInput style={styles.inputs}
              placeholder="Kode"
              underlineColorAndroid='transparent'
              onChangeText={(kode_barang) => this.setState({kode_barang})}/>
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.txtLabelInput}>Nama Barang:</Text>
          <TextInput style={styles.inputs}
              placeholder="Nama"
              underlineColorAndroid='transparent'
              onChangeText={(nama_barang) => this.setState({nama_barang})}/>
        </View>
        
        <View style={styles.inputContainer}>
        <Text style={styles.txtLabelInput}>Jenis Barang:</Text>
          <TextInput style={styles.inputs}
              placeholder="Jenis"
              underlineColorAndroid='transparent'
              onChangeText={(jenis_barang) => this.setState({jenis_barang})}/>
        </View>

        <View style={styles.inputContainer}>
        <Text style={styles.txtLabelInput}>Kode Kategori:</Text>
          <TextInput style={styles.inputs}
              placeholder="KodeKate"
              underlineColorAndroid='transparent'
              onChangeText={(kode_kategori) => this.setState({kode_kategori})}/>
        </View>

        <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.saveData()}>
          <Text style={styles.loginText}>Tambah</Text>
        </TouchableHighlight>

        <TouchableHighlight activeOpacity={0.5} style={[styles.buttonContainer, styles.loginButton]} onPress={()=> this.props.navigation.navigate('upload') }>
          <Text style={styles.loginText}>Upload Foto</Text>
        </TouchableHighlight>
       
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#87CEEB',
    flexDirection: 'column'
  },
  inputContainer: {
      borderBottomColor: '#F5FCFF',
      backgroundColor: '#FFFFFF',
      borderRadius:10,
      borderBottomWidth: 1,
      width:320,
      height:40,
      marginBottom:10,
      flexDirection: 'row',
      alignItems:'center'
  },
  inputs:{
      height:45,
      marginRight:100,
      borderBottomColor: '#FFFFFF',
      flex:1,
  },
  inputIcon:{
    width:30,
    height:30,
    marginLeft:15,
    justifyContent: 'center'
  },
  buttonContainer: {
    height:45,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:20,
    width:100,
    borderRadius:30,
  },
  loginButton: {
    backgroundColor: "#666666",
  },
  txtLabelInput: {
    flex:2,
    height: 30,
    marginLeft:10,
    marginTop:10

},
  loginText: {
    color: 'white',
  }
});