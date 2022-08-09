import React from 'react';
import Card from 'react-bootstrap/Card';


class CityMap extends React.Component {
    render() {
        return (
            <Card style={{ width: '18rem' }}>
                <Card.Img src={this.props.src}/>
                <Card.Body>
                    <Card.Title>{this.props.title}</Card.Title>
                    <Card.Text>
                        Some quick example text to build on the card title and make up the
                        bulk of the card's content.
                    </Card.Text>
                </Card.Body>
            </Card>
        )
    }
}

export default CityMap;
