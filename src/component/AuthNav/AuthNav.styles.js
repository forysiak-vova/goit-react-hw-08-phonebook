import styled from '@emotion/styled';
import { NavLink } from 'react-router-dom';

export const ContainerAuthNav = styled.div`
    display: flex;
    // align-items: center;
    // justify-content: end;
    // margin-right: 50px;
`;



export const Link = styled(NavLink)`
text-decoration: none;
color: #fff;
 &:hover {
   color: black;
 }
 &.active {
    color: black;
 }
`;