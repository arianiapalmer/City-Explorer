import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CityForm extends React.Component {

    getQuery = (e) => {
        e.preventDefault();
        console.log(e.target.value);
    }

    render() {
        return (
            <Form onChange={(e) => this.props.storeCity(e.target.value)}>
                <Form.Label>Enter A City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" />
                <Button variant="primary" type="submit" onClick={this.getQuery}>
                    Explore
                </Button>

            </Form>
        );
    }
}

export default CityForm;