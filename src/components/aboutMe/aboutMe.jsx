import { Box, Divider, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import LinkIcon from '@mui/icons-material/Link'
import style from './aboutMeStyle.js'

const AboutMe = () => {
  const [minWidth960] = useMediaQuery('(min-width: 960px)')

  return (
    <Box style={minWidth960?style.desktop.box:style.mobile.box}>
      <Text style={minWidth960?style.desktop.title:style.mobile.title}>
        Little About Me
      </Text>
      <Divider width='85%'/>
      <Text style={minWidth960?style.desktop.firstSentence:style.mobile.firstSentence}>
        I'm Thomas Villaverde and I'm a Full Stack Javascript Developer.
      </Text>
      <Text style={minWidth960?style.desktop.secondSentence:style.mobile.secondSentence}>
        After finishing a bootcamp with Platform 5, I realised that I am passionate about programming and learning about it. And it is to this day that I keep learning and striving to advance in this world.
      </Text>
      <Text style={minWidth960?style.desktop.thirdSentence:style.mobile.thirdSentence}>
        I am a proactive person and eager to show the potential I have.
      </Text>
    </Box>
  )
}

export default AboutMe
