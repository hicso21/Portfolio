import { Box, Divider, Text, useMediaQuery, Button, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import style from './contactStyle.js'
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailSender from './modal.jsx';
import './contact.css'

const GitHubSource = 'https://github.com/hicso21'
const LinkedInSource = 'https://www.linkedin.com/in/thomas-villaverde-255254245/'

const contact = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const [minWidth960] = useMediaQuery('(min-width: 960px)')

  return (
    <Box style={minWidth960?style.desktop.box:style.mobile.box}>
      <Text style={minWidth960?style.desktop.title:style.mobile.title}>Contact</Text>
      <Divider width='85%'/>
      <Box id='buttonsContainer' style={minWidth960?style.desktop.btnContainer:style.mobile.btnContainer}>
        <Button onClick={onOpen} id='gmail' leftIcon={minWidth960?<EmailIcon />:''} variant='outline'>
          {minWidth960?'Gmail':<EmailIcon />}
        </Button>
        <Button id='gh' leftIcon={minWidth960?<GitHubIcon />:''} variant='outline'>
          <a href={GitHubSource} style={style.anchor}>{minWidth960?'GitHub':<GitHubIcon />}</a>
        </Button>
        <Button id='li' leftIcon={minWidth960?<LinkedInIcon className='liIcon' />:''} variant='outline'>
          <a href={LinkedInSource} style={style.anchor}>{minWidth960?'LinkedIn':<LinkedInIcon className='liIcon' />}</a>
        </Button>
      </Box>
      <EmailSender onOpen={onOpen} isOpen={isOpen} onClose={onClose}/>
    </Box>
  )
}

export default contact
