import React, { Component } from "react";
import { Container } from 'react-bootstrap-v5';


class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dishes: [
                {
                    id: 0,
                    name: 'Uthappiza',
                    image: 'assets/images/pizza.jpg',
                    category: 'mains',
                    label: 'Hot',
                    price: '120 DKr',
                    description: 'A unique combination of Indian Uthappam (pancake) and Italian pizza, topped with Cerignola olives, ripe vine cherry tomatoes, Vidalia onion, Guntur chillies and Buffalo Paneer.'

                },
                {
                    id: 1,
                    name: 'Grandma\'s Tacos',
                    image: 'assets/images/tacos.jpg',
                    category: 'mains',
                    label: '',
                    price: '150 DKr',
                    description: '6 tacos prepared just like my grandma used to. Choose between spicy shredded beef, spicy chicken, the traditional pastor (marinated pork slowly cooked ove direct flames), or a mixed plate.'

                },
                {
                    id: 2,
                    name: 'Pollo en Mole (Chicken in Spicy Chocolate Sauce)',
                    image: 'assets/images/pollo_mole.jpg',
                    category: 'mains',
                    label: '',
                    price: '215 DKr',
                    description: 'Mexico\'s most iconic mole, this preparation marries mulato, ancho, and pasilla chiles with warm spices to create a velvety smooth sauce ideal for spooning over chicken.'

                },
                {
                    id: 3,
                    name: 'Cheesecake',
                    image: 'assets/images/cheesecake.jpg',
                    category: 'desserts',
                    label: '',
                    price: '70 DKr',
                    description: 'You have to try it to believe it. Our cheesecake is so creamy and delicious that you will always want an extra slice. Served with a dollop of whipped cream and fresh berries or with cholocate sauce.'

                },

            ],
        };
    }

    render() {
        const menu = this.state.dishes.map((dish) => {
            return (
                <div key={dish.id} className="row thumbnail">
                    <div tag="li" className="col-12 col-sm-4">
                        <div class="cropped"><img src={dish.image} alt={dish.name} className="food-image img-thumbnail" /></div>
                    </div>
                    <div className="col-12 col-sm-8">
                        <h2>{dish.name}</h2>
                        <p>{dish.description}</p>
                    </div>
                </div>
            );
        });

        return (
            <Container>
                <div className="row">
                    <div>
                        {menu}
                    </div>
                </div>
            </Container>
        );
    }
}

export default Menu;