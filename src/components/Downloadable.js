import React from 'react'
import download from 'downloadjs';
import i18n from '../i18n';

class Downloadable extends React.Component {


    componentDidMount() {
 
        if(this.props.exercises.length !== 0) {
            this.props.showToastDownload()
            const outerHTML = document.querySelector('.download-table').outerHTML;
    
            setTimeout(() => {
                download(new Blob([
                    "<html><head><meta charset='UTF-8'><meta name='viewport' content='width=device-width, initial-scale=1.0'></head><body>"
                    , outerHTML,
                    "</body></html>"]),
                    "myworkout.html",
                    "text/html");
            }, 1500);
        }else {
            this.props.showToastNoExercise()
        }

     

    }

    render() {
        return (
            <div className="download-table" style={{ padding: "0", margin: "0", color: "black" }} >
                <table style={{ width: "100%", textAlign: "center", borderCollapse: "collapse" }}>
                    <thead style={{ backgroundColor: "tomato" }}>
                        <th>{i18n.t("downloadablearea")}</th>
                        <th>{i18n.t("downloadablename")}</th>
                        <th>{i18n.t("downloadableset")}</th>
                        <th>{i18n.t("downloadablerepeat")}</th>
                        <th>{i18n.t("downloadablevideo")}</th>
                    </thead>
                    <tbody>
                        {
                            this.props.exercises.sort((a, b) => a.area > b.area ? 1 : -1).map(exercise => (
                                <tr key={exercise.id} style={{ backgroundColor: "white", border: "1px solid black" }}>

                                    <td >{exercise.area}</td>
                                    <td >{exercise.name}</td>
                                    <td >{exercise.set}</td>
                                    <td >{exercise.repeat}</td>
                                    <td >{exercise.link !== "" ?
                                        <a
                                            href={exercise.link}
                                            target="_blank"
                                            rel="noreferrer"
                                            style={{ textDecoration: "none", color: "green"}}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor"
                                                class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                                                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 
                                                0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 
                                                1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                                                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 
                                                0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
                                            </svg>
                                        </a>
                                        :
                                        <span>X</span>
                                    }
                                    </td>

                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}

export default Downloadable;