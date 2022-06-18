import React, { useState } from 'react';
import { Container } from './styles/container';
import Header from './components/header/Header';
import Form from './components/form/Form';

interface iState {
  //declare types here
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[] //declares this as an array of objects
}

const App:React.FC = () => {

  const [people, setPeople] = useState<iState["people"]>([]);

  return (
  <>
  <Container>
      <Header />

      <Form/>
  </Container>
  
  </>
)}

export default App;
