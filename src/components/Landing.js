import React from 'react';
import './Landing.css';
import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faEnvelope} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons";
import Portrait from "./Portrait";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

const PortraitContainer = styled.div`
  flex: 1;
  height: 100vh;
  width: 50vw;
  overflow: hidden;
  vertical-align:top;
  horiz-align: right;
  text-align: right;
`;

const AboutContainer = styled.div`
  flex: 1;
  width: 50vw;
  overflow: hidden;
  text-align: center;
  horiz-align: center;
`;

const Description = styled.p`
  padding: 0;
  margin-bottom: 1rem;
  font-size: 1.4rem;
  flex-grow: 1;
`;

const NameHeader = styled.h1`
  font-size: 3.5rem;
  margin-bottom: 0;
  margin-top: 0;
  flex-grow: 1;
`;

const SocialList = styled.ul`
  list-style: none;
  flex-grow: 1;
  text-align: center;
  margin: 0;
  padding: 0;
`;

class SocialLink extends React.Component {
  render() {
    return <li className={'SocialLink'}>
      {/* eslint-disable-next-line react/jsx-no-target-blank */}
      <a href={this.props.href} target={'_blank'}>
        <FontAwesomeIcon icon={this.props.icon} size="2x"/>
      </a>
    </li>;
  }
}

function Landing() {
  return (
    <OuterContainer classNmae={'OuterContainer'}>
      <PortraitContainer className={'PortraitContainer'}>
        <Portrait/>
      </PortraitContainer>
      <AboutContainer className={'AboutContainer'}>
        <NameHeader>Jakub Dubec</NameHeader>
        <Description>Software developer</Description>
        <SocialList>
          <SocialLink href={'https://github.com/Sibyx'} icon={faGithub}>Github</SocialLink>
          <SocialLink href={'https://www.facebook.com/dubecj'} icon={faFacebook}>Facebook</SocialLink>
          <SocialLink href={'mailto:jakub.dubec@gmail.com'} icon={faEnvelope}>E-Mail</SocialLink>
        </SocialList>
      </AboutContainer>
    </OuterContainer>
  );
}


export default Landing;
