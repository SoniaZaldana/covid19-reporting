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

        // Check if date is valid
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

        // Check if date is valid
        const clinicalDateLabTest = ValidationFunctions.unconvertDate(formFields.clinicalDateLabTest);
        sectionStatus.clinicalDateLabTest = ValidationFunctions.isDateInvalid(clinicalDateLabTest).message;
        sectionStatus.invalid = sectionStatus.clinicalDateLabTest ? 1 : 0;

        // Check if data for symptons at time of testing provided
        if (!formFields.clinicalSymptoms) {
            sectionStatus.invalid = 1;
            sectionStatus.clinicalSymptoms = "Please select if there were any symptoms or signs at time of testing."
        }

        // Check if date is valid
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

        // Check if date is valid
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
            exposureTravel: '',
            exposureTravelCountry: ['','',''],
            exposureTravelCity: ['','',''],
            exposureTravelDeparture: ['','',''],
            exposureContact: '',
            exposureContactSetting: '',
            exposureContactId: ['','','','',''],
            exposureContactFirstDate: ['','','','',''],
            exposureContactLastDate: ['','','','',''],
            exposureContactCountry: ''
        }

        // If health care worker is set to yes,
        if (formFields.exposureWorker === 'yes') {

            // Check if country is valid
            sectionStatus.exposureWorkerCountry = ValidationFunctions.isCountryInvalid(formFields.exposureWorkerCountry).message;
            sectionStatus.invalid = sectionStatus.exposureWorkerCountry ? 1 : 0;

            // Check if city is valid
            sectionStatus.exposureWorkerCity = ValidationFunctions.isCityInvalid(formFields.exposureWorkerCity).message;
            sectionStatus.invalid = sectionStatus.exposureWorkerCity ? 1 : 0;

            // Check if facility is valid
            sectionStatus.exposureWorkerFacility = ValidationFunctions.isFacilityInvalid(formFields.exposureWorkerFacility).message;
            sectionStatus.invalid = sectionStatus.exposureWorkerFacility ? 1 : 0;
        }

        if (formFields.exposureTravel === 'yes') {
            // Check place information (max 3)
            for (var i = 0; i < 3; i++) {

                // Check if country is valid
                sectionStatus.exposureTravelCountry[i] = ValidationFunctions.isCountryInvalid(formFields.exposureTravelCountry[i]).message;
                sectionStatus.invalid = sectionStatus.exposureTravelCountry[i] ? 1 : 0;

                // Check if city is valid
                sectionStatus.exposureTravelCity[i] = ValidationFunctions.isCityInvalid(formFields.exposureTravelCity[i]).message;
                sectionStatus.invalid = sectionStatus.exposureTravelCity[i] ? 1 : 0;

                // Check if depature date is valid
                const exposureTravelDeparture = ValidationFunctions.unconvertDate(formFields.exposureTravelDeparture[i]);
                sectionStatus.exposureTravelDeparture[i] = ValidationFunctions.isDateInvalid(exposureTravelDeparture).message;
                sectionStatus.invalid = sectionStatus.exposureTravelDeparture[i] ? 1 : 0;
            }
        } else if (formFields.exposureTravel === '') {
            // Has not entered travel data
            sectionStatus.invalid = 1;
            sectionStatus.exposureTravel = "Please enter if case has travelled in the last 14 days"
        }

        if (formFields.exposureContact === 'yes') {
            sectionStatus.invalid = 1;
            sectionStatus.exposureContactSetting = ValidationFunctions.isContactSettingInvalid(formFields.exposureContactSetting).message;

            for (var j = 0; j < 5; j++) {

                // Check if contact ID is valid
                sectionStatus.exposureContactId[j] = ValidationFunctions.isContactIdInvalid(formFields.exposureContactId[j]).message;
                sectionStatus.invalid = sectionStatus.exposureContactId[j] ? 1 : 0;

                // Check if first & last date of contact are valid
                const exposureContactFirstDate = ValidationFunctions.unconvertDate(formFields.exposureContactFirstDate[j]);
                const exposureContactLastDate = ValidationFunctions.unconvertDate(formFields.exposureContactLastDate[j]);
                sectionStatus.exposureContactFirstDate[j] = ValidationFunctions.isDateInvalid(exposureContactFirstDate).message;
                sectionStatus.exposureContactLastDate[j] = ValidationFunctions.isDateInvalid(exposureContactLastDate).message;
                sectionStatus.invalid = sectionStatus.exposureContactFirstDate[j] ? 1 : 0;
                sectionStatus.invalid = sectionStatus.exposureContactLastDate[j] ? 1 : 0;
            }
        } else if (formFields.exposureContact === '') {
            // Has not entered exposure data
            sectionStatus.invalid = 1;
            sectionStatus.exposureContact = "Please enter if case has had contact with a confirmed case in the last 14 days"
        }
        
        // Check if mostly likely country of exposure is valid
        sectionStatus.exposureContactCountry = ValidationFunctions.isCountryInvalid(formFields.exposureContactCountry).message;
        sectionStatus.invalid = sectionStatus.exposureContactCountry ? 1 : 0;


        if (submission && formErrors) {
            formErrors.exposureWorkerCountry = sectionStatus.exposureWorkerCountry;
            formErrors.exposureWorkerCity = sectionStatus.exposureWorkerCity;
            formErrors.exposureWorkerFacility = sectionStatus.exposureWorkerFacility;
            formErrors.exposureContact = sectionStatus.exposureContact;
            formErrors.exposureContactSetting = sectionStatus.exposureContactSetting;
            formErrors.exposureTravelCountry = sectionStatus.exposureTravelCountry;
            formErrors.exposureTravelCity = sectionStatus.exposureTravelCity;
            formErrors.exposureTravelDeparture = sectionStatus.exposureTravelDeparture;
            formErrors.exposureContactId = sectionStatus.exposureContactId;
            formErrors.exposureContactFirstDate = sectionStatus.exposureContactFirstDate;
            formErrors.exposureContactLastDate = sectionStatus.exposureContactLastDate;
            formErrors.exposureContactCountry = sectionStatus.exposureContactCountry;
        }

        return sectionStatus;
    },
    section4: (formFields, formErrors = undefined, submission = 0) => {
        var sectionStatus = {
            invalid: 0,
            outcomeDateResubmission: '',
            outcomeDevelopYesDate: '',
            outcomeDateAdmission: '',
            outcomeHealthOtherWriteIn: '',
            outcomeDateRelease: '',
            outcomeDateTest: '',
            outcomeTotalContacts: ''
        }

        // Check if dates are valid
        const outcomeDateResubmission = ValidationFunctions.unconvertDate(formFields.outcomeDateResubmission);
        sectionStatus.outcomeDateResubmission = ValidationFunctions.isDateInvalid(outcomeDateResubmission).message;
        sectionStatus.invalid = sectionStatus.outcomeDateResubmission ? 1 : 0;

        const outcomeDevelopYesDate = ValidationFunctions.unconvertDate(formFields.outcomeDevelopYesDate);
        sectionStatus.outcomeDevelopYesDate = ValidationFunctions.isDateInvalid(outcomeDevelopYesDate).message;
        sectionStatus.invalid = sectionStatus.outcomeDevelopYesDate ? 1 : 0;

        const outcomeDateAdmission = ValidationFunctions.unconvertDate(formFields.outcomeDateAdmission);
        sectionStatus.outcomeDateAdmission = ValidationFunctions.isDateInvalid(outcomeDateAdmission).message;
        sectionStatus.invalid = sectionStatus.outcomeDateAdmission ? 1 : 0;

        const outcomeDateRelease = ValidationFunctions.unconvertDate(formFields.outcomeDateRelease);
        sectionStatus.outcomeDateRelease = ValidationFunctions.isDateInvalid(outcomeDateRelease).message;
        sectionStatus.invalid = sectionStatus.outcomeDateRelease ? 1 : 0;

        const outcomeDateTest = ValidationFunctions.unconvertDate(formFields.outcomeDateTest);
        sectionStatus.outcomeDateTest = ValidationFunctions.isDateInvalid(outcomeDateTest).message;
        sectionStatus.invalid = sectionStatus.outcomeDateTest ? 1 : 0;

        // Check if outcome description is valid
        if (formFields.outcomeHealth === 'other') {
            sectionStatus.outcomeHealthOtherWriteIn = ValidationFunctions.isHealthOutcomeStatemantInvalid(formFields.outcomeHealthOtherWriteIn).message;
            sectionStatus.invalid = sectionStatus.outcomeHealthOtherWriteIn ? 1 : 0;
        }

        // Check total number of contacts for this case
        sectionStatus.outcomeTotalContacts = ValidationFunctions.isTotalNumberContactInvalid(formFields.outcomeTotalContacts).message;
        sectionStatus.invalid = sectionStatus.outcomeTotalContacts ? 1 : 0;

        if (submission && formErrors) {
            formErrors.outcomeDateResubmission = sectionStatus.outcomeDateResubmission;
            formErrors.outcomeDevelopYesDate = sectionStatus.outcomeDevelopYesDate;
            formErrors.outcomeDateAdmission = sectionStatus.outcomeDateAdmission;
            formErrors.outcomeDateRelease = sectionStatus.outcomeDateRelease;
            formErrors.outcomeDateTest = sectionStatus.outcomeDateTest;
            formErrors.outcomeHealthOtherWriteIn = sectionStatus.outcomeHealthOtherWriteIn;
            formErrors.outcomeTotalContacts = sectionStatus.outcomeTotalContacts;
        }

        return sectionStatus;
    }
}
const ValidationFunctions = {

    /*
        Checks if total number of contacts is valid
        Returns object {status, message}

        Status is set to
        0 when number is valid,
        1 when number is empty,
        2 when number is not a number
    */
    isTotalNumberContactInvalid: (number) => {
        let result = {status: 0, message: ''};

        if (number === '') {
            result.status = 1;
            result.message = 'Please enter total number of contacts';
        } else if (number !== 'unknown' && !/^[0-9]+$/.test(number)) {
            result.status = 2;
            result.message = 'Number of contacts should consist of only numbers/digits';
        }

        return result;
    },
    /*
        Check if health outcome description is valid
        Returns object {status, message}

        Status is set to
        0 when outcome is valid,
        1 when outcome is empty,
        2 when outcome is not descriptive
    */
   isHealthOutcomeStatemantInvalid: (healthOutcome) => {
    let result = {status: 0, message: ''};

    if (healthOutcome === '') {
        result.status = 1;
        result.message = 'Please explain the health outcome';
    } else if (healthOutcome.length < 4) {
        result.status = 2;
        result.message = 'Please be more descriptive';
    }

    return result;

   },
    /*
        Check if contact ID is valid
        Returns object {status, message}

        Status is set to
        0 when contact id is valid,
        1 when contact id is empty
    */
    isContactIdInvalid: (contactID) => {
        let result = {status: 0, message: ''};

        if (contactID === '') {
            result.status = 1;
            result.message = "Please enter a contact ID"
        }
        
        return result;
    },
    /*
        Check if contact setting is valid
        Returns object {status, message}

        Status is set to
        0 when contact statement is valid,
        1 when contact statement is empty or too short
    */
   isContactSettingInvalid: (conditionStatement) => {
    let result = {status: 0, message: ''};

    if (conditionStatement === '' || conditionStatement.length < 5) {
        result.status = 1;
        result.message = "Please explain the contact setting"
    }
    
    return result;
   },
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
                result.message = "Please check off or write in any underlying conditions";
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
        Checks if city is valid
        Returns object {status, message}
        
        Status is set to 0 when city is valid, 1 when city contains other characters
        2 when city is less than 2 letters, 3 if empty string

        Message is empty string when city is valid, or set to corresponding status response
    */
    isCityInvalid: city => {
        let result = {status: 0, message: ''};

        if (!/^[a-zA-Z]+$/.test(city)) {
            result.status = 1;
            result.message = 'City must only contain letters';
        } else if (city.length < 2) {
            result.status = 2;
            result.message = 'City must have at least 3 letters';
        }
        if (city === '') {
            result.status = 3;
            result.message = 'Please enter a City';
        }

        return result;
    },
    /*
        Checks if facility is valid
        Returns object {status, message}
        
        Status is set to 0 when facility is valid, 1 when facility is less than 3 letters,
        2 if empty string

        Message is empty string when facility is valid, or set to corresponding status response
    */
    isFacilityInvalid: facility => {
        let result = {status: 0, message: ''};

        if (facility.length < 2) {
            result.status = 1;
            result.message = 'Facility must have at least 3 letters';
        }
        if (facility === '') {
            result.status = 2;
            result.message = 'Please enter a Facility';
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