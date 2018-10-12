import { StyleSheet } from 'aphrodite';
import { color } from './../../Styles/cssConstants';

export const styles = StyleSheet.create({
	loginFormWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '100%',
    },
    loginFormContent: {
        display: 'flex',
        flexDirection: 'column',
        overflow: 'hidden',
        width: '320px',
        height: '320px',
        border: `3px solid ${color.loginFormColor}`
    },
    loginFormHeader: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        height: '20%',
        backgroundColor: color.loginFormColor, 
    },
    loginFormHeaderText: {
        color: 'white',
        fontSize: '18px',
        fontWeight: 'bold',
    },
    formWrapper: {
        height: '80%',
        position: 'relative'
    },
    inputContainer: {
        height: '200px',
        position: 'relative'
    },
    errorMessagePassword: {
        position: 'absolute',
        top: '130px',
        left: '10px',
        color: 'red',
        fontSize: '12px',
        fontWeight: 'bold',
    },
    errorMessageEmail: {
        position: 'absolute',
        top: '55px',
        left: '10px',
        color: 'red',
        fontSize: '12px',
        fontWeight: 'bold',
    },
    inputStyles: {
        width: '300px',
        height: '35px',
        margin: '25px 10px 10px 10px',
        borderRadius: '10px',
        outline: 'none',
        color: color.loginFormColor,
    },
    LoginFormButtonsWrapper: {
        position: 'absolute',
        bottom: '20px',
        width: '100%',
        marginTop: '20px',
        display: 'flex',
        justifyContent: 'space-around',

    },
    buttonStyles: {
        width: '100px',
        height: '50px',
        backgroundColor: color.loginFormColor,
        borderRadius: '15px',
        outline: 'none',
        color: 'white',
        fontSize: '16px',
    },
});
