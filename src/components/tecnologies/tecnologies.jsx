import { Box, Divider, Text, Tooltip, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import style from './tecnologiesStyle.js'
import icons from './tecnologiesIcon.js'

const Tecnologies = () => {
  const [minWidth960] = useMediaQuery('(min-width: 960px)')

  return (
    <Box style={minWidth960?style.desktop.box:style.mobile.box}>
      <Box style={minWidth960?style.desktop.leftBox:style.mobile.leftBox}>
        <Text fontSize={minWidth960?'4vw':'35px'}>My Knowledge</Text>
      </Box>
      <Divider width='80%' margin='0 auto' orientation='horizontal'/>
      <Box style={minWidth960?style.desktop.rightBox:style.mobile.rightBox}>
        {
          icons.map((icon)=>{
            return (
              <div key={icon.name} id='itemContainer' style={minWidth960?style.desktop.iconDiv:style.mobile.iconDiv}>
                <div id='imgContainer' style={minWidth960?style.desktop.imgCont:style.mobile.imgCont}>
                  <Tooltip label={icon.name} style={minWidth960?style.desktop.tooltip:style.mobile.tooltip}>
                    <img style={minWidth960?style.desktop.img:style.mobile.img} src={icon.img} alt='Icon Image'/>
                  </Tooltip>
                </div>
              </div>
            )
          })
        }
      </Box>
    </Box>
  )
}

export default Tecnologies
