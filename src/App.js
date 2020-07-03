import React, { Component } from 'react';
import aloha from './scriptina.regular.png';
import ReactTypingEffect from 'react-typing-effect';
import sri from './sri.jpg';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import uc from './uc.jpg';
import acheiv1 from './achiev1.png';
import acheiv2 from './achiev2.JPG';
import acheiv3 from './achiev3.JPG';
import acheiv4 from './achiev4.JPG';
import acheiv5 from './achiev5.JPG';
import acheiv6 from './achiev6.JPG';
import acheiv7 from './achiev7.JPG';
import acheiv8 from './achiev8.JPG';
import acheiv9 from './achiev9.JPG';
import acheiv10 from './achiev10.JPG';
import acheiv11 from './achiev11.JPG';
import skills from './skills.png';
import chrome from './chrome.png';
import dbms from './dbms.png';
import ml from './ml.svg';
import prog from './prog.svg';
import Resume from './resume.js';
import contact from './contact.png';
import git from './git.png';
import phone from './phone.png';
import mail from './mail.png';
import link from './link.png';
import { bounce } from 'react-animations';
import Radium, { StyleRoot } from 'radium';

const styles = {
	bounce1: {
		animation: 'x 1s',
		height: '70px',
		animationName: Radium.keyframes(bounce, 'bounce')
	},
	bounce2: {
		animation: 'x 2s',
		height: '70px',
		animationName: Radium.keyframes(bounce, 'bounce')
	},
	bounce3: {
		animation: 'x 3s',
		height: '70px',
		animationName: Radium.keyframes(bounce, 'bounce')
	},
	bounce4: {
		animation: 'x 4s',
		height: '70px',
		animationName: Radium.keyframes(bounce, 'bounce')
	}
};

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
					<br />
					<Resume />

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
					<div class="m-5">
						<Carousel>
							<div>
								<img src={acheiv2} />
							</div>
							<div>
								<img src={acheiv3} />
							</div>
							<div>
								<img src={acheiv4} />
							</div>
							<div>
								<img src={acheiv5} />
							</div>
							<div>
								<img src={acheiv6} />
							</div>
							<div>
								<img src={acheiv7} />
							</div>
							<div>
								<img src={acheiv8} />
							</div>
							<div>
								<img src={acheiv9} />
							</div>
							<div>
								<img src={acheiv10} />
							</div>
							<div>
								<img src={acheiv11} />
							</div>
						</Carousel>
					</div>
					<br />
					<br />
					<img class="rounded mx-auto d-block img-fluid" src={skills} />
					<br />
					<br />
					<div class="row m-5 ">
						<div class="row m-5">
							<img class="rounded mx-auto d-block img-fluid" style={{ height: '70px' }} src={chrome} />
							<br />
							<pre>
								<h1 class="text-right text-info">
									<kbd>
										<ReactTypingEffect typingDelay="500ms" text="Web Development" />
									</kbd>
								</h1>
							</pre>
						</div>
						<div class="row m-5">
							<img class="rounded mx-auto d-block img-fluid" style={{ height: '70px' }} src={dbms} />
							<br />
							<pre>
								<h1 class="text-right text-info">
									<kbd>
										<ReactTypingEffect typingDelay="500ms" text="Database Management" />
									</kbd>
								</h1>
							</pre>
						</div>

						<div class="row m-5">
							<img class="rounded mx-auto d-block img-fluid" style={{ height: '70px' }} src={ml} />
							<br />
							<pre>
								<h1 class="text-right text-info">
									<kbd>
										<ReactTypingEffect
											typingDelay="500ms"
											text={[ 'Machine Learning', 'Neural Network', 'Deep Learning' ]}
										/>
									</kbd>
								</h1>
							</pre>
						</div>

						<div class="row m-5">
							<img class="rounded mx-auto d-block img-fluid" style={{ height: '70px' }} src={prog} />
							<br />
							<pre>
								<h1 class="text-right text-info">
									<kbd>
										<ReactTypingEffect
											typingDelay="500ms"
											text={[
												'Python',
												'Keras',
												'JAVA',
												'React JS',
												'Node JS',
												'REST API',
												'AWS'
											]}
										/>
									</kbd>
								</h1>
							</pre>
						</div>
					</div>
					<br />
					<br />
					<img class="rounded mx-auto d-block img-fluid" src={contact} />
					<br />
					<br />
					<br />
					<br />
					<div class="row  " style={{ marginLeft: '25%' }}>
						<div class="col-2">
							<a href="https://www.linkedin.com/in/sri-hari-s-33107446/">
								<img class="rounded mx-auto d-block img-fluid" style={styles.bounce1} src={link} />
							</a>
						</div>
						<div class="col-2">
							<a href="https://github.com/srhr17">
								<img class="rounded mx-auto d-block img-fluid" style={styles.bounce2} src={git} />
							</a>
						</div>

						<div class="col-2">
							<a href="mailto:srhr1999@gmail.com">
								<img class="rounded mx-auto d-block img-fluid" style={styles.bounce3} src={mail} />
							</a>
						</div>

						<div class="col-2">
							<a href="tel:+919443305978">
								<img class="rounded mx-auto d-block img-fluid" style={styles.bounce4} src={phone} />
							</a>
						</div>
					</div>
					<br />
					<br />
					<br />
					<br />
					<Resume />
					{/* hello */}
					{/* <img style={{ marginLeft: '30%' }} src={uc} /> */}
					{/* hello */}
					<br />
					<br />
					<br />
					<br />
					<p class="m-3">
						<kbd>Copyright © Sri Hari 2020</kbd>
					</p>
					<br />
					<br />
					<br />
					<br />
				</div>
			</body>
		);
	}
}

export default App;
