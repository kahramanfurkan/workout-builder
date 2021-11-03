import React from 'react';
import Modal from 'react-modal';
import i18n from '../i18n';
Modal.setAppElement('#root');

class ExerciseBuilder extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      id: Math.random(),
      area: "Kol",
      name: "örnek: Bench Press",
      set: 2,
      repeat: 10,
      link: 'https://www.youtube.com/watch?v=vthMCtgVtFw',
      isModalErrorOpen: false
    }
  }


  onSubmitHandler = (e) => {
    const area = document.querySelector("#area");
    const name = document.querySelector("#name");
    const set = document.querySelector("#set");
    const repeat = document.querySelector("#repeat");
    e.preventDefault();

    if (area.value !== "" && name.value !== "" && set.value !== "" && repeat.value !== "") {
      this.props.setExercises(this.state);
      this.setState({ id: this.state.id + 1 });
      document.querySelector("form").reset();
    } else {
      this.setState({ isModalErrorOpen: true })
    }
    document.querySelector('.footer').style.display="block";
  }

  onChangeHandler = () => {
    this.setState({
      area: document.querySelector("#area").value,
      name: document.querySelector("#name").value,
      set: document.querySelector("#set").value,
      repeat: document.querySelector("#repeat").value,
      link: document.querySelector("#link").value,
    })
document.querySelector('.footer').style.display="none";
  }


  render() {
    return (
      <div>
        <h4 className="text-center">{i18n.t("builderheader")}</h4>
        <form onSubmit={this.onSubmitHandler} >
          <div className="form-group">
            <label htmlFor="area">{i18n.t("builderarea")}</label>
            <select className="form-control" id="area" onChange={this.onChangeHandler}>
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
            <input type="text" className="form-control" id="name" placeholder={i18n.t("example")+" Bench Press"} onChange={this.onChangeHandler} />
          </div>
          <div className="form-group">
            <label htmlFor="set">{i18n.t("builderset")}</label>
            <select className="form-control" id="set" onChange={this.onChangeHandler}>
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
          <input type="number" className="form-control" id="repeat" onChange={this.onChangeHandler} />



          <div className="form-group">
            <label htmlFor="link">{i18n.t("buildervideo")}</label>
            <input type="text" placeholder={i18n.t("example")+" https://www.youtube.com/watch?v=y070Cm71u50"} className="form-control" id="link" onChange={this.onChangeHandler} />
          </div>
          <div className="text-center ">
            <button type="submit" className="btn btn-primary">{i18n.t("builderaddbutton")}</button>
          </div>

        </form>

        <Modal
          id="modalError"
          isOpen={this.state.isModalErrorOpen}
          onRequestClose={() => this.setState({ isModalErrorOpen: false })}
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
              onClick={() => this.setState({ isModalErrorOpen: false })}
            ></i>
            <p>{i18n.t("modalerrorcontent")}</p>
            <p>{i18n.t("modalerrorcontent2")}</p>
          </div>
        </Modal>


      </div>
    )
  }
}

export default ExerciseBuilder;