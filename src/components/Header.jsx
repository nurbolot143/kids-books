import { Link } from "react-router-dom";
import { Container, Logo, Button } from "../components";

function Header() {
  return (
    <div className="header">
      <Container>
        <Link to="/">
          <Logo />
        </Link>

        <div className="header__cart">
          <Link to="/cart">
            <Button className={"button--cart"} />
          </Link>
        </div>
      </Container>
    </div>
  );
}

export default Header;
