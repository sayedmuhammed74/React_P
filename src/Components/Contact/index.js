import React from 'react'
import {ContactSection,ContactTitle ,Span ,Form ,FormInput ,InputText ,InputEmail ,InputExp ,InputSubmit ,TextArea } from './style.js';
import Footer from '../Footer';
const Contact = () => {
    return (
      <>
        <ContactSection>
            <div class="container">
                <ContactTitle><Span>Drop </Span>Me A line</ContactTitle>
                <Form>
                    <FormInput>
                        <InputText type="text" placeholder="Your Name"/>
                        <InputEmail type="email" placeholder="Your Email"/>
                    </FormInput>
                    <InputExp type="text" class="sub" placeholder="Your Subject"/>
                    <TextArea cols="30" rows="10" placeholder="Your Message"></TextArea>
                    <InputSubmit type="submit" value="Send Message"/>
                </Form>
            </div>
        </ContactSection>
        <Footer/>
      </>
    );
}


export default Contact;
