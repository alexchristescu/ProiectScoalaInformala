import React, { Component } from 'react';
import { Button, Form, Label, FormGroup, Input } from 'reactstrap';
import  emailjs from 'emailjs-com';


class Contact extends Component {
    state = {
        name: '',
        email: '',
        subject: '',
        message: '',
    }
    handleSubmit(e) {
        e.preventDefault()
        const { name, email, subject, message } = this.state
        let templateParams = {
            from_name: email,
            to_name: "alex.christescu@gmail.com",
            subject: subject,
            message_html: message,
        }
        emailjs.send(
            'gmail',
            'template_Rg9asLTD',
            templateParams,
            'user_vkeb5FtrJi7qHB5mfFMSR'
        )
        this.resetForm()
    }
    resetForm() {
        this.setState({
            name: '',
            email: '',
            subject: '',
            message: '',
        })
    }
    handleChange = (param, e) => {
        this.setState({ [param]: e.target.value })
    }

    render() {

        if(this.props.data){
            var name = this.props.data.name;
            var street = this.props.data.address.street;
            var city = this.props.data.address.city;
            var state = this.props.data.address.state;
            var zip = this.props.data.address.zip;
            var phone= this.props.data.phone;
            var email = this.props.data.email;
            var message = this.props.data.contactmessage;
        }

        return (
            <section id="contact">

                <div className="row section-head">

                    <div className="two columns header-col">

                        <h1><span>Get In Touch.</span></h1>

                    </div>

                    <div className="ten columns">

                        <p className="lead">{message}</p>

                    </div>

                </div>

                <div className="row">
                    <div className="eight columns">

                        <Form  id="contactForm" name="contactForm" onSubmit={this.handleSubmit.bind(this)}>
                            <fieldset>

                                <FormGroup controlId="formBasicEmail">
                                    <Label className="text-muted">Email address</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        value={this.state.email}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'email')}
                                        placeholder="Enter email"
                                    />
                                </FormGroup>

                                <FormGroup controlId="formBasicName">
                                    <Label className="text-muted">Name</Label>
                                    <Input
                                        type="text"
                                        name="name"
                                        value={this.state.name}
                                        className="text-primary"
                                        onChange={this.handleChange.bind(this, 'name')}
                                        placeholder="Name"
                                    />
                                </FormGroup>

                                <FormGroup controlId="formBasicSubject">
                                    <Label className="text-muted">Subject</Label>
                                    <Input
                                        type="text"
                                        name="subject"
                                        className="text-primary"
                                        value={this.state.subject}
                                        onChange={this.handleChange.bind(this, 'subject')}
                                        placeholder="Subject"
                                    />
                                </FormGroup>

                                <FormGroup controlId="formBasicMessage">
                                    <Label className="text-muted">Message</Label>
                                    <Input
                                        type="textarea"
                                        name="message"
                                        className="text-primary"
                                        value={this.state.message}
                                        onChange={this.handleChange.bind(this, 'message')}
                                    />
                                </FormGroup>

                                <div>
                                    <Button style={{alignItems: "center", justifyContent: "center", display: "flex"}}   variant="primary" type="submit">Submit</Button>

                                </div>
                            </fieldset>
                        </Form>


                    </div>


                    <aside className="four columns footer-widgets">
                        <div className="widget widget_contact">

                            <h4>Address and Phone</h4>
                            <p className="address">
                                {name}<br />
                                {street} <br />
                                {city}, {state} {zip}<br />
                                <span>{phone}</span>
                            </p>
                        </div>


                    </aside>
                </div>
            </section>
        );
    }
}

export default Contact;
