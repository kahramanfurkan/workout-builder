import React from "react";
import { BrowserRouter, Route, Link } from 'react-router-dom';
import './App.css';
import Modal from 'react-modal';
import Loader from "./components/Loader";
import Navbar from "./components/Navbar";
import Home from './components/Home';
import Sidebar from "./components/Sidebar";
import ExerciseBuilder from "./components/ExerciseBuilder";
import ExerciseList from "./components/ExerciseList";
import Footer from "./components/Footer";
import Downloadable from "./components/Downloadable";




class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalLoaderOpen: false,
      exercises: []
    }
  }

  componentDidMount() {
    this.setState({ isModalLoaderOpen: true })

    setTimeout(() => {
      this.setState({ isModalLoaderOpen: false })
    }, 1500);

  }

  setExercises = (data) => {
    this.setState({
      exercises: [...this.state.exercises, data]
    })

    this.showToastSave();
  }

  deleteExercise = (id) => {
    const newExercises = this.state.exercises.filter(exercise => {
      return exercise.id !== id;
    })
    this.setState({
      exercises: newExercises
    })
    this.showToastDelete();

  }

  emptyExercises = () => {
    this.setState({
      exercises: []
    })
    this.showToastDelete()
  }


  goTop = () => {
    document.querySelector('.content').scrollTop = 0;
  }

  showToastDelete = () => {
    document.querySelector('#toastDelete').style.display = "inline-block";

    setTimeout(() => {
      document.querySelector('#toastDelete').style.display = "none";
    }, 1000);
  }

  showToastSave = () => {
    document.querySelector('#toastDelete').style.display = "none";
    document.querySelector('#toastSave').style.display = "inline-block";

    setTimeout(() => {
      document.querySelector('#toastSave').style.display = "none";
    }, 1000);
  }

  showToastDownload = () => {
    document.querySelector('#toastDownload').style.display = "inline-block";

    setTimeout(() => {
      document.querySelector('#toastDownload').style.display = "none";
    }, 2500);
  }

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="toast-area fixed-top text-right mt-5 mr-2">

            <span id="toastDelete" className="text-center bg-danger" 
            style={{ width: "150px", height: "60px", display: "none", padding: "1% 1% ",color:"white" }}>
              Silindi <i className="bi bi-x float-right"></i>
            </span>

            <span id="toastSave" className="text-center bg-success" 
            style={{ width: "150px", height: "60px", display: "none", padding: "1% 1%",color:"white" }}>
              Kaydedildi <i className="bi bi-x float-right"></i>
            </span>

            <span id="toastDownload" className="text-center bg-success" 
            style={{ width: "100vw", height: "60px", display: "none", padding: "1% 1%",color:"white" }}>
              {this.state.exercises.length} adet egzersiz indirilecek <i className="bi bi-x float-right"></i>
            </span>

          </div>

          <Modal
            id="modalLoader"
            isOpen={this.state.isModalLoaderOpen}
            style={{
              overlay: {
                position: 'fixed',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                backgroundColor: 'black',

              },
              content: {
                background: "black",
                top: 0,
                bot: 0,
                left: 0,
                right: 0,
                border: "5px solid black"
              }
            }}
          >
            <Loader />
          </Modal>

          <div className="row navigation">
            <Navbar
              exercises={this.state.exercises}
            />

          </div>

          <div className="row main">

            <div className="col-2 sidebar">
              <h5 className="text-center"><span className="badge badge-secondary"><Link to="/list">Tümünü gör ve düzenle({this.state.exercises.length})</Link> </span></h5>
              <Sidebar
                exercises={this.state.exercises}
              />
            </div>

            <div className="col-9  content bg-dark ">

              <Route exact path="/">
                <Home />
              </Route>

              <Route path="/builder">
                <ExerciseBuilder
                  exercises={this.state.exercises}
                  setExercises={this.setExercises}
                />
              </Route>

              <Route path="/list">

                <ExerciseList
                  exercises={this.state.exercises}
                  deleteExercise={this.deleteExercise}
                  emptyExercises={this.emptyExercises}
                  setExercises={this.setExercises}
                  download={this.download}

                />

                <div className="go-top-arrow text-center " onClick={this.goTop} style={{ color: "yellow", cursor: "pointer" }}>
                  <i className="bi bi-arrow-up"></i>
                  <p>Başa dön</p>
                </div>

              </Route>

              <Route path="/downloadable">
                <Downloadable
                exercises={this.state.exercises}
                showToastDownload={this.showToastDownload}
                />
                </Route>

            </div>

          </div>

          <div className="row footer fixed-bottom">
            <div className="col">
              <Footer />
            </div>
          </div>

        </div>
      </BrowserRouter>
    );
  }
}


export default App;
