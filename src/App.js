import react from 'react';
import { ApiProvider } from "./contexts/ApiContext";
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';

function App() {
  return (
    <ApiProvider>
      <div className="container">
        <header className="text-center my-4">
          <h1>Események neked</h1>
        </header>

        <main>
          
        </main>
      </div>
    </ApiProvider>
  );
}

export default App;
