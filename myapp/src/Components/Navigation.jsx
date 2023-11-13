import React from 'react';

const menuItems = [
  {
    name: 'Introduction',
    link: "#"
  },
  {
    name: 'Projects',
    link: "#"
  },
  {
    name: 'Apps',
    link: "#"
  },
  {
    name: 'History',
    link: "#"
  }
];

const Navigation = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark navbar-dark py-3 fixed-top" id="nav">
        <div className="container">
          <a href="#" className="navbar-brand"> Powell's Web App </a>

          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navmenu">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navmenu" sum="query">
            <ul className="navbar-nav ms-auto" sum="query">

              {menuItems.map(item => (
                <li className="nav-item" key={item.name}>
                  <a href={item.link} className="nav-link">{item.name}</a>
                </li>
              ))}

            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navigation;
