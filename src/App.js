import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import VoteList from "./component/VoteList";
import AddVotePage from "./component/AddVotePage";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Header />
       <Switch>
         <Route exact path="/">
          <VoteList />
         </Route>
         <Route exact path="/create_vote">
          <AddVotePage />
         </Route>
       </Switch>
      </div>
    </BrowserRouter>
    
  );
}

export default App;
