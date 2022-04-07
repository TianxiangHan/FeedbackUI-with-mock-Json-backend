
import {BrowserRouter as Router,Route,Routes}from "react-router-dom";
import logo from './logo.svg';
import './App.css';
import Header from './components/Header';
import FeedbackList from './components/FeedbackList';
import FeedbackStats from './components/FeedbackStats';
import FeedbackForm from './components/FeedbackForm';
import About from './pages/about';
import AboutIcon from './components/aboutIcon';
import {FeedbackProvider} from "./context/FeedbackContext";

function App() {
  
  
 
  return (
    <FeedbackProvider>
         <Router>
           <div>
            <Header  />
            <div className="container">
              <Routes> 
               <Route path="/"
               element={<>
                    <FeedbackForm/>
                    <FeedbackStats  />
                    <FeedbackList  />

               </>    
               }
               >
                    
               </Route>
                
              <Route path="/about" element={<About/>} />
              </Routes>
            </div>
            <AboutIcon />
        </div>
    </Router>
    </FeedbackProvider>
    
         
    
  );
}

export default App;
