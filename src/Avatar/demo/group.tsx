import React from 'react';
import { SSAvatar } from 'sparkd';

const App: React.FC = () => (
  <>
    <SSAvatar.Group type={'column'} maxPopoverPlacement="bottom">
      <SSAvatar />
      <SSAvatar />
      <SSAvatar />
    </SSAvatar.Group>
  </>
);
export default App;
