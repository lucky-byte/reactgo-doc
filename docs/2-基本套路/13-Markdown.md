# Markdown

有时候需要显示一大片的文字，例如一个说明文档，虽然用普通的组件排版没有问题，但是有点啰嗦，
用 Markdown 来写更加舒适一点，为此，ReactGO 基于 `markdown-to-jsx` 封装了一个
`Markdown` 组件。

当前 Markdown 处于完善状态，因为我们只用到了 Markdown 的一部分语法，
我们总是在需要的时候进行完善。

## 用法

```jsx
import Markdown from '~/comp/markdown';

<Markdown>
{`
# 欢迎...

欢迎使用 ReactGo，前后端分离的基础开发平台，ReactGo 前端采用 React 技术开发，
后端采用 Go 语言开发。

ReactGo 提供许多开箱即用的基础功能，用于快速交付业务系统，
这也是 ReactGo 的主要目标。

---

想了解更多？请在 [这里](https://reactgo.kross.work) 查看开发文档。
`}
</Markdown>
```

在 Markdown 组件中的内容需要用 `{``}` 包裹起来，这很不好，如果内容来自于外部，
比如网络响应的数据，那没有问题，如果自己写固定的内容，用这种包裹就很烦了。
尤其是需要写 \`\`\` 代码块，因为这个 \` 符号有冲突，需要写成 \\\`\\\`\\\` 这样，
很难接受，幸好现在用的场合少。这个问题暂时还没找到妥善的解决办法。
