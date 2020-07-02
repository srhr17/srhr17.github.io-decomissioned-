import React, { Component } from 'react';
import aloha from './scriptina.regular.png';
import ReactTypingEffect from 'react-typing-effect';
import sri from './sri.jpg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import acheiv1 from './achiev1.png';
import acheiv2 from './achiev2.pdf';

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {};
	}

	// typeWriter = () => {
	// 	var i = 0;
	// 	var txt = 'Lorem ipsum typing effect!'; /* The text */
	// 	var speed = 50; /* The speed/duration of the effect in milliseconds */
	// 	if (i < txt.length) {
	// 		document.getElementById('demo').innerHTML += txt.charAt(i);
	// 		i++;
	// 		setTimeout(typeWriter, speed);
	// 	}
	// };

	render() {
		return (
			<body
				style={{
					backgroundColor: '#1B1B1B',
					width: '1350px'
				}}
			>
				<div>
					<br />
					<br />
					<blockquote id="demo" class="blockquote text-center">
						<p class="mb-0 ">
							<pre class="text-white">
								{' '}
								<ReactTypingEffect
									typingDelay="1000ms"
									eraseDelay="1000ms"
									text={[
										'If You Are Working On Something That You Really Care About, You Don’t Have To Be Pushed.The Vision Pulls You.',
										'Life is what happens when you’re busy making other plans.',
										'The first step toward success is taken when you refuse to be a captive of the environment in which you first find yourself.',
										'Great minds discuss ideas; average minds discuss events; small minds discuss people.',
										'Those who dare to fail miserably can achieve greatly.',
										'Everything happens for a reason.'
									]}
								/>
							</pre>
						</p>
						<footer class="blockquote-footer">
							Many Wise <cite title="https://en.wikipedia.org/wiki/Sailor">Sailors</cite>
						</footer>
					</blockquote>
					<br />

					<img class="rounded mx-auto d-block img-fluid" src={aloha} />

					<div class="row m-5 ">
						<div class="col-*-* ">
							<pre>
								<h1 class="text-right text-info">
									I was named{' '}
									<kbd>
										<ReactTypingEffect typingDelay="500ms" text="Sri Hari" />
									</kbd>
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
									An enthusiastic{' '}
									<kbd>
										<ReactTypingEffect
											typingDelay="200ms"
											text={[ 'Data Science', 'Deep Learning', 'A.I.' ]}
										/>
									</kbd>{' '}
									aspirant,
								</h1>
								<h1 class="text-center text-warning ">who intends to do research in the field of</h1>
								<h1 class="text-center text-warning">
									{' '}
									<kbd>
										<ReactTypingEffect typingDelay="400ms" text="Quantum Machine Learning" />
									</kbd>.
								</h1>
							</pre>
						</div>
					</div>
					{/* hello */}

					<div class="row">
						<VerticalTimeline>
							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								contentStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
								date="2017 - present"
								iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								// icon={<WorkIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									{' '}
									<kbd>Bachelor of Technology, Computer Science and Engineering</kbd>
								</h3>
								<h4 className="vertical-timeline-element-subtitle">
									Amrita Vishwa Vidhyapeetham , Coimbatore
								</h4>
								<p>Computer Science Undergrad with a CGPA of 8.82/10 (as on 5th semester)</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								// icon={<WorkIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									<a href="http://sersc.org/journals/index.php/IJAST/article/view/11924">
										Integrity Preserved Multifactor Authentication Based Automated Ticketing System
									</a>
								</h3>
								<h4 className="vertical-timeline-element-subtitle">Apr 13, 2020</h4>
								<p> International Journal of Advanced Science and Technology</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								// icon={<WorkIcon />}
							>
								<h3 className="vertical-timeline-element-title">Event Manager</h3>
								<h4 className="vertical-timeline-element-subtitle">Anokha Techfest 2020</h4>
								<p />
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								// icon={<WorkIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Android Application Development Intern
								</h3>
								<h4 className="vertical-timeline-element-subtitle">Muscat , Oman</h4>
								<p>User Experience, Visual Design</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--work"
								iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
								// icon={<WorkIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									<a href="https://www.ijrte.org/wp-content/uploads/papers/v7i5s3/E11590275S19.pdf">
										Enhancing Security of One Time Passwords in Online Banking Systems
									</a>
								</h3>
								<h4 className="vertical-timeline-element-subtitle">Feb 2019</h4>
								<p>publication descriptionInternational Journal of Recent Technology and Engineering</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
								// icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									Community Volunteer - Robinhood Army
								</h3>
								<h4 className="vertical-timeline-element-subtitle">Jan 2019 – Present</h4>
								<p>Collecting and distributing food for those in need.</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
								// icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">VelocIITy Junior College</h3>
								<h4 className="vertical-timeline-element-subtitle">Class XII - 2017</h4>
								<p>89.5%</p>
							</VerticalTimelineElement>

							<VerticalTimelineElement
								className="vertical-timeline-element--education"
								iconStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
								// icon={<SchoolIcon />}
							>
								<h3 className="vertical-timeline-element-title">
									St.Judes Public School and Junior College
								</h3>
								<h4 className="vertical-timeline-element-subtitle">Class X - 2015</h4>
								<p>87.2%</p>
							</VerticalTimelineElement>
							<VerticalTimelineElement
								iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}
								date="17 November , 1999"
								// icon={<StarIcon />}
							/>
						</VerticalTimeline>
					</div>
					{/* hello */}
					<img class="rounded mx-auto d-block img-fluid" src={acheiv1} />
					<br />
					<Carousel>
						<div>
							<img src={acheiv2} />
							<p className="legend">Legend 1</p>
						</div>
						<div>
							<img src="./back.jpg" />
							<p className="legend">Legend 2</p>
						</div>
						<div>
							<img src={sri} />
							<p className="legend">Legend 3</p>
						</div>
					</Carousel>
					{/* hello */}

					{/* hello */}
				</div>
			</body>
		);
	}
}

export default App;
