Swal.fire({
    title:'¡Publicidad!',
    text:'Recibimos tu bateria por parte de pago de la vieja',
    icon:undefined,
    footer:'anuncio',
    width:'300px',
    padding:'1rem',
    background:'#fff',
    grow:false,
    timer:5000,
    timerProgressBar: true,
    position: 'bottom-end',
    allowEscapeKey:false,
    allowOutsideClick: false,

    showConfirmButton:false,
    showCancelButton: false,
    showCloseButton:true,
    CloseButtonArialLabel: 'Cerrar esta alerta',

    imageUrl:'images/img/bateria.PNG',
    imageWidth:'100%'


})




function servicios1() {
    Swal.fire({
        title: 'Bateria Bosch',
        width:'70%', 
        padding:'1rem',
        background:'black' ,
        html:'<div class="contenedor-alert"><div class="info-bateria"><img src="images/baterias/bosch.PNG"><h5>Batería Bosch S5</h5><p>Garantia 2 meses</p></div><div class="info-bateria"><img src="images/baterias/bosch6.PNG"><h5>Batería Bosch S4</h5><p>Garantia 4 meses</p></div><div class="info-bateria"><img src="images/baterias/boschs3.PNG"><h5>Batería Bosch S3</h5><p>Garantia 8 meses</p></div><div class="info-bateria"><img src="images/baterias/boschs5.PNG"><h5>Batería Bosch S2</h5><p>Garantia 6 meses</p></div>',
        allowOutsideClick:false,
        showConfirmButton: false,
        showCloseButton: true,

        customClass:{
            title: 'title-baterias'

        }
    });
    
   
} 
function servicios2() {
    
    Swal.fire({
        title: 'Bateria Bosch',
        width:'70%', 
        padding:'1rem',
        background:'black' ,
        html:'<div class="contenedor-alert"><div class="info-bateria"><img src="images/baterias/mc1.PNG"><h5>Batería Bosch S5</h5><p>Garantia 2 meses</p></div><div class="info-bateria"><img src="images/baterias/mc2.PNG"><h5>Batería Bosch S4</h5><p>Garantia 4 meses</p></div><div class="info-bateria"><img src="images/baterias/mc3.PNG"><h5>Batería Bosch S3</h5><p>Garantia 8 meses</p></div><div class="info-bateria"><img src="images/baterias/mc4.jpg"><h5>Batería Bosch S2</h5><p>Garantia 6 meses</p></div><div class="info-bateria"><img src="images/baterias/mc5.PNG"><h5>Batería Bosch S5</h5><p>Garantia 2 meses</p></div><div class="info-bateria"><img src="images/baterias/mc6.PNG"><h5>Batería Bosch S5</h5><p>Garantia 2 meses</p></div><div class="info-bateria"><img src="images/baterias/mc7.PNG"><h5>Batería Bosch S5</h5><p>Garantia 2 meses</p></div><div class="info-bateria"><img src="images/baterias/mc8.PNG"><h5>Batería Bosch S5</h5><p>Garantia 2 meses</p></div>',
        allowOutsideClick:false,
        showConfirmButton: false,
        showCloseButton: true,

        customClass:{
            title: 'title-baterias'

        }
    });
    
   
} 
const getSwal = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(Swal);
        }, 1500);
    }); 
}

getSwal()
    .then((Swal) => console.log(Swal));