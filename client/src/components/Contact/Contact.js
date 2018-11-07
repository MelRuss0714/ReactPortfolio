import React from 'react';
import './Contact.css';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import axios from 'axios';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';

export default class Contact extends React.Component {
    constructor(){
        super()

        this.state = {
            name: '',
            email: '',
            message: '',
            file: ''
        }
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }
handleChange = e => {
this.setState({[e.target.name]: e.target.value})
}
async handleSubmit(e) {
    e.preventDefault()
    const { name, email, message, file} = this.state

    const form = await axios.post('/api/form', {
        name,
        email,
        message,
        file
    })
}

    render() {
        return (
            <div className='Contact'>
                <Navbar />
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for="name">Name</Label>
                        <Input
                            type="text"
                            name="name"
                            id="name"
                            placeholder="Name"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="email">Email</Label>
                        <Input
                            type="email"
                            name="email"
                            id="email"
                            placeholder="Email"
                            onChange={this.handleChange} />
                    </FormGroup>

                    <FormGroup>
                        <Label for="exampleText">Message</Label>
                        <Input
                            type="textarea"
                            name="text"
                            id="message"
                            onChange={this.handleChange} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleFile">File</Label>
                        <Input
                            type="file"
                            name="file"
                            id="file" />
                    </FormGroup>
                    <Button>Submit</Button>
                </Form>
                <Footer />
            </div>
        );
    }
}