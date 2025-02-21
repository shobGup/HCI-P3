import React, { useState } from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const AddButton = ({ itemCounts, updateItemCount, price, itemName }) => {
    
    return (
        <div className='add-button'>
            <button 
                className='operator-button'
                onClick={() => {
                    updateItemCount(itemName, -1, price)
                }}
            >
                {'-'}
            </button>
            <div>
                {itemCounts.get(itemName)}
            </div>
            <button 
                className='operator-button'
                onClick={() => {
                    updateItemCount(itemName, 1, price)
                }}
            >
                {'+'}
            </button>
        </div>

    );
};

export default AddButton;
