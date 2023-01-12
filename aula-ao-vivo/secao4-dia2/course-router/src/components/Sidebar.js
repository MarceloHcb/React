import React from "react";
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    
    return (
      <>
        <section className={`dark-background`} />
        <section className={`Sidebar`}>
        
          <h4> <Link to={'/'}>Curso</Link> </h4>
          <nav>
          <Link to={'/calendar'}>Agenda</Link> 
          <Link to={'/live-lectures'}>Aulas ao Vivo</Link> 
          <Link to={'/trybe-talks'}>Trybe Talks</Link> 
          <Link to={'/solutions'}>Gabarito</Link> 
          <Link to={'/private'}>Área Privada</Link> 
          </nav>
        </section>
      </>
    );
  }
}

export default Sidebar;
