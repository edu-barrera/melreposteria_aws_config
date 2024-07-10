package melreposteria.org.controller;

import java.util.List;

import melreposteria.org.model.*;
import melreposteria.org.service.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping(path="/api/pedidos/")

public class PedidosController {
	
	private final PedidoService pedidoService;
	@Autowired
	public PedidosController(PedidoService pedidoService) {
		this.pedidoService=pedidoService;
	}//constructor

	
	@GetMapping()
	public List<Pedido> getPedidos(){
		return pedidoService.getAllPedidos();
	}//getPedidos
	
	@GetMapping(path="{pedId}")
	public Pedido getPedido(@PathVariable("pedId")Long id) {
		return pedidoService.getPedido(id);
	}//getPedido
	
	@DeleteMapping(path="{pedId}")// http://localhost:8080/api/pedido/1
	public Pedido deletePedido(@PathVariable("pedId")Long id) {
		return pedidoService.deletePedido(id);
	}//deletePedido
	
	@PostMapping //http://localhost:8080/api/pedido/
	public Pedido addPedido(@RequestBody Pedido pedido) {
		return pedidoService.addPedido(pedido);
	}//addPedido
	
	@PutMapping(path="{pedId}")
	public Pedido updatePedido(@PathVariable("pedId")Long id,
			@RequestParam(required=false)Double total,
			@RequestParam(required=false)Double precio,
			@RequestParam(required=false)String status,
			@RequestParam(required=false)String direccionEnvio,
			@RequestParam(required=false)String calleNumero,
			@RequestParam(required=false)Integer cp,
			@RequestParam(required=false)String colonia,
			@RequestParam(required=false)Long clientesId) {
		return pedidoService.updatePedido(id,total,precio,status,direccionEnvio,calleNumero,cp,colonia,clientesId);
	}//updatePedido	
	

}// class PedidosController
