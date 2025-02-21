import React, { useState } from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const PaymentRow = ({ subtotal, cart, clearItemCount }) => {
    return (
        <div className='row justify-content-center payment-row'>
            <div className='col-5 subtotal'>
                {'Subtotal: $' + subtotal.toFixed(2)}
            </div>
            <button
                className='col-3 order-button'
                onClick={() => {
                    // TODO: make this a subtotal check
                    let sum = 0;
                    for (const value of cart.values()) {
                        sum += value;
                    }
                    if (sum === 0) {
                        alert('No items in cart');
                    } else {
                        const orderString = Array.from(cart, ([key, value]) => {
                            if (value > 0) {
                                return `${value} ${key}`;
                            }
                            return
                        }).filter(item => item !== undefined).join(', ');
                        alert('Order placed!\n' + orderString);
                    }
                }}
            >
                {'Order'}
            </button>
            <button
                className='col-3 clear-button'
                onClick={clearItemCount}
            >
                {'Clear all'}
            </button>
        </div>
    );
};

export default PaymentRow;
