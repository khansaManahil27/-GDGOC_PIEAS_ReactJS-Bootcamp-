const Header = () => {
    return (
      <header className="flex justify-between items-center px-6 py-4 bg-white shadow-md">
        <h1 className="text-2xl font-bold">snap</h1>
        <nav>
          <ul className="flex space-x-6 text-gray-600">
            <li className="hover:text-black cursor-pointer">Features</li>
            <li className="hover:text-black cursor-pointer">Company</li>
            <li className="hover:text-black cursor-pointer">Careers</li>
            <li className="hover:text-black cursor-pointer">About</li>
          </ul>
        </nav>
        <div className="space-x-4">
          <button className="text-gray-600 hover:text-black">Login</button>
          <button className="border border-gray-600 px-4 py-2 rounded hover:bg-gray-600 hover:text-white">
            Register
          </button>
        </div>
      </header>
    );
  };
  
  export default Header;
  