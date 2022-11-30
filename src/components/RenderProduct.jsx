import data from "./productsData.json";

export default function RenderProducto() {
  return (
    <main className="main-container">
      {data.map((producto) => (
        <div className="grid-box-test">
          <img src={producto.img} alt={producto.alt} />
          <p>{producto.name}</p>
          <p>{producto.price}</p>
        </div>
      ))}
    </main>
  );
}
