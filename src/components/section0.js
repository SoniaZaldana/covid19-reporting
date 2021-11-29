import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Section0 = ({handleChange, formFields, formErrors}) => (
    <>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="reportingDate" onChange={handleChange} md>
          <Form.Label><strong>Date of reporting to national health authority</strong></Form.Label>
          <Form.Control type="date" />
          {formErrors.reportingDate.length > 0 && (
            <Form.Text className="text-danger">{formErrors.reportingDate}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId="reportingCountry" onChange={handleChange} md>
          <Form.Label>Reporting country</Form.Label>
          <Form.Control type="text"  />
          {formErrors.reportingCountry.length > 0 && (
            <Form.Text className="text-danger">{formErrors.reportingCountry}</Form.Text>
          )}
        </Form.Group>
      </Row>
      <Row>
        <Form.Group as={Col} controlId="whyTested" onChange={handleChange} >
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
        <Form.Group as={Col} controlId="whyTestedWriteIn" onChange={handleChange} >
          <Form.Label>If none of the above please explain</Form.Label>
          <Form.Control type="text" disabled={formFields.whyTested.length !== 0} />
          {formErrors.whyTestedWriteIn.length > 0 && (
            <Form.Text className="text-warning">{formErrors.whyTestedWriteIn}</Form.Text>
          )}
        </Form.Group>
      </Row>
    </>
);
