import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section4() {
  return (<>
    <h2 className='section-header'>Section 4: Outcome: complete and re-sent the full form as soon as outcome of disease is known or after
30 days after initial report</h2>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDateResubmission" md>
        <Form.Label><strong>Date of re-submission of this report:</strong></Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDevelop" md>
        <Form.Label>If case was asymptomatic at time of specimen collection
        resulting in first laboratory confirmation, did the case develop any
        symptoms or signs <i>at any time</i> prior to discharge or death:</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeDevelop"
          id="outcomeDevelopNo"
        />
        <div className='flex-row'>
          <Form.Check
            type="radio"
            label="Yes -- If yes, date of onset of symptoms/signs of illness:"
            name="outcomeDevelop"
            id="outcomeDevelopYes"
          />
          <Form.Control type="date" className="yes-outcomedevelop"/>
        </div>
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeDevelop"
          id="outcomeDevelopUnknown"
        />
      </Form.Group>
    </Row>
    <strong>Clinical Course:</strong>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeAdmission" md>
        <Form.Label>Admission to hospital (may have been previously reported):</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeAdmission"
          id="outcomeAdmissionNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="outcomeAdmission"
          id="outcomeAdmissionYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeAdmission"
          id="outcomeAdmissionUnknown"
        />
      </Form.Group>
    </Row>
    <i>If admitted to hospital:</i>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDateAdmission" md>
        <Form.Label>First date of admission to hospital:</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeAdmissionICU" md>
        <Form.Label>Did the case receive care in an intensive care unit (ICU)? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeAdmissionICU"
          id="outcomeAdmissionICUNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="outcomeAdmissionICU"
          id="outcomeAdmissionICUYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeAdmissionICU"
          id="outcomeAdmissionICUUnknown"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeAdmissionVentilation" md>
        <Form.Label>Did the case receive ventilation? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeAdmissionVentilation"
          id="outcomeAdmissionVentilationNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="outcomeAdmissionVentilation"
          id="outcomeAdmissionVentilationYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeAdmissionVentilation"
          id="outcomeAdmissionVentilationUnknown"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeAdmissionOxygenation" md>
        <Form.Label>Did the case receive extracorporeal membrane oxygenation? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="outcomeAdmissionOxygenation"
          id="outcomeAdmissionOxygenationNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="outcomeAdmissionOxygenation"
          id="outcomeAdmissionOxygenationYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeAdmissionOxygenation"
          id="outcomeAdmissionOxygenationUnknown"
        />
      </Form.Group>
    </Row>
    <br/>
    <Row>
      <Form.Group as={Col} controlId="outcomeHealth" md>
        <Form.Label><strong>Health outcome:</strong> </Form.Label>
        <Form.Check
          type="radio"
          label="Recovered/Healthy"
          name="outcomeHealth"
          id="outcomeHealthRecovered"
        />
        <Form.Check
          type="radio"
          label="Not recovered"
          name="outcomeHealth"
          id="outcomeHealthNot"
        />
        <Form.Check
          type="radio"
          label="Death"
          name="outcomeHealth"
          id="outcomeHealthDeath"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeHealth"
          id="outcomeHealthUnknown"
        />
        <Form.Check
          type="radio"
          label="Other"
          name="outcomeHealth"
          id="outcomeHealthOther"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeHealthOtherWriteIn" md>
        <Form.Label>If other, please explain:</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDateRelease" md>
        <Form.Label>Date of Release from isolation/hospital or Date of Death:</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeDateTest" md>
        <Form.Label><strong>If released from hospital /isolation, date of last laboratory test:</strong></Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
      <Form.Group as={Col} controlId="outcomeTestResult" md>
        <Form.Label>Results of last test:</Form.Label>
        <Form.Check
          type="radio"
          label="Positive"
          name="outcomeTestResult"
          id="outcomeTestResultPositive"
        />
        <Form.Check
          type="radio"
          label="Negative"
          name="outcomeTestResult"
          id="outcomeTestResultNegative"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="outcomeTestResult"
          id="outcomeTestResultUnknown"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="outcomeTotalContacts" md>
        <Form.Label><strong>Total number of contacts followed for this case:</strong></Form.Label>
        <Form.Control type="number" min="0"/>
      </Form.Group>
      <Form.Group as={Col} controlId="outcomeTotalContacts">
        <Form.Check
          type="checkbox"
          label="Unknown"
          name="outcomeTotalContacts"
          id="outcomeTotalContactsUnknown"
        />
      </Form.Group>
    </Row>

    </>)
}

export default Section4;
