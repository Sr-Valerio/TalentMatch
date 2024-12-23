document.addEventListener("DOMContentLoaded", function(){
    const jobButton = document.querySelector("#showJobs");
    jobButton.addEventListener("click", function() {
        alert("Mostrando mas empleos...");
        // Aqui podrias cargar mas empleos desde un archivo JSON o una API.
    });
});


document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault(); //Evita que el formulario de envie automaticamente
    const email = document.getElementById("email").Value;
    const password = document.getElementById(password).value;

    if (email && password){
        alert("Inicio de sesion exitoso.");
        // Aqui puedes redirigir a otra pagina o realizar logica adicional.
    } else {
        alert("Por favor, completa todo los campos.");
    }

});


document.getElementById("registerForm")?.addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("role").value;


    if (name && email && password && role) {
        alert(`Registro exitoso como ${role}.`);
        // Aqui puedes guardar los datos o redirigir.
    } else {
        alert("Por favor, completa los campos.");
    }

});


// Manejo de Publicar Oferta
document.getElementById("jobForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const jobTitle = document.getElementById("jobTitle").value;
    const companyName = document.getElementById("companyName").value;
    const location = document.getElementById("location").value;
    const description = document.getElementById("description").value;
    const salary = document.getElementById("salary").value || "No especificado";

    alert(`Oferta publicada:\n\nTítulo: ${jobTitle}\nEmpresa: ${companyName}\nUbicación: ${location}\nSalario: ${salary}\nDescripción: ${description}`);
    // Aquí puedes guardar los datos en un servidor o localmente.
});

// Manejo de Búsqueda de Empleos
document.getElementById("searchForm")?.addEventListener("submit", function(event) {
    event.preventDefault();

    const search = document.getElementById("search").value;
    const location = document.getElementById("location").value;

    // Simula resultados de búsqueda (puedes conectarlo a un servidor en el futuro)
    const jobs = [
        { title: "Desarrollador Web", company: "TalentMatch", location: "Remoto", salary: "20000 MXN" },
        { title: "Especialista en Marketing", company: "Empresa ABC", location: "Ciudad de México", salary: "15000 MXN" }
    ];

    const jobList = document.getElementById("jobList");
    jobList.innerHTML = "";

    jobs.forEach(job => {
        const li = document.createElement("li");
        li.textContent = `${job.title} - ${job.company} (${job.location}) - Salario: ${job.salary}`;
        jobList.appendChild(li);
    });

    if (!jobs.length) {
        const noResults = document.createElement("li");
        noResults.textContent = "No se encontraron resultados.";
        jobList.appendChild(noResults);
    }
});
