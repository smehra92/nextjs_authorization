// export { default } from 'next-auth/middleware'  //Best way for using middleware.

import middleware from "next-auth/middleware"     //Way for using middleware.
export default middleware

export const config = {
    //* : means 0 or more parameters
    //+ : means 1 or more parameters
    //? : means 0 or one parameters

    //matcher : ["/getUser/:id*"]
    matcher : ['/api/getUser'] //Middleware will work on only this endpoint when we'll hit this.
}






//"Nextauth" has a middleware function that checks the user session, 
//if user tries to access the path which we specify in "config", it will be automatically redirected
//to the login page.