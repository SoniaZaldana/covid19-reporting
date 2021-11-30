import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Section2 = ({handleChange, formFields, formErrors}) => (
  <>
    <h2 className='section-header'>Section 2: Clinical Status</h2>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalDateLabTest" onChange={handleChange} md>
        <Form.Label>Date of first laboratory confirmation test:</Form.Label>
        <Form.Control type="date" required />
        {formErrors.clinicalDateLabTest.length > 0 && (
          <Form.Text className="text-danger">{formErrors.clinicalDateLabTest}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalSymptoms" onChange={handleChange} md>
        <Form.Label><strong>Any symptoms* or signs at time of specimen collection that resulted in first laboratory confirmation?</strong></Form.Label>
        <Form.Check
          type="radio"
          label="No (i.e., asymptomatic)"
          name="clinicalSymptoms"
          id="clinicalSymptomsNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalSymptoms"
          id="clinicalSymptomsYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalSymptoms"
          id="clinicalSymptomsUnknown"
          required
        />
        {formErrors.clinicalSymptoms.length > 0 && (
          <Form.Text className="text-danger">{formErrors.clinicalSymptoms}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalSymptomsDate" onChange={handleChange}>
        <Form.Label><i>If yes,</i> date of onset of symptoms</Form.Label>
        <Form.Control type="date" disabled={formFields.clinicalSymptoms !== 'yes'}/>
        {formErrors.clinicalSymptomsDate.length > 0 && (
          <Form.Text className="text-danger">{formErrors.clinicalSymptomsDate}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalUnderlyingConditions" onChange={handleChange} md>
        <Form.Label><strong>Underlying conditions and comorbidity:</strong> Any underlying conditions?</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalUnderlyingConditions"
          id="clinicalUnderlyingConditionsNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalUnderlyingConditions"
          id="clinicalUnderlyingConditionsYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalUnderlyingConditions"
          id="clinicalUnderlyingConditionsUnknown"
          required
        />
        {formErrors.clinicalUnderlyingConditions.length > 0 && (
          <Form.Text className="text-danger">{formErrors.clinicalUnderlyingConditions}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <Row >
      <Form.Group as={Col} controlId="clinicalUnderlyingConditionsCheckAll" onChange={handleChange}>
        <Form.Label><i>If yes,</i> please check all that apply:</Form.Label>
        <Row>
          <Col md>
            <div className="flex-row">
              <Form.Check
                type="checkbox"
                label="Pregnancy  (trimester:"
                name="clinicalUnderlyingConditionsCheckAll"
                id="clinicalUnderlyingConditionsPregnancy"
                disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
              />
              <Form.Control className="pregnancy-trimester" type="number" min="1" max="3" disabled={formFields.clinicalUnderlyingConditions !== 'yes'} onChange={handleChange} />)
              {formErrors.clinicalUnderlyingConditionsPregnancy.length > 0 && (
                <Form.Text className="text-danger">{formErrors.clinicalUnderlyingConditionsPregnancy}</Form.Text>
              )}
            </div>
            <Form.Check
              type="checkbox"
              label="Cardiovascular disease, including hypertension"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsCardio"
              disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
            />
            <Form.Check
              type="checkbox"
              label="Diabetes"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsDiabetes"
              disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
            />
            <Form.Check
              type="checkbox"
              label="Liver disease"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsLiver"
              disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
            />
            <Form.Check
              type="checkbox"
              label="Chronic neurological or neuromuscular disease"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsChronicNeuro"
              disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
            />
          </Col>
          <Col md>
            <Form.Check
              type="checkbox"
              label="Post-partum (< 6 weeks)"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsPostPartum"
              disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
            />
            <Form.Check
              type="checkbox"
              label="Immunodeficiency, including HIV"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsHIV"
              disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
            />
            <Form.Check
              type="checkbox"
              label="Renal disease"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsRenal"
              disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
            />
            <Form.Check
              type="checkbox"
              label="Chronic lung disease"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsChronicLung"
              disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
            />
            <Form.Check
              type="checkbox"
              label="Malignancy"
              name="clinicalUnderlyingConditionsCheckAll"
              id="clinicalUnderlyingConditionsMalignancy"
              disabled={formFields.clinicalUnderlyingConditions !== 'yes'}
            />
          </Col>
        </Row>
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalUnderlyingConditionsWriteIn" onChange={handleChange} >
        <Form.Label>Other(s), please specify:</Form.Label>
        <Form.Control type="text" disabled={formFields.clinicalUnderlyingConditions !== 'yes'}/>
        {formErrors.clinicalUnderlyingConditionsWriteIn.length > 0 && (
          <Form.Text className="text-danger">{formErrors.clinicalUnderlyingConditionsWriteIn}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <strong>Health Status at time of reporting:</strong>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmission" onChange={handleChange} md>
        <Form.Label>Admission to hospital:</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmission"
          id="clinicalAdmissionNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmission"
          id="clinicalAdmissionYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmission"
          id="clinicalAdmissionUnknown"
          required
        />
        {formErrors.clinicalAdmission.length > 0 && (
          <Form.Text className="text-danger">{formErrors.clinicalAdmission}</Form.Text>
        )}
      </Form.Group>
      <Form.Group as={Col} controlId="clinicalAdmissionDate" onChange={handleChange}>
        <Form.Label>First date of admission to hospital</Form.Label>
        <Form.Control type="date" disabled={formFields.clinicalAdmission !== 'yes'}/>
        {formErrors.clinicalAdmissionDate.length > 0 && (
          <Form.Text className="text-danger">{formErrors.clinicalAdmissionDate}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <i>If yes</i>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmissionICU" onChange={handleChange} md>
        <Form.Label>Did the case receive care in an intensive care unit (ICU)? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmissionICU"
          id="clinicalAdmissionICUNo"
          disabled={formFields.clinicalAdmission !== 'yes'}
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmissionICU"
          id="clinicalAdmissionICUYes"
          disabled={formFields.clinicalAdmission !== 'yes'}
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmissionICU"
          id="clinicalAdmissionICUUnknown"
          disabled={formFields.clinicalAdmission !== 'yes'}
          required
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmissionVentilation" onChange={handleChange} md>
        <Form.Label>Did the case receive ventilation? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmissionVentilation"
          id="clinicalAdmissionVentilationNo"
          disabled={formFields.clinicalAdmission !== 'yes'}
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmissionVentilation"
          id="clinicalAdmissionVentilationYes"
          disabled={formFields.clinicalAdmission !== 'yes'}
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmissionVentilation"
          id="clinicalAdmissionVentilationUnknown"
          disabled={formFields.clinicalAdmission !== 'yes'}
          required
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmissionOxygenation" onChange={handleChange} md>
        <Form.Label>Did the case receive extracorporeal membrane oxygenation? </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmissionOxygenation"
          id="clinicalAdmissionOxygenationNo"
          disabled={formFields.clinicalAdmission !== 'yes'}
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmissionOxygenation"
          id="clinicalAdmissionOxygenationYes"
          disabled={formFields.clinicalAdmission !== 'yes'}
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmissionOxygenation"
          id="clinicalAdmissionOxygenationUnknown"
          disabled={formFields.clinicalAdmission !== 'yes'}
          required
        />
      </Form.Group>
    </Row>
    <br/>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="clinicalAdmissionIsolation" onChange={handleChange} md>
        <Form.Label><i>Is case in isolation with Infection Control Practice in place</i> </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="clinicalAdmissionIsolation"
          id="clinicalAdmissionIsolationNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="clinicalAdmissionIsolation"
          id="clinicalAdmissionIsolationYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="clinicalAdmissionIsolation"
          id="clinicalAdmissionIsolationUnknown"
          required
        />
      </Form.Group>
      <Form.Group as={Col} controlId="clinicalAdmissionIsolationDate" onChange={handleChange} >
        <Form.Label>Date of isolation</Form.Label>
        <Form.Control type="date" disabled={formFields.clinicalAdmissionIsolation !== 'yes'}/>
        {formErrors.clinicalAdmissionIsolationDate.length > 0 && (
          <Form.Text className="text-danger">{formErrors.clinicalAdmissionIsolationDate}</Form.Text>
        )}
      </Form.Group>
    </Row>

    </>
)