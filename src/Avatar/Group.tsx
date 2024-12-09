import { Avatar } from 'antd';
import React from 'react';

type GroupProps = React.ComponentProps<typeof Avatar.Group>;
export interface AvatarGroupProps extends GroupProps {
  /**
   * Avatar 组件排列方式
   */
  type?: 'row' | 'column';
}

const Group = (props: AvatarGroupProps) => {
  const { type, ...restProps } = props;
  //实现头像三角形排列
  if (type === 'row') {
    return (
      <Avatar.Group
        {...restProps}
        style={{ display: 'flex', flexDirection: 'row-reverse' }}
      />
    );
  } else if (type === 'column') {
    return (
      <Avatar.Group
        {...restProps}
        style={{ display: 'flex', flexDirection: 'column-reverse' }}
      />
    );
  } else {
    return <Avatar.Group {...restProps} />;
  }
};
export default Group;
