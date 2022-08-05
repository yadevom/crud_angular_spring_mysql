-- CREAR BD
CREATE DATABASE control_empleados DEFAULT CHARACTER SET utf8;

-- CREAR TABLA, AUNQUE SE CREA DESDE EL BACKEND
CREATE TABLE personaje.personas (
  id INT NOT NULL AUTO_INCREMENT,
  name VARCHAR(50) NULL,
  lastname VARCHAR(65) NULL,
  PRIMARY KEY (id));
  
-- INSERTAR DATOS
INSERT INTO personaje.personas
(id, name, lastname) VALUES
(1, 'Son', 'Goku'),
(2, 'Ten', 'Shin Han'),
(3, 'Majin', 'Boo'),
(4, 'Piccolo', 'Daimao'),
(5, 'Kame', 'Sennin'),
(6, 'Androide', '17'),
(7, 'Mr', 'Satan');

insert into personaje.empleados (id, apellido, email, nombre) values
(1, 'Aguilar', 'aguilar@gmail.com', 'Antonio'),
(2, 'Infante', 'pinfante@gmail.com', 'Pedro'),
(3, 'Fernandez', 'chentef@gmail.com', 'Vicente'),
(4, 'Negrete', 'jnegrete@gmail.com', 'Jorge'),
(5, 'Solis', 'jsolis@gmail.com', 'Javier'),
(6, 'Jimenez', 'jajimenez@gmail.com', 'Jose Alfredo'),
(7, 'Aguilar', 'laguilar@gmail.com', 'Luis');

-- VISUALIZAR TABLA
SELECT * FROM personaje.personas;

select * from personaje.empleados;


