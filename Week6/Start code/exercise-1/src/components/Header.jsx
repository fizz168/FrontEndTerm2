import pnLogo from "../assets/pn-logo.png";

function Header(props){
    return(
         <header id="header">
                <img src={pnLogo} alt="PN Logo" />
                <h1>{props.name}</h1>
              </header>
    );
  
}
export default Header