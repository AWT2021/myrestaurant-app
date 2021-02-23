import React from 'react';
import { Container, Card } from 'react-bootstrap-v5';

function RenderMenuItem ({dish, onClick}) {
    return (
        <Card onClick={() => onClick(dish.id)} className="cropped">
            <Card.Img style={{ width: '100%' }} src={dish.image} alt={dish.name} className="food-image" />
            <Card.ImgOverlay className="d-flex">
                <Card.Title className="imgover align-self-center mx-auto">{dish.name}</Card.Title>
            </Card.ImgOverlay>
        </Card>
    );
}

const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
        return (
            <div key={dish.id} className="col-12 col-md-5 m-1">
                <RenderMenuItem dish={dish} onClick={props.onClick} />
            </div>
        );
    });
    return (
        <Container>
            <div className="row">
                {menu}
            </div>
        </Container>
    );
}

/* Original code using classes

class Menu extends Component {

    render() {
        const menu = this.props.dishes.map((dish) => {

            return (
                <div key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.props.onClick(dish.id)} className="cropped">
                        
                      <Card.Img style={{ width: '100%' }} src={dish.image} alt={dish.name} className="food-image" />
                      <Card.ImgOverlay className="d-flex">
                          <Card.Title className="imgover align-self-center mx-auto">{dish.name}</Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
            );
        });



        return (
            <Container>
                <div className="row">
                    {menu}
                </div>
            </Container>
        );
    }


} */

export default Menu;
