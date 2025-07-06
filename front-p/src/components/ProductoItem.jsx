function ProductoItem({ producto }) {
  return (
    <li style={{ marginBottom: "1rem" }}>
      
      <strong>{producto.nombre}</strong> - ${producto.precio}
     
      <p>{producto.descripcion}</p>
      
      {producto.imagen && (
        <img
          src={producto.imagen}
          alt={producto.nombre}
          width="100"
          style={{ display: "block" }}
        />
      )}
    </li>
  );
}

export default ProductoItem;