/*
1. Create firebase project
2. enable web
3. enable sign in method
4. install firebase
5. get firebase config in your src>firebase folder>fifirebase.config.js
6. export default app; [from firebase.config.js file]
7. 
*/

/*
1. Create UserContext (Auth Context): UserContext --> componant name
userContext provides AuthContext 

2. Create AuthContext. [export const AuthContext = createContext();]
3. set AuthContext.Provider
4. Make sure set the children
5. export AuthContext to be used inside useContext hook
6. get from data
7. getAuth in the UserContext
*/