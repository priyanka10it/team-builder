import React from 'react';

//Create card
const TeamCard = props => {

	return(

		<div>
			{props.teamMembers.map(data => (
				<div key={data.id}>
					<h1>{data.name}</h1>
					<h3>{data.email}</h3>
					<h4>{data.role}</h4>
				</div>
			))}
		</div>
	);
};

export default TeamCard;