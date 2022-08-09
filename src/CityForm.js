import React from 'react';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';


class CityForm extends React.Component {

    render() {
        return (
            <Form >
                <Form.Label>Search For A City</Form.Label>
                <Form.Control type="text" placeholder="City Search" onChange={(event) => this.props.searchApi(event.target.value)} />
                <Button variant="primary" type="submit" onClick={this.props.handleSubmit}>
                    Explore
                </Button>
            </Form>
        );
    }
}

export default CityForm;