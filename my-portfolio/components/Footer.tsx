import React from "react";

const Footer = () => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <footer className="mb-10 px-4 text-center text-gray-500">
      <small className="mb-2 block text-xs">
        &copy; {year} Matheus - All rights reserved.
      </small>
      <p className="text-xs">
        <span className="font-semibold">Sobre esse website:</span> criado com
        React e Next.js (App Router & Server Actions), TypeScript, Tailwild CSS,
        Framer Motion, React Email, Resend e Vercel Hosting.
      </p>
    </footer>
  );
};

export default Footer;
