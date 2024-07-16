package melreposteria.org.config;

import java.io.IOException;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.ServletRequest;
import javax.servlet.ServletResponse;
import javax.servlet.http.HttpServletRequest;


import org.springframework.web.filter.GenericFilterBean;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.ExpiredJwtException;
import io.jsonwebtoken.JwsHeader;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.MalformedJwtException;
import io.jsonwebtoken.SignatureException;


public class JwtFilter extends GenericFilterBean {

	public static String secret = "No#cMe#Ocurr3#Ningn4#Contr4$eNa";

	@Override
	public void doFilter(ServletRequest request, ServletResponse response, FilterChain chain)
	        throws IOException, ServletException {
	    HttpServletRequest httpServletRequest = (HttpServletRequest) request;
	    String authHeader = httpServletRequest.getHeader("authorization");
	    System.out.println("Request URI: " + httpServletRequest.getRequestURI());
	    System.out.println("Auth Header: " + authHeader);

	    if (httpServletRequest.getRequestURI().equals("/api/login/")) {
	        chain.doFilter(request, response);
	        return;
	    }

	    if (  (( "POST".equals(httpServletRequest.getMethod())) &&
	            (! httpServletRequest.getRequestURI().contains("/api/clientes/") )
	            ||
	            ( ("GET".equals(httpServletRequest.getMethod())) &&
	                    (! httpServletRequest.getRequestURI().contains("/api/productos/") ) ) ||
	            ("PUT".equals(httpServletRequest.getMethod())) ||
	            ("DELETE".equals(httpServletRequest.getMethod()))
	            )) {
	        if (authHeader == null || !authHeader.startsWith("Bearer ") ) {
	            throw new ServletException("1. Invalid Token");
	        }

	        String token = authHeader.substring(7);
	        try {
	            Claims claims = Jwts.parser().setSigningKey(secret)
	                    .parseClaimsJws(token).getBody();

	            // Logging claims for verification
	            claims.forEach((key, value) -> {
	                System.out.println("Claim - Key: " + key + ", Value: " + value);
	            });

	        } catch (SignatureException | MalformedJwtException | ExpiredJwtException e ) {
	            throw new ServletException("2. Invalid Token");
	        }
	    }

	    chain.doFilter(request, response);
	}
	
	
	

} // class JwtFilter
