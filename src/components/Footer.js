import React from 'react'

class Footer extends React.Component {
    render() {
        return (
            <footer className="d-flex flex-row align-items-center justify-content-center">
                <span>Created by Furkan Kahraman </span>
                <a href="https://www.linkedin.com/in/furkan-kahraman-377889208/" target="_blank" rel="noreferrer" >
                    <i
                        className="bi bi-linkedin"
                        style={{ fontSize: "2rem" }}
                        title="linkedIn"
                    ></i>
                </a>

                <a href="https://github.com/kahramanfurkan" target="_blank" rel="noreferrer">
                    <i
                        className="bi bi-github"
                        style={{ fontSize: "2rem" }}
                        title="github"
                    ></i>
                </a>
            </footer>
        )
    }
}

export default Footer;