import React from 'react';
import Navbar from '../Navbar/Navbar';
import { BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom';
import LogIn from '../LogIn/LogIn';
import PlanTrip from '../PlanTrip/PlanTrip'

function Homepage() {
    return (
       <Router>
            <div>
                <Navbar/>
            </div>
            
            {/* <Route path="/signup" component={SignUp}/> */}
            <Switch>
                <Route path="/login">
                    <LogIn/>
                </Route>
                <Route path="/planTrip">
                    <PlanTrip/>
                </Route>

            </Switch>
       </Router> 

    )

}

export default Homepage;