import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function Section3() {
  return (<>
    <h2 className='section-header'>Section 3:  Exposure risk in the 14 days prior to symptom onset (prior to testing if asymptomatic)</h2>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureWorker" md>
        <Form.Label>Is case a Health Care Worker (any job in a health care setting): </Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="exposureWorker"
          id="exposureWorkerNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="exposureWorker"
          id="exposureWorkerYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="exposureWorker"
          id="exposureWorkerUnknown"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <i>If yes</i>
      <Form.Group as={Col} controlId="exposureWorkerCountry" md>
        <Form.Label>Country</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group as={Col} controlId="exposureWorkerCity" md>
        <Form.Label>City</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group as={Col} controlId="exposureWorkerFacility" md>
        <Form.Label>Name of facility</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureTravel" md>
        <Form.Label>Has the case <strong>travelled</strong> in the 14 days prior to symptom onset?</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="exposureTravel"
          id="exposureTravelNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="exposureTravel"
          id="exposureTravelYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="exposureTravel"
          id="exposureTravelUnknown"
        />
      </Form.Group>
    </Row>
    <i>If yes,</i> please specify the places the patient travelled to and date of departure from the places:
    {['1', '2', '3'].map((number) => (
      <Row className="mb-3">
        <Col md={1}>
          {number + '.'}
        </Col>
        <Form.Group as={Col} controlId={"exposureTravelCountry"+number} md>
          <Form.Label>Country</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId={"exposureTravelCity"+number} md>
          <Form.Label>City</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId={"exposureTravelDeparture" + number} md>
          <Form.Label>Date of departure</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Row>
      ))
    }
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureVisitedFacility" md>
        <Form.Label>Has case <strong>visited any health care facility</strong> in the 14 days prior to symptom onset?</Form.Label>
        <Form.Check
          type="radio"
          label="No"
          name="exposureVisitedFacility"
          id="exposureVisitedFacilityNo"
        />
        <Form.Check
          type="radio"
          label="Yes"
          name="exposureVisitedFacility"
          id="exposureVisitedFacilityYes"
        />
        <Form.Check
          type="radio"
          label="Unknown"
          name="exposureVisitedFacility"
          id="exposureVisitedFacilityUnknown"
        />
      </Form.Group>
    </Row>
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureContact" md>
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
      <Form.Group as={Col} controlId="exposureContactSetting" md>
        <Form.Label><i>If yes,</i> please explain contact setting:</Form.Label>
        <Form.Control as="textarea" rows={2}/>
      </Form.Group>
    </Row>
    <i>If yes,</i> please list unique case identifiers of all probable or confirmed cases:
    {['1', '2', '3', '4', '5'].map((number) => (
      <Row className="mb-3">
        <Col md={1}>
          {number + '.'}
        </Col>
        <Form.Group as={Col} controlId={"exposureContactId"+number} md>
          <Form.Label>Contact ID</Form.Label>
          <Form.Control type="text" />
        </Form.Group>
        <Form.Group as={Col} controlId={"exposureContactFirstDate"+number} md>
          <Form.Label>First Date of Contact</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
        <Form.Group as={Col} controlId={"exposureContactLastDate" + number} md>
          <Form.Label>Last Date of Contact</Form.Label>
          <Form.Control type="date" />
        </Form.Group>
      </Row>
      ))
    }
    <Row className="mb-3">
      <Form.Group as={Col} controlId="exposureContactCountry" md>
        <Form.Label>Most likely country of exposure</Form.Label>
        <Form.Control type="text"/>
      </Form.Group>
    </Row>

    </>)
}

export default Section3;
