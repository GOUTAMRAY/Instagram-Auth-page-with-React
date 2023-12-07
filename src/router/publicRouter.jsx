import Auth from "../pages/Auth/Auth";
import Home from "../pages/home/Home";
import Single from "../pages/single/Single";


// create public router 
const publicRouter = [
   {
    path: "/",
    element : <Home />
   },
   {
    path : "/auth",
    element : <Auth />
   },
   {
    path : "/single",
    element : <Single />
   }


];


// export 
export default publicRouter;













