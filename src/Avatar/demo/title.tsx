import { UserOutlined } from '@ant-design/icons';
import { Divider } from 'antd';
import React from 'react';
import { SSAvatar } from 'sparkd';

const App: React.FC = () => (
  <>
    <div>
      <SSAvatar.Title
        title={'トーク'}
        shape="square"
        size={32}
        src={'/images/talk.svg'}
        isSelected={false}
        containerStyle={{ width: 64, height: 55.43 }}
        count={4}
        titleStyle={{
          fontSize: 12,
          fontWeight: 700,
          fontFamily: 'Noto Sans JP',
          color: '#BDBDBD',
        }}
      />
    </div>
    <Divider />
    <div>
      <SSAvatar.Title
        title={'トーク'}
        shape="square"
        size={32}
        isSelected={true}
        src={'/images/talk.svg'}
        selectedAvatarSrc={'/images/talk2.svg'}
        containerStyle={{ width: 64, height: 55.43 }}
        count={4}
        titleStyle={{
          fontSize: 12,
          fontWeight: 700,
          fontFamily: 'Noto Sans JP',
          color: '#BDBDBD',
        }}
      />
    </div>
    <Divider />
    <div>
      <SSAvatar.Title
        title={'タスク'}
        shape="square"
        size={32}
        src={'/images/task.svg'}
        containerStyle={{ width: 64, height: 55.43 }}
        count={0}
        titleStyle={{
          fontSize: 12,
          fontWeight: 700,
          fontFamily: 'Noto Sans JP',
          color: '#BDBDBD',
        }}
      />
    </div>
    <Divider />
    <div>
      <SSAvatar.Title
        title={'連絡先'}
        shape="square"
        size={32}
        src={'/images/contact.svg'}
        containerStyle={{ width: 64, height: 55.43 }}
        titleStyle={{
          fontSize: 12,
          fontWeight: 700,
          fontFamily: 'Noto Sans JP',
          color: '#BDBDBD',
        }}
      />
    </div>
    <Divider />
    <div>
      <SSAvatar.Title
        title={'田中 太郎'}
        src={'/images/user.svg'}
        size={40}
        icon={<UserOutlined />}
        containerStyle={{ width: 64, height: 62 }}
        titleStyle={{
          marginTop: 4,
          fontSize: 12,
          fontWeight: 400,
          fontFamily: 'Noto Sans JP',
          color: 'rgba(0, 0, 0, 0.6)',
        }}
      />
    </div>
    <Divider />
  </>
);
export default App;
