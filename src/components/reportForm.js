import React from 'react';
import { Component } from 'react';
import {Section0} from './section0.js';
import {Section1} from './section1.js';
import {Section2} from './section2.js';
import Section3 from './section3.js';
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
                patientResidencyCountry: ''
            },
            formErrors: {
                reportingDate: '',
                reportingCountry: '',
                whyTested: '',
                uniqueCaseId: '',
                patientAgeYears: '',
                patientAgeMonths: '',
                patientAgeDays: '',
                patientSex:'',
                patientDiagnosisCountry: '',
                patientDiagnosisProvince: '',
                patientResidencyCountry: ''
            }
        }
    }

    handleSubmit = e => {
        e.preventDefault();

        // Check that values are valid before submitting
    }

    handleChange = e => {
        
        console.log(e.target);

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
        else if (1) {

        }

        this.setState({formErrors, formFields}, () => console.log(this.state));

    }
    
    render() {

        return (
            <form onSubmit={this.handleSubmit}>
                <Section0 handleChange={this.handleChange} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section1 handleChange={this.handleChange} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section2 handleChange={this.handleChange} formFields={this.state.formFields} formErrors={this.state.formErrors} />
                <Section3 />
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
        default:
            break;
    }

    return result;
}

export default ReportForm;
