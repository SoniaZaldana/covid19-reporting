This document defines the mapping from XML to JSON so that the JSON can be posted to the FHIR server.

- The "id" field of each question in this JSON form is the "name" field of the corresponding question in the XML form.
- The "question" field of each question in this JSON form is the "title" field of the corresponding question in the XML form.
- There may be some exceptions to the above two statements which will be commented in the JSON below.
- For questions where the user can check multiple options, the value of "response" should be a list.
- All dates should be in the format "DD/MM/YYYY" to be consistent with the XML form.
- The "followup_response" field only needs to be included if there are follow up responses in the form. For example: in "Section 2: Clinical Status"
of the PDF, if the answer to "Any underlying conditions?" is "No", then the "followup_response" field does not need to be included in the JSON object
for this question (JSON object for this question is object with "id" value of "Q_38610").

```
{
    "preliminary_info": {
        "description": "Preliminary information",
        "questions_to_responses": [
            {
                "id": "Q_35843",
                "question": "Date of Reporting to National Health Authority (DD / MM / YYYY)", 
                "response": <string>
            },
            {
                "id": "Q_35872",
                "question": "Reporting Country", 
                "response": <string>
            },
            {
                "id": "Q_35849",
                "question": "Why Tested for COVID-19",
                "response": <list of string>,
                "followup_response": [
                    {
                        "id": "LI_35963",
                        "question": "None of the above (explain)",
                        "response": <string>
                    }
                ]
            }
        ]
    },
    "patient_info": {
        "description": "Patient information",
        "questions_to_responses": [
            {
                "id": "Q_37326",
                "question": "Unique Case Identifier (used in country)", 
                "response": <string>
            },
            {
                "id": "Q_35972",
                "question": "Age", 
                "response": {
                    "days": <int>,
                    "months": <int>,
                    "years": <int>
                }
            },
            {
                "id": "Q_35978",
                "question": "Sex at Birth", 
                "response": <string>
            },
            {
                "id": "Q_35932",
                "question": "Place Where the Case Was Diagnosed (Country)",
                "response": <string>,
                "followup_response": [
                    {
                        "id": "Q_35935",
                        "question": "Admin Level 1 (Province)",
                        "response": <string>
                    }
                ]
            },
            {
                "id": "Q_35981",
                "question": "Case Usual Place of Residency (Country)",
                "response": <string>
            }
        ]
    },
    "clinical_status": {
        "description": "Clinical status",
        "questions_to_responses": [
            {
                "id": "Q_35943"
                "question": "Date of First Laboratory Confirmation Test (DD / MM / YYYY)", 
                "response": <string>
            },
            {
                "id": "Q_35995"
                "question": "Symptoms or Signs at Time of Specimen Collection that Resulted in First Laboratory Confirmation", 
                "response": <string>,
                "followup_response": [
                    {
                        "id": "Q_37429",
                        "question": "Specify Date of Onset of Symptoms (DD / MM / YYYY)",
                        "response": <string>
                    }
                ]
            },
            {
                "id": "Q_38610",
                "question": "Underlying Conditions and Comorbidity",
                "response": <string>,
                "followup_response": [
                    {                               // Note that this object doesn't have a "question" field because the corresponding question in the XML form doesn't have
                                                    // a "title" field
                        "id": "Q_35960",
                        "response": <list of string>
                    }
                ]
            },
            {
                "id": "Q_36015",
                "question": "Admission to Hospital",
                "response": <string>,
                "followup_response": [
                    {
                        "id": "Q_39750",
                        "question": "Specify Date of First Admission (DD / MM / YYYY)",
                        "response": <string>
                    },
                    {
                        "id": "Q_36845",
                        "question": "Did the Case Receive Care in an Intensive Care Unit (ICU)?",
                        "response": <string>
                    },
                    {
                        "id": "Q_36862",
                        "question": "Did the Case Receive Ventilation?",
                        "response": <string>
                    },
                    {
                        "id": "Q_36032",
                        "question": "Did the Case Receive Extracorporeal Membrane Oxygenation?",
                        "response": <string>
                    }
                ]
            },
            {
                "id": "Q_36839",
                "question": "Is Case in Isolation with Infection Control Practice in Place?",
                "response": <string>,
                "followup_response": [
                    {
                        "id": "Q_41854",
                        "question: "Specify Date of Isolation (DD / MM / YYYY)",
                        "response": <string>
                    }
                ]
            }
        ]
    },
    "exposure_risk": {
        "description": "",
        "questions_to_responses": [
            {
                "id": ""
                "question": "", 
                "response": "",
                "followup_response": [
                    {
                        "id": ""
                        "question": ""
                        "response": ""
                    }
                ]
            }
        ]
    },
    "outcome": {
        "description": "",
        "questions_to_responses": [
            {
                "id": ""
                "question": "", 
                "response": ""
            }
        ]
    }
}
```