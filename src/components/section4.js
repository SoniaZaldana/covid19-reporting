import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Section4 = ({handleChange, formFields, formErrors}) => (
  <>
    <h2 className='section-header'>Section 4: Outcome: complete and re-sent the full form as soon as outcome of disease is known or after 30 days after initial report</h2>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDateResubmission" onChange={handleChange} md>
        <Form.Label><strong>Date of re-submission of this report:</strong></Form.Label>
        <Form.Control type="date" required />
        {formErrors.outcomeDateResubmission.length > 0 && (
          <Form.Text className="text-danger">{formErrors.outcomeDateResubmission}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDevelop" onChange={handleChange} md>
        <Form.Label>If case was asymptomatic at time of specimen collection
        resulting in first laboratory confirmation, did the case develop any
        symptoms or signs <i>at any time</i> prior to discharge or death:</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeDevelop"
          id="outcomeDevelopNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes, asymptomatic case (as previously reported) developed symptoms and/or signs of illness"
          name="outcomeDevelop"
          id="outcomeDevelopYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeDevelop"
          id="outcomeDevelopUnknown"
          required
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group controlId="outcomeDevelopYesDate" className='flex-row' onChange={handleChange} >
        <Form.Label><i>If yes,</i> date of onset of symptoms/signs of illness</Form.Label>
        <Form.Control type="date" disabled={formFields.outcomeDevelop !== 'yes'} className="yes-outcomedevelop"/>
        {formFields.outcomeDevelop === 'yes' && formErrors.outcomeDevelopYesDate.length > 0 && (
          <Form.Text className="text-danger">{formErrors.outcomeDevelopYesDate}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <strong>Clinical Course:</strong>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeAdmission" onChange={handleChange} md>
        <Form.Label>Admission to hospital (may have been previously reported):</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeAdmission"
          id="outcomeAdmissionNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="outcomeAdmission"
          id="outcomeAdmissionYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeAdmission"
          id="outcomeAdmissionUnknown"
          required
        />
      </Form.Group>
    </Row>
    <i>If admitted to hospital:</i>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDateAdmission" onChange={handleChange} md>
        <Form.Label>First date of admission to hospital:</Form.Label>
        <Form.Control type="date" disabled={formFields.outcomeAdmission !== 'yes'} />
        {formFields.outcomeAdmission === 'yes' && formErrors.outcomeDateAdmission.length > 0 && (
          <Form.Text className="text-danger">{formErrors.outcomeDateAdmission}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeAdmissionICU" onChange={handleChange} md>
        <Form.Label>Did the case receive care in an intensive care unit (ICU)? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeAdmissionICU"
          id="outcomeAdmissionICUNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="outcomeAdmissionICU"
          id="outcomeAdmissionICUYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeAdmissionICU"
          id="outcomeAdmissionICUUnknown"
          required
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeAdmissionVentilation" onChange={handleChange} md>
        <Form.Label>Did the case receive ventilation? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeAdmissionVentilation"
          id="outcomeAdmissionVentilationNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="outcomeAdmissionVentilation"
          id="outcomeAdmissionVentilationYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeAdmissionVentilation"
          id="outcomeAdmissionVentilationUnknown"
          required
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeAdmissionOxygenation" onChange={handleChange} md>
        <Form.Label>Did the case receive extracorporeal membrane oxygenation? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeAdmissionOxygenation"
          id="outcomeAdmissionOxygenationNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="outcomeAdmissionOxygenation"
          id="outcomeAdmissionOxygenationYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeAdmissionOxygenation"
          id="outcomeAdmissionOxygenationUnknown"
          required
        />
      </Form.Group>
    </Row>
    <br/>
    <Row>
      <Form.Group as={Col} controlId="outcomeHealth" onChange={handleChange} md>
        <Form.Label><strong>Health outcome:</strong> </Form.Label>
        <Form.Check
          type="radio"
          label="Recovered/Healthy"
          name="outcomeHealth"
          id="outcomeHealthRecovered"
          required
        />
        <Form.Check
          type="radio"
          label="Not recovered"
          name="outcomeHealth"
          id="outcomeHealthNot"
          required
        />
        <Form.Check
          type="radio"
          label="Death"
          name="outcomeHealth"
          id="outcomeHealthDeath"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeHealth"
          id="outcomeHealthUnknown"
          required
        />
        <Form.Check
          type="radio"
          label="Other"
          name="outcomeHealth"
          id="outcomeHealthOther"
          required
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeHealthOtherWriteIn" onChange={handleChange} md>
        <Form.Label>If other, please explain:</Form.Label>
        <Form.Control type="text" disabled={formFields.outcomeHealth !== 'other'} />
        {formFields.outcomeHealth === 'other' && formErrors.outcomeHealthOtherWriteIn.length > 0 && (
          <Form.Text className="text-danger">{formErrors.outcomeHealthOtherWriteIn}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDateRelease" onChange={handleChange} md>
        <Form.Label>Date of Release from isolation/hospital or Date of Death:</Form.Label>
        <Form.Control
          type="date"
          disabled={!( formFields.outcomeAdmission === 'yes' || formFields.outcomeAdmission === 'unknown' || 
          formFields.outcomeHealth === 'death' || formFields.outcomeHealth === 'unknown' || formFields.outcomeHealth === 'other' )}
        />
        {( formFields.outcomeAdmission === 'yes' || formFields.outcomeAdmission === 'unknown' || 
          formFields.outcomeHealth === 'death' || formFields.outcomeHealth === 'unknown' || formFields.outcomeHealth === 'other')
          && formErrors.outcomeDateRelease.length > 0 && (
          <Form.Text className="text-danger">{formErrors.outcomeDateRelease}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <br/>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDateTest" onChange={handleChange} md>
        <Form.Label><strong>If released from hospital /isolation, date of last laboratory test:</strong></Form.Label>
        <Form.Control type="date" required/>
        {formErrors.outcomeDateTest.length > 0 && (
          <Form.Text className="text-danger">{formErrors.outcomeDateTest}</Form.Text>
        )}
      </Form.Group>
      <Form.Group as={Col} controlId="outcomeTestResult" onChange={handleChange} md>
        <Form.Label>Results of last test:</Form.Label>
        <Form.Check
          type="radio"
          label="Positive"
          name="outcomeTestResult"
          id="outcomeTestResultPositive"
          required
        />
        <Form.Check
          type="radio"
          label="Negative"
          name="outcomeTestResult"
          id="outcomeTestResultNegative"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeTestResult"
          id="outcomeTestResultUnknown"
          required
        />
      </Form.Group>
    </Row>
    <br/>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeTotalContacts" md className="flex-row" onChange={handleChange}>
        <Form.Label><strong>Total number of contacts followed for this case:</strong></Form.Label>
        <div className="flex-row">
          <Form.Control type="number" min="0" disabled={formFields.outcomeTotalContacts === 'unknown'}/>
          <Form.Check
            type="checkbox"
            label="Unknown"
            name="outcomeTotalContacts"
            id="outcomeTotalContactsUnknown"
          />
        </div>
        {formFields.outcomeTotalContacts !== 'unknown' && formErrors.outcomeTotalContacts.length > 0 && (
          <Form.Text className="text-danger">{formErrors.outcomeTotalContacts}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col}>

      </Form.Group>
    </Row>

  </>
)