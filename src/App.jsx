import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Referral from './Components/Referral';



function App() {
    return (
        <Switch>
            <Route path="/referral" component={Referral} />
        </Switch>
    );
}

export default App;
