import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 left-0 right-0 bg-white dark:bg-dark-mode flex justify-center items-center">
      <p className="text-xs text-center text-dark-content dark:text-light-content">
        Cloud Computing{" "}
        <a
          className="font-medium"
          href="https://pavanmg.in"
          target="_blank"
          rel="noreferrer noopener"
        >
          Kelompok 1
        </a>{" "}
        
        <span className="text-gradient font-medium"> Aditya</span> &
        <span className="text-gradient font-medium"> Muza</span> &
        <span className="text-gradient font-medium"> Gibran</span> 
      </p>
    </footer>
  );
}
export default Footer;
