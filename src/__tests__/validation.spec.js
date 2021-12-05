import { ValidationFunctions } from "../Validation.js";

describe("Validation Functions testing", () => {
    
    test("Test to verify total number of contacts are validated", () => {
        const input = '';
        const output = {status: 1, message: 'Please enter total number of contacts'};
        expect(ValidationFunctions.isTotalNumberContactInvalid(input)).toEqual(output);

        const input2 = '123!abds';
        const output2 = {status: 2, message: 'Number of contacts should consist of only numbers/digits'};
        expect(ValidationFunctions.isTotalNumberContactInvalid(input2)).toEqual(output2);
    })

    test("Test to verify if health outcomes are validated", () => {
        const input = '';
        const output = {status: 1, message: 'Please explain the health outcome'};
        expect(ValidationFunctions.isHealthOutcomeStatemantInvalid(input)).toEqual(output);

        const input2 = ['Death'];
        const output2 = {status: 2, message: 'Please be more descriptive'};
        expect(ValidationFunctions.isHealthOutcomeStatemantInvalid(input2)).toEqual(output2);
    })

    test("Test to verify if contact ID is validated", () => {
        const input = '';
        const output = {status: 1, message: 'Please enter a contact ID'};
        expect(ValidationFunctions.isContactIdInvalid(input)).toEqual(output);
    })

    test("Test to verify if contact setting is validated", () => {
        const input = '';
        const output = {status: 1, message: 'Please explain the contact setting'};
        expect(ValidationFunctions.isContactSettingInvalid(input)).toEqual(output);
    })

    test("Test to verify if underlying conditions are validated", () => {
        const underlyingConditions = [];
        const writeIn = null; 
        const output = {status: 1, message: 'Please check off or write in any underlying conditions'};
        expect(ValidationFunctions.isUnderlyingConditionsInvalid(underlyingConditions, writeIn)).toEqual(output);

        const pregancyCondition = ['Pregnancy (trimester: 10)']
        const output2 = {status: 3, message: 'Trimester must be 1, 2, or 3'}
        expect(ValidationFunctions.isUnderlyingConditionsInvalid(pregancyCondition, null)).toEqual(output2);

        const pregancyConditionZero = ['Pregnancy (trimester: 0)']
        expect(ValidationFunctions.isUnderlyingConditionsInvalid(pregancyConditionZero, null)).toEqual(output2);
    })

    test("Test to verify if age is validated", () => {
        const days = 32; 
        const output = {status: 3, message: 'Days cannot be greater than 31'};
        expect(ValidationFunctions.isAgeInvalid(null, null, days)).toEqual(output);

        const months = 13; 
        const output2 = {status: 2, message: 'Months cannot be greater than 12'}; 
        expect(ValidationFunctions.isAgeInvalid(null, months, null)).toEqual(output2);

        const years = 200; 
        const output3 = {status: 1, message: 'Years cannot be greater than 150'}
        expect(ValidationFunctions.isAgeInvalid(years, null, null)).toEqual(output3);

        const output4 = {status: 4, message: 'Please enter age information'}
        expect(ValidationFunctions.isAgeInvalid(null, null, null)).toEqual(output4);

        const output5 = {status: 5, message: 'Only enter the neccesary information (year only, or month only, or day only)'}; 
        expect(ValidationFunctions.isAgeInvalid(null, 2, 3)).toEqual(output5);
        expect(ValidationFunctions.isAgeInvalid(3, 2, 3)).toEqual(output5);
        expect(ValidationFunctions.isAgeInvalid(1, 2, null)).toEqual(output5);
    })

    test("Test to verify if unique case ID is validated", () => {
        const input = '';
        const output = {status: 1, message: 'Please enter a unique case identifier'};
        expect(ValidationFunctions.isUniqueCaseIdInvalid(input)).toEqual(output);
    })

    test("Test to verify if country is validated", () => {
        const input = '123canada'
        const output = {status: 1, message: 'Country must only contain letters'};
        expect(ValidationFunctions.isCountryInvalid(input)).toEqual(output);

        const input2 = 'boo';
        const output2 = {status: 2, message: 'Country must have at least 4 letters'}
        expect(ValidationFunctions.isCountryInvalid(input2)).toEqual(output2);

        const input3 = '';
        const output3 = {status: 3, message: 'Please enter a country'}
        expect(ValidationFunctions.isCountryInvalid(input3)).toEqual(output3);

    })

    test("Test to verify if province is validated", () => {
        const input = '123ontario'
        const output = {status: 1, message: 'Province must only contain letters'};
        expect(ValidationFunctions.isProvinceInvalid(input)).toEqual(output);

        const input2 = 'boo';
        const output2 = {status: 2, message: 'Province must have at least 4 letters'}
        expect(ValidationFunctions.isProvinceInvalid(input2)).toEqual(output2);

        const input3 = '';
        const output3 = {status: 3, message: 'Please enter a province'}
        expect(ValidationFunctions.isProvinceInvalid(input3)).toEqual(output3);

    })

    test("Test to verify if city is validated", () => {
        const input = '123toronto'
        const output = {status: 1, message: 'City must only contain letters'};
        expect(ValidationFunctions.isCityInvalid(input)).toEqual(output);

        const input2 = 'bo';
        const output2 = {status: 2, message: 'City must have at least 3 letters'}
        expect(ValidationFunctions.isCityInvalid(input2)).toEqual(output2);

        const input3 = '';
        const output3 = {status: 3, message: 'Please enter a City'}
        expect(ValidationFunctions.isCityInvalid(input3)).toEqual(output3);

    })

    test("Test to verify if facility is validated", () => {
        const input2 = 'bo';
        const output2 = {status: 1, message: 'Facility must have at least 3 letters'}
        expect(ValidationFunctions.isFacilityInvalid(input2)).toEqual(output2);

        const input3 = '';
        const output3 = {status: 2, message: 'Please enter a Facility'}
        expect(ValidationFunctions.isFacilityInvalid(input3)).toEqual(output3);

    })
   

})