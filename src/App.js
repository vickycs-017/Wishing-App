import logo from './logo.svg';
import './App.css';

function App() {
  const date = new Date();
  const hours = date.getHours();
  let message;

  if(hours < 12){
    message = "Morning!";
  }
  else if(hours >= 12 && hours < 17){
    message = "Evening!";
  }
  else{
    message = "Night!";
  }

  return (
    <h1 style={{color: "orange"}}>Good {message}</h1>
  );
}

export default App;
