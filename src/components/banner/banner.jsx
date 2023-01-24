import React from 'react'
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Box, Text, Tooltip, useMediaQuery } from '@chakra-ui/react';
import style from './bannerStyle.js';

const Banner = () => {
  const [minWidth960] = useMediaQuery('(min-width: 960px)')

  return (
    <Box style={minWidth960?style.desktop.banner:style.mobile.banner}>
      <article style={minWidth960?style.desktop.text:style.mobile.text}>
        <div style={minWidth960?style.desktop.textContent:style.mobile.textContent}>
          <Text style={minWidth960?style.desktop.name:style.mobile.name}>Thomas Villaverde</Text>
          <Text style={minWidth960?style.desktop.type:style.mobile.type} as='i'>Full Stack Developer</Text>
        </div>
      </article>
      <div style={minWidth960?style.desktop.tooltipStyle:style.mobile.tooltipStyle}>
        <Tooltip label={`Twitter`}><a href="https://twitter.com/ThomasVillaver6"><TwitterIcon style={minWidth960?style.desktop.icon:style.mobile.icon}/></a></Tooltip>
        <Tooltip label={`GitHub`}><a href="https://github.com/hicso21" style={{marginInline:'10vw'}}><GitHubIcon style={minWidth960?style.desktop.icon:style.mobile.icon}/></a></Tooltip>
        <Tooltip label={`LinkedIn`}><a href="https://www.linkedin.com/in/thomas-villaverde-255254245/"><LinkedInIcon style={minWidth960?style.desktop.icon:style.mobile.icon}/></a></Tooltip>
      </div>
    </Box>
  )
}

export default Banner
