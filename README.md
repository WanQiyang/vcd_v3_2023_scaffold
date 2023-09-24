# Getting Started with vcd_v3_2023_scaffold

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

本项目采用pnpm进行包管理。In the project directory, you can run:

### `pnpm install`

确保本机已经安装node.js（参考版本：v16.16.0）、npm（参考版本：9.8.0），使用`npm install -g pnpm`在全局环境中安装pnpm（参考版本：8.6.11、8.7.5），使用`npm install -g typescript`在全局环境中安装tsc（参考版本：5.1.6）。

在项目目录中，使用`pnpm install`下载依赖，初始化开发环境。

\>=3.2.13版本用`pnpm patch`对部分依赖库做了修改，但Windows下@interacta/css-labels的patch操作有可能不成功（或许是pnpm的bug），否则知识图选中结点时边上的label会失去斜体并且无法调整字号，因此需要额外用git手动patch：

`git apply .\patches\@interacta__css-labels@0.0.4.patch --directory node_modules\@interacta\css-labels`

您的代码可以在 `src/pages/VSA.js` 的 `/* TODO: begin here */` 处开始。

### `pnpm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `pnpm build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `pnpm install ${package_name} --save`

安装指定包。其他pnpm指令参见`pnpm help`。
