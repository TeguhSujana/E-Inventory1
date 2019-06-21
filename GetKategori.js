import React from 'react';
import { StyleSheet, Text,FlatList, View, TextInput, TouchableHighlight } from 'react-native';
import {ListItem } from 'react-native-elements'
import axios from 'axios';

export default class GetKategori extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            categories: [],
        };
      }
      componentDidMount() {
        axios.get('https://latihanuas.000webhostapp.com/getKategoriBarang.php')
          .then(res => {
            const categories = res.data;
            console.log(categories);
            this.setState({ categories });
          })
          .catch(function (error){
            console.log(error);
        })
      }
    
      render() {
        return (
            <View style={styles.container} >
              <View style={styles.header}>
                <Text style={styles.txtHeader}> DAFTAR KATEGORI </Text>
                <Text style={styles.txtHeader}> Aplikasi Daftar Inventaris </Text>
              </View>
              <FlatList
                  keyExtractor = {(item, index) => index.toString()}
                  data={this.state.categories}
                  renderItem = {({ item }) => (
                    <ListItem
                      onPress={()=>this.props.navigation.navigate("GetKategori",{kode_kategori:item.kode_kategori,nama_kategori:item.nama_kategori,keterangan:item.keterangan})}
                      title={item.nama_kategori}
                      leftAvatar={{ source: { uri: 'http://latihanuas.000webhostapp.com/api/uploads/'+item.gambar } }}
                    />
                  )}
              />
           </View>
        );
      }
    }
    
    const styles = StyleSheet.create({
      container: {
        marginTop: 20,
           flex: 1,
      },
      txtHeader: {
        fontSize: 20,
        textAlign: 'center',
        color:'#fff'
      },
      header: {
        height:70,
        backgroundColor:'blue',
        justifyContent:'center',
        alignItems:'center'
      },
    });
