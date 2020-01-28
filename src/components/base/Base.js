import React from 'react';
import Server from './includeComponents/Server';
import {Context} from '../App';
import './Base.sass';

const Base = () => (
    <div className="Page">

        <div className='server-toolbar'>
            <Context.Consumer>
                {({openModalAddServer}) => (
                    <button className='button' onClick={openModalAddServer}>
                        <i className="fas fa-plus"></i>&nbsp;
                        Добавить сервер
                    </button>
                )}
            </Context.Consumer>
        </div>

        <h3>Список серверов</h3>
        <table className='table table-servers'>
            <thead>
            <tr>
                <th>ID</th>
                <th>IP</th>
                <th>Объем</th>
                <th>Доступный объем</th>
                <th>Изменить</th>
            </tr>
            </thead>
            <tbody>
            <Context.Consumer>
                {({serverList}) => serverList.map((server) => (
                    <Server key={server.id} server={server}/>
                ))}
            </Context.Consumer>
            </tbody>
        </table>

    </div>
);

export default Base