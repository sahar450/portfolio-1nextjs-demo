import { Geist, Geist_Mono } from "next/font/google";

export default function logg({ children }) {
  return (
    <html lang="en" >
      <body style={{
        backgroundImage: "url('/images/Gold Blue 03.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        minHeight: '100vh',
      }} >
       
        {children}
       
      </body>
    </html>
  );
}
