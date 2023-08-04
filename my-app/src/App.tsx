import './App.css';
import Listing from './components/Stars/Listing/Listing';
import Stars from './components/Stars/Stars';
import {data} from "./datas";


const  App = () => {
  const datas = JSON.parse(data)
  console.log(datas)
  return (
    <div className="App">
      <Stars count={4}/>    
      {/* <Listing datas={datas}/> */}
    </div>
  );
}

export default App;
