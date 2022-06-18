import React from 'react';
import { Container } from './styles/container';
import Header from './components/Header';

const App:React.FC = () => {

  return (
  <>
  <Container>
      <Header />

      <div>
        other content would go here...
      </div>
  </Container>
  
  </>
)}

export default App;
