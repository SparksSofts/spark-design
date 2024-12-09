import { Avatar } from 'antd';
import React from 'react';

export type AvatarProps = React.ComponentProps<typeof Avatar>;
// InternalAvatarWithTitle
const InternalAvatarWithTitle: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  AvatarProps
> = (props, ref) => {
  const { ...restProps } = props;
  return (
    <>
      <Avatar ref={ref} {...restProps} />
    </>
  );
};

const SSAvatar = React.forwardRef<HTMLSpanElement, AvatarProps>(
  InternalAvatarWithTitle,
);
export default SSAvatar;
