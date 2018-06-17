import React from 'react';
import styled from 'styled-components';
import TwoColumns from './twoColumns';
import Google from '../static/googleDownload.png';
import AppStore from '../static/appStore.svg';

const SuperContainer = styled.div`
	position: relative;
	bottom: 0;
	width: 100vw;
	font: 112.5%/1.45em georgia, serif;
`;
const ColumnsWrapper = styled.div`
	width: 100vw;
	display: flex;
	flexdirection: row;
	color: rgb(150, 150, 150);
	background: black;
	margin-bottom: 0px;
`;
const CenterWrapper = ColumnsWrapper.extend`
	align-items: center;
	justify-content: center;
`;
const LinkStyle = styled.p`
	color: rgb(200, 200, 200);
	text-decoration: none;
	transition: color 0.5s ease;
	margin-left: 0;
	margin-right: 0;
	margin-top: 0;
	padding-bottom: 0;
	padding-left: 0;
	padding-right: 0;
	padding-top: 0;
	margin-bottom: 0;
	&:hover {
		color: white;
	}
`;
const Column = styled.div`
	flex: 1;
	padding: 10px;
`;
const CenterColumn = Column.extend`
	text-align: center;
`;
const StoreImage = styled.img`
	width: 250px;
`;
const H3 = styled.h3`
	margin-bottom: 1.45rem;
	margin-top: 0;
	color: inherit;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-weight: bold;
	text-rendering: optimizeLegibility;
	font-size: 1.38316rem;
	line-height: 1.1;
`;

const P = styled.p`
	margin-bottom: 0;
`;

class Footer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { width: 1500, funcRef: null };
	}

	updateWidth() {
		console.log(this.state.width);
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
					this.setState({ width: window.innerWidth });
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
		var d = new Date();
		return (
			<SuperContainer>
				<ColumnsWrapper>
					<Column>
						<H3>Page Navigation</H3>
						<a href="/" style={{ textDecoration: 'none' }}>
							<LinkStyle>Home</LinkStyle>
						</a>
						<a href="/businesses/" style={{ textDecoration: 'none' }}>
							<LinkStyle>Businesses</LinkStyle>
						</a>
						<a href="/competitions/" style={{ textDecoration: 'none' }}>
							<LinkStyle>Competitions</LinkStyle>
						</a>
						<a href="/contact/" style={{ textDecoration: 'none' }}>
							<LinkStyle>Contact</LinkStyle>
						</a>
					</Column>
					<Column>
						<H3>Business</H3>
						<a href="/vendor-partnerships/" style={{ textDecoration: 'none' }}>
							<LinkStyle>Vendor Partnerships</LinkStyle>
						</a>
						<a
							href="/corporate-subscription/"
							style={{ textDecoration: 'none' }}>
							<LinkStyle>Host A Competition</LinkStyle>
						</a>
					</Column>
					<Column>
						<H3>Admin</H3>
						<a href="/vendor-console/" style={{ textDecoration: 'none' }}>
							<LinkStyle>Vendor Console</LinkStyle>
						</a>
						<a href="/competition-console/" style={{ textDecoration: 'none' }}>
							<LinkStyle>Competition Console</LinkStyle>
						</a>
					</Column>
					{this.state.width > 800 ? (
						<Column>
							<a
								href="https://play.google.com/store/apps/details?id=com.cleanfare"
								target="_blank">
								<StoreImage alt="Get it on Google Play" src={Google} />
							</a>
							<a
								href="https://itunes.apple.com/us/app/cleanfare/id1368060448?ls=1&mt=8"
								target="_blank">
								<StoreImage alt="Download on the App Stor" src={AppStore} />
							</a>
						</Column>
					) : (
						''
					)}
				</ColumnsWrapper>
				{this.state.width <= 800 ? (
					<CenterWrapper>
						<CenterColumn>
							<a
								href="https://play.google.com/store/apps/details?id=com.cleanfare"
								target="_blank">
								<StoreImage alt="Get it on Google Play" src={Google} />
							</a>
							<a
								href="https://itunes.apple.com/us/app/cleanfare/id1368060448?ls=1&mt=8"
								target="_blank">
								<StoreImage alt="Download on the App Stor" src={AppStore} />
							</a>
						</CenterColumn>
					</CenterWrapper>
				) : (
					''
				)}
				<CenterWrapper>
					<CenterColumn>
						<P>
							Copyright © {d.getFullYear()} CleanFare LLC. All Rights Reserved.
						</P>
						<a
							href="https://www.iubenda.com/privacy-policy/8006320"
							target="_blank"
							style={{ textDecoration: 'none' }}>
							<LinkStyle>Privacy Policy</LinkStyle>
						</a>
					</CenterColumn>
				</CenterWrapper>
			</SuperContainer>
		);
	}
}

export default Footer;
