import React from 'react';
import './App.css';

const Box = ({ imagePath, marginTop, title, description }) => {
    
    return (
      <div className="box">
        <div className="backgroundImage" style={{ backgroundImage: `url(${process.env.PUBLIC_URL}${imagePath})` }}></div>
      
        <div className="content" style={{ marginTop: `${marginTop}px` }}>
          <h2>{title}</h2>
          <p>{description}</p>
        </div>
      </div>
    );
  };

export default Box