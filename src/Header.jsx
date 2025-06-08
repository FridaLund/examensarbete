function Header() {
  return (
    <header className="mx-auto max-w-md mt-4 inset-x-0 left-3.5 right-3.5 rounded-full bg-blue-100/30 fixed border border-blue-200/70 backdrop-blur-2xl z-20 shadow-md">
      <nav className="flex justify-between p-1">
        <a
          className="text-center duration-300 transition-colors flex-1 pt-2 pb-2 rounded-full text-blue-950 font-medium hover:bg-blue-200"
          href="#background"
        >
          Background
        </a>
        <a
          className="text-center duration-300 transition-colors flex-1 pt-2 pb-2 rounded-full text-blue-950 font-medium hover:bg-blue-200"
          href="#result"
        >
          Result
        </a>
        <a
          className="text-center duration-300 transition-colors flex-1 pt-2 pb-2 rounded-full text-blue-950 font-medium hover:bg-blue-200"
          href="#reflection"
        >
          Reflection
        </a>
      </nav>
    </header>
  );
}

export default Header;
