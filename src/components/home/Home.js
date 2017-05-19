import React, {Component} from 'react';
import './Home.css';
import Navbar from '../navbar/navbar';
import Banner from '../banner/banner';
import Social from '../social/social';
import Coworking from '../coworking/coworking';
import Alamat from '../alamat/alamat';
import Partner from '../partner/partner';
import Footer from '../footer/footer';

const contentNetworking = [{
                          detail: "HELLO, NETWORKING COMMUNITY"
                      }]

const imagePartner = [{
                        image: "assets/Logo-Partner-bca.png",
                        alt: "Logo Partner Bank BCA"
                      },
                      {
                        image: "assets/Logo-Partner-bi.png",
                        alt: "Logo Partner Bank Indonesia"
                      },
                      {
                        image: "assets/Logo-Partner-Co-Indonesia.png",
                        alt: "Logo Partner Coworking Indonesia"
                      }]

class Home extends Component {
  render() {
    return (
      <div>
        <Navbar/>
        <Banner imageurl="assets/Home-Slider.jpg" contentBanner={contentNetworking} />
        <Social/>
        <Coworking/>
        <Alamat/>
        <Partner imagePartner={imagePartner}/>
        <Footer/>
      </div>
    );
  }
}

export default Home;
