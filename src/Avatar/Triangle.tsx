import { Avatar, Badge } from 'antd';
import React from 'react';
import './style/AvatarTriangle.css';

/**
 * AvatarTriangleProps 接口定义了 AvatarTriangle 组件的属性。
 *
 * @property {Array<{ src: string; alt?: string }>} avatars - 包含图片源URL和可选的alt描述的数组。
 * @property {string} [placeholderSrc] - 用于占位的图片源URL，默认为空。
 * @property {number} [size] - 组件的尺寸，默认为不确定的大小。
 * @property {[key: string]: any} - 其他任意属性将会被传递到组件中。
 */
export interface AvatarTriangleProps {
  avatars: { src: string; alt?: string }[];
  placeholderSrc?: string; // 补位头像的 URL
  size?: number; // 可选的 size 属性
  statusImage?: string;
  offsetX?: number;
  offsetY?: number;

  [key: string]: any;
}

const Triangle: React.FC<AvatarTriangleProps> = ({
  avatars,
  size,
  placeholderSrc = '',
  statusImage,
  offsetX = 0,
  offsetY = 0,
  ...restProps
}) => {
  // 确保 avatars 数组长度为 3，不足的用占位符填充
  while (avatars.length < 3) {
    if (placeholderSrc !== '')
      avatars.push({ src: placeholderSrc, alt: 'Placeholder' });
  }

  return (
    <Badge
      count={
        statusImage ? (
          <img
            className="avatar-triangle-icon"
            src={statusImage}
            alt="status"
            style={{
              zIndex: avatars.length + 1,
              width: 16,
              height: 16,
              borderRadius: '50%',
            }}
          />
        ) : null
      }
      offset={[offsetX, offsetY]}
    >
      <Avatar.Group className="avatar-triangle" {...restProps}>
        {avatars.slice(0, 3).map((avatar, index) => (
          <Avatar
            key={index}
            src={avatar.src}
            alt={avatar.alt}
            size={size}
            className={`avatar avatar-${index + 1}`}
            style={{ zIndex: avatars.length - index, objectFit: 'cover' }} // 使用 object-fit 来填满头像容器
          />
        ))}
      </Avatar.Group>
    </Badge>
  );
};

export default Triangle;
