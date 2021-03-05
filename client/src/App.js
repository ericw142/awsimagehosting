import './App.css';
import ImageDisplay from "./components/ImageDisplay";
import ImageUpload from './components/ImageUpload';

function App() {
  return (
    <div className="App container">
        <ImageDisplay />
        <hr />
        <h4>Upload your own Image!</h4>
        <br />
        <ImageUpload />
    </div>
  );
}

export default App;
