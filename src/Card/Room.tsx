import React, {useState} from 'react';
import {Badge, Card, Dropdown, Menu, Tooltip} from 'antd';
import {EllipsisOutlined, SoundOutlined} from '@ant-design/icons';
import PropTypes from 'prop-types';
import './style/RoomCard.css'; // 导入自定义样式文件

/**
 * 定义房间卡片组件的属性接口。
 *
 * 房间卡片组件用于展示房间的基本信息和状态，可以通过配置不同的属性来展示不同的内容和状态。
 * 下面是每个属性的详细说明：
 *
 * @property roomName - 房间的名称，必填属性，用于展示房间的名称。
 * @property isMuted - 是否静音的标志，可选属性，默认为false。用于展示房间的静音状态。
 * @property unreadCount - 未读消息的数量，可选属性，默认为0。用于展示未读消息的数量提示。
 * @property messageContent - 最后一条消息的内容，可选属性。用于展示房间内最后一条消息的预览。
 * @property menuItems - 右键菜单的内容，可选属性。用于自定义房间卡片的右键菜单。
 */

export interface CardRoomProps {
  roomName?: string;
  roomAvatar?: React.ReactNode;
  isMuted?: boolean;
  unreadCount?: number;
  messageContent?: string;
  menuItems?: React.ReactNode;

  [key: string]: any;
}

const Room: React.FC<CardRoomProps> = ({
                                         roomName,
                                         roomAvatar,
                                         isMuted = false,
                                         unreadCount = 0,
                                         messageContent,
                                         menuItems,
                                         ...restProps
                                       }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const handleMenuVisibleChange = (visible: boolean) => {
    setMenuVisible(visible);
  };

  const menu = (
    <Menu>
      {menuItems}
    </Menu>
  );

  return (
    <Card className="room-card" hoverable {...restProps}>
      <Card.Meta
        avatar={roomAvatar}
        title={
          <div className="room-header">
            {isMuted && <SoundOutlined className="icon-muted"/>}
            <span className="room-name">{roomName}</span>
            {unreadCount > 0 && (
              <Badge count={unreadCount} offset={[10, 0]}>
                <Tooltip
                  title="Menu"
                  visible={menuVisible}
                  onVisibleChange={handleMenuVisibleChange}
                >
                  <Dropdown overlay={menu} trigger={['click']}>
                    <EllipsisOutlined className="ellipsis-icon"/>
                  </Dropdown>
                </Tooltip>
              </Badge>
            )}
          </div>
        }
        description={<div className="message">{messageContent}</div>}
      />
    </Card>
  );
};

// PropTypes类型检查
Room.propTypes = {
  roomName: PropTypes.string,
  isMuted: PropTypes.bool,
  unreadCount: PropTypes.number,
  messageContent: PropTypes.string,
  menuItems: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.element), PropTypes.element]),
};

// 默认属性
Room.defaultProps = {
  isMuted: false,
  unreadCount: 0,
};

export default Room;
