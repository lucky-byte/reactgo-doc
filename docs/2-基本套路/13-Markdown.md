# Markdown

有时候需要显示一大片的文字，例如一个说明文档，虽然用普通的组件排版没有问题，但是有点啰嗦，
用 Markdown 来写更加舒适一点，为此，ReactGO 基于 `markdown-to-jsx` 封装了一个
`Markdown` 组件。

当前 Markdown 处于完善状态，因为我们只用到了 Markdown 的一部分语法，
我们总是在需要的时候进行完善。

## 用法

```jsx
import Markdown from '~/comp/markdown';

function X() {
  return (
    <Markdown>
      {`
# 欢迎...

欢迎使用 ReactGo，前后端分离的基础开发平台，ReactGo 前端采用 React 技术开发，
后端采用 Go 语言开发。

ReactGo 提供许多开箱即用的基础功能，用于快速交付业务系统，这也是 ReactGo 的主要目标。

---

想了解更多？请在 [这里](https://reactgo.kross.work) 查看开发文档。
`}
    </Markdown>
  )
}
```

### URL 属性

如果是直接在 Markdown 组件中写多行的文字，需要用 `{``}` 包裹起来，就像上面那样，
除此之外，也可以将文字放到单独的 `md` 文件中，然后通过 `url` 属性引用，像下面这样：

```jsx
import Markdown from '~/comp/markdown';
import md from './index.md';

function X() {
  return (
    <Markdown url={md} />
  )
}
```

`index.md` 只包含 Markdown 文本，像下面这样：

```markdown
# 欢迎...

欢迎使用 ReactGo，前后端分离的基础开发平台，ReactGo 前端采用 React 技术开发，
后端采用 Go 语言开发。

ReactGo 提供许多开箱即用的基础功能，用于快速交付业务系统，这也是 ReactGo 的主要目标。

---

想了解更多？请在 [这里](https://reactgo.kross.work) 查看开发文档。
```

通过 `url` 只能引用 `import` 的静态文件，如果内容来自于网络响应数据，
那不能使用 `url`。

:::tip import markdown
前面 `import md from './index.md';` 语句，实际上只是得到了一个指向 `index.md`
的 url，而不是实际的字符串，你可以打印 `md` 的值出来看看。

得到 url 之后，需要再发送一个 HTTP 请求才能获取真正的内容，所以背后执行了类似下面的语句：

```jsx
fetch(md)
```

因此，用 url 不仅仅可以指定 `import` 的 url，也可以指定所有可以公开访问的 url。
:::
