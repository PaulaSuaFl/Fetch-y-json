// Constante que apunta al archivo JSON con los datos
const DATA_URL = "json/data.json";

// Traemos el contenedor desde el DOM
const container = document.getElementById("container");

// Función para mostrar los nombres y apellidos de los estudiantes en el DOM
function showData(dataArray) {
  // Iteramos sobre cada ítem en el array de datos
  for (const item of dataArray) {
    // Agregamos cada nombre y apellido como un párrafo dentro del contenedor
    container.innerHTML += `<p>${item.name} ${item.lastname}</p>`;
  }
}

// Realizamos el fetch al archivo JSON

fetch(DATA_URL)
  .then(response => {
    if (!response.ok) {
      throw new Error("Error al cargar el archivo JSON");
    }
    return response.json(); // Parseamos la respuesta en formato JSON
  })
  .then(data => {
    console.log(data); // Depuración: mostramos los datos en consola para verificar
    showData(data.students); // Pasamos el array de estudiantes a la función showData
  })
  .catch(error => {
    console.error("Error al cargar los datos:", error); // En caso de error, lo mostramos en la consola
  });



