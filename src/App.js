import { Route, Switch } from 'react-router';
import './App.css';
import Component from './components/TopDanceSong';
import Artist from './pages/Artist';

function App() {
  return (
    <main>
      <Switch>
        <Route path="/" component={Component} exact />
        <Route path="/artist/5pKCCKE2ajJHZ9KAiaK11H" render={() => (
          <Artist id="5pKCCKE2ajJHZ9KAiaK11H"/>
        )} />
      </Switch>
    </main>
  );
}

export default App;
