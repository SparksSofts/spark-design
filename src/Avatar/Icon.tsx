import { Avatar, Badge } from 'antd';
import React from 'react';
import './style/AvatarIcon.css';

export type AvatarProps = React.ComponentProps<typeof Avatar>;

/**
 * AvatarIconProps接口继承自AvatarProps，用于定义AvatarIcon组件的属性。
 *
 * @property {string} statusImage - 用于设置头像的状态图像，可选。
 * @property {number} offsetX - 用于调整头像图像在水平方向上的偏移量，可选。
 * @property {number} offsetY - 用于调整头像图像在垂直方向上的偏移量，可选。
 */
export interface AvatarIconProps extends AvatarProps {
  statusImage?: string;
  offsetX?: number;
  offsetY?: number;
}

// CustomAvatar
const CustomAvatar: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  AvatarIconProps
> = (props, ref) => {
  const { statusImage, offsetX = 0, offsetY = 0, ...restProps } = props;
  return (
    <Badge
      count={
        statusImage ? (
          <img
            className="avatar-icon"
            src={statusImage}
            alt="status"
            style={{ width: 16, height: 16, borderRadius: '50%' }}
          />
        ) : null
      }
      offset={[offsetX, offsetY]} // 调整此处的值以定位到右下角
    >
      <Avatar ref={ref} {...restProps} />
    </Badge>
  );
};

const Icon = React.forwardRef<HTMLSpanElement, AvatarIconProps>(CustomAvatar);
export default Icon;
