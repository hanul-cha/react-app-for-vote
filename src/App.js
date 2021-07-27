import { BrowserRouter, Route, Switch} from "react-router-dom";
import Header from "./component/Header";
import VoteList from "./component/VoteList";
import AddVotePage from "./component/AddVotePage";
import DoItVote from "./component/DoItVote";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
       <Header />
       <Switch>
         <Route exact path="/">
          <VoteList />
         </Route>
         <Route path="/vote/:title">
            <DoItVote />
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
