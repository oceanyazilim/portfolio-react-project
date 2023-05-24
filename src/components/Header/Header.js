import Link from 'next/link';
import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';
import { DiCssdeck } from 'react-icons/di';

import { Container, Div1, Div2, Div3, NavLink, SocialIcons } from './HeaderStyles';

const Header = () =>  (
  <Container>
    <Div1>
      <Link href="/">
        <a style={{ display: 'flex', alignItems: 'center', color:"lightblue" }}>
          <DiCssdeck size="5rem" /> <span>Chillmaster</span>
        </a>
      </Link>
    </Div1>
    <Div2>
      <li>
        <Link href="#projects" target="_blank">
          <NavLink>Projects</NavLink>
        </Link>
      </li>
      <li>
        <Link href="#tech">
          <NavLink>Technologies</NavLink>
        </Link>
      </li>        
      <li>
        <Link href="#about">
          <NavLink>About</NavLink>
        </Link>
      </li>        
    </Div2>
      <Div3>
        <SocialIcons href="https://github.com/chillemirhan">
          <AiFillGithub size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://tr.linkedin.com/in/emirhan-k%C4%B1l%C4%B1%C3%A7-30a479261?original_referer=https%3A%2F%2Fwww.google.com%2F">
          <AiFillLinkedin size="3rem" />
        </SocialIcons>
        <SocialIcons href="https://instagram.com/chillemirhan">
          <AiFillInstagram size="3rem"/>
        </SocialIcons>
      </Div3>
    </Container>
);

export default Header;
