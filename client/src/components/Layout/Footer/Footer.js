import React from 'react';

function Footer() {
  return (
    <div className="footer-wrapped">
      <div className="customer_service_wrapped">
        <div className="customer_service_container">
          <div className="customer_service_contents">
            <h4>CUSTOMER SERVICE</h4>
            <div className="content_item">Shipping</div>
            <div className="content_item">Shipping</div>
            <div className="content_item">Shipping</div>
            <div className="content_item">Shipping</div>
            <div className="content_item">Shipping</div>
            <div className="content_item">Shipping</div>
            <div className="content_item">Shipping</div>
            <div className="content_item">Shipping</div>
          </div>
          <div className="contact_us_container">
            <h4>CONTACT US</h4>
            <div className="phone_number">0800 WHEYTEIN</div>
            <div className="mobile_phone_number">0220717763</div>
            <div className="contact_email_info">
              <p>phu.nguyen09995@gmail.com</p>
              <span>SEND ME AN ONLINE ENQUIRY </span>
            </div>
          </div>
          <div className="social_content">
            <h4>FOLLOW US</h4>
            <div className="social_links_wrapped">
              <div className="social_link">
                <a>
                  <img src="/img/pf_facebook.jpg" />
                </a>
              </div>
              <div className="social_link">
                <a>
                  <img src="/img/pf_twitter.jpg" />
                </a>
              </div>
              <div className="social_link">
                <a>
                  <img src="/img/pf_instagram.jpg" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
