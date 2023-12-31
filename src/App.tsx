import Header from "./components/Header/Header"
import Footer from "./components/Footer/Footer"
import AppRoutes from "./routes/AppRoutes"
import { BrowserRouter as Router } from 'react-router-dom';

import { Suspense } from "react";
import Loader from "./components/Loader/Loader";
import { Container } from "react-bootstrap";

import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from "react-toastify";


function App() {
  return (
    <>
    <ToastContainer/>
    <Router>
      <Header/>
      <Container style={{minHeight: '100vh', minWidth: '100%', padding: '0'}}>
        <Suspense fallback={<Loader/>}>
        <AppRoutes/>
        </Suspense>
        </Container>
       <Footer/> 
    </Router>
    
  </>
  )
}

export default App
