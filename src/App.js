import { Router, Switch } from 'react-router-dom';

import DrawerCyberBugs from "./HOC/CyberbugsHOC/DrawerCyberBugs";
import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import LoginCyberBugs from './page/LoginCyberBugs/LoginCyberBugs';
import { createBrowserHistory } from "history";

import IndexCyberBugs from "./component/Cyberbugs/IndexCyberBugs";
import CreateProject from "./page/Cyberbugs/CreateProject/CreateProject";
import ProjectManagement from "./page/Cyberbugs/ProjectManagement/ProjectManagement";
import { CyberbugsTemplate } from "./templates/HomeTemplate/CyberbugsTemplate";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
        <DrawerCyberBugs />
      <Switch>
        <UserLoginTemplate exact path="/login" Component={LoginCyberBugs} />

        <CyberbugsTemplate exact path="/" Component={IndexCyberBugs}/>
        <CyberbugsTemplate exact path="/cyberbugs" Component={IndexCyberBugs}/>
        <CyberbugsTemplate exact path="/createproject" Component={CreateProject}/>
        <CyberbugsTemplate exact path="/projectmanagement" Component={ProjectManagement}/>

      </Switch>
      
    </Router>
  );
}

export default App;
