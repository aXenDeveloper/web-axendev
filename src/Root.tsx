import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Layout from './components/Layout';
import ErrorView from './views/ErrorView';
import HomeView from './views/HomeView';

const Root = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path="/" component={HomeView} />
          <Route component={ErrorView} />
        </Switch>
      </Layout>
    </Router>
  );
};

export default Root;
