import React from 'react';
import { Component } from 'react';
import {Section0} from './section0.js';
import {Section1} from './section1.js';
import {Section2} from './section2.js';
import {Section3} from './section3.js';
import {Section4} from './section4.js';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Validate, ValidationFunctions } from '../Validation.js';
import axios from 'axios';
import Alert from 'react-bootstrap/Alert'

class ReportForm extends Component {

    constructor() {
        super();
    
        this.state = {
            formFields: {
                reportingDate: '',
                reportingCountry: '',
                whyTested: [],
                whyTestedWriteIn: '',
                uniqueCaseId: '',
                patientAgeYears: 0,
                patientAgeMonths: 0,
                patientAgeDays: 0,
                patientSex: '',
                patientDiagnosisCountry: '',
                patientDiagnosisProvince: '',
                patientResidencyCountry: '',
                clinicalDateLabTest: '',
                clinicalSymptoms: '',
                clinicalSymptomsDate: '',
                clinicalUnderlyingConditions: '',
                clinicalUnderlyingConditionsCheckAll: [],
                // Add ConditionsWriteIn to CheckAll array onSubmit
                clinicalUnderlyingConditionsWriteIn: '',
                // ^^^
                clinicalAdmission: '',
                clinicalAdmissionDate: '',
                clinicalAdmissionICU: '',
                clinicalAdmissionVentilation: '',
                clinicalAdmissionOxygenation: '',
                clinicalAdmissionIsolation: '',
                clinicalAdmissionIsolationDate: '',
                exposureWorker: '',
                exposureWorkerCountry: '',
                exposureWorkerCity: '',
                exposureWorkerFacility: '',
                exposureTravel: '',
                // Max size 3, one element per entry
                exposureTravelCountry: ['','',''],
                exposureTravelCity: ['','',''],
                exposureTravelDeparture: ['','',''],
                // ^^^
                exposureVisitedFacility: '',
                exposureContact: '',
                exposureContactSetting: '',
                exposureContactId: ['','','','',''],
                exposureContactFirstDate: ['','','','',''],
                exposureContactLastDate: ['','','','',''],
                exposureContactCountry: '',
                outcomeDateResubmission: '',
                outcomeDevelop: '',
                outcomeDevelopYesDate: '',
                outcomeAdmission: '',
                outcomeDateAdmission: '',
                outcomeAdmissionICU: '',
                outcomeAdmissionVentilation: '',
                outcomeAdmissionOxygenation : '',
                outcomeHealth: '',
                outcomeHealthOtherWriteIn: '',
                outcomeDateRelease: '',
                outcomeDateTest: '',
                outcomeTestResult: '',
                outcomeTotalContacts: ''
            },
            formErrors: {
                reportingDate: '',
                reportingCountry: '',
                whyTested: '',
                whyTestedWriteIn: '',
                uniqueCaseId: '',
                patientAgeYears: '',
                patientAgeMonths: '',
                patientAgeDays: '',
                patientAge: '',
                patientSex:'',
                patientDiagnosisCountry: '',
                patientDiagnosisProvince: '',
                patientResidencyCountry: '',
                clinicalDateLabTest: '',
                clinicalSymptoms: '',
                clinicalSymptomsDate: '',
                clinicalUnderlyingConditions: '',
                clinicalUnderlyingConditionsPregnancy: '',
                clinicalUnderlyingConditionsWriteIn: '',
                clinicalAdmission: '',
                clinicalAdmissionDate: '',
                clinicalAdmissionIsolationDate: '',
                exposureWorkerCountry: '',
                exposureWorkerCity: '',
                exposureWorkerFacility: '',
                exposureTravel: '',
                exposureTravelCountry: ['','',''],
                exposureTravelCity: ['','',''],
                exposureTravelDeparture: ['','',''],
                exposureContact: '',
                exposureTravelCountry: ['','',''],
                exposureTravelCity: ['','',''],
                exposureTravelDeparture: ['','',''],
                exposureContactSetting: '',
                exposureContactId: ['','','','',''],
                exposureContactFirstDate: ['','','','',''],
                exposureContactLastDate: ['','','','',''],
                exposureContactCountry: '',
                outcomeDateResubmission: '',
                outcomeDevelopYesDate: '',
                outcomeDateAdmission: '',
                outcomeHealthOtherWriteIn: '',
                outcomeDateRelease: '',
                outcomeDateTest: '',
                outcomeTotalContacts: '',
                missingSections: '',
                outcomeTotalContacts: ''
            },
            dataSubmitSuccessful: false,
            afterSubmitMsg: ''
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        // Check that values are valid before submitting

        let formErrors = this.state.formErrors;
        let formFields = this.state.formFields;

        const s0valid = Validate.section0(formFields, formErrors, 1);
        const s1valid = Validate.section1(formFields, formErrors, 1);
        const s2valid = Validate.section2(formFields, formErrors, 1);
        const s3valid = Validate.section3(formFields, formErrors, 1);
        const s4valid = Validate.section4(formFields, formErrors, 1);

        var message = '';
        message += s0valid.invalid ? ' Section 0 ;' : '';
        message += s1valid.invalid ? ' Section 1 ;' : '';
        message += s2valid.invalid ? ' Section 2 ;' : '';
        message += s3valid.invalid ? ' Section 3 ;' : '';
        message += s4valid.invalid ? ' Section 4 ;' : '';
        formErrors.missingSections = "Please re-visit the following section(s):" + message;

        // Update error messages and re-render components
        this.setState({formErrors, formFields}, () => console.log(this.state));

        // If valid, data ready to build JSON object
        if (!s0valid.invalid && !s1valid.invalid && !s2valid.invalid && !s3valid.invalid && !s4valid.invalid) {
            console.log("all data valid");

            const data = this.constructDataObject();
            console.log(data);
            const base64EncodedData = btoa(JSON.stringify(data));
            const headers = {
                "Content-Type": "application/json"
            };

            // POST request to /DocumentReference endpoint of HAPI FHIR server
            axios.post("http://hapi.fhir.org/baseR4/DocumentReference", {
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
                    this.setState({afterSubmitMsg: 'Data was successfully submitted to the server.', dataSubmitSuccessful: true}, () => console.log(this.state));
                }
            })
            .catch(() => {
                console.log("Data not submitted to HAPI FHIR server");
                this.setState({afterSubmitMsg: 'Data could not be submitted to the server. Please try submitting again.', dataSubmitSuccessful: false}, () => console.log(this.state));
            });
        }
    }

    /*
        Constructs the data object that is passed to the HAPI FHIR server in the POST request
        Returns the constructed data object
    */
    constructDataObject() {
        const allClinicalUnderlyingConditions = [...this.state.formFields.clinicalUnderlyingConditionsCheckAll];
        allClinicalUnderlyingConditions.push(this.state.formFields.clinicalUnderlyingConditionsWriteIn);

        const priorTravelHistoryDestinations = [];
        for (let i = 0; i < 3; i++) {
            if (this.state.formFields.exposureTravelCountry[i] === '' && this.state.formFields.exposureTravelCity[i] === '' && this.state.formFields.exposureTravelDeparture[i] === '') {
                continue;
            }
            priorTravelHistoryDestinations.push(
                {
                    "country": this.state.formFields.exposureTravelCountry[i],
                    "city": this.state.formFields.exposureTravelCity[i],
                    "departure_date": this.state.formFields.exposureTravelDeparture[i]
                }
            );
        }

        const priorConfirmedContactInfo = [];
        for (let i = 0; i < 5; i++) {
            if (this.state.formFields.exposureContactId[i] === '' && this.state.formFields.exposureContactFirstDate[i] === '' && this.state.formFields.exposureContactLastDate[i] === '') {
                continue;
            }
            priorConfirmedContactInfo.push(
                {
                    "contact_id": this.state.formFields.exposureContactId[i], 
                    "first_date_contact": this.state.formFields.exposureContactFirstDate[i], 
                    "last_date_contact": this.state.formFields.exposureContactLastDate[i]
                }
            );
        }

        let outcomeHealthText = this.state.formFields.outcomeHealth;
        if (outcomeHealthText === "other") {
            outcomeHealthText = this.state.formFields.outcomeHealthOtherWriteIn;
        }

        const dataObj = {
            "preliminary_info": {
                "description": "Preliminary information",
                "questions_to_responses": [
                    {
                        "id": "Q_35843",
                        "question": "Date of Reporting to National Health Authority (DD / MM / YYYY)", 
                        "response": this.state.formFields.reportingDate
                    },
                    {
                        "id": "Q_35872",
                        "question": "Reporting Country", 
                        "response": this.state.formFields.reportingCountry
                    },
                    {
                        "id": "Q_35849",
                        "question": "Why Tested for COVID-19",
                        "response": this.state.formFields.whyTested,
                        "followup_response": [
                            {
                                "id": "LI_35963",
                                "question": "None of the above (explain)",
                                "response": this.state.formFields.whyTestedWriteIn
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
                        "response": this.state.formFields.uniqueCaseId
                    },
                    {
                        "id": "Q_35972",
                        "question": "Age", 
                        "response": {
                            "days": this.state.formFields.patientAgeDays,
                            "months": this.state.formFields.patientAgeMonths,
                            "years": this.state.formFields.patientAgeYears
                        }
                    },
                    {
                        "id": "Q_35978",
                        "question": "Sex at Birth", 
                        "response": this.state.formFields.patientSex
                    },
                    {
                        "id": "Q_35932",
                        "question": "Place Where the Case Was Diagnosed (Country)",
                        "response": this.state.formFields.patientDiagnosisCountry,
                        "followup_response": [
                            {
                                "id": "Q_35935",
                                "question": "Admin Level 1 (Province)",
                                "response": this.state.formFields.patientDiagnosisProvince
                            }
                        ]
                    },
                    {
                        "id": "Q_35981",
                        "question": "Case Usual Place of Residency (Country)",
                        "response": this.state.formFields.patientResidencyCountry
                    }
                ]
            },
            "clinical_status": {
                "description": "Clinical status",
                "questions_to_responses": [
                    {
                        "id": "Q_35943",
                        "question": "Date of First Laboratory Confirmation Test (DD / MM / YYYY)", 
                        "response": this.state.formFields.clinicalDateLabTest
                    },
                    {
                        "id": "Q_35995",
                        "question": "Symptoms or Signs at Time of Specimen Collection that Resulted in First Laboratory Confirmation", 
                        "response": this.state.formFields.clinicalSymptoms,
                        "followup_response": [
                            {
                                "id": "Q_37429",
                                "question": "Specify Date of Onset of Symptoms (DD / MM / YYYY)",
                                "response": this.state.formFields.clinicalSymptomsDate
                            }
                        ]
                    },
                    {
                        "id": "Q_38610",
                        "question": "Underlying Conditions and Comorbidity",
                        "response": this.state.formFields.clinicalUnderlyingConditions,
                        "followup_response": [
                            {
                                "id": "Q_35960",
                                "response": allClinicalUnderlyingConditions
                            }
                        ]
                    },
                    {
                        "id": "Q_36015",
                        "question": "Admission to Hospital",
                        "response": this.state.formFields.clinicalAdmission,
                        "followup_response": [
                            {
                                "id": "Q_39750",
                                "question": "Specify Date of First Admission (DD / MM / YYYY)",
                                "response": this.state.formFields.clinicalAdmissionDate
                            },
                            {
                                "id": "Q_36845",
                                "question": "Did the Case Receive Care in an Intensive Care Unit (ICU)?",
                                "response": this.state.formFields.clinicalAdmissionICU
                            },
                            {
                                "id": "Q_36862",
                                "question": "Did the Case Receive Ventilation?",
                                "response": this.state.formFields.clinicalAdmissionVentilation
                            },
                            {
                                "id": "Q_36032",
                                "question": "Did the Case Receive Extracorporeal Membrane Oxygenation?",
                                "response": this.state.formFields.clinicalAdmissionOxygenation
                            }
                        ]
                    },
                    {
                        "id": "Q_36839",
                        "question": "Is Case in Isolation with Infection Control Practice in Place?",
                        "response": this.state.formFields.clinicalAdmissionIsolation,
                        "followup_response": [
                            {
                                "id": "Q_41854",
                                "question": "Specify Date of Isolation (DD / MM / YYYY)",
                                "response": this.state.formFields.clinicalAdmissionIsolationDate
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
                        "response": this.state.formFields.exposureWorker,
                        "followup_response": [
                            {
                                "id": "Q_37294",
                                "question": "Country",
                                "response": this.state.formFields.exposureWorkerCountry
                            }, 
                            {
                                "id": "Q_36891",
                                "question": "City",
                                "response": this.state.formFields.exposureWorkerCity
                            }, 
                            {
                                "id": "Q_36928",
                                "question": "Name of Facility",
                                "response": this.state.formFields.exposureWorkerFacility
                            }
                        ]
                    }, 
                    {
                        "id": "Q_36945",
                        "question": "Has the Case Travelled in the 14 Days Prior to Symptom Onset?", 
                        "response": this.state.formFields.exposureTravel,
                        "followup_response": [
                            {
                                "id": "S_36914", 
                                "question": "Prior Travel History (for multiple destinations, repeat this section up to 10 times)", 
                                "response": priorTravelHistoryDestinations
                            }
                        ]
                    }, 
                    {
                        "id": "Q_36916",
                        "question": "Has Case Visited Any Health Care Facility in the 14 Days Prior to Symptom Onset?", 
                        "response": this.state.formFields.exposureVisitedFacility
                    }, 
                    {
                        "id": "Q_36997",
                        "question": "Has Case Had Contact With a Confirmed Case in the 14 Days Prior to Symptom Onset?", 
                        "response": this.state.formFields.exposureContact, 
                        "followup_response": [
                            {
                                "id": "Q_37375",
                                "question": "Please Explain Contact Setting", 
                                "response": this.state.formFields.exposureContactSetting
                            }, 
                            {
                                "id": "S_37037", 
                                "question": "Prior Confirmed Contact Information (for multiple contacts, repeat this section up to 100 times)", 
                                "response": priorConfirmedContactInfo
                            }, 
                            {
                                "id": "Q_36931", 
                                "question": "Most Likely Country of Exposure", 
                                "response": this.state.formFields.exposureContactCountry
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
                        "response": this.state.formFields.outcomeDateResubmission
                    }, 
                    {
                        "id": "Q_36934", 
                        "question": "If Case was Asymptomatic at Time of Specimen Collection Resulting in First Laboratory Confirmation, Did the Case Develop Any Symptoms or Signs at Any Time Prior to Discharge or Death?", 
                        "response": this.state.formFields.outcomeDevelop, 
                        "followup_response": [
                            {
                                "id": "Q_37128", 
                                "question": "Specify Date of Onset of Symptoms / Signs of Illness (DD / MM / YYYY)", 
                                response: this.state.formFields.outcomeDevelopYesDate
                            }
                        ]
                    }, 
                    {
                        "id": "Q_36957", 
                        "question": "Admission to Hospital (may have been previously reported)", 
                        "response": this.state.formFields.outcomeAdmission, 
                        "followup_response": [
                            {
                                "id": "Q_37403", 
                                "question": "Specify Date of First Admission (DD / MM / YYYY)", 
                                "response": this.state.formFields.outcomeDateAdmission
                            }, 
                            {
                                "id": "Q_37229", 
                                "question": "Did the Case Receive Care in an Intensive Care Unit (ICU)?", 
                                "response": this.state.formFields.outcomeAdmissionICU
                            }, 
                            {
                                "id": "Q_37372", 
                                "question": "Did the Case Receive Ventilation?", 
                                "response": this.state.formFields.outcomeAdmissionVentilation
                            }, 
                            {
                                "id": "Q_37389", 
                                "question": "Did the Case Receive Extracorporeal Membrane Oxygenation?", 
                                "response": this.state.formFields.outcomeAdmissionOxygenation
                            }
                        ]
                    },
                    {
                        "id": "Q_37025", 
                        "question": "Health Outcome", 
                        "response": outcomeHealthText
                    }, 
                    {
                        "id": "Q_37412", 
                        "question": "Date of Release or Death (DD / MM / YYYY)", 
                        "response": this.state.formFields.outcomeDateRelease
                    },
                    {
                        "id": "Q_37420", 
                        "question": "Specify Date of Last Laboratory Test (DD / MM / YYYY)", 
                        "response": this.state.formFields.outcomeDateTest
                    }, 
                    {
                        "id": "Q_39438", 
                        "question": "Results of Last Test", 
                        "response": this.state.formFields.outcomeTestResult
                    }, 
                    {
                        "id": "Q_39564", 
                        "question": "Total Number of Contacts Followed for this Case", 
                        "response": this.state.formFields.outcomeTotalContacts
                    }
                ]
            }
        }

        return dataObj;
    }

    handleChange = {

        section0: e => {
            const {id, value} = e.target;
            let formErrors = this.state.formErrors;
            let formFields = this.state.formFields;

            if (id === 'reportingDate') {
                let date = ValidationFunctions.convertDate(value);
                formFields.reportingDate = date;
                formErrors.reportingDate = Validate.section0(formFields).reportingDate;

            } else if (id === 'reportingCountry') {
                formFields.reportingCountry = value;
                formErrors.reportingCountry = Validate.section0(formFields).reportingCountry;

            } else if ( id.includes('whyTested') ) {
    
                if (id !== 'whyTestedWriteIn') {
                    // Add/remove checked fields to whyTested array
                    if (e.target.checked) {
                        formFields.whyTested.push(e.target.nextSibling.innerText);
                    } else {
                        formFields.whyTested = formFields.whyTested.filter(el => el !== e.target.nextSibling.innerText);
                    }
                } else {
                    formFields.whyTestedWriteIn = value;
                }

                formErrors.whyTestedWriteIn =  Validate.section0(formFields).whyTestedWriteIn;

            }

            this.setState({formErrors, formFields}, () => console.log(this.state));
        },
        section1: e => {
            // Section1: Patient Information

            const {id, value} = e.target;
            let formErrors = this.state.formErrors;
            let formFields = this.state.formFields;

            if (id === 'uniqueCaseId') {
                formFields.uniqueCaseId = value;
                formErrors.uniqueCaseId = Validate.section1(formFields).uniqueCaseId;

            } else if (id === 'patientAgeYears') {
                formFields.patientAgeYears = value && value !=="0" ? parseInt(value) : 0;
                const AgeResult = Validate.section1(formFields);
                formErrors.patientAgeYears = AgeResult.patientAgeYears;
                formErrors.patientAge = AgeResult.patientAge;
                
            } else if (id === 'patientAgeMonths') {
                formFields.patientAgeMonths = value && value !=="0" ? parseInt(value) : 0;
                const AgeResult = Validate.section1(formFields);
                formErrors.patientAgeMonths = AgeResult.patientAgeMonths;
                formErrors.patientAge = AgeResult.patientAge;
    
            } else if (id === 'patientAgeDays') {
                formFields.patientAgeDays = value && value !=="0" ? parseInt(value) : 0;
                const AgeResult = Validate.section1(formFields);
                formErrors.patientAgeDays = AgeResult.patientAgeDays;
                formErrors.patientAge = AgeResult.patientAge;

            } else if (id === 'sexMale' || id === 'sexFemale') {
                formFields.patientSex = id.toLowerCase().replace('sex','');
            } else if (id === 'patientDiagnosisCountry') {
                formFields.patientDiagnosisCountry = value;
                formErrors.patientDiagnosisCountry = Validate.section1(formFields).patientDiagnosisCountry;
            } else if (id === 'patientDiagnosisProvince') {
                formFields.patientDiagnosisProvince = value;
                formErrors.patientDiagnosisProvince = Validate.section1(formFields).patientDiagnosisProvince;
            } else if (id === 'patientResidencyCountry') {
                formFields.patientResidencyCountry = value;
                formErrors.patientResidencyCountry = Validate.section1(formFields).patientResidencyCountry;
            }

            this.setState({formErrors, formFields}, () => console.log(this.state));
        },
        section2: e => {
            // Section2: Clinical Status

            const {id, value} = e.target;
            let formErrors = this.state.formErrors;
            let formFields = this.state.formFields;

            if (id === 'clinicalDateLabTest') {
                let date = ValidationFunctions.convertDate(value);
                formFields.clinicalDateLabTest = date;
                formErrors.clinicalDateLabTest = Validate.section2(formFields).clinicalDateLabTest;

            } else if (id === 'clinicalSymptomsNo' || id === 'clinicalSymptomsYes' || id === 'clinicalSymptomsUnknown') {
                formFields.clinicalSymptoms = id.toLowerCase().replace('clinicalsymptoms','');
    
                if (formFields.clinicalSymptoms !== 'yes') {
                    formErrors.clinicalSymptomsDate = '';
                    formFields.clinicalSymptomsDate = '';
                }

            } else if (id === 'clinicalSymptomsDate') {
                let date = ValidationFunctions.convertDate(value);
                formFields.clinicalSymptomsDate = date;
                formErrors.clinicalSymptomsDate = Validate.section2(formFields).clinicalSymptomsDate;

            } else if (id.includes('clinicalUnderlyingConditions')) {
                // Get value of sympton type
                let conditionValue = id.replace('clinicalUnderlyingConditions','');
    
                // Get if any underlying conditions (radio button)
                if (conditionValue === 'No' || conditionValue === 'Yes' || conditionValue === 'Unknown') {
                    formFields.clinicalUnderlyingConditions = conditionValue.toLowerCase();
                }
                
                // Checklist values
                else {
                    if (id !== 'clinicalUnderlyingConditionsWriteIn') {
                        // Add/remove checked fields to clinicalUnderlyingConditionsCheckAll array
                        if (e.target.checked) {

                            if (e.target.id === "clinicalUnderlyingConditionsPregnancy") {
                                formFields.clinicalUnderlyingConditionsCheckAll.push(e.target.nextSibling.innerText + document.getElementsByClassName("pregnancy-trimester")[0].value + ")");
                            } else {
                                formFields.clinicalUnderlyingConditionsCheckAll.push(e.target.nextSibling.innerText);
                            }
                            
                        } 
                        // Trimester updates
                        else if (e.target.className === 'pregnancy-trimester form-control') {

                            if(e.target.previousSibling.firstChild.checked) {
                                formFields.clinicalUnderlyingConditionsCheckAll = formFields.clinicalUnderlyingConditionsCheckAll.filter(el => !el.includes("trimester"));
                                formFields.clinicalUnderlyingConditionsCheckAll.push(e.target.previousSibling.firstChild.nextSibling.innerText + e.target.value + ")");
                            }

                        } else {

                            if (e.target.id === "clinicalUnderlyingConditionsPregnancy") {
                                formFields.clinicalUnderlyingConditionsCheckAll = formFields.clinicalUnderlyingConditionsCheckAll.filter(el => !el.includes("trimester"));
                            } else {
                                formFields.clinicalUnderlyingConditionsCheckAll = formFields.clinicalUnderlyingConditionsCheckAll.filter(el => el !== e.target.nextSibling.innerText);
                            }
                            
                        }
                    } else {
                        formFields.clinicalUnderlyingConditionsWriteIn = value;
                    }
                }

                const conditionsResult = Validate.section2(formFields);
                formErrors.clinicalUnderlyingConditions = conditionsResult.clinicalUnderlyingConditions;
                formErrors.clinicalUnderlyingConditionsWriteIn = conditionsResult.clinicalUnderlyingConditionsWriteIn;
                formErrors.clinicalUnderlyingConditionsPregnancy = conditionsResult.clinicalUnderlyingConditionsPregnancy;

            } else if (id.includes('clinicalAdmission')) {
                // Get value of admission type
                let admissionValue = id.replace('clinicalAdmission','');
    
                // Get if admitted to hospital (radio button)
                if (admissionValue === 'No' || admissionValue === 'Yes' || admissionValue === 'Unknown') {
                    formFields.clinicalAdmission = admissionValue.toLowerCase();
                }
                
                // Hospital Admission Information
                if (formFields.clinicalAdmission === 'yes') {
    
                    if (admissionValue === 'Date') {
                        let date = ValidationFunctions.convertDate(value);
                        formFields.clinicalSymptomsDate = date;
                        formErrors.clinicalAdmissionDate = Validate.section2(formFields).clinicalAdmissionDate;
                        
                    } else if (admissionValue.includes('ICU')) {
                        formFields.clinicalAdmissionICU = admissionValue.replace('ICU', '').toLowerCase();

                    } else if (admissionValue.includes('Ventilation')) {
                        formFields.clinicalAdmissionVentilation = admissionValue.replace('Ventilation', '').toLowerCase();

                    } else if (admissionValue.includes('Oxygenation')) {
                        formFields.clinicalAdmissionOxygenation = admissionValue.replace('Oxygenation', '').toLowerCase();

                    }
    
                }
    
                // Not part of clinical admission followup reponse
                if (admissionValue === 'IsolationNo' || admissionValue === 'IsolationYes' || admissionValue === 'IsolationUnknown') {    
                    formFields.clinicalAdmissionIsolation = admissionValue.replace('Isolation', '').toLowerCase();

                } else if (admissionValue === 'IsolationDate') {
                    let date = ValidationFunctions.convertDate(value);
                    formFields.clinicalAdmissionIsolationDate = date;
                    formErrors.clinicalAdmissionIsolationDate = Validate.section2(formFields).clinicalAdmissionIsolationDate;

                }
            }

            this.setState({formErrors, formFields}, () => console.log(this.state));

        },
        section3: e => {
            // Section3 : Exposure risk in the 14 days prior to symptom onset
            const {id, value} = e.target;
            let formErrors = this.state.formErrors;
            let formFields = this.state.formFields;

            if (id === 'exposureWorkerNo' || id === 'exposureWorkerYes' || id === 'exposureWorkerUnknown') {
                formFields.exposureWorker = id.toLowerCase().replace('exposureworker','');
    
            } else if (id === 'exposureWorkerCountry') {
                formFields.exposureWorkerCountry = value;
                formErrors.exposureWorkerCountry = Validate.section3(formFields).exposureWorkerCountry;
            } else if (id === 'exposureWorkerCity') {
                formFields.exposureWorkerCity = value;
                formErrors.exposureWorkerCity = Validate.section3(formFields).exposureWorkerCity;
    
            } else if (id === 'exposureWorkerFacility') {
                formFields.exposureWorkerFacility = value;
                formErrors.exposureWorkerFacility = Validate.section3(formFields).exposureWorkerFacility;
    
    
            } else if (id === 'exposureTravelNo' || id === 'exposureTravelYes' || id === 'exposureTravelUnknown') {
                formFields.exposureTravel = id.replace('exposureTravel','').toLowerCase();
                formErrors.exposureTravel = Validate.section3(formFields).exposureTravel;
                
            } else if (id.includes('exposureTravelCountry')) {
                let index = parseInt( id.replace('exposureTravelCountry','') ) - 1;
                formFields.exposureTravelCountry[index] = value;
                formErrors.exposureTravelCountry[index] = Validate.section3(formFields).exposureTravelCountry[index];
    
            } else if (id.includes('exposureTravelCity')) {
                let index = parseInt( id.replace('exposureTravelCity','') ) - 1;
                formFields.exposureTravelCity[index] = value;
                formErrors.exposureTravelCity[index] = Validate.section3(formFields).exposureTravelCity[index];
    
            } else if (id.includes('exposureTravelDeparture')) {
                let index = parseInt( id.replace('exposureTravelDeparture','') ) - 1;
                let date = ValidationFunctions.convertDate(value);
    
                formFields.exposureTravelDeparture[index] = date;
                formErrors.exposureTravelDeparture[index] = Validate.section3(formFields).exposureTravelDeparture[index];
    
            } else if (id === 'exposureVisitedFacilityNo' || id === 'exposureVisitedFacilityYes' || 
                id === 'exposureVisitedFacilityUnknown') {
    
                    formFields.exposureVisitedFacility = id.replace('exposureVisitedFacility','').toLowerCase();
    
            } else if (id === 'exposureContactNo' || id === 'exposureContactYes' || id === 'exposureContactUnknown') {
                formFields.exposureContact = id.replace('exposureContact','').toLowerCase();
    
            } else if (id === 'exposureContactSetting') {
                formFields.exposureContactSetting = value;
                formErrors.exposureContactSetting = Validate.section3(formFields).exposureContactSetting;
    
            } else if (id.includes('exposureContactId')) {
                let index = parseInt( id.replace('exposureContactId','') ) - 1;
                formFields.exposureContactId[index] = value;
                formErrors.exposureContactId[index] = Validate.section3(formFields).exposureContactId[index];
    
            } else if (id.includes('exposureContactFirstDate')) {
                let index = parseInt( id.replace('exposureContactFirstDate','') ) - 1;
                let date = ValidationFunctions.convertDate(value);
                formFields.exposureContactFirstDate[index] = date;
                formErrors.exposureContactFirstDate[index] = Validate.section3(formFields).exposureContactFirstDate[index];
    
            } else if (id.includes('exposureContactLastDate')) {
                let index = parseInt( id.replace('exposureContactLastDate','') ) - 1;
                let date = ValidationFunctions.convertDate(value);
                formFields.exposureContactLastDate[index] = date;
                formErrors.exposureContactLastDate[index] = Validate.section3(formFields).exposureContactLastDate[index];
    
            } else if (id === 'exposureContactCountry') {
                formFields.exposureContactCountry = value;
                formErrors.exposureContactCountry = Validate.section3(formFields).exposureContactCountry;
            }

            this.setState({formErrors, formFields}, () => console.log(this.state));
        
        },
        section4: e => {
            // Section4 : Outcome : complete and re-sent the full form as...
            const {id, value} = e.target;
            let formErrors = this.state.formErrors;
            let formFields = this.state.formFields;
        
            if (id === 'outcomeDateResubmission') {
                let date = ValidationFunctions.convertDate(value);
                formFields.outcomeDateResubmission = date;
                formErrors.outcomeDateResubmission = Validate.section4(formFields).outcomeDateResubmission;

            } else if (id === 'outcomeDevelopNo' || id === 'outcomeDevelopYes' || id === 'outcomeDevelopUnknown') {
                formFields.outcomeDevelop = id.replace('outcomeDevelop','').toLowerCase();

            } else if (id === 'outcomeDevelopYesDate') {
                let date = ValidationFunctions.convertDate(value);
                formFields.outcomeDevelopYesDate = date;
                formErrors.outcomeDevelopYesDate = Validate.section4(formFields).outcomeDevelopYesDate;

            } else if (id === 'outcomeAdmissionNo' || id === 'outcomeAdmissionYes' || id === 'outcomeAdmissionUnknown') {
                formFields.outcomeAdmission = id.replace('outcomeAdmission','').toLowerCase();

            } else if (id === 'outcomeDateAdmission') {
                let date = ValidationFunctions.convertDate(value);
                formFields.outcomeDateAdmission = date;
                formErrors.outcomeDateAdmission = Validate.section4(formFields).outcomeDateAdmission;
                
            } else if (id === 'outcomeAdmissionICUNo' || id === 'outcomeAdmissionICUYes' || id === 'outcomeAdmissionICUUnknown') {
                formFields.outcomeAdmissionICU = id.replace('outcomeAdmissionICU','').toLowerCase();

            } else if (id === 'outcomeAdmissionVentilationNo' || id === 'outcomeAdmissionVentilationYes' || 
                id === 'outcomeAdmissionVentilationUnknown') {
                    formFields.outcomeAdmissionVentilation = id.replace('outcomeAdmissionVentilation','').toLowerCase();

            } else if (id === 'outcomeAdmissionOxygenationNo' || id === 'outcomeAdmissionOxygenationYes' || 
                id === 'outcomeAdmissionOxygenationUnknown') {
                    formFields.outcomeAdmissionOxygenation = id.replace('outcomeAdmissionOxygenation','').toLowerCase();

            } else if (id === 'outcomeHealthRecovered' || id === 'outcomeHealthNot' || id === 'outcomeHealthDeath'
                || id === 'outcomeHealthUnknown' || id === 'outcomeHealthOther') {

                    formFields.outcomeHealth = id.replace('outcomeHealth','').toLowerCase();
            } else if (id === 'outcomeHealthOtherWriteIn') {

                formFields.outcomeHealthOtherWriteIn = value;
                formErrors.outcomeHealthOtherWriteIn = Validate.section4(formFields).outcomeHealthOtherWriteIn;
            } else if (id === 'outcomeDateRelease') {
                let date = ValidationFunctions.convertDate(value);
                formFields.outcomeDateRelease = date;
                formErrors.outcomeDateRelease = Validate.section4(formFields).outcomeDateRelease;
                
            } else if (id === 'outcomeDateTest') {
                let date = ValidationFunctions.convertDate(value);
                formFields.outcomeDateTest = date;
                formErrors.outcomeDateTest = Validate.section4(formFields).outcomeDateTest;
            } else if (id === 'outcomeTestResultPositive' || id === 'outcomeTestResultNegative' || id === 'outcomeTestResultUnknown') {

                formFields.outcomeTestResult = id.replace('outcomeTestResult','').toLowerCase();

            } else if (id === 'outcomeTotalContacts') {
                formFields.outcomeTotalContacts = value;
                formErrors.outcomeTotalContacts = Validate.section4(formFields).outcomeTotalContacts;
                
            } else if (id === 'outcomeTotalContactsUnknown') {
                if (e.target.checked) {
                    formFields.outcomeTotalContacts = 'unknown';
                } else {
                    formFields.outcomeTotalContacts = document.getElementById('outcomeTotalContacts').value;

                    // Check if data already entered
                    if (formFields.outcomeTotalContacts === '') {
                        formErrors.outcomeTotalContacts = Validate.section4(formFields).outcomeTotalContacts;
                    }
                }
            }

            this.setState({formErrors, formFields}, () => console.log(this.state));
        }
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <Section0 handleChange={this.handleChange.section0} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section1 handleChange={this.handleChange.section1} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section2 handleChange={this.handleChange.section2} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section3 handleChange={this.handleChange.section3} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section4 handleChange={this.handleChange.section4} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                {this.state.formErrors.missingSections.length > 0 && (
                    <Form.Text className="text-danger">{this.state.formErrors.missingSections}</Form.Text>
                )}
                <br/>
                <Button variant="primary" type="submit">
                    Submit
                </Button>
                {this.state.afterSubmitMsg.length > 0 && (
                    <Alert variant={this.state.dataSubmitSuccessful ? "success": "danger"}>
                        {this.state.afterSubmitMsg}
                    </Alert>
                )}
            </form>
        );
    }
}

export default ReportForm;
