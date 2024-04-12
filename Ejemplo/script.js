const MenosBtn = document.getElementById('DecrementarBtn');
const MasBtn = document.getElementById('IncrementarBtn');
const NumeroTxt = document.getElementById('NumeroTxt');
const BotonAgregar = document.getElementById('AgregarBtn');

let contador=0;

MenosBtn.addEventListener('click', function() {
    contador--;
    NumeroTxt.textContent=contador;
});

MasBtn.addEventListener('click', function() {
    contador++;
    NumeroTxt.textContent=contador;
});

//---------------------------------------------------------------
const ProductoTxt = document.querySelector('#ProductoTxt');
const AgregarBtn = document.querySelector('#AgregarBtn');
const ListaP = document.querySelector('#ListaP')

let listaProductos=[];

function CrearEtiquetas()
{
    const EtiquetaLi = document.createElement('li'); // Se crea la etiqueta <li></li>
    const EtiquetaProducto = document.createElement('span'); // Se crea la etiqueta <span></span> que va ir dentro de <li>
    EtiquetaProducto.textContent=(ProductoTxt.value).toUpperCase(); //A la etiqueta <span> le asigno el valor de input
    EtiquetaLi.appendChild(EtiquetaProducto);//Aqui ordeno que la etiqueta producto(span) va dentro de la etiqueta li
    ListaP.appendChild(EtiquetaLi);//Aqui ordeno que el elemento <li> va dentro de <ul>
    ProductoTxt.value='';
    ProductoTxt.focus();

}

ProductoTxt.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        listaProductos.push=ProductoTxt.value;
        CrearEtiquetas();
    }
});

BotonAgregar.addEventListener('click', () => CrearEtiquetas());
