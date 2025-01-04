if (document.querySelector("#drop-zone")) {
	const dropZone = document.getElementById("drop-zone");
	const fileInput = document.getElementById("file-input");
	const dataDisplay = document.querySelector("[data-for-dropzone]");

	function handleDrop(e) {
		e.preventDefault();
		dropZone.classList.remove("hover");

		const files = e.dataTransfer.files;
		if (files.length) {
		fileInput.files = files;
		updateThumbnail(files[0]);
		}
	}

	function handleDragOver(e) {
		e.preventDefault();
		dropZone.classList.add("hover");
	}

	function handleDragLeave() {
		dropZone.classList.remove("hover");
	}

	function updateThumbnail(file) {
		dataDisplay.textContent = file.name;
	}


	dropZone.addEventListener("dragover", handleDragOver);
	dropZone.addEventListener("dragleave", handleDragLeave);
	dropZone.addEventListener("drop", handleDrop);

	fileInput.addEventListener("change", function () {
		if (this.files.length) {
		updateThumbnail(this.files[0]);
		}
	});

	const imageInput = document.getElementById('file-input');
	const imagePreview = document.getElementById('image-preview');

// Обработчик события выбора файла
imageInput.addEventListener("change", function (event) {
    const file = event.target.files[0]; // Получение файла из input
    if (file) {
        const reader = new FileReader(); // Создаем объект FileReader
        reader.onload = function (e) {
            imagePreview.src = e.target.result; // Устанавливаем src для тега img
            imagePreview.style.display = 'block'; // Делаем изображение видимым
        };
        reader.readAsDataURL(file); // Читаем содержимое файла
    }
});
imageInput.addEventListener ("change", ()=> {
	const dropZone = document.getElementById("drop-zone");
	dropZone.classList.add("d-none")
});
}








