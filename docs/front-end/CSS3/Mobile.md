# 移动端 Web 开发

::: tip 提示
移动端浏览器基本以 webkit 内核为主，兼容移动端主流浏览器，处理 Webkit 内核浏览器即可
:::

## 移动端主流方案

### 单独制作移动端页面（主流）

通常情况下，网址域名前面加 m(mobile)可以打开移动端。通过判断设备，如果是移动设备打开，则跳到移动端页面。

可选布局：

- 流式布局（百分比布局）
- flex 弹性布局（推荐）
- less + rem+ 媒体查询
- 混合布局

### 响应式页面兼容移动端

通过判断屏幕宽度来改变样式，以适应不同终端。缺点是：制作麻烦，需要花很大精力去调兼容性问题

可选布局：

- 媒体查询
- bootstarp

## 移动端常见布局

### 流式布局

流式布局，也称百分比布局。通过盒子的宽度设置成百分比来根据屏幕的宽度来进行伸缩，不受固定像素的限制，内容向两侧填充。流式布局方式是移动 web 开发使用的比较常见的布局方式。

### flex 弹性布局

flex 弹性布局操作方便，布局极为简单，移动端应用很广泛

## 视口

视口 (viewport) 是浏览器页面内容的屏幕区域。视口可以分为 布局视口、视觉视口 和 理想视口

### 布局视口

一般移动设备的浏览器都默认设置了一个布局视口，用于解决早期的 PC 端页面在手机上显示的问题。

iOS、Android 基本都将这个视口分辨率设置为 980px，所以 PC 上的网页大多都能在手机上呈现，但元素看上去很小，一般默认可以通过手动缩放网页。

### 视觉视口

视觉视口是用户正在看到的**网站的区域**。可以通过缩放去操作视觉视口，但不会影响布局视口，布局视口仍保持原来的宽度。

### 理想视口

理想视口为了使网站在移动端有最理想的浏览和阅读宽度而设定。布局视口的宽度应该与理想视口的宽度一致（设备宽度和布局视口一致）

### meta 视口标签

::: tip 提示
标准 viewport：

- 视口宽度和设备保持一致
- 视口的默认缩放比例 1.0
- 不允许用户自行缩放
- 最大允许的缩放比例 1.0
- 最小允许的缩放比例 1.0
  :::

```html
<meta
  name="viewport"
  content="width=device-width, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0, user-scalable=no"
/>
```

| 属性           | 解释说明                                                 |
| -------------- | -------------------------------------------------------- |
| width          | 宽度设置的是 viewport 宽度，可以设置 device-width 特殊值 |
| initial\-scale | 初始缩放比，大于 0 的数字                                |
| maximum\-scale | 最大缩放比，大于 0 的数字                                |
| minimum\-scale | 最小缩放比，大于 0 的数字                                |
| user\-scalable | 用户是否可以缩放，yes 或 no \( 1 或 0 \)                 |

## 二倍图

### 物理像素&物理像素比

- 物理像素
  物理像素点指的是屏幕显示的最小颗粒（即分辨率），是物理真实存在的。

- 物理像素比

* PC 端页面, 1px 等于 1 个物理像素，但是移动端不尽相同。
* 1px 的能显示的物理像素点的个数，称为物理像素比或屏幕像素比

### 多倍图

多倍图是为了解决移动端视网膜屏（将多个像素合并为一个像素）图片模糊的问题。图片比实际需要的大小大几倍，即为多倍图。通常使用二倍图

## 移动端特殊样式

### CSS3 盒子模型

box- sizing 可以指定盒模型，计算盒子大小的方式可以发生改变

```css
div {
  /* （默认）盒子大小为 width + padding + border */
  box-sizing: content-box;
  /* 盒子大小保持为 width */
  box-sizing: border-box;
}
```

### 去除 a 标签点击后高亮

```css
a {
  -webkit-tap-heighlight-color: transparent;
}
```

### 默认按钮样式

在移动端浏览器默认的外观在 ios 上加上这个属性才能给按钮和输入框自定义样式

```css
input {
  -webkit-appearance: none;
}
```

### 禁止长按弹出菜单

```css
img,
a {
  -webkit-touch-callout: none;
}
```

## 媒体查询

### 什么是媒体查询

媒体查询( Media Query）是 CSS3 新语法。

- 使用 `@media` 查询，可以针对不同的媒体类型定义不同的样式
- **@media 可以针对不同的屏幕尺寸设置不同的样式**
- 当你董置浏览器大小的过程中，页面也会根据浏览器的宽度和高度重新渲染页面
- 目前针对很多苹果手机、Android 手机，平板等设备都用得到多媒体查询

### 语法规范

::: tip 提示
媒体查询一般按照从小到大的顺序来写，根据样式的层叠性，这样代码更简洁
:::

```css
@media 媒体类型 关键字 (媒体特性) {
  /* CSS样式 */
}
```

- 媒体类型：
  - all: 用于所有设备;
  - print: 用于打印机和打印预览;
  - **screen: 用于电脑屏幕，平板电脑，智能手机等**
- 关键字：
  - **and: 可以将多个媒体特性连接到一起，相当于“且”的意思。**
  - not: 排除某个媒体类型，相当于“非”的意思，可以省略。
  - only: 指定某个特定的媒体类型，可以省略。
- 媒体特性：
  - width: 定义输出设备中页面可见区域的宽度
  - min-width: 定义输出设备中页面最小可见区域宽度
  - max-width: 定义输出设备中页面最大可见区域宽度

```css
/* 超小设备（手机） */
@media screen and (max-width: 768px) {
  选择器 {
    属性名: 值;
  }
}
/* 小型设备（平板电脑） */
@media screen and (min-width: 768px) {
  选择器 {
    属性名: 值;
  }
}
/* 中型设备（台式电脑） */
@media screen and (min-width: 992px) {
  选择器 {
    属性名: 值;
  }
}
/* 大型设备（大台式电脑） */
@media screen and (min-width: 1200px) {
  选择器 {
    属性名: 值;
  }
}
```

### 引入资源

::: tip 提示
媒体查询一般按照从小到大的顺序来写，根据样式的层叠性，这样代码更简洁
:::

新建 \css\desktop.css
新建 \css\mobile.css

```html
<link media="(min-width: 500px)" rel="stylesheet" href="./css/desktop.css" />
<link media="(max-width: 500px)" rel="stylesheet" href="./css/mobile.css" />
```

## 动态计算 rem

1. 针对不同的手机屏善，设置不同的 font-size 大小
2. 将所有需要适配的图片/元素/字体大小，统一使用 rem
3. 利用 px 转 rem
   Visual Studio Code 插件：`px to rem` ，热键：Alt + Z
4. 利用 postcss-pxtorem（最优方案）
5. 利用 less/sass/stylus 的计算能力
