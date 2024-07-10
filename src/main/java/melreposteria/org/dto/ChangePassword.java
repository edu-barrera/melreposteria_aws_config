package melreposteria.org.dto;

public class ChangePassword {
	
	private String password;
	private String npassword;

	public ChangePassword (String password, String npassword) {
		
		this.password= password;
		this.npassword = npassword;
	}
	public ChangePassword() {}
	
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public String getNPassword() {
		return npassword;
	}
	public void setNPassword(String npassword) {
		this.npassword = npassword;
	}
	
	@Override
	public String toString() {
		return "ChangePassword [password=" + password + ", npassword=" + npassword + "]";
	}
	
	

}
