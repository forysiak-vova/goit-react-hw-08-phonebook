import { NavLink } from 'react-router-dom';
import styled from '@emotion/styled'

export const LinkHome = styled(NavLink)`
text-decoration: none;
color: #fff;
 &:hover {
   color: black;
 }
 &.active {
    color: black;
 }
`;