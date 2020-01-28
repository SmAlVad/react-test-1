import React, {Component} from 'react';
import Header from './header/Header';
import SideBar from './sideBar/SideBar';
import AddServer from './modal/AddServer';
import './App.sass';

export const Context = React.createContext();

class App extends Component {
    state = {
        serverList: [],
        modalAddServerIsOpen: false
    };

    componentDidMount() {
        this.setState({
            serverList: this.getStorageServerList()
        })
    }

    getStorageServerList() {
        // TODO: use api
        return [
            {"id": "1", "ip": "192.168.1.1", "space": "2000", "spaceFree": "100"},
            {"id": "2", "ip": "192.168.1.2", "space": "1000", "spaceFree": "10"},
            {"id": "3", "ip": "192.168.1.3", "space": "2000", "spaceFree": "1000"},
            {"id": "4", "ip": "192.168.1.4", "space": "1000", "spaceFree": "300"},
        ];
    }

    handleAddServer = (data) => {
        // TODO: use api
        const list = [...this.state.serverList, data];
        this.setState({
            serverList: list,
            modalAddServerIsOpen: false
        });
    };

    toggleModalAddServer = () => {
        this.setState({
            modalAddServerIsOpen: !this.state.modalAddServerIsOpen
        })
    };

    render() {
        const {children} = this.props;
        const context = {
            serverList: this.state.serverList,
            openModalAddServer: this.toggleModalAddServer
        };
        return (
            <Context.Provider value={context}>
                <div className="App">
                    <Header/>
                    <SideBar/>
                    {children}
                    {this.state.modalAddServerIsOpen &&
                    <AddServer
                        addServer={this.handleAddServer}
                        onClose={this.toggleModalAddServer}/>
                    }
                </div>

            </Context.Provider>
        )
    }

}

export default App;
