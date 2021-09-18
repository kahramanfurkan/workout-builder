import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../logo.svg';
import '../Navbar.css';


class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-inverse text-center">

                <div className="container-fluid">
                    <div className="logo-area text-center">
                        <img src={logo} id="Nav-logo" className="Nav-logo" alt="logo" />
                        <p id="NavLogoText"><Link to="/">WorkoutBuilder</Link></p>
                    </div>

                    <div className="motto-area">
                        <p id="mottoText">Kendi egzersiz programını oluştur...</p>
                    </div>

                    <div className="links-area">

                        <Link to="/" className="nav-item nav-link" >Anasayfa</Link>
                        <Link to="/builder" id="build-exercise" className="nav-item nav-link" >Egzersiz Oluştur</Link >
                        <Link to="/list" className="nav-item nav-link" >Egzersiz Listem({this.props.exercises.length})</Link >

                    </div>
                </div>
            </nav>


        )
    }
}

export default Navbar;