import gnosisImage from "../../images/cmd-f_gnosis_logo.png";

function Header() {
  return (
    <div className="flex justify-between items-center h-20 fixed w-full px-10 bg-white shadow-sm">
      <div className="flex items-center gap-2">
        <img src={gnosisImage} alt="gnosis" className="h-12 w-12" />
        <h1 className="text-2xl">Gnosis</h1>
      </div>
      <nav>
        <ul className="flex gap-6">
          <li>
            <a href="/">Home</a>
          </li>
          <li>
            <a href="/login">Account</a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
