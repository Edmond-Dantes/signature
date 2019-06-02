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
      <iframe
        height="100%"
        width="100%"
        src={src}
        title="document"
        // alt="document"
      />
    </div>
  );
}

// Viewer.defaultProps