import React, { Component } from 'react';
import ReactTypingEffect from 'react-typing-effect';
class resume extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<button type="button" class="btn btn-danger mx-lg-auto d-block " style={{ marginLeft: '38%' }}>
				<a
					class="btn btn-warning mx-lg-auto d-block btn-lg"
					href="https://docs.google.com/document/d/1ryCufy909vksjM9Qb8lyydRfLwYrasX4GrLTvpXN340/edit?usp=sharing"
				>
					Click here to view{' '}
					<kbd>
						<ReactTypingEffect typingDelay="300ms" text="Sri Hari's" />
					</kbd>{' '}
					Resume
				</a>
			</button>
		);
	}
}

export default resume;
