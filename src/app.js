import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route}from 'react-router-dom';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const ExpenseDashboardPage = () => (
    <div>
        This is my dashboard component
    </div>
);
const CreatePage = () => (
    <div>
        This is my create page
    </div>
);
const EditPage = () => (
    <div>
        This is my edit page
    </div>
);
const HelpPage = () => (
    <div>
        This is my help page
    </div>
);

const routes = (
  <BrowserRouter>
      <div>
          <Route path="/" component={ExpenseDashboardPage} exact={true}/>
          <Route path="/create" component={CreatePage}/>
          <Route path="/edit" component={EditPage}/>
          <Route path="/help" component={HelpPage}/>
      </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
