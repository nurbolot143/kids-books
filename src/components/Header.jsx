import Container from "./Container";
import Logo from "./Logo";
import Button from "./Button";

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
