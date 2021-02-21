import React, { Component } from 'react';
import { Card, Container } from 'react-bootstrap-v5';


class DishDetail extends Component {

    renderDish(dish) {
        if (dish !== null)
            return (
                <div className="col-12 col-md-5 m-1">
                <Card key={dish.id} className="align-self-center" style={{ width: '100%' }}>
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
                            <li key={comment.id}>
                                <p className="text-start"><strong>{comment.comment}</strong></p>
                                <p className="text-end">--<em> {comment.author} <br/> 
                                {new Intl.DateTimeFormat("en-GB", {
                                    year: "numeric",
                                    month: "long",
                                    day: "numeric"
                                    }).format(new Date(comment.date))}
                                </em>
                                </p>
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
        if (this.props.dish) {
            dish = (
                <div className="row">
                    {this.renderDish(this.props.dish)}
                    {this.renderComments(this.props.dish.comments)}
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