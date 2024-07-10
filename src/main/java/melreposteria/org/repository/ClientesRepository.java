package melreposteria.org.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import melreposteria.org.model.*;

@Repository

public interface ClientesRepository extends JpaRepository<Clientes, Long>  {
	Optional<Clientes> findByEmail(String email);

}
