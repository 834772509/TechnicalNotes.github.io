# Express 框架

## 基本概念

Express 是一个路由和中间件的 Web 框架，它本身的功能非常少：Express 应用程序本质上是一系列中间件函数的调用；

### 中间件

- 中间件的本质是传递给 express 的一个回调函数；
- 这个回调函数接受三个参数：
  - 请求对象（request 对象）；
  - 响应对象（response 对象）；
  - next 函数（在 express 中定义的用于执行下一个中间件的函数）；

### 中间件中可以执行的任务

- 执行任何代码；
- 更改请求（request）和响应（response）对象；
- 结束请求-响应周期（返回数据）；
- 调用栈中的下一个中间件；
  如果当前中间件功能没有结束请求-响应周期，则必须调用 next()将控制权传递给下一个中间件功能，否则，请求
  将被挂起。

## 脚手架

### 安装

`npm install express-generator -g`

### 创建项目

`express 项目名`

### 安装依赖

`npm install`

### 启动项目

`npm run start` 或 `node bin/www`

## 中间件

::: tip 提示
当注册多个中间件时，默认使用第一个中间件，如需要使用多个中间件，需要调用`next();`函数。
:::

### 普通中间件

```JavaScript
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("注册了第1个普通的中间件");
  next();
});

app.use((req, res, next) => {
  console.log("注册了第2个普通的中间件");
    res.end();

});

app.listen(8000, () => {
  console.log("普通中间件服务器启动成功");
});
```

### 路径中间件

```JavaScript
const express = require("express");

const app = express();

app.use("/home", (req, res, next) => {
  console.log("注册路径中间件 01");
  next();
});

app.use("/home", (req, res, next) => {
  console.log("注册路径中间件 02");
  res.end();
});

app.listen(8000, () => {
  console.log("普通中间件服务器启动成功");
});
```

### 路径和方法中间件

```JavaScript
const express = require("express");

const app = express();

app.get("/home", (req, res) => {
  console.log("路径和方法匹配的中间件 01");
  res.end();
});

app.listen(8000, () => {
  console.log("路径和方法匹配的中间件服务器启动成功");
});
```

### 连续注册中间件

```JavaScript
const express = require("express");

const app = express();

app.get(
  "/home",
  (req, res, next) => {
    console.log("路径和方法中间件 01");
    next();
  },
  (req, res, next) => {
    console.log("路径和方法中间件 02");
    next();
  },
  (req, res, next) => {
    console.log("路径和方法中间件 03");
    next();
  },
  (req, res, next) => {
    console.log("路径和方法中间件 04");
    res.end();
  }
);

app.listen(8000, () => {
  console.log("路径和方法匹配的中间件服务器启动成功");
});
```

### 中间件应用

- 解析 JSON

  ```JavaScript
  app.use(express.json());
  app.use(express.urlencoded(({extended: true})));

  app.post("/URL", (req, res, next) => {
    console.log(req.body);
    res.end();
  });
  ```

- 解析 form-data

  安装 multer：`npm install multer`

  ```JavaScript
  const multer = require("multer");

  const upload = multer();

  app.post("/URL", upload.any(), (req, res) => {
    console.log(req.body);
    res.end("用户登录成功");
  });
  ```

- 上传文件

  ```JavaScript
  const path = require("path");
  const multer = require("multer");

  const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      callback(null, "./上传路径/");
    },
    filename: (req, file, callback) => {
      callback(null, Date.now() + path.extname(file.originalname));
    },
  });

  const upload = multer({
    storage,
  });

  app.post("/URL", upload.fields([{ name: "file", maxCount: 2 }]), (req, res, next) => {
    console.log(req.files);
    res.end("文件上传成功");
  });
  ```

- 保存日志信息

  安装 morgan：`npm install morgan`

  ```JavaScript
  const fs = require("fs");

  const express = require("express");
  const morgan = require("morgan");

  const app = express();

  const writeStream = fs.createWriteStream("./logs/access.log", {
    flags: "a+",
  });

  app.use(morgan("combined", { stream: writeStream }));

  app.get("/", (req, res, next) => {
    res.end("Hello World");
  });
  ```

### request 参数解析-params-query

```JavaScript
const express = require("express");
const app = express();

app.get("/url/:参数名/:参数名", (req, res, next) => {
  console.log(req.params);
  res.end();
});
```

### response 响应结果

```JavaScript
const express = require("express");
const app = express();

app.get("/login", (req, res, next) => {
  console.log(req.query);
  // 设响应码
  res.status(204);
  // 设置内容
  // res.json(["aaa", "bbb", "ccc"]);
  res.json({ name: "why", age: 18 });
});
```

## 路由

express.Router 用来创建一个路由处理程序：

- 一个 Router 实例拥有完整的中间件和路由系统；
- 因此，它也被称为 迷你应用程序（mini-app）；

- index.js

  ```JavaScript
  const express = require("express");

  const userRouter = require("./routers/users");

  const app = express();

  app.use("/users", userRouter);

  app.listen(8000, () => {
    console.log("路由服务器启动成功");
  });
  ```

- 路由名.js

  ```JavaScript
  const express = require("express");

  const router = express.Router();

  router.get("/", (req, res, next) => {
    res.json(["why", "kobe", "lilei"]);
  });

  router.get("/:id", (req, res, next) => {
    res.json(`${req.params.id}用户的信息`);
  });

  router.post("/", (req, res, next) => {
    res.json("创建用户成功");
  });

  module.exports = router;
  ```

## 错误处理

```JavaScript
const express = require("express");

const app = express();

const USERNAME_DOES_NOT_EXISTS = "USERNAME_DOES_NOT_EXISTS";
const USERNAME_ALREADY_EXISTS = "USERNAME_ALREADY_EXISTS";

app.post("/login", (req, res, next) => {
  const isLogin = true;
  if (isLogin) {
    res.json("用户登录成功");
  } else {
    next(new Error(USERNAME_DOES_NOT_EXISTS));
  }
});

app.post("/register", (req, res, next) => {
  const isExists = true;

  if (!isExists) {
    res.json("用户注册成功");
  } else {
    next(new Error(USERNAME_ALREADY_EXISTS));
  }
});

app.use((err, req, res, next) => {
  let status = 400;
  let message = "";

  switch (err.message) {
    case USERNAME_DOES_NOT_EXISTS:
      message = "用户名不存在";
      break;
    case USERNAME_ALREADY_EXISTS:
      message = "用户名已存在";
      break;
    default:
      message = "没有找到";
  }

  res.status(status);
  res.json({
    errCode: status,
    errMsg: message,
  });
});

app.listen(8000, () => {
  console.log("错误处理服务器启动成功");
});

```
