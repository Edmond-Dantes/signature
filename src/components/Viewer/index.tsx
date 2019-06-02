import React from 'react';
import './Viewer.css';

interface Props {
  src: string
}

export default function Viewer({ src }: Props) {

  if (!src) {
    return (
      <div className="Viewer"/>
    );
  }

  return (
    <div className="Viewer">
      <img
        height="100px"
        width="100%"
        src={src}
        alt="document"
      />
    </div>
  );
}

// Viewer.defaultProps