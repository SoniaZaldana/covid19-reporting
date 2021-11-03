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
        "description": "Exposure risk in the 14 days prior to symptom onset (prior to testing if asymptomatic)",
        "questions_to_responses": [
            {
                "id": "Q_36919",
                "question": "Is Case a Health Care Worker (any job in a health care setting)?", 
                "response": <string>,
                "followup_response": [
                    {
                        "id": "Q_37294"
                        "question": "Country"
                        "response": <string>
                    }, 
                    {
                        "id": "Q_36891"
                        "question": "City"
                        "response": <string>
                    }, 
                    {
                        "id": "Q_36928"
                        "question": "Name of Facility"
                        "response": <string>
                    }
                ]
            }, 
            {
                "id": "Q_36945",
                "question": "Has the Case Travelled in the 14 Days Prior to Symptom Onset?", 
                "response": <string>,
                "followup_response": [ {
                    "id": "S_36914", 
                    "question": "Prior Travel History (for multiple destinations, repeat this section up to 10 times)", 
                    "response": [
                        {
                            "country": <string>, 
                            "city": <string>, 
                            "departure_date": <string>
                        }
                    ]
                    }
                ]
            }, 
            {
                "id": "Q_36916",
                "question": "Has Case Visited Any Health Care Facility in the 14 Days Prior to Symptom Onset?", 
                "response": <string>
            }, 
            {
                "id": "Q_36997",
                "question": "Has Case Had Contact With a Confirmed Case in the 14 Days Prior to Symptom Onset?", 
                "response": <string>, 
                "followup_response": [
                    {
                        "id": "Q_36917"
                        "question": "Please List Unique Identifiers of All Probable or Confirmed Cases", 
                        "response": <string>
                    }, 
                    {
                        "id": "Q_37375"
                        "question": "Please Explain Contact Setting", 
                        "response": <string>
                    }, 
                    {
                        "id": "S_37037", 
                        "question": "Prior Confirmed Contact Information (for multiple contacts, repeat this section up to 100 times)", 
                        "response": [ 
                            {
                                "contact_id": <string>, 
                                "first_date_contact": <string>, 
                                "last_date_contact": <string>
                            }
                        ]
                    }, 
                    {
                        "id": "Q_36931", 
                        "question": "Most Likely Country of Exposure", 
                        "response": <string>
                    }
                ]
            }
        ]
    },
    "outcome": {
        "description": "Outcome: complete and re-sent the full form as soon as outcome of disease is known or after 30 days after initial report",
        "questions_to_responses": [
            {
                "id": "Q_37114",
                "question": "Date of Resubmission of This Report (DD / MM / YYYY)", 
                "response": <string>
            }, 
            {
                "id": "Q_36934", 
                "question": "If Case was Asymptomatic at Time of Specimen Collection Resulting in First Laboratory Confirmation, Did the Case Develop Any Symptoms or Signs at Any Time Prior to Discharge or Death?", 
                "response": <string>, 
                "followup_response": [
                    {
                        "id": "Q_37128", 
                        "question": "Specify Date of Onset of Symptoms / Signs of Illness (DD / MM / YYYY)", 
                        response: <string>
                    }
                ]
            }, 
            {
                "id": "Q_36957", 
                "question": "Admission to Hospital (may have been previously reported)", 
                "response": <string>, 
                "followup_response": [
                    {
                        "id": "Q_37403", 
                        "question": "Specify Date of First Admission (DD / MM / YYYY)", 
                        "response": <string>
                    }, 
                    {
                        "id": "Q_37229", 
                        "question": "Did the Case Receive Care in an Intensive Care Unit (ICU)?", 
                        "response": <string>
                    }, 
                    {
                        "id": "Q_37372", 
                        "question": "Did the Case Receive Ventilation?", 
                        "response": <string>
                    }, 
                    {
                        "id": "Q_37389", 
                        "question": "Did the Case Receive Extracorporeal Membrane Oxygenation?", 
                        "response": <string>
                    }
                ]
            },
            {
                "id": "Q_37025", 
                "question": "Health Outcome"", 
                "response": <string>, 
                "followup_response": []
            }, 
            {
                "id": "Q_37412", 
                "question": "Date of Release or Death (DD / MM / YYYY)", 
                "response": <string>, 
                "followup_response": []
            },
            {
                "id": "Q_37420", 
                "question": "Specify Date of Last Laboratory Test (DD / MM / YYYY)", 
                "response": <string>, 
                "followup_response": []
            }, 
            {
                "id": "Q_39438", 
                "question": "Results of Last Test", 
                "response": <string>, 
                "followup_response": []
            }, 
            {
                "id": "Q_39564", 
                "question": "Total Number of Contacts Followed for this Case", 
                "response": <string>, 
                "followup_response": []
            }
        ]
    }
}
```