function Header() {
  return (
    <div className="flex justify-between items-center h-20 fixed w-full px-10 bg-white shadow-sm">
      <h1 className="text-2xl">Gnosis</h1>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/my-page">Account</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
