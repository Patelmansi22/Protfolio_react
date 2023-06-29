
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import All from './components/All';

function App() {
    const func =()=>{
      setTimeout(()=>{
        console.log(i)
      },1000)
      var i=1
    }
    func();
  return (
    <div className="App">
       {/* <BrowserRouter>
      <Routes>
      <Route exact path='/' element={<All/>}/>
      </Routes>
    </BrowserRouter> */}
    <All/>
    </div>
  );
}

export default App;
