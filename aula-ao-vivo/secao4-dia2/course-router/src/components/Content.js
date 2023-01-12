import React from "react";
import { Route, Switch, Redirect } from 'react-router-dom';
import LiveLectures from "../pages/LiveLectures";
import Calendar from '../pages/Calendar';
import TrybeTalks from '../pages/TrybeTalks';
import NotFound from '../pages/NotFound';
import Solutions from "../pages/Solutions";
import Solution from '../pages/Solution';
import Private from '../pages/Private';

class Content extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      solutions: [
        {
          url: "hello-world-no-react",
          title: "11.1 - Hello World no React"
        },
        {
          url: "componentes-no-react",
          title: "11.2 - Componentes no React"
        },
        {
          url: "componentes-com-estado-e-evento",
          title: "12.1 - Componentes com estado e evento"
        }
      ]
    };
  }

  render() {
    const { solutions } = this.state;
    const loginOk = false;

    return (
      <main className="Content">
        <Switch>
          <Route exact path={'/'} component={LiveLectures} />
          <Route exact path={'/calendar'} component={Calendar} />
          <Route exact path={'/live-lectures'} component={LiveLectures} />
          <Route exact path={'/trybe-talks'} component={TrybeTalks} />
          <Route exact path={'/solutions'} render={(props) => <Solutions {...props} arrayOfSolutions={solutions} />} />

          <Route exact path={'/solution/:solutionUrl'} component={Solution} />

          <Route path={'/private'} render={() => (
            loginOk ? <Private /> : <Redirect to='/calendar' />
          )} />


          <Route path="*" component={NotFound} />
        </Switch>
      </main>
    );
  }
}

export default Content;
