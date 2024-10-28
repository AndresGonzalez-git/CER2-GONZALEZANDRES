// script.js
document.getElementById('tipoResiduo').addEventListener('change', function() {
    const tipoResiduo = this.value;
    const subcategoriaSelect = document.getElementById('subcategoriaResiduo');
    subcategoriaSelect.innerHTML = ''; 

    let subcategorias = [];
    switch (tipoResiduo) {
        case 'Plástico':
            subcategorias = ['Botellas', 'Envases', 'Bolsas'];
            break;
        case 'Papel':
            subcategorias = ['Periódicos', 'Cartón', 'Papel de Oficina'];
            break;
        case 'Vidrio':
            subcategorias = ['Botellas', 'Frascos','Cristalería'];
            break;
        case 'Metales':
            subcategorias = ['Latas', 'Cables','Electrodomésticos pequeños'];
            break;
        case 'Electrónicos':
            subcategorias = ['Teléfonos móviles', 'Baterías', 'Componentes de computadoras'];
            break;
        default:
            subcategorias = [];
    }

    subcategorias.forEach(subcategoria => {
        const option = document.createElement('option');
        option.text = subcategoria;
        subcategoriaSelect.add(option);
    });
});
