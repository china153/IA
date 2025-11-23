function recomendar() {
    let mat = document.getElementById("matematicas").value;
    let comp = document.getElementById("computadoras").value;
    let gente = document.getElementById("gente").value;
    let creativo = document.getElementById("creatividad").value;
    let salud = document.getElementById("salud").value;
    let oficina = document.getElementById("oficina").value;

    let r = "";

    // ---- Reglas con más inteligencia ----
    
    if (salud === "si") {
        r = "Carreras recomendadas: Medicina, Enfermería, Nutrición, Fisioterapia, Biología.";
    }
    else if (mat === "si" && comp === "si") {
        r = "Carreras recomendadas: Ingeniería en Sistemas, Ingeniería Industrial, Ingeniería Mecatrónica, Matemáticas Aplicadas.";
    }
    else if (creativo === "si" && comp === "si") {
        r = "Carreras recomendadas: Diseño Digital, Animación, Comunicación Multimedia, Desarrollo de Videojuegos.";
    }
    else if (creativo === "si" && gente === "si") {
        r = "Carreras recomendadas: Diseño Gráfico, Comunicación, Publicidad, Marketing Digital.";
    }
    else if (gente === "si" && mat === "no") {
        r = "Carreras recomendadas: Psicología, Pedagogía, Trabajo Social, Recursos Humanos.";
    }
    else if (oficina === "oficina" && mat === "si") {
        r = "Carreras recomendadas: Contaduría, Administración, Economía, Negocios Internacionales.";
    }
    else if (oficina === "campo") {
        r = "Carreras recomendadas: Ingeniería Ambiental, Veterinaria, Agricultura, Geología.";
    }
    else {
        r = "Carreras recomendadas: Artes, Sociología, Historia, Filosofía.";
    }

    // mostrar resultado
    let div = document.getElementById("resultado");
    div.style.display = "block";
    div.innerText = r;
}
