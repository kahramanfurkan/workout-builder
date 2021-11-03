import React from 'react'
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import auth from '../Firebase';
import {signInWithEmailAndPassword,sendPasswordResetEmail} from "firebase/auth";
import i18n from '../i18n';



class Login extends React.Component {
    constructor(props){
        super(props)

        this.state = {
            isModalResetPasswordOpen : false
        }
    }

    login = (e) => {
    e.preventDefault();

    const email= document.querySelector('#e-mail');
    const password =document.querySelector('#password');
    const errorarea=document.querySelector('.error-area'); 

    signInWithEmailAndPassword(auth,email.value,password.value)
    .then(()=>{
        window.location.href="/"
    })
    .catch((error)=>{
        errorarea.innerHTML=i18n.t("loginerror");
        })

    } 

    resetPassword = (e) => {
        e.preventDefault()
        const resetemail = document.querySelector('#resetemail');
        const errorarea=document.querySelector('.reset-error-area'); 
        

        sendPasswordResetEmail(auth, resetemail.value)
 .then(() => {
    this.setState({isModalResetPasswordOpen:false}); 
    this.props.showToastResetPassword();
  })
  .catch((error) => {
 errorarea.innerHTML=i18n.t("loginresetpassword")
  });


    }

    render() {
        return (
            <div>
                <Modal
                    id="modalResetPassword"
                    isOpen={this.state.isModalResetPasswordOpen}
                    onRequestClose={() => this.setState({ isModalResetPasswordOpen:false })}
                    style={{
                        content: {
                            background: "white",
                            top: '30%',
                            left: '10%',
                            right: '10%',
                            bottom: '30%'
                        }
                    }}
                >
                    <div className="text-center">

                    <i
                            title="Kapat"
                            className="bi bi-x-square-fill float-right"
                            onClick={() => this.setState({ isModalResetPasswordOpen: false })}
                            style={{ fontSize: "1rem" }}
                        ></i>

                    <h2 className="text-center">{i18n.t("forgotheader")}</h2>
                    <p>{i18n.t("forgotcontent")}</p>

                    <div className="text-center bg-danger reset-error-area"></div>
                    
                    <form onSubmit={this.resetPassword}>
                    <input id="resetemail" className="form-control" type="email" placeholder="fk@workoutbuilder.com" required/>
                    <br/>
                    <button type="submit" className="btn btn-primary">{i18n.t("forgotsubmitbutton")}</button>
                    </form>

                    </div>
                </Modal>

                <h4 className="text-center">{i18n.t("loginheader")}</h4>
                <div className="text-center bg-danger error-area"></div>

                <form onSubmit={this.login}>
                <div className="form-group">
                        <label htmlFor="e-mail">{i18n.t("loginemail")}</label>
                        <input type="email" className="form-control" id="e-mail" aria-describedby="emailHelp" placeholder="fk@workoutbuilder.com" required/>
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">{i18n.t("loginpassword")}</label>
                        <input type="password" className="form-control" id="password" placeholder="********" required/>
                    </div>

                    <div className="text-center">
                    <button type="submit" className="btn btn-success">{i18n.t("loginsubmitbutton")}</button>

                    <div className="mt-3">
                    <p>{i18n.t("loginnohaveaccount")}</p>
                    <Link to="/register"  className="text-warning text-decoration-none">{i18n.t("logincreateaccount")}</Link>
                    <br/>
                    <a style={{cursor:"pointer"}} onClick={()=> this.setState({isModalResetPasswordOpen:true})} className="text-danger text-decoration-none">
                        {i18n.t("loginforgotpassword")}</a>
                    
                    
                    </div>
                    </div>
                    </form>
            </div>
        )
    }
}

export default Login;
