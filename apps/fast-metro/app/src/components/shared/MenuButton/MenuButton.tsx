import { Link, useLocation } from 'react-router-dom';

interface MenuButtonI {
  text: string;
  href?: string;
}
function MenuButton({ text, href = '/' }: MenuButtonI) {
  const location = useLocation();
  return (
    <Link to={href}>
      <div
        className={`cursor-pointer select-none rounded-md ${
          location.pathname === href && 'border border-gray-200'
        } bg-gray-50 p-3`}
      >
        <span className={`capitalize`}>{text}</span>
      </div>
    </Link>
  );
}

export default MenuButton;
