import { Badge, Divider } from 'antd';
import React from 'react';
import { SSAvatar } from 'sparkd';

const statusImage = '/images/pin.svg';
const src = '/images/user.svg';
const App: React.FC = () => (
  <>
    <div>
      <SSAvatar.Icon src={src} size={44} />
      <Divider />
      <SSAvatar.Icon src={src} statusImage={statusImage} />
      <Divider />
      <SSAvatar.Icon
        src={src}
        statusImage={statusImage}
        size={44}
        offsetX={-4}
        offsetY={4}
      />
      <Divider />
      <SSAvatar.Icon
        src={src}
        statusImage={statusImage}
        size={44}
        offsetX={-4}
        offsetY={38}
      />
      <Divider />
      <SSAvatar.Icon
        src={src}
        statusImage={statusImage}
        size={44}
        offsetX={-38}
        offsetY={4}
      />
      <Divider />
      <SSAvatar.Icon
        src={src}
        size={44}
        statusImage={statusImage}
        offsetX={-38}
        offsetY={38}
      />
      <Divider />
      <Badge dot>
        <SSAvatar.Icon
          src={src}
          statusImage={statusImage}
          size={44}
          offsetX={-4}
          offsetY={38}
        />
      </Badge>
      <Divider />
    </div>
  </>
);
export default App;
