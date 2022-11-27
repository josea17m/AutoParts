function RenderProducto(props) {
  return (
    <main className="main-container">
      {props.numero.map((numero) => (
        <div className="grid-box-test">
          <p>Soy la caja {numero}</p>
        </div>
      ))}
    </main>
  );
}

export default RenderProducto;
