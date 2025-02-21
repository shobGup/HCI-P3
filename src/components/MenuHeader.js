import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuHeader = () => {
    return (
      <div className="header-container">
        <img src={process.env.PUBLIC_URL +"/images/transparentBR.png"} id="logo" alt="Menu Logo" />
        <div className="text-container">
          <h3 className="catchphrase" id="uniqueColorText"> Can't Baskin Without the Robbins</h3>
          <h1 className="catchphrase" id="otherText">We got the scoop on everything!</h1>
        </div>
      </div>
    );
};

export default MenuHeader;
