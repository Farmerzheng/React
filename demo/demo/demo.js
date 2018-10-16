// function AppHeader(props) {
//     return <h1>{props.name}</h1>;
// }

class AppHeader extends React.Component {
    constructor() {
        super();
        // state 为组件的状态属性，类似于vue中的data
        this.state = {
            avatar: "头部"
        };

        setTimeout(() => {
            //下面写法错误
            //this.this.state.avatar = '底部'

            //下面写法正确
            this.setState({
                avatar: "底部"
            });
        }, 2000);
    }

    render() {
        return <h1>{this.state.avatar}</h1>;
    }
}
const element = (
    <div>
        <AppHeader name="头部" />
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
