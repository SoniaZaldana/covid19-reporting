import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Section2 = ({handleChange, formFields, formErrors}) => (
  <>
    <h2 className='section-header'>Section 2: Clinical Status</h2>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalDateLabTest" md>
        <Form.Label>Date of first laboratory confirmation test:</Form.Label>
        <Form.Control type="date" />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalSymptoms" md>
        <Form.Label><strong>Any symptoms* or signs at time of specimen collection that resulted in first laboratory confirmation?</strong></Form.Label>
        <Form.Check
          type="radio"
          label="No (i.e., asymptomatic)"
          name="clinicalSymptoms"
          id="clinicalSymptomsNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalSymptoms"
          id="clinicalSymptomsYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalSymptoms"
          id="clinicalSymptomsUnknown"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalSymptomsDate">
        <Form.Label><i>If yes,</i> date of onset of symptoms</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalUnderlyingConditions" md>
        <Form.Label><strong>Underlying conditions and comorbidity:</strong> Any underlying conditions?</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalUnderlyingConditions"
          id="clinicalUnderlyingConditionsNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalUnderlyingConditions"
          id="clinicalUnderlyingConditionsYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalUnderlyingConditions"
          id="clinicalUnderlyingConditionsUnknown"
        />
      </Form.Group>
    </Row>
    <Row >
      <Form.Group as={Col} controlId="clinicalUnderlyingConditionsCheckAll">
        <Form.Label><i>If yes,</i> please check all that apply:</Form.Label>
        <Row>
          <Col md>
            <div className="flex-row">
              <Form.Check
                type="checkbox"
                label="Pregnancy  (trimester:"
                name="clinicalUnderlyingConditionsCheckAll"
                id="clinicalUnderlyingConditionsPregnancy"
              />
              <Form.Control className="pregnancy-trimester" type="text"/>)
            </div>
            <Form.Check
              type="checkbox"
              label="Cardiovascular disease, including hypertension"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsCardio"
            />
            <Form.Check
              type="checkbox"
              label="Diabetes"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsDiabetes"
            />
            <Form.Check
              type="checkbox"
              label="Liver disease"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsLiver"
            />
            <Form.Check
              type="checkbox"
              label="Chronic neurological or neuromuscular disease"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsChronicNeuro"
            />
          </Col>
          <Col md>
            <Form.Check
              type="checkbox"
              label="Post-partum (< 6 weeks)"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsPostPartum"
            />
            <Form.Check
              type="checkbox"
              label="Immunodeficiency, including HIV"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsHIV"
            />
            <Form.Check
              type="checkbox"
              label="Renal disease"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsRenal"
            />
            <Form.Check
              type="checkbox"
              label="Chronic lung disease"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsChronicLung"
            />
            <Form.Check
              type="checkbox"
              label="Malignancy"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsMalignancy"
            />
          </Col>
        </Row>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalUnderlyingConditionsWriteIn">
        <Form.Label>Other(s), please specify:</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
    </Row>
    <strong>Health Status at time of reporting:</strong>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmission" md>
        <Form.Label>Admission to hospital:</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmission"
          id="clinicalAdmissionNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmission"
          id="clinicalAdmissionYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmission"
          id="clinicalAdmissionUnknown"
        />
      </Form.Group>
      <Form.Group as={Col} controlId="clinicalAdmissionDate">
        <Form.Label>First date of admission to hospital</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
    </Row>
    <i>If yes</i>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmissionICU" md>
        <Form.Label>Did the case receive care in an intensive care unit (ICU)? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmissionICU"
          id="clinicalAdmissionICUNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmissionICU"
          id="clinicalAdmissionICUYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmissionICU"
          id="clinicalAdmissionICUUnknown"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmissionVentilation" md>
        <Form.Label>Did the case receive ventilation? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmissionVentilation"
          id="clinicalAdmissionVentilationNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmissionVentilation"
          id="clinicalAdmissionVentilationYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmissionVentilation"
          id="clinicalAdmissionVentilationUnknown"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmissionOxygenation" md>
        <Form.Label>Did the case receive extracorporeal membrane oxygenation? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmissionOxygenation"
          id="clinicalAdmissionOxygenationNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmissionOxygenation"
          id="clinicalAdmissionOxygenationYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmissionOxygenation"
          id="clinicalAdmissionOxygenationUnknown"
        />
      </Form.Group>
    </Row>
    <br/>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmissionIsolation" md>
        <Form.Label><i>Is case in isolation with Infection Control Practice in place</i> </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmissionIsolation"
          id="clinicalAdmissionIsolationNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmissionIsolation"
          id="clinicalAdmissionIsolationYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmissionIsolation"
          id="clinicalAdmissionIsolationUnknown"
        />
      </Form.Group>
      <Form.Group as={Col} controlId="clinicalAdmissionIsolationDate">
        <Form.Label>Date of isolation</Form.Label>
        <Form.Control type="date"/>
      </Form.Group>
    </Row>

    </>
)