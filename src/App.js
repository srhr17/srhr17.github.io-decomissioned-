import React, { Component } from 'react';
import aloha from './scriptina.regular.png';
import sri from './sri.jpg';
class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}
	render() {
		return (
			<body
				style={{
					backgroundColor: '#1B1B1B'
				}}
			>
				<div>
					<br />
					<br />
					<blockquote class="blockquote text-center">
						<p class="mb-0 ">
							<pre class="text-white">
								{' '}
								If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed.
								The Vision Pulls You.
							</pre>
						</p>
						<footer class="blockquote-footer">
							Steve <cite title="https://en.wikipedia.org/wiki/Steve_Jobs">Jobs</cite>
						</footer>
					</blockquote>
					<br />

					<img class="rounded mx-auto d-block img-fluid" src={aloha} />

					<div class="row m-5 ">
						<div class="col-*-* ">
							<pre>
								<h1 class="text-right text-info">
									I was named <kbd>Sri Hari</kbd>
								</h1>
							</pre>
						</div>

						<div class="col-*-* ">
							<br />
							<br />
							<br />
							<img class="img-rounded mx-auto d-block img-fluid" style={{ width: '70%' }} src={sri} />
						</div>
					</div>
					<br />
					<br />

					<div class="row m-4 ">
						<div class="col-*-* ">
							<pre>
								<h1 class="text-center text-warning">
									An enthusiastic <kbd>Data Science</kbd> aspirant,
								</h1>
								<h1 class="text-center text-warning ">who intends to do research in the field of</h1>
								<h1 class="text-center text-warning">
									{' '}
									<kbd>Quantum Machine Learning</kbd>.
								</h1>
							</pre>
						</div>
					</div>

					{/* hello */}
				</div>
			</body>
		);
	}
}

export default App;
