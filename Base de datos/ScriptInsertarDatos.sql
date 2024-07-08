-- Script para agregar datos de clientes
INSERT INTO `melreposteria`.`clientes` (`calle_numero`, `codigo_postal`, `colonia`, `email`, `nombre`, `password`, `telefono`) VALUES
('Genaro Salinas  #327', '56334', 'Fundidores Chimalhuacán', 'luis.l.g.mejia327@gmail.com','Luis Leobardo Garcia Mejia', 'Luis2024', '5551466183'),
('Flor de María #68',  '01760', 'Flor de María', 'vanessahernandez0106@gmail.com','Karla Vanessa Gómez Hernández', 'Vane2024', '5562324819'),
('2ª Priv. José Reyes Martínez 109', '20030', 'Gremial', 'barreracarloseduardo03@gmail.com','Carlos Eduardo Barrera Lopez','Eduardo2024', '3321888124'),
('Cda de la providencia 21-2', '10200','San jeronimo lidice', 'carlosdanielocanavega@gmail.com','Daniel Ocana',"Daniel2024", '5588056426'),
('Agricultura #909', '42030', 'Rojo Gomez', 'ramirezmelanie@hotmail.com','Melanie Ramirez','Melanie2024', '7717023039');

-- Script para agregar datos de productos

INSERT INTO `melreposteria`.`productos` ( `descripcion`, `imagen`, `nombre`, `precio`) VALUES
('Sumérgete en el emocionante universo de la decoración, donde aprenderás a transformar tus creaciones en auténticas obras de arte comestibles.', "image.jpg",'Curso Decoración estilo Acuarela', '250'),
('Aprende a decorar deliciosos postres con el divertido y colorido mundo de Bob Esponja y sus amigos.', "image.jpg",'Curso Decoración de personajes', '250'),
('Descubre la tradición mexicana mientras aprendes a crear hermosas decoraciones inspiradas en esta emblemática figura del Día de los Muertos.', "image.jpg",'Curso Decoración de Catrinas', '250'),
('Aprende el apasionante arte de la decoración donde crearás exquisitas flores de azúcar y otros adornos florales para embellecer tus dulces creaciones y sorprender a tus seres queridos.', "image.jpg",'Curso Decoración de flores', '250' ),
('Archivo PDF Con 5 diseños diferentes de temporada\rIncluye diferentes medidas para etiquetas', "image.jpg",'Etiquetas Día de Muertos', '50' ),
('Archivo PDF Con 5 diseños diferentes de temporada\rIncluye diferentes medidas para etiquetas', "image.jpg",'Etiquetas San Valentín', '50' ),
('Archivo PDF Con 5 diseños diferentes de temporada\rIncluye diferentes medidas para etiquetas', "image.jpg",'Etiquetas Halloween', '50' ),
('Archivo PDF Con 5 diseños diferentes de temporada\rIncluye diferentes medidas para etiquetas', "image.jpg",'Etiquetas 15 de Septiembre', '50' ),
('Archivo PDF Con 5 diseños diferentes de temporada\r Incluye diferentes medidas para etiquetas', "image.jpg",'Etiquetas Día de las madres', '50' );


-- Script para agregar pedidos
INSERT INTO `melreposteria`.`pedidos` (`calle_numero`, `colonia`, `cp`, `direccion_envio`, `precio`, `status`, `total`) VALUES 
('Genaro Salinas No 327','Fundidores Chimalhuacán', '56334', 'Genaro Salinas #327' ,250, 'En proceso', 350),
( 'Flor de María #68','Flor de María', '01760', 'Flor de María #68',50, 'Entregado', 150),
('2ª Priv. José Reyes Martínez 109','Gremial', '20030', '2ª Priv. José Reyes Martínez 109', 50, 'En proceso', 200),
('Cda de la providencia 21-2','San jeronimo lidice', '10200', 'CDA de la providencia 21-2', 50, 'Pendiente', 100),
('Agricultura #909','Rojo Gomez','42030', 'Agricultura #909', 250, 'En proceso', 300);


