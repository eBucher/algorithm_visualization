import React from 'react';
import 'components/headerBar/HeaderBar.css';
import {Dropdown, Menu} from "semantic-ui-react";
import {Link} from 'react-router-dom';

/** A header bar for the top of the page */
class HeaderBar extends React.Component {
	render(){
		return (
			<React.Fragment>
				<div className="headerMargin">
				</div>
				<div className="headerBar">
					<Link to="/">
						<p>
							<font className="orangeText">&#8226;</font>
							<font color="white">SeeTheSteps.com</font>
						</p>
					</Link>
					<Dropdown item text='Other Algorithms'>
				      <Dropdown.Menu direction="left">
					  <Dropdown.Header icon='search' content='Searching' />
				        <Dropdown.Item as={Link} to="/algorithms/binarySearch">Binary Search</Dropdown.Item>
						<Dropdown.Item as={Link} to="/algorithms/LinearSearch">Linear Search</Dropdown.Item>
						<Dropdown.Header icon='sort amount up' content='Sorting' />
						<Dropdown.Item as={Link} to="/algorithms/bubbleSort">Bubble Sort</Dropdown.Item>
						<Dropdown.Item as={Link} to="/algorithms/insertionSort">Insertion Sort</Dropdown.Item>
				      </Dropdown.Menu>
				    </Dropdown>
				</div>
				<div className="headerMargin">
				</div>
			</React.Fragment>
		)
	}
}

export default HeaderBar;
