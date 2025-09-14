import ExpertCard from './components/ExpertCard'  
import Cart from './components/Cart'
import { useState,useEffect } from 'react'
import axios from 'axios';

import './App.css'

function App() {
  const[experts,setExperts]=useState([]);
  const[cart,setCart]=useState([]);

  useEffect(()=>{
    axios
    .get('/Expert.json')
    .then((response) => {
      setExperts(response.data);
    })
    .catch((error) => {
      console.error('Error fetching expert data:', error);
    });
  }, []);
  const addToCart=(expert)=>{
    setCart([...cart,expert]);
  }
  const removeFromCart=(id)=>{
    setCart(cart.filter((expert)=>expert.id!==id));
  }
  const getTotalCost=()=>{
    return cart.reduce((total,expert)=>total+expert.salary,0);
  }

  return (
    <div className="App">
      <header>
        <h1>Cyber Experts</h1>
        <p>Your one-stop solution for cybersecurity expertise.</p>
        <div className="cart-info">
          <div>
            <span>
              Experts Added: {cart.length}
            </span>
          </div>
          <div>
            <span>Total Cost: ${getTotalCost()}
              <button onClick={() => setCart([])}>Clear Cart</button>
            </span>
          </div>
        </div>
      </header>
      <div className="container">
        <div className="expert-list ">
          {experts.map((expert)=>(
            <ExpertCard 
              key={expert.id}
              expert={expert}
              addToCart={addToCart}
              removeFromCart={removeFromCart}
              cart={cart}
            />
          ))}
        </div>
        <div className="cart-section">
          <Cart cart={cart}/> 
        </div>
      </div>
    </div>
  )
}

export default App;
