import React from 'react';
import './userdetails.styles.css';

const UserDetails = (props) => {
	const { city, street, suite, zipcode } = props.userDetails.address;
	const { lat, lng } = props.userDetails.address.geo;
	const { name, catchPhrase, bs } = props.userDetails.company;

	return (
		<div>
			<div className="user-details-container">
				<div className="address">
					<h4>Address</h4>
					<hr />
					<p>{`${suite}`}</p>
					<p>{`${street}`}</p>
					<p>{`${city}`}</p>
					<p>{`${zipcode}`}</p>
					<p>{`Latitude: ${lat}`}</p>
					<p>{`Longitude : ${lng}`}</p>
				</div>
				<div className="work">
					<h4>Company Details</h4>
					<hr />
					<p>{`${name}`}</p>
					<p>{`${catchPhrase}`}</p>
					<p>{`${bs}`}</p>
				</div>
			</div>
		</div>
	);
};

export default UserDetails;