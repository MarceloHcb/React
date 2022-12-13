import React from "react";
import { Link } from 'react-router-dom';

class Solutions extends React.Component {
  
  render() {
    const { arrayOfSolutions } = this.props;
    console.log(this.props)

    return (
      <section>
        <h1>Gabarito</h1>

        <ul>
          {arrayOfSolutions.map((solution) => (
            <li key={solution.title}> 
              <Link to={`/solution/${solution.url}`}>{solution.title}</Link>
            </li>
          ))}
        </ul>
      </section>
    );
  }
}

export default Solutions;
