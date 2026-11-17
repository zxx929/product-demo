# ChatFlow ChatGPT 产品页 Demo

这是一个不依赖构建工具的静态宣传页，视觉方向参考现代 AI 商城常见的浅色卡片、绿色渐变和清晰产品网格，但未复制参考站的代码、文案或素材。

## 本地预览

```sh
cd /Users/a11/product-demo
python3 -m http.server 8000
```

打开 `http://localhost:8000/`。当前页面只提供本地展示和咨询交互，不包含真实支付、登录、后端或官方授权声明。

## 替换正式信息

- 四个 ChatGPT 产品、价格、周期和卖点在 `app.js` 顶部的 `products` 数组。
- 邮箱、微信号和二维码占位内容在 `index.html` 联系区域。
- `styles.css` 中的 `.product-art` 是本地 CSS 视觉占位，可替换为已获授权的图片。

正式发布前，请确认产品名称、服务规则、价格、联系方式、隐私政策和相关平台合规要求。
