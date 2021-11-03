import React from 'react'
import { Link } from 'react-router-dom';
import auth from '../Firebase';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import i18n from '../i18n';





class Register extends React.Component {


    createUser = (e) => {
        e.preventDefault();
        const name = document.querySelector('#name');
        const surname = document.querySelector('#surname');
        const email = document.querySelector('#e-mail');
        const password = document.querySelector('#password');
        const passwordcheck = document.querySelector('#password-check');
        const errorarea = document.querySelector('.error-area');



        if (password.value === passwordcheck.value) {
            createUserWithEmailAndPassword(auth, email.value, password.value)
                .then(() => {
                    updateProfile(auth.currentUser, { displayName: name.value + " " + surname.value })
                    window.location.href = "/"
                })
                .catch((error) => {
              errorarea.innerHTML=i18n.t("registererror");
                })
        } else {
            errorarea.innerHTML = "Girdiğiniz şifreler aynı olmalıdır!"
        }


    }

    render() {
        return (
            <div>
                <h4 className="text-center">{i18n.t("registerheader")}</h4>
                <div className="text-center bg-danger error-area"></div>

                <form onSubmit={this.createUser}>
                    <div className="form-group">
                        <label htmlFor="name">{i18n.t("registername")}</label>
                        <input type="text" className="form-control" id="name" aria-describedby="" placeholder="Furkan" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="surname">{i18n.t("registersurname")}</label>
                        <input type="text" className="form-control" id="surname" aria-describedby="" placeholder="Kahraman" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="e-mail">{i18n.t("registeremail")}</label>
                        <input type="email" className="form-control" id="e-mail" aria-describedby="emailHelp" placeholder="fk@workoutbuilder.com" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">{i18n.t("registerpassword")}</label>
                        <input type="password" className="form-control" id="password" placeholder="********" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="password">{i18n.t("registerrepassword")}</label>
                        <input type="password" className="form-control" id="password-check" placeholder="********" required />
                    </div>

                    <div className="text-center">
                        <button type="submit" className="btn btn-primary">{i18n.t("registersubmitbutton")}</button>

                        <div className="mt-3">
                            <p>{i18n.t("registeralreadyhave")}</p>
                            <Link to="/login" type="button" className="text-warning text-decoration-none">{i18n.t("registerlogin")}</Link>
                        </div>

                    </div>
                </form>
            </div>
        )
    }
}

export default Register;

