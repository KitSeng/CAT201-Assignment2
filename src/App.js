import React from 'react';
import './App.css';
import Box from './Box';

function App() {
  return (
    <div className="container">
    <Box
      imagePath="background.webp"
      marginTop={25}
      title="Our History"
      description="Délicieux, a culinary haven since 1993, takes pride in curating an 
      exquisite menu that celebrates the rich and savory flavors of Western cuisine. With a legacy of nearly three decades, we continue to serve mouthwatering dishes, inviting our guests to indulge in a timeless dining experience filled with warmth and 
      culinary delight."
    />

    <Box
      imagePath="mission.jpg"
      marginTop={65}
      title="Our Mission"
      description="Bringing joy to every meal by serving delicious Western cuisine with a side of warm hospitality, creating memorable dining experiences for our valued guests."
    />

    <Box
      imagePath="vision.jpg"
      marginTop={65}
      title="Our Vision"
      description=" To be the preferred gathering place for those seeking hearty and 
      satisfying meals, where every bite is a journey of flavors and every visit feels like coming home."
    />
  </div>
  );
}

export default App;