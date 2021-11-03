import React from 'react'
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import Joyride from 'react-joyride';
import arm from '../img/arm.jpg';
import shoulder from '../img/shoulder.jpg';
import chest from '../img/chest.jpg';
import back from '../img/back.jpg';
import leg from '../img/leg.jpg';
import abdominal from '../img/abdominal.jpg';
import i18n from '../i18n';
Modal.setAppElement('#root');




class ExerciseList extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isModalOneOpen: false,
            isModalTwoOpen: false,
            isModalDeleteAllOpen: false,
            currentExercise: {
                id: 1,
                area: "",
                name: "",
                set: 3,
                repeat: 10,
                link: 'https://www.youtube.com/watch?v=vthMCtgVtFw'
            },
            imageSource: "",
            iframeSource: "",
            steps: [
                {
                    target: '.content .list',
                    content: i18n.t('joyride1'),
                    placement: 'center',
                    disableBeacon: 'true'
                },
                {
                    target: '.list .bi-eye',
                    content: i18n.t('joyride2'),
                    placement: 'auto',
                    disableBeacon: 'true'
                },
                {
                    target: '.list .bi-pencil-square',
                    content: i18n.t('joyride3'),
                    placement: 'auto',
                    disableBeacon: 'true'
                },
                {
                    target: '.list .bi-trash',
                    content: i18n.t('joyride4'),
                    placement: 'auto',
                    disableBeacon: 'true'
                },
                {
                    target: '.functionals #download-button',
                    content:i18n.t('joyride5'),
                    placement: 'auto',
                    disableBeacon: 'true'
                },
                {
                    target: '.functionals',
                    content:i18n.t('joyride6'),
                    placement: 'auto',
                    disableBeacon: 'true'
                }
            ],
            locale: {
                back: i18n.t('localeback'),
                close: i18n.t('localeclose'),
                last: i18n.t('localelast'),
                next: i18n.t('localenext'),
                skip: i18n.t('localeskip'),
            },
            isJoyrideRunning: false,
            stepIndex: 0

        }
    }

    callback = (data) => {
        if (data.action === 'close' || data.action === 'skip' || data.type === 'tour:end') {
            this.setState({
                isJoyrideRunning: false
            })
        }
    }


    onViewHandler = (e) => {
        this.setState({
            currentExercise: {
                id: e.currentTarget.parentElement.children[0].innerText,
                area: e.currentTarget.parentElement.children[1].innerText,
                name: e.currentTarget.parentElement.children[2].innerText,
                set: e.currentTarget.parentElement.children[3].innerText,
                repeat: e.currentTarget.parentElement.children[4].innerText,
                link: e.currentTarget.parentElement.children[5].innerText
            },
            isModalOneOpen: true,


        })
        setTimeout(() => {
            this.imageSourceChanger()
            this.iframeSrcParser()
        }, 100)

    }

    onEditHandler = (e) => {
        this.setState({
            currentExercise: {
                id: e.currentTarget.parentElement.children[0].innerText,
                area: e.currentTarget.parentElement.children[1].innerText,
                name: e.currentTarget.parentElement.children[2].innerText,
                set: e.currentTarget.parentElement.children[3].innerText,
                repeat: e.currentTarget.parentElement.children[4].innerText,
                link: e.currentTarget.parentElement.children[5].innerText
            },
            isModalTwoOpen: true
        })


    }

    onEditChange = () => {
        this.setState({
            currentExercise: {
                id: Number(this.state.currentExercise.id),
                area: document.querySelector("#area-edit").value,
                name: document.querySelector("#name-edit").value,
                set: document.querySelector("#set-edit").value,
                repeat: document.querySelector("#repeat-edit").value,
                link: document.querySelector("#link-edit").value
            }
        })

    }

    onEditSave = (e) => {
        e.preventDefault();

        this.props.setExercises(this.state.currentExercise);
        this.setState({ isModalTwoOpen: false })



    }


    imageSourceChanger = () => {
        const source = this.state.currentExercise.area;
        if (source === "Kol" || source === 'Arm') {
            this.setState({ imageSource: arm })
        } else if (source === "Omuz" || source === 'Shoulder') {
            this.setState({ imageSource: shoulder })

        } else if (source === "Göğüs" || source === 'Chest') {
            this.setState({ imageSource: chest })

        } else if (source === "Sırt" || source === 'Back') {
            this.setState({ imageSource: back })

        } else if (source === "Bacak" || source === 'Leg') {
            this.setState({ imageSource: leg })

        } else if (source === "Karın" || source === 'Abdominal') {
            this.setState({ imageSource: abdominal })

        }
    }

    iframeSrcParser = () => {
        const source = this.state.currentExercise.link;
        if (source.includes('=')) {
            this.setState({
                iframeSource:
                    "https://www.youtube.com/embed/" + this.state.currentExercise.link.split('=').pop() + "?autoplay=1&mute=1"
            })
        } else {
            this.setState({
                iframeSource:
                    "https://www.youtube.com/embed/" + this.state.currentExercise.link.split('/').pop() + "?autoplay=1&mute=1"
            })
        }
    }

    runJoyride = () => {
        this.setState({ isJoyrideRunning: !this.state.isJoyrideRunning })
    }




    render() {
        const { steps } = this.state;
        return (

            <div className="list">

                <Joyride
                    steps={steps}
                    locale={this.state.locale}
                    run={this.state.isJoyrideRunning}
                    continuous={true}
                    showProgress={true}
                    showSkipButton={true}
                    disableScrollParentFix={true}
                    disableScrolling={true}
                    callback={this.callback}
                    disableOverlay={false}
                    styles={{
                        options: {
                            backgroundColor: '#e7d844',
                            textColor: 'black',
                            arrowColor: '#e7d844',
                            primaryColor: 'red',
                        }
                    }}
                />


                {/*Görüntüle buttonu tıklanınca açılacak modal */}
                <Modal
                    id="modalOne"
                    isOpen={this.state.isModalOneOpen}
                    onRequestClose={() => this.setState({ isModalOneOpen: false })}
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
                    <div className="row">

                        <div className="col-11 text-center ">
                            <h3 style={{ fontFamily: "'Klee One', cursive" }}>
                                {i18n.t("modalonexercisename")} {this.state.currentExercise.name}

                            </h3>


                            <iframe
                                title="ytVideo"
                                src={this.state.iframeSource}
                                width="280" height="144"
                                allowFullScreen={true}
                            >
                            </iframe>
                            <br />
                            <button
                                className="btn btn-success"
                                onClick={() => document.querySelector("#showLink").style.display = "block"}
                            >{i18n.t("modaloneshowvideolink")}
                            </button>
                            <br></br>
                            <a
                                id="showLink"
                                href={this.state.currentExercise.link}
                                style={{ display: "none" }}
                                target="_blank"
                                rel="noreferrer"
                            >{this.state.currentExercise.link}
                            </a>

                            <div className="container">
                                <div className="row">
                                    <div className="col border">{i18n.t("modalonemusclearea")}{this.state.currentExercise.area}</div>
                                    <div className="col border"> <img
                                        src={this.state.imageSource}
                                        alt="Kas_Grubu_Gorseli"
                                        width="200px"
                                    /></div>
                                    <div className="w-100"></div>
                                    <div className="col border"> {i18n.t("modaloneset")} {this.state.currentExercise.set}</div>
                                    <div className="col border">{i18n.t("modalonerepeat")} {this.state.currentExercise.repeat}</div>
                                </div>
                                <br></br>
                                <button
                                    className="btn btn-danger"
                                    onClick={() => this.setState({ isModalOneOpen: false })}
                                >{i18n.t("modaloneclosebutton")}</button>
                            </div>







                        </div>
                        <div className="col-1 ">
                            <i
                                title="Kapat"
                                className="bi bi-x-square-fill float-right"
                                onClick={() => this.setState({ isModalOneOpen: false })}
                                style={{ fontSize: "1rem" }}
                            ></i>
                        </div>

                    </div>


                </Modal>

                {/*Düzenle butonu tıklanınca açılacak modal*/}
                <Modal
                    id="modalTwo"
                    isOpen={this.state.isModalTwoOpen}
                    onRequestClose={() => this.setState({ isModalTwoOpen: false })}
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
                    <div className="row">
                        <div className="col-11">
                            <h2 className="text-center">{i18n.t("modaltwoheader")}</h2>
                            <form onSubmit={this.onEditSave}>
                                <div className="form-group">
                                    <label htmlFor="area">{i18n.t("builderarea")}</label>
                                    <select multiple={false} className="form-control" id="area-edit" value={this.state.currentExercise.area} onChange={this.onEditChange}>
                                        <option>{i18n.t("arm")}</option>
                                        <option>{i18n.t("shoulder")}</option>
                                        <option>{i18n.t("chest")}</option>
                                        <option>{i18n.t("back")}</option>
                                        <option>{i18n.t("leg")}</option>
                                        <option>{i18n.t("abdominal")}</option>
                                    </select>
                                </div>

                                <div className="form-group">
                                    <label htmlFor="name">{i18n.t("buildername")}</label>
                                    <input type="text" className="form-control" id="name-edit" value={this.state.currentExercise.name} onChange={this.onEditChange} />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="set">{i18n.t("builderset")}</label>
                                    <select multiple={false} className="form-control" id="set-edit" value={this.state.currentExercise.set} onChange={this.onEditChange}>
                                        <option>1</option>
                                        <option>2</option>
                                        <option>3</option>
                                        <option>4</option>
                                        <option>5</option>
                                        <option>6</option>
                                        <option>6+</option>
                                    </select>
                                </div>


                                <label htmlFor="repeat">{i18n.t("builderrepeat")} </label> <br />
                                <input type="number" className="form-control" id="repeat-edit" value={this.state.currentExercise.repeat} onChange={this.onEditChange} />



                                <div className="form-group">
                                    <label htmlFor="link">{i18n.t("buildervideo")}</label>
                                    <input type="text" placeholder="örn: https://youtu.be/vthMCtgVtFw?t=153" className="form-control" id="link-edit" value={this.state.currentExercise.link} onChange={this.onEditChange} />
                                </div>
                                <div className="text-center">
                                    <button type="submit" className="btn btn-primary" onClick={() => this.props.deleteExercise(Number(this.state.currentExercise.id))}>{i18n.t("modaltwosavechangebutton")}</button>
                                    <button type="button" style={{ marginLeft: "2px" }} className="btn btn-danger" onClick={() => this.setState({ isModalTwoOpen: false })}>{i18n.t("modaltwoclosebutton")}</button>

                                </div>

                            </form>

                        </div>
                        <div className="col-1">
                            <i
                                style={{ fontSize: "1rem" }}
                                title="Kapat"
                                className="bi bi-x-square-fill float-right"
                                onClick={() => this.setState({ isModalTwoOpen: false })}
                            ></i>

                        </div>

                    </div>


                </Modal>

                {/*Tümünü sil butonu tıklanınca açılacak modal */}
                <Modal
                    id="modalDeleteAll"
                    isOpen={this.state.isModalDeleteAllOpen}
                    onRequestClose={() => this.setState({ isModalDeleteAllOpen: false })}
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
                            onClick={() => this.setState({ isModalDeleteAllOpen: false })}
                            style={{ fontSize: "1rem" }}
                        ></i>
                        <p> {i18n.t("modaldeleteallcontent")}</p>

                        <button className="btn btn-danger" style={{ marginRight: "3%" }}>
                            <a
                                style={{ textDecoration: "none", color: "white" }}
                                onClick={() => this.setState({ isModalDeleteAllOpen: false })}
                            >{i18n.t("modaldeletealldenybutton")}</a>
                        </button>

                        <button className="btn btn-success" >
                            <Link
                                to="/list"
                                style={{ textDecoration: "none", color: "white" }}
                                onClick={() => { this.props.emptyExercises(); this.setState({ isModalDeleteAllOpen: false }) }}
                            >{i18n.t("modaldeleteallapprovebutton")}</Link>
                        </button>

                    </div>
                </Modal>

                <div className="functionals text-center mb-3">

                    <button class="btn bg-transparent border border-light" id="download-button">
                           <Link to="/downloadable" style={{color:'white',textDecoration:'none',padding:'0 8px'}}>{i18n.t("functionalsdownloadbutton")}<i className="bi bi-download" title="indir" style={{ fontSize: "1rem", color: "lightgreen",marginLeft:'5px' }}></i></Link>
                    </button>



                    <button class="btn bg-transparent border border-light"
                        onClick={this.props.saveToFirebase} id="save-button" style={{ display: this.props.saveButtonDisplay }}>
                        {i18n.t("functionalssavebutton")}  <i class="bi bi-bookmark-check" title="Kaydet" style={{ fontSize: "1rem", color: "#FCB515" }}></i>
                    </button>

                    <button onClick={() => this.runJoyride()} class="btn bg-transparent border border-light" style={{ marginRight: "0" }}>
                    {i18n.t("functionalshelpbutton")} <i class="bi bi-question-circle" title="Yardım al" style={{ fontSize: "1rem", color: "#00dcff" }}></i>
                    </button>


                </div>

                <table className="table table-dark table-sm table-hover mx-auto" >
                    <thead className="thead-light">
                        <tr>
                            <th scope="col" style={{ display: "none" }}>ID</th>
                            <th scope="col">{i18n.t("theadarea")}</th>
                            <th scope="col">{i18n.t("theadname")}</th>
                            <th scope="col">{i18n.t("theadset")} </th>
                            <th scope="col">{i18n.t("theadrepeat")} </th>
                            <th scope="col" style={{ display: "none" }}>Video Linki</th>
                            <th scope="col">{i18n.t("theadvideo")} </th>
                            <th scope="col"><i className="bi bi-eye" title="Görüntüle" style={{ fontSize: "1rem", color: "blue" }}></i></th>
                            <th scope="col"><i className="bi bi-pencil-square" title="Düzenle" style={{ fontSize: "1rem", color: "black" }}></i></th>
                            <th scope="col" onClick={() => this.setState({ isModalDeleteAllOpen: true })}>
                                <i className="bi bi-trash" title="Hepsini sil" style={{ fontSize: "1rem", color: "red" }}></i>
                            </th>


                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.props.exercises.sort((a, b) => a.area > b.area ? 1 : -1).map(exercise => (
                                <tr key={exercise.id}>
                                    <td style={{ display: "none" }}>{exercise.id}</td>
                                    <td >{exercise.area}</td>
                                    <td >{exercise.name}</td>
                                    <td >{exercise.set}</td>
                                    <td >{exercise.repeat}</td>
                                    <td style={{ display: "none" }} >{exercise.link}</td>
                                    <td >{exercise.link !== "" ? <i className="bi bi-check"></i> : <i className="bi bi-x"></i>}</td>
                                    <td onClick={this.onViewHandler}>
                                        <i className="bi bi-eye" title="Görüntüle" style={{ fontSize: "1rem", color: "white" }}></i>
                                    </td>

                                    <td onClick={this.onEditHandler}>
                                        <i className="bi bi-pencil-square" title="Düzenle" style={{ fontSize: "1rem", color: "white" }}></i>
                                    </td>

                                    <td onClick={() => this.props.deleteExercise(exercise.id)}>
                                        <i className="bi bi-trash" title="Sil" style={{ fontSize: "1rem", color: "white" }}></i>
                                    </td>


                                </tr>
                            ))
                        }


                        <Link
                            to="/builder"
                            style={{ textDecoration: "none", color: "yellow" }}
                        >{i18n.t("addnew")}</Link>

                    </tbody>
                </table>
            </div>
        )
    }
}

export default ExerciseList;