import React, { useState } from 'react';
import { Container } from './styles/container';
import Header from './components/header/Header';
import Form from './components/form/Form';
import Success from './components/success/success';

interface iState {
  displayForm: boolean
}

const App:React.FC = () => {

  const [displayForm, setDisplayForm] = useState<iState["displayForm"]>(true);

  return (
  <>
  <Container>
      {displayForm &&
          <Header />
      }
    
      {displayForm ?
        <Form 
          submitFunction={setDisplayForm}
        />
        :
        <Success />
      }
  </Container>
  
  </>
)}

export default App;
