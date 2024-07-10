package melreposteria.org.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import melreposteria.org.dto.*;
import melreposteria.org.model.*;
import melreposteria.org.service.*;

@RestController
@RequestMapping(path="/api/clientes/")

public class ClientesController {
	
private final ClientesService clientesService;
	
	@Autowired 
	public ClientesController(ClientesService clientesService) {
		this.clientesService = clientesService;
		
	}//constructor
	
@GetMapping
public List<Clientes> getClientes() {
	return clientesService.getAllClientes();
}//getMapping


@GetMapping(path="{clienteId}") // http://localhost:8080/api/clientes/1
public Clientes getCliente(@PathVariable("clienteId") Long id) {
	return clientesService.getClientes(id);
}

@DeleteMapping(path="{clienteId}") // http://localhost:8080/api/clientes/1
public Clientes deleteCliente(@PathVariable("clienteId") Long id) {
	return clientesService.deleteClientes(id);
}

@PostMapping
public Clientes addCliente(@RequestBody Clientes cliente) {
	return clientesService.addClientes(cliente);
}

@PutMapping(path="{clienteId}") 
public Clientes updateCliente(@RequestBody ChangePassword changePassword,
		@PathVariable("clienteId") Long id) {                         
    return clientesService.updateClientes( id,changePassword);
}


}// class ClientesController
