import { Box, Button, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text, useMediaQuery } from '@chakra-ui/react'
import React from 'react'
import projectsList from './projectsList.js'
import style from './projectsStyle.js'
import GitHubIcon from '@mui/icons-material/GitHub';

const Projects = () => {
    const [minWidth960] = useMediaQuery('(min-width: 960px)')

  return (
    <Box>
      <Text style={minWidth960?style.desktop.title:style.mobile.title}>Projects</Text>
      <Divider width='80%' margin='0 auto' orientation='horizontal'/>
      <Box id='projects' style={minWidth960?style.desktop.projectsContainer:style.mobile.projectsContainer}>
        {
          projectsList.map((project)=>(
            <Card
                key={project.name}
                direction={{ base: 'column', sm: 'row' }}
                overflow='hidden'
                variant='outline'
            >
                <Image
                    objectFit='cover'
                    maxW={{ base: '100%', sm: '200px' }}
                    src={project.img}
                    alt='Project Img'
                />

                <Stack>
                    <CardBody>
                    <Heading size='md'>{project.name}</Heading>

                    <Text pt='2'>
                        {project.description}
                    </Text>
                    </CardBody>

                    <CardFooter>
                    <Button onClick={()=>{}} variant='outline'>
                        <a href={project.url}>
                          <GitHubIcon/>
                        </a>
                    </Button>
                    </CardFooter>
                </Stack>
            </Card>
          ))
        }
      </Box>
    </Box>
  )
}

export default Projects
