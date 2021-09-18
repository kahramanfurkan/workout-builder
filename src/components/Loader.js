import React from 'react'
import logo from '../logo.svg';

class Loader extends React.Component {
    render() {
        return (

            <div className="modal-logo-area text-center mt-5" >
                <img src={logo} id="Modal-logo" className="Modal-logo" alt="logo" />
                <p id="ModalLogoText">WorkoutBuilder</p>
            </div>


        )
    }
}

export default Loader;