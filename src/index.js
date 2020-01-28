import React from 'react';
import ReactDOM from 'react-dom';
import Routes from "./Routes";
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';

// FontAwesome
import '@fortawesome/fontawesome-free/js/all'
// Корневой компонент
import App from './components/App';

// Глобальные стили
import './index.sass';

ReactDOM.render((
    <Router>
        <App>
            <Switch>
                {Routes.map(({path, exact, component}, index) => (
                    <Route key={index} exact={exact} path={path} component={component}/>
                ))}
            </Switch>
        </App>
    </Router>
), document.getElementById('root'));
