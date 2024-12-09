---
category: Components
title: Avatar
subtitle: 头像
description: 用来代表用户或事物，支持图片、图标或字符展示。
cover: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*JJBSS5lBG4IAAAAAAAAAAAAADrJ8AQ/original
coverDark: https://mdn.alipayobjects.com/huamei_7uahnr/afts/img/A*YbgyQaRGz-UAAAAAAAAAAAAADrJ8AQ/original
demo:
  cols: 2
group:
  title: 数据展示
  order: 5
---

## 代码演示

<code src="./demo/title.tsx">SSAvatar.Title</code>
<code src="./demo/icon.tsx">SSAvatar.Icon</code>
<code src="./demo/triangle.tsx">SSAvatar.Triangle</code>
<code src="./demo/user.tsx">SSAvatar.User</code>

## API

通用属性参考：[通用属性](https://ant-design.antgroup.com/components/avatar-cn)

### SSAvatar.Title

| 参数                 | 说明                      | 类型              | 默认值         | 版本      |
|--------------------|-------------------------|-----------------|-------------|---------|
| title              | 标题文本内容                  | `string`        | `""`        | `0.0.1` |
| count              | 显示在 Avatar 上的数字计数       | `number`        | `0`         | `0.0.1` |
| containerStyle     | 容器的自定义样式                | `CSSProperties` | `""`        | `0.0.1` |
| titleStyle         | 标题文本的自定义样式              | `CSSProperties` | `""`        | `0.0.1` |
| isSelected         | 指示 Avatar 是否处于选中状态      | `boolean`       | `false`     | `0.0.1` |
| selectedAvatarSrc  | 当 Avatar 处于选中状态时显示的图片源  | `string`        | `""`        | `0.0.1` |
| selectedTitleColor | 当 Avatar 处于选中状态时标题文本的颜色 | `string`        | `"#D64133"` | `0.0.1` |

### SSAvatar.Icon

| 参数          | 说明                     | 类型       | 默认值  | 版本      |
|-------------|------------------------|----------|------|---------|
| statusImage | 用于设置头像的状态图像，可选。        | `string` | `""` | `0.0.1` |
| offsetX     | 用于调整头像图像在水平方向上的偏移量，可选。 | `number` | `0`  | `0.0.1` |
| offsetY     | 用于调整头像图像在垂直方向上的偏移量，可选。 | `number` | `0`  | `0.0.1` |

### SSAvatar.Triangle

| 参数             | 说明                        | 类型       | 默认值  | 版本      |
|----------------|---------------------------|----------|------|---------|
| avatars        | 包含图片源 URL 和可选的 alt 描述的数组。 | `数组`     | `[]` | `0.0.1` |
| size           | 组件的尺寸，默认为不确定的大小。          | `number` | `0`  | `0.0.1` |
| placeholderSrc | 用于占位的图片源 URL，默认为空。        | `string` | `""` | `0.0.1` |
| statusImage    | 用于设置头像的状态图像，可选。           | `string` | `""` | `0.0.1` |
| offsetX        | 用于调整头像图像在水平方向上的偏移量，可选。    | `number` | `0`  | `0.0.1` |
| offsetY        | 用于调整头像图像在垂直方向上的偏移量，可选。    | `number` | `0`  | `0.0.1` |

### SSAvatar.User

| 参数                 | 说明                      | 类型              | 默认值         | 版本      |
|--------------------|-------------------------|-----------------|-------------|---------|
| title              | 标题文本内容                  | `string`        | `""`        | `0.0.1` |
| count              | 显示在 Avatar 上的数字计数       | `number`        | `0`         | `0.0.1` |
| containerStyle     | 容器的自定义样式                | `CSSProperties` | `""`        | `0.0.1` |
| titleStyle         | 标题文本的自定义样式              | `CSSProperties` | `""`        | `0.0.1` |
| isSelected         | 指示 Avatar 是否处于选中状态      | `boolean`       | `false`     | `0.0.1` |
| selectedAvatarSrc  | 当 Avatar 处于选中状态时显示的图片源  | `string`        | `""`        | `0.0.1` |
| selectedUserColor | 当 Avatar 处于选中状态时标题文本的颜色 | `string`        | `"#D64133"` | `0.0.1` |
