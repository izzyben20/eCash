import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background: #101522;
`

export const FooterWrap = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin:  0 auto;
    padding: 3rem 1.5rem;
    max-width: 68rem;
`

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px) {
        padding-top: 2rem;
    }
`

export const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 1rem;
    width: 10rem;
    text-align: center;
    box-sizing: border-box;
    color: #fff;

    @media screen and (max-width: 420px) {
        margin: 0;
        padding: 0.6rem;
        width: 100%;
    }
`;

export const FooterLinkTitle = styled.h1`
    font-size: 1rem;
    margin-bottom: 1rem;
`;

export const FooterLink = styled(Link)`
    color: #ffffff;
    text-decoration: none;
    font-size: 14px;
    margin-bottom: 14px;

    &:hover {
        color: #01bf71;
        transition: all 0.2s ease-in-out;
    }
`;

export const SocialMedia = styled.section`
    max-width: 1000px;
    width: 100%;
`

export const SocialMediaWrap = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    max-width: 1100px;
    margin: 40px auto 0 auto;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`

export const SocialLogo = styled(Link)`
    display: flex;
    align-items: center;
    justify-self: start;
    margin-bottom: 1rem;
    color: #01bf71;
    cursor: pointer;
    text-decoration: none;
    font-size: 1rem;
    font-weight: bold;
`;

export const WebsiteRight = styled.small`
    color: #fff;
    margin-bottom: 1rem;
`;

export const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

export const SocialIconLink = styled.a`
    color: #fff;
    font-size: 1.5rem;
`