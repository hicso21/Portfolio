import React from "react"
import { Button, FormControl, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react"
import style from './contactStyle.js'

function EmailSender({ isOpen, onOpen, onClose }) {
    return (
      <>
        <Modal
          isOpen={isOpen}
          onClose={onClose}
        >
          <ModalOverlay />
          <ModalContent>
            <form action="https://formsubmit.co/tv21102000@gmail.com" method="POST">
              <ModalHeader>Send me an email</ModalHeader>
              <ModalCloseButton />
              
              <ModalBody pb={6}>
  
                <FormControl >
                  <label>Name</label>
                  <br/>
                  <input style={style.desktop.input} type='text' name="Name" placeholder='Name' />
                </FormControl>
                
                <FormControl mt={4}>
                  <label>Email</label>
                  <br/>
                  <input style={style.desktop.input} type='email' name="Email" placeholder='Email' />
                </FormControl>
                
                <FormControl mt={4}>
                  <label>Description</label>
                  <br/>
                  <textarea style={style.desktop.textarea} name="Description" placeholder='Description' />
                </FormControl>
  
              </ModalBody>
              
              <ModalFooter>
                <Button type="submit" colorScheme='telegram' mr={3}>Send</Button>
                <input type="hidden" name="_next" value="http://localhost:5173"></input>
                <input type="hidden" name="_captcha" value="false"/>
                <Button onClick={onClose}>Cancel</Button>
              </ModalFooter>
            </form>  
          </ModalContent>
        </Modal>
      </>
    )
}

export default EmailSender
