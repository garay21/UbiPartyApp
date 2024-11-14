import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Routes from './src/components/path.jsx';
import {AuthProvider} from './src/components/providers/loginProvider.jsx';

export default function App() {
  return (    
      <AuthProvider>
        <Routes/>
      </AuthProvider>
  );
}


