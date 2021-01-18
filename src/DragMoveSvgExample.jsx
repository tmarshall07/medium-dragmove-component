import React, { useState } from 'react';
import Background from './Background';
import DragMove from './DragMove';
import Waypoint from './Waypoint';

export default function DragMoveSvgExample() {
  const [translate, setTranslate] = useState({
    x: 0, y: 0,
  });

  const handleDragMove = (e) => {
    setTranslate({ x: translate.x + e.movementX, y: translate.y + e.movementY });
  }

  return (
    <svg width="850" height="605" viewBox="0 0 850 605">
      <Background />
      <DragMove isSvg={true} onDragMove={handleDragMove}>
        <g transform={`translate(${translate.x} ${translate.y})`}>
          <Waypoint />
        </g>
      </DragMove>
    </svg>
  )
}