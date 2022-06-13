
export const getUser = () => {
     if(sessionStorage.getItem('email') !== null)
     {
     return JSON.parse(sessionStorage.getItem('email'));
     }
    else return null;
  }

  export const removeButtons = () => {
    setTimeout(() => {
      let elem = document.getElementById("loginbtn");
      if (elem !== null) {
          elem.style.display = "none";
          document.getElementById("registerbtn").style.display = "none";
          document.getElementById("myDropdown").style.display = "none";
          document.getElementById("dropDownMenu").style.display = "block";
      }
  }, 100);
  }

  export const getLogindetails = () => {
    if(sessionStorage.getItem("email") !== null)
    {
    return (sessionStorage.getItem("user"));
    }
   else return null;
 }
   
  
  export const getToken = () => {
    return sessionStorage.getItem('custId') || null;
  }
   
  
  export const removeUserSession = () => {
    sessionStorage.removeItem('custId');
    sessionStorage.removeItem('email');
  }
   
  export const deleteToken = () => {
    sessionStorage.removeItem('custId');
    // sessionStorage.removeItem(username+"Token");
  }
  export const setUserSession = (user) => {
    sessionStorage.setItem("email", JSON.stringify(user));
  }
  export const setTokenSession = (token,username) => {
    sessionStorage.setItem('custId', token);
    sessionStorage.setItem(username+"Token", token);
  }

  export const timeFormating = (date) => {

    var seconds = Math.floor((new Date() - date) / 1000);

    var interval = Math.floor(seconds / 31536000);

    if (interval > 1) {
        return interval + " years";
    }
    interval = Math.floor(seconds / 2592000);
    if (interval > 1) {
        return interval + " months";
    }
    interval = Math.floor(seconds / 86400);
    if (interval > 1) {
        return interval + " days";
    }
    interval = Math.floor(seconds / 3600);
    if (interval > 1) {
        return interval + " hours";
    }
    interval = Math.floor(seconds / 60);
    if (interval > 1) {
        return interval + " minutes";
    }
    return Math.floor(seconds) + " seconds";
}