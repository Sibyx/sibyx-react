import React from 'react';
import './App.css';
import styled from "@emotion/styled";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faAt, faCoffee} from "@fortawesome/free-solid-svg-icons";
import {faFacebook, faGithub} from "@fortawesome/free-brands-svg-icons";

const OuterContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: row;
  height: 78vh;
`;

const Container = styled.div`
  text-align: center;
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
      <a href={this.props.href} target={'_blank'}>
        <FontAwesomeIcon icon={this.props.icon} size="2x"/>
      </a>
    </li>;
  }
}

function App() {
  return (
    <OuterContainer>
      <Container>
        <NameHeader>Jakub Dubec</NameHeader>
        <Description>Software developer</Description>
        <SocialList>
          <SocialLink href={'https://github.com/Sibyx'} icon={faGithub}>Github</SocialLink>
          <SocialLink href={'https://www.facebook.com/dubecj'} icon={faFacebook}>Facebook</SocialLink>
          <SocialLink href={'mailto:jakub.dubec@gmail.com'} icon={faAt}>E-Mail</SocialLink>
        </SocialList>
      </Container>
    </OuterContainer>
  );
}

export default App;
