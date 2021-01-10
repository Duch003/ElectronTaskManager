import React from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import TaskDetails from './components/TaskDetails';
import { TableOfTasks } from './containers/TableOfTasks';

const App = () => {
	return (
			<Router>
				<Switch>
          <Route path="/details/:jiraId" component={TaskDetails} />
          <Route path="/" exact={true} component={TableOfTasks} />
          <Redirect to='/'/>
				</Switch>
			</Router>
	);
};
export default App;
