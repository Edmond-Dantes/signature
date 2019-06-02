import React, { useState } from 'react';
import Viewer from 'components/Viewer';

export default function ViewerContainer() {

  const [src, setSrc] = useState("");

  return (
    <Viewer
      src={src}
    />
  );
}