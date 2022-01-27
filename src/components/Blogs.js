import React from 'react';
import './Blogs.css';
import Avatar from '@mui/material/Avatar';

function Blogs() {
  return (
      <div className="blogs">
          <div className="blog__container">
              <div className="blog__card">
                  <a className='card__media' href="/"><img src='https://blog.runo.in/wp-content/uploads/2022/01/best-call-center-CRMs-in-INDIA-444x230.png' alt=''/></a>
                  <div className="card__text">
                      <header className='blog__category'>
                          <a className="cat__link" href="">TECHNICAL</a><br/>
                      </header>
                      <div className="blog__title">The 5 Best Outbound Call Center Software in India [January 2022]</div>
                      <div className="blog__content"><p>Outbound call center software is needed and used in many processes like Real-Estate, Tele-Marketing, Tele-Sales, Finance, Banking, Education, Universities/Schools, Customer…</p></div>
                      <div className="blog__author_date">
                          <div className="blog__author">
                            <Avatar>V</Avatar>
                            <p>vamsi</p>
                          </div>
                          <div className="date">January 4, 2022</div>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Blogs;
