import React from "react";
import Card from './Card';
import {Container,Col,Row} from 'react-bootstrap';
import AssignmentTurnedInIcon from '@material-ui/icons/AssignmentTurnedIn';
import CakeIcon from '@material-ui/icons/Cake';
import MouseIcon  from '@material-ui/icons/Mouse';
import '../styles/Home.css'

const Home = () =>{

	return (
		<>
			<span className="heading">
				<p>BirthDay Wishes</p>
			</span>
			<Container style={{height:"80vh"}}>
			<Row className="align-items-center" style={{height:"100%"}} >
				<Col md>
					<Card  num="1" next="" heading="1. Click on Create" text="To get started click on the start button and fill out the info">
						<MouseIcon style={{ fontSize: 35 }}/>
					</Card>
				</Col>
				<Col md>
					<Card  num="2" next="second__card" heading="2. Customize" text="Select the design, date of birth of the receiver, pics and music">
					<AssignmentTurnedInIcon style={{ fontSize: 35 }}/>
					</Card>
				</Col>
				<Col md>
					<Card  num="3" next="third__card" heading="3. Finalize" text="A unique link will be created that you can share">
					<CakeIcon style={{ fontSize: 35 }}/>
					</Card>
				</Col>
			</Row>
			</Container>
		</>
	)
}

export default Home;