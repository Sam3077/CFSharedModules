import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const WrapperDiv = styled.div`
	background: ${props => props.background};
	width: ${props => props.width};
	height: auto;
	display: flex;
	flex-direction: ${props => props.direction};
	border-radius: 2px;
`;

const Div = styled.div`
	display: flex;
	border-radius: 2px;
	flex: 1;
	background: ${props => props.background};
	padding: ${props => props.padding};
	text-align: left;
	width: 100%;
	height: auto;
	overflow-x: hidden;
`;

class TwoColumns extends React.Component {
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
				this.setState({ width: window.visualViewport.width });
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
		const {
			leftContent,
			rightContent,
			backgroundColor,
			rightColor,
			leftColor,
			middleSpace,
			width,
			leftPadding,
			rightPadding
		} = this.props;
		var widthToSet = '80vw';
		var direction = 'row';
		var middle = '0px';
		var leftToSet;
		var rightToSet;
		if (!(rightToSet = rightColor)) {
			rightToSet = backgroundColor;
		}

		if (!(leftToSet = leftColor)) {
			leftToSet = backgroundColor;
		}

		if (middleSpace) {
			middle = middleSpace;
		}

		if (width) {
			widthToSet = width;
		}

		if (this.state.width < 900) {
			direction = 'column';
		}
		return (
			<WrapperDiv
				background={backgroundColor}
				width={widthToSet}
				direction={direction}>
				<Div background={leftToSet} padding={leftPadding}>
					{leftContent}
				</Div>
				<div style={{ width: middle }} />
				<Div background={rightToSet} padding={rightPadding}>
					{rightContent}
				</Div>
			</WrapperDiv>
		);
	}
}

TwoColumns.propTypes = {
	leftContent: PropTypes.element.isRequired,
	rightContent: PropTypes.element.isRequired,
	backgroundColor: PropTypes.string,
	leftColor: PropTypes.string,
	rightColor: PropTypes.string,
	middleSpace: PropTypes.string,
	width: PropTypes.string,
	leftPadding: PropTypes.string,
	rightPadding: PropTypes.string
};

export default TwoColumns;
