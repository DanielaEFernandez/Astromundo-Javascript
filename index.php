<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Astromundo | Astrología y Tarot</title>
    <link href="https://fonts.googleapis.com/css?family=PT+Serif:700&display=swap" rel="stylesheet"/>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
    <link rel="stylesheet" href="styles/style.css"/>
  <!-- jQuery library -->
  <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.0/jquery.min.js"></script>
  <link rel="stylesheet" href="css/style.css">
  <!--lodash-->
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.2/lodash.min.js.map"></script>
  </head>
  <body>
    <header>
      <img class="logo" src="images/Astromundis-logo.png" alt="logo">
      <h1>Astrología y Tarot</h1>
      <a href="#zodiac-container">COMENZAR</a>
    </header>

    <main class="main-content">
      <div class="card">
        <div class="card-img">
          <img src="images/astrology.jpg" alt="astrology-girl" />
        </div>
        <div class="card-info" id="zodiac-container">
          <h3>¡Conoce sobre tu pasado, presente y futuro!</h3>
          <p>
            ¿Tienes dudas respecto a tu futuro?, ¿quieres saber qué puede suceder en temas de amor, dinero, salud, trabajo y familia?, ¿necesitas obtener las respuestas adecuadas para conciliar mejor el sueño y tener un sentimiento de más tranquilidad? ¡Deja a un lado las dudas y resuélvelas con una buena <strong>tirada de cartas</strong>. Disponible a todas horas para que puedas recibir el asesoramiento vital que deseas.
          <a href="#tarot-container">QUIERO MI TIRADA</a>
          </p>
        </div>
      </div>

      <div class="card">
        <div class="card-img">
          <img src="images/img2.jpg" alt="starry-night" />
        </div>
        <div class="card-info">
          <h3>¡Conoce todo sobre tu signo zodíacal!</h3>
          <p>
          Todas las personas tienen cualidades, aptitudes, fortalezas y energía diferentes, las cuales los hacen distintas a todas las demás, ya sea por su carácter, forma de ser, rasgos o infinidad de cosas que hay por descubrir en cada uno de nosotros. Lo mismo sucede con los <strong>signos zodiacales</strong> al que cada uno pertenece, mismo que cargará de energía a los nacidos bajo su manto con características propias, según sea el caso. Para conocer el signo de cada individuo hay que conocer el día y el mes en el que nació.
          </p>
          <a class="button" href="#option-container">QUIERO SABER MÁS</a>
        </div>
      </div>

    <section class="option-container" id="option-container">
      <h1>Tu signo zodiacal</h1>
      <label for="zodiac-option">¡Elige tu signo zodiacal!</label>
      <select id="zodiac-option">
        <option value="Libra">Libra (21/09 - 21/10)</option>
        <option value="Capricorn">Capricornio (21/12 - 21/01)</option>
        <option value="Leo">Leo (21/07 - 21/08)</option>
        <option value="Sagittarius">Sagitario (21/11 - 21/12)</option>
        <option value="Aries">Aries (21/03 - 21/04)</option>
        <option value="Pisces">Piscis (21/02 - 21/03)</option>
        <option value="Virgo">Virgo (21/08 - 21/09)</option>
        <option value="Cancer">Cáncer (21/06 - 21/07)</option>
        <option value="Gemini">Géminis (21/05 - 21/06)</option>
        <option value="Scorpio">Escorpio (21/10 - 21/11)</option>
        <option value="Aqurius">Acuario (21/02 - 21/03)</option>
        <option value="Taurus">Tauro (21/04 - 21/05)</option>
      </select>
      <button class="btn">SABER MÁS</button>
    </section>

    <section class="result-container"></section>

  <div class="container-flex" id="tarot-container">
    <div class="jumbotron">
      <h1>Tirada de tres cartas de Tarot</h1>
      <br>
      <p id="blurb" class="blurb">
        La lectura de las tres cartas es una de las tiradas de cartas del tarot más simples.<br /> La carta de la izquierda representa eventos de su pasado que pueden haberlo llevado a la posición en la que se encuentra ahora. La carta del Tarot en la posición central representa tu perspectiva sobre tu
        estado de cosas actual. La tarjeta más a la derecha sugiere un posible resultado si no se toman medidas para cambiar el curso actual. El futuro no está grabado en piedra, se puede cambiar a través de la acción.
        <br />
        <br /> Concéntrese en su pregunta y haga clic en &quot;Mi lectura&quot; botón de abajo cuando esté listo.
      </p>
      <div class="container-flex">
        <div class="row">
          <div class="col-md-3">
          </div>
          <div class="col-md-3"><button type="button" class="btn btn-primary btn-lg" id="pastPresentFuture" onclick="pastPresentFuture()">Mi Lectura</button></div>
          <div class="col-md-3">
            <p>Porcentaje de reversiones</p>
            <input class="slider" type="range" min="0" max="50" value="0" onchange="showValue(this.value)" />
            <span id="range">0</span>%
          </div>
          <div class="col-md-3">
          <div class="col-md-3">
          </div>
        </div>
      </div>

      <div class="container-flex">
        <div class="row">
          <div class="col-md-4">
            <center>
              <hr>
              <h2>Pasado</h2>
              <div id="img-1"></div>
              <div id="info-1"></div>
            </center>
          </div>
          <div class="col-sm-4">
            <center>
              <hr>
              <h2>Presente</h2>
              <div id="img-2"></div>
              <div id="info-2"></div>
            </center>
          </div>
          <div class="col-sm-4">
            <center>
              <hr>
              <h2>Futuro</h2>
              <div id="img-3"></div>
              <div id="info-3"></div>
            </center>
          </div>
        </div>
      </div>
    </div>
  </div>

    <form id="form">
        <h1>¿Sugerencias?</h1>
        <div>
            <label for="name">Nombre</label> <br>
            <input type="text" name="name" id="name">
        </div>
        <div>
            <label for="email">Correo</label> <br>
            <input type="email" name="email" id="email">
        </div>
        <div>
            <label for="message">Mensaje</label> <br>
            <textarea name="message" id="message"></textarea>
        </div>
        <div id="button-row">
            <div class="button">
                <button type="submit" id="send">ENVIAR</button>
            </div>
            <div class="button">
                <button id="reset">Limpiar</button>
            </div>
        </div>
    </form>
   <div class="container my-5 text-center">
      <button class="btn btn-danger w-100" onclick="traer()">Consulta Con un Guia Especializado!!!</button>
      <div class="mt-5" id=contenido>

      </div>  

  
      </div>  
    </div>
    <script src="fetchAPI.js"></script>
    <script src="app.js"></script>
    <script src="tarot.js"></script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossorigin="anonymous"></script>
  </body>
</html>
