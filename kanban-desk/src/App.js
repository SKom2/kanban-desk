import './App.css';
import {CurrentUserContext} from "./contexts/CurrentUser";

function App() {
  return (
      <CurrentUserContext.Provider value={}>
        <div className="App">
          body
        </div>
      </CurrentUserContext.Provider>
  );
}

export default App;
