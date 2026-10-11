import { NavLink } from 'react-router-dom';

type NavigationProps = {
  isDarkMode: boolean;
  onToggleDarkMode: () => void;
};

function Navigation(props: NavigationProps) {

  return (
    <nav className='main-navigation'>
      <ul>
        <li>
          <NavLink to='/' end>
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink to='/investments'>
            Investments
          </NavLink>
        </li>
        <li>
          <NavLink to='/properties'>
            Properties
          </NavLink>
        </li>
        <li>
          <NavLink to='/mortgage'>
            Mortgage
          </NavLink>
        </li>
        <li>
          <NavLink to='/projections'>
            Projections
          </NavLink>
        </li>
        <li className='theme-toggle-container'>
          <button
            type='button'
            className='theme-toggle'
            onClick={props.onToggleDarkMode}
            aria-label={
              props.isDarkMode
                ? 'Switch to light mode'
                : 'Switch to dark mode'
            }
          >
            {props.isDarkMode
              ? '☀ Light Mode'
              : '☾ Dark Mode'
            }
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;