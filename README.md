# ReactGO 文档

在线查看：https://reactgo.kross.work

使用 [Docusaurus 2](https://docusaurus.io/)。

### 安装

```
$ yarn
```

### 本地开发

```
$ yarn start
```

此命令启动本地开发服务器，自动打开浏览器窗口，自动刷新。

### 构建

```
$ yarn build
```

此命令生成静态内容到 `build` 目录，可以用在任何的 WEB 服务器。

### 部署

用 SSH:

```
$ USE_SSH=true yarn deploy
```

不用 SSH:

```
$ GIT_USER=<Your GitHub username> yarn deploy
```

如果你用 GitHub pages 作为主机，这个命令是一个方便的方法来构建内容，并发布到
`gh-pages` 分支。
