/* eslint-disable react/button-has-type */
/* eslint-disable react/prop-types */
function Header({ score, handleReload }) {
  return (
    <div className="header">
      <h1 className="title">SAUSAGE PARTY</h1>
      <div className="headerContainer">
        <button onClick={handleReload}>RELOAD</button>
        <p>SCORE : {score}</p>
      </div>
    </div>
  );
}

export default Header;
