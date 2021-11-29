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
    }

}
const ValidationFunctions = {

    /*
        Checks if age is valid
        Returns object {status, message}
        
        Status is set to 0 when age is valid,
        1 when age includes month or days (years only)
        2 when years is over 150
        3 when age includes years or days (months only)
        4 when months is over 12
        5 when age includes years or months (days only)
        6 when days is over 31

        Message is empty string when age is valid, or set to corresponding status response
    */
    isAgeValid: (years, months, days) => {
        let result = {status: 0, message: ''};

        // Check if days is the only value for age
        if ( !years && !months && days ) {

            if (days > 31) {
                result.status = 6;
                result.message = 'Days cannot be greater than 31';
            }
            
        } else {
            result.status = 5;
            result.message = "If patient is younger than 1 month old, please do not add year or month entries";
        }

        // Check if months is the only value for age
        if ( !years && months && !days ) {

            if (months > 12) {
                result.status = 4;
                result.message = 'Months cannot be greater than 12';
            }
            
        } else {
            result.status = 3;
            result.message = "If patient is younger than 1 year but older than 1 month, please do not add year or day entries";
        }

        // Check if years is the only value for age
        if ( years && !months && !days ) {

            if (years > 150) {
                result.status = 2;
                result.message = 'Years cannot be greater than 150';
            }
            
        } else {
            result.status = 1;
            result.message = "If patient is 1 year or older, please do not add month or day entries";
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