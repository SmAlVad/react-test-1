import React from 'react';
import './Server.sass';
import PropTypes from 'prop-types';

const Server = ({server}) => (
    <tr>
        <td>{server.id}</td>
        <td>{server.ip}</td>
        <td>{server.space}</td>
        <td>
            <div className='free-space'>
                {server.spaceFree}
            </div>
            <progress className='progress-free-space' value={server.space - server.spaceFree} max={server.space}></progress>
        </td>
        <td>
            <button className='button'>
                <i className="fas fa-edit"></i>
            </button>
        </td>
    </tr>
);

Server.propTypes = {
  server: PropTypes.object
};

Server.defaultProps = {
    server: {}
};

export default Server
