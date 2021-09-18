import React from 'react'
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (

      <table className="table">
        <thead className="thead">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Egzersiz adı</th>
            <th scope="col">Bölge</th>
          </tr>
        </thead>
        <tbody>

          {
            this.props.exercises.length !== 0

              ?

              this.props.exercises.sort((a, b) => a.area > b.area ? 1 : -1).map(exercise => (

                <tr key={exercise.id}>

                  <td><i className="bi bi-chevron-compact-right"></i></td>
                  <td >{exercise.name}</td>
                  <td >{exercise.area}</td>

                </tr>

              ))
              :

              <tr>

                <td><i className="bi bi-emoji-frown" style={{ fontSize: "1rem" }}></i></td>
                <td>Henüz egzersiz eklememiş gibi görünüyorsunuz.</td>
                <td>
                  <Link to="/builder"><span className="badge badge-success">Hemen ekle</span></Link>
                </td>

              </tr>

          }

        </tbody>
      </table>

    )
  }
}

export default Sidebar;