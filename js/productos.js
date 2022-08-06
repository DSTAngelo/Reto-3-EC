const dropArea = document.querySelector(".drop-area");
const dragText = dropArea.querySelector('h2');
const button = dropArea.querySelector("button");
const input = dropArea.querySelector("#input-file");
const imaUrl = document.querySelector("campo_imagen");

const btnAdmin = document.querySelector("#admin");

let files;

btnAdmin.addEventListener('click', (e) => {
    e.preventDefault();
    especificar_formulario("administrador.html");
});


button.addEventListener('click', (e) => { 
    input.click();
});


input.addEventListener('change', (e) => {
    files = input.files;
    dropArea.classList.add('active');
    showFiles(files);
    dropArea.classList.remove('active');
});



dropArea.addEventListener('dragover', (e) => {
    e.preventDefault();
    dropArea.classList.add('active');
    dragText.innerHTML = "suelte el archivo aquí";
});

dropArea.addEventListener("dragleave", (e) => {
    e.preventDefault();
    dropArea.classList.remove('active');
    dragText.innerHTML = "Arrastra el archivo aquí";

});
 
dropArea.addEventListener("drop", (e) => { 
    e.preventDefault();
    files = e.dataTransfer.files;
    showFiles(files);
    dropArea.classList.remove("active");
    dragText.innerHTML = "Arrastra el archivo aquí";
});




 
function showFiles(file) {
    if (files.length == undefined) {
        proccessFiles(files);
    } else {
        for (const file of files) {
            proccessFiles(file);
        }
    }
}

function proccessFiles(file) {
    const docType = file.type;
    const validExtensions = [
      "image/jpeg",
      "image/png",
      "image/jpg",
      "image/svg",
      "image/gif",
    ];
    if ( validExtensions.includes(docType) ) {
        const fileReader = new FileReader();
        const id = `file-${Math.random().toString(32).substring(7)}`;

        fileReader.addEventListener('load', e => { 

            const fileUrl = fileReader.result;
            const urlImagen = document.querySelector(".campo_imagen");
            urlImagen.value = fileUrl;
            console.log(urlImagen.name);
            const image = `
                <div id="${id}" class="file-container">
                    <img src="${fileUrl}" alt="${file.name}" class="ruta_imagen" width="50px">
                    <div class="status">
                        <span>${file.name}</span>
                            <span class="status-text">
                        </span>
                    </div>
                </div>
            `;
            const html = document.querySelector('#preview').innerHTML;
            document.querySelector('#preview').innerHTML = image + html;
        });

        fileReader.readAsDataURL(file);
        // uploadFile(file, id);

    } else {
        alert('El archivo no es una imagen');
    }

}

