import React from 'react';

export default function Arrow(props) {
  return (
    <svg version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 32 32" style={{enableBackground: 'new 0 0 32 32'}} fill={props.hex} xmlSpace="preserve" width={32} height={32} {...props}>
      <path d="M32,16c0-8.8-7.2-16-16-16S0,7.2,0,16s7.2,16,16,16S32,24.8,32,16z M12.5,23.5c-0.7-0.7-0.7-2,0-2.7l4.8-4.7l-4.8-4.7
      	c-0.7-0.7-0.7-2,0-2.7c0.8-0.7,2-0.7,2.7,0l6.2,6.1c0.7,0.7,0.7,2,0,2.7l-6.2,6.1C14.5,24.2,13.3,24.2,12.5,23.5z" />
    </svg>
  );
}
