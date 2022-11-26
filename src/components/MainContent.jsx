function MainContent (props) {
    return (
        <main className="main-container">
          {props.producto.map(producto =>
          <div className="grid-box"><a href={producto.url}><img src={producto.image} alt={producto.alt} /></a></div>)}
        </main>
    );
}

export default MainContent;