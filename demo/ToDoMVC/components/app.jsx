(function(React) {
    const todoArr = [
        { id: 1, title: "写代码", completed: true },
        { id: 2, title: "打王者", completed: true },
        { id: 3, title: "吃鸡", completed: true }
    ];

    class App extends React.Component {
        constructor() {
            super();
            this.state = {
                todoArr: todoArr
            };
        }
        render() {
            return (
                <div>
                    <section className="todoapp">
                        <header className="header">
                            <h1>todos</h1>
                            <input
                                className="new-todo"
                                placeholder="What needs to be done?"
                                autoFocus
                            />
                        </header>
                        <div>
                            <section className="main">
                                <input
                                    type="checkbox"
                                    id="toggle-all"
                                    className="toggle-all"
                                    defaultValue="on"
                                />
                                <label htmlFor="toggle-all">
                                    Mark all as complete
                                </label>
                                {/* 列表项 */}
                                <ul className="todo-list">
                                    {this.getToDoList()}
                                </ul>
                            </section>
                            <footer className="footer">
                                <span className="todo-count">
                                    <strong>0</strong>
                                    item left
                                </span>
                                <ul className="filters">
                                    <li>
                                        <a className="selected" href="#/">
                                            All
                                        </a>
                                    </li>
                                    <li>
                                        <a href="#/active">Active</a>
                                    </li>
                                    <li>
                                        <a href="#/completed">Completed</a>
                                    </li>
                                </ul>
                                <button className="clear-completed">
                                    Clear completed
                                </button>
                            </footer>
                        </div>
                    </section>
                </div>
            );
        }
        getToDoList() {
            return this.state.todoArr.map(todo => {
                return (
                    <li key={todo.id} className="completed">
                        <div className="view">
                            <input
                                type="checkbox"
                                className="toggle"
                                defaultValue="on"
                            />
                            <label>{todo.title}</label>
                            <button className="destroy" />
                        </div>
                        <input
                            className="edit"
                            defaultValue="Create a TodoMVC template"
                        />
                    </li>
                );
            });
        }
    }
    window.App = App;
})(React);
