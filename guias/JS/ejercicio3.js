// Clase Trabajador
class Trabajador {
    constructor(nombre, sueldo) {
        this.nombre = nombre;
        this.sueldo = sueldo;
    }

    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Sueldo: ${this.sueldo}`);
    }
}

// Clase Gerente que hereda de Trabajador
class Gerente extends Trabajador {
    constructor(nombre, sueldo, departamento) {
        super(nombre, sueldo);
        this.departamento = departamento;
    }

    // Sobrescribe el método para mostrar también el departamento
    mostrarDetalles() {
        console.log(`Nombre: ${this.nombre}, Sueldo: ${this.sueldo}, Departamento: ${this.departamento}`);
    }
}

// Crear instancias de Trabajador
let trabajador1 = new Trabajador("Juan", 3000);
let trabajador2 = new Trabajador("Pedro", 3500);

// Crear instancias de Gerente
let gerente1 = new Gerente("Ana", 5000, "Recursos Humanos");
let gerente2 = new Gerente("Luis", 6000, "IT");

// Mostrar detalles de los empleados
trabajador1.mostrarDetalles(); // Nombre: Juan, Sueldo: 3000
trabajador2.mostrarDetalles(); // Nombre: Pedro, Sueldo: 3500
gerente1.mostrarDetalles();    // Nombre: Ana, Sueldo: 5000, Departamento: Recursos Humanos
gerente2.mostrarDetalles();    // Nombre: Luis, Sueldo: 6000, Departamento: IT
