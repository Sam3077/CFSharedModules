import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import icon from './static/noshadow_180pxCompressed.png';
import facebook from './static/facebook.png';
import instagram from './static/instagram.png';

const SuperContainer = styled.div`
	width: 100%;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	flex-direction: column;
	z-index: 2;
	height: ${props => props.height};
	background-color: white;
	filter: drop-shadow(0px 0px 5px black);
	overflow: hidden;
`;
const StickyBacker = styled.div`
	display: flex;
	flex-direction: row;
`;
const Container = styled.div`
	display: flex;
	background: transparent;
	flex-direction: row;
	flex: 0.5;
	font: 112.5%/1.45em georgia, serif;
`;
const OverflowContainer = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 0;
	align-items: center;
	justify-content: center;
`;
const SocialLogo = styled.img`
	height: 40px;
	margin-top: 10px;
	margin-bottom: 10px;
	flex-wrap: wrap;
	position: relative;
	transition: all 0.3s ease;

	&:hover {
		height: 45px;
		margin-top: 7.5px;
		margin-bottom: 7.5px;
	}
`;
const A = styled.a`
	flex: 0.5;
`;
const HomeLink = styled.div`
	text-decoration: none;
	display: flex;
	&:hover {
		color: black;
	}
`;
const LinkText = styled.h3`
	flex: 1;
	position: relative;
	height: 30px;
	display: flex;
	color: rgb(148, 148, 148);
	margin: 15px 20px 15px 20px;
	transition: color 0.5s ease;
	&:hover {
		color: black;
	}
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-weight: bold;
	text-rendering: optimizeLegibility;
	font-size: 1.38316rem;
	line-height: 1.1;
`;
const Clean = styled.h1`
	color: rgb(113, 194, 0);
	margin-top: 5px;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-weight: bold;
	text-rendering: optimizeLegibility;
	font-size: 2.25rem;
	line-height: 1.1;
`;

const Fare = Clean.extend`
	color: black;
	margin-right: 35px;
`;

const CleanFareLogo = styled.img`
	margin: 5px 20px 5px 20px;
	height: 50px;
`;

class SocialContent extends React.Component {
	render() {
		return (
			<Container>
				<A href="https://www.facebook.com/CleanFareApp" target="_blank">
					<SocialLogo src={facebook} />
				</A>
				<A href="https://www.instagram.com/cleanfare" target="_blank">
					<SocialLogo src={instagram} />
				</A>
			</Container>
		);
	}
}

class SocialContentAndLogo extends React.Component {
	render() {
		return (
			<Container>
				<a href="/" style={{ textDecoration: 'none' }}>
					<HomeLink>
						<CleanFareLogo src={icon} />
						<Clean>Clean</Clean>
						<Fare>Fare</Fare>
					</HomeLink>
				</a>
				<SocialContent />
			</Container>
		);
	}
}

class LinkContent extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 1500, funcRef: null };
	}

	updateWidth() {
		var isSafari =
			/constructor/i.test(window.HTMLElement) ||
			(function(p) {
				return p.toString() === '[object SafariRemoteNotification]';
			})(
				!window['safari'] ||
					(typeof safari !== 'undefined' && safari.pushNotification)
			);
		var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		if (iOS) {
			this.setState({ width: screen.width });
		} else {
			if (isSafari) {
				this.setState({ width: window.innerWidth });
			} else {
				if (window.visualViewport) {
					this.setState({ width: window.visualViewport.width });
				} else {
					this.setState({ width: window.innerWidth });
				}
			}
		}
	}

	componentDidMount() {
		this.updateWidth();
		var x = this.updateWidth.bind(this);
		window.addEventListener('resize', x);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.state.funcRef);
	}

	render() {
		return (
			<Container>
				{this.state.width > 450 ? (
					<a href="/" style={{ textDecoration: 'none' }}>
						<LinkText>Home</LinkText>
					</a>
				) : (
					''
				)}
				{this.state.width > 650 ? (
					<a href="/businesses/" style={{ textDecoration: 'none' }}>
						<LinkText>Businesses</LinkText>
					</a>
				) : (
					''
				)}
				{this.state.width > 850 ? (
					<a href="/competitions/" style={{ textDecoration: 'none' }}>
						<LinkText>Competitions</LinkText>
					</a>
				) : (
					''
				)}
				{this.state.width > 1000 ? (
					<a href="/contact/" style={{ textDecoration: 'none' }}>
						<LinkText>Contact</LinkText>
					</a>
				) : (
					''
				)}
			</Container>
		);
	}
}

class Overflow extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 1500, funcRef: null };
	}

	updateWidth() {
		var isSafari =
			/constructor/i.test(window.HTMLElement) ||
			(function(p) {
				return p.toString() === '[object SafariRemoteNotification]';
			})(
				!window['safari'] ||
					(typeof safari !== 'undefined' && safari.pushNotification)
			);
		var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		if (iOS) {
			this.setState({ width: screen.width });
		} else {
			if (isSafari) {
				this.setState({ width: window.innerWidth });
			} else {
				if (window.visualViewport) {
					this.setState({ width: window.visualViewport.width });
				} else {
					this.setState({ width: window.innerWidth });
				}
			}
		}
	}

	componentDidMount() {
		this.updateWidth();
		var x = this.updateWidth.bind(this);
		this.setState({ funcRef: x });
		window.addEventListener('resize', x);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.state.funcRef);
	}

	render() {
		return (
			<OverflowContainer>
				<Container>
					{this.state.width <= 450 ? (
						<a href="/" style={{ textDecoration: 'none' }}>
							<LinkText>Home</LinkText>
						</a>
					) : (
						''
					)}
					{this.state.width <= 650 ? (
						<a href="/businesses/" style={{ textDecoration: 'none' }}>
							<LinkText>Businesses</LinkText>
						</a>
					) : (
						''
					)}
					{this.state.width <= 850 && this.state.width > 400 ? (
						<a href="/competitions/" style={{ textDecoration: 'none' }}>
							<LinkText>Competitions</LinkText>
						</a>
					) : (
						''
					)}
					{this.state.width <= 1000 && this.state.width > 450 ? (
						<a href="/contact/" style={{ textDecoration: 'none' }}>
							<LinkText>Contact</LinkText>
						</a>
					) : (
						''
					)}
				</Container>
				<Container>
					{this.state.width <= 400 ? (
						<a href="/competitions/" style={{ textDecoration: 'none' }}>
							<LinkText>Competitions</LinkText>
						</a>
					) : (
						''
					)}
					{this.state.width <= 450 ? (
						<a href="/contact/" style={{ textDecoration: 'none' }}>
							<LinkText>Contact</LinkText>
						</a>
					) : (
						''
					)}
				</Container>
			</OverflowContainer>
		);
	}
}

class NavBar extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 1500, funcRef: null };
	}

	updateWidth() {
		var isSafari =
			/constructor/i.test(window.HTMLElement) ||
			(function(p) {
				return p.toString() === '[object SafariRemoteNotification]';
			})(
				!window['safari'] ||
					(typeof safari !== 'undefined' && safari.pushNotification)
			);
		var iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;

		if (iOS) {
			this.setState({ width: screen.width });
		} else {
			if (isSafari) {
				this.setState({ width: window.innerWidth });
			} else {
				if (window.visualViewport) {
					this.setState({ width: window.visualViewport.width });
				} else {
					this.setState({ width: window.innerWidth });
				}
			}
		}
	}

	componentDidMount() {
		this.updateWidth();
		var x = this.updateWidth.bind(this);
		this.setState({ funcRef: x });
		window.addEventListener('resize', x);
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.state.funcRef);
	}

	render() {
		const { isHome } = this.props;
		var LeftContent = isHome ? SocialContent : SocialContentAndLogo;
		var height = '60px';
		if (this.state.width > 1000) {
			height = '60px';
		} else if (this.state.width > 450) {
			height = '120px';
		} else {
			height = '180px';
		}
		return (
			<SuperContainer height={height}>
				<StickyBacker>
					<LeftContent />
					<LinkContent />
				</StickyBacker>
				<Overflow />
			</SuperContainer>
		);
	}
}

NavBar.propTypes = {
	isHome: PropTypes.bool
};

export default NavBar;
