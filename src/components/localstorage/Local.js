

export  function Local(token) {
    return localStorage.setItem("user",JSON.stringify(token))
  
}

export function gettoken(){
    const tokenme  = localStorage.getItem("user");
    return JSON.parse(tokenme)
}
