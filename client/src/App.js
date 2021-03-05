import './App.css';
import ImageDisplay from "./components/ImageDisplay";
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <div className="App container">
        <ImageDisplay />
        <hr />
        <ImageUpload />
    </div>
  );
}

export default App;
