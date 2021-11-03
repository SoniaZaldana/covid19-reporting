import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section1() {
  return (<>
      <h2 className='section-header'>Section 1: Patient Information</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="uniqueCaseId">
          <Form.Label><strong>Unique Case Identifier (used in country):</strong></Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="patientAgeYears" md>
          <Form.Label>Age (years):</Form.Label>
          <Form.Control type="number" min="0"/>
        </Form.Group>
        <Form.Group as={Col} controlId="patientAgeMonths" md>
          <Form.Label>If &lt;1 year old (in months)</Form.Label>
          <Form.Control type="number" min="0"/>
        </Form.Group>
        <Form.Group as={Col} controlId="patientAgeDays" md>
          <Form.Label>or if &lt;1 month (in days)</Form.Label>
          <Form.Control type="number" min="0"/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="patientSex">
          <Form.Label>Sex at birth:</Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            name="patientSex"
            id="sexMale"
          />
          <Form.Check
            type="radio"
            label="Female"
            name="patientSex"
            id="sexFemale"
          />
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="patientDiagnosisCountry" md>
          <Form.Label>Place where the case was diagnosed: Country:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId="patientDiagnosisProvince" md>
          <Form.Label>Admin Level 1 (province):</Form.Label>
          <Form.Control type="text"/>
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="patientResidencyCountry">
          <Form.Label>Case usual place of residency: Country:</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
      </Row>


    </>
    )
}

export default Section1;
