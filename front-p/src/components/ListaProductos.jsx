import ProductoItem from "./ProductoItem";

function ListaProductos({ productos }) {
  return (
    <ul id="product-list">
      {productos.map((p) => (
        <ProductoItem key={p._id} producto={p} />
      ))}
    </ul>
  );
}

export default ListaProductos;