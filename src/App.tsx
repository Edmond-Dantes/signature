import React from 'react';
import Pad from 'components/Pad';
import ViewerContainer from 'containers/ViewerContainer';

const App: React.FC = () => {
  return (
    <div>
      <ViewerContainer/>
      <Pad/>
    </div>
  );
}

export default App;
