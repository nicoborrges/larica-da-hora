import {View, Text} from 'react-native'
import { Routes } from './src/routes'
import { NavigationContainer } from '@react-navigation/native'

require('dotenv').config()

export default function App(){
  return (
      <NavigationContainer>
        <Routes />
      </NavigationContainer>
  )
}