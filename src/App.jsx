import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import ReferralPage from './pages/ReferralPage';



function App() {
    return (
        <Router>
            <Switch>
                <Route path="/referral" component={ReferralPage} />
            </Switch>
        </Router>
    );
}

export default App;
