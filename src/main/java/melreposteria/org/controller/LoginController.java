package melreposteria.org.controller;


import java.util.Calendar;
import java.util.Date;

import javax.servlet.ServletException;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import melreposteria.org.config.JwtFilter;
import melreposteria.org.dto.Token;
import melreposteria.org.model.Clientes;
import melreposteria.org.service.ClientesService;

@RestController
@RequestMapping(path = "/api/login/")
public class LoginController {
private final ClientesService clientesService;
	
	@Autowired
	public LoginController(ClientesService clientesService) {		
		this.clientesService = clientesService;
	}// loginCliente
	
	
	@PostMapping
	public Token loginCliente (@RequestBody Clientes clientes) throws ServletException {
		if(clientesService.validateCliente(clientes)) {
			System.out.println("Usuario válido" + clientes.getEmail());
			return new Token(generateToken(clientes.getEmail()));
		}// if validateClientes
		throw new ServletException("Nombre de usuario o contraseña incorrectos [" + clientes.getEmail() + "]");
	} //loginCliente
	
	


	private String generateToken(String username) {
		Calendar calendar = Calendar.getInstance(); // Fecha hora actual
		calendar.add(Calendar.HOUR, 10); // Pruebas
		//calendar.add(Calendar.MINUTE, 30); // Produccion		
		return Jwts.builder().setSubject(username).claim("role", "user")
				.setIssuedAt(new Date())
				.setExpiration(calendar.getTime())
				.signWith(SignatureAlgorithm.HS256, JwtFilter.secret)
				.compact();
	} // generateToken

	
	
	

}// class LoginController
