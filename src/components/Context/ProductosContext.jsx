import { createContext, useEffect, useState } from "react";


export const ProductosContext = createContext();

const ProductosProvider = ({ children }) => {
	const [productos, setProductos] = useState([]);
	useEffect(() => {
		console.log("entro");
		setTimeout(() => {
			fetch('../data/productos.json').then((response) => {
				console.log(response.json());
				return response.json();
			}).then((result) => {
				console.log(result);
				setProductos(result);
			});
			console.log(productos);
		}, 1000);
	});
	return (
		<ProductosContext.Provider value={{productos}}>
			{children}
		</ProductosContext.Provider>
	);
}
export default ProductosProvider;