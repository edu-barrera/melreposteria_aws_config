package melreposteria.org.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import melreposteria.org.model.Producto;

@Repository

public interface ProductoRepository extends JpaRepository<Producto, Long>  {
	
	Optional<Producto> findByNombre(String nombre);
    Optional<Producto> findByPrecio(Double precio);
	

}
