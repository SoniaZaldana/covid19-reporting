import React from 'react';
import { Component } from 'react';
import {Section0} from './section0.js';
import {Section1} from './section1.js';
import {Section2} from './section2.js';
import {Section3} from './section3.js';
import Section4 from './section4.js';
import Button from 'react-bootstrap/Button';

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
                exposureContactCountry: ''
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
                patientSex:'',
                patientDiagnosisCountry: '',
                patientDiagnosisProvince: '',
                patientResidencyCountry: '',
                clinicalDateLabTest: '',
                clinicalSymptoms: '',
                clinicalSymptomsDate: '',
                clinicalUnderlyingConditions: '',
                clinicalUnderlyingConditionsWriteIn: '',
                clinicalAdmission: '',
                clinicalAdmissionDate: '',
                clinicalAdmissionIsolationDate: '',
                exposureWorkerCountry: '',
                exposureWorkerCity: '',
                exposureWorkerFacility: '',
                exposureTravelCountry: ['','',''],
                exposureTravelCity: ['','',''],
                exposureTravelDeparture: ['','',''],
                exposureContactSetting: '',
                exposureContactId: ['','','','',''],
                exposureContactFirstDate: ['','','','',''],
                exposureContactLastDate: ['','','','',''],
                exposureContactCountry: ''
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        // Check that values are valid before submitting
    }

    handleChange = e => {

        const {id, value} = e.target;
        let formErrors = this.state.formErrors;
        let formFields = this.state.formFields;

        // Section0
        if (id === 'reportingDate') {
            let date = convertDate(value);
            formFields.reportingDate = date;

            formErrors.reportingDate = isFieldValid('date', value).message;
        } else if (id === 'reportingCountry') {
            formFields.reportingCountry = value;
            formErrors.reportingCountry = isFieldValid(id, value).message;
        } else if ( id.includes('whyTested') ) {

            if (id !== 'whyTestedWriteIn') {
                // Add/remove checked fields to whyTested array
                if (e.target.checked) {
                    formFields.whyTested.push(e.target.nextSibling.innerText);
                    formFields.whyTestedWriteIn = '';
                } else {
                    formFields.whyTested = formFields.whyTested.filter(el => el !== e.target.nextSibling.innerText);
                }
            } else {
                formFields.whyTestedWriteIn = value;
            }
        }

        // Section1: Patient Information
        else if (id === 'uniqueCaseId') {
            formFields.uniqueCaseId = value;
            formErrors.uniqueCaseId = isFieldValid(id, value).message;
        } else if (id === 'patientAgeYears') {
            formFields.patientAgeYears = value && value !=="0" ? parseInt(value) : 0;
            formErrors.patientAgeYears = isFieldValid(id, value).message;

        } else if (id === 'patientAgeMonths') {
            formFields.patientAgeMonths = value && value !=="0" ? parseInt(value) : 0;
            formErrors.patientAgeMonths = isFieldValid(id, value).message;

        } else if (id === 'patientAgeDays') {
            formFields.patientAgeDays = value && value !=="0" ? parseInt(value) : 0;
            formErrors.patientAgeDays = isFieldValid(id, value).message;
        } else if (id === 'sexMale' || id === 'sexFemale') {
            formFields.patientSex = id.toLowerCase().replace('sex','');
        } else if (id === 'patientDiagnosisCountry') {
            formFields.patientDiagnosisCountry = value;
            formErrors.patientDiagnosisCountry = isFieldValid(id, value).message;
        } else if (id === 'patientDiagnosisProvince') {
            formFields.patientDiagnosisProvince = value;
            formErrors.patientDiagnosisProvince = isFieldValid(id, value).message;
        } else if (id === 'patientResidencyCountry') {
            formFields.patientResidencyCountry = value;
            formErrors.patientResidencyCountry = isFieldValid(id, value).message;
        }

        // Section2: Clinical Status
        else if (id === 'clinicalDateLabTest') {
            let date = convertDate(value);
            formFields.clinicalDateLabTest = date;

            formErrors.clinicalDateLabTest = isFieldValid('date', value).message;
        } else if (id === 'clinicalSymptomsNo' || id === 'clinicalSymptomsYes' || id === 'clinicalSymptomsUnknown') {
            formFields.clinicalSymptoms = id.toLowerCase().replace('clinicalsymptoms','');

            if (formFields.clinicalSymptoms !== 'yes') {
                formErrors.clinicalSymptomsDate = '';
                formFields.clinicalSymptomsDate = '';
            }
        } else if (id === 'clinicalSymptomsDate') {
            let date = convertDate(value);
            formFields.clinicalSymptomsDate = date;

            formErrors.clinicalSymptomsDate = isFieldValid('date', value).message;
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
                        formFields.clinicalUnderlyingConditionsCheckAll.push(e.target.nextSibling.innerText);
                    } else {
                        formFields.clinicalUnderlyingConditionsCheckAll = formFields.clinicalUnderlyingConditionsCheckAll.filter(el => el !== e.target.nextSibling.innerText);
                    }
                } else {
                    formFields.clinicalUnderlyingConditionsWriteIn = value;
                }
            }
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
                    let date = convertDate(value);
                    formFields.clinicalAdmissionDate = date;

                    formErrors.clinicalAdmissionDate = isFieldValid('date', value).message;
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
                let date = convertDate(value);
                formFields.clinicalAdmissionIsolationDate = date;

                formErrors.clinicalAdmissionIsolationDate = isFieldValid('date', value).message;
            }
        }

        // Section3 : Exposure risk in the 14 days prior to symptom onset
        else if (id === 'exposureWorkerNo' || id === 'exposureWorkerYes' || id === 'exposureWorkerUnknown') {
            formFields.exposureWorker = id.toLowerCase().replace('exposureworker','');

        } else if (id === 'exposureWorkerCountry') {
            formFields.exposureWorkerCountry = value;
            formErrors.exposureWorkerCountry = isFieldValid(id, value).message;
        } else if (id === 'exposureWorkerCity') {
            formFields.exposureWorkerCity = value;
            formErrors.exposureWorkerCity = isFieldValid(id, value).message;

        } else if (id === 'exposureWorkerFacility') {
            formFields.exposureWorkerFacility = value;
            formErrors.exposureWorkerFacility = isFieldValid(id, value).message;


        } else if (id === 'exposureTravelNo' || id === 'exposureTravelYes' || id === 'exposureTravelUnknown') {
            formFields.exposureTravel = id.replace('exposureTravel','').toLowerCase();
            
        } else if (id.includes('exposureTravelCountry')) {
            let index = parseInt( id.replace('exposureTravelCountry','') ) - 1;
            formFields.exposureTravelCountry[index] = value;
            formErrors.exposureTravelCountry[index] = isFieldValid('exposureTravelCountry', value).message;

        } else if (id.includes('exposureTravelCity')) {
            let index = parseInt( id.replace('exposureTravelCity','') ) - 1;
            formFields.exposureTravelCity[index] = value;
            formErrors.exposureTravelCity[index] = isFieldValid('exposureTravelCity', value).message;

        } else if (id.includes('exposureTravelDeparture')) {
            let index = parseInt( id.replace('exposureTravelDeparture','') ) - 1;
            formFields.exposureTravelDeparture[index] = value;
            formErrors.exposureTravelDeparture[index] = isFieldValid('date', value).message;

        } else if (id === 'exposureVisitedFacilityNo' || id === 'exposureVisitedFacilityYes' || 
            id === 'exposureVisitedFacilityUnknown') {

                formFields.exposureVisitedFacility = id.replace('exposureVisitedFacility','').toLowerCase();

        } else if (id === 'exposureContactNo' || id === 'exposureContactYes' || id === 'exposureContactUnknown') {
            formFields.exposureContact = id.replace('exposureContact','').toLowerCase();

        } else if (id === 'exposureContactSetting') {
            formFields.exposureContactSetting = value;
            formErrors.exposureContactSetting = isFieldValid('exposureContactSetting', value).message;

        } else if (id.includes('exposureContactId')) {
            let index = parseInt( id.replace('exposureContactId','') ) - 1;
            formFields.exposureContactId[index] = value;

        } else if (id.includes('exposureContactFirstDate')) {
            let index = parseInt( id.replace('exposureContactFirstDate','') ) - 1;
            formFields.exposureContactFirstDate[index] = value;
            formErrors.exposureContactFirstDate[index] = isFieldValid('date', value).message;

        } else if (id.includes('exposureContactLastDate')) {
            let index = parseInt( id.replace('exposureContactLastDate','') ) - 1;
            formFields.exposureContactLastDate[index] = value;
            formErrors.exposureContactLastDate[index] = isFieldValid('date', value).message;

        } else if (id === 'exposureContactCountry') {
            formFields.exposureContactCountry = value;
            formErrors.exposureContactCountry = isFieldValid(id, value).message;
        }





        this.setState({formErrors, formFields}, () => console.log(this.state));

    }
    
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <Section0 handleChange={this.handleChange} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section1 handleChange={this.handleChange} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section2 handleChange={this.handleChange} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section3 handleChange={this.handleChange} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section4 />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}

// const isFormValid = formErrors => {
//     let valid = true;

//     Object.values(formErrors).forEach(val => {
//         val.length > 0 && (valid=false);
//     });

//     return valid;
// }

// converts yyyy-mm-dd to dd/mm/yyyy
const convertDate = date => {
    var newDate = new Date(date + 'T00:00:00');
    var dd = String(newDate.getDate()).padStart(2, '0');
    var mm = String(newDate.getMonth() + 1).padStart(2, '0');
    var yyyy = newDate.getFullYear();

    return dd + '/' + mm + '/' + yyyy;
}

const isFieldValid = (name, value) => {

    let result = {valid: true, message: ''};

    switch (name) {
        // date check
        case 'date':
            var date = new Date(value + 'T00:00:00');
            var today = new Date();
            today.setHours(0,0,0,0);

            if (date > today) {
                result.valid = false;
                result.message = 'The date cannot be in the future';
            }
            break;
        // Country error checking
        case 'reportingCountry':
        case 'patientDiagnosisCountry':
        case 'patientResidencyCountry':
        case 'exposureWorkerCountry':
        case 'exposureTravelCountry':
        case 'exposureContactCountry':
            if (!/^[a-zA-Z]+$/.test(value)) {
                result.valid = false;
                result.message = 'Country must only contain letters';
            } else if (value.length < 4) {
                result.valid = false;
                result.message = 'Country must have at least 4 characters';
            }
            if (value === '') {
                result.valid = false;
                result.message = 'Please enter a country';
            }
            break;
        // Section1
        case 'uniqueCaseId':
            if (value === '') {
                result.valid = false;
                result.message = 'Please enter a unique case identifier';
            }
            break;
        case 'patientAgeYears':
            if (value > 150) {
                result.valid = false;
                result.message = 'Years cannot be greater than 150';
            }
            break;
        case 'patientAgeMonths':
            if (value > 12) {
                result.valid = false;
                result.message = 'Months cannot be greater than 12';
            }
            break;
        case 'patientAgeDays':
            if (value > 31) {
                result.valid = false;
                result.message = 'Days cannot be greater than 31';
            }
            break;
        case 'patientDiagnosisProvince':
            if (!/^[a-zA-Z]+$/.test(value)) {
                result.valid = false;
                result.message = 'Province must only contain letters';
            } else if (value.length < 2) {
                result.valid = false;
                result.message = 'Province must have at least 2 characters';
            }
            if (value === '') {
                result.valid = false;
                result.message = 'Please enter a Province';
            }
            break;
        // Section 3
        case 'exposureWorkerCity':
        case 'exposureTravelCity':
            if (!/^[a-zA-Z]+$/.test(value)) {
                result.valid = false;
                result.message = 'City must only contain letters';
            } else if (value.length < 2) {
                result.valid = false;
                result.message = 'City must have at least 3 characters';
            }
            if (value === '') {
                result.valid = false;
                result.message = 'Please enter a City';
            }
            break;
        case 'exposureWorkerFacility':
            if (value.length < 2) {
                result.valid = false;
                result.message = 'Facility must have at least 3 characters';
            }
            if (value === '') {
                result.valid = false;
                result.message = 'Please enter a Facility';
            }
            break;
        case 'exposureContactSetting':
            if (value === '') {
                result.valid = false;
                result.message = 'Please type the contact setting';
            }
            break;
        default:
            break;
    }

    return result;
}

export default ReportForm;
