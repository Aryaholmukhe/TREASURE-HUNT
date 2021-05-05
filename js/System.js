class System{

    constructor(){}

    // Add code to authenticate the given code and the access codes.

     authenticate(enteredCode, actualCode){
         if(enteredCode===actualCode){
             return true;
         } else{
             return false;
         }
     }

}