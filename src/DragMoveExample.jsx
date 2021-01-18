import React, { useState } from 'react';
import DragMove from './DragMove';
import logo from './logo.svg';

export default function DragMoveExample() {
  const [translate, setTranslate] = useState({
    x: 0, y: 0,
  });

  const handleDragMove = (e) => {
    setTranslate({ x: translate.x + e.movementX, y: translate.y + e.movementY });
  }

  return (
    <DragMove onDragMove={handleDragMove}>
      <div style={{
        transform: `translateX(${translate.x}px) translateY(${translate.y}px)`
      }}>
      <img src={logo} className="App-logo" alt="logo" />
    </div>
  </DragMove>

  )
}