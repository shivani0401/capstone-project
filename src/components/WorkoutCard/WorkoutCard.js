import React from 'react';
import Card from 'react-bootstrap/Card';

export default function WorkoutCard() {
  return (
    <div>
      <Card bg='light'
          style={{ width: '18rem' }}
          className="mb-2">
          <Card.Body>
          <Card.Img variant="top" src="holder.js/100px180?text=Image cap" />
            <Card.Title style={{color:"black"}}>Card Title </Card.Title>
            <Card.Text style={{color:"black"}}>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </Card.Text>
          </Card.Body>
        </Card>
    </div>
  )
}
