package melreposteria.org;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;

import melreposteria.org.config.JwtFilter;

@SpringBootApplication
public class MelReposteriaApplication {

	public static void main(String[] args) {
		SpringApplication.run(MelReposteriaApplication.class, args);
	}// main
	
	@Bean
	public FilterRegistrationBean<JwtFilter> jwtFilter(){
		FilterRegistrationBean<JwtFilter> registrationBean = 
				new FilterRegistrationBean<JwtFilter> ();
		registrationBean.setFilter(new JwtFilter());
		registrationBean.addUrlPatterns("/api/productos/*");
		registrationBean.addUrlPatterns("/api/clientes/*");
		return registrationBean;		
	} //jwtFilter

}
