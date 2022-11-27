function Header() {
  return (
    <header className="container-header">
      <div className="container-logo-top">
        <a href="/">
          <img src="/logo orange.png" alt="logo" />
        </a>
      </div>

      <div className="container-title">
        <a href="/">
          <h1 className="title">Auto Parts</h1>
        </a>
      </div>

      <div className="container-items-header">
        <div className="item-top">
          <img src="/lupa 256px.png" alt="lupa" />
        </div>
        <div className="item-top">
          <img src="/user white 256px.png" alt="user" />
        </div>

        <div className="item-top">
          <img src="/shopping-cart white 256px.png" alt="cart" />
        </div>
      </div>
    </header>
  );
}

export default Header;
