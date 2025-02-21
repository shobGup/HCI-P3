import React, { useState } from 'react';
import AddButton from './AddButton';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, imgSource, description, price, itemCounts, updateItemCount }) => {
    return (
        <div className='row justify-content-center menu-item'>
            <div className='col-3 image-col'>
                <img src={imgSource} className='menu-image' alt={title}/>
            </div>
            <div className='col-6 info-col'>
                <div className='food-name'>
                    {title}
                </div>
                <div className='food-description'>
                    {description}
                </div>
                <div className='price-button-row'>
                    <div className='food-price'>
                        {price}
                    </div>
                    <AddButton
                        itemCounts={itemCounts}
                        updateItemCount={updateItemCount}
                        price={price}
                        itemName={title}
                    />
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
