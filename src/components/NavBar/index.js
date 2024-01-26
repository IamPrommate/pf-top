import React from 'react'
import { DiCssdeck } from 'react-icons/di';
import { VscActivateBreakpoints } from "react-icons/vsc";
import { FaBars } from 'react-icons/fa';
import { Bio } from '../../data/constants';
import { Close, CloseRounded } from '@mui/icons-material';
import { useTheme } from 'styled-components';
import { Link as LinkR } from 'react-router-dom';
import styled from 'styled-components';
import { useState } from 'react';
//import _default from '../../themes/default';
import Modal from 'react-modal';


const Nav = styled.div`
    background-color: ${({theme}) => theme.card};
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    @media (max-width: 960px) {
        transtion: 0.8s all ease;
    }
`;
const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1200px;
`;

const NavLogo = styled(LinkR)`
    width: 80%;    
    padding: 0 6px;
    display: flex;
    justify-content: start;
    align-items: center;
    text-decoration: none;
    @media (max-width: 640px) {
      padding: 0 0px;
  }
`;

const Span = styled.div`
    padding: 0 4px;
    font-weight: bold;
    font-size: 18px;
`;
const NavItems = styled.ul`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    gap: 32px;
    padding: 0 6px;
    list-style: none;

    @media screen and (max-width: 768px) {
      display: none;
    }
`;

const NavLink = styled.a`
    color: ${({ theme }) => theme.text_primary};
    font-weight: 500;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    :hover {
      color: ${({ theme }) => theme.primary};
      font-size: 18px;
    }

    &.active {
      border-bottom: 2px solid ${({ theme }) => theme.primary};
    }
`;


const ContactButton = styled.a`
  border: 1.8px solid ${({ theme }) => theme.primary};
  justify-content: center;
  display: flex;
  align-items: center;
  height: 70%;
  border-radius: 20px;
  color: ${({ theme }) => theme.primary};
  cursor: pointer;
  padding: 0 20px;
  font-weight: 500;
  text-decoration: none;
  font-size: 16px;
  transition: all 0.3s ease-in-out;
    :hover {
      background: ${({ theme }) => theme.primary};
      color: ${({ theme }) => theme.white};     
    }
    @media screen and (max-width: 768px) { 
    font-size: 14px;
    }
`;

const ButtonContainer = styled.div`
  width: 80%;  
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
  padding: 0 6px;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;


const MobileIcon = styled.div`
  display: none;
  
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 10px;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.5rem;
    cursor: pointer;
    color: ${({ theme }) => theme.text_primary};
  }
`

const MobileMenu = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    gap: 16px;
    position: absolute;
    top: 80px;
    right: 0;
    width: 100%;
    padding: 12px 40px 24px 40px;
    background: ${({ theme }) => theme.card_light+99};
    transition: all 0.6s ease-in-out;
    transform: ${({ isOpen }) => (isOpen ? 'translateY(0)' : 'translateY(-100%)')};
    border-radius: 0 0 20px 20px;
    box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.2);
    opacity: ${({ isOpen }) => (isOpen ? '100%' : '0')};
    z-index: ${({ isOpen }) => (isOpen ? '1000' : '-1000')};

`


const MobileLink = styled.a`
  color: ${({ theme }) => theme.text_primary};
  font-weight: 500;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;
  :hover {
    color: ${({ theme }) => theme.primary};
  }

  &.active {
    border-bottom: 2px solid ${({ theme }) => theme.primary};
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4); /* semi-transparent black overlay */
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the modal is on top of other elements */
`;


const ContactTitle = styled.div`
  font-size: 24px;
  margin-bottom: 6px;
  font-weight: 600;
  color: ${({ theme }) => theme.text_primary};
`

const ContactInput = styled.input`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactInputMessage = styled.textarea`
  flex: 1;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.text_secondary};
  outline: none;
  font-size: 18px;
  color: ${({ theme }) => theme.text_primary};
  border-radius: 12px;
  padding: 12px 16px;
  &:focus {
    border: 1px solid ${({ theme }) => theme.primary};
  }
`

const ContactButton2 = styled.input`
  width: 100%;
  text-decoration: none;
  text-align: center;
  background: ${({ theme }) => theme.gd1 };
  background: linear-gradient(225deg, ${({ theme }) => theme.gd1 } 0%, ${({ theme }) => theme.gd2} 100%);
  background: -moz-linear-gradient(225deg, ${({ theme }) => theme.gd1 } 0%, ${({ theme }) => theme.gd2} 100%);
  background: -webkit-linear-gradient(225deg, ${({ theme }) => theme.gd1 } 0%, ${({ theme }) => theme.gd2} 100%);
  padding: 13px 16px;
  margin-top: 2px;
  border-radius: 12px;
  border: none;
  color: ${({ theme }) => theme.white};
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
`

const ModalContainer = styled.div`
  position: relative;
  display: ${(props) => (props.modalIsOpen ? 'block' : 'none')};
`;


const ModalContentContainer = styled.div`
  position: relative;
  width: 95%;
  max-width: 500px;
  transition: all 0.2s ease;

  @media (max-width: 640px){
  width: 60%
  }
`;

const CloseButton = styled.button`
  position: absolute;
  top: 28px;
  right: 25px;
  cursor: pointer;
  background: none;
  border: none;
  font-size: 25px;
  color: #000;  // Set the color you want
`;

const ContactForm = styled.form`
  width: 100%;
  position: relative; /* Ensure relative positioning for absolute child */
  display: flex;
  flex-direction: column;
  background-color: ${({ theme }) => theme.card};
  padding: 32px;
  border-radius: 16px;
  box-shadow: rgba(23, 92, 230, 0.15) 0px 4px 24px;
  gap: 12px;
`;



const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const theme = useTheme();
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <Nav>
      <NavbarContainer>
        <NavLogo to='/'>
          <a style={{ display: "flex", alignItems: "center", color: "black", marginBottom: '20;', cursor: 'pointer' }}>
            <VscActivateBreakpoints size="2.5rem" /> <Span>Prommatew</Span>
          </a>
        </NavLogo>
        <MobileIcon>
          <FaBars onClick={() => {
            setIsOpen(!isOpen)
          }} />
        </MobileIcon>
        <NavItems>
          <NavLink href="#about">About</NavLink>
          <NavLink href='#skills'>Skills</NavLink>
          <NavLink href='#projects'>Projects</NavLink>
          <NavLink href='#education'>Education</NavLink>
        </NavItems>
        <ButtonContainer>
          <ContactButton onClick = {openModal} href={Bio.github} target="_blank">Contact</ContactButton>
        </ButtonContainer>

        <ModalContainer modalIsOpen={modalIsOpen}>
  <ModalOverlay>
    <ModalContentContainer>
      <CloseButton onClick={closeModal}>&times;</CloseButton>
      <ContactForm>
        <CloseButton onClick={closeModal}>&times;</CloseButton>
          <ContactTitle>Email Me</ContactTitle>
          <ContactInput placeholder="Your Email" name="from_email" />
          <ContactInput placeholder="Your Name" name="from_name" />
          <ContactInput placeholder="Subject" name="subject" />
          <ContactInputMessage placeholder="Message" rows="4" name="message" />
          <ContactButton2 type="submit" value="Send" onClick={closeModal}/>
          </ContactForm>
    </ModalContentContainer>
  </ModalOverlay>
</ModalContainer>
      
        {isOpen &&
          <MobileMenu isOpen={isOpen}>
            <MobileLink href="#about" onClick={() => {
              setIsOpen(!isOpen)
            }}>About</MobileLink>
            <MobileLink href='#skills' onClick={() => {
              setIsOpen(!isOpen)
            }}>Skills</MobileLink>
            <MobileLink href='#projects' onClick={() => {
              setIsOpen(!isOpen)
            }}>Projects</MobileLink>
            <MobileLink href='#education' onClick={() => {
              setIsOpen(!isOpen)
            }}>Education</MobileLink>
            <ContactButton 
            style={{padding: '10px 16px',background: `${theme.primary}`, color: 'white',width: 'max-content'}} 
            href={Bio.github} 
            target="_blank"
            onClick={() => {
              setIsOpen(!isOpen);
              openModal();
            }}>
              Contact</ContactButton>
          </MobileMenu>
        }
      </NavbarContainer>

    </Nav>

    
  )
}

export default Navbar;