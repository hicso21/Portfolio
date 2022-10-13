import React, { useState } from 'react'
import { Box, Text, Image } from "@chakra-ui/react"
import {Link} from 'react-router-dom'
import {ImageList} from '@mui/material'
import js from '../Assets/js.png'
import github from '../Assets/github.png'
import materialUI from '../Assets/materialUI.png'
import mongo from '../Assets/mongo.png'
import node from '../Assets/node.png'
import sequelize from '../Assets/sequelize.png'
import react from '../Assets/react.png'
import postgreSQL from '../Assets/postgreSQL.png'
import jwt from '../Assets/jwt.png'
import SQL from '../Assets/SQL.png'

const Home = () => {

    const [photos, setPhotos] = useState([js, github, materialUI, mongo, node, sequelize, react, postgreSQL, SQL, jwt])

    let ImageStyle = { width: '90%', height: '40%', display:'flex', flexDirection:'row', margin:'auto'}
    
    function Slider({ photos }) {
        return (
          <ImageList sx={ImageStyle} className='imageList'>
            {
                photos.map((photo) => {
                    return(
                        <Box style={{color: 'inherit', textDecoration:'none', padding:5, width:200, alignItems:'center', display:'flex'}}>
                                <Image src={photo} alt='st'/>
                        </Box>
                    )
                })
            }
          </ImageList>
        );
    }

  return (
    <>

        <Box id='banner' style={{width:'100%', height:878, backgroundImage:"url('/background.jpg')", backgroundSize:'cover', backgroundPosition:'start'}}>
            <Text sx={{display:'flex', justifyContent:'center', pt:300, fontSize:'500%',height:390}}>Thomas Villaverde</Text>
            <Text sx={{display:'flex', justifyContent:'center', pl:60, fontSize:40}} as='i'>Full Stack Developer</Text>
        </Box>
        <Box 
            id='aboutMe' 
            style={{width:'100%', height:400}}
            bgGradient='linear(to-b, #8B5D33, #91785D)'
        >
            <Text 
                sx={{justifyContent:'center', display:'flex', pt:10, fontSize:'500%'}}
            >
                About Me
            </Text>
            <Text sx={{p:10}}>
                Hola!! Mi nombre es Thomas Villaverde, y soy Full Stack Developer, recibido el 30 de septiembre de 2022. Comence estudiando la carrera de ingenieria en 2019 luego de finalizar el secundario, y la virtualidad me hizo dar cuenta que no era lo mio.
                Fue gracias a un amigo que me dio a conocer los coding bootcamp
            </Text>
        </Box>
        <Box 
            id='services' 
            style={{width:'100%', height:400, backgroundColor:'#869D7A'}}
        >
            <Text 
                sx={{justifyContent:'center', display:'flex', pt:10, fontSize:'500%'}}
            >
                Servicios
            </Text>
            <Box sx={{bgColor:'red'}}>
                <Slider photos={photos}/>
            </Box>
        </Box>
    </>
  )
}

export default Home