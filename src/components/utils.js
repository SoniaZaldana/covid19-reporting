import axios from 'axios';

function postRequest(data, setState) {
  const base64EncodedData = btoa(JSON.stringify(data));
  const headers = {
      "Content-Type": "application/json"
  };

  // POST request to /DocumentReference endpoint of HAPI FHIR server
  return axios.post("http://hapi.fhir.org/baseR4/DocumentReference", {
      "resourceType": "DocumentReference",
      "content": [
          {
              "attachment": {
                  "data": base64EncodedData
              }
          }
      ]
  }, {
      "headers": headers
  })
  .then((res) => {
      if (res.status === 201) {
          console.log(res);
          console.log("Data successfully submitted to HAPI FHIR server");
          setState({afterSubmitMsg: 'Data was successfully submitted to the server.', dataSubmitSuccessful: true});
      } else {
        console.log("Data not submitted to HAPI FHIR server");
        setState({afterSubmitMsg: 'Data could not be submitted to the server. Please try submitting again.', dataSubmitSuccessful: false});
      }
  })
  .catch(() => {
      console.log("Data not submitted to HAPI FHIR server");
      setState({afterSubmitMsg: 'Data could not be submitted to the server. Please try submitting again.', dataSubmitSuccessful: false});
  });
}

export { postRequest };
