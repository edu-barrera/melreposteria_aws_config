package melreposteria.org.repository;

import java.util.Optional;

import melreposteria.org.model.*;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface PedidoRepository extends JpaRepository<Pedido, Long>{
	Optional<Pedido> findById (Long id);

	
	

}
