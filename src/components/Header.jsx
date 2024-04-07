import { useNavigate } from "react-router-dom";

const Header = ({ marvelLogo }) => {
  const navigate = useNavigate();

  return (
    <header>
      <div className="container">
        <img
          onClick={() => {
            return navigate("/");
          }}
          src={marvelLogo}
          alt="marvel-logo"
        />

        <nav className="header-navigation">
          <button
            onClick={() => {
              return navigate("/characters");
            }}
          >
            Characters
          </button>
          <button
            onClick={() => {
              return navigate("/comics");
            }}
          >
            Comics
          </button>
          <button
            onClick={() => {
              return navigate("/favorites");
            }}
          >
            Favorites
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
