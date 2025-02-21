import './App.css';
import MenuItem from './components/MenuItem';
import MenuHeader from './components/MenuHeader';
import PaymentRow from './components/PaymentRow';
import { useState } from 'react';

import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.
import { clear } from '@testing-library/user-event/dist/clear';

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5.99,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6.99,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7.99,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4.99,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3.99,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2.99,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5.99,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8.99,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6.99,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9.99,
  }
];

let cart = new Map(menuItems.map(key => [key.title, 0]));

function App() {
  
  const [itemCounts, setItemCounts] = useState(
    new Map(menuItems.map(key => [key.title, 0]))
  );

  const [subtotal, setSubtotal] = useState(0.00);

  const updateItemCount = (itemName, incrementValue, itemPrice) => {
    setItemCounts(prevCounts => {
      const newCounts = new Map(prevCounts);
      const currentCount = prevCounts.get(itemName);
      const newCount = currentCount + incrementValue;
      if (newCount >= 0) {
        newCounts.set(itemName, newCount);
      }
      return newCounts;
    });
    
    // line sourced from: https://stackoverflow.com/questions/15762768/javascript-math-round-to-two-decimal-places
    setSubtotal(prevSubtotal => +((prevSubtotal + (itemPrice * incrementValue)).toFixed(2)));
  };

  const clearItemCount = () => {
    setItemCounts(prevCounts => {
      return new Map(menuItems.map(key => [key.title, 0]))
    })

    setSubtotal(prevSubtotal => 0.00)
  }

  return (
    <div className='menu'>
      <MenuHeader/>
      <div className="menu container text-center">
          {menuItems.map((food) => (
            <MenuItem 
              key={food.id}
              title={food.title} 
              imgSource={process.env.PUBLIC_URL + '/images/' + food.imageName}
              description={food.description}
              price={food.price}
              itemCounts={itemCounts}
              updateItemCount={updateItemCount}
            />
          ))}
          <PaymentRow
            subtotal={subtotal}
            cart={itemCounts}
            clearItemCount={clearItemCount}
          />
      </div>
    </div>
  );
}

export default App;
