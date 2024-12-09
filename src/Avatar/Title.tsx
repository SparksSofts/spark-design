import { Avatar, Badge } from 'antd';
import React, { CSSProperties } from 'react';
import './style/AvatarTitle.css';

// AvatarWithTitleProps
type AvatarProps = React.ComponentProps<typeof Avatar>;
/**
 * AvatarTitleProps 接口定义了Avatar组件的扩展属性，用于支持更多的自定义配置。
 * 它在AvatarProps的基础上增加了标题、计数、样式配置以及选中状态相关的属性。
 */
export interface AvatarTitleProps extends AvatarProps {
  /**
   * 标题文本内容。
   */
  title?: string;
  /**
   * 显示在Avatar上的数字计数，通常用于表示未读消息数量。
   */
  count?: number;
  /**
   * 容器的自定义样式，允许开发者通过CSS属性定制Avatar的外部样式。
   */
  containerStyle?: CSSProperties;
  /**
   * 标题文本的自定义样式，通过CSS属性可以调整标题的字体、颜色等样式特性。
   */
  titleStyle?: CSSProperties;
  /**
   * 指示Avatar是否处于选中状态，用于实现具有选中反馈的Avatar组件。
   */
  isSelected?: boolean;
  /**
   * 当Avatar处于选中状态时显示的图片源，用于实现选中状态下的视觉差异化。
   */
  selectedAvatarSrc?: string;
  /**
   * 当Avatar处于选中状态时标题文本的颜色，通过自定义颜色来增强选中状态的视觉反馈。
   */
  selectedTitleColor?: string;
}

// InternalAvatarWithTitle
const InternalAvatarWithTitle: React.ForwardRefRenderFunction<
  HTMLSpanElement,
  AvatarTitleProps
> = (props, ref) => {
  const {
    title,
    count,
    containerStyle,
    titleStyle,
    isSelected = false,
    selectedAvatarSrc,
    selectedTitleColor = '#D64133',
    ...restProps
  } = props;
  if (isSelected) {
    restProps.src = selectedAvatarSrc;
  }
  // 使用selectedTitleColor或回退到默认值（如果未提供）
  const effectiveTitleStyle = isSelected
    ? { ...titleStyle, color: selectedTitleColor }
    : { ...titleStyle };
  return (
    <div
      className={`avatar-title ${isSelected ? 'selected' : ''}`}
      style={{ ...containerStyle }}
    >
      <Badge count={count}>
        <Avatar ref={ref} {...restProps} />
      </Badge>
      <div className="title" style={effectiveTitleStyle}>
        {title}
      </div>
    </div>
  );
};

const Title = React.forwardRef<HTMLSpanElement, AvatarTitleProps>(
  InternalAvatarWithTitle,
);
export default Title;
