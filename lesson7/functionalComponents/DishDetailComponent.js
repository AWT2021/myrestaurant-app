import React from 'react';
import { Container, Card } from 'react-bootstrap-v5';


function RenderDish({dish}) {
    if (dish != null) {
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
    } else {
        return (
            <div></div>
        );
    }
}
function RenderComments({comments}) {
    if (comments != null) {
        const cmnts = comments.map((commnts) => {
            return (
                <ul key={commnts.id} className="list-unstyled">
                    <li>
                        <p className="text-start"> {commnts.comment} </p>
                        <p className="text-end"> <em>-- {commnts.author},
                            &nbsp;
                            {new Intl.DateTimeFormat('en-GB', {
                                year: 'numeric',
                                month: 'long',
                                day: 'numeric'
                            }).format(new Date(Date.parse(commnts.date)))}
                        </em></p>
                    </li>
                </ul>
            );
        });

        return (
            <div className="col-12 col-md-5 m-1">
                <h4> Comments </h4>
                {cmnts}
            </div>
        );  
    // if comments is empty     
    } else {
        return (
            <div></div>
        );
    }
}

const DishDetail = (props) => {
    if (props.dish != null) {
        return (
            <Container>
                <div className="row">
                    <RenderDish dish={props.dish} />
                    <RenderComments comments={props.dish.comments} />
                </div>
            </Container>
        );
    } else {
        return (
            <div></div>
        );
    }
}

export default DishDetail;
