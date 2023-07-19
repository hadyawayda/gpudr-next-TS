'use client'

import React from 'react';
import {useState} from 'react'

function Trash() {
  const [hover, setIshover] = useState(false)

  const svgStyle = {
    fill: 'none',
    stroke: '#000000',
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    strokeWidth: '32px',
    ...(hover ? {stroke: 'red'} : null)
  };

  return (
    <div>
      <svg
        className="my-svg"
        width="20px"
        height="20px"
        viewBox="0 0 512 512"
        xmlns="http://www.w3.org/2000/svg"
        onMouseEnter={() => setIshover(true)} 
        onMouseLeave={() => setIshover(false)}
      >
        <path
          d="M112,112l20,320c.95,18.49,14.4,32,32,32H348c17.67,0,30.87-13.51,32-32l20-320"
          style={svgStyle}
          className='transition duration-300 ease-in-out'
        />
        <line
          x1="80"
          y1="112"
          x2="432"
          y2="112"
          style={svgStyle}
          className='transition duration-300 ease-in-out'
        />
        <path
          d="M192,112V72h0a23.93,23.93,0,0,1,24-24h80a23.93,23.93,0,0,1,24,24h0v40"
          style={svgStyle}
          className='transition duration-300 ease-in-out'
        />
        <line
          x1="256"
          y1="176"
          x2="256"
          y2="400"
          style={svgStyle}
          className='transition duration-300 ease-in-out'
        />
        <line
          x1="184"
          y1="176"
          x2="192"
          y2="400"
          style={svgStyle}
          className='transition duration-300 ease-in-out'
        />
        <line
          x1="328"
          y1="176"
          x2="320"
          y2="400"
          style={svgStyle}
          className='transition duration-300 ease-in-out'
        />
      </svg>
    </div>
  );
}

export default Trash;