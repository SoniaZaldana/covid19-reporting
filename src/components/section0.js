import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section0() {
  return (
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="reportingDate" md>
          <Form.Label><strong>Date of reporting to national health authority</strong></Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group as={Col} controlId="reportingCountry" md>
          <Form.Label>Reporting country</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="whyTested">
          <Form.Label>Why tested for COVID-19:</Form.Label>
          <Form.Check
            type="checkbox"
            label="Contact of a case"
            name="whyTested"
            id="whyTestedContact"
          />
          <Form.Check
            type="checkbox"
            label="Ill seeking healthcare due to suspicion of COVID-19"
            name="whyTested"
            id="whyTestedSeeking"
          />
          <Form.Check
            type="checkbox"
            label="Detected at point of entry"
            name="whyTested"
            id="whyTestedDetected"
          />
          <Form.Check
            type="checkbox"
            label="Repatriation"
            name="whyTested"
            id="whyTestedRepatriation"
          />
          <Form.Check
            type="checkbox"
            label="Routine respiratory disease surveillance systems (e.g. influenza)"
            name="whyTested"
            id="whyTestedRoutine"
          />
          <Form.Check
            type="checkbox"
            label="Unknown"
            name="whyTested"
            id="whyTestedUnknown"
          />
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="whyTestedWriteIn">
          <Form.Label>If none of the above please explain</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
      </Row>
    </>
  );
}

export default Section0;
