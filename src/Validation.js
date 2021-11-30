const Validate = {

    /*
        Checks section 0 for invalid data.

        When submission flag is 1, validation will update the entire section with corresponding error messages
    */
    section0: (formFields, formErrors = undefined, submission = 0) => {
        var sectionStatus = {
            invalid: 0,
            reportingDate: '',
            reportingCountry: '',
            whyTestedWriteIn: ''
        }

        // Check is date is valid
        const reportingDate = ValidationFunctions.unconvertDate(formFields.reportingDate);
        sectionStatus.reportingDate = ValidationFunctions.isDateInvalid(reportingDate).message;
        sectionStatus.invalid = sectionStatus.reportingDate ? 1 : 0;

        // Check if country is valid
        sectionStatus.reportingCountry = ValidationFunctions.isCountryInvalid(formFields.reportingCountry).message;
        sectionStatus.invalid = sectionStatus.reportingCountry ? 1 : 0;

        // Check reasons why patient was tested for COVID-19
        if (formFields.whyTested.length && formFields.whyTestedWriteIn) {
            sectionStatus.whyTestedWriteIn = "Note: The written explaination will not be recorded as there is a reason checked in the list above.";
        }

        if (submission && formErrors) {
            formErrors.reportingDate = sectionStatus.reportingDate;
            formErrors.reportingCountry = sectionStatus.reportingCountry;
            formErrors.whyTestedWriteIn = sectionStatus.whyTestedWriteIn;
        }

        return sectionStatus;
    },
    /*
        Checks section 1 for invalid data.

        When submission flag is 1, validation will update the entire section with corresponding error messages
    */
    section1: (formFields, formErrors = undefined, submission = 0) => {
        var sectionStatus = {
            invalid: 0,
            uniqueCaseId: '',
            patientAgeYears: '',
            patientAgeMonths: '',
            patientAgeDays: '',
            patientAge: '',
            patientSex:'',
            patientDiagnosisCountry: '',
            patientDiagnosisProvince: '',
            patientResidencyCountry: ''
        }

        // Check Unique Case Identifier (used in country)
        sectionStatus.uniqueCaseId = ValidationFunctions.isUniqueCaseIdInvalid(formFields.uniqueCaseId).message;
        sectionStatus.invalid = sectionStatus.uniqueCaseId ? 1 : 0;

        const AgeResult = ValidationFunctions.isAgeInvalid(formFields.patientAgeYears, formFields.patientAgeMonths, formFields.patientAgeDays);
        if (AgeResult.status) {
            sectionStatus.invalid = 1;

            if (AgeResult.status === 1) {
                sectionStatus.patientAgeYears = AgeResult.message;
            } else if (AgeResult.status === 2) {
                sectionStatus.patientAgeMonths = AgeResult.message;
            } else if (AgeResult.status === 3) {
                sectionStatus.patientAgeDays = AgeResult.message;
            } else {
                sectionStatus.patientAge = AgeResult.message;
            } 
        }

        if (!formFields.patientSex) {
            sectionStatus.invalid = 1;
            sectionStatus.patientSex = "Please select sex at birth"
        }

        // Check if country are valid
        sectionStatus.patientDiagnosisCountry = ValidationFunctions.isCountryInvalid(formFields.patientDiagnosisCountry).message;
        sectionStatus.invalid = sectionStatus.patientDiagnosisCountry ? 1 : 0;

        sectionStatus.patientResidencyCountry = ValidationFunctions.isCountryInvalid(formFields.patientResidencyCountry).message;
        sectionStatus.invalid = sectionStatus.patientResidencyCountry ? 1 : 0;

        // Check if province is valid
        sectionStatus.patientDiagnosisProvince = ValidationFunctions.isProvinceInvalid(formFields.patientDiagnosisProvince).message;
        sectionStatus.invalid = sectionStatus.patientDiagnosisProvince ? 1 : 0;
        
        if (submission && formErrors) {
            formErrors.uniqueCaseId = sectionStatus.uniqueCaseId;
            formErrors.patientAgeYears = sectionStatus.patientAgeYears;
            formErrors.patientAgeMonths = sectionStatus.patientAgeMonths;
            formErrors.patientAgeDays = sectionStatus.patientAgeDays;
            formErrors.patientAge = sectionStatus.patientAge;
            formErrors.patientSex = sectionStatus.patientSex;
            formErrors.patientDiagnosisCountry = sectionStatus.patientDiagnosisCountry;
            formErrors.patientDiagnosisProvince = sectionStatus.patientDiagnosisProvince;
            formErrors.patientResidencyCountry = sectionStatus.patientResidencyCountry;
        }


        return sectionStatus;
    },
    /*
        Checks section 2 for invalid data.

        When submission flag is 1, validation will update the entire section with corresponding error messages
    */
    section2: (formFields, formErrors = undefined, submission = 0) => {
        var sectionStatus = {
            invalid: 0,
            clinicalDateLabTest: '',
            clinicalSymptoms: '',
            clinicalSymptomsDate: '',
            clinicalUnderlyingConditions: '',
            clinicalUnderlyingConditionsPregnancy: '',
            clinicalUnderlyingConditionsWriteIn: '',
            clinicalAdmission: '',
            clinicalAdmissionDate: '',
            clinicalAdmissionIsolationDate: ''
        }

        // Check is date is valid
        const clinicalDateLabTest = ValidationFunctions.unconvertDate(formFields.clinicalDateLabTest);
        sectionStatus.clinicalDateLabTest = ValidationFunctions.isDateInvalid(clinicalDateLabTest).message;
        sectionStatus.invalid = sectionStatus.clinicalDateLabTest ? 1 : 0;

        // Check if data for symptons at time of testing provided
        if (!formFields.clinicalSymptoms) {
            sectionStatus.invalid = 1;
            sectionStatus.clinicalSymptoms = "Please select if there were any symptoms or signs at time of testing."
        }

        // Check is date is valid
        const clinicalSymptomsDate = ValidationFunctions.unconvertDate(formFields.clinicalSymptomsDate);
        sectionStatus.clinicalSymptomsDate = ValidationFunctions.isDateInvalid(clinicalSymptomsDate).message;
        sectionStatus.invalid = sectionStatus.clinicalSymptomsDate ? 1 : 0;

        // Check if data for underlying conditions
        if (!formFields.clinicalUnderlyingConditions) {
            sectionStatus.invalid = 1;
            sectionStatus.clinicalUnderlyingConditions = "Please select if there are any underlying conditions."
        }

        // Check clinical underlying condition values
        if (formFields.clinicalUnderlyingConditions === 'yes') {

            const conditionResult = ValidationFunctions.isUnderlyingConditionsInvalid(formFields.clinicalUnderlyingConditionsCheckAll, formFields.clinicalUnderlyingConditionsWriteIn);

            if (conditionResult.status) {

                if (conditionResult.status === 1) {
                    sectionStatus.invalid = 1;
                    sectionStatus.clinicalUnderlyingConditionsWriteIn = conditionResult.message;
                } else {
                    sectionStatus.invalid = 1;
                    sectionStatus.clinicalUnderlyingConditionsPregnancy = conditionResult.message;
                }
            } 
        }

        // Check is date is valid
        const clinicalAdmissionDate = ValidationFunctions.unconvertDate(formFields.clinicalAdmissionDate);
        sectionStatus.clinicalAdmissionDate = ValidationFunctions.isDateInvalid(clinicalAdmissionDate).message;
        sectionStatus.invalid = sectionStatus.clinicalAdmissionDate ? 1 : 0;

        const clinicalAdmissionIsolationDate = ValidationFunctions.unconvertDate(formFields.clinicalAdmissionIsolationDate);
        sectionStatus.clinicalAdmissionIsolationDate = ValidationFunctions.isDateInvalid(clinicalAdmissionIsolationDate).message;
        sectionStatus.invalid = sectionStatus.clinicalAdmissionIsolationDate ? 1 : 0;


        if (submission && formErrors) {
            formErrors.clinicalDateLabTest = sectionStatus.clinicalDateLabTest;
            formErrors.clinicalSymptoms = sectionStatus.clinicalSymptoms;
            formErrors.clinicalSymptomsDate = sectionStatus.clinicalSymptomsDate;
            formErrors.clinicalUnderlyingConditions = sectionStatus.clinicalUnderlyingConditions;
            formErrors.clinicalUnderlyingConditionsWriteIn = sectionStatus.clinicalUnderlyingConditionsWriteIn;
            formErrors.clinicalUnderlyingConditionsPregnancy = sectionStatus.clinicalUnderlyingConditionsPregnancy;
            formErrors.clinicalAdmissionDate = sectionStatus.clinicalAdmissionDate;
            formErrors.clinicalAdmissionIsolationDate = sectionStatus.clinicalAdmissionIsolationDate;
        }
        
        return sectionStatus;
    },
    /*
        Checks section 3 for invalid data.

        When submission flag is 1, validation will update the entire section with corresponding error messages
    */
    section3: (formFields, formErrors = undefined, submission = 0) => {
        var sectionStatus = {
            invalid: 0,
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

        return sectionStatus;
    }

}
const ValidationFunctions = {

    /*
        Checks if underlying conditions are valid
        Returns object {status, message}
        
        Status is set to 
        0 when conditions are valid,
        1 when no conditions entered
        2 when trimester has not been indicated
        3 when trimester is not 1, 2, or 3

        Message is empty string when conditions are valid, or set to corresponding status response
    */
    isUnderlyingConditionsInvalid: (underlyingConditions, underlyingConditionsWriteIn) => {
        let result = {status: 0, message: ''};

        if (underlyingConditions.length) {

            // Look for trimester data
            for (var i = 0; i < underlyingConditions.length; i++) {
                if (underlyingConditions[i].includes("trimester")) {
                    
                    // Check if trimester has been provided
                    if ( underlyingConditions[i].replace( /^\D+/g, '') ) {
                        const trimester = parseInt(underlyingConditions[i].match(/\d/g).join(''), 10);

                        if (trimester === 0 || trimester > 3) {
                            result.status = 3;
                            result.message = "Trimester must be 1, 2, or 3";
                        }
                    } else {
                        result.status = 2;
                        result.message = "Please indicate a trimester";
                    }

                }
            }
        } else {
            // No underlying conditions checked
            if (!underlyingConditionsWriteIn) {
                result.status = 1;
                result.message = "Please check off or write in any underlying conditions.";
            }
        }

        return result;
    },
    /*
        Checks if age is valid
        Returns object {status, message}
        
        Status is set to 
        0 when age is valid,
        1 when years is over 150
        2 when months is over 12
        3 when days is over 31
        4 No information entered
        5 Too much data

        Message is empty string when age is valid, or set to corresponding status response
    */
    isAgeInvalid: (years, months, days) => {
        let result = {status: 0, message: ''};
        
        // Check days
        if ( !years && !months && days) {
            if (days > 31) {
                result.status = 3;
                result.message = 'Days cannot be greater than 31';
            }
        }
        // Check months 
        else if (!years && months && !days) {
            if (months > 12) {
                result.status = 2;
                result.message = 'Months cannot be greater than 12';
            }
        }
        // Check years
        else if (years && !months && !days) {
            if (years > 150) {
                result.status = 1;
                result.message = 'Years cannot be greater than 150';
            }
        } else if (!years && !months && !days) {
            result.status = 4;
            result.message = "Please enter age information";
        } else {
            result.status = 5;
            result.message = "Only enter the neccesary information (year only, or month only, or day only)";
        }

        return result;
    },
    /*
        Checks if Case ID is valid
        Returns object {status, message}
        
        Status is set to 0 when Case ID is valid, 1 when Case ID is empty

        Message is empty string when Case ID is valid, or set to corresponding status response
    */
    isUniqueCaseIdInvalid: caseID => {
        let result = {status: 0, message: ''};

        if (caseID === '') {
            result.status = 1;
            result.message = 'Please enter a unique case identifier';
        }
        return result;
    },
    /*
        Checks if Date is valid
        Returns object {status, message}
        
        Status is set to 0 when date is valid, 1 when date is a future date

        Message is empty string when date is valid, or set to corresponding status response
    */
    isDateInvalid: date => {
        let result = {status: 0, message: ''};

        var enteredDate = new Date(date + 'T00:00:00');
        var today = new Date();
        today.setHours(0,0,0,0);

        if (enteredDate > today) {
            result.status = 1;
            result.message = 'The date cannot be in the future';
        }
        return result;
    },
    /*
        Checks if Country is valid
        Returns object {status, message}
        
        Status is set to 0 when country is valid, 1 when country contains other characters
        2 when country is less than 4 letters, 3 if empty string

        Message is empty string when country is valid, or set to corresponding status response
    */
    isCountryInvalid: country => {
        let result = {status: 0, message: ''};

        if (!/^[a-zA-Z]+$/.test(country)) {
            result.status = 1;
            result.message = 'Country must only contain letters';
        } else if (country.length < 4) {
            result.status = 2;
            result.message = 'Country must have at least 4 letters';
        }
        if (country === '') {
            result.status = 3;
            result.message = 'Please enter a country';
        }

        return result;
    },
    /*
        Checks if Province is valid
        Returns object {status, message}
        
        Status is set to 0 when province is valid, 1 when province contains other characters
        2 when province is less than 2 letters, 3 if empty string

        Message is empty string when province is valid, or set to corresponding status response
    */
    isProvinceInvalid: province => {
        let result = {status: 0, message: ''};

        if (!/^[a-zA-Z]+$/.test(province)) {
            result.status = 1;
            result.message = 'Province must only contain letters';
        } else if (province.length < 4) {
            result.status = 2;
            result.message = 'Province must have at least 4 letters';
        }
        if (province === '') {
            result.status = 3;
            result.message = 'Please enter a province';
        }

        return result;
    },
    /*
        Convert date from yyyy-mm-dd to DD/MM/YYYY
        Returns string 'DD/MM/YYYY'
    */
    convertDate: date => {
        var dateList = date.split("-");
        var dd = dateList[2];
        var mm = dateList[1];
        var yyyy = dateList[0];

        return dd + '/' + mm + '/' + yyyy;
    },
    /*
        Convert date from DD/MM/YYYY to yyyy-mm-dd 
        Returns string 'yyyy-mm-dd'
    */
    unconvertDate: date => {
        var dateList = date.split("/");
        var dd = dateList[0];
        var mm = dateList[1];
        var yyyy = dateList[2];

        return yyyy + '-' + mm + '-' + dd;
    }
}

export { Validate, ValidationFunctions }