import React from 'react';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import MainScreen from './Main';
import upload from './upload';
import Login from './Login';
import Tambah from './Tambah';
import GetKategori from './GetKategori';
import GetBarang1 from './GetBarang1';
import Bantuan from './Bantuan';



const AppNavigator = createStackNavigator(
        {
            Utama: MainScreen,
            upload:upload,
            Login:Login,
            Tambah:Tambah,
            GetKategori:GetKategori,
            GetBarang1:GetBarang1,
            Bantuan:Bantuan,
        },
        {
            initialRouteName: "Login"
        }
        );
export default createAppContainer(AppNavigator);