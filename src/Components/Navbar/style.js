import Styled from 'styled-components'

export const NavbarSection = Styled.div`
    padding: 20px 0;
    overflow: hidden;
    background: #fff;
    position: relative;
    border-bottom: 1px solid #000;
`

export const Logo = Styled.div`
    width: 50%;
    float: left;
    @media (max-width : 991px) {
        width: 100%;
        float: none;
        text-align:center;
    }
`

export const LogoText = Styled.h2`
    font-size: 30px;
    font-weight: bold;
`

export const UlList = Styled.ul`
    width: 50%;
    float: left;
    list-style: none;
    @media(max-width : 991px){
        width: 100%;
        float:  none;
        margin-top: 20px;
    }
`

export const ListItem = Styled.li`
    display: inline-block;
    @media(max-width : 991px){
        display: block;
        text-align: center;
    }
`

export const Anchor = Styled.a`
    display: block;
    color: #222;
    text-decoration: none;
    padding: 10px 15px;
    font-weight: bold;
    &:hover{
        color: #eb5424;
    }
`
