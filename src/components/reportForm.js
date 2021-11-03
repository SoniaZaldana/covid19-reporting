import React from 'react';
import { Component } from 'react';
import Section0 from './section0.js';
import Section1 from './section1.js';
import Section2 from './section2.js';
import Section3 from './section3.js';
import Section4 from './section4.js';
import Button from 'react-bootstrap/Button';

class ReportForm extends Component {

    constructor() {
        super();
    
        this.state = {
        }
    }
    
    render() {

        return (
            <form>
                <Section0 />
                <Section1 />
                <Section2 />
                <Section3 />
                <Section4 />
                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </form>
        );
    }
}

export default ReportForm;
