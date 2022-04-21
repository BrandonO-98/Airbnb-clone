function Navbar() {
  return (
    <nav className='navbar'>
      <div className='navbar-container'>
        <img src='/images/airbnb-Logo.jpg' className='logo' alt='Airbnb Logo' />
        <ul className='navbar-items-list'>
          <li className='navbar-item'>About</li>
          <li className='navbar-item'>Experiences</li>
          <li className='navbar-item'>Contact</li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
