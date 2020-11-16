import React, { Component } from 'react'
import { FiInstagram, FiLinkedin, FiGithub } from 'react-icons/fi'
import { IconContext } from 'react-icons'

import './styles.css'

export default class Main extends Component {
  render() {
    return (
      <div className="container">
        <div className="image">
          <img src="https://media-exp1.licdn.com/dms/image/C4D03AQFUN03ZR1GpVQ/profile-displayphoto-shrink_200_200/0?e=1609372800&v=beta&t=rRWvY0E1S1YsFwTw4JJ7ZY-dCWMz-2J2RFNRt2GwZPQ" alt="yasmin foto"/>
        </div>

        <div className="info">
          <strong>Yasmin Braga</strong>
          <p>Estudante de Engenharia Física na UFOPA</p>
          <p>Dev Frontend em formação</p>
        </div>

        <div className="social">
          <IconContext.Provider value={{ className: "link" }}>
            <a href="https://www.instagram.com/yasminbragat/?hl=pt-br">
              <FiInstagram size={36} color="#d7a09b"/>
            </a>
          </IconContext.Provider>

          <IconContext.Provider value={{ className: "link" }}>
            <a href="https://www.linkedin.com/in/yasmin-braga-71a635182/">
              <FiLinkedin size={36} color="#d7a09b"/>
            </a>
          </IconContext.Provider>

          <IconContext.Provider value={{ className: "link" }}>
            <a href="https://www.instagram.com/yasminbragat/?hl=pt-br">
              <FiGithub size={36} color="#d7a09b"/>
            </a>
          </IconContext.Provider>

        </div>
      </div>
    )
  }
}