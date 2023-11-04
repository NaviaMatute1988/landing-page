import'./Navbar.css'


export function Navbar() {
    return (
      <nav>
        <div id="topmenu">
          <ul id="menu">
            <li>
              <a href="#home">Home</a>
            </li>
            <li>
              <a href="#faith">Faith</a>
            </li>
            <li>
              <a href="#fitness">Fitness</a>
            </li>
            <a href="#finances">Finances</a>
            <li>
              <a href="#contact">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    );
}