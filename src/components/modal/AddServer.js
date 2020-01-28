import React, {Component} from 'react';
import PropTypes from 'prop-types';
import './AddServer.sass';

class AddServer extends Component {
    // TODO: hardcode
    state = {
        id: 123,
        ip: '',
        space: '',
        spaceFree: ''
    };

    handleSubmit = (event) => {
        // TODO: !
        event.preventDefault();
        const {addServer} = this.props;
        addServer(this.state);
    };

    // TODO: Validation!
    handleIpChange = ({target: {value}}) => {
        this.setState({
            ip: value
        })
    };

    // TODO: Validation!
    handleSpaceChange = ({target: {value}}) => {
        this.setState({
            space: value
        })
    };

    // TODO: Validation!
    handleFreeSpaceChange = ({target: {value}}) => {
        this.setState({
            spaceFree: value
        })
    };

    render() {
        let {onClose} = this.props;
        return (
            <div className='modal-addServer'>
                <h2 className='text-center'>Добавить сервер</h2>
                <div className="form-wrapper">
                    <form onSubmit={this.handleSubmit} className='form form-add-server'>
                        <div className="form-group">
                            <label htmlFor="form-add-server__ip">IP :</label>
                            <input type="text"
                                   id='form-add-server__ip'
                                   name='IP'
                                   value={this.state.ip}
                                   onChange={this.handleIpChange}
                                   required={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-add-server__space">Объем :</label>
                            <input type="text"
                                   id='form-add-server__space'
                                   name='SPACE'
                                   value={this.state.space}
                                   onChange={this.handleSpaceChange}
                                   required={true}
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="form-add-server__freeSpase">Доступный объем :</label>
                            <input type="text"
                                   id='form-add-server__freeSpace'
                                   value={this.state.freeSpace}
                                   onChange={this.handleFreeSpaceChange}
                                   name='FREE_SPACE'
                                   required={true}
                            />
                        </div>
                        <input type="submit" className='button' value='Добавить'/>
                    </form>

                    <button onClick={onClose} className='modal-addServer-close-btn'>
                        <i className="far fa-times-circle"></i>
                    </button>
                </div>
            </div>
        );
    }
}


AddServer.propTypes = {
    addServer: PropTypes.func.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default AddServer
