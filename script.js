const txt='Hoy el sol salió un poco más temprano.\n\nQuise creer que no era casualidad, que incluso el cielo sabía que hoy cumplías veinticinco años.\n\nEntonces pensé en los girasoles.\n\nSiempre buscan la luz.\nY yo descubrí hace mucho que la luz también puede tener un nombre.\n\nEl tuyo.\n\nGracias por llenar mis días de calma y por enseñarme que el amor también sabe esperar.\n\nAunque hoy celebremos a la distancia, jamás me he sentido lejos de tu corazón.\n\nDeseo que tus 25 años estén llenos de sueños cumplidos, risas, salud y aventuras.\n\nPrometo que llegará el día en que los kilómetros solo serán una historia que contaremos sonriendo.\n\nHasta entonces seguiré caminando hacia ti, como un girasol que nunca deja de buscar el sol.\n\nFeliz cumpleaños, mi amor.\n\nGracias por existir.\nGracias por elegirme.\n\nTe amo infinitamente.\n\nSiempre tuyo,\nVirgilio 🌻❤️';
const btn=document.getElementById('start');
const welcome=document.getElementById('welcome');
const letter=document.getElementById('letter');
const out=document.getElementById('type');
btn.onclick=()=>{
welcome.classList.add('hidden');
letter.classList.remove('hidden');
let i=0;
(function type(){
 if(i<txt.length){
   out.textContent+=txt.charAt(i++);
   setTimeout(type,28);
 }
})();
};
