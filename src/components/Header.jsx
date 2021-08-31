import { Container, Logo, Button } from "../components";

function Header() {
  return (
    <div className="header">
      <Container>
        <Logo />
        <div className="header__cart">
          <Button className={"button--cart"} />
        </div>
      </Container>
    </div>
  );
}

export default Header;
