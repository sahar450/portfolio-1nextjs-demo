"use server"
export async function sendRegister(prev, formData) {
  const fullname = formData.get("fullname");
  const user = formData.get("user");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const pass = formData.get("pass");

  const usernameRegex = /^[a-zA-Z][a-zA-Z0-9_-]{2,19}$/;
  const emailRegex = /^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/;
  const iranPhoneRegex = /^09\d{9}$/;

  // ✅ اعتبارسنجی ورودی‌ها
  if (!fullname || fullname.trim().length === 0) {
    return { message: "نام را وارد کنید" };
  }
  if (!usernameRegex.test(fullname)) {
    return { message: "فرمت نام اشتباه است" };
  }
  if (!pass || pass.trim().length === 0) {
    return { message: "رمز را وارد کنید" };
  }
  if (!user) {
    return { message: "نام کاربری را وارد کنید" };
  }
  if (!email) {
    return { message: "ایمیل را وارد کنید" };
  }
  if (!emailRegex.test(email)) {
    return { message: "فرمت ایمیل اشتباه است" };
  }
  if (!phone) {
    return { message: "شماره تماس را وارد کنید" };
  }
  if (!iranPhoneRegex.test(phone)) {
    return { message: "فرمت شماره تماس اشتباه است" };
  }

  const sendinfo = {
    name: fullname.trim(),
    username: user.trim(),
    email: email.trim(),
    phone: phone.trim(),
    password: pass.trim(),
    confirmPassword: pass.trim(),
  };

  try {
    const res = await fetch("https://renderme-irxt.onrender.com/v1/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(sendinfo),
    });

    const data = await res.json(); // حتی اگر res.ok نباشد باید خوانده شود

    if (!res.ok) {
      // پیام خطای دقیق از سرور
      return { message: data.message || "اطلاعات ارسال نشد" };
    }
    console.log(data)
    const tokeeen = data.accessToken;
    

    return {
       message: "ثبت نام با موفقیت انجام شد" ,

       token:tokeeen
    };
  } catch (err) {
    console.error(err);
    return { message: "خطایی رخ داد. لطفاً بعداً تلاش کنید." };
  }
}
