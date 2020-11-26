import React from 'react';
import { Image } from 'react-native';

import { Container, Title } from './styles';

import Button from '../../components/Button';
import Input from '../../components/Input';

import logoImg from '../../assets/logo.png';
import { ButtonText } from '../../components/Button/styles';

const Home: React.FC = () => {

  return (
    <Container>
      <Image source={logoImg} style={{}} />
      <Title>Título</Title>
      <Input name="email" icon="mail" placeholder="E-mail" />
      <Button onPress={() => {}} >Entrar</Button>
    </Container>
  );
};

export default Home;