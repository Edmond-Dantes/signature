import React from 'react';
import './Pad.css';

interface Props {
  forwardedRef: any
}

export default function Pad({forwardedRef}: Props) {
  return (
    <canvas
      ref={forwardedRef}
      className="Pad"
    />
  );
}