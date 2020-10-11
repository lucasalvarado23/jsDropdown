const select = document.querySelector('#select');
const opciones = document.querySelector('#opciones');
const contenidoSelect = document.querySelector('#select .contenido-select');
const hiddenInput = document.querySelector('#inputSelect');

document.querySelectorAll('#opciones > .opcion').forEach((opcion) => {
	opcion.addEventListener('click', (e) => {
		e.preventDefault();
        contenidoSelect.innerHTML = e.currentTarget.innerHTML;
        select.classList.toggle('active');
        opciones.classList.toggle('active');
        hiddenInput.value = e.currentTarget.querySelector('.titulo').innerText;
        console.log(hiddenInput.value);

        if(hiddenInput.value === 'Argentina'){
            swal("Selecionaste Argentina", "Vamos Argentina Carajo!", "success");
            document.querySelector('.jscon').innerHTML = "Si seleccionas argentina te sale este texto";
        } else if(hiddenInput.value === 'Colombia'){
                swal("Selecionaste Colombia", "Ush Parceros", "success");
                document.querySelector('.jscon').innerHTML = "Si seleccionas Colombia te sale este texto";
            } else {
                swal("Selecionaste España", "La madre patria", "success");
                document.querySelector('.jscon').innerHTML = "Si seleccionas España te sale este texto";
            }
    });
    
});

select.addEventListener('click', ()=> {
    select.classList.toggle('active');
    opciones.classList.toggle('active');
});

