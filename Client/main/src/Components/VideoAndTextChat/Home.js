import React from 'react';
import { Button } from '@material-ui/core';

const Home = () => {
	const url = "sessionWithCareerExpert";
	const join = () => {
			window.location.href = `/${url}`
		}
	
	const connectToChat = () => {
		window.location.href = '/chat?name=user&room=Expert_Interaction'
	}

		return (
			<div className="container2">
				<div>

				</div>

				<div style={{
					background: "white", width: "30%", height: "auto", padding: "20px", minWidth: "400px",
					textAlign: "center", margin: "auto", marginTop: "100px"
				}}>
					<Button variant="contained" color="primary" onClick={join} style={{ margin: "20px" }}>Video Call with Expert</Button>
					<Button variant="contained" color="primary" onClick={connectToChat} style={{ margin: "20px" }}>Chat with Expert</Button>
				</div>
			</div>
		)
}

export default Home;