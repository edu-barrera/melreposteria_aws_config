package melreposteria.org.model;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToMany;
import javax.persistence.Table;

@Entity
@Table(name="clientes")
public class Clientes {	
	
	@Id
    @GeneratedValue (strategy = GenerationType.IDENTITY)
    @Column (name="id", unique=true, nullable=false)	
	private Long id;
	@Column (nullable=false)
	private String nombre;
	private String telefono;
	private String email;
	@Column (nullable=false)
	private String password;
	private String calleNumero;	
	private String colonia;	
	private Integer  codigoPostal;	
	
	@OneToMany(cascade = CascadeType.ALL)
	@JoinColumn(name = "clientesId", referencedColumnName = "id")
	List<Pedido> pedidos = new ArrayList<Pedido>();
	
	public Clientes(String nombre, String email, String password, String telefono, Integer codigoPostal, String calleNumero,
			String colonia) {
		
		this.nombre = nombre;
		this.email = email;
		this.password = password;
		this.telefono = telefono;
		this.codigoPostal = codigoPostal;
		this.calleNumero = calleNumero;
		this.colonia = colonia;
	}//Constructor

	public Clientes () {
	}//Constructor vacio


	//Getter and Setters
	public String getNombre() {
		return nombre;
	}//getNombre

	public void setNombre(String nombre) {
		this.nombre = nombre;
	}//setNombre

	public String getEmail() {
		return email;
	}//getEmail

	public void setEmail(String email) {
		this.email = email;
	}//setEmail

	public String getPassword() {
		return password;
	}//getContraseña

	public void setPassword(String password) {
		this.password = password;
	}//setContraseña

	public String getTelefono() {
		return telefono;
	}//getTelefono

	public void setTelefono(String telefono) {
		this.telefono = telefono;
	}//setTelefono

	public Integer getCodigoPostal() {
		return codigoPostal;
	}//getCodigoPostal

	public void setCodigoPostal(Integer codigoPostal) {
		this.codigoPostal = codigoPostal;
	}//setCodigoPostal

	public String getCalleNumero() {
		return calleNumero;
	}//getCalleNumero

	public void setCalleNumero(String calleNumero) {
		this.calleNumero = calleNumero;
	}//setCalleNumero


	public String getColonia() {
		return colonia;
	}//getColonia


	public void setColonia(String colonia) {
		this.colonia = colonia;
	}//setColonia	
	

	public Long getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Clientes [id=" + id + ", nombre=" + nombre + ", email=" + email + ", password=" + password
				+ ", telefono=" + telefono + ", codigoPostal=" + codigoPostal + ", calleNumero=" + calleNumero
				+ ", colonia=" + colonia + "]";
	}

	

	

}
