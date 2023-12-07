
import { RiFacebookBoxFill } from "react-icons/ri";
import "./Single.scss";
import { Link } from "react-router-dom";
  


const Single = () => {
  return (
    <>
    <div className="instagram-modal">
        <div className="modal-container">
           <div className="modal-box">
             <div className="modal-header">
                <img src="https://i.ibb.co/Vm9xTxG/Screenshot-2.png" alt="" />
                <p className="sign-up-detail"> Sign up to see photos and videos from your friends. </p>
                <button className="login-btn-bb"> <span> <RiFacebookBoxFill /> </span> Log in with Facebook </button>
                <h6 className="btn-or"> OR </h6>
             </div>
             <div className="modal-body">
                <form action="" className="form-data">
                  <input type="text"  placeholder="Mobile Number or Email"/>
                  <input type="text" placeholder="fullName"/>
                  <input type="text" placeholder="username"/>
                  <input type="text" placeholder="Password"/>
                </form>
                <p className="form-text"> People who use our service may have uploaded your contact information to Instagram. <Link > Learn More </Link>  </p>
                <p className="form-text" > By signing up, you agree to our <Link> Terms</Link>  , <Link> Privacy Policy </Link> and <Link>Cookies Policy </Link>  . </p>
                <button className="sign-up-btn"> Sign up </button>
             </div>
           </div>
           <div className="instagram-box-def">
            <p>Dont have an account? <Link to="/auth"> Sign up </Link> </p>
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
    </>
  )
}

export default Single;












