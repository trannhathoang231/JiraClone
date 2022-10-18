import { BrowserRouter, Route, Router, Switch } from "react-router-dom";

import { UserLoginTemplate } from './templates/HomeTemplate/UserLoginTemplate';
import { createBrowserHistory } from "history";
import IndexCyberBugs from "./component/Cyberbugs/IndexCyberBugs";
import DrawerCyberBugs from "./HOC/CyberbugsHOC/DrawerCyberBugs";
import LoginCyberBugs from './page/LoginCyberBugs/LoginCyberBugs';

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

        <CyberbugsTemplate exact path="/" Component={ProjectManagement}/>
        {/* <CyberbugsTemplate exact path="/cyberbugs" Component={IndexCyberBugs}/> */}
        <CyberbugsTemplate exact path="/createproject" Component={CreateProject}/>
        <CyberbugsTemplate exact path="/projectmanagement" Component={ProjectManagement}/>
        <CyberbugsTemplate exact path="/projectdetail/:projectId" Component={IndexCyberBugs}/>

      </Switch>

    </Router>
  );
}

export default App;
