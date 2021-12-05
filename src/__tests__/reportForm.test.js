import React from 'react';
import { render, fireEvent } from "@testing-library/react";
import ReportForm from '../components/reportForm.js'
import axios from 'axios';
import {postRequest} from '../components/utils.js';

jest.mock('axios');

describe('reportForm', () => {
  test('should successfully make POST request', async () => {

    const mockedRes = {status: 201};
    axios.post.mockResolvedValueOnce(mockedRes);
    const consoleLogSpyOn = jest.spyOn(console, 'log');
    const setStateSpy = jest.fn();
    await postRequest({data: 'something'}, setStateSpy)
    expect(axios.post).toBeCalledWith(
      "http://hapi.fhir.org/baseR4/DocumentReference",
      {"content":
        [{"attachment": {"data": "eyJkYXRhIjoic29tZXRoaW5nIn0="}}],
        "resourceType": "DocumentReference"
      },
      {"headers": {"Content-Type": "application/json"}}
    );
    expect(consoleLogSpyOn).toBeCalledWith("Data successfully submitted to HAPI FHIR server");
    expect(setStateSpy).toBeCalledWith({afterSubmitMsg: 'Data was successfully submitted to the server.', dataSubmitSuccessful: true});


  });

  test('should handle POST request error', async () => {

    const mockRejected = new Error();
    axios.post.mockRejectedValueOnce(mockRejected);
    const consoleLogSpyOn = jest.spyOn(console, 'log');

    const setStateSpy = jest.fn();
    await postRequest({data: 'something'}, setStateSpy)
    expect(axios.post).toBeCalledWith(
      "http://hapi.fhir.org/baseR4/DocumentReference",
      {"content":
        [{"attachment": {"data": "eyJkYXRhIjoic29tZXRoaW5nIn0="}}],
        "resourceType": "DocumentReference"
      },
      {"headers": {"Content-Type": "application/json"}}
    );
    expect(consoleLogSpyOn).toBeCalledWith("Data not submitted to HAPI FHIR server");
    expect(setStateSpy).toBeCalledWith({afterSubmitMsg: 'Data could not be submitted to the server. Please try submitting again.', dataSubmitSuccessful: false});


  });

})
