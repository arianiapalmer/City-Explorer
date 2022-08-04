import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

class CityForm extends React.Component {

   getCity = (e, city) => {
    e.preventDefault();
    console.log(city);
   }

    render() {
        return (
            <Form >
                <Form.Label>Enter A City</Form.Label>
                <Form.Control type="text" placeholder="Enter City" onChange={ (e) => this.props.getQuery(e.target.value)} />
                <Button variant="primary" type="submit" onClick={(e)=> this.getCity(e, this.props.city)}>
                    Explore
                </Button>

            </Form>
        );
    }
}

export default CityForm;