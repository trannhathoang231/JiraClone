import { BrowserRouter, Route, Switch } from "react-router-dom";
import IndexCyberBugs from "./component/Cyberbugs/IndexCyberBugs";
import DrawerCyberBugs from "./HOC/CyberbugsHOC/DrawerCyberBugs";
import CreateProject from "./page/Cyberbugs/CreateProject/CreateProject";
import ProjectManagement from "./page/Cyberbugs/ProjectManagement/ProjectManagement";
import { CyberbugsTemplate } from "./templates/HomeTemplate/CyberbugsTemplate";

function App() {
  return (
    <BrowserRouter>
      <DrawerCyberBugs />

      <Switch>
        <CyberbugsTemplate exact path="/" Component={IndexCyberBugs}/>
        <CyberbugsTemplate exact path="/cyberbugs" Component={IndexCyberBugs}/>
        <CyberbugsTemplate exact path="/createproject" Component={CreateProject}/>
        <CyberbugsTemplate exact path="/projectmanagement" Component={ProjectManagement}/>
        
      </Switch>

    </BrowserRouter>
  );
}

export default App;
