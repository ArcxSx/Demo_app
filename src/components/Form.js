import React from 'react';
import './Form.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Form() {
  return (
      <div className="form">
          <div className="superlead__box">
              <div className="superlead__left">
                <form className='superlead__form' action="#">
                    <div className="form__group">
                        <TextField id="standard-basic" size="small" label="Name" variant="standard" />
                    </div>
                    <div className="form__group">
                        <TextField id="standard-basic" size="small" label="Email ID" variant="standard" />
                    </div>
                    <div className="form__group">
                        <TextField id="standard-basic" size="small" label="Phone No." variant="standard" />
                    </div>

                    <div className="agree__text">
                        <p>By clicking here I agree to the <a href=''>privacy policy</a></p>
                    </div>

                    <div className="form__submit">
                        <div className="button_dark">
                            <Button variant="text" >
                              Try Free Demo
                            </Button>
                        </div>
                    </div>
                </form>
              </div>
              <div className="superlead__right">
                  <div className="superlead__mobile">
                      <img src='https://runo.in/images/top-mobile-1-min.png' alt='' />
                  </div>
              </div>
          </div>
      </div>
  );
}

export default Form;
