// function AppHeader(props) {
//     return <h1>{props.name}</h1>;
// }

class AppHeader extends React.Component {
    constructor() {
        super();
        // state 为组件的状态属性，类似于vue中的data
        // console.log(this);
        this.state = {
            avatar: "头部"
        };
    }

    render() {
        return (
            <h1 onClick={this.handleClick.bind(this)}>{this.state.avatar}</h1>
        );
    }
    handleClick() {
        console.log(this); //AppHeader
        this.setState({
            avatar: "底部"
        });
    }
}
const element = (
    <div>
        <AppHeader />
    </div>
);

ReactDOM.render(element, document.getElementById("root"));
