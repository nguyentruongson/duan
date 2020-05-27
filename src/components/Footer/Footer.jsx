import React, { Component } from "react";
import MidleService from '../../Service/MidleEvent';
import { withRouter, Link } from 'react-router-dom';
import moment from 'moment';
import './style.css';
class Footer extends Component {
  constructor(props) {
    super(props);
    this.handleSearchAddreess = this.handleSearchAddreess.bind(this);
    this.state = {

    };
  }

  handleSearchAddreess(event, lat, lng) {
    let latlon = {
      lat: lat,
      lng: lng
    }
    let address = event.target.textContent;
    var search_object = {
      address: address,
      latLng: latlon, 
      trip_start: moment().add(1, 'days'),
      trip_end: moment().add(2, 'days'),
      duration: "all"
    }
    this.props.history.push('/search');
    setTimeout(function () {
      MidleService.homeSearchFunc(search_object);
    }.bind(this), 300)
  }

  render() {
    return (
      <div>
        <div className="footer">
          {/* <div className="hr-theme-slash-2">
            <div className="hr-line" />
            <div className="hr-icon"><img src="/images/home/icon/iconline.png" alt="" /></div>
            <div className="hr-line" />
          </div> */}
          <div className=" footer-class">
            <div className="row footer-detail" style={{ width: '100%' }}>
              <div className="col-md-2">
                <div className="title">Explore</div>
                <Link to="/rental-car">
                  <div className="element handle-link-redirect-avatar">Car rental alternatives</div>
                </Link>
                <Link to="/search-driver">
                  <div className="element handle-link-redirect-avatar">Chauffeur for hire</div>
                </Link>
                {/* <Link to="/">
                  <div className="element handle-link-redirect-avatar"> Make money with your car</div>
                </Link>
                <Link to="/">
                  <div className="element handle-link-redirect-avatar"> Juzdrive for business</div>
                </Link> */}
              </div>
              <div className="col-md-2">
                <div className="title">Learn more</div>
                <Link to="/how-juz-work">
                  <div className="element handle-link-redirect-avatar">How Juzdrive works</div>
                </Link>
                <Link to="/">
                  <div className="element handle-link-redirect-avatar">Policies</div>
                </Link>
                <Link to="/trust-safety">
                  <div className="element handle-link-redirect-avatar">Trust &amp; safety</div>
                </Link>
                <Link to="/faqs">
                  <div className="element handle-link-redirect-avatar">FAQs</div>
                </Link>

                <Link to="/">
                  <div className="element handle-link-redirect-avatar">Traveler FAQs</div>
                </Link>
              </div>
              <div className="col-md-4">
                <div className="row">
                  <div className="col-md-6">
                    <div className="title">Top cities</div>
                    {/* <div className="element" onClick={(event) => this.handleSearchAddreess(event, 13.756331, 100.501762)}>Bangkok
                      </div> */}
                      <div className="element" onClick={(event) => this.handleSearchAddreess(event, 1.493, 103.741)}>Johor
                      </div>
                      <div className="element" onClick={(event) => this.handleSearchAddreess(event, 3.139003, 101.68685499999992)}>Kuala Lumpur
                      </div>
                      <div className="element" onClick={(event) => this.handleSearchAddreess(event, 5.285153, 100.456238)}>Penang
                      </div>
                      </div>
                      <div className="col-md-6">
                        <div className="d-none d-sm-block">&nbsp;</div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 1.352083, 103.819839)}>Singapore (soon)
                      </div>
                      <div className="element" onClick={(event) => this.handleSearchAddreess(event, 10.7542893, 106.1346779)}>Ho Chi Minh (soon)
                      </div>
                      <div className="element" onClick={(event) => this.handleSearchAddreess(event, -6.229728, 106.6894271)}>Jakarta (soon)
                      </div>
                    </div>
                    



                    {/* <div className="element" onClick={(event) => this.handleSearchAddreess(event, 10.823099, 106.629662)}>Ho Chi Minh
                      City
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 5.4058759, 100.2274605)}>Penang
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 25.761681, -80.191788)}>Miami
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 37.774929, -122.419418)}>San
                      Francisco
                      </div> */}
                  </div>
                  {/* <div className="col-md-4">
                    <div className="title" />
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, -6.175110, 106.865036)}> Jakarta
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 14.599512, 120.984222)}>Manila
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 51.507351, -0.127758)}>London
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 53.480759, -2.242631)}>Manchester
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 48.856613, 2.352222)}>Paris
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 43.653225, -79.383186)}>Toronto
                      </div>
                  </div> */}
                  {/* <div className="col-md-4">
                    <div className="title" />
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 52.370216, 4.895168)}>Amsterdam
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 52.520008, 13.404954)}> Berlin
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 40.416775, -3.703790)}>Madrid
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 40.712776, -74.005974)}>New York
                      </div>
                    <div className="element" onClick={(event) => this.handleSearchAddreess(event, 34.052235, -118.243683)}>Los
                      Angeles
                      </div>
                  </div> */}
                  {/* <form className="search-form ml-20" method="post" action="https://juzdrive.com/search" id="foot-search-form" style={{ display: 'none' }}>
                    <img src="images/map/pin.svg" alt="img-pin" />
                    <input type="text" name="location" id="footer-search-car-location" />
                    <input type="text" name="lat" id="f_lat" style={{ display: 'none' }} />
                    <input type="text" name="lng" id="f_lng" style={{ display: 'none' }} />
                    <img src="/images/map/magnifying-glass.svg" alt="img-magnifying" />
                  </form> */}
              </div>
              <div className="col-md-4">
                  <div className="float-right">
                    <div className="google-translate">
                    <span id="google_translate_element" />
                    </div>
                  </div>
                {/* <li className="nav-item align-middle hvr-underline-from-center google-translate overflow-hidden" style={{ lineHeight: '56px' }}>
                                <span id="google_translate_element" />
                            </li>             */}
              </div>
            </div>

            {/* <div className="row foter2">
              <div className="col-md-9">
                <span>
                  <div className="row">
                    <div className="col-md-4">
                      <Link to="/support">
                        <div style={{ fontSize: '18px' }} >
                          <span style={{ width: '100%' }}> Contact customer support </span>
                        </div>
                      </Link>

                    </div>
                    <div className="col-md-4">
                      <Link to="/" style={{ fontSize: '18px' }}>
                        <span style={{ width: '100%' }}>Terms</span>
                      </Link>
                      <Link to="/" style={{ fontSize: '18px' }}>
                        <span style={{ marginLeft: '20px' }}>Privacy</span>
                      </Link>
                    </div>
                  </div>
                </span>
              </div>
              <div className="col-md-3  text-social">
                <img className="handle-link-redirect-avatar" src="/img/facebook.svg" alt="" />
                <img className="handle-link-redirect-avatar" src="/img/googleplus.svg" alt="" style={{ marginLeft: '15px' }} />
              </div>
            </div> */}
            <hr/>
            {/* <div className="copyright row">
              <div className="col-12 col-sm-8">
                <Link to="/" className="handle-link-redirect-avatar"><img src="/images/home/icon/juzdrive-text.png" alt="" style={{paddingBottom: "4px", height: "20px", float: "left"}} /></Link>
                <span style={{ margin Left: '10px', color: '#717171' }}>© 2019 JuzDrive, Inc. All rights reserved.</span>
              </div>
            </div> */}
        <div className="copyright row" style={{justifyContent: 'space-between'}}>
        <div className="col-12 col-md-7">
          <div style={{width: '100%'}}>
            <Link to="/" className="handle-link-redirect-avatar">
              <img src="/images/home/icon/juzdrive-text-xs.png" className="footer-logo" alt="" style={{ height: "17px", float: "left"}}/>
            </Link>
            <span className="all-rights">© 2019 JuzDrive, Inc. All rights reserved.</span>
          </div>
        </div>
        <div className="col-md-5" className="kitin-footer-terms">
          <div className="terms">
            <Link to="/support" style={{paddingLeft: '10px'}}>
              Contact customer support
            </Link>
            <Link to="/" style={{paddingLeft: '10px'}}>
              Terms
            </Link>
            <Link to="/" style={{paddingLeft: '10px'}}>
              Privacy
            </Link>
            <div className="text-social">
              <img className="handle-link-redirect-avatar" src="/img/facebook.svg" alt="" />
              <img className="handle-link-redirect-avatar" src="/img/googleplus.svg" alt="" style={{marginLeft: '15px'}} />
            </div>
          </div>           
        </div>
      </div>


          </div>
        </div>
      </div>

    )
  }
}

export default withRouter(Footer);
