import React, { Component } from "react";
import "./App.css";
import { Container, Navbar, NavbarBrand } from 'react-bootstrap-v5';
import Menu from './components/MenuComponents';
import './components/MenuComponents.css';
import { DISHES } from './shared/dishes';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dishes: DISHES
    };
  }
  render() {
    return (
      <div className="App">
        <Container>
          <Navbar className="bg-secondary">
            <Container>
              <NavbarBrand href="/">My Restaurant</NavbarBrand>
            </Container>
          </Navbar>
        </Container>
        <Menu dishes={this.state.dishes} />
      </div>
      
    )
  }
}

export default App;
