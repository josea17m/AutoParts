function MainContent(props) {
  return (
    <main className="container-main">
      {props.productos.map((productos) => (
        <div className="grid-box">
          <a href={productos.url}>
            <img src={productos.image} alt={productos.alt} />
          </a>
        </div>
      ))}
    </main>
  );
}

export default MainContent;
