import { Badge, Divider } from 'antd';
import React from 'react';
import { SSAvatar } from 'sparkd';

const placeholder = '/images/nulluser.svg'; // 补位头像的 URL

const avatars4 = [
  {
    src: '/images/avatar.svg',
  },
  {
    src: '/images/avatar.svg',
  },
  {
    src: '/images/avatar.svg',
  },
  {
    src: '/images/avatar.svg',
  },
];
const avatars2 = [
  {
    src: '/images/avatar.svg',
  },
  {
    src: '/images/avatar.svg',
  },
];
const avatars1 = [
  {
    src: '/images/avatar.svg',
  },
];

const statusImage = '/images/pin.svg';

const App: React.FC = () => {
  return (
    <div>
      <SSAvatar.Triangle
        avatars={avatars4}
        placeholderSrc={placeholder}
        size={24}
        style={{ width: 44, height: 44 }}
      />
      <Divider />
      <SSAvatar.Triangle
        avatars={avatars2}
        placeholderSrc={placeholder}
        size={24}
        style={{ width: 44, height: 44 }}
      />
      <Divider />
      <SSAvatar.Triangle
        avatars={avatars1}
        placeholderSrc={placeholder}
        size={24}
        style={{ width: 44, height: 44 }}
      />
      <Divider />
      <SSAvatar.Triangle
        avatars={avatars1}
        placeholderSrc={placeholder}
        size={24}
        style={{ width: 44, height: 44 }}
        statusImage={statusImage}
        offsetX={-4}
        offsetY={38}
      />
      <Divider />
      <Badge dot>
        <SSAvatar.Triangle
          avatars={avatars4}
          placeholderSrc={placeholder}
          size={24}
          style={{ width: 44, height: 44 }}
          statusImage={statusImage}
          offsetX={-4}
          offsetY={38}
        />
      </Badge>
      <Divider />
    </div>
  );
};

export default App;
