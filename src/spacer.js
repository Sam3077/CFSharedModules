import React, { Component } from 'react';
import styled from 'styled-components';

const Div = styled.div`
	width: 100%;
	background: transparent;
	height: ${props => props.height};
`;
const Space = styled.p`
	height: ${props => props.height};
`;

class Spacer extends React.Component {
	constructor(props) {
		super(props);
		this.state = { height: '60px' };
	}

	updateWidth() {
		var width = 0;
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
			width = screen.width;
		} else {
			if (isSafari) {
				width = window.innerWidth;
			} else {
				if (window.visualViewport) {
					width = window.visualViewport.width;
				} else {
					width = window.innerWidth;
				}
			}
		}

		if (width > 1000) {
			this.setState({ height: '60px' });
		} else if (width > 450) {
			this.setState({ height: '120px' });
		} else {
			this.setState({ height: '180px' });
		}
	}

	componentDidMount() {
		this.updateWidth();
		window.addEventListener('resize', this.updateWidth.bind(this));
	}

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateWidth.bind(this));
	}

	render() {
		return (
			<Div height={this.state.height}>
				<Space height={this.state.height} />
			</Div>
		);
	}
}

export default Spacer;
