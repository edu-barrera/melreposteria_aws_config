package melreposteria.org.service;


import java.util.List;
import java.util.Optional;
import melreposteria.org.model.*;
import melreposteria.org.repository.ProductoRepository;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class ProductoService {

public final ProductoRepository productoRepository;
	
	@Autowired
	public ProductoService (ProductoRepository productoRepository) {
		this.productoRepository = productoRepository;
	}//constructor
	
	public List<Producto> getAllProducts(){
		return productoRepository.findAll();
	}//getAllProducts

	public Producto getProduct(Long id) {
	return productoRepository.findById(id).orElseThrow(
			()-> new IllegalArgumentException("El producto con el id ["+ id + "] no existe"));
	}//getProduct

	public Producto deleteProduct(Long id) {
		Producto tmpProd= null;
		if (productoRepository.existsById(id)) {
			tmpProd=productoRepository.findById(id).get();
			productoRepository.deleteById(id);
		}//if
		return tmpProd;
	}//deleteProduct

	public Producto addProduct(Producto producto) {
		Optional<Producto>tmpProd = 
				productoRepository.findByNombre(producto.getNombre());
	if(tmpProd.isEmpty()) {
		return productoRepository.save(producto);
	} else {
		System.out.println("El producto con el nombre [" + producto.getNombre() + "] ya existe");
		return null;
	}//else
	}//addProduct
		
	 
public Producto updateProduct(long id, String nombre, String descripcion, String imagen, Double precio, Long pedidosId) {
		Producto tmpProd =null;
			if (productoRepository.existsById(id)) {
				Producto producto = productoRepository.findById(id).get();
				if (nombre != null) producto.setNombre(nombre);
				if (descripcion != null)producto.setDescripcion(descripcion);
				if (imagen != null) producto.setImagen(imagen);
				if (precio != null) producto.setPrecio(precio);
				productoRepository.save(producto);
				tmpProd= producto;
				
				}//update
		return tmpProd;
	}
	

}
