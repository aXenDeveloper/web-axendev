import React from 'react';
import logoDark from '../assets/logo_dark.png';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import Nav from './Nav';

const ContainerStyle: StyledComponent<'div', any, {}, never> = styled.div`
	max-width: 1630px;
	padding: 0 15px;
	margin: 0 auto;
	position: relative;

	display: flex;
	justify-content: space-between;
	align-items: center;
`;

const LogoStyle = styled.img`
	height: 100px;
`;

const Header = (): JSX.Element => {
	return (
		<header>
			<ContainerStyle>
				<Link to='/'>
					<LogoStyle src={logoDark} alt='Logo aXenDev' />
				</Link>

				<div>test</div>
			</ContainerStyle>

			<Nav />
		</header>
	);
};

export default Header;
