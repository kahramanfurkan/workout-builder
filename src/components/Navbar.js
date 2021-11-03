import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../Navbar.css';
import Modal from 'react-modal';
import auth from '../Firebase';
import { signOut, updatePassword } from "firebase/auth";
import i18n from '../i18n';
import engflag from '../img/engflag.png';
import trflag from '../img/trflag.png';
import modalflagen from '../img/modalflagen.png';
import modalflagtr from '../img/modalflagtr.png';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalAccountOpen: false,
            isModalLeaveWarningOpen: false,
            ismodalEngOpen: false,
            ismodalTrOpen: false,
        }
    }

    logOut = () => {
        signOut(auth);
        window.location.href = "/";
    }

    goBack = () => {
        this.setState({ isModalLeaveWarningOpen: false })
    }

    changePassword = (e) => {
        e.preventDefault();

        const user = auth.currentUser;
        const accountpw = document.querySelector('#accountpw');
        const accountrepw = document.querySelector('#accountrepw');
        const errorarea = document.querySelector('.account-error-area');


        if (accountpw.value !== "" && accountpw.value === accountrepw.value) {

            updatePassword(user, accountpw.value).then(() => {
                this.setState({ isModalAccountOpen: false })
                this.props.showToastChangePassword()
            }).catch((error) => {
                errorarea.innerHTML = i18n.t("changepassworderror");
            });


        } else {

            errorarea.innerHTML = "Girdiğiniz şifreler aynı olmalıdır !"
        }
    }

    setLangTR = () => {
        this.props.languageChanger("tr");
        this.setState({ismodalTrOpen:true})

        setTimeout(() => {
            this.setState({ismodalTrOpen:false})
        }, 500);


    }

    setLangEN = () => {
        this.props.languageChanger("en");
        this.setState({ismodalEngOpen:true})

        setTimeout(() => {
            this.setState({ismodalEngOpen:false})
        }, 500);
    }



    render() {
        return (
            <nav className="navbar navbar-inverse text-center">

                <Modal
                    id="modalEng"
                    isOpen={this.state.ismodalEngOpen}
                    style={{
                        content: {
                            background: "transparent",
                            border:"none",
                            top: '10%',
                            left: '5%',
                            right: '5%',
                            bottom: '10%'
                        }
                    }}
                >
                      <div className="text-center">
                      <img id="modalflagen" src={modalflagen}/>
                    </div>
                </Modal>

                <Modal
                    id="modalTr"
                    isOpen={this.state.ismodalTrOpen}
                    style={{
                        content: {
                            background: "transparent",
                            border:"none",
                            top: '10%',
                            left: '5%',
                            right: '5%',
                            bottom: '10%',
                        }
                    }}
                >
                    <div className="text-center">
                    <img id="modalflagtr" src={modalflagtr}/>
                    </div>
                </Modal>

                <Modal
                    id="modalAccount"
                    isOpen={this.state.isModalAccountOpen}
                    onRequestClose={() => this.setState({ isModalAccountOpen: false })}
                    style={{
                        content: {
                            background: "white",
                            top: '10%',
                            left: '5%',
                            right: '5%',
                            bottom: '10%'
                        }
                    }}
                >
                    <div className="text-center">

                        <i
                            title="Kapat"
                            className="bi bi-x-square-fill float-right"
                            onClick={() => this.setState({ isModalAccountOpen: false })}
                            style={{ fontSize: "1rem" }}
                        ></i>

                        <h2 className="text-center">{i18n.t("modalaccountheader")}</h2>


                        <div className="text-center bg-danger account-error-area"></div>

                        <form onSubmit={this.changePassword}>
                            <label htmlFor="accountname">{i18n.t("modalaccountnamesurname")}</label>
                            <input id="accountname" className="form-control" value={this.props.currentUserDisplayName} readOnly />

                            <label htmlFor="accountemail">{i18n.t("modalaccountemail")}</label>
                            <input id="accountemail" className="form-control" value={this.props.currentUserEmail} readOnly />

                            <label htmlFor="accountpw">{i18n.t("modalaccountnewpassword")}</label>
                            <input id="accountpw" className="form-control" type="password" placeholder={i18n.t("atleastsixchars")} />

                            <label htmlFor="accountpw">{i18n.t("modalaccountnewpasswordagaing")}</label>
                            <input id="accountrepw" className="form-control" type="password" placeholder={i18n.t("retypepassword")} />

                            <br />
                            <button type="submit" className="btn btn-primary">{i18n.t("modalaccountchangepassword")}</button>
                        </form>

                    </div>
                </Modal>

                <Modal
                    id="modalLeaveWarning"
                    isOpen={this.state.isModalLeaveWarningOpen}
                    onRequestClose={() => this.setState({ isModalLeaveWarningOpen: false })}
                    style={{
                        content: {
                            background: "white",
                            top: '20%',
                            left: '5%',
                            right: '5%',
                            bottom: '20%'
                        }
                    }}
                >
                    <div className="text-center">
                        <h2>{i18n.t("modalleavewarningheader")}</h2>
                        <p>
                            {i18n.t("modalleavewarningcontent1")}
                            <span>
                                <button class="btn btn-dark border border-light mx-2">
                                    {i18n.t("modalleavewarningsavebutton")}  <i class="bi bi-bookmark-check" title="Kaydet" style={{ fontSize: "1rem", color: "#FCB515" }}></i>
                                </button>
                            </span>
                            {i18n.t("modalleavewarningcontent2")}
                        </p>
                        <button className="btn btn-danger mr-5" onClick={this.logOut}>{i18n.t("modalleavewarningexitbutton")}</button>

                        <button className="btn btn-primary" onClick={this.goBack}>{i18n.t("modalleavewarninggoback")}</button>
                    </div>
                </Modal>

                <div className="container-fluid">
                    <div className="logo-area text-center">
                        <img src={logo} id="Nav-logo" className="Nav-logo" alt="logo" />
                        <p id="NavLogoText"><Link to="/">WorkoutBuilder</Link></p>
                    </div>

                    <div className="motto-area">
                        <p id="mottoText">{i18n.t("mottotext")}</p>
                    </div>

                    <div className="language-switch-area">
                        <img src={engflag} alt="engflag" onClick={this.setLangEN} />
                        <img src={trflag} alt="trflag" onClick={this.setLangTR} />
                    </div>

                    <div className="links-area">


                        <Link to="/" className="nav-item nav-link" >{i18n.t("linksareahomepage")}</Link>
                        <Link to="/builder" id="build-exercise" className="nav-item nav-link" >{i18n.t("linksareabuildexercise")}</Link >
                        <Link to="/list" className="nav-item nav-link" >{i18n.t("linksareaexerciselist")}({this.props.exercises.length})</Link >
                        <Link to="/register" id="register-button" className="nav-item nav-link " >{i18n.t("linksarearegister")}</Link>
                        <Link to="/login" id="login-button" className="nav-item nav-link " >{i18n.t("linksarealogin")}</Link>
                        <Link to="" onClick={() => this.setState({ isModalAccountOpen: true })} id="user-profile" className="nav-item nav-link "
                        ><i className="bi bi-person" style={{ fontSize: "1rem", color: "#e7d844" }}></i></Link>
                        <Link to="" onClick={() => this.setState({ isModalLeaveWarningOpen: true })} id="logout-button" className="nav-item nav-link " >{i18n.t("linksarealogout")}</Link>


                    </div>
                </div>
            </nav>


        )
    }
}

export default Navbar;