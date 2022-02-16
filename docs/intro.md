---
sidebar_position: 1
---

# 指南

## 准备工作

需要一台安装了 `nodejs` 和 `go` 编译环境的开发机，本文档以 Mac OS X 为例，
其他操作系统需要做适当的调整。

## 启动项目

### 创建新仓库

打开 [ReactGo 模板仓库](https://github.com/lucky-byte/reactgo)，
在页面中找到 `Use this template` 绿色按钮，点击它（懒得找直接点
[这里](https://github.com/lucky-byte/reactgo/generate) 也行），
将开始创建一个新的仓库，按照页面的提示创建仓库，完成后 clone 到你的开发机。

### 启动前端

开一个终端窗口，进入仓库 `web` 目录，运行 `yarn` 安装 npm 模块，
然后运行 `yarn build` 构建，完了运行 `yarn start` 启动前端开发服务器，
会在浏览器打开登录页面。
一共要运行 3 个命令。

### 启动后端

另开一个终端窗口，进入仓库 `serve` 目录，创建一个 `.config` 目录用于存放开发配置文件
(.config 中的文件不会提交到仓库)，运行 `cp config.yaml .config/yaml` 复制一份配置文件。

运行 `make` ，完了运行 `./reactgo -adduser -config .config/config.yaml`，
按照提示添加一个后台用户（**注意会在终端打印一个随机密码**，登录需要）。

运行 `make dev` 启动后台服务，然后转到浏览器，使用刚刚创建的用户登录。

### 遇到问题

我们的目标是让系统即可能的简单，如果你按照上面的操作出现问题，说明系统还不够简单，请
[提交一个 issue](https://github.com/lucky-byte/reactgo/issues)。
如果是网络连接方面的问题，例如不能访问 npm 或 github 网站，那需要自行在网上找一些方法。

## 更多

启动 ReactGO 非常的容易，开发也是同样的简单，ReactGO 面向套路编程，在开发时只需要掌握好套路，
就能得心应手的进行开发，并得到不错的结果，你可以用 Lighthouse 评估一下网站得分，
或使用 WAVE 评估一下可访问性，或者使用你信赖的工具评估一下性能。

下一步将了解 ReactGO 的套路，掌握这些套路后，你就完全掌握了 ReactGO。
