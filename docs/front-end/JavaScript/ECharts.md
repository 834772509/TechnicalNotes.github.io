# ECharts

(Echarts Demo)[http://www.isqqw.com/]

## 认识 ECharts

- 什么是 ECharts 呢？官方的解释是：一个基于 JavaScript 的开源可视化图表库;

- ECharts 的历史：
  - ECharts 由百度团队开源;
  - 2018 年初，捐赠给 Apache 基金会，成为 ASF (Apache Software Foundation，简称为 ASF, Apache 软件基金会）孵化级项目;
  - 2021 年 1 月 26 日晚，Apache 基金会官方宣布 ECharts 项目正式毕业，成为 Apache 顶级项目;
  - 2021 年 1 月 28 日，ECharts 5 线上发布会举行;
- ECharts 的特点︰
  - 丰富的图表类型︰提供开箱即用的 20 多种图表和十几种组件，并且支持各种图表以及组件的任意组合;
  - 强劲的渲染引擎︰Canvas、SVG 双引擎一键切换，增量渲染、流加载等技术实现千万级数据的流畅交互;
  - 专业的数据分析︰通过数据集管理数据，支持数据过滤、聚类、回归，帮助实现同一份数据的多维度分析;
  - 优雅的可视化设计︰默认设计遵从可视化原则，支持响应式设计，并且提供了灵活的配置项方便开发者定制;
  - 健康的开源社区︰ 活跃的社区用户保证了项目的健康发展，也贡献了丰富的第三方插件满足不同场景的需求;
  - 友好的无障碍访问︰智能生成的图表描述和贴花图案，帮助视力障碍人士了解图表内容，读懂图表背后的故事;

## canvas vs svg 的选择

通常在渲染图表是我们会选择 SVG 或者 canvas 进行渲染︰

- 通常情况下，这两种渲染模式是比较相近的，并且是可以相互替换的;
  - 但是在一些场景中，它们的表现和能力有一定的差异;
  - 对于它们之间的取舍，一直是没有一个明确、标准的答案的，也是一个经常被拿到讨论的话题;
- ECharts 最初采用的是 canvas 绘制图表，从 ECharts4.x 开始，发布了 SVG 渲染器，提供了另外的一种选择。
- 那么它们之间到底如何选择呢?
  - 一般来说，Canvas 更适合绘制图形元素数量非常大（这一般是由数据量大导致）的图表（如热力图、地理坐标系或平行坐标系上的大规模线图或散点图等），也利于实现某些视觉特效﹔
  - 但是，在不少场景中，SVG 具有重要的优势︰它的内存占用更低（这对移动端尤具重要)、洹染性能略局、开且用户使用浏览器内置的缩放功能时不会模糊;

**那么到底选择哪一个渲染器呢?**

- 在软硬件环境较好，数据量不大的场景下（例如 PC 端做商务报表），两种渲染器都可以适用，并不需要太多纠结;
- 在环境较差，出现性能问题需要优化的场景下，可以通过试验来确定使用哪种渲染器;
  - 比如在须要创建很多 ECharts 实例且浏览器易崩溃的情况下（可能是因为 Canvas 数量多导致内存占用超出手机承受能力），可以使用 SVG 渲染器来进行改善;
  - 大略得说，如果图表运行在低端安卓机，或者我们在使用一些特定图表如水球图等，SVG 渲染器可能效果更好;
  - 数据量很大、较多交互时，可以选用 Canvas 渲染器﹔

## 使用 ECharts

### 下载 ECharts

- 从 [Apache ECharts 官网](https://echarts.apache.org/)下载界面获取 官方源码包后构建;
- 在 ECharts 的 [GitHub](https://github.com/apache/echarts) 获取;
- 通过 npm 获取 echarts: `npm install echarts`;
- 通过 [jsDelivr](https://www.jsdelivr.com/package/npm/echarts) 等 CDN 引入;

### 引入 ECharts

- 可以通过不同的方式引入

### 初始化并进行绘制

- 通过 `echarts.init(dom, theme, options)`初始化;
- 通过 `setOption` 方法设置绘制的数据;
