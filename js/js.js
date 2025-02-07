const nav_bar = document.createElement('nav');

nav_bar.className = `
    navbar navbar-expand-sm bg-danger navbar-dark fixed-top
`;

nav_bar.innerHTML = `
    <div class="container-fluid">
        <a class="navbar-brand" href="index.html">Logo</a>
        <button class="navbar-toggler" type="button" 
        data-bs-toggle="collapse" data-bs-target="#mynavbar">
        <span class="navbar-toggler-icon"></span>
        </button>
        <div class=" collapse navbar-collapse justify-content-end" id="mynavbar">
            <ul class="navbar-nav mr-auto">
                <li class="nav-item">
                <a class="nav-link" href="clientes.html">
                    Lista de Clientes
                </a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="fale_conosco.html">
                    Fale Conosco
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="produtos.html">
                    Lista de Produtos
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="jogoForca.html">
                        Jogo da Forca
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="calculoSalario.html">
                        Cálculo Salário
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="calculoQuedaCorrente.html">
                        Cálculo Queda de Tensão
                    </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="calculoQuedaCorrente.html">
                        Cálculo de Piso por m²
                    </a>
                </li>
            </ul>
  
        </div>
    </div>
`;

document.body.prepend(nav_bar)

var currentUrl = window.location.href;

console.log('currentUrl', currentUrl)
console.log('currentUrl', currentUrl.split('/')[currentUrl.split('/').length - 1])

let current = currentUrl.split('/')[currentUrl.split('/').length - 1]

let li = document.getElementsByTagName('li')
let link = ''
for(link of li){
    link = link.firstElementChild.href.split('/')[link.firstElementChild.href.split('/').length - 1]
    console.log('currentUrl', link)
}

{/* <form class="d-flex">
<input class="form-control me-2" 
type="text" placeholder="Search">
<button class="btn btn-primary" 
type="button">Search</button>
</form> */}
