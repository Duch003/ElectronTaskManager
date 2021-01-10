import React from 'react';
import { Link, useParams } from 'react-router-dom';

const tableOfTasks: React.FC = () => {
	let { jiraId }: any = useParams();
	console.log(jiraId);
	return (
		<React.Fragment>
			<h1>Task Details {jiraId}</h1>
			<Link to="/">Back</Link>
		</React.Fragment>
	);
};

export default tableOfTasks;
