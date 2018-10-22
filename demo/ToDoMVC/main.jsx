//main.js 一般用来渲染根组件

// Vue 对比
// new Vue({
//     el:'#app',
//     template:'<App/>'，
//     components:{
//        App
//     }
// })
(function(ReactDOM) {
    ReactDOM.render(<App />, document.getElementById("app"));
})(ReactDOM);
