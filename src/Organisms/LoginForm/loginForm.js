import React, { Component } from 'react';

import { styles } from './styles';
import { css } from 'aphrodite/no-important';

import Form from 'react-validation/build/form';
import Input from 'react-validation/build/input';
import Button from 'react-validation/build/button';
import { requiredPass, requiredEmail, email, passLength } from './validation';

import fire from '../../Firebase/authConfig';
import { ToastContainer, toast } from 'react-toastify';

import history from './../../history'; 

class LoginForm extends Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }

    signup = (e) => {
        e.preventDefault();
        fire.auth().createUserWithEmailAndPassword(this.state.email, this.state.password)
        .then((u)=>{})
        .then((u)=>{ history.push('/') })
        .catch((error) => {
            toast.error(error.message);
          });
      }

    login = (e) => {
        e.preventDefault();
        fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password)
        .then((u)=>{})
        .then((u)=>{history.push('/') })
        .catch((error)=> {
            toast.error(error.message);
        });
    }

    handleChange = (e) => {
        this.setState({ [e.target.name]: e.target.value });
    }

    render() {
        return (
            <div className={ css(styles.loginFormWrapper) }>
                <div className={ css(styles.loginFormContent) }>
                    <div className={ css(styles.loginFormHeader)}>
                        <span className={ css(styles.loginFormHeaderText)}>
                            Please, input your credentials
                        </span>
                    </div>
                    <Form className = { css(styles.formWrapper) }>
                        <div ref = {(element) => { this.formContainer = element } } className = { css(styles.inputContainer) }>
                            <Input
                                className = { css(styles.inputStyles) } 
                                value = { this.state.email } 
                                onChange = { this.handleChange }
                                name = "email"
                                placeholder = "Input email"
                                validations={[requiredEmail, email]}
                                ref = {(element) => { this.inputContainer = element } }
                            />
                            <Input 
                                className= { css(styles.inputStyles) }
                                value={this.state.password} 
                                onChange={this.handleChange}
                                type="password"
                                name="password"
                                placeholder=" Password minimum 8 symbols"
                                validations={[requiredPass, passLength]}
                            />    
                        </div>
                        <div className = { css(styles.LoginFormButtonsWrapper) }>
                            <Button
                                className = { css(styles.buttonStyles) } 
                                onClick={this.login}
                            >
                                Login
                            </Button>
                            <Button
                                className = { css(styles.buttonStyles) }
                                onClick={this.signup}
                            >
                                Signup
                            </Button>
                        </div>
                    </Form>
                </div>
                <ToastContainer
                    position="bottom-center"
                    autoClose={5000}
                    hideProgressBar
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnVisibilityChange
                    draggable
                    pauseOnHover
		        />
            </div>
        )
    }
};

export default LoginForm;
