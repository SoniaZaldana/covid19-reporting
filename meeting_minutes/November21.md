# Meeting 2021/11/21
Attendees: Sonia, Matias, Samarth, Sebastian

## Agenda: 
1. Discuss the post mortem for A2
2. Discuss the deliverable for A3
3. Divide tasks

## Minutes: 

### Post Mortem Discussion: 

1. What goals have been achieved.
* We managed to complete the UI which included the form based from the XML we were provided with. 
* We came up with a JSON format for the responses which we validated with the client. This was very important to ensure we were not making any wrong assumptions. 
* We implemented form validation to ensure the UI data matched the requirements for the JSON format we created. 

2. What goals have been missed, and by how much.
* Based on conversation with the TA, her feedback was that the post mortem and meeting minutes could have been a little more in depth 
* We didn’t implement any tests for A2. This was mostly based on conversations with the client. We agreed tests were not necessary for what we were building for a2 since we were not yet interacting with the FHIR server. Instead, we were just creating a UI and developing a JSON format to work with for a3. 
3. How plans were adjusted, in light of that information, including goals or features that were dropped.
* We will implement tests for this phase ensuring we are interacting with the FHIR server appropriately.  This includes checking we can POST our document to the server and using a GET request to retrieve it to verify the contents match what we expected. 
* We will make more in depth meeting minutes and post mortem descriptions for a3.  
* We have not dropped any features we had planned to implement based on our development plan. 
 
### A3 Discussion and Task Distribution: 

* We need to create a final overview of the features including what purpose they serve. This document needs to include acceptance criteria discussed with the client and how the criteria has been demonstrated. 
* Sonia will write this document by Thursday December 2nd. She will also reach out to Alex to agree on acceptance criteria for our features. 

#### Project in shippable condition: 
* Samarth will work on POSTing our JSON to the `/DocumentReference` endpoint in the FHIR server. He will try to get it done by Monday November 29th. 
* Martias will work on writing a test for the POST request i.e. ensure we get a code 201 when we send the POST request. He will try to get it done by December 3rd. 
* Matias will work on writing a test for a GET request i.e. ensure we can fetch the document we posted by providing an ID and it matches what we posted. 
* Sebastian will work on refactoring form validation to create reusable validation functions. He will finish this by Monday November 29th. 
* Tests for form validation. Assuming we are not testing the React front end, what we can do is test against business logic functions that implement validation i.e. if we have a function that validates a string doesn’t contain numbers, we could write tests for that function. Sonia will work on these tests and get them done by Thursday December 2nd. 

#### Presentation 
* We need to work on a powerpoint presentation 
* Sonia will potentially show a demo. Would this be recorded or live? Sonia will also help review the sections below. 
* Sonia will complete the section on why our work matters. 
* Samarth will complete the section on decisions made during the process / adjustments made in retrospective.
* Matias will complete section on testing and validation criteria 
* Sebastian will complete section on what we learnt 
* We will have a meeting on Sunday December 5th at night to practice. 
