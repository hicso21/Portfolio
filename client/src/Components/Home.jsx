import React, { useState } from 'react'
import { Box, Text, Image, SimpleGrid, Tooltip } from "@chakra-ui/react"
import {Link} from 'react-router-dom'
import {ImageList, ImageListItem, ImageListItemBar, Typography} from '@mui/material'
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
import redux from '../Assets/redux.png'
import git from '../Assets/git.png'
import chakra from '../Assets/chakra.png'
import express from '../Assets/express.png'

const Home = () => {

    const [photos, setPhotos] = useState([{photo:node, name:'Node'}, {photo:react, name:'React'},{photo:express, name:'Express'},{photo:git, name:'Git'}, {photo:redux, name:'Redux'}, {photo:js, name:'Javascript'}, {photo:github, name:'GitHub'},{photo:chakra, name:'Chakra UI'}, {photo:materialUI, name:'Material UI'}, {photo:mongo, name:'MongoDB'},  {photo:sequelize, name:'Sequelize'}, {photo:postgreSQL, name:'PostgreSQL'}, {photo:SQL, name:'SQL'}, {photo:jwt, name:'JWT'}])

    let ImageStyle = { width: '90%', height: '40%', display:'flex', flexDirection:'row', margin:'auto'}
    
    function Slider({ photos }) {
        return (
          <ImageList sx={ImageStyle} className='imageList'>
            {photos.map((item) => {
            return(
              <Box style={{color: 'inherit', textDecoration:'none', padding:5, width:200, display:'flex'}}>
                <Box style={{display:'flex', flexDirection:'column', width:200}}>
                    <Tooltip label={`${item.name}`}>
                        <img
                            src={item.photo}
                            alt={'Stack'}
                            loading="lazy"
                            style={{height:'100%', objectFit:'contain', width:200, display:'flex', justifyContent:'center'}}
                            />
                    </Tooltip>
                </Box>
              </Box>
            )})}
          </ImageList>
        );
      }

  return (
    <>

        <Box id='banner' style={{width:'100%', height:878, backgroundImage:"url('/background.jpeg')", backgroundSize:'cover', backgroundPosition:'center'}}>
            <Text sx={{display:'flex', justifyContent:'center', pt:300, fontSize:'500%',height:390}}>Thomas Villaverde</Text>
            <Text sx={{display:'flex', justifyContent:'center', pl:60, fontSize:40}} as='i'>Full Stack Developer</Text>
        </Box>
        <Box 
            id='services' 
            style={{width:'100%', backgroundColor:'rgb(248, 249,250)'}}
        >
            <Text 
                sx={{justifyContent:'center', display:'flex', pt:5, mb:6, fontSize:'300%'}}
                as='b'
            >
                Tecnologias
            </Text>
            <Box>
                <Slider photos={photos}/>
            </Box>
        </Box>
        <Box 
            id='aboutMe' 
            style={{width:'100%'}}
            bgGradient='linear(to-b, #00406c, #00406c)'
        >
            <Text 
                sx={{justifyContent:'center', display:'flex', pt:5, fontSize:'300%'}}
                color='rgb(248, 249,250)'
                as='b'
            >
                About Me
            </Text>
            <Text sx={{p:10, paddingInline:'10%'}} color='rgb(248, 249,250)'>
                Mi nombre es Thomas Villaverde, y soy Full Stack Developer, recibido el 30 de septiembre de 2022. Comence estudiando la carrera de ingenieria quimica en 2019 luego de finalizar el secundario, y la virtualidad me hizo dar cuenta que no era lo mio.<br/><br/>
                Fue gracias a un amigo que me dio a conocer los coding bootcamp cuando hice un curso introductorio para adentrarme al mundo IT y saber si era lo mio o no.<br/><br/>
                Al finalizar me di cuenta de que me encantaba la cercania entre la teoria y la practica, poder leer la documentacion o ver videos explicativos y al instante probarlo, por lo que decidi adentrarme en un coding bootcamp, un curso intesivo de mas de 800 horas en las cuales logre generar una base solida de programacion.<br/><br/>
                Hoy en dia sigo en constante aprendizaje, me gusta seguir aprendiendo y ampliar la cantidad de tecnologias que manejo, me encuentro aprendiendo Angular con muchas ganas de seguir nuevas tecnologias.<br/>
            </Text>
        </Box>
        <Box 
            id='portfolio' 
            style={{width:'100%', height:400}}
            bgGradient='linear(to-b, #abc4ff, #abc4ff)'
        >
            <Text 
                sx={{justifyContent:'center', display:'flex', pt:5, mb:6, fontSize:'300%'}}
                as='b'
            >
                Recent Projects
            </Text>
            <Box id='projects'>

            </Box>
        </Box>
    </>
  )
}

export default Home