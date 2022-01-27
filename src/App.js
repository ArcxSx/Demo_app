import './App.css';
import Cms from './components/Cms';
import Features from './components/Features';
import Header from './components/Header';
import Products from './components/Products';
import Testimonial from './components/Testimonial';
import Topbg from './components/Topbg';
import Trust from './components/Trust';
import Form from './components/Form';
import Footer from './components/Footer';
import Blogs from './components/Blogs';
import React from "react";
import {
  Routes,
  Route
} from "react-router-dom";
import Contactus from './components/Contactus';

export default function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="blog" element={<Blog />} />
        <Route path="contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

function Home() {
  return (
    <div className="App">
      {/* header */}
      <Header />

      {/* app body */}
      <div className="app__body">
        <Topbg />
        <Trust />
        <Cms/>
        <Features/>
        <Testimonial/>
        <Products/>
        <Form/>
        
      </div>
      {/* footer */}
      <Footer/>
    </div>
  );
}

function Blog() {
  return (
    <div className="App">
    {/* header */}
    <Header />
    <Blogs/>
    </div>
    );
}

function Contact() {
  return (
    <div className="App">
    {/* header */}
    <Header />
    <Contactus />
    <div className="app_contact">
      <Footer/>
    </div>
    </div>
    );
}

