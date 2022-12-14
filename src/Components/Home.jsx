import React, { useState } from 'react'
import { Box, Text, Image, Flex, Link,Tooltip, FormControl, FormLabel, FormErrorMessage, FormHelperText, Input, Grid, GridItem, Textarea, Button, CircularProgress } from "@chakra-ui/react"
import { useForm } from 'react-hook-form'
import { useMediaQuery } from '@chakra-ui/react'
import { ImageList, ImageListItem, ImageListItemBar, Typography} from '@mui/material'
import axios from 'axios'
import js from '../Assets/js.png'
import github from '../Assets/github.png'
import materialUI from '../Assets/materialUI.png'
import mongo from '../Assets/mongo.webp'
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
import PCT from '../Assets/PCT.png'
import TMDB from '../Assets/TMDB.png'
import CSS3 from '../Assets/CSS3.png'
import HTML5 from '../Assets/HTML5.png'
import ngrx from '../Assets/ngrx.png'
import angular from '../Assets/angular.png'
import fotuli from '../Assets/fotuli.jpeg'
import HandymanIcon from '@mui/icons-material/Handyman';
import ReportProblemIcon from '@mui/icons-material/ReportProblem';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Home = () => {

    const [mW768] = useMediaQuery('(min-width: 768px)')
    const [mW1024] = useMediaQuery('(min-width: 1024px)')
    const [mW1240] = useMediaQuery('(min-width: 1240px)')
    const [mW1400] = useMediaQuery('(min-width: 1400px)')
    const [photos, setPhotos] = useState([{photo:node, name:'Node'},{photo:git, name:'Git'},{photo:express, name:'Express'}, {photo:angular, name:'Angular'}, {photo:redux, name:'Redux'}, {photo:react, name:'React'}, {photo:js, name:'Javascript'}, {photo:github, name:'GitHub'},{photo:chakra, name:'Chakra UI'}, {photo:materialUI, name:'Material UI'}, {photo:CSS3, name:'CSS3'}, {photo:jwt, name:'JWT'}, {photo:HTML5, name:'HTML5'}, {photo:mongo, name:'MongoDB'},  {photo:sequelize, name:'Sequelize'}, {photo:postgreSQL, name:'PostgreSQL'}, {photo:SQL, name:'SQL'}])
    const [projects, setProjects] = useState([{name:'Patitas con Techo', photo:PCT, url:'/'}, {name:'TMDB', photo:TMDB, url:'/'}])

    const { register, handleSubmit, watch, formState: { errors } } = useForm();

    const onSubmit = (data) => {
        const obj = JSON.stringify(data)
        console.log(data)
        console.log(obj)
        //axios({method:'POST', data:data, url:'https://formsubmit.co/0c84a8dca7fadbab4a9c586fb6b2d89e'})
        fetch("https://formsubmit.co/ajax/0c84a8dca7fadbab4a9c586fb6b2d89e", {
            method: "POST",
            headers: { 
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        })
        
      };

    let ImageStyle = { width: '90%', height: '40%', display:'flex', flexDirection:'row', margin:'auto'}
    
    function Slider({ photos }) {
        return (
          <ImageList sx={ImageStyle} className='imageList'>
            {photos.map((item, index) => {
            return(
              <Box key={index} style={{color: 'inherit', textDecoration:'none', padding:5, width:200, display:'flex'}}>
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

        <Box id='banner' style={{width:'100%', height:878, backgroundImage:"url('/banner.gif')", backgroundSize:'cover', backgroundPosition:'center'}}>
            {mW768
                ?<>
                    <Text sx={{color:'white', display:'flex', justifyContent:'center', pt:300, fontSize:'500%',height:390}}>Thomas Villaverde</Text>
                    <Text sx={{color:'white', display:'flex', justifyContent:'center', pl:60, fontSize:40}} as='i'>Full Stack Developer</Text>
                    <div style={{display:'flex', justifyContent:'center', paddingTop:'30vh'}}>
                        <Tooltip label={`Twitter`}><a href="https://twitter.com/ThomasVillaver6"><TwitterIcon style={{color:'white', fontSize:'250%'}}/></a></Tooltip>
                        <Tooltip label={`GitHub`}><a href="https://github.com/hicso21" style={{paddingLeft:'8vw',paddingRight:'8vw'}}><GitHubIcon style={{color:'white', fontSize:'250%'}}/></a></Tooltip>
                        <Tooltip label={`LinkedIn`}><a href="https://www.linkedin.com/in/thomas-villaverde-255254245/"><LinkedInIcon style={{color:'white', fontSize:'250%'}}/></a></Tooltip>
                    </div>
                </>
                :<>
                    <Text sx={{color:'white', display:'flex', justifyContent:'center', pt:250, fontSize:'10vw',height:320}}>Thomas Villaverde</Text>
                    <Text sx={{color:'white', display:'flex', justifyContent:'center', pl:'26vw', fontSize:'6vw'}} as='i'>Full Stack Developer</Text>
                    <div style={{display:'flex', justifyContent:'center', paddingTop:'30vw'}}>
                        <Tooltip label={`Twitter`}><a href="https://twitter.com/ThomasVillaver6"><TwitterIcon style={{color:'white', fontSize:'250%'}}/></a></Tooltip>
                        <Tooltip label={`GitHub`}><a href="https://github.com/hicso21" style={{paddingLeft:'8vw',paddingRight:'8vw'}}><GitHubIcon style={{color:'white', fontSize:'250%'}}/></a></Tooltip>
                        <Tooltip label={`LinkedIn`}><a href="https://www.linkedin.com/in/thomas-villaverde-255254245/"><LinkedInIcon style={{color:'white', fontSize:'250%'}}/></a></Tooltip>
                    </div>
                </>
            }
        </Box>
        <Box 
            id='services' 
            style={{width:'100%', backgroundColor:'rgb(248, 249,250)'}}
        >
            <Text 
                sx={{justifyContent:'center', display:'flex', pt:5, mb:6, fontSize:'300%'}}
                as='b'
            >
                Tecnolog??as
            </Text>
            <Box>
                <Slider photos={photos}/>
            </Box>
        </Box>
        <Box 
            id='aboutMe' 
            style={{width:'100%'}}
            bgGradient='linear(35deg,#11cdef,#1171ef)!important'
        >
            <Text 
                sx={{justifyContent:'center', display:'flex', pt:5, fontSize:'300%'}}
                color='rgb(248, 249,250)'
                as='b'
            >
                Sobre M??
            </Text>
            <Box sx={mW1024?{display:'flex'}:{display:'flex', flexDirection:'column'}}>
                <Box sx={mW1024?{width:'30%', pl:10, pb:10, pr:10, alignItems:'start', display:'flex'}:{width:'100%', pl:10, pb:10, pr:10, alignItems:'center', display:'flex'}}>
                    <Image src={fotuli} style={{borderRadius:1000}}/>
                </Box>
                <Box sx={mW1024?{width:'70%'}:{width:'100%'}}>
                    <Text sx={{pl:10, pb:10, pr:10, alignItems:'center', fontSize:'150%', height:'100%', display:'flex'}} color='rgb(248, 249,250)'>
                        Mi nombre es Thomas Villaverde, y soy Full Stack Developer, recibido el 30 de septiembre de 2022. Comence estudiando la carrera de ingenier??a qu??mica en 2019 luego de finalizar el secundario, y la virtualidad me hizo dar cuenta que no era lo m??o.<br/><br/>
                        Fue gracias a un amigo que me dio a conocer los coding bootcamp cuando hice un curso introductorio para saber si adentrarme al mundo IT y darme cuenta si era lo que estaba buscando.<br/><br/>
                        Al finalizar me d?? cuenta de que me encantaba la cercania entre la teor??a y la pr??ctica, poder leer la documentaci??n o ver videos explicat??vos y al instante probarlo, por lo que decid?? adentrarme en un coding bootcamp, un curso intensivo de m??s de 800 horas en las cuales logr?? generar una base solida de programaci??n.<br/><br/>
                        En la actualidad, sigo en constante aprendizaje, me gusta ampliar mis conocimientos y la cantidad de tecnolog??as que manejo, me encuentro aprendiendo Angular con muchas ganas de seguir con C#.<br/>
                    </Text>
                </Box>
            </Box>
        </Box>
        <Box 
            id='portfolio' 
            style={{width:'100%'}}
            bgGradient='linear(to-b, rgb(248, 249,250),rgb(248, 249,250))'
        >
            <Text 
                sx={{justifyContent:'center', display:'flex', pt:5, mb:6, fontSize:'300%'}}
                as='b'
            >
                Proyectos
            </Text>
            <div id='projects' style={{height:100, paddingInline:10}}>
                {/* When my works were deploys, this section will be appeared
                <Flex sx={mW1024?{justifyContent:'center'}:{flexDirection:'column', alignItems:'center'}}>
                    {projects.map((item, index)=>{
                        return(
                                <Box sx={mW1024?{maxHeight:600, maxWidth:600}:{}} key={index}>
                                    <Link href={item.url} sx={{height:'100%', width:'100%', display:'flex', alignItems:'center', borderRadius:20, border:'solid black 3px'}}>
                                        <Image src={item.photo} sx={{objectFit:'cover', borderRadius:16}}/>
                                    </Link>
                                </Box>
                        )
                    })}
                </Flex> 
                */}
                {mW768
                ?<div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
                    <div style={{display:'flex'}}><ReportProblemIcon/><HandymanIcon/></div>
                    <div style={{display:'flex'}}><h3 style={mW1024?{fontSize:'200%', paddingRight:'5vw'}:{fontSize:'200%'}}>En proceso de construccion...</h3><CircularProgress isIndeterminate color='#11cdef'/></div>
                    <div><HandymanIcon/><ReportProblemIcon/></div>
                </div>
                :<div style={{display:'flex', alignItems:'center', justifyContent:'space-evenly'}}>
                    <div style={{display:'flex'}}><ReportProblemIcon/><HandymanIcon/></div>
                    <div style={{display:'flex'}}><h3 style={{fontSize:'200%'}}>En proceso...</h3><CircularProgress isIndeterminate color='#11cdef'/></div>
                    <div><HandymanIcon/><ReportProblemIcon/></div>
                </div>
                }
            </div>
            <Box id='contact' sx={{paddingInline:10}} bgGradient='linear(35deg,#11cdef,#1171ef)!important'>
                <Text 
                    sx={{justifyContent:'center', display:'flex', pt:5, mb:6, fontSize:'300%', color:'white'}}
                    as='b'
                >
                    Contactame
                </Text>
                {!mW1240
                ?<form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                        paddingBottom='5vh'
                        templateRows='repeat(4, 1fr)'
                        templateColumns='repeat(4, 1fr)'
                        gap={3}
                    >
                        <GridItem colSpan={2}>
                            <FormLabel color='white'>Nombre</FormLabel>
                            <input
                                name='Nombre'
                                className='inputs'
                                type='text'
                                {...register('Nombre', { required:true })} 
                            />
                            {errors.name?.type === 'required' && <p role="alert">El nombre es obligatorio</p>}
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel color='white'>Ciudad, Pais</FormLabel>
                            <input
                                name='Localidad'
                                className='inputs'
                                type='text'
                                {...register('Locacion', { required:true })} 
                            />
                            {errors.location?.type === 'required' && <p role="alert">La localidad es obligatorio</p>}
                        </GridItem>
                        <GridItem colSpan={4}>
                            <FormLabel color='white'>Email</FormLabel>
                            <input
                                name='Email'
                                className='inputs' 
                                type='text'
                                {...register('Email', { required:true, pattern: /[a-zA-Z0-9]+\@*[a-zA-Z0-9]*\@{1}[a-zA-Z]+.com$/ })} 
                            />
                            {errors.email?.type === 'required' && <p role="alert">El email es obligatorio</p>}
                            {errors.email?.type === 'pattern' && <p role="alert">El formato del email no es valido</p>}
                        </GridItem>
                        <GridItem colSpan={4} rowSpan={2}>
                            <FormLabel color='white'>Descripcion</FormLabel>
                            <Textarea 
                                name='Texto'
                                height={'80%'}
                                {...register('Descripcion', { required:true })}
                            />
                            {errors.text?.type === 'required' && <p role="alert">El campo debe contener texto</p>}
                        </GridItem>
                    </Grid>
                    <Button className='hover' variant='outline' sx={{marginBottom:'5vh', width:'100%'}} type='submit' color={'#fff'}>Enviar</Button>
                    <input type="hidden" name="_next" value="http://localhost:3000"></input>
                </form>
                :<form onSubmit={handleSubmit(onSubmit)}>
                    <Grid
                        gap={3}
                        style={
                            mW1400
                            ?{paddingInline:'10vw', paddingBottom:'2vh', templateRows:'repeat(4, 1fr)',templateColumns:'repeat(6, 1fr)'}
                            :{paddingBottom:'2vh',templateRows:'repeat(4, 1fr)', templateColumns:'repeat(6, 1fr)'}
                        }
                    >
                        <GridItem colSpan={2}>
                            <FormLabel color='white'>Nombre</FormLabel>
                            <input
                                name='Nombre'
                                className='inputs'
                                type='text'
                                {...register('Nombre', { required:true })} 
                            />
                            {errors.name?.type === 'required' && <p role="alert">El nombre es obligatorio</p>}
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel color='white'>Ciudad, Pais</FormLabel>
                            <input
                                name='Localidad'
                                className='inputs'
                                type='text'
                                {...register('Locacion', { required:true })} 
                            />
                            {errors.location?.type === 'required' && <p role="alert">La localidad es obligatorio</p>}
                        </GridItem>
                        <GridItem colSpan={2}>
                            <FormLabel color='white'>Email</FormLabel>
                            <input
                                name='Email'
                                className='inputs' 
                                type='text'
                                {...register('Email', { required:true, pattern: /[a-zA-Z0-9]+\@*[a-zA-Z0-9]*\@{1}[a-zA-Z]+.com$/ })} 
                            />
                            {errors.email?.type === 'required' && <p role="alert">El email es obligatorio</p>}
                            {errors.email?.type === 'pattern' && <p role="alert">El formato del email no es valido</p>}
                        </GridItem>
                        <GridItem colSpan={6} rowSpan={2}>
                            <FormLabel color='white'>Descripcion</FormLabel>
                            <Textarea 
                                name='Texto'
                                height={'80%'}
                                {...register('Descripcion', { required:true })}
                            />
                            {errors.text?.type === 'required' && <p role="alert">El campo debe contener texto</p>}
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={2}></GridItem>
                        <GridItem colSpan={4} rowSpan={1} style={{display:'flex', alignItems:'center', paddingTop:'5vh'}}>
                            <Button className='hover' variant='outline' sx={{width:'100%', margin:'0 auto'}} type='submit' color={'#fff'}>Enviar</Button>
                            <input type="hidden" name="_next" value="http://localhost:3000"></input>
                        </GridItem>
                        <GridItem colSpan={1} rowSpan={2}></GridItem>
                    </Grid>
                </form>
                }
            </Box>
        </Box>
    </>
  )
}

export default Home