const resultContainer = document.querySelector(".result-container");
const option = document.querySelector("#zodiac-option");
const optionValue = document.querySelectorAll("option");
const btn = document.querySelector(".btn");

const aries = {
  sign: "Aries",
  element: "Fuego",
  polarity: "Positivo",
  quality: "Cardinal",
  rulingPlanet: "Marte",
  rulingHouse: "I",
  spiritColor: "Rojo",
  luckyGem: "Diamante",
  flower: "Cardo y Madreselva",
  loveMatch: "Sagitario",
  img: "images/aries.png",
  symbol: "svg/aries.png",
  dsc: "El primer signo del Zodíaco, Aries son los pioneros. Apasionado e independiente, Aries nunca hará algo solo porque todos los demás lo están haciendo; un Carnero debe estar 100 por ciento comprometido con la tarea que tiene entre manos. Competitivo al máximo, la mejor manera de motivar a un Aries es convertir algo en un concurso. Aries pondrá todo lo que tiene (y algo más) para ganar. Leales, inteligentes e impulsivos, siempre tienen múltiples proyectos en mente y no estarán satisfechos hasta que su trabajo, vida social y vida personal se alineen exactamente con la vida soñada que han imaginado. Aquellos que se sienten atraídos por el magnético Aries pueden tener problemas para mantenerse al día, pero si pueden, tendrán un amigo para toda la vida."
};

const libra = {
  sign: "Libra",
  element: "Aire",
  polarity: "Positivo",
  quality: "Cardinal",
  rulingPlanet: "Venus",
  rulingHouse: "VII",
  spiritColor: "Azul",
  luckyGem: "Zafiro",
  flower: "Rosa",
  loveMatch: "Géminis",
  img: "images/libra.png",
  symbol: "svg/libra.png",
  dsc: "Inteligentes, amables y siempre dispuestos a poner a los demás antes que a sí mismos, los Libra valoran la armonía en todas sus formas. Regido por Venus, el planeta de la belleza, Libra adora una vida que se vea bien. Como maestro del compromiso y la diplomacia, Libra es experto en ver todos los puntos de vista y se destaca en la elaboración de compromisos y la mediación entre los demás. Este signo tiene una rica vida interior pero ama a otras personas, y siempre son más felices con un gran grupo de amigos, familiares y compañeros de trabajo con los que pueden contar."
};

const taurus = {
  sign: "Tauro",
  element: "Tierra",
  polarity: "Negativo",
  quality: "Fijo",
  rulingPlanet: "Venus",
  rulingHouse: "II",
  spiritColor: "Rosa",
  luckyGem: "Esmeralda",
  flower: "Rosa, Amapola y Dedalera",
  loveMatch: "Cáncer y Virgo",
  img: "images/taurus.png",
  symbol: "svg/taurus.png",
  dsc: "Inteligente, ambicioso y digno de confianza, Tauro es el ancla del zodíaco. Amigos, colegas y socios increíbles, los Tauro valoran la honestidad por encima de todo y están orgullosos de que sus relaciones personales tiendan a estar libres de dramas. Los toros tienen la reputación de ser tercos, pero no siempre se quedan estancados en sus caminos. Este signo de búsqueda está dispuesto a ver otro punto de vista, pero no cambiará de opinión solo para hacer feliz a otra persona. Cambiarán su pensamiento solo si realmente tienen un cambio de corazón."
};

const scorpio = {
  sign: "Escorpio",
  element: "Agua",
  polarity: "Negativo",
  quality: "Fijo",
  rulingPlanet: "Plutón y Marte",
  rulingHouse: "VIII",
  spiritColor: "Negro",
  luckyGem: "Topacio y Ópalo",
  flower: "Hibisco y Geranio",
  loveMatch: "Cáncer",
  img: "images/scorpio.png",
  symbol: "svg/scorpio.png",
  dsc: "Apasionados, independientes y sin miedo a abrir su propio camino sin importar lo que piensen los demás, los Escorpio hacen una declaración dondequiera que vayan. Les encantan los debates, no le temen a la controversia y no retrocederán en un debate. También odian a las personas que no son genuinas y que se preocupan por ser auténticos, incluso si lo auténtico no es bonito."
};

const gemini = {
  sign: "Géminis",
  element: "Aire",
  polarity: "Positivo",
  quality: "Mutable",
  rulingPlanet: "Mercurio",
  rulingHouse: "III",
  spiritColor: "Amarillo",
  luckyGem: "Ojo de tigre y esmeralda",
  flower: "Lavanda y Lirio del valle",
  loveMatch: "Aries y Leo",
  img: "images/gemini.png",
  symbol: "svg/gemini.png",
  dsc: "Inteligente, apasionado y dinámico, Géminis se caracteriza por los Gemelos, Cástor y Pólux, y es conocido por tener dos lados diferentes que puede mostrar al mundo. Comunicadores expertos, Géminis es el camaleón del zodíaco, experto en mezclarse en diferentes grupos. basado en el ambiente y la energía que perciben. Si bien también son asombrosos para mostrar rasgos superficiales, el pozo Géminis es profundo, razón por la cual los Gemelos son uno de los signos emocionalmente más inteligentes del Zodíaco."
};

const sagittarius = {
  sign: "Sagitario",
  element: "Fuego",
  polarity: "Positivo",
  quality: "Mutable",
  rulingPlanet: "Júpiter",
  rulingHouse: "IX",
  spiritColor: "Celeste",
  luckyGem: "Topacio",
  flower: "Claveles y Azafranes",
  loveMatch: "Aries",
  img: "images/sagittarius.png",
  symbol: "svg/sagittarius.png",
  dsc: "Independientes y de voluntad fuerte, las personalidades de Sagitario tienen que ver con salirse de los caminos trillados. Sagitario no tiene miedo de alejarse de la manada y es un líder nato que persigue lo que quiere, sin importar lo que piensen los demás. Sagitario es un aventurero nato y le encantan los viajes y la exploración en solitario. A Sagitario también le encanta explorar el funcionamiento interno de sus mentes y le encanta ampliar sus horizontes a través de un buen libro o una película."
};

const cancer = {
  sign: "Cáncer",
  element: "Agua",
  polarity: "Negativo",
  quality: "Cardinal",
  rulingPlanet: "Luna",
  rulingHouse: "IV",
  spiritColor: "Violeta",
  luckyGem: "Ruby y Perla",
  flower: "Orquídea y Rosa Blanca",
  loveMatch: "Tauro y Piscis",
  img: "images/cancer.png",
  symbol: "svg/cancer.png",
  dsc: "Emocional, intuitivo y prácticamente psíquico; Gobernado por la luna y caracterizado por el cangrejo, Cáncer tiene mucho que hacer en sus profundidades acuáticas. Los cánceres pueden parecer espinosos y distantes en la primera reunión, una vez que toman la decisión de hacerse amigos de alguien, esa persona tiene un amigo para toda la vida."
};

const capricorn = {
  sign: "Capricornio",
  element: "Tierra",
  polarity: "Negativo",
  quality: "Cardinal",
  rulingPlanet: "Saturno",
  rulingHouse: "X",
  spiritColor: "Azul oscuro",
  luckyGem: "Lapislazuli",
  flower: "Pensamiento",
  loveMatch: "Virgo",
  img: "images/capricorn.png",
  symbol: "svg/capricorn.png",
  dsc: "Inteligente, trabajador y en pleno control de su destino, un Capricornio siempre obtendrá lo que se proponga, tanto en la vida personal como profesional, sin excusas. Los capricornianos pueden tener una reputación de tercos, pero simplemente saben lo que quieren y también saben cómo les gustaría que se comportaran otras personas."
};

const leo = {
  sign: "Leo",
  element: "Fuego",
  polarity: "Positivo",
  quality: "Fijo",
  rulingPlanet: "Sol",
  rulingHouse: "V",
  spiritColor: "Dorado",
  luckyGem: "Cornalina",
  flower: "Girasol y Caléndula",
  loveMatch: "Libra",
  img: "images/leo.png",
  symbol: "svg/leo.png",
  dsc: "Audaz, inteligente, cálido y valiente, el signo de fuego Leo es un líder natural del Zodíaco, listo para abrir camino, vencer la injusticia y hacerse un nombre en el camino. Bendecidos con una alta autoestima, los Leones saben que poseen rasgos envidiables y están orgullosos de ellos. No creen en el falso pudor y serán los primeros en elogiarse por el trabajo bien hecho. Pero Leo no se engrandece a sí mismo ni no está dispuesto a arremangarse y hacer el trabajo: este signo sabe que para ser respetado y admirado, él o ella necesita hacer un esfuerzo digno de un líder."
};

const aquarius = {
  sign: "Aquario",
  element: "Aire",
  polarity: "Positivo",
  quality: "Fijo",
  rulingPlanet: "Urano",
  rulingHouse: "XI",
  spiritColor: "Cian",
  luckyGem: "Amatista",
  flower: "Orquídea",
  loveMatch: "Sagitario",
  img: "images/aquarius.png",
  symbol: "svg/aquarius.png",
  dsc: "Independientes y enigmáticos, los Acuario son únicos. No hay nadie como un Acuario, y debido a que cada uno es tan increíblemente individual, puede ser difícil describirlos como un grupo. A los acuarianos no les gustan las etiquetas y pueden rehuir cualquier adjetivo, incluso los buenos que podrías otorgarles. Los acuarianos creen en la naturaleza del cambio y la evolución, y aunque son un signo fijo, es posible que no crean necesariamente que son las mismas personas que eran cuando nacieron."
};

const virgo = {
  sign: "Virgo",
  element: "Tierra",
  polarity: "Negativo",
  quality: "Mutable",
  rulingPlanet: "Mercurio",
  rulingHouse: "VI",
  spiritColor: "Plateado",
  luckyGem: "Peridoto",
  flower: "Girasol y Caléndula",
  loveMatch: "Cáncer",
  img: "images/virgo.png",
  symbol: "svg/virgo.png",
  dsc: "Inteligente, sofisticado y amable, Virgo hace el trabajo sin quejarse. Los virgos son amigos increíbles, siempre están ahí para echar una mano y también para dar consejos. Los Virgos prácticos son increíblemente hábiles para pensar en un panorama general y planificar su vida, sus vacaciones y lo que van a hacer hoy no es un lastre, los hace sentir seguros y en control."
};

const pisces = {
  sign: "Piscis",
  element: "Agua",
  polarity: "Negativo",
  quality: "Mutable",
  rulingPlanet: "Neptuno",
  rulingHouse: "XII",
  spiritColor: "Verde aguamarina",
  luckyGem: "Piedra Lunar",
  flower: "Lirio de agua",
  loveMatch: "Virgo",
  img: "images/pisces.png",
  symbol: "svg/pisces.png",
  dsc: "Inteligente, creativo y profundamente intuitivo, Piscis puede ser casi psíquico. Piscis siente las cosas profundamente y tiene reacciones viscerales increíblemente fuertes. Un Piscis conoce las cosas desde lo más profundo y, a menudo, puede juzgar si una persona o situación es buena o mala. Sin embargo, eso no significa que Piscis ignore la parte lógica de su cerebro. Profundamente inteligente, Piscis tiene un profundo respeto por el poder de la mente humana. ¿Es una sorpresa que Albert Einstein fuera Piscis?"
};

const template = sign => {
  resultContainer.innerHTML = `
  <div class="zodiac-container">
  <div class="zodiac-image"><img src=${sign.img} alt=${sign.name} />

  </div>
  <div class="zodiac-traits">
    <div class="zodiac-name">
    <h3>${sign.sign}</h3>
    <img src=${sign.symbol}>
    </div>
    <div class="zodiac-stats">
    <p>Elemento: ${sign.element}</p>
    <p>Polaridad: ${sign.polarity}</p>
    <p>Cualidad: ${sign.quality}</p>
    <p>Planeta: ${sign.rulingPlanet}</p>
    <p>Casa: ${sign.rulingHouse}</p>
    <p>Color: ${sign.spiritColor}</p>
    <p>Piedra: ${sign.luckyGem}</p>
    <p>Flor: ${sign.flower}</p>
    </div>
  </div>
  </div>
  <div class="zodiac-personality">
    <h3>Personalidad</h3>
    <p>${sign.dsc}</p>
  </div>; 
  
  `;
};

const selectSign = () => {
  if (option.value === "Libra") {
    template(libra);
  } else if (option.value === "Capricorn") {
    template(capricorn);
  } else if (option.value === "Leo") {
    template(leo);
  } else if (option.value === "Sagittarius") {
    template(sagittarius);
  } else if (option.value === "Virgo") {
    template(virgo);
  } else if (option.value === "Cancer") {
    template(cancer);
  } else if (option.value === "Pisces") {
    template(pisces);
  } else if (option.value === "Aries") {
    template(aries);
  } else if (option.value === "Gemini") {
    template(gemini);
  } else if (option.value === "Taurus") {
    template(taurus);
  } else if (option.value === "Aqurius") {
    template(aquarius);
  } else if (option.value === "Scorpio") {
    template(scorpio);
  }
};

btn.addEventListener('click', selectSign)
// optionValue.forEach(each => {
//   each.addEventListener("click", selectSign);
// });

//Get All Value
let sendBtn = document.getElementById('send');
let resetBtn = document.getElementById('reset');
let form = document.getElementById('form');

//Form Refresh State
form.addEventListener('submit', (e) => {
    e.preventDefault();
});

//Now Working For Reset Btn
resetBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //Set Value
    name.value = '';
    email.value = '';
    message.value = '';

});

//Now Start SendBtn
sendBtn.addEventListener('click', (e) => {
    let name = document.getElementById('name');
    let email = document.getElementById('email');
    let message = document.getElementById('message');

    //Set Value And LocalStorage
    
    name = name.value;
    localStorage.setItem('name', name);

    email = email.value;
    localStorage.setItem('email', email);

    message = message.value;
    localStorage.setItem('message', message);

});