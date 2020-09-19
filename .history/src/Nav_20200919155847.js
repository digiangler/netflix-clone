import React from "react";

import "./Nav.css";

function Nav() {
  const [showHandler, setShowHandler] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) setShowHandler(true);
      else setShowHandler(false);
    });
    return () => {
      window.removeEventListener("scroll");
    };
  }, []);

  return (
    <div className='nav'>
      <img
        className='nav__logo'
        src='https://upload.wikimedia.org/wikipedia/commons/0/0f/Logo_Netflix.png'
        alt='Netflix logo'
      />

      <img
        className='nav__avatar'
        src='https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png'
        alt='avatar logo'
      />
    </div>
  );
}

export default Nav;
