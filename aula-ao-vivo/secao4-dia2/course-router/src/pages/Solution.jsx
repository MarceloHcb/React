import React from "react";

class Solution extends React.Component {

  handleChange1 = () => {
    this.props.history.goBack();
  }

  handleChange2 = () => {
    this.props.history.push('/trybe-talks');
  }

  render() {
    console.log(this.props)

    const { solutionUrl } = this.props.match.params;

    return (
      <div>
        <h1>
          {solutionUrl}
        </h1>
        <button onClick={this.handleChange1}> Voltar anterior </button>
        <button onClick={this.handleChange2}> Voltar para uma página específica </button>
      </div>
    );
  }
}

export default Solution;
