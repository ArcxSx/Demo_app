import React from 'react';
import LocationOnTwoToneIcon from '@mui/icons-material/LocationOnTwoTone';
import LocalPhoneTwoToneIcon from '@mui/icons-material/LocalPhoneTwoTone';
import './Contactus.css';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

function Contactus() {
  return (
      <div className="contactus">
          <div className="row">
              <div className="contact__container">
              <div className="contact__left">
              <div className="contact__content">
                      <h4 className='contact__heading'>We’d always love to</h4>
                      <h1>hear from you.</h1>

                      <p>Have any questions about RUNO, product demo or support? Shoot them away here.</p>

                      <div>
                          <div className="contact__box">
                            <LocationOnTwoToneIcon/>
                            <h4>T-HUB , IIIT Campus,<br/>Gachibowli, Hyderabad,<br/>Telangana, INDIA.</h4>
                          </div>

                          <div className="contact__box">
                              <LocalPhoneTwoToneIcon/>
                              <h4>+91 9784006190</h4>
                          </div>
                      </div>
                  </div>
              </div>
              <div className="contact__right">
              <div className="superlead__left">
                <form className='superlead__form' action="#">
                    <h4>Contact Us</h4>
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
                              Submit
                            </Button>
                        </div>
                    </div>
                </form>
              </div>
              </div>
              </div>
          </div>
      </div>
  );
}

export default Contactus;
