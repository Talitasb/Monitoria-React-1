import { StatusBar } from 'expo-status-bar';
import { Text, View } from 'react-native';
import Primeiro from './src/components/Primeiro/Primeiro';
import estilo from './src/components/Estilos/estilo'
import * as React from 'react';
import { Avatar, Button, Card, Title, Paragraph} from 'react-native-paper';

export default function App() {
  return (
    <View>
      <Card>
    <Card.Title title="Card Title" subtitle="Card Subtitle" left={LeftContent} />
    <Card.Content>
      <Title>Card title</Title>
      <Paragraph>Card content</Paragraph>
    </Card.Content>
    <Card.Cover source={{ uri: 'https://picsum.photos/700' }} />
    <Card.Actions>
      <Button>Cancel</Button>
      <Button>Ok</Button>
    </Card.Actions>
  </Card>
  <StatusBar style="auto"/>
    </View>
  );
}



