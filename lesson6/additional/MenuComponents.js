import React, { Component } from 'react';
import { Card } from 'react-bootstrap-v5';
import DishDetail from './DishDetailComponent';
class Menu extends Component {

    constructor(props) {
        super(props);

        this.state = {
            selectedDish: null
        };
    }

    onDishSelect(dish) {
        this.setState({ selectedDish: dish });
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
            <div className="container">
                <div className="row">
                    {menu}
                </div>
                <div className="row">
                    <DishDetail selectedDish={this.state.selectedDish} />
                </div>
            </div>
        );
    }


}

export default Menu;