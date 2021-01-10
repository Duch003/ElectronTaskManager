import React from 'react';
import { Link } from 'react-router-dom';
import Task from '../components/Task';

type State = {};

type Props = {};

export class TableOfTasks extends React.Component<Props, State> {

    clickedHandler = (jiraId: string) => {

    }

	render() {
		return (
			<div className="container">
                <Link to={'/details/' + 'ABCD-1'}>
                    <Task
                        title="Test title 1"
                        company="Edrington"
                        jiraId="ABCD-1"
                        internalId="INT1"
                        isActive={false}
                        color="green"
                    />
                </Link>
				
				<Task
					title="Test title 2"
					company="PwC"
					jiraId="ABCD-2"
					internalId="INT1"
					isActive={false}
					color="red"
				/>
				<Task
					title="Test title 3"
					company="Internal"
					jiraId="ABCD-3"
					internalId="INT1"
					isActive={false}
					color="orange"
				/>
				<Task
					title="Test title 4"
					company="BLME"
					jiraId="ABCD-4"
					internalId="INT1"
					isActive={false}
					color="purple"
				/>
				<Task
					title="Test title 5"
					company="Baxter"
					jiraId="ABCD-5"
					internalId="INT1"
					isActive={false}
					color="blue"
				/>
			</div>
		);
	}
}
