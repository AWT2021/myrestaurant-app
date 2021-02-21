import React, { Component } from "react";
import { Container, Card } from 'react-bootstrap-v5';



class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish: null
        }
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
    }
    renderDish(dish) {
        if (dish != null)
            return (
                <div className="col-12">
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
                return(
                    <div></div>
                );
        }
    
        render() {
            const menu = this.props.dishes.map((dish) => {
                return (
                  <div  key={dish.id} className="col-12 col-md-5 m-1">
                    <Card onClick={() => this.onDishSelect(dish)} className="cropped">
                      <Card.Img style={{ width: '100%' }} src={dish.image} alt={dish.name} className="food-image" />
                      <Card.ImgOverlay className="d-flex">
                          <Card.Title className="imgover align-self-center mx-auto">{dish.name}</Card.Title>
                      </Card.ImgOverlay>
                    </Card>
                  </div>
                );
            });
    
            return (
                <Container >
                    <div className="row">
                        {menu}
                    </div>
                    <div className="row">
                      <div className="col-12 col-md-5 m-1">
                        {this.renderDish(this.state.selectedDish)}
                      </div>
                    </div>
                </Container>
            );
        }
    }
    

export default Menu;
