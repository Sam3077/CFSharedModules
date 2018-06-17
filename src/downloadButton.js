import React from 'react';
import styled from 'styled-components';

const Button = styled.div`
	margin-top: 0vh;
	padding-left: 20px;
	padding-right: 20px;
	background: #f6a628;
	border-radius: 5px;
	filter: drop-shadow(-4px 5px 3px rgb(50, 50, 50));
	transition: all 0.5s ease;
	max-width: 70vw;
	outline: none;
	border: none;
	cursor: pointer;

	&:hover {
		filter: drop-shadow(0px 1px 1px rgb(50, 50, 50)) brightness(120%);
	}

	&:active {
		filter: drop-shadow(0px 0px 0px);
	}
`;
const ButtonText = styled.h2`
	color: black;
	text-align: center;
	margin-top: 1vh;
	margin-bottom: 1vh;
	font-size: 4vh;
	user-select: none;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-weight: bold;
	text-rendering: optimizeLegibility;
	line-height: 1.1;
`;
const TriangleUp = styled.div`
	width: 0;
	height: 0;
	border-left: 6px solid transparent;
	border-right: 6px solid transparent;
	border-bottom: 12px solid rgba(50, 50, 50, 0.75);
	margin-bottom: 0;
	margin-top: 5px;
	margin-left: -43px;
`;
const PlatformPicker = styled.div`
	background: rgba(50, 50, 50, 0.75);
	color: white;
	display: flex;
	padding-left: 10px;
	padding-right: 10px;
	height: 40px;
	min-height: 40px;
	justify-content: center;
	align-items: center;
	border-radius: 5px;
	margin-bottom: 15px;
`;
const StoreLink = styled.a`
	color: rgb(200, 200, 200);
	height: 100%;
	margin-left: 10px;
	margin-right: 10px;
	text-align: center;
	text-decoration: none;
	transition: all 0.5s ease;

	&:hover {
		color: white;
	}
`;
const LinkText = styled.h3`
	margin-top: 10px;
	font-size: 20px;
	font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
		Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
	font-weight: bold;
	text-rendering: optimizeLegibility;
	line-height: 1.1;
`;
const Wrapper = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
`;
const Spacer = styled.div`
	height: 72px;
`;

class DownloadButton extends React.Component {
	constructor(props) {
		super(props);
		this.state = { showPicker: false };
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		this.setState({ showPicker: !this.state.showPicker });
	}

	render() {
		const picker = [
			<TriangleUp key="1" />,
			<PlatformPicker key="2">
				<StoreLink
					href="https://itunes.apple.com/us/app/cleanfare/id1368060448?ls=1&mt=8"
					target="_blank">
					<LinkText style={{ flex: 1.5 }}>iOS</LinkText>
				</StoreLink>{' '}
				|
				<StoreLink
					href="https://play.google.com/store/apps/details?id=com.cleanfare"
					target="_blank">
					<LinkText>Android</LinkText>
				</StoreLink>
			</PlatformPicker>
		];

		return (
			<Wrapper>
				<Button onClick={this.handleClick}>
					<ButtonText>Download the app today</ButtonText>
				</Button>
				{this.state.showPicker ? picker : <Spacer />}
			</Wrapper>
		);
	}
}

export default DownloadButton;
