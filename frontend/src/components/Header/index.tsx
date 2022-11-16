import logo from "../../assets/images/logo.svg";
import "./styles.css";

function MasterHeader() {
  return (
    <>
      <header>
        <div className="Logo-container">
          <img src={logo} alt="DsMeta" />
          <h1>DsMeta</h1>
          <p>
            Desenvolvido por{" "}
            <a href="https://www.instagram.com/jeffe_dalla/">@Jeffe_dalla</a>
          </p>
        </div>
      </header>
    </>
  );
}

export default MasterHeader;
