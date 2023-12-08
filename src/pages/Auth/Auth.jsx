
import { FaFacebookSquare } from "react-icons/fa";
import "./Auth.scss"
import { Link } from "react-router-dom";

import { useState } from "react";
import Modal from "../../component/modal/Modal";

const Auth = () => {
    const [ modal, setModal ] = useState(false);
 
  return (
    <>
  <Modal /> 
      

    <div className="instagram-header">
      <div className="container instagram-container">
          <div className="insta-image-left">
               <img src="https://i.ibb.co/WPNb31y/Screenshot-1-removebg-preview-2.png" alt="" />
          </div>
          <div className="insta-content-right">
              <div className="instagram-box-abc">
                  <img src="https://i.ibb.co/Vm9xTxG/Screenshot-2.png" alt="" />
                  <div className="form-div">
                    <form action="#">
                      <input type="text" placeholder="Phone number, username, or email"/>
                      <input type="text" placeholder="Password"/>
                      <button className="button-log"> Log in </button>
                    </form>
                    <p className="or-class"> OR </p>
                    <div className="fb-btn">
                      <p> <span><FaFacebookSquare /> </span> Log in with Facebook </p>
                    </div>
                    <p className="forget-link"> Forgot password? </p>
                  </div>
              </div>
              <div className="instagram-box-def">
                  <p>Dont have an account?<Link onClick={() => setModal(true)} to="/single">  Sign up  </Link> </p>
              </div>

              <p className="get-app"> Get the app. </p>
              <div className="image-box">
                <div className="img-1">
                  <img src="https://static.cdninstagram.com/rsrc.php/v3/yz/r/c5Rp7Ym-Klz.png" alt="" />
                </div>
                <div className="img-2">
                  <img src="https://static.cdninstagram.com/rsrc.php/v3/yu/r/EHY6QnZYdNX.png" alt="" />
                </div>
              </div>
          </div>
          
      </div>
    </div>

    <div className="instagram-footer">
        <div className="container instagram-footer-container">
           <ul>
            <li> <Link> Meta  </Link></li>
            <li> <Link> About </Link></li>
            <li> <Link> Blog </Link></li>
            <li> <Link> Jobs </Link></li>
            <li> <Link> Help </Link></li>
            <li> <Link> API </Link></li>
            <li> <Link> Privacy </Link></li>
            <li> <Link> Terms </Link></li>
            <li> <Link> Locations </Link></li>
            <li> <Link> Instagram </Link></li>
            <li> <Link> Lite Threads </Link></li>
            <li> <Link> Contact Uploading & Non-Users </Link></li>
            <li> <Link> Meta Verified </Link></li>
            <li> <Link> English </Link></li>
            <li>  © 2023 Instagram from Meta </li>

           </ul>
        </div>
      </div>
    </>
  )
}

export default Auth;










