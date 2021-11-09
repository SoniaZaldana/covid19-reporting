import React from 'react';
import Container from 'react-bootstrap/Container';
import ReportForm from './components/reportForm.js';
import './styles/styles.css';

function App() {
  console.log('I am running!');
  return (<>
    <h1>Revised case report form for Confirmed Novel Coronavirus COVID-19<br/>
    (report to WHO within 48 hours of case identification)</h1>
    <Container>
      <ReportForm />
    </Container>
  </>);
}

export default App;
