package melreposteria.org.service;

import java.util.List;
import java.util.Optional;

import melreposteria.org.model.*;
import melreposteria.org.repository.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service

public class PedidoService {
	
	public final PedidoRepository pedidoRepository;
	@Autowired 
	public PedidoService(PedidoRepository pedidoRepository) {
		this.pedidoRepository= pedidoRepository;
	}//constructor
	
	public List<Pedido>getAllPedidos(){
		return pedidoRepository.findAll();
	}//getAllPedidos
	
	public Pedido getPedido(Long id) {
		return pedidoRepository.findById(id).orElseThrow(
				()-> new IllegalArgumentException("El pedido con el id [" + 
						id + "] no existe"));
	}//getPedido
	
	public Pedido deletePedido(Long id) {
		Pedido tmpPed = null;
		if(pedidoRepository.existsById(id)) {
			tmpPed=pedidoRepository.findById(id).get();
			pedidoRepository.deleteById(id);	
		}//if
		return tmpPed;
	}//deletePedido
	
	public Pedido addPedido (Pedido pedido) {
		
		Optional<Pedido>tmpPed=
				pedidoRepository.findById(pedido.getId());
		if(tmpPed.isEmpty()) {
			return pedidoRepository.save(pedido);
		}else {
			System.out.println("El pedido con el Id [" +
			pedido.getId() + " ] ya existe");
			return null;
		}//if else
	}//addPedido
	
	public Pedido updatePedido(Long id, Double total, Double precio, String status, String direccionEnvio, String calleNumero,
			Integer cp, String colonia, Long clientesId) {
		Pedido tmpPed=null;
		if(pedidoRepository.existsById(id)) {
			Pedido pedido = pedidoRepository.findById(id).get();
			if (total!=null) pedido.setTotal(total);
			if (precio!=null) pedido.setPrecio(precio);
			if (status!=null) pedido.setStatus(status);
			if (direccionEnvio!=null) pedido.setDireccionEnvio(direccionEnvio);
			if (calleNumero!=null) pedido.setCalleNumero(calleNumero);
			if (cp!=null) pedido.setCp(cp);
			if (colonia!=null) pedido.setColonia(colonia);
			
			tmpPed=pedido;
			pedidoRepository.save(pedido);
			tmpPed=pedido;
		}//if
		return tmpPed;
	}//updatePedido

}
