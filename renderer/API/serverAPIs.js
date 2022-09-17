
export default function login(email, password) {
    try{
      window.IndexBridge.login(email, password);
    }
    catch(error){
        console.log("error occured " + error);
    }
};
