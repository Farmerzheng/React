# 第一个实例

```react
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8" />
<title>Hello React!</title>
<script src="https://cdn.bootcss.com/react/16.4.0/umd/react.development.js"></script>
<script src="https://cdn.bootcss.com/react-dom/16.4.0/umd/react-dom.development.js"></script>
<script src="https://cdn.bootcss.com/babel-standalone/6.26.0/babel.min.js"></script>
</head>
<body>
 
<div id="example"></div>
    
<!-- react 使用的是JSX语法，如果我们需要使用 JSX，
则script标签的 type 属性需要设置为 text/babel。 -->
    
<script type="text/babel">
    
    
   /* 将一个 h1 标题，插入 id="example" 节点中。*/ 
    
    ReactDOM.render(
        <h1>Hello, world!</h1>,
        document.getElementById('example')
    );
</script>
 
</body>
</html>
```

**实例解析：**

实例中我们引入了三个库： react.min.js 、react-dom.min.js 和 babel.min.js：

- **react.min.js** - React 的核心库
- **react-dom.min.js** - 提供与 DOM 相关的功能
- **babel.min.js** - Babel 可以将 ES6 代码转为 ES5 代码，这样我们就能在目前不支持 ES6 浏览器上执行 React 代码



# JSX 简介

JSX 用来声明 React 当中的元素，用 JSX 语法声明一个变量如下：

```reac
const element = <h1>Hello, world!</h1>;
```

这种语法既不是**字符串**也不是 **HTML**。它被称为 JSX， 一种 JavaScript 的语法扩展。

## 在 JSX 中使用 js 表达式

可以在 JSX 当中使用 [JavaScript 表达式](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions)，在 JSX 当中的javascript表达式要包含在大括号里。

例如 `2 + 2`， `user.firstName`， 以及 `formatName(user)` 都是可以使用的。

```react
function formatName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user = {
  firstName: 'Harper',
  lastName: 'Perez'
};

const element =<h1> Hello, {formatName(user)}! </h1>;

ReactDOM.render(
  element,
  document.getElementById('example')
);
```





