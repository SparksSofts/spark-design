import InternalAvatarWithTitle from './Avatar';
import Group from './Group';
import Icon from './Icon';
import Title from './Title';
import Triangle from './Triangle';
import User from './User';

export type {AvatarProps} from './Avatar';
export type {AvatarGroupProps} from './Group';
export type {AvatarIconProps} from './Icon';
export type {AvatarTitleProps} from './Title';
export type {AvatarTriangleProps} from './Triangle';
export type {AvatarUserProps} from './User';
export {Group, Icon, Title, Triangle, User};

type CompoundedComponent = typeof InternalAvatarWithTitle & {
  Group: typeof Group;
  Triangle: typeof Triangle;
  Title: typeof Title;
  Icon: typeof Icon;
  User: typeof User;
};

const SSAvatar = InternalAvatarWithTitle as CompoundedComponent;

SSAvatar.Group = Group;
SSAvatar.Triangle = Triangle;
SSAvatar.Title = Title;
SSAvatar.Icon = Icon;
SSAvatar.User = User;

export default SSAvatar;
