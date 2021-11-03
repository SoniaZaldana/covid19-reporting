import React from 'react';
import Container from 'react-bootstrap/Container';
import Section0 from './components/section0.js';
import Section1 from './components/section1.js';
import Section2 from './components/section2.js';
import Section3 from './components/section3.js';
import Section4 from './components/section4.js';
import Button from 'react-bootstrap/Button'
import './styles/styles.css';

function App() {
  console.log('I am running!');
  return (<>
    <h1>Revised case report form for Confirmed Novel Coronavirus COVID-19<br/>
    (report to WHO within 48 hours of case identification)</h1>
    <Container>

      <form>
        <Section0 />
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </form>

    </Container>
  </>);
}

export default App;
