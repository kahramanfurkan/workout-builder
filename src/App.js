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
import Register from './components/Register';
import Login from './components/Login';
import auth from "./Firebase";
import { db } from "./Firebase";
import {onAuthStateChanged } from "firebase/auth";
import { ref, set,child, get } from "firebase/database";
import i18n from "./i18n";


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalLoaderOpen: false,
      exercises: [],
      currentUserId:null,
      currentUserDisplayName:"",
      currentUserEmail:"",
      saveButtonDisplay:"none",
      lang:"tr",
    }
  }

  componentDidMount() {
    this.setState({ isModalLoaderOpen: true })

    setTimeout(() => {
      this.setState({ isModalLoaderOpen: false })
    }, 1500);

    onAuthStateChanged(auth,(user)=>{
    if(user){
      document.querySelector('#login-button').style.display="none";
      document.querySelector('#register-button').style.display="none";
      //document.querySelector('#user-profile').innerHTML=user.displayName;
      this.setState({currentUserDisplayName:user.displayName});
      this.setState({currentUserEmail:user.email});
      this.setState({currentUserId:user.uid});
      this.setState({saveButtonDisplay:"table-cell"});

      //firebase database reference
      const dbRef = ref(db);

      get(child(dbRef,`users/${this.state.currentUserId}/exercises`))
      .then((snapshot)=>{
        if(snapshot.exists()){
          console.log(snapshot.val())
          this.setState({exercises:snapshot.val()})
        }else {
          console.log("NoData");
        }
      }).catch((error)=>{
        console.log(error.message);
      })
      
      
    }else{
      document.querySelector('#logout-button').style.display="none";
      document.querySelector('#user-profile').style.display="none";
    }
    })
   
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

  showToastResetPassword = () => {
    document.querySelector('#toastResetPassword').style.display = "inline-block";

    setTimeout(() => {
      document.querySelector('#toastResetPassword').style.display = "none";
    }, 2500);
  }

  showToastChangePassword = () => {
    document.querySelector('#toastChangePassword').style.display = "inline-block";

    setTimeout(() => {
      document.querySelector('#toastChangePassword').style.display = "none";
    }, 2500);
  }

  showToastNoExercise = () => {
    document.querySelector('#toastNoExercise').style.display = "inline-block";

    setTimeout(() => {
      document.querySelector('#toastNoExercise').style.display = "none";
    }, 2500);
  }

  saveToFirebase = () =>{
      set(ref(db,'users/'+this.state.currentUserId+'/exercises'),this.state.exercises);
      this.showToastSave();
  }

  languageChanger = (lang) => {
    let newLang =lang;
    this.setState({lang : newLang});
    i18n.changeLanguage(newLang);
}

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="toast-area fixed-top text-right mt-5 mr-2">

            <span id="toastDelete" className="text-center bg-danger" 
            style={{ width: "150px", height: "60px", display: "none", padding: "1% 1% ",color:"white" }}>
              {i18n.t("toastdeleted")} <i className="bi bi-x float-right"></i>
            </span>

            <span id="toastSave" className="text-center bg-success" 
            style={{ width: "150px", height: "60px", display: "none", padding: "1% 1%",color:"white" }}>
              {i18n.t("toastsaved")} <i className="bi bi-x float-right"></i>
            </span>

            <span id="toastDownload" className="text-center bg-success" 
            style={{ width: "100vw", height: "60px", display: "none", padding: "1% 1%",color:"white" }}>
              {this.state.exercises.length} {i18n.t("toastdownload")} <i className="bi bi-x float-right"></i>
            </span>

            <span id="toastNoExercise" className="text-center bg-danger" 
            style={{ width: "100vw", height: "60px", display: "none", padding: "1% 1%",color:"white" }}>
              {i18n.t("toastnoexercise")} <i className="bi bi-x float-right"></i>
            </span>

            <span id="toastResetPassword" className="text-center bg-success" 
            style={{ width: "100vw", height: "60px", display: "none", padding: "1% 1%",color:"white" }}>
             {i18n.t("toastresetpassword")}<i className="bi bi-x float-right"></i>
            </span>

            <span id="toastChangePassword" className="text-center bg-success" 
            style={{ width: "100vw", height: "60px", display: "none", padding: "1% 1%",color:"white" }}>
             {i18n.t("toastchangepassword")}<i className="bi bi-x float-right"></i>
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
              currentUserDisplayName={this.state.currentUserDisplayName}
              currentUserEmail={this.state.currentUserEmail}
              showToastChangePassword={this.showToastChangePassword}
              languageChanger={this.languageChanger}
            />

          </div>

          <div className="row main">

            <div className="col-2 sidebar">
              <h5 className="text-center"><span className="badge badge-secondary"><Link to="/list">{i18n.t("seeall")}({this.state.exercises.length})</Link> </span></h5>
              <Sidebar
                exercises={this.state.exercises}
              />
            </div>

            <div className="col-9  content bg-dark ">

              <Route exact path="/">
                <Home
                lang={this.state.lang}
                />
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
                  saveButtonDisplay={this.state.saveButtonDisplay}
                  saveToFirebase={this.saveToFirebase}

                />

                <div className="go-top-arrow text-center " onClick={this.goTop} style={{ color: "yellow", cursor: "pointer" }}>
                  <i className="bi bi-arrow-up"></i>
                  <p>{i18n.t("gotop")}</p>
                </div>
              </Route>

              <Route path="/downloadable">
                <Downloadable
                exercises={this.state.exercises}
                showToastDownload={this.showToastDownload}
                showToastNoExercise={this.showToastNoExercise}
                />
                </Route>

                <Route path="/register">
                <Register
                />
                </Route>

                <Route path="/login">
                <Login
                showToastResetPassword={this.showToastResetPassword}
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
