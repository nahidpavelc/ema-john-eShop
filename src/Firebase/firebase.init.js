import { initializeApp } from "firebase/app";
import firebaseConfig from "./firebase.cofig";

const initializeAuthentication = () =>{
    initializeApp(firebaseConfig);
}

export default initializeAuthentication;

/* Steps for Authentication
---------------------------
Step-1: Initial Setup
1. Firebase: Create Project.
2. Create web app.
3. Get Configaration.
4. Initialize firebase.
5. Enable auth method.

Step-2: Setup Component
1. Create Login Component.
2. Create Register Component.
3. Create Route for Login and Register.

-----------------------
Step 3: set auth System
1. set up sign in method
2.setup sign out method
3. user state
4. special observer
5. return necessary methods & states from useFirebase
-----------------------
Step 4: Create Auth Context hook (useAuth)
1. create a auth context
2. create context Provider
3.1 set contex Provider Contex value
4. use Auh provider
5. create useAuth Hook
------------------------
Step 5: create private Route
1. create private Route
2. set private Route 

------------------------
Step6: Redirect after login
1. After login redirect user to their desire destination

*/