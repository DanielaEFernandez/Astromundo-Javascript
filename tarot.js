//global variables
var deck = {};
var rank = "";
var suit = "";
var deckArr = [];
var cardBack = "<img class='img-thumbnail' src='https://www.wopc.co.uk/images/subjects/tarot/rider-waite/pam-roses-lilies-back.jpg'>";
var meanings = {
    upright: [
    //COPAS
    {
        name:
        "El as de copas es la carta del nuevo amor, la compasión, la alegría y la creatividad. Si esta carta aparece con as de oros, a menudo significa que se mudan juntos en una relación."
    },
    {
        name:
        "Dos de copas es la carta para estar enamorado y estar en una relación cercana. Hay intimidad real en la relación, y se conocen y se entienden a un nivel profundo."
    },
    {
        name:
        "El tres de copas es la carta para celebrar, salir con amigos, pasar un buen rato y ser parte de una comunidad. Esta tarjeta a menudo aparece cuando alguien se va a comprometer o casar."
    },
    {
        name:
        "Cuatro de copas es la carta para la contemplación. A menudo aparece cuando el consultante no está satisfecho con algo y no se da cuenta del todo de lo que se le ofrece."
    },
    {
        name:
        "El cinco de copas es la carta de los arrepentimientos y las decepciones, especialmente en el amor. Es posible que una relación no haya resultado como te hubiera gustado."
    },
    {
        name:
        "El seis de copas es la carta de la sensualidad y el placer, los recuerdos, la inocencia, la nostalgia y la infancia. A veces, esta carta aparece cuando alguien del pasado está regresando a tu vida nuevamente."
    },
    {
        name:
        "Siete de copas es la carta para soñar despierto, ilusiones, ilusiones y fantasías. Esta carta suele aparecer cuando tienes muchas opciones y necesitas una visión para hacerlas realidad."
    },
    {
        name:
        "El ocho de copas es la carta para darle la espalda a algo para ir a perseguir tu sueño. El ensueño que ocurrió en Siete de copas se ha materializado en una visión que el consultante va a perseguir."
    },
    {
        name:
        "Nueve de copas es la carta para conseguir lo que quieres y hacer realidad un deseo. Esta carta habla de abundancia y satisfacción, y también de estar orgulloso de lo que has logrado."
    },
    {
        name:
        "Diez de copas es la carta para la felicidad espiritual total experimentada en su relación, hogar y vida familiar. Esta carta se trata de estar alineado con tu verdadera naturaleza y todo en tu vida está en armonía con tu yo superior y tu propósito en este planeta."
    },
    {
        name:
        "El sota de copas denota a una persona joven con una naturaleza gentil y sensible. Es alguien que vive asombrado y puede ser bastante ingenuo a veces."
    },
    {
        name:
        "Caballero de copas denota a una persona en una búsqueda para declarar su amor. Este es tu caballero de brillante armadura. Es cantante, poeta y escritor. Pinta y crea allá donde va. Es artístico e increíblemente adorable."
    },
    {
        name:
        "La reina de copas denota a una mujer que es muy intuitiva y sensible. Está en contacto con sus emociones, su subconsciente y el universo. Es compasiva y se preocupa profundamente por su vida y por los que están en ella."
    },
    {
        name:
        "Rey de copas denota un hombre cálido, honesto y generoso que es amable y justo. Es alguien que tiene el control de sus propias emociones."
    },

    //OROS
    {
        name:
        "Az de oro simboliza un nuevo comienzo en su situación financiera y una oportunidad para profundizar su seguridad."
    },
    {
        name:
        "Dos de oro simboliza hacer malabarismos con las finanzas. Es posible que tenga ingresos de más de una fuente. Dos de Pentáculos también indica invertir dinero en diferentes proyectos o trueques."
    },
    {
        name:
        "El Tres de oro simboliza su trabajo, especialmente cuando se trata de trabajo en equipo o de escuchar a los clientes. Esta es una tarjeta positiva que indica satisfacción laboral y orgullo por su trabajo, pero debe esforzarse para ver resultados."
    },
    {
        name:
        "El Cuatro de oro simboliza la necesidad de seguridad y reconocimiento en tu vida, de tener control sobre tus posesiones y de que la abundancia y el dinero sigan aumentando. Esta carta muestra terquedad en la situación o en el consultante."
    },
    {
        name:
        "Cinco de oro simboliza la pérdida financiera o las dificultades. También puede significar que se encuentra en un lugar donde siente que no hay seguridad y que su salud podría estar sufriendo."
    },
    {
        name:
        "El Seis de oro simboliza la generosidad hacia aquellos que tienen menos que tú. También puede significar recibir generosidad de los demás."
    },
    {
        name:
        "Siete de Oro simboliza una visión que dará sus frutos en el futuro. Estás plantando las semillas para que puedas cosechar un futuro más seguro y abundante para ti."
    },
    {
        name:
        "Ocho de Oro simbolizan la artesanía en lo que respecta al trabajo. También puede significar hacer un aprendizaje y/o aprender una nueva habilidad."
    },
    {
        name:
        "Nueve de Oro simboliza el lujo, la seguridad financiera y estar en unas vacaciones lujosas."
    },
    {
        name:
        "Diez de Oro simboliza el tipo de riqueza que obtienes cuando heredas algo, ya sea tu propio dinero de jubilación, herencias o posesiones de alguien que fallece."
    },
    {
        name:
        "El sota de oro indica reinventarse de alguna manera. A menudo denota una oportunidad de comenzar algo nuevo, ya sea una empresa creativa, estudios, negocios o una nueva oferta de trabajo. Page of pentacles aún no es un experto en el campo de la elección, pero tiene una meta clara y un sueño por lograr."
    },
    {
        name:
        "Caballero de oro denota estar al servicio y hacer el trabajo real (en contraste con Sota de Oro, que disfruta soñando despierto con la idea en lugar de vivirla). Knight of Pentacles se siente cómodo con la rutina y es eficiente y conservador."
    },
    {
        name:
        "Reina de oro es alguien con los pies en la tierra y un enfoque práctico de la vida y las situaciones. Es importante tener un equilibrio trabajo/hogar, de hecho, si pudieras trabajar desde casa, probablemente lo harías. Esta carta disfruta de los placeres materiales y el éxito."
    },
    {
        name:
        "Rey de oro simboliza a un hombre de negocios exitoso o una persona en una posición de gerente. Este es un personaje estable y autoritario, trabajador y confiable."
    },


    //SWORDS
    {
        name:
        "El as de espadas es la carta para un nuevo sistema de pensamiento y creencias. Es el potencial de la energía mental utilizada para crear claridad y, a menudo, también justicia."
    },
    {
        name:
        "Dos de espadas es la carta para el compromiso, la pasividad, el mantenimiento de la paz (como para no mover el bote), el estancamiento, la indecisión y evitar el conflicto."
    },
    {
        name:
        "Tres de espadas denota angustia. tristeza, dolor y separación. A veces la separación es solo temporal, otras veces es definitiva."
    },
    {
        name:
        "Cuatro de espadas se trata de descansar y rejuvenecer, dormir lo suficiente y tomarse un tiempo para meditar."
    },
    {
        name:
        "Cinco de espadas es la carta para la derrota y la traición, el conflicto y la competencia malsana. Las palabras serán hirientes, se dirán mentiras y se usarán tus debilidades en tu contra."
    },
    {
        name:
        "Seis de espadas se trata de cruzar el mar revuelto y adentrarse en aguas más tranquilas. Esta es la tarjeta para encontrar soluciones e implementarlas, a menudo trayendo consigo a otras personas en el proceso, es decir, su familia, amigos y colegas."
    },
    {
        name:
        "Siete de espadas denota que alguien está avanzando de manera menos que honorable. A menudo hay deshonestidad relacionada con esta carta, y tratar de salirse con la suya o tratar de salirse de algo mintiendo."
    },
    {
        name:
        "Ocho de espadas es la carta de estar atascado e incapaz de seguir adelante debido a la confusión y no saber qué está pasando. A menudo, las personas sacan esta carta cuando otras personas anulan su propia intuición."
    },
    {
        name:
        "El Nueve de espadas denota preocupación y ansiedad, insomnio y estar abrumado por emociones negativas como la culpa y los arrepentimientos."
    },
    {
        name:
        "Diez de espadas es la carta para finales y pérdidas, puñaladas por la espalda y falta de apoyo. A veces, esta carta denota tocar fondo. Tiene la mentalidad de cuando llueve a cántaros, y el consultante puede estar sintiendo que el sufrimiento no tiene fin."
    },
    {
        name:
        "Sota de espadas denota una persona joven y mentalmente muy activa e inteligente. Se trata de alguien que puede concentrarse durante largos períodos de tiempo y que aprende nuevas habilidades con facilidad, especialmente habilidades mentales."
    },
    {
        name:
        "Caballero de espadas denota una persona comunicativa, de mente fuerte y, a veces, obstinada que está muy orientada a la acción y prospera en el cambio. Es alguien con una racha competitiva y no le gusta dejar de lado su posición en una discusión."
    },
    {
        name:
        "Reina de espadas denota a una mujer fría, profesional e inteligente. Ella es ingeniosa y divertida de una manera inteligente (sin humor de baño). A menudo representa a mujeres solteras que han sido heridas en el amor, y está amargada y herida, pero es una maestra en encubrirlo."
    },
    {
        name:
        "Rey de espadas denota a un hombre profesional que está en la cima de su juego. Se trata de alguien que es un experto en su campo y habría tenido que estudiar para adquirir este conocimiento."
    },


    //WANDS
    {
        name:
        "El as de bastos habla de nuevos comienzos. Sea audaz y comience algo nuevo. Sigue tu inspiración. As de Bastos habla de nacimientos de todo tipo; el nacimiento de empresas y oportunidades de trabajo, y también el nacimiento de un bebé."
    },
    {
        name:
        "Dos de bastos se trata de manifestar usando la voluntad y la fuerza de tu mente. Es posible que deba sopesar sus opciones antes de decidir cuál es mejor para usted."
    },
    {
        name:
        "Tres de bastos es la tarjeta para escritores, trabajos de escritura y autónomos. También es la carta que sigue a la manifestación que hizo el consultante en Two of Wand, y el consultante ahora ha vivido una nueva y emocionante oportunidad o sueño."
    },
    {
        name:
        "Cuatro de bastos es la carta para la armonía y el desarrollo a mayor escala, a menudo expandiendo su situación de vida y también estando más conectado con una comunidad."
    },
    {
        name:
        "Cinco de bastos se trata de defender lo que es importante para ti, incluso si eso significa encontrarte con alguna oposición."
    },
    {
        name:
        "Seis de bastos es la carta de la popularidad, el progreso, la victoria y el éxito, la confianza en uno mismo y conseguir lo que quieres."
    },
    {
        name:
        "Siete de bastos denota estar a la defensiva y poner barreras y límites. Estás protegiendo tu punto de vista y tu posición."
    },
    {
        name:
        "Ocho de Bastos habla de acción rápida y progreso. A menudo aparece cuando viene un visitante, o cuando el consultante está visitando a alguien."
    },
    {
        name:
        "Nueve de Bastos es la carta de la fuerza, el coraje, la resiliencia y la resistencia. Nunca te rindas y nunca te rindas."
    },
    {
        name:
        "Diez de Bastos es la carta para trabajar duro y asumir más responsabilidades."
    },
    {
        name:
        "Sota de bastos denota a un joven entusiasta que está ansioso por explorar y adquirir experiencia de vida."
    },
    {
        name:
        "Caballero de bastos denota a una persona que viaja por la vida a gran velocidad, viviendo la vida en el carril rápido. Este es alguien que será el alma de la fiesta."
    },
    {
        name:
        "Reina de bastos denota una mujer cálida, amable y apasionada. Está orientada a objetivos y determinada. También es una metafísica que puede usar su mente para crear armonía y caos."
    },
    {
        name:
        "Rey de bastos denota a un hombre casado que es un líder natural y carismático. Tiene habilidades empresariales y le encanta ejecutar un proyecto nuevo y emocionante."
    },

    //TRIUNFOS
    {
        name:
        "El loco representa nuevos comienzos, tener fe en el futuro, ser inexperto, no saber qué esperar, tener suerte de principiante, improvisar, creer que el Universo provee, no tener ataduras, ser despreocupado."
    },
    {
        name:
        "El mago representa tu capacidad para comunicarte con claridad, para venderte a ti mismo y para ser innovador. El Mago tiene todas las herramientas y recursos disponibles para manifestar el resultado deseado, por lo que es una buena carta si quieres crear."
    },
    {
        name:
        "La suma sacerdotisa representa los secretos, el misterio, la intuición, la sabiduría, hacer posible lo imposible y la magia."
    },
    {
        name:
        "Emperatriz representa el poder femenino, una persona que cuida y se orienta hacia la familia, nuestra madre o una figura materna, la abundancia, la feminidad, la fertilidad y el amor por el hogar y la familia."
    },
    {
        name:
        "Emperador representa la energía masculina, el gobernante, el cabeza de familia, el jefe de una empresa, organización y comunidades. El Emperador es una figura de autoridad que crea una base sólida para construir y crear."
    },
    {
        name:
        "Hierofante representa la conciencia de grupo, la religión, su sistema de creencias, la ceremonia, las tradiciones, la bondad, la caridad, la orientación en forma de asesoramiento espiritual."
    },
    {
        name:
        "Los amantes representan el amor y la relación, las almas gemelas, las atracciones físicas, las decisiones que se deben tomar, The Lovers representa hacer las cosas que nos hacen sentir completos, estar con las personas que nos hacen sentir completos."
    },
    {
        name:
        "El carro representa tu fuerza de voluntad y determinación. Representa la victoria. The Chariot le da luz verde para seguir adelante y tomar el control de su vida o de un área de su vida que necesita su atención."
    },
    {
        name:
        "La fuerza representa nuestro coraje, pasiones, fortaleza, confianza en nosotros mismos, paciencia y compasión. La fuerza nos recuerda seguir nuestras pasiones, tomarnos el tiempo para hacer las cosas que nos hacen funcionar, que nos hacen fuertes dentro de nosotros mismos y que generan confianza y autoestima."
    },
    {
        name:
        "El ermitaño representa pasar tiempo a solas, ser un lobo solitario, hacer un examen de conciencia, buscar guía espiritual, introspección."
    },
    {
        name:
        "Rueda de la fortuna es la carta del Gran destino en la baraja del tarot. Lo que está destinado a ser está destinado a ser. En el tarot, cuando aparece la Rueda de la Fortuna, significa que los eventos y las personas en tu vida están en tu vida debido a que el destino lo predefine."
    },
    {
        name:
        "La justicia representa todo tipo de asuntos legales, las leyes espirituales de la verdad y causa y efecto. Cuando aparece la carta de la Justicia, nos recuerda que debemos ser lícitos y justos para lograr el mejor resultado."
    },
    {
        name:
        "El ahorcado representa ser suspendido temporalmente. La vida está en suspenso, pero tiene un propósito."
    },
    {
        name:
        "La muerte representa transformación, finales y nuevos comienzos. Cuando aparece la carta de la Muerte, te dice que las cosas no volverán a ser como antes. Se está produciendo una transformación, estás creciendo y cambiando con las circunstancias en las que te encuentras."
    },
    {
        name:
        "La templanza representa una interacción equilibrada entre los elementos para crear algo nuevo y fresco. La templanza incluye todos los elementos de tal manera que saca lo mejor de cada sustancia. Cuando la carta de la Templanza aparece en tu vida, hay un gran equilibrio y fuerza entre las diferentes áreas y personas en tu vida que están trabajando juntas."
    },
    {
        name:
        "El diablo representa la fuente primaria de comportamiento que se manifiesta en la forma de nuestros deseos y necesidades terrenales. También representa nuestros miedos que causan adicción y comportamiento compulsivo."
    },
    {
        name:
        "Las torres representan desastres, crisis emocionales y/o rabietas, problemas de ira, agitación, cambios repentinos causados por interrupciones y revelaciones que sacuden los cimientos de la persona, el hogar, la organización o incluso el país, según la naturaleza de la pregunta."
    },
    {
        name:
        "La estrella representa esperanza, un futuro brillante, alegría, optimismo, guía, tener respuestas a tus preguntas, ser y sentir la conexión con lo divino, serenidad e inspiración. La estrella brilla tanto que cuando aparece en una lectura te dice que estás siendo la luz en la vida de alguien."
    },
    {
        name:
        "La luna representa ilusiones, intuición, fantasías, miedos y ansiedad. Cuando aparece la Luna, es posible que las cosas no sean lo que parecen. Tus inseguridades pueden estar aumentando o te encuentras en el extremo receptor de las inseguridades de otras personas."
    },
    {
        name:
        "El sol representa el éxito, la alegría, la luz del sol, el día, el calor y la felicidad. El Sol aparece cuando la vida es soleada y estás disfrutando de tu tiempo con las personas que amas. La vida es simple en lugar de complicada. Las relaciones están floreciendo y te sientes amado."
    },
    {
        name:
        "El juicio representa asumir la responsabilidad de tus acciones y tu vida, ser un buen juez de carácter, ver la verdad y saber lo que quieres. La carta de Juicio a menudo aparece cuando necesitas dar un paso al frente y ser un líder, decir la verdad y ser más asertivo."
    },
    {
        name:
        "Mundo es la carta final de los Arcanos Mayores y representa el cumplimiento y la finalización exitosa de un ciclo. Conoces tu lugar en el mundo y tus lecciones de vida te han hecho inteligente y realizado. El mundo aparece cuando el mundo está listo para ti y quiere lo que tienes para ofrecer."
    },



    ],
    reversed: [

    //COPAS
    {
        name:
        "As de Copas invertido indica creatividad bloqueada y emociones bloqueadas. También se bloquea el acceso a la mente subconsciente y la capacidad psíquica."
    },
    {
        name:
        "Dos de Copas al revés indica tener miedo al amor y a las relaciones. El buscador puede estar soñando con el amor, pero cuando se trata de tener uno, el miedo al rechazo y al abandono se interpone en el camino."
    },
    {
        name:
        "Tres de Copas al revés puede indicar celebración que salió mal, quejas, celos y competencia."
    },
    {
        name:
        "Cuatro de Copas invertido indica que el buscador se ha desbancado y está evitando algo y/o alguien importante."
    },
    {
        name:
        "Cinco de Copas al revés indica desilusión en el amor y asuntos emocionales. Las dos copas que todavía están en posición vertical se derraman cuando esta carta aparece invertida, lo que denota que el buscador podría estar totalmente agotado emocionalmente, generalmente por las relaciones."
    },
    {
        name:
        "Seis de Copas al revés indica una infancia difícil y recuerdos inquietantes, incluso perturbadores de la infancia. Los recuerdos de todo tipo pueden ser un problema cuando esta tarjeta aparece invertida, incluso la pérdida de memoria."
    },
    {
        name:
        "Siete de Copas invertido indica que la imaginación del buscador está bloqueada. Soñar despierto se ha convertido en pensamientos de miedos y ansiedades."
    },
    {
        name:
        "El ocho de copas invertido indica que el buscador ha renunciado a su sueño para entregarse a una realidad que es incómoda, sin amor y miserable. El buscador podría haber entregado su vida para complacer a alguien más, vender su negocio para trabajar en un trabajo que no le gusta."
    },
    {
        name:
        "Nueve de Copas invertido indica que el buscador no obtendrá lo que desea. La familia y la amistad podrían estar desmoronándose. Hay desintegración y separación, a menudo debido a elecciones de estilo de vida."
    },
    {
        name:
        "Diez de Copas al revés indica interrupción en la armonía, algo o alguien está dificultando mantener el amor. El buscador podría estar fingiendo que todo sigue siendo maravilloso con la esperanza de que continúe para siempre."
    },
    {
        name:
        "Sota de Copas invertida indica, alguien que es difícil de motivar, se siente triste y derriba a otros con su naturaleza sombría. Pueden prometer mucho, pero entregar poco o nada."
    },
    {
        name:
        "Caballero de Copas al revés indica una persona que se está alejando de una relación y/o una empresa creativa. El estado emocional del buscador puede estar lejos de ser romántico, en cambio, es más probable que sea cínico y use sus conocimientos e intuición para hacer que los demás sufran tanto como ellos."
    },
    {
        name:
        "Reina de Copas al revés indica alguien con habilidades psíquicas bloqueadas y una naturaleza emocionalmente inestable. Esta persona puede estar muy insensible o, peor aún, tener sentimientos muy oscuros."
    },
    {
        name:
        "Rey de Copas al revés indica a alguien que está bloqueado para expresar sus sentimientos, es incapaz de motivar y ser motivado. Es alguien con una racha egoísta, a menudo nacida del miedo al rechazo."
    },

    //OROS
    {
        name:
        "El as de oros al revés indica pérdidas financieras y disminución de la seguridad. Podría haber habido anticipación con respecto al aumento de los ingresos y la riqueza que no se está convirtiendo en una realidad."
    },
    {
        name:
        "Dos de oros invertidos indica que el buscador no puede hacer malabarismos con las demandas de la vida. Pierde de vista sus finanzas y los aspectos prácticos de la vida."
    },
    {
        name:
        "Tres de oros invertidos indica falta de calidad en el desempeño del trabajo."
    },
    {
        name:
        "Cuatro de oros invertidos indica falta de algo sólido y confiable. No hay nada realmente confiable a lo que aferrarse."
    },
    {
        name:
        "El Cinco de oros invertido indica desorden y caos. No sólo no hay dinero, sino que también falta espiritualidad y amistad."
    },
    {
        name:
        "Seis de oros invertidos indica falta de generosidad. Puede haber codicia en lugar de compartir la riqueza."
    },
    {
        name:
        "Siete de oros invertidos indica impaciencia y avanzar antes de que llegue el momento. Esta carta al revés también puede significar desempleo."
    },
    {
        name:
        "Ocho de oros invertido indica un trabajo tedioso con pocas ganancias. El buscador puede estar atrasado para una promoción que merece pero que no está recibiendo."
    },
    {
        name:
        "Nueve de oros invertido indica soledad e infelicidad. La casa no es segura ni muy cómoda. El buscador puede sentirse como un prisionero en su propia casa."
    },
    {
        name:
        "Diez de oros invertidos indica fortunas o legados desperdiciados o perdidos, o en una nota menor, retrasados. Puede haber vínculos restrictivos que se conviertan en una carga."
    },
    {
        name:
        "El sota de oros invertida indica problemas con el aprendizaje y problemas con los estudios. Denota talentos desperdiciados, ambiciones poco realistas y/o esnobismo intelectual."
    },
    {
        name:
        "Caballero de oros al revés indica descuido, amargura y envidia. Este es alguien que está adulando a aquellos que pueden ayudarlos a subir la escalera hacia la riqueza y el éxito, pero que no hará nada por aquellos que no tienen dinero o conexiones."
    },
    {
        name:
        "La reina de oros al revés indica mal gusto y falta de sensibilidad hacia las necesidades de los demás."
    },
    {
        name:
        "Reye de oros al revés indica a alguien que es demasiado conservador y que no se arriesgará. Es reacio a hacer cambios en la forma en que son las cosas. Es probable que sea un avaro y un acumulador."
    },

    //ESPADAS
    {
        name:
        "El as de espadas al revés indica que la agitación de los ases está bloqueada. Las ideas y la comunicación están bloqueadas."
    },
    {
        name:
        "Dos de espadas al revés indica que los conflictos son inevitables y no se alcanzan compromisos. El consultante puede estar exhibiendo demasiada personalidad y crea drama solo para tener algo que hacer."
    },
    {
        name:
        "El Tres de Espadas al revés indica que hay un duelo bloqueado almacenado en el corazón de la persona. El consultante puede tener miedo al duelo y está internalizando."
    },
    {
        name:
        "El Cuatro de Espadas invertido denota inquietud y agotamiento. Los pensamientos y las creencias impiden que la persona se recupere."
    },
    {
        name:
        "El Cinco de Espadas invertido denota conflicto y argumentos que quedan sin resolver, a menudo prolongándose indefinidamente."
    },
    {
        name:
        "Seis de espadas al revés indica que los planes de viaje se retrasaron o retrasaron. También significa dificultad para resolver problemas, especialmente tareas mentales como matemáticas y ciencias."
    },
    {
        name:
        "Siete de Espadas al revés indica torpeza y olvido, sobre todo a la hora de recordar qué mentiras se han dicho y a quién."
    },
    {
        name:
        "Ocho de espadas al revés indica una persona que no puede avanzar debido a las dudas, el miedo y el aislamiento. La persona conoce el camino a seguir, pero elige quedarse donde está, escapando de su propia cabeza."
    },
    {
        name:
        "Nueve de espadas al revés indica que los asuntos y los problemas se han ignorado en lugar de abordarse y, cuando resurgen, es posible que el consultante no sepa cómo abordarlos."
    },
    {
        name:
        "Diez de espadas al revés indica una persona que se aferra al dolor que a menudo le infligen otros. Es posible que este consultante no pueda dejar de lado lo que otras personas han infligido y no siente apoyo. No solo no hay apoyo, sino que incluso podría haber un sabotaje deliberado."
    },
    {
        name:
        "El sota of de espadas al revés indica una persona que miente, chismea y es un sabelotodo. Es alguien que dice cosas inapropiadas y pierde el tiempo en las salas de chat. No guardan secretos ni promesas."
    },
    {
        name:
        "Caballero de espadas al revés indica una persona con un impedimento del habla o problemas de aprendizaje. Este es alguien que es inteligente pero por alguna razón no puede expresarse."
    },
    {
        name:
        "La Reina de espadas al revés indica una mujer que tiene problemas para resolver problemas y comunicarse. Este es el tipo de persona que hará acusaciones sin verificar los hechos."
    },
    {
        name:
        "Rey de espadas al revés indica un hombre que manipulará los hechos para salirse con la suya. Hay un bloqueo cuando se trata de integridad y objetividad. Se trata de alguien obstinado y sesgado."
    },

    //BASTOS
    {
        name:
        "As de bastos invertido indica que los nuevos comienzos están bloqueados. Las ideas y empresas no se afianzan y hay poco o ningún crecimiento."
    },
    {
        name:
        "Dos de Bastos al revés indica dificultades para tomar una decisión, posiblemente debido al temor de tomar la decisión equivocada."
    },
    {
        name:
        "Tres de Bastos al revés indica que hay un retraso en las recompensas y un retraso en el pago. El buscador podría estar fuera de su liga, incapaz de hacer frente a las demandas."
    },
    {
        name:
        "Cuatro de Bastos al revés indica que los cimientos no están colocados o no están listos."
    },
    {
        name:
        "Cinco de Bastos al revés indica pérdida de individualidad. Hay una lucha por sobresalir entre otros igualmente talentosos."
    },
    {
        name:
        "Seis de Bastos al revés indica no obtener las recompensas que se deben, el éxito retrasado o incluso la derrota."
    },
    {
        name:
        "Siete de Bastos al revés indica una incapacidad para mantener su posición, especialmente si no es popular. Hay una falta de defensa."
    },
    {
        name:
        "Ocho de Bastos invertido indica falta de energía y lentitud, y las cosas no se están moviendo en la dirección correcta. Puede haber una mala gestión del tiempo y retrasos."
    },
    {
        name:
        "Nueve de Bastos invertido indica debilidad y terquedad en lugar de fuerza y voluntad. Hay un desperdicio de energía o falta de energía para salvar algo."
    },
    {
        name:
        "Diez de Bastos al revés indica miedo a las responsabilidades e incapacidad para mantenerse al tanto de las cosas. El buscador puede estar desmotivado y listo para alejarse de sus deberes."
    },
    {
        name:
        "Sota de bastos al revés indica un matón y una persona de mal genio a la que le gusta presumir y exige atención."
    },
    {
        name:
        "Caballero de bastos al revés indica un matón que quiere ganar a toda costa. Se trata de alguien con talento actoral que puede activar y desactivar su encanto y manipular para salirse con la suya."
    },
    {
        name:
        "La Reina de Bastos al revés indica intimidación y dominación. Hay falta de fe o, peor aún, fe en la magia negra y la oscuridad."
    },
    {
        name:
        "Rey de Bastos al revés indica dictadura. Se trata de alguien con complejo de dios y mal genio, a menudo muy violento."
    },

    //TRIUNFOS
    {
        name:
        "El loco al revés indica que se bloquean nuevos comienzos, el camino está oculto y el consultante tiene dificultades para ver el mundo con ojos nuevos."
    },
    {
        name:
        "Mago al revés indica promesas vacías, posibilidades falsas, un estafador, malentendidos y falta de sustancia para hacer realidad las posibilidades."
    },
    {
        name:
        "Suma sacerdotisa al revés indica habilidades psíquicas bloqueadas y poca o ninguna conciencia de la influencia subconsciente en nuestra realidad. Se guardan secretos, no se encuentran respuestas y los instintos se equivocan."
    },
    {
        name:
        "Emperatriz al revés indica negligencia y falta de atención donde debería haber crianza. Puede representar a una madre que da poco cariño y apenas protección a su hijo. El niño también puede simbolizar un proyecto, una relación, una empresa, el hogar y un negocio que necesitan atención pero que, en cambio, se quedan desatendidos."
    },
    {
        name:
        "Emperador al revés denota a alguien con una veta infantil, que también es inconsistente e impredecible. Si esta carta representa al consultante, entonces algo está bloqueando la energía que le da autoridad a la persona."
    },
    {
        name:
        "Hierofante al revés denota prudencia, tontería e hipocresía. Hay reglas pero no se sabe por qué estas reglas son importantes. El ego no tiene guía. Hay una inflexibilidad en el sistema y en la gente del sistema. Puede ser una institución que controle la información y los líderes se enriquezcan mientras los pobres siguen siendo pobres."
    },
    {
        name:
        "Los amantes invertidos indica una ruptura entre parejas, familias y amigos. Sea lo que sea, las personas que se separan no están creando la misma magia y química por sí mismas y se vuelven menos completas. Los amantes invertidos también pueden indicar que se ha tomado una decisión equivocada."
    },
    {
        name:
        "Carro invertido indica derrota y cobardía. En lugar de avanzar y tomar el control de las fuerzas internas y externas, existe la sensación de rendirse antes de intentarlo. 'Cuál es el uso' es la energía en carro invertida."
    },
    {
        name:
        "Fuerza invertida denota falta de coraje, falta de pasión, miedo, incluso timidez e impaciencia. La voluntad débil y la falta de columna vertebral se indican cuando esta carta aparece al revés. El león permanece indómito, a menudo debido al miedo a sobresalir debido a la presión de sus compañeros."
    },
    {
        name:
        "Ermitaño al revés indica aislamiento y paranoia. No hay perspicacia sino que hay un lado retorcido y vicioso de la persona. Esto también denota a alguien que se siente muy solo y está perdiendo el control de la realidad debido a la cantidad de tiempo que pasa solo."
    },
    {
        name:
        "Rueda de la fortuna invertida indica mala suerte y desgracia. En lugar de golpear la parte superior de la rueda y avanzar, estás tocando el fondo, a menudo estancado. Es posible que la rueda no esté girando en absoluto y el cambio que tanto necesita se le esté escapando."
    },
    {
        name:
        "Justicia invertida denota injusticia, injusticia, desequilibrio. Está recibiendo demasiado o demasiado poco de lo que necesita. Algo podría estar impidiendo que la energía de la justicia y el equilibrio tenga éxito."
    },
    {
        name:
        "El ahorcado invertido indica terquedad y egoísmo, negándose a renunciar a su perspectiva para obtener una nueva visión. Esta carta invertida denota a alguien que se siente apartado del mundo e incapaz de comunicar su punto de vista y su perspectiva a los demás."
    },
    {
        name:
        "La muerte al revés indica que persiste algo que debería haber llegado a un final bendito por alguna razón. 'No morir' no es una cosa deseada como tampoco es vivir. Por alguna razón, la persona está aguantando. El duelo bloqueado es a menudo un factor."
    },
    {
        name:
        "La templanza al revés indica que el equilibrio entre dos elementos opuestos para crear un tercero sale terriblemente mal. Esta carta a menudo aparece cuando dos personas diferentes que podrían sacar lo mejor de cada uno sacan lo peor."
    },
    {
        name:
        "Diablo invertido indica tentaciones resistidas, moral más estricta guardada y escapan de las cadenas del diablo. El consultante puede estar demasiado restringido en su vida y tiene pocos o ningún deseo que lo impulse."
    },
    {
        name:
        "Torre invertida denota secretos y mentiras que habrían derribado las estructuras falsas permanecen ocultas y no hay reorganización. No hay destrucción y la Torre permanece en pie."
    },
    {
        name:
        "La estrella invertida indica que cualquier esperanza o promesa ofrecida será falsa. Hay extraviarse en lugar de encontrar el camino. Hay una sensación de estar perdido sin salida."
    },
    {
        name:
        "Luna invertida indica fuerzas primitivas en juego, una larga noche oscura del alma. La intuición y la creatividad están bloqueadas, también es posible un bloqueo sexual."
    },
    {
        name:
        "El Sol invertido indica nuevos comienzos, el éxito y la felicidad están bloqueados. El éxito se bloquea por llegar a conclusiones equivocadas y tener un mal razonamiento y una lógica deficiente. Las cosas son frustrantes y poco claras. Puede haber algunos problemas con el embarazo o con la crianza de niños pequeños."
    },
    {
        name:
        "El juicio invertido indica asumir cargas, profundizar más en la vida anterior, estar atormentado por el pasado e incapaz de dejarlo ir. Hay algo que impide que el consultante se renueve."
    },
    {
        name:
        "El mundo al revés indica quedarse en casa aislado dentro de las zonas de confort, los proyectos y emprendimientos permanecen incompletos. El consultante no puede terminar lo que empezó."
    }
    ]
};


$(document).ready(function () {//Displays back of cards
    _.times(3, function (i) { 
        i++; //incremented to avoid creating 'img-0'
        $('#img-' + i).html(cardBack);
    });
});

//Creates a tarot card deck 
function createDeck() {
    deckArr = [];

    function deckConst(name, displayName) {
        this.name = name;
        this.displayName = displayName;
    }

    var id = 0;
    for (var a0 = 0; a0 < 4; a0++) {
        switch (a0) {
            case 0:
                suit = "cups";
                break;
            case 1:
                suit = "pentacles";
                break;
            case 2:
                suit = "swords";
                break;
            case 3:
                suit = "wands";
                break;
        }

        for (var a1 = 1; a1 < 15; a1++) {

            switch (a1) {
                case 1:
                    rank = "ace";
                    break;
                case 2:
                    rank = "two";
                    break;
                case 3:
                    rank = "three";
                    break;
                case 4:
                    rank = "four";
                    break;
                case 5:
                    rank = "five";
                    break;
                case 6:
                    rank = "six";
                    break;
                case 7:
                    rank = "seven";
                    break;
                case 8:
                    rank = "eight";
                    break;
                case 9:
                    rank = "nine";
                    break;
                case 10:
                    rank = "ten";
                    break;
                case 11:
                    rank = "page";
                    break;
                case 12:
                    rank = "knight";
                    break;
                case 13:
                    rank = "queen";
                    break;
                case 14:
                    rank = "king";
                    break;
                default:
                    break;
            }
            id++;
            var displayName = rank + " of " + suit;
            var name = _.kebabCase(displayName);
            //var name = rank + "-of-" + suit;
            card = new deckConst(name, displayName);
            deck[id] = card;
        }
    }
    deck[57] = new deckConst('the-fool');
    deck[58] = new deckConst('the-magician');
    deck[59] = new deckConst('the-high-priestess');
    deck[60] = new deckConst('the-empress');
    deck[61] = new deckConst('the-emperor');
    deck[62] = new deckConst('the-hierophant');
    deck[63] = new deckConst('the-lovers');
    deck[64] = new deckConst('the-chariot');
    deck[65] = new deckConst('strength');
    deck[66] = new deckConst('the-hermit');
    deck[67] = new deckConst('wheel-of-fortune');
    deck[68] = new deckConst('justice');
    deck[69] = new deckConst('the-hanged-man');
    deck[70] = new deckConst('death');
    deck[71] = new deckConst('temperance');
    deck[72] = new deckConst('the-devil');
    deck[73] = new deckConst('the-tower');
    deck[74] = new deckConst('the-star');
    deck[75] = new deckConst('the-moon');
    deck[76] = new deckConst('the-sun');
    deck[77] = new deckConst('judgment');
    deck[78] = new deckConst('the-world');

    for (var t = 1; t <= 78; t++) {
        deckArr.push(t);
        deck[t].displayName = _.startCase(deck[t].name);
    }

    return deckArr;
    return deck;
}

//gets Rider Waite Card Image i = id from createDeck()
function riderWaite(i) {
    var img = $("<img class='img-thumbnail' src='https://www.free-tarot-reading.net/img/cards/rider-waite/" +
      deck[i].name + ".jpg' alt=" + deck[i].name + "/>");
    return img;
}

//Selects random cards & prevents doubles
function randGen() {
    var cardsLeft = deckArr.length;
    var randInt = Math.floor((Math.random() * cardsLeft));
    var randNum = deckArr[randInt];
    deckArr.splice(randInt, 1);
    return randNum;
}

function showValue(newValue) {
    $("#range").html(newValue);
}
//Past, Present, Future spread
function pastPresentFuture() {
    createDeck();
    $("img").remove();
    $("#blurb").remove();
    $("#pastPresentFuture").html("¿Otra lectura?");
    var percentRevs = $("#range").html();

    for (var b = 1; b <= 3; b++) {
        //$("#rev-" + b).html("");
        var rand = randGen();
        var randInvert = Math.floor((Math.random() * 101));
        
        if (randInvert >= percentRevs) {
            $("#img-" + b).html(riderWaite(rand));
            $("#info-" + b).append(meanings.upright[rand - 1].name);
        } else {
            $("#img-" + b).html(riderWaite(rand).addClass("invert"));
            $("#info-" + b).append(meanings.reversed[rand - 1].name);
        }
    }
}

//Shows all cards (used in debugging)
//function dealerDeck() {
//  createDeck();
//  $("img").remove();
//  for (var i = 1; i < Object.keys(deck).length; i++) {
//    riderWaite(i);
//  }
//}