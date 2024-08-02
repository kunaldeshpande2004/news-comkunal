import { Component } from 'react';
import './App.css';
import News from './components/News';
import Test from './components/Test';

//import NavBar from './components/NavBar';

import { BrowserRouter as Router,Routes ,Route} from 'react-router-dom';

export  class App extends Component {
  render(){
    return (  
      <div>
      <Router basename='News-App'>
        <Test/>
        <Routes>
        <Route exact path="/" element={<News key="zero" category="general" />} />
        <Route exact path="/sports" element={<News key="one" category="sports" />} />
            <Route exact path="/business" element={<News key="two" category="business" />} />
            <Route exact path="/science" element={<News key="three" category="science" />} />
            <Route exact path="/technology" element={<News key="four" category="technology" />} />
            <Route exact path="/health" element={<News key="five" category="health" />} />
            <Route exact path="/entertainment" element={<News key="six" category="entertainment" />} />
            <Route exact path="/general" element={<News key="seven" category="general" />} />
        </Routes>
    </Router>
    </div>
    );
  }
  
}

export default App;