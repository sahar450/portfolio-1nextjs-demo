'use server';
export async function sendLogin(prevState, formData) {
  
    const name = formData.get("user");
    const password = formData.get("pass");
    const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;

    if (!name || name.trim().length === 0  ) {
      return { message: "نام را وارد کنید" };
    }
    if (!usernameRegex.test(name)) {
      return { message: "فرمت اشتباه" };
    }
  
    if (!password || password.trim().length === 0) {
      return { message: "رمز را وارد کنید" };
    }
  
    const senddata = {
      identifier: name.trim(),
      password: password.trim(),
    };
  
    try {
      const res = await fetch("http://localhost:4000/v1/auth/login", {
        method: "POST",
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify(senddata)
      });
  
      if (!res.ok) {
        return { message: "ورود ناموفق بود. لطفاً نام کاربری یا رمز را بررسی کنید." };
      }
  
      const response = await res.json();
      console.log(response);
      const tokeen=response.accessToken;
      
      return {
         message: "ورود با موفقیت انجام شد!",

         token:tokeen
       };
      
  
    } catch (err) {
      console.error(err);
      return { message: "خطایی رخ داد. لطفاً بعداً تلاش کنید." };
    }
  }
  