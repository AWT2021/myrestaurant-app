import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap-v5';

class DishDetail extends Component {

    renderDish(dish) {
        if (dish !== null)
            return (
                <div className="col-12 col-md-5 m-1">
                <Card className="align-self-center" style={{ width: '100%' }}>
                    <Card.Img variant="top" src={dish.image} alt={dish.name} className="food-image" />
                    <Card.Body>
                        <Card.Title>{dish.name}</Card.Title>
                        <Card.Text>{dish.description}</Card.Text>
                    </Card.Body>
                </Card>
                </div>
            );
        else
            return (
                <div></div>
            );
    }
    renderComments(array) {
        if (array.length !== 0) {
            return (
                <div className="col-12 col-md-5 m-1">
                    <h4>Comments</h4>
                    {array.map(comment => (
                        <ul className="list-unstyled">
                            <li>
                                <p className="text-start"><strong>{comment.comment}</strong></p>
                                <p className="text-end">--<em> {comment.author} <br/> {comment.date}</em></p>
                            </li>
                        </ul>
                    )
                    )}
                </div>
            );
        }
        else {
            return (
                <div></div>
            );

        }
    }
    render() {
        let dish;
        if (this.props.selectedDish) {
            dish = (
                <div className="row">
                    {this.renderDish(this.props.selectedDish)}
                    {this.renderComments(this.props.selectedDish.comments)}
                </div>
            )
        } else {
            dish = <div></div>
        }
        return (
            <Container>
                {dish}
            </Container>
        );
    }



}

export default DishDetail;