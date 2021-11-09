import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export const Section3 = ({handleChange, formFields, formErrors}) => (
  <>
    <h2 className='section-header'>Section 3:  Exposure risk in the 14 days prior to symptom onset (prior to testing if asymptomatic)</h2>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureWorker" onChange={handleChange} md>
        <Form.Label>Is case a Health Care Worker (any job in a health care setting): </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="exposureWorker"
          id="exposureWorkerNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="exposureWorker"
          id="exposureWorkerYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="exposureWorker"
          id="exposureWorkerUnknown"
          required
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <i>If yes</i>
      <Form.Group as={Col} controlId="exposureWorkerCountry" onChange={handleChange} md>
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" disabled={formFields.exposureWorker !== 'yes'} />
        {formFields.exposureWorker === 'yes' && formErrors.exposureWorkerCountry.length > 0 && (
          <Form.Text className="text-danger">{formErrors.exposureWorkerCountry}</Form.Text>
        )}
      </Form.Group>
      <Form.Group as={Col} controlId="exposureWorkerCity" onChange={handleChange} md>
        <Form.Label>City</Form.Label>
        <Form.Control type="text" disabled={formFields.exposureWorker !== 'yes'} />
        {formFields.exposureWorker === 'yes' && formErrors.exposureWorkerCity.length > 0 && (
          <Form.Text className="text-danger">{formErrors.exposureWorkerCity}</Form.Text>
        )}
      </Form.Group>
      <Form.Group as={Col} controlId="exposureWorkerFacility" onChange={handleChange} md>
        <Form.Label>Name of facility</Form.Label>
        <Form.Control type="text" disabled={formFields.exposureWorker !== 'yes'} />
        {formFields.exposureWorker === 'yes' && formErrors.exposureWorkerFacility.length > 0 && (
          <Form.Text className="text-danger">{formErrors.exposureWorkerFacility}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureTravel" onChange={handleChange} md>
        <Form.Label>Has the case <strong>travelled</strong> in the 14 days prior to symptom onset?</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="exposureTravel"
          id="exposureTravelNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="exposureTravel"
          id="exposureTravelYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="exposureTravel"
          id="exposureTravelUnknown"
          required
        />
      </Form.Group>
    </Row>
    <i>If yes,</i> please specify the places the patient travelled to and date of departure from the places:
    {['1', '2', '3'].map((number) => (
      <Row key={'exposureTravelResponse' + number} className="mb-3">
        <Col md={1}>
          {number + '.'}
        </Col>
        <Form.Group as={Col} controlId={"exposureTravelCountry"+number} onChange={handleChange} md>
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" disabled={formFields.exposureTravel !== 'yes'} />
          {formFields.exposureTravel === 'yes' && formErrors.exposureTravelCountry[number - 1].length > 0 && (
            <Form.Text className="text-danger">{formErrors.exposureTravelCountry[number - 1]}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId={"exposureTravelCity"+number} onChange={handleChange} md>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" disabled={formFields.exposureTravel !== 'yes'} />
          {formFields.exposureTravel === 'yes' && formErrors.exposureTravelCity[number - 1].length > 0 && (
            <Form.Text className="text-danger">{formErrors.exposureTravelCity[number - 1]}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId={"exposureTravelDeparture" + number} onChange={handleChange} md>
          <Form.Label>Date of departure</Form.Label>
          <Form.Control type="date" disabled={formFields.exposureTravel !== 'yes'} />
          {formFields.exposureTravel === 'yes' && formErrors.exposureTravelDeparture[number - 1].length > 0 && (
            <Form.Text className="text-danger">{formErrors.exposureTravelDeparture[number - 1]}</Form.Text>
          )}
        </Form.Group>
      </Row>
      ))
    }
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureVisitedFacility" onChange={handleChange} md>
        <Form.Label>Has case <strong>visited any health care facility</strong> in the 14 days prior to symptom onset?</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="exposureVisitedFacility"
          id="exposureVisitedFacilityNo"
          required
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="exposureVisitedFacility"
          id="exposureVisitedFacilityYes"
          required
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="exposureVisitedFacility"
          id="exposureVisitedFacilityUnknown"
          required
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureContact" onChange={handleChange} md>
        <Form.Label>Has case <strong>had contact with a confirmed case</strong> in the 14 days prior to symptom onset?</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="exposureContact"
          id="exposureContactNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="exposureContact"
          id="exposureContactYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="exposureContact"
          id="exposureContactUnknown"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureContactSetting" onChange={handleChange} md>
        <Form.Label><i>If yes,</i> please explain contact setting:</Form.Label>
        <Form.Control as="textarea" disabled={formFields.exposureContact !== 'yes'} rows={2}/>
        {formFields.exposureContact === 'yes' && formErrors.exposureContactSetting.length > 0 && (
          <Form.Text className="text-danger">{formErrors.exposureContactSetting}</Form.Text>
        )}
      </Form.Group>
    </Row>
    <i>If yes,</i> please list unique case identifiers of all probable or confirmed cases:
    {['1', '2', '3', '4', '5'].map((number) => (
      <Row key={'exposureContactSettingRow' + number} className="mb-3">
        <Col md={1}>
          {number + '.'}
        </Col>
        <Form.Group as={Col} controlId={"exposureContactId"+number} onChange={handleChange} md>
          <Form.Label>Contact ID</Form.Label>
          <Form.Control type="text" disabled={formFields.exposureContact !== 'yes'} />
          {formFields.exposureContact === 'yes' && formErrors.exposureContactId[number - 1].length > 0 && (
            <Form.Text className="text-danger">{formErrors.exposureContactId[number - 1]}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId={"exposureContactFirstDate"+number} onChange={handleChange} md>
          <Form.Label>First Date of Contact</Form.Label>
          <Form.Control type="date" disabled={formFields.exposureContact !== 'yes'} />
          {formFields.exposureContact === 'yes' && formErrors.exposureContactFirstDate[number - 1].length > 0 && (
            <Form.Text className="text-danger">{formErrors.exposureContactFirstDate[number - 1]}</Form.Text>
          )}
        </Form.Group>
        <Form.Group as={Col} controlId={"exposureContactLastDate" + number} onChange={handleChange} md>
          <Form.Label>Last Date of Contact</Form.Label>
          <Form.Control type="date" disabled={formFields.exposureContact !== 'yes'} />
          {formFields.exposureContact === 'yes' && formErrors.exposureContactLastDate[number - 1].length > 0 && (
            <Form.Text className="text-danger">{formErrors.exposureContactLastDate[number - 1]}</Form.Text>
          )}
        </Form.Group>
      </Row>
      ))
    }
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureContactCountry" onChange={handleChange} md>
        <Form.Label>Most likely country of exposure</Form.Label>
        <Form.Control type="text" required />
        {formErrors.exposureContactCountry.length > 0 && (
          <Form.Text className="text-danger">{formErrors.exposureContactCountry}</Form.Text>
        )}
      </Form.Group>
    </Row>

  </>
)
