import React from 'react';

type Props = {
	title: string;
	company: string;
	jiraId: string;
	internalId: string;
	isActive: boolean;
	color: string;
};

type State = {
	isHovered: boolean;
};

export default class Task extends React.Component<Props, State> {
	state = {
		isHovered: false
	};

	mouseInHandler = () => {
		this.setState({ isHovered: true });
	};

	mouseOutHandler = () => {
		this.setState({ isHovered: false });
	};

	render() {
		const badgeClasses = `badge bg-${this.props.color} rounded-pill`;
		const selectedClasses = this.state.isHovered ? `row task-hovered my-2` : `row task my-2`;

		return (
			<div className={selectedClasses}
                onMouseEnter={this.mouseInHandler}
                onMouseLeave={this.mouseOutHandler}>
				<div className="col-8">
					<div className="d-flex">
						<div className="mx-1 py-2 bd-highlight">
							<span className={badgeClasses}>{this.props.company}</span>
						</div>
						<div className="mx-1 py-2 bd-highlight">
							<span className={badgeClasses}>{this.props.internalId}</span>
						</div>
						<div className="mx-1 py-2 bd-highlight">
							<span className="badge bg-secondary rounded-pill">{this.props.jiraId}</span>
						</div>
					</div>
                    <div className="mb-3">
                        <h5>{this.props.title}</h5>
                    </div>
					
				</div>
				<div className="col-4" />
			</div>
		);
	}
}
