import { UserOutlined } from '@ant-design/icons';
import { Badge, Divider } from 'antd';
import React from 'react';
import { SSAvatar } from 'sparkd';

const App: React.FC = () => (
  <>
    <div>
      <SSAvatar.User
        userName={'田中 太郎'}
        src={'/images/user.svg'}
        size={20}
        icon={<UserOutlined />}
        containerStyle={{ width: 91, height: 20, display: 'flex', alignItems: 'center', borderRadius: 20, border: '1px solid #E6E6E6' }}
        titleStyle={{
          marginTop: 4,
          fontSize: 10,
          fontWeight: 400,
          fontFamily: 'Noto Sans JP',
          color: 'rgba(0, 0, 0, 0.6)',
        }}
      />
    </div>
    <Divider />

    <div>
      <Badge dot >
        <SSAvatar.User
          userName={'田中 太郎'}
          src={'/images/user.svg'}
          size={20}
          icon={<UserOutlined />}
          containerStyle={{ width: 91, height: 20, display: 'flex', alignItems: 'center', borderRadius: 20, border: '1px solid #E6E6E6' }}
          titleStyle={{
            marginTop: 4,
            fontSize: 10,
            fontWeight: 400,
            fontFamily: 'Noto Sans JP',
            color: 'rgba(0, 0, 0, 0.6)',
          }}
        />
      </Badge>
    </div>
    <Divider />
  </>
);
export default App;
