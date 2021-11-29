import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Section1 = ({handleChange, formFields, formErrors}) => (
  <>
      <h2 className='section-header'>Section 1: Patient Information</h2>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="uniqueCaseId" onChange={handleChange}>
          <Form.Label><strong>Unique Case Identifier (used in country):</strong></Form.Label>
          <Form.Control type="text" />
          {formErrors.uniqueCaseId.length > 0 && (
            <Form.Text className="text-danger">{formErrors.uniqueCaseId}</Form.Text>
          )}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="patientAgeYears" onChange={handleChange} md>
          <Form.Label>Age (years):</Form.Label>
          <Form.Control type="number" min="0" max="150" disabled={formFields.patientAgeMonths || formFields.patientAgeDays} />
          {formErrors.patientAgeYears.length > 0 && (
            <Form.Text className="text-danger">{formErrors.patientAgeYears}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId="patientAgeMonths" onChange={handleChange} md>
          <Form.Label>If &lt;1 year old (in months)</Form.Label>
          <Form.Control type="number" min="0" max="12" disabled={formFields.patientAgeYears || formFields.patientAgeDays} />
          {formErrors.patientAgeMonths.length > 0 && (
            <Form.Text className="text-danger">{formErrors.patientAgeMonths}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId="patientAgeDays" onChange={handleChange} md>
          <Form.Label>or if &lt;1 month (in days)</Form.Label>
          <Form.Control type="number" min="0" max="31" disabled={formFields.patientAgeYears || formFields.patientAgeMonths} />
          {formErrors.patientAgeDays.length > 0 && (
            <Form.Text className="text-danger">{formErrors.patientAgeDays}</Form.Text>
          )}
        </Form.Group>
        {formErrors.patientAge.length > 0 && (
            <Form.Text className="text-danger">{formErrors.patientAge}</Form.Text>
          )}
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="patientSex" onChange={handleChange}>
          <Form.Label>Sex at birth:</Form.Label>
          <Form.Check
            type="radio"
            label="Male"
            name="patientSex"
            id="sexMale"
            required
          />
          <Form.Check
            type="radio"
            label="Female"
            name="patientSex"
            id="sexFemale"
            required
          />
          {formErrors.patientSex.length > 0 && (
            <Form.Text className="text-danger">{formErrors.patientSex}</Form.Text>
          )}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="patientDiagnosisCountry" onChange={handleChange} md>
          <Form.Label>Place where the case was diagnosed: Country:</Form.Label>
          <Form.Control type="text" />
          {formErrors.patientDiagnosisCountry.length > 0 && (
            <Form.Text className="text-danger">{formErrors.patientDiagnosisCountry}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId="patientDiagnosisProvince" onChange={handleChange} md>
          <Form.Label>Admin Level 1 (province):</Form.Label>
          <Form.Control type="text"/>
          {formErrors.patientDiagnosisProvince.length > 0 && (
            <Form.Text className="text-danger">{formErrors.patientDiagnosisProvince}</Form.Text>
          )}
        </Form.Group>
      </Row>
      <Row className="mb-3">
        <Form.Group as={Col} controlId="patientResidencyCountry" onChange={handleChange}>
          <Form.Label>Case usual place of residency: Country:</Form.Label>
          <Form.Control type="text" />
          {formErrors.patientResidencyCountry.length > 0 && (
            <Form.Text className="text-danger">{formErrors.patientResidencyCountry}</Form.Text>
          )}
        </Form.Group>
      </Row>


  </>
);
