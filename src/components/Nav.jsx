import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NavStyle: StyledComponent<'nav', any, {}, never> = styled.nav`
	max-width: 1630px;
	padding: 0 15px;
	margin: 0 auto;
	position: relative;
`;

const Nav = (): JSX.Element => (
	<NavStyle>
		<ul>
			<li>
				<Link to='/'>Home</Link>
			</li>
			<li>
				<Link to='/projects'>Projects</Link>
			</li>
			<li>
				<Link to='/error'>Error</Link>
			</li>
		</ul>
	</NavStyle>
);

export default Nav;
