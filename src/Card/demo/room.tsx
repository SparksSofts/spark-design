import React from 'react';
import {Button, Divider} from 'antd';
import {SSCard} from 'sparkd';

const App = () => (
  <div>
    <SSCard
      title="Card Title"
      extra={<Button>More</Button>}
      cover={<img alt="example" src="https://example.com/your-image.jpg"/>}
      actions={[
        <Button key="setting">Setting</Button>,
        <Button key="edit">Edit</Button>,
        <Button key="ellipsis">More</Button>,
      ]}
    >
      <p>Card content</p>
    </SSCard>
    <Divider/>
    <SSCard.Room
      roomName={"roomName"}
      isMuted={true}
      unreadCount={100}
      messageContent={"zrj: タスクを送信しました"}
    >
    </SSCard.Room>
    <Divider/>
    <SSCard.Room
      roomName={"roomName2"}
      isMuted={true}
      unreadCount={100}
      messageContent={"zrj: タスクを送信しました"}
    >
    </SSCard.Room>
  </div>
);

export default App;
