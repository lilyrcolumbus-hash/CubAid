export interface Article {
  slug: string
  title: string
  description: string
  content: string
}

export interface Category {
  slug: string
  title: string
  emoji: string
  description: string
  color: string
  articles: Article[]
}

export const categories: Category[] = [
  {
    slug: 'primeros-auxilios',
    title: 'Primeros Auxilios',
    emoji: '🩹',
    description: 'RCP, hemorragias, fracturas, quemaduras',
    color: 'bg-red-600',
    articles: [
      {
        slug: 'rcp',
        title: 'RCP - Reanimación Cardiopulmonar',
        description: 'Cómo realizar RCP en adultos, niños y bebés',
        content: `
<h3>¿Qué es la RCP?</h3>
<p>La Reanimación Cardiopulmonar (RCP) es una técnica que puede <strong>salvar vidas</strong> cuando alguien deja de respirar o su corazón deja de latir. Cada minuto sin RCP reduce las probabilidades de supervivencia un 10%.</p>

<div class="danger"><strong>ACTÚA RÁPIDO:</strong> Si alguien se desploma y no responde, tienes entre 4-6 minutos antes de que el daño cerebral sea irreversible.</div>

<h3>RCP en Adultos (paso a paso)</h3>
<ol>
<li><strong>Verifica seguridad:</strong> Asegúrate de que el entorno es seguro para ti.</li>
<li><strong>Evalúa a la persona:</strong> Sacúdela suavemente por los hombros y grita: "¿Estás bien?". Si no responde, pide a alguien que busque ayuda.</li>
<li><strong>Coloca a la persona boca arriba</strong> sobre una superficie dura y plana.</li>
<li><strong>Abre la vía aérea:</strong> Pon una mano en la frente e inclina la cabeza hacia atrás. Con la otra mano, levanta el mentón.</li>
<li><strong>Verifica respiración:</strong> Acerca tu oído a su boca. Mira si el pecho sube, escucha si respira, siente el aire. Máximo 10 segundos.</li>
<li><strong>Si NO respira normalmente, inicia compresiones:</strong></li>
</ol>

<h4>Compresiones torácicas</h4>
<ul>
<li>Coloca el talón de una mano en el <strong>centro del pecho</strong> (entre los pezones).</li>
<li>Pon la otra mano encima, entrelazando los dedos.</li>
<li>Con los brazos rectos y hombros sobre las manos, comprime el pecho <strong>al menos 5 cm</strong> de profundidad.</li>
<li>Ritmo: <strong>100-120 compresiones por minuto</strong> (al ritmo de la canción "Stayin' Alive").</li>
<li>Permite que el pecho vuelva a su posición original entre cada compresión.</li>
</ul>

<h4>Ciclo de RCP</h4>
<ul>
<li><strong>30 compresiones</strong> seguidas de <strong>2 respiraciones de rescate</strong>.</li>
<li>Para las respiraciones: inclina la cabeza, levanta el mentón, tapa la nariz, sella tu boca sobre la de la persona y sopla durante 1 segundo hasta ver que el pecho sube.</li>
<li>Continúa el ciclo 30:2 sin parar hasta que llegue ayuda o la persona respire.</li>
</ul>

<div class="tip"><strong>Si no te sientes cómodo con las respiraciones:</strong> Solo compresiones continuas también pueden salvar una vida. No pares de comprimir.</div>

<h3>RCP en Niños (1-8 años)</h3>
<ul>
<li>Usa <strong>una sola mano</strong> para las compresiones (o dos si el niño es grande).</li>
<li>Profundidad: unos <strong>4 cm</strong>.</li>
<li>Mismo ritmo: 100-120/minuto.</li>
<li>Ciclo: <strong>30 compresiones : 2 respiraciones</strong>.</li>
<li>Sopla más suavemente que con un adulto.</li>
</ul>

<h3>RCP en Bebés (menores de 1 año)</h3>
<ul>
<li>Usa solo <strong>2 dedos</strong> (índice y medio) en el centro del pecho, justo debajo de la línea de los pezones.</li>
<li>Profundidad: unos <strong>3-4 cm</strong>.</li>
<li>Cubre la boca Y nariz del bebé con tu boca para las respiraciones.</li>
<li>Sopla muy suavemente — solo pequeños soplidos.</li>
<li>Ciclo: <strong>30 compresiones : 2 respiraciones</strong>.</li>
</ul>

<div class="warning"><strong>NO hagas:</strong> No comprimas sobre las costillas, el final del esternón ni el abdomen. No interrumpas las compresiones más de 10 segundos.</div>

<div class="tip"><strong>Fuentes verificadas:</strong> American Heart Association (AHA) Guidelines for CPR & ECC, Cruz Roja Internacional — Manual de Primeros Auxilios, OMS (Organización Mundial de la Salud).</div>
`
      },
      {
        slug: 'atragantamiento',
        title: 'Atragantamiento - Maniobra de Heimlich',
        description: 'Cómo actuar cuando alguien se atraganta',
        content: `
<h3>Cómo identificar un atragantamiento</h3>
<p>La persona:</p>
<ul>
<li>Se agarra la garganta con las manos (señal universal)</li>
<li>No puede hablar, toser ni respirar</li>
<li>La piel se pone azulada (cianosis)</li>
<li>Hace ruidos agudos o ningún sonido</li>
</ul>

<div class="warning"><strong>Si la persona puede toser con fuerza:</strong> Anímala a seguir tosiendo. NO le des golpes en la espalda si está tosiendo efectivamente — podrías empeorar la obstrucción.</div>

<h3>Maniobra de Heimlich en Adultos y Niños Mayores</h3>
<ol>
<li><strong>Párate detrás de la persona.</strong> Si es un niño, arrodíllate.</li>
<li><strong>Rodea su cintura</strong> con tus brazos.</li>
<li>Cierra un puño y colócalo con el lado del pulgar <strong>justo arriba del ombligo</strong>, debajo del esternón.</li>
<li>Agarra tu puño con la otra mano.</li>
<li>Haz <strong>compresiones rápidas y firmes hacia adentro y arriba</strong> (como una "J").</li>
<li>Repite hasta que el objeto salga o la persona pierda el conocimiento.</li>
</ol>

<h3>En Bebés (menores de 1 año)</h3>
<ol>
<li>Sienta al bebé boca abajo sobre tu antebrazo, <strong>sosteniendo la cabeza con tu mano</strong>. La cabeza debe estar más baja que el cuerpo.</li>
<li>Da <strong>5 golpes firmes</strong> con el talón de la mano entre los omóplatos.</li>
<li>Si no funciona, voltea al bebé boca arriba.</li>
<li>Haz <strong>5 compresiones torácicas</strong> con 2 dedos en el centro del pecho.</li>
<li>Alterna: 5 golpes en la espalda, 5 compresiones en el pecho.</li>
<li>Revisa la boca antes de cada serie — si ves el objeto, retíralo con cuidado.</li>
</ol>

<div class="danger"><strong>NUNCA metas los dedos a ciegas</strong> en la boca de un bebé — podrías empujar el objeto más adentro.</div>

<h3>Si estás solo y te atragantas</h3>
<ul>
<li>Haz un puño y colócalo sobre tu ombligo.</li>
<li>Empuja con fuerza hacia adentro y arriba.</li>
<li>O inclínate sobre el respaldo de una silla y empuja tu abdomen contra él con fuerza.</li>
</ul>

<h3>En Embarazadas o Personas Obesas</h3>
<ul>
<li>Coloca tus manos en el <strong>centro del pecho</strong> (sobre el esternón), NO en el abdomen.</li>
<li>Haz compresiones torácicas rápidas hacia adentro.</li>
</ul>

<h3>Si la persona pierde el conocimiento</h3>
<ol>
<li>Recuéstala en el suelo con cuidado.</li>
<li>Inicia RCP (30 compresiones : 2 respiraciones).</li>
<li>Antes de cada respiración, mira dentro de la boca — si ves el objeto, retíralo.</li>
</ol>

<div class="tip"><strong>Fuentes verificadas:</strong> American Heart Association (AHA), Cruz Roja Internacional, National Safety Council.</div>
`
      },
      {
        slug: 'hemorragias',
        title: 'Control de Hemorragias',
        description: 'Cómo detener sangrados graves y signos de shock',
        content: `
<h3>Principios básicos</h3>
<p>Una persona puede morir por pérdida de sangre en <strong>5 minutos</strong>. Actuar rápido es crítico.</p>

<h3>Paso 1: Presión directa</h3>
<ol>
<li>Si es posible, ponte guantes o usa una bolsa plástica para protegerte.</li>
<li>Coloca un trapo limpio, tela, camiseta o toalla <strong>directamente sobre la herida</strong>.</li>
<li>Presiona con <strong>firmeza constante</strong> con la palma de la mano.</li>
<li><strong>NO retires el trapo</strong> aunque se empape de sangre — coloca más tela encima.</li>
<li>Mantén la presión durante al menos <strong>15 minutos</strong> sin levantar.</li>
</ol>

<h3>Paso 2: Elevación</h3>
<ul>
<li>Si la herida está en un brazo o pierna, <strong>elévalo por encima del nivel del corazón</strong> mientras mantienes presión.</li>
<li>Esto reduce el flujo de sangre a la zona.</li>
</ul>

<h3>Paso 3: Vendaje de presión</h3>
<ul>
<li>Cuando el sangrado disminuya, envuelve firmemente con una tela o venda.</li>
<li>Debe estar apretado pero <strong>no cortar la circulación</strong> — verifica que los dedos sigan rosados y con sensibilidad.</li>
</ul>

<h3>Torniquete (SOLO emergencia extrema)</h3>
<div class="danger"><strong>Último recurso:</strong> Solo usa torniquete si la presión directa NO detiene el sangrado y la vida está en peligro (hemorragia masiva de brazo o pierna).</div>
<ol>
<li>Usa una tira ancha de tela (cinturón, camisa rasgada) — <strong>nunca alambre o cuerda fina</strong>.</li>
<li>Colócala <strong>5-7 cm por encima de la herida</strong> (entre la herida y el corazón).</li>
<li>Aprieta hasta que el sangrado se detenga.</li>
<li>Anota la hora en que lo pusiste (escribe en la piel del paciente si es necesario).</li>
<li><strong>NO lo aflojes</strong> — espera atención médica.</li>
</ol>

<h3>Signos de Shock (por pérdida de sangre)</h3>
<p>Busca atención médica urgente si la persona muestra:</p>
<ul>
<li>Piel pálida, fría y sudorosa</li>
<li>Respiración rápida y superficial</li>
<li>Pulso rápido y débil</li>
<li>Confusión, mareo o pérdida de conciencia</li>
<li>Labios y uñas azulados</li>
</ul>

<h4>Qué hacer ante el shock:</h4>
<ul>
<li>Acuesta a la persona y <strong>eleva las piernas 20-30 cm</strong> (si no hay lesión en piernas o columna).</li>
<li>Cúbrela con una manta o ropa para mantener el calor.</li>
<li>NO le des nada de beber.</li>
<li>Mantén la calma y habla con la persona para tranquilizarla.</li>
</ul>

<div class="tip"><strong>Fuentes verificadas:</strong> Cruz Roja Internacional, American College of Surgeons — ATLS, OMS (Organización Mundial de la Salud), Hartford Consensus (Stop the Bleed).</div>
`
      },
      {
        slug: 'quemaduras',
        title: 'Quemaduras',
        description: 'Clasificación, tratamiento inmediato y cuándo es emergencia',
        content: `
<h3>Clasificación de quemaduras</h3>

<h4>1er grado (superficial)</h4>
<ul>
<li>Piel roja, seca, dolorosa (como una quemadura solar)</li>
<li>Solo afecta la capa exterior de la piel</li>
<li>Sana en 3-5 días sin cicatriz</li>
</ul>

<h4>2do grado (parcial)</h4>
<ul>
<li>Piel roja, ampollas, muy dolorosa, húmeda</li>
<li>Afecta capas más profundas</li>
<li>Sana en 2-3 semanas, puede dejar cicatriz</li>
</ul>

<h4>3er grado (profunda)</h4>
<ul>
<li>Piel blanca, marrón o negra. Puede verse seca y dura</li>
<li>Puede NO doler (los nervios están destruidos)</li>
<li><strong>Emergencia médica</strong> — necesita atención profesional</li>
</ul>

<h3>Tratamiento inmediato</h3>
<ol>
<li><strong>Enfría la quemadura</strong> con agua corriente fresca (NO helada) durante <strong>10-20 minutos</strong>. Este es el paso más importante.</li>
<li>Retira anillos, relojes o ropa suelta alrededor de la zona ANTES de que se inflame.</li>
<li><strong>NO retires ropa pegada</strong> a la quemadura.</li>
<li>Cubre con un trapo limpio, húmedo y sin pelusa.</li>
<li>Si hay dolor, paracetamol o ibuprofeno si está disponible.</li>
</ol>

<div class="danger"><strong>NO hagas esto NUNCA:</strong>
<ul>
<li>NO pongas hielo directo — causa más daño</li>
<li>NO pongas mantequilla, pasta de dientes, aceite ni remedios caseros</li>
<li>NO revientes las ampollas — protegen la piel</li>
<li>NO uses algodón — se pega a la herida</li>
</ul></div>

<h3>¿Cuándo es una emergencia?</h3>
<p>Busca ayuda médica urgente si:</p>
<ul>
<li>La quemadura es de <strong>3er grado</strong> (cualquier tamaño)</li>
<li>Cubre un área mayor que la palma de la mano de la persona</li>
<li>Está en la <strong>cara, manos, pies, genitales o articulaciones</strong></li>
<li>Rodea completamente un brazo o pierna</li>
<li>Es causada por electricidad o químicos</li>
<li>La persona es menor de 5 años o mayor de 60</li>
<li>Hay dificultad para respirar (quemadura por inhalación)</li>
</ul>

<h3>Quemaduras por sol (muy comunes en Cuba)</h3>
<ul>
<li>Aplica paños húmedos fríos</li>
<li>Hidrata abundantemente (agua, no alcohol)</li>
<li>Aloe vera natural si hay disponible — cortado directo de la planta</li>
<li>Si hay fiebre, escalofríos o ampollas extensas, busca ayuda médica</li>
</ul>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), American Burn Association, Cruz Roja Internacional.</div>
`
      },
      {
        slug: 'fracturas',
        title: 'Fracturas e Inmovilización',
        description: 'Cómo inmovilizar con materiales improvisados',
        content: `
<h3>Cómo reconocer una fractura</h3>
<ul>
<li>Dolor intenso que empeora al moverse o tocar</li>
<li>Hinchazón y moretón</li>
<li>Deformidad (el hueso se ve torcido o fuera de lugar)</li>
<li>Incapacidad de mover la extremidad</li>
<li>Sonido de "crack" al momento de la lesión</li>
<li>Hormigueo o entumecimiento más allá de la lesión</li>
</ul>

<div class="danger"><strong>Si sospechas fractura de cuello o columna:</strong> NO muevas a la persona. Mantén la cabeza, cuello y espalda alineados. Espera ayuda profesional.</div>

<h3>Inmovilización con materiales improvisados</h3>
<p>En Cuba, puedes usar lo que tengas disponible:</p>

<h4>Para férula (tablilla):</h4>
<ul>
<li>Tablas de madera, palos de escoba, ramas rectas y gruesas</li>
<li>Periódicos o revistas enrollados</li>
<li>Cartón grueso</li>
<li>Almohadas dobladas</li>
</ul>

<h4>Para amarrar:</h4>
<ul>
<li>Tiras de tela (camisetas, sábanas cortadas)</li>
<li>Cinturones, pañuelos, cordones</li>
</ul>

<h3>Cómo inmovilizar (paso a paso)</h3>
<ol>
<li><strong>No intentes alinear el hueso</strong> — inmoviliza en la posición que encontraste.</li>
<li>Coloca la férula de modo que <strong>cubra la articulación por encima y por debajo</strong> de la fractura.</li>
<li>Acolcha entre la férula y la piel con tela suave.</li>
<li>Amarra firmemente pero sin cortar circulación.</li>
<li>Verifica cada 15 minutos que los dedos <strong>sigan rosados y con sensibilidad</strong>.</li>
</ol>

<h3>Cabestrillo para brazo</h3>
<ol>
<li>Usa una tela grande (pañuelo, sábana doblada en triángulo).</li>
<li>Coloca el antebrazo sobre la tela con el codo en la esquina.</li>
<li>Ata los extremos detrás del cuello.</li>
<li>El brazo debe quedar a la altura del pecho, con el codo a 90°.</li>
<li>Asegura con otro trapo alrededor del cuerpo si es necesario.</li>
</ol>

<h3>Fractura abierta (hueso visible)</h3>
<ul>
<li><strong>NO empujes el hueso hacia adentro.</strong></li>
<li>Cubre la herida con un trapo limpio y húmedo.</li>
<li>Inmoviliza alrededor de la herida sin presionar directamente.</li>
<li>Es una <strong>emergencia</strong> — necesita atención médica urgente.</li>
</ul>

<div class="tip"><strong>Para el dolor mientras esperas:</strong> Aplica hielo envuelto en tela (20 minutos sí, 20 minutos no). Si no hay hielo, agua fría. Eleva la extremidad si es posible.</div>

<div class="tip"><strong>Fuentes verificadas:</strong> Cruz Roja Internacional, American Academy of Orthopaedic Surgeons (AAOS), OMS (Organización Mundial de la Salud).</div>
`
      },
      {
        slug: 'golpe-de-calor',
        title: 'Golpe de Calor',
        description: 'Prevención y tratamiento — crítico sin ventilador ni AC',
        content: `
<h3>¿Por qué es tan peligroso en Cuba ahora?</h3>
<p>Con apagones de más de 20 horas y sin ventilador ni aire acondicionado, el golpe de calor es una <strong>amenaza real y mortal</strong>. Puede matar en menos de una hora si no se trata.</p>

<h3>Diferencia entre agotamiento y golpe de calor</h3>

<h4>Agotamiento por calor (PRECAUCIÓN)</h4>
<ul>
<li>Sudoración excesiva</li>
<li>Piel fría y húmeda</li>
<li>Debilidad, mareo, náuseas</li>
<li>Dolor de cabeza</li>
<li>Pulso rápido pero débil</li>
<li>Temperatura corporal menor de 40°C</li>
</ul>

<h4>Golpe de calor (EMERGENCIA)</h4>
<ul>
<li><strong>La piel está SECA y CALIENTE</strong> (ya no suda)</li>
<li>Temperatura corporal <strong>mayor de 40°C</strong></li>
<li>Confusión, desorientación, habla incoherente</li>
<li>Pérdida de conciencia</li>
<li>Pulso rápido y fuerte</li>
<li>Convulsiones</li>
</ul>

<div class="danger"><strong>El golpe de calor MATA.</strong> Si la persona deja de sudar y está confundida, enfríala inmediatamente. No esperes.</div>

<h3>Tratamiento del golpe de calor</h3>
<ol>
<li><strong>Mueve a la persona a la sombra</strong> o al lugar más fresco disponible.</li>
<li><strong>Quita la ropa</strong> innecesaria.</li>
<li><strong>Enfría rápidamente</strong> por todos los medios posibles:
<ul>
<li>Moja todo el cuerpo con agua (incluso agua del cubo)</li>
<li>Coloca trapos mojados en cuello, axilas e ingles (ahí pasan las arterias grandes)</li>
<li>Abanica mientras mojas para aumentar evaporación</li>
<li>Si hay hielo, envuélvelo en tela y ponlo en axilas, ingles y cuello</li>
</ul></li>
<li><strong>Si está consciente y puede tragar:</strong> Dale sorbos pequeños de agua fresca (no helada).</li>
<li><strong>NO le des aspirina ni paracetamol</strong> — no funcionan para esta fiebre.</li>
<li>Busca atención médica urgente.</li>
</ol>

<h3>Prevención (sin electricidad)</h3>
<ul>
<li><strong>Hidratación:</strong> Bebe agua frecuentemente, aunque no tengas sed. Al menos 2-3 litros al día.</li>
<li><strong>Horarios:</strong> Evita actividad física entre 10am y 4pm.</li>
<li><strong>Ropa:</strong> Usa ropa clara, ligera y holgada. Cubre la cabeza.</li>
<li><strong>Ventilación:</strong> Abre todas las ventanas. Cuelga sábanas mojadas en las ventanas — el aire que pasa se enfría (aire acondicionado casero).</li>
<li><strong>Pisos:</strong> Moja el piso de la casa — al evaporarse baja la temperatura.</li>
<li><strong>Comidas:</strong> Come liviano. Las frutas con alto contenido de agua ayudan (si hay disponibles).</li>
<li><strong>Grupos vulnerables:</strong> Vigila especialmente a <strong>bebés, ancianos y personas con enfermedades crónicas</strong>.</li>
</ul>

<div class="tip"><strong>Truco cubano:</strong> Un trapo mojado en la nuca y muñecas enfría rápidamente. Repite cada vez que se seque. Por la noche, moja una sábana y úsala para dormir.</div>

<div class="tip"><strong>Fuentes verificadas:</strong> CDC (Centers for Disease Control and Prevention), OMS (Organización Mundial de la Salud), American Red Cross.</div>
`
      },
      {
        slug: 'heridas-cuidado',
        title: 'Cuidado de Heridas',
        description: 'Limpieza, prevención de infección y vendaje con recursos limitados',
        content: `
<h3>Principios del cuidado de heridas</h3>
<p>Una herida mal cuidada puede infectarse gravemente en 24-48 horas, especialmente en climas tropicales como el de Cuba. La limpieza correcta es más importante que cualquier medicina.</p>

<h3>Paso 1: Limpieza de la herida</h3>
<ol>
<li><strong>Lávate las manos</strong> antes de tocar cualquier herida — con jabón y agua o solución salina.</li>
<li><strong>Irriga la herida con agua limpia</strong> — usa entre 1 y 4 litros de agua potable o hervida. El chorro debe tener presión (aprieta una botella plástica con un hueco pequeño en la tapa).</li>
<li><strong>Retira suavemente</strong> cualquier suciedad, tierra o fragmentos visibles con unas pinzas limpias.</li>
<li><strong>NO uses agua oxigenada ni alcohol directamente en la herida</strong> — dañan el tejido sano y retrasan la curación.</li>
</ol>

<h4>Solución salina casera (para limpiar heridas)</h4>
<div class="tip"><strong>Receta:</strong> Hierve 1 litro de agua, agrega 1 cucharadita rasa de sal (9 gramos por litro). Deja enfriar. Usa para irrigar heridas. Descarta después de 24 horas.</div>

<h3>Paso 2: Remedios naturales verificados</h3>

<h4>Miel para heridas</h4>
<p>La miel NO es un remedio casero sin base — está <strong>verificada científicamente</strong> por revisiones Cochrane y publicaciones del NCBI:</p>
<ul>
<li>La miel tiene propiedades <strong>antibacterianas naturales</strong> (produce peróxido de hidrógeno en baja concentración).</li>
<li>Mantiene la herida húmeda, lo que favorece la curación.</li>
<li>Aplica una capa fina de miel pura directamente sobre la herida limpia.</li>
<li>Cubre con un vendaje limpio. Cambia cada 12-24 horas.</li>
<li>Funciona especialmente bien en quemaduras superficiales y heridas con bordes irregulares.</li>
</ul>

<h3>Paso 3: Cierre de heridas</h3>

<h4>Mariposas de cinta adhesiva (butterfly bandages)</h4>
<p>Si no hay sutura disponible, puedes cerrar heridas lineales limpias con tiras de cinta adhesiva:</p>
<ol>
<li>Corta tiras de esparadrapo o cinta adhesiva de 5-7 cm de largo.</li>
<li>Haz un corte estrecho en el centro de cada tira (forma de reloj de arena) para que sea más flexible.</li>
<li>Seca bien la piel alrededor de la herida.</li>
<li>Junta los bordes de la herida y pega las tiras perpendiculares al corte, alternando lados.</li>
<li>Deja espacio entre cada tira para que la herida drene.</li>
</ol>

<div class="warning"><strong>NO cierres heridas que:</strong> Tengan más de 6-8 horas de ocurridas, estén sucias o contaminadas, sean mordeduras de animal, o muestren signos de infección. Estas deben sanar abiertas.</div>

<h3>Paso 4: Vendaje</h3>
<ul>
<li>Cubre con <strong>gasa limpia, tela de algodón limpia</strong>, o incluso una hoja de plátano limpia (usada tradicionalmente y con evidencia de propiedades beneficiosas).</li>
<li>Cambia el vendaje al menos una vez al día, o cuando se moje o ensucie.</li>
<li><strong>"Mejor sin vendaje que un vendaje sucio"</strong> — un trapo sucio causa más infección que dejar la herida al aire.</li>
</ul>

<h3>Signos de infección — URGENTE</h3>
<div class="danger"><strong>Busca atención médica si ves cualquiera de estos signos:</strong>
<ul>
<li><strong>Enrojecimiento creciente</strong> alrededor de la herida (se expande)</li>
<li><strong>Hinchazón y calor</strong> en la zona</li>
<li><strong>Pus</strong> (líquido amarillo-verdoso o con mal olor)</li>
<li><strong>Líneas rojas</strong> que se extienden desde la herida hacia el corazón — esto indica infección que se está propagando por el sistema linfático. Es una EMERGENCIA.</li>
<li><strong>Fiebre</strong> después de una herida</li>
<li>Dolor que empeora en lugar de mejorar después del segundo día</li>
</ul></div>

<div class="tip"><strong>Fuentes verificadas:</strong> Hesperian Foundation — "Where There Is No Doctor", Cochrane Database of Systematic Reviews (miel para heridas), NCBI/PubMed, OMS (Organización Mundial de la Salud).</div>
`
      },
      {
        slug: 'mordeduras',
        title: 'Mordeduras y Picaduras',
        description: 'Serpientes, escorpiones, arañas — qué hacer y qué NO hacer',
        content: `
<h3>Dato importante sobre Cuba</h3>
<p>Cuba es uno de los pocos lugares del mundo que <strong>NO tiene serpientes venenosas peligrosas para humanos</strong>. Las serpientes cubanas (como el majá de Santa María) no son venenosas. Sin embargo, hay otros animales que sí pueden causar problemas.</p>

<h3>Escorpiones (alacranes)</h3>
<ul>
<li>Cuba tiene varias especies de escorpiones. Sus picaduras son <strong>dolorosas pero raramente fatales</strong> en adultos sanos.</li>
<li>Mayor riesgo en: niños pequeños, ancianos y personas con problemas cardíacos.</li>
</ul>
<h4>Qué hacer:</h4>
<ol>
<li>Limpia la zona con agua y jabón.</li>
<li>Aplica una compresa fría envuelta en tela (15-20 minutos).</li>
<li>Vigila síntomas sistémicos: dificultad para respirar, espasmos musculares, salivación excesiva.</li>
<li>Si hay síntomas más allá del dolor local, busca atención médica.</li>
</ol>

<h3>Arañas — Viuda negra</h3>
<p>La viuda negra (<em>Latrodectus mactans</em>) SÍ está presente en Cuba. Su mordedura <strong>requiere atención médica</strong>.</p>
<h4>Síntomas:</h4>
<ul>
<li>Dolor intenso en el sitio de la mordedura que se extiende</li>
<li>Calambres musculares abdominales severos</li>
<li>Sudoración, náuseas, dificultad para respirar</li>
</ul>
<h4>Qué hacer:</h4>
<ol>
<li>Mantén la calma — la mortalidad es baja con tratamiento.</li>
<li>Limpia la mordedura con agua y jabón.</li>
<li>Aplica frío envuelto en tela.</li>
<li><strong>Busca atención médica lo antes posible.</strong></li>
</ol>

<h3>Primeros auxilios generales para mordeduras y picaduras</h3>
<ol>
<li><strong>Mantén la calma.</strong> La agitación acelera la absorción de veneno.</li>
<li><strong>Inmoviliza</strong> la extremidad afectada — mantenla al nivel del corazón o ligeramente por debajo.</li>
<li><strong>Retira anillos, relojes y ropa ajustada</strong> — la zona puede hincharse.</li>
<li>Limpia con agua y jabón.</li>
<li>Busca atención médica.</li>
</ol>

<h3>MITOS PELIGROSOS — Lo que NO debes hacer</h3>
<div class="danger"><strong>NUNCA hagas nada de esto. Todos están científicamente desmentidos y causan más daño:</strong>
<ul>
<li><strong>NO cortes la herida</strong> — causa más sangrado, infección y daño tisular</li>
<li><strong>NO succiones el veneno</strong> — no funciona y puedes infectar la herida con bacterias de la boca</li>
<li><strong>NO apliques torniquete</strong> — puede causar la pérdida de la extremidad por falta de circulación</li>
<li><strong>NO apliques hielo directo</strong> — puede causar congelación del tejido ya dañado</li>
<li><strong>NO apliques remedios caseros</strong> (tabaco, barro, carne cruda, orina, etc.) — ninguno funciona y aumentan el riesgo de infección</li>
<li><strong>NO des alcohol</strong> a la persona — dilata los vasos sanguíneos y acelera la absorción del veneno</li>
</ul></div>

<h3>Prevención</h3>
<ul>
<li>Sacude zapatos y ropa antes de ponértelos (los escorpiones se esconden ahí).</li>
<li>Revisa debajo de piedras, troncos y materiales acumulados antes de moverlos.</li>
<li>Usa calzado cerrado en áreas rurales.</li>
<li>Sella grietas en paredes y pisos donde pueden entrar arañas y escorpiones.</li>
<li>Mantén las áreas alrededor de la casa limpias de escombros y basura.</li>
</ul>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), Cruz Roja Internacional, PLoS Neglected Tropical Diseases (revisión sistemática), WHO Guidelines for the Management of Snakebites.</div>
`
      }
    ]
  },
  {
    slug: 'salud-sin-medico',
    title: 'Salud sin Médico',
    emoji: '💊',
    description: 'Diarrea, fiebre, dengue, diabetes',
    color: 'bg-blue-700',
    articles: [
      {
        slug: 'rehidratacion-oral',
        title: 'Sales de Rehidratación Oral Caseras',
        description: 'Receta casera que puede salvar vidas',
        content: `
<h3>¿Cuándo usarlas?</h3>
<p>La deshidratación por diarrea y vómito es una de las principales causas de muerte infantil prevenible. Las Sales de Rehidratación Oral (SRO) caseras pueden <strong>salvar vidas</strong> cuando no hay suero comercial disponible.</p>

<h3>Receta (aprobada por la OMS)</h3>
<div class="tip">
<strong>Ingredientes:</strong>
<ul>
<li><strong>1 litro</strong> de agua limpia (hervida si es posible, o tratada)</li>
<li><strong>6 cucharaditas rasas</strong> de azúcar (30g)</li>
<li><strong>½ cucharadita rasa</strong> de sal (2.5g)</li>
</ul>
<p>Mezcla bien hasta que se disuelva. El sabor debe ser <strong>menos salado que las lágrimas</strong>.</p>
</div>

<div class="danger"><strong>IMPORTANTE:</strong> Demasiada sal puede ser peligrosa, especialmente para niños. Mide con cuidado. Si no estás seguro, es mejor poner menos sal que más.</div>

<h3>Cuánto dar según la edad</h3>
<ul>
<li><strong>Menores de 2 años:</strong> ¼ a ½ taza después de cada deposición líquida</li>
<li><strong>2-10 años:</strong> ½ a 1 taza después de cada deposición</li>
<li><strong>Mayores de 10 años y adultos:</strong> Tanto como deseen, al menos 1 taza después de cada deposición</li>
</ul>

<h4>Cómo darla:</h4>
<ul>
<li>A sorbos pequeños y frecuentes (cada 1-2 minutos)</li>
<li>Si la persona vomita, espera 10 minutos y vuelve a intentar con sorbos más pequeños</li>
<li>Continúa dando pecho a los bebés lactantes además de las SRO</li>
</ul>

<h3>Señales de deshidratación</h3>
<h4>Leve-Moderada:</h4>
<ul>
<li>Boca y labios secos</li>
<li>Orina oscura y escasa</li>
<li>Sed aumentada</li>
<li>Ojos ligeramente hundidos</li>
</ul>

<h4>Grave (EMERGENCIA):</h4>
<ul>
<li>Ojos muy hundidos</li>
<li>No produce lágrimas al llorar (en niños)</li>
<li>Piel que al pellizcarla tarda en volver a su lugar</li>
<li>Somnolencia o inconsciencia</li>
<li>No orina en 6+ horas</li>
</ul>

<div class="warning"><strong>Busca atención médica si:</strong> La diarrea tiene sangre, dura más de 3 días, hay fiebre alta, o la persona no puede retener líquidos.</div>

<h3>Conservación</h3>
<p>La mezcla dura máximo <strong>24 horas</strong>. Después de eso, descártala y prepara una nueva. Mantenla tapada y en la sombra.</p>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), UNICEF, Hesperian Foundation — "Where There Is No Doctor".</div>
`
      },
      {
        slug: 'fiebre-ninos',
        title: 'Fiebre en Niños',
        description: 'Cuándo es peligrosa y cómo manejarla',
        content: `
<h3>¿Qué es fiebre?</h3>
<ul>
<li><strong>Normal:</strong> 36.5°C - 37.5°C</li>
<li><strong>Fiebre:</strong> 38°C o más</li>
<li><strong>Fiebre alta:</strong> 39°C o más</li>
<li><strong>Muy alta (peligro):</strong> 40°C o más</li>
</ul>

<p>La fiebre en sí <strong>no es una enfermedad</strong> — es la respuesta del cuerpo para combatir infecciones. Pero en niños pequeños puede ser peligrosa.</p>

<h3>Cómo bajar la fiebre sin medicinas</h3>
<ol>
<li><strong>Quita ropa excesiva</strong> — deja al niño en ropa ligera.</li>
<li><strong>Baño tibio</strong> (NO frío) — agua a temperatura ambiente, durante 10-15 minutos.</li>
<li><strong>Paños húmedos tibios</strong> en frente, cuello y axilas.</li>
<li><strong>Hidratar mucho</strong> — agua, jugos, leche materna si es lactante.</li>
<li><strong>Ambiente fresco</strong> — ventilación, sombra.</li>
</ol>

<div class="warning"><strong>NO hagas:</strong> No uses alcohol para frotar — se absorbe por la piel y es tóxico. No uses agua helada — causa escalofríos que aumentan la temperatura.</div>

<h3>Si hay medicinas disponibles</h3>
<h4>Paracetamol (Acetaminofén):</h4>
<ul>
<li>10-15 mg por kg de peso, cada 6-8 horas</li>
<li>Ejemplo: niño de 10 kg = 100-150 mg</li>
<li>No dar más de 4 dosis en 24 horas</li>
</ul>

<h4>Ibuprofeno:</h4>
<ul>
<li>5-10 mg por kg de peso, cada 6-8 horas</li>
<li>Dar con comida si es posible</li>
<li><strong>NO dar ibuprofeno si hay sospecha de dengue</strong></li>
</ul>

<div class="danger"><strong>NUNCA des aspirina a menores de 18 años</strong> — puede causar el Síndrome de Reye, una condición potencialmente mortal.</div>

<h3>Cuándo es EMERGENCIA</h3>
<p>Busca atención médica urgente si:</p>
<ul>
<li>Bebé <strong>menor de 3 meses</strong> con cualquier fiebre</li>
<li>Fiebre de <strong>40°C o más</strong> que no baja</li>
<li>Fiebre que dura <strong>más de 3 días</strong></li>
<li>El niño está muy somnoliento o difícil de despertar</li>
<li>Rigidez en el cuello</li>
<li>Manchas moradas o rojas en la piel que no desaparecen al presionar</li>
<li>Convulsiones (convulsión febril)</li>
<li>Dificultad para respirar</li>
<li>Rechaza líquidos repetidamente</li>
</ul>

<h3>Convulsiones febriles</h3>
<p>Pueden ocurrir en niños de 6 meses a 5 años cuando la fiebre sube rápidamente:</p>
<ol>
<li><strong>No entres en pánico</strong> — la mayoría dura menos de 5 minutos.</li>
<li>Coloca al niño de lado (posición de recuperación).</li>
<li><strong>NO metas nada en la boca</strong> — no se traga la lengua.</li>
<li>Aleja objetos con los que pueda golpearse.</li>
<li>Anota cuánto dura la convulsión.</li>
<li>Si dura más de 5 minutos, busca emergencia.</li>
</ol>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), American Academy of Pediatrics (AAP), NHS (National Health Service).</div>
`
      },
      {
        slug: 'dengue-chikungunya',
        title: 'Dengue y Chikungunya',
        description: 'Síntomas, hidratación y señales de alarma',
        content: `
<h3>Contexto en Cuba</h3>
<p>Con más de <strong>50,000 infectados</strong> desde noviembre 2025, el dengue y la chikungunya son una emergencia activa. Al almacenar agua en tanques por los cortes, se crían mosquitos Aedes aegypti — el transmisor de ambas enfermedades.</p>

<h3>Dengue — Síntomas</h3>
<ul>
<li>Fiebre alta repentina (40°C)</li>
<li>Dolor de cabeza intenso (detrás de los ojos)</li>
<li>Dolor muscular y articular severo ("fiebre rompehuesos")</li>
<li>Náuseas y vómitos</li>
<li>Sarpullido (aparece 2-5 días después de la fiebre)</li>
<li>Sangrado leve de encías o nariz</li>
</ul>

<h3>Chikungunya — Síntomas</h3>
<ul>
<li>Fiebre alta repentina</li>
<li><strong>Dolor articular intenso</strong> (especialmente manos, pies, rodillas) — más fuerte que en dengue</li>
<li>Dolor muscular</li>
<li>Sarpullido</li>
<li>El dolor articular puede durar <strong>semanas o meses</strong></li>
</ul>

<h3>Tratamiento en casa</h3>
<ol>
<li><strong>Hidratación agresiva:</strong> Bebe 2-3 litros diarios mínimo. Agua, jugos, SRO caseras, caldos.</li>
<li><strong>Solo paracetamol (acetaminofén)</strong> para la fiebre y el dolor.</li>
<li><strong>Reposo absoluto.</strong></li>
<li>Paños húmedos para bajar la fiebre.</li>
<li>Usa mosquitero para evitar infectar a otros a través de mosquitos que te piquen.</li>
</ol>

<div class="danger"><strong>PROHIBIDO con dengue:</strong>
<ul>
<li><strong>NO tomes aspirina</strong> — aumenta riesgo de hemorragia</li>
<li><strong>NO tomes ibuprofeno</strong> — mismo riesgo</li>
<li><strong>NO tomes naproxeno ni diclofenaco</strong></li>
<li><strong>Solo paracetamol</strong></li>
</ul></div>

<h3>Señales de ALARMA (dengue grave/hemorrágico)</h3>
<p>Generalmente aparecen cuando la fiebre baja (día 3-7). Busca atención médica <strong>inmediata</strong> si ves:</p>
<ul>
<li>Dolor abdominal intenso y sostenido</li>
<li>Vómitos persistentes (3+ veces en 1 hora)</li>
<li>Sangrado de encías, nariz o en la orina/heces</li>
<li>Puntos rojos en la piel (petequias)</li>
<li>Vómito con sangre o heces negras</li>
<li>Somnolencia extrema o irritabilidad</li>
<li>Piel fría, húmeda y pálida</li>
<li>Dificultad para respirar</li>
</ul>

<div class="warning"><strong>El período más peligroso es cuando la fiebre BAJA</strong> (entre el día 3 y 7). No bajes la guardia — sigue hidratando y vigilando.</div>

<h3>Prevención (sin insecticida)</h3>
<ul>
<li><strong>Elimina agua estancada:</strong> Vacía cualquier recipiente que acumule agua cada 3 días máximo.</li>
<li><strong>Tapa los tanques de agua</strong> con tela fina o malla que impida el paso de mosquitos.</li>
<li>Usa ropa de manga larga al amanecer y atardecer (horas pico del mosquito).</li>
<li>Duerme con mosquitero si es posible.</li>
<li>El mosquito Aedes pica <strong>de día</strong>, no solo de noche.</li>
</ul>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), OPS (Organización Panamericana de la Salud), CDC (Centers for Disease Control and Prevention).</div>
`
      },
      {
        slug: 'infecciones-respiratorias',
        title: 'Infecciones Respiratorias',
        description: 'Tos, gripe, neumonía — cuándo es peligroso y remedios verificados',
        content: `
<h3>Resfriado común vs. algo más serio</h3>
<p>La mayoría de las infecciones respiratorias son virales y se curan solas en 7-10 días. Lo importante es saber cuándo se convierte en algo más grave, especialmente en niños.</p>

<h3>Remedios verificados para la tos</h3>

<h4>Miel para la tos</h4>
<p>La OMS recomienda la miel para la tos desde 2001, y revisiones Cochrane han confirmado su efectividad:</p>
<ul>
<li>Una cucharada de miel pura antes de dormir reduce la tos nocturna.</li>
<li>Es <strong>tan efectiva o más que muchos jarabes comerciales</strong> para la tos.</li>
<li>Puede mezclarse con limón y agua tibia.</li>
</ul>
<div class="danger"><strong>NUNCA des miel a bebés menores de 12 meses</strong> — puede contener esporas de Clostridium botulinum que causan botulismo infantil, una enfermedad potencialmente mortal. El sistema digestivo de los bebés no puede combatir estas esporas.</div>

<h4>Inhalación de vapor</h4>
<ol>
<li>Hierve agua y viértela en un recipiente amplio (palangana, olla).</li>
<li><strong>Espera 1-2 minutos</strong> — el agua debe estar caliente pero NO hirviendo para evitar quemaduras.</li>
<li>Inclínate sobre el recipiente a una distancia segura (30 cm mínimo).</li>
<li>Cubre tu cabeza y el recipiente con una toalla para atrapar el vapor.</li>
<li>Respira normalmente durante 10-15 minutos.</li>
<li>Si tienes hojas de eucalipto, agrégalas al agua para mayor beneficio.</li>
</ol>
<div class="warning"><strong>Precaución:</strong> Nunca hagas inhalaciones de vapor con niños pequeños sin supervisión directa — riesgo de quemaduras por volcadura del recipiente.</div>

<h4>Posición para respirar mejor</h4>
<ul>
<li>Siéntate <strong>erguido o semi-sentado</strong> — la gravedad ayuda a drenar las secreciones.</li>
<li>Para dormir, eleva la cabecera de la cama con almohadas, bloques o libros.</li>
<li>En niños pequeños, mantenlos en posición semi-vertical en brazos.</li>
</ul>

<h3>Cómo distinguir neumonía de un resfriado (criterios OMS)</h3>
<p>La neumonía mata más niños que cualquier otra enfermedad infecciosa. Aprende a identificarla contando las respiraciones por minuto:</p>

<div class="danger"><strong>Respiración rápida = sospecha de neumonía:</strong>
<ul>
<li><strong>Bebé menor de 2 meses:</strong> 60 o más respiraciones por minuto</li>
<li><strong>Bebé de 2-12 meses:</strong> 50 o más respiraciones por minuto</li>
<li><strong>Niño de 1-5 años:</strong> 40 o más respiraciones por minuto</li>
</ul>
<p>Cuenta durante un minuto completo con el niño en calma (no llorando ni comiendo).</p></div>

<h4>Otros signos de alarma que requieren atención médica URGENTE:</h4>
<ul>
<li><strong>Tiraje intercostal:</strong> la piel entre las costillas se hunde cuando el niño respira (se ve el esfuerzo).</li>
<li><strong>Aleteo nasal:</strong> las fosas nasales se abren exageradamente al respirar.</li>
<li><strong>Quejido al respirar</strong> (especialmente en bebés).</li>
<li><strong>Labios o uñas azulados</strong> (cianosis).</li>
<li>Incapacidad de beber o amamantar.</li>
<li>Somnolencia excesiva o convulsiones.</li>
</ul>

<h3>Medidas generales</h3>
<ul>
<li><strong>Hidratación:</strong> Líquidos tibios frecuentes — agua, caldos, tés.</li>
<li><strong>Alimentación:</strong> Comidas pequeñas y frecuentes. No forzar si no tiene apetito.</li>
<li><strong>Lactancia:</strong> Aumenta la frecuencia de las tomas — la leche materna contiene anticuerpos.</li>
<li><strong>Limpieza nasal:</strong> En bebés, usa gotas de solución salina (la misma receta de 1 cucharadita de sal por litro) y aspira suavemente con una perilla.</li>
</ul>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), Cochrane Database of Systematic Reviews, WHO Integrated Management of Childhood Illness (IMCI).</div>
`
      },
      {
        slug: 'parto-emergencia',
        title: 'Parto de Emergencia',
        description: 'Qué hacer si no hay acceso a hospital ni partera',
        content: `
<h3>Cuándo usar esta guía</h3>
<p>Esta información es para situaciones donde <strong>no hay acceso a atención médica</strong> y el parto es inminente. Siempre que sea posible, busca ayuda profesional. El sistema de salud cubano tiene una red de casas maternas y policlínicos — úsalos si están disponibles.</p>

<h3>Señales de peligro durante el embarazo</h3>
<div class="danger"><strong>Busca ayuda médica INMEDIATA si hay:</strong>
<ul>
<li>Sangrado vaginal en cualquier momento del embarazo</li>
<li>Dolor de cabeza severo con visión borrosa o hinchazón de manos/cara (puede ser preeclampsia)</li>
<li>Fiebre alta durante el embarazo</li>
<li>El bebé deja de moverse o se mueve mucho menos de lo normal</li>
<li>Rotura de la bolsa de agua antes de las 37 semanas</li>
<li>Convulsiones (eclampsia) — EMERGENCIA ABSOLUTA</li>
</ul></div>

<h3>Preparación para un parto de emergencia</h3>
<p>Ten listo:</p>
<ul>
<li>Superficie limpia (sábanas limpias, plástico debajo)</li>
<li>Toallas o telas limpias (al menos 3-4)</li>
<li>Hilo limpio o cinta umbilical (hervido si es posible) para amarrar el cordón</li>
<li>Cuchilla o tijeras LIMPIAS (esterilizadas con alcohol, fuego o agua hirviendo)</li>
<li>Recipiente para la placenta</li>
<li>Gorro o tela para cubrir la cabeza del bebé</li>
</ul>

<h3>El parto — paso a paso</h3>
<ol>
<li><strong>Lávate las manos exhaustivamente</strong> con jabón y agua. Si hay alcohol, úsalo también.</li>
<li>La madre puede adoptar la posición que le sea más cómoda: cuclillas, de rodillas, acostada de lado, o semi-sentada.</li>
<li><strong>NO apures el parto.</strong> Deja que el cuerpo haga su trabajo. NO tires del bebé.</li>
<li>Cuando aparezca la cabeza, <strong>sostén suavemente</strong> pero NO empujes ni tires.</li>
<li>Si el cordón está alrededor del cuello, deslízalo suavemente por encima de la cabeza.</li>
<li>El cuerpo generalmente sale con la siguiente contracción. Sostén al bebé con firmeza — estará resbaloso.</li>
</ol>

<h3>Cuidado inmediato del recién nacido</h3>
<div class="warning"><strong>Los primeros minutos son críticos:</strong></div>
<ol>
<li><strong>Seca al bebé inmediatamente</strong> con una tela limpia. Frota suavemente la espalda si no llora enseguida.</li>
<li><strong>Piel con piel:</strong> Coloca al bebé directamente sobre el pecho desnudo de la madre, boca abajo. Cúbrelos a ambos con una manta.</li>
<li><strong>Gorro:</strong> Los bebés pierden mucho calor por la cabeza — cúbrela con un gorro o tela.</li>
<li><strong>Cordón umbilical — NO cortes de inmediato:</strong> Espera 1-3 minutos (el cordón deja de pulsar). La OMS recomienda el pinzamiento tardío porque permite que el bebé reciba más sangre y hierro.</li>
<li>Amarra el cordón con hilo limpio en DOS puntos: a 3 cm y a 6 cm del ombligo del bebé. Corta entre los dos nudos con instrumento estéril.</li>
<li><strong>Lactancia:</strong> El bebé debe mamar dentro de la primera hora. El calostro (primera leche, amarillenta) es crucial — contiene anticuerpos y nutrientes esenciales.</li>
</ol>

<h3>Hemorragia posparto — EMERGENCIA</h3>
<div class="danger"><strong>Si la madre sangra abundantemente después del parto:</strong>
<ol>
<li><strong>Masaje uterino inmediato:</strong> Coloca una mano sobre el abdomen de la madre (debajo del ombligo) y masajea el útero con movimientos firmes y circulares hasta que se sienta duro como una pelota. Esto ayuda al útero a contraerse y detener el sangrado.</li>
<li>Pon al bebé al pecho — la lactancia estimula la contracción del útero.</li>
<li>Mantén a la madre acostada con las piernas elevadas.</li>
<li>Dale líquidos si está consciente.</li>
<li><strong>Busca ayuda médica urgente</strong> — la hemorragia posparto puede ser mortal en minutos.</li>
</ol></div>

<h3>La placenta</h3>
<ul>
<li>Sale generalmente 10-30 minutos después del bebé.</li>
<li><strong>NO tires del cordón</strong> para sacarla. Espera a que salga naturalmente.</li>
<li>Guárdala para que el personal médico la revise (debe salir completa).</li>
</ul>

<h3>Lactancia en situaciones de crisis</h3>
<p>Un mito peligroso es que las madres estresadas o mal alimentadas no pueden producir leche. La evidencia científica demuestra que:</p>
<ul>
<li><strong>Incluso madres desnutridas producen leche</strong> de calidad adecuada para el bebé.</li>
<li>La lactancia exclusiva es la opción MÁS segura en crisis — no necesita agua limpia, no necesita preparación, es gratuita.</li>
<li>El estrés puede retrasar temporalmente la bajada de leche, pero la succión frecuente del bebé restaura la producción.</li>
<li>Dar fórmula o agua azucarada en condiciones sin higiene es mucho más peligroso que la leche materna.</li>
</ul>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS — WHO Safe Childbirth Checklist, OMS — Essential Newborn Care, Hesperian Foundation — "Where Women Have No Doctor", UNICEF.</div>
`
      },
      {
        slug: 'dolor-sin-medicinas',
        title: 'Manejo del Dolor sin Medicinas',
        description: 'Técnicas y remedios naturales verificados para aliviar el dolor',
        content: `
<h3>¿Por qué es importante?</h3>
<p>En Cuba, los analgésicos básicos como paracetamol e ibuprofeno frecuentemente no están disponibles. Estas técnicas y remedios naturales están respaldados por evidencia científica y pueden ayudar a manejar el dolor.</p>

<h3>Terapia de frío (crioterapia)</h3>
<p>Recomendada por la Cruz Roja y Cleveland Clinic para dolor agudo, golpes e inflamación:</p>
<ul>
<li>Envuelve hielo, una botella de agua fría o vegetales congelados en una tela.</li>
<li>Aplica sobre la zona dolorida durante <strong>15-20 minutos</strong>.</li>
<li>Descansa 20 minutos y repite si es necesario.</li>
<li><strong>NUNCA apliques hielo directo sobre la piel</strong> — causa quemaduras por frío.</li>
<li>Mejor para: golpes, torceduras, dolor muscular agudo, hinchazón, dolor de cabeza (en la nuca).</li>
</ul>

<h3>Terapia de calor</h3>
<ul>
<li>Usa paños calientes, botellas con agua tibia o bolsas de arroz/sal calentadas.</li>
<li>Aplica durante <strong>15-20 minutos</strong>.</li>
<li>Mejor para: dolor muscular crónico, cólicos menstruales, rigidez articular, dolor de espalda.</li>
<li><strong>NO uses calor en las primeras 48 horas de una lesión aguda</strong> — empeora la inflamación.</li>
</ul>

<h3>Elevación</h3>
<ul>
<li>Eleva la extremidad adolorida por encima del nivel del corazón.</li>
<li>Reduce la hinchazón al permitir que el líquido drene por gravedad.</li>
<li>Combina con frío para máximo efecto en lesiones agudas.</li>
</ul>

<h3>Remedios naturales con evidencia científica</h3>

<h4>Té de manzanilla (Chamaemelum nobile)</h4>
<p>Un meta-análisis publicado demostró que la manzanilla tiene efecto antiinflamatorio verificado:</p>
<ul>
<li>Inhibe las vías COX y LOX (los mismos mecanismos que los antiinflamatorios farmacéuticos).</li>
<li>Prepara: 1-2 cucharadas de flores secas (o 2-3 bolsitas) en una taza de agua hirviendo. Deja reposar 5-10 minutos tapado.</li>
<li>Bebe 2-3 tazas al día.</li>
<li>Útil para: dolor de estómago, cólicos, dolor menstrual, dolor de cabeza por tensión, ansiedad asociada al dolor.</li>
<li>Puede usarse tópicamente (compresas empapadas en té tibio) para dolor muscular.</li>
</ul>

<h4>Té de jengibre (Zingiber officinale)</h4>
<p>Una revisión sistemática de <strong>109 ensayos clínicos controlados</strong> confirmó sus propiedades analgésicas y antiinflamatorias:</p>
<ul>
<li>Efecto similar a los antiinflamatorios no esteroideos (NSAIDs) pero <strong>sin daño estomacal</strong>.</li>
<li>Especialmente efectivo para: dolor menstrual, dolor articular, migrañas, dolor muscular.</li>
<li>Prepara: Corta 2-3 cm de raíz fresca en rodajas, hierve en 2 tazas de agua durante 10 minutos. Agrega limón o miel al gusto.</li>
<li>Bebe 2-3 tazas al día.</li>
<li>También funciona masticando un trozo pequeño de raíz fresca para el dolor de garganta.</li>
</ul>

<div class="warning"><strong>Precaución:</strong> El jengibre puede interactuar con anticoagulantes. Si la persona toma medicamentos para la sangre, consulta antes de usar.</div>

<h3>Técnicas de respiración y distracción</h3>
<ul>
<li><strong>Respiración lenta:</strong> Inhala contando hasta 4, exhala contando hasta 6. La exhalación prolongada activa el nervio vago y reduce la percepción del dolor.</li>
<li><strong>Presión en puntos:</strong> Presiona firmemente el espacio entre el pulgar y el índice durante 2-3 minutos — evidencia de que puede reducir dolor de cabeza y dental.</li>
<li><strong>Distracción activa:</strong> Conversar, contar objetos, cantar o cualquier actividad que ocupe la mente reduce la percepción del dolor (evidenciado en neurociencia del dolor).</li>
<li><strong>Agua fría en las muñecas:</strong> Sumergir las muñecas en agua fría durante 30 segundos puede reducir la percepción general del dolor.</li>
</ul>

<h3>Cuándo el dolor es una señal de ALARMA</h3>
<div class="danger"><strong>Busca atención médica si:</strong>
<ul>
<li>Dolor de pecho que se irradia al brazo o mandíbula</li>
<li>Dolor abdominal severo y repentino</li>
<li>Dolor de cabeza súbito "el peor de tu vida"</li>
<li>Dolor que no responde a nada después de 72 horas</li>
<li>Dolor asociado con fiebre alta, vómitos o confusión</li>
</ul></div>

<div class="tip"><strong>Fuentes verificadas:</strong> Cruz Roja Internacional, Cleveland Clinic, meta-análisis publicados en Molecular Medicine Reports (manzanilla), revisión sistemática de 109 RCTs en Pain Medicine (jengibre).</div>
`
      }
    ]
  },
  {
    slug: 'salud-mental',
    title: 'Salud Mental',
    emoji: '🧠',
    description: 'Ansiedad, depresión, crisis, ejercicios',
    color: 'bg-purple-600',
    articles: [
      {
        slug: 'respiracion-4-7-8',
        title: 'Técnica de Respiración 4-7-8',
        description: 'Ejercicio para calmar ansiedad y ataques de pánico',
        content: `
<h3>¿Para qué sirve?</h3>
<p>Esta técnica activa tu sistema nervioso parasimpático — el "freno" de tu cuerpo. Funciona para:</p>
<ul>
<li>Ataques de ansiedad o pánico</li>
<li>Insomnio (especialmente útil en noches de apagón y calor)</li>
<li>Momentos de ira o frustración</li>
<li>Antes de tomar decisiones difíciles</li>
</ul>

<h3>Cómo hacerla (paso a paso)</h3>
<ol>
<li><strong>Siéntate cómodo</strong> o acuéstate. Cierra los ojos si puedes.</li>
<li><strong>Exhala completamente</strong> por la boca haciendo un sonido de "whoosh".</li>
<li><strong>INHALA</strong> por la nariz contando mentalmente <strong>1-2-3-4</strong>.</li>
<li><strong>SOSTÉN</strong> la respiración contando <strong>1-2-3-4-5-6-7</strong>.</li>
<li><strong>EXHALA</strong> lentamente por la boca contando <strong>1-2-3-4-5-6-7-8</strong>.</li>
<li>Eso es un ciclo. Repite <strong>4 ciclos</strong>.</li>
</ol>

<div class="tip"><strong>Recuerda:</strong> 4 segundos inhalar, 7 segundos sostener, 8 segundos exhalar. Lo importante es la proporción — si 4-7-8 es mucho, prueba 2-3-4 y ve aumentando.</div>

<h3>Otras técnicas rápidas</h3>

<h4>Técnica 5-4-3-2-1 (grounding/anclaje)</h4>
<p>Cuando sientes ansiedad intensa, nombra:</p>
<ul>
<li><strong>5 cosas</strong> que puedes VER</li>
<li><strong>4 cosas</strong> que puedes TOCAR</li>
<li><strong>3 cosas</strong> que puedes OÍR</li>
<li><strong>2 cosas</strong> que puedes OLER</li>
<li><strong>1 cosa</strong> que puedes SABOREAR</li>
</ul>
<p>Esto te ancla al presente y rompe el ciclo de pensamientos ansiosos.</p>

<h4>Relajación muscular progresiva</h4>
<ol>
<li>Empieza por los pies: tensa los músculos con fuerza por 5 segundos.</li>
<li>Suelta de golpe. Siente la diferencia.</li>
<li>Sube: pantorrillas, muslos, abdomen, puños, brazos, hombros, cara.</li>
<li>Tensa 5 segundos, suelta. En cada grupo muscular.</li>
</ol>

<h3>Es normal sentir esto</h3>
<p>En una crisis como la que vive Cuba, es <strong>completamente normal</strong> sentir:</p>
<ul>
<li>Ansiedad constante por el futuro</li>
<li>Tristeza profunda o ganas de llorar sin razón</li>
<li>Ira hacia la situación</li>
<li>Sensación de estar atrapado</li>
<li>Dificultad para concentrarse</li>
<li>Insomnio o dormir demasiado</li>
</ul>
<p><strong>No estás loco. Estás respondiendo normalmente a una situación anormal.</strong></p>

<div class="tip"><strong>Fuentes verificadas:</strong> Dr. Andrew Weil (técnica 4-7-8), OMS — mhGAP Intervention Guide, American Psychological Association (APA).</div>
`
      },
      {
        slug: 'alerta-suicida',
        title: 'Señales de Alerta Suicida',
        description: 'Cómo identificar y ayudar a alguien en crisis',
        content: `
<h3>Por qué importa ahora</h3>
<p>Cuba tiene una tasa de suicidio de <strong>14.11 por cada 100,000 personas</strong> — muy por encima del promedio mundial. Los suicidios adolescentes están aumentando. La crisis económica, los apagones, la separación familiar y la desesperanza son factores de riesgo directos.</p>

<h3>Señales de advertencia</h3>
<p>Una persona puede estar en riesgo si:</p>
<ul>
<li>Habla de querer morir o de ser una carga: <em>"Estarían mejor sin mí"</em></li>
<li>Habla de sentirse atrapada o sin salida</li>
<li>Busca formas de hacerse daño</li>
<li>Se aísla de familia y amigos</li>
<li>Regala posesiones importantes</li>
<li>Cambios extremos de humor (de depresión profunda a calma repentina)</li>
<li>Aumento de consumo de alcohol o drogas</li>
<li>Despedidas inusuales — como si fuera la última vez</li>
<li>Pérdida de interés en todo lo que antes disfrutaba</li>
</ul>

<h3>Cómo hablar con alguien en crisis</h3>

<h4>SÍ haz esto:</h4>
<ul>
<li><strong>Pregunta directamente:</strong> "¿Estás pensando en hacerte daño?" — preguntar NO planta la idea</li>
<li><strong>Escucha sin juzgar.</strong> No interrumpas. No minimices.</li>
<li><strong>Valida su dolor:</strong> "Puedo ver que estás sufriendo mucho"</li>
<li><strong>Quédate presente.</strong> Tu compañía importa más que tus palabras.</li>
<li><strong>Ayúdala a pensar en razones para vivir</strong> — hijos, familia, mascotas, proyectos</li>
<li><strong>No la dejes sola</strong> si el riesgo es inminente</li>
</ul>

<h4>NO hagas esto:</h4>
<ul>
<li>NO digas: "No seas tonto" o "Piensa en tu familia"</li>
<li>NO digas: "Hay gente que está peor"</li>
<li>NO prometas guardar el secreto si hay riesgo real</li>
<li>NO la dejes sola si crees que puede actuar</li>
<li>NO des sermones ni consejos no pedidos</li>
</ul>

<h3>Acciones inmediatas</h3>
<ol>
<li><strong>Retira acceso</strong> a cualquier medio que pueda usar para hacerse daño.</li>
<li><strong>Acompaña</strong> — no la dejes sola.</li>
<li><strong>Busca ayuda:</strong> Lleva a la persona al centro de salud más cercano o contacta a un médico.</li>
<li><strong>Involucra a la familia</strong> o amigos de confianza.</li>
</ol>

<h3>Si TÚ estás en crisis</h3>
<ul>
<li>Habla con alguien — cualquier persona. Un vecino, un familiar, un amigo.</li>
<li>No tomes decisiones permanentes en momentos temporales de dolor.</li>
<li>Este dolor es real, pero puede cambiar. Has sobrevivido días difíciles antes.</li>
<li>Si puedes, ve al policlínico o centro de salud más cercano.</li>
</ul>

<div class="tip"><strong>Recuerda:</strong> Pedir ayuda no es debilidad — es la decisión más valiente que puedes tomar.</div>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), American Foundation for Suicide Prevention (AFSP), International Association for Suicide Prevention (IASP).</div>
`
      },
      {
        slug: 'primeros-auxilios-psicologicos',
        title: 'Primeros Auxilios Psicológicos (PAP)',
        description: 'Protocolo oficial de la OMS para apoyo emocional en crisis',
        content: `
<h3>¿Qué son los Primeros Auxilios Psicológicos?</h3>
<p>Los PAP son el protocolo oficial de la OMS para ayudar a personas en situaciones de crisis. <strong>No necesitas ser psicólogo para aplicarlos.</strong> Cualquier persona puede aprender y usar esta técnica para ayudar a vecinos, familiares o desconocidos que están sufriendo.</p>

<div class="tip"><strong>Los PAP NO son:</strong>
<ul>
<li>No son terapia ni consejería profesional.</li>
<li>No es forzar a la gente a hablar sobre lo que pasó.</li>
<li>No es "debriefing" (hacer que la persona reviva el trauma contándolo en detalle).</li>
<li>No es dar diagnósticos ni recetas.</li>
</ul>
<p>Los PAP son <strong>apoyo humano básico</strong> — presencia, escucha y conexión.</p></div>

<h3>Los 4 pasos de los PAP</h3>

<h4>1. PREPARAR</h4>
<ul>
<li>Infórmate sobre lo que ha pasado (la crisis, los recursos disponibles, los peligros).</li>
<li>Averigua qué servicios y apoyos están disponibles en la zona.</li>
<li>Asegúrate de que TÚ estés en condiciones de ayudar — si estás en crisis tú mismo, busca apoyo primero.</li>
</ul>

<h4>2. OBSERVAR</h4>
<ul>
<li>Busca personas que necesiten ayuda: los que están solos, desorientados, heridos, llorando, en silencio absoluto.</li>
<li>Identifica quiénes necesitan ayuda urgente (heridos, en peligro inmediato) vs. apoyo emocional.</li>
<li>Observa sin imponer tu presencia — no todas las personas quieren ayuda en ese momento.</li>
</ul>

<h4>3. ESCUCHAR</h4>
<ul>
<li><strong>Preséntate con calma:</strong> "Hola, me llamo [nombre]. Estoy aquí para ayudar si necesitas algo."</li>
<li><strong>Pregunta qué necesita la persona.</strong> No asumas — a veces necesitan agua, a veces hablar, a veces silencio.</li>
<li><strong>Escucha activamente:</strong> Mira a los ojos, asiente, no interrumpas.</li>
<li><strong>Valida sus emociones:</strong> "Es normal sentir esto después de lo que ha pasado." / "Tienes razón en estar asustado."</li>
<li><strong>No juzgues, no des sermones, no compares</strong> ("Hay gente que está peor" es lo PEOR que puedes decir).</li>
<li><strong>Tolera el silencio.</strong> A veces tu presencia es suficiente.</li>
</ul>

<h4>4. CONECTAR</h4>
<ul>
<li>Ayuda a la persona a identificar sus necesidades más urgentes (agua, comida, seguridad, contactar familia).</li>
<li>Conecta con recursos disponibles: vecinos, CDR, policlínicos, iglesias, grupos comunitarios.</li>
<li>Ayuda a resolver problemas prácticos inmediatos.</li>
<li>Si la persona está sola, conecta con otras personas o familias.</li>
</ul>

<h3>Los 5 principios fundamentales</h3>
<ol>
<li><strong>Seguridad:</strong> Asegura que la persona esté en un lugar seguro.</li>
<li><strong>Calma:</strong> Ayuda a reducir la agitación. Habla despacio, con voz firme y suave. Ofrece agua.</li>
<li><strong>Autoeficacia:</strong> Ayuda a la persona a sentir que PUEDE hacer algo. Incluso decisiones pequeñas ("¿quieres agua o café?") devuelven sensación de control.</li>
<li><strong>Conexión social:</strong> Las personas se recuperan mejor cuando están conectadas con otros. Fomenta contacto con familia, amigos, comunidad.</li>
<li><strong>Esperanza:</strong> Sin minimizar el sufrimiento, recuerda que las crisis son temporales y que las personas tienen capacidad de recuperarse.</li>
</ol>

<h3>Apoyo grupal en la comunidad</h3>
<p>En una crisis colectiva como la que vive Cuba, el apoyo comunitario es más poderoso que el individual:</p>
<ul>
<li><strong>Actividades comunitarias:</strong> Cocinar juntos, organizar la distribución de agua, arreglar algo entre vecinos — las actividades productivas compartidas son terapéuticas.</li>
<li><strong>Experiencias compartidas:</strong> Crear espacios donde la gente pueda hablar de lo que siente sin presión. Un portal, un banco en el parque, una reunión de vecinos.</li>
<li><strong>Actividades para niños:</strong> Juegos, dibujo, cuentos — los niños procesan el trauma a través del juego.</li>
<li><strong>Rutinas:</strong> Mantener horarios, comidas regulares y actividades predecibles reduce la ansiedad, especialmente en niños.</li>
</ul>

<div class="warning"><strong>Cuándo buscar ayuda profesional:</strong> Si la persona habla de suicidio, tiene delirios o alucinaciones, no come ni bebe por días, no puede cuidar de sí misma o de sus hijos, o tiene un comportamiento peligroso — necesita atención médica, no solo PAP.</div>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS — Psychological First Aid: Guide for Field Workers, OMS — mhGAP Humanitarian Intervention Guide, Inter-Agency Standing Committee (IASC) Guidelines on Mental Health and Psychosocial Support.</div>
`
      }
    ]
  },
  {
    slug: 'agua-segura',
    title: 'Agua Segura',
    emoji: '💧',
    description: 'Purificación, filtros caseros, almacenamiento',
    color: 'bg-cyan-600',
    articles: [
      {
        slug: 'metodo-sodis',
        title: 'Método SODIS - Desinfección Solar',
        description: 'Purifica agua usando solo botellas PET y sol',
        content: `
<h3>¿Qué es SODIS?</h3>
<p>SODIS (Solar Water Disinfection) es un método <strong>gratuito y efectivo</strong> para desinfectar agua usando solo botellas de plástico y luz solar. Elimina el 99.9% de bacterias y virus. Recomendado por la OMS.</p>

<h3>Lo que necesitas</h3>
<ul>
<li>Botellas de plástico <strong>PET transparentes</strong> (las de refresco comunes — máximo 2 litros)</li>
<li>Sol directo</li>
<li>Una superficie reflectante ayuda (techo de zinc, aluminio, superficie clara)</li>
</ul>

<h3>Paso a paso</h3>
<ol>
<li><strong>Consigue botellas PET limpias</strong> — deben ser transparentes, sin color (no verdes ni azules), sin rayones profundos.</li>
<li><strong>Llena con agua</strong> relativamente clara. Si el agua está turbia, fíltrala primero con tela.</li>
<li><strong>Agita la botella</strong> con la tapa puesta durante 20 segundos antes de llenarla completamente — esto oxigena el agua y mejora la desinfección.</li>
<li>Llena hasta arriba y tapa bien.</li>
<li><strong>Coloca horizontal</strong> al sol directo (NO vertical — necesita máxima exposición solar).</li>
<li>Mejor sobre una superficie metálica o reflectante.</li>
</ol>

<h3>Tiempo necesario</h3>
<ul>
<li><strong>Sol directo, cielo despejado:</strong> 6 horas mínimo</li>
<li><strong>Parcialmente nublado:</strong> 2 días completos</li>
<li><strong>Muy nublado o lluvia:</strong> NO funciona — usa otro método</li>
</ul>

<div class="tip"><strong>Truco:</strong> En Cuba hay sol fuerte casi todo el año. Coloca las botellas por la mañana temprano (7-8 AM) y recógelas al final de la tarde. Prepara varias botellas a la vez para siempre tener agua lista.</div>

<h3>Limitaciones importantes</h3>
<ul>
<li>NO elimina químicos, metales pesados ni pesticidas</li>
<li>NO funciona con botellas de vidrio (bloquean los UV)</li>
<li>El agua debe ser relativamente clara — si es turbia, filtra primero</li>
<li>Las botellas pierden efectividad después de muchos usos — reemplaza cuando estén muy rayadas</li>
</ul>

<div class="warning"><strong>SODIS NO reemplaza el hervido</strong> si tienes la posibilidad de hervir. El hervido (1 minuto de ebullición) es el método más seguro. SODIS es para cuando no hay combustible ni electricidad para hervir.</div>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), EAWAG/SANDEC (Swiss Federal Institute), SODIS Foundation.</div>
`
      },
      {
        slug: 'filtro-casero',
        title: 'Filtro Casero de Arena y Carbón',
        description: 'Cómo construir un filtro con materiales disponibles',
        content: `
<h3>¿Qué filtra?</h3>
<p>Un filtro casero de arena y carbón remueve sedimentos, turbiedad, algunos parásitos y mejora el sabor. <strong>No elimina todas las bacterias</strong> — combínalo con SODIS o hervido para agua segura.</p>

<h3>Materiales</h3>
<ul>
<li>Un recipiente grande (bidón, botella grande de 5L cortada, balde con hueco abajo)</li>
<li>Piedras grandes (2-3 cm)</li>
<li>Piedras pequeñas/gravilla (0.5-1 cm)</li>
<li>Arena gruesa (lavada)</li>
<li>Arena fina (lavada)</li>
<li>Carbón vegetal (machacado — del que se usa para cocinar, NO briquetas con químicos)</li>
<li>Tela o algodón para el fondo</li>
</ul>

<h3>Construcción (de abajo hacia arriba)</h3>
<ol>
<li><strong>Haz un hueco de salida</strong> en el fondo del recipiente. Coloca un tubo o manguera pequeña si es posible.</li>
<li><strong>Capa 1 (fondo):</strong> Tela o algodón sobre el hueco para evitar que salga arena.</li>
<li><strong>Capa 2:</strong> Piedras grandes — unos 5 cm de espesor.</li>
<li><strong>Capa 3:</strong> Piedras pequeñas/gravilla — unos 5 cm.</li>
<li><strong>Capa 4:</strong> Arena gruesa — unos 5 cm.</li>
<li><strong>Capa 5:</strong> Carbón vegetal machacado — unos 5 cm.</li>
<li><strong>Capa 6:</strong> Arena fina — unos 8-10 cm (la capa más gruesa).</li>
<li><strong>Capa 7 (arriba):</strong> Piedras pequeñas o gravilla — 3 cm (para evitar que el agua desplace la arena).</li>
</ol>

<h3>Cómo usarlo</h3>
<ul>
<li>Vierte el agua sucia por arriba, lentamente.</li>
<li>El agua filtrada sale por abajo — recógela en un recipiente limpio.</li>
<li><strong>Descarta las primeras 3-4 cargas</strong> — sirven para lavar el filtro.</li>
<li>Después de filtrar, <strong>desinfecta el agua</strong> con SODIS, hervido, o 2 gotas de cloro por litro.</li>
</ul>

<h3>Mantenimiento</h3>
<ul>
<li>Cuando el flujo se vuelva muy lento, retira y lava la capa superior de arena.</li>
<li>Reemplaza el carbón cada 2-3 meses.</li>
<li>Lava todo el filtro cada 1-2 meses.</li>
</ul>

<div class="tip"><strong>Dónde conseguir carbón vegetal:</strong> Si haces fuego con leña para cocinar, los pedazos negros que quedan (no ceniza gris, sino carbón negro) sirven perfectamente. Machácalos en pedazos pequeños.</div>

<div class="warning"><strong>Recuerda:</strong> El filtro mejora la calidad del agua pero NO la hace 100% segura por sí solo. Siempre combina con un método de desinfección (hervido, SODIS, o cloro).</div>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), CAWST (Centre for Affordable Water and Sanitation Technology), Hesperian Foundation.</div>
`
      },
      {
        slug: 'cloro',
        title: 'Desinfección con Cloro',
        description: 'Cómo usar cloro doméstico para purificar agua',
        content: `
<h3>¿Cuándo usar cloro?</h3>
<p>La desinfección con cloro doméstico es uno de los métodos más accesibles y efectivos para hacer el agua segura para beber. Es el método recomendado por la EPA y el CDC cuando no se puede hervir el agua.</p>

<h3>Qué cloro usar</h3>
<ul>
<li>Usa <strong>hipoclorito de sodio doméstico sin perfume</strong> (lejía, cloro de lavar) con concentración de <strong>5-9%</strong>.</li>
<li><strong>NO uses</strong> cloro con perfume, con limpiadores agregados, ni cloro para piscinas (concentración diferente).</li>
<li>Revisa la etiqueta — debe decir "hipoclorito de sodio" y el porcentaje.</li>
</ul>

<h3>Dosificación</h3>

<h4>Agua clara (sin turbidez visible):</h4>
<div class="tip"><strong>2 gotas de cloro por cada litro de agua.</strong> Si no tienes gotero, una cucharadita tiene aproximadamente 100 gotas — entonces 1 cucharadita alcanza para 50 litros.</div>

<h4>Agua turbia o con color:</h4>
<div class="tip"><strong>4 gotas de cloro por cada litro de agua.</strong> Si el agua está muy turbia, fíltrala primero con tela o un filtro casero antes de agregar el cloro.</div>

<h3>Procedimiento paso a paso</h3>
<ol>
<li><strong>Si el agua está turbia</strong>, fíltrala primero con tela limpia o filtro casero para remover sedimentos.</li>
<li>Agrega la cantidad correcta de gotas según la claridad del agua.</li>
<li><strong>Mezcla bien</strong> agitando o revolviendo.</li>
<li><strong>Espera 30 minutos</strong> antes de beber.</li>
<li>Después de 30 minutos, el agua debe tener un <strong>ligero olor a cloro</strong>. Si no huele a nada, repite la dosis y espera otros 15 minutos.</li>
<li>Si el sabor a cloro es muy fuerte, vierte el agua de un recipiente a otro varias veces o déjala reposar destapada unos minutos.</li>
</ol>

<h3>Tabla rápida de dosificación</h3>
<ul>
<li><strong>1 litro:</strong> 2 gotas (clara) / 4 gotas (turbia)</li>
<li><strong>5 litros:</strong> 10 gotas / 20 gotas</li>
<li><strong>20 litros (cubo):</strong> 40 gotas (≈ ½ cucharadita) / 80 gotas (≈ 1 cucharadita)</li>
<li><strong>200 litros (tanque):</strong> 4 cucharaditas / 8 cucharaditas</li>
</ul>

<h3>Limitaciones del cloro</h3>
<div class="warning"><strong>El cloro NO es 100% efectivo contra todos los patógenos:</strong>
<ul>
<li><strong>Cryptosporidium:</strong> El cloro es <strong>menos efectivo</strong> contra este parásito. Si sospechas contaminación con Cryptosporidium (común en agua con contacto con heces de animales), hierve el agua en lugar de clorarla.</li>
<li>El cloro no remueve químicos, metales pesados ni pesticidas.</li>
<li>La efectividad disminuye con agua muy fría o muy turbia.</li>
</ul></div>

<h3>Almacenamiento del cloro</h3>
<ul>
<li>Guarda la botella de cloro en lugar <strong>fresco, oscuro y fuera del alcance de niños</strong>.</li>
<li>El cloro pierde potencia con el tiempo — después de 6 meses, la concentración baja significativamente.</li>
<li>Mantén la botella bien cerrada.</li>
</ul>

<div class="danger"><strong>PRECAUCIÓN:</strong> El cloro concentrado es tóxico. Nunca lo bebas directamente. Evita contacto con los ojos. Si un niño ingiere cloro concentrado, dale agua o leche inmediatamente y busca atención médica.</div>

<div class="tip"><strong>Fuentes verificadas:</strong> EPA (Environmental Protection Agency), CDC (Centers for Disease Control and Prevention), OMS (Organización Mundial de la Salud).</div>
`
      }
    ]
  },
  {
    slug: 'alimentacion',
    title: 'Alimentación',
    emoji: '🌱',
    description: 'Agricultura urbana, conservación, nutrición',
    color: 'bg-green-600',
    articles: [
      {
        slug: 'plantas-rapidas',
        title: 'Plantas que Crecen Rápido en Cuba',
        description: 'Qué cultivar en casa con poco espacio',
        content: `
<h3>¿Por qué cultivar en casa?</h3>
<p>Con el 80% de los alimentos importados y escasez severa, cultivar en casa no es un hobby — es <strong>supervivencia</strong>. Cuba tiene tradición de organoponicos (agricultura urbana) y un clima ideal para cultivar todo el año.</p>

<h3>Cultivos más rápidos (días hasta cosecha)</h3>

<h4>Rábano — 25-30 días</h4>
<ul>
<li>El más rápido de todos. Siembra directo en tierra o maceta.</li>
<li>Profundidad de siembra: 1 cm. Espacio entre plantas: 5 cm.</li>
<li>Riego: diario, ligero. Sol: 4-6 horas.</li>
<li>Rico en vitamina C y fibra.</li>
</ul>

<h4>Lechuga — 30-45 días</h4>
<ul>
<li>Crece en macetas, baldes, cajas de madera.</li>
<li>Prefiere semi-sombra en el calor cubano — sol de mañana, sombra de tarde.</li>
<li>Puedes cortar hojas externas y sigue produciendo.</li>
<li>Siembra cada 2 semanas para tener cosecha continua.</li>
</ul>

<h4>Cebollín / Cebollino — 30 días</h4>
<ul>
<li>Corta y vuelve a crecer — cosecha indefinida de una sola planta.</li>
<li>Planta la base de una cebolla con raíces en tierra — crece sola.</li>
<li>Muy poco mantenimiento.</li>
</ul>

<h4>Cilantro / Culantro — 30-40 días</h4>
<ul>
<li>Esencial en la cocina cubana.</li>
<li>Siembra cada 3 semanas para cosecha continua.</li>
<li>Prefiere semi-sombra en clima caliente.</li>
</ul>

<h4>Habichuelas / Frijoles — 50-60 días</h4>
<ul>
<li>Fuente de proteína vegetal — crucial cuando no hay carne.</li>
<li>Necesitan un soporte para trepar (palo, malla, cuerda).</li>
<li>Sol completo. Riego regular.</li>
</ul>

<h4>Boniato / Camote — 90-120 días</h4>
<ul>
<li>Alto en calorías y vitaminas — alimento de supervivencia por excelencia.</li>
<li>Planta un trozo con brotes en tierra. Crece en cualquier suelo.</li>
<li>Las hojas también son comestibles y nutritivas — puedes comerlas mientras esperas el tubérculo.</li>
</ul>

<h3>Cómo empezar sin nada</h3>
<ol>
<li><strong>Recipientes:</strong> Baldes rotos, latas grandes, cajas de madera, neumáticos viejos, sacos de arroz.</li>
<li><strong>Tierra:</strong> Mezcla tierra del patio con compost casero (restos de comida descompuestos).</li>
<li><strong>Semillas:</strong> Guarda semillas de lo que comas. Los frijoles secos de la cocina se pueden sembrar directamente.</li>
<li><strong>Agua:</strong> Reutiliza agua de lavar arroz o verduras para regar — tiene nutrientes.</li>
</ol>

<div class="tip"><strong>Compost fácil:</strong> En un rincón sombreado, acumula restos de comida (cáscaras, restos de vegetales, café usado) mezclados con hojas secas. Revuelve cada semana. En 2-3 meses tendrás tierra rica. NO agregues carne, grasa ni lácteos.</div>

<h3>Conservar alimentos sin refrigeración</h3>
<ul>
<li><strong>Secado al sol:</strong> Corta en rodajas finas y seca al sol sobre malla. Funciona para frutas, hierbas, ajíes.</li>
<li><strong>Salado:</strong> Cubre carne o pescado con sal gruesa. El método más antiguo.</li>
<li><strong>Vinagre/limón:</strong> Los encurtidos (vinagre + sal + vegetales) duran meses.</li>
<li><strong>Olla de barro:</strong> Entierra un recipiente de barro — la temperatura bajo tierra es más fresca. Ideal para tubérculos.</li>
</ul>

<div class="tip"><strong>Fuentes verificadas:</strong> FAO (Organización de las Naciones Unidas para la Alimentación), Hesperian Foundation, INIFAT (Instituto de Investigaciones Fundamentales en Agricultura Tropical, Cuba).</div>
`
      },
      {
        slug: 'nutricion-emergencia',
        title: 'Nutrición en Emergencia',
        description: 'Prioridades nutricionales con recursos limitados',
        content: `
<h3>Prioridades nutricionales en crisis</h3>
<p>Según la OMS, UNICEF y el Programa Mundial de Alimentos (WFP), las prioridades nutricionales en una emergencia son, en este orden:</p>
<ol>
<li><strong>Calorías suficientes</strong> — evitar hambruna</li>
<li><strong>Proteína</strong> — especialmente para niños y embarazadas</li>
<li><strong>Micronutrientes clave</strong> — las deficiencias pueden matar en semanas</li>
</ol>

<h3>Deficiencias nutricionales comunes en emergencias</h3>

<h4>Escorbuto (deficiencia de vitamina C)</h4>
<ul>
<li><strong>Síntomas:</strong> Encías sangrantes, debilidad extrema, heridas que no sanan, manchas moradas en la piel.</li>
<li>Puede aparecer después de solo 1-3 meses sin vitamina C.</li>
<li><strong>Solución cubana:</strong> La <strong>guayaba</strong> tiene más vitamina C que cualquier cítrico — una sola guayaba tiene 4 veces más vitamina C que una naranja. Crece silvestre en toda Cuba.</li>
</ul>

<h4>Pelagra (deficiencia de niacina/vitamina B3)</h4>
<ul>
<li><strong>Síntomas:</strong> "Las 3 D" — Dermatitis (erupción en piel expuesta al sol), Diarrea, Demencia (confusión).</li>
<li>Común cuando la dieta se basa solo en maíz sin procesamiento adecuado.</li>
<li><strong>Prevención:</strong> Frijoles, maní, vísceras de animal, huevos.</li>
</ul>

<h4>Beriberi (deficiencia de tiamina/vitamina B1)</h4>
<ul>
<li><strong>Síntomas:</strong> Debilidad en piernas, hormigueo, dificultad para caminar, hinchazón, problemas cardíacos.</li>
<li>Común cuando la dieta se basa solo en arroz blanco refinado.</li>
<li><strong>Prevención:</strong> Arroz integral (si disponible), frijoles, maní.</li>
</ul>

<h4>Deficiencia de hierro (anemia)</h4>
<ul>
<li><strong>Síntomas:</strong> Cansancio extremo, palidez, mareos, falta de aire.</li>
<li>Especialmente peligrosa en embarazadas y niños.</li>
<li><strong>Solución cubana:</strong> <strong>Verdolaga (purslane)</strong> — crece silvestre en toda Cuba, considerada "maleza". Es rica en hierro, omega-3 y vitaminas A y C. Cómela en ensalada o cocida.</li>
</ul>

<h3>Plantas silvestres nutritivas de Cuba</h3>

<h4>Guayaba (Psidium guajava)</h4>
<ul>
<li>Crece silvestre en toda la isla.</li>
<li><strong>Más vitamina C que los cítricos</strong> — una guayaba mediana tiene ~230mg de vitamina C (la naranja tiene ~70mg).</li>
<li>También rica en fibra, vitamina A y potasio.</li>
<li>Las hojas en té ayudan con la diarrea (evidencia científica publicada).</li>
</ul>

<h4>Verdolaga (Portulaca oleracea)</h4>
<ul>
<li>Crece como "maleza" en patios, aceras y terrenos baldíos.</li>
<li><strong>La fuente vegetal más rica en ácidos grasos omega-3.</strong></li>
<li>Rica en hierro, calcio, magnesio, vitaminas A y C.</li>
<li>Cómela cruda en ensalada, cocida como espinaca, o en sopas.</li>
</ul>

<h3>Maximiza la nutrición con lo que tengas</h3>

<h4>Combina granos + legumbres = proteína completa</h4>
<p>Ningún grano ni legumbre sola tiene todos los aminoácidos esenciales. Pero juntos sí:</p>
<ul>
<li><strong>Arroz + frijoles</strong> = proteína completa (el plato nacional cubano es nutricionalmente perfecto).</li>
<li><strong>Maíz + frijoles</strong> = proteína completa.</li>
<li>No necesitan comerse en la misma comida — en el mismo día es suficiente.</li>
</ul>

<h4>No descartes el agua de cocción</h4>
<ul>
<li>El agua donde hierves vegetales, arroz o frijoles contiene vitaminas y minerales disueltos.</li>
<li><strong>Úsala para sopas, caldos o para cocinar otros alimentos</strong> en lugar de desecharla.</li>
</ul>

<h4>Germinar semillas</h4>
<ul>
<li>Remojar frijoles, lentejas o semillas durante 8-12 horas y dejar germinar <strong>aumenta significativamente</strong> la biodisponibilidad de nutrientes.</li>
<li>Los brotes tienen más vitaminas C, B y hierro que las semillas sin germinar.</li>
<li>Proceso: remoja → escurre → enjuaga 2 veces al día → en 2-5 días tienes brotes comestibles.</li>
</ul>

<h3>Lactancia materna: el recurso más valioso</h3>
<div class="warning"><strong>La lactancia exclusiva durante los primeros 6 meses:</strong>
<ul>
<li>Es GRATIS — no requiere agua limpia, leña ni electricidad.</li>
<li>Es la fuente más nutritiva y segura para el bebé.</li>
<li>Protege contra diarrea e infecciones respiratorias (las dos principales causas de muerte infantil).</li>
<li>Incluso madres desnutridas producen leche de calidad adecuada.</li>
<li>En crisis, la fórmula preparada con agua contaminada es mucho más peligrosa que la leche materna.</li>
</ul></div>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS (Organización Mundial de la Salud), UNICEF, WFP (World Food Programme), Hesperian Foundation, USDA National Nutrient Database.</div>
`
      }
    ]
  },
  {
    slug: 'energia-solar',
    title: 'Energía Solar',
    emoji: '☀️',
    description: 'Instalación, mantenimiento, carga de dispositivos',
    color: 'bg-orange-500',
    articles: [
      {
        slug: 'instalacion-basica',
        title: 'Instalación Básica de Panel Solar',
        description: 'Componentes, conexión y seguridad',
        content: `
<h3>¿Qué puedes alimentar con un sistema básico?</h3>
<p>Un panel de 100W con batería puede mantener:</p>
<ul>
<li>Carga de 3-4 teléfonos celulares diarios</li>
<li>2-3 luces LED (5-10W cada una) por 6-8 horas</li>
<li>Un ventilador pequeño USB por varias horas</li>
<li>Una radio pequeña</li>
</ul>

<h3>Componentes necesarios</h3>
<ol>
<li><strong>Panel solar</strong> (100W mínimo recomendado para uso básico)</li>
<li><strong>Controlador de carga</strong> (protege la batería de sobrecarga). PWM es más barato, MPPT es más eficiente.</li>
<li><strong>Batería</strong> (12V, al menos 50Ah). Las de litio son mejores pero más caras. Las de carro sirven temporalmente.</li>
<li><strong>Inversor</strong> (convierte 12V DC a 110V AC) — solo si necesitas enchufar aparatos normales. Para USB y LED, no es necesario.</li>
<li><strong>Cables</strong> adecuados al amperaje.</li>
</ol>

<h3>Conexión paso a paso</h3>

<div class="danger"><strong>SEGURIDAD PRIMERO:</strong>
<ul>
<li>Nunca conectes cables con el panel al sol — cúbrelo primero con una tela</li>
<li>Nunca cruces el positivo (+) con el negativo (-) directamente — causa cortocircuito</li>
<li>Los cables rojo = positivo (+), negro = negativo (-)</li>
</ul></div>

<ol>
<li><strong>Conecta la batería al controlador PRIMERO:</strong>
<ul>
<li>Cable rojo (+) de la batería al terminal "Battery +" del controlador</li>
<li>Cable negro (-) de la batería al terminal "Battery -" del controlador</li>
<li>El controlador debe encenderse</li>
</ul></li>
<li><strong>Conecta el panel al controlador:</strong>
<ul>
<li>Cable rojo (+) del panel al terminal "Solar/PV +" del controlador</li>
<li>Cable negro (-) del panel al terminal "Solar/PV -" del controlador</li>
</ul></li>
<li><strong>Conecta los dispositivos:</strong>
<ul>
<li>Los puertos "Load" del controlador son para conectar luces LED y cargadores USB</li>
<li>Si usas inversor, conéctalo directamente a la batería (no al controlador)</li>
</ul></li>
</ol>

<h3>Ubicación del panel</h3>
<ul>
<li>Orientado hacia el <strong>sur</strong> (en Cuba, hemisferio norte)</li>
<li>Inclinación de <strong>20-25 grados</strong> (latitud de Cuba ≈ 22°)</li>
<li><strong>Sin sombra</strong> — incluso una sombra parcial reduce drasticamente la producción</li>
<li>Fíjalo bien contra el viento — especialmente en temporada de huracanes</li>
</ul>

<h3>Mantenimiento</h3>
<ul>
<li><strong>Limpia el panel</strong> con agua y un trapo suave una vez por semana</li>
<li>Revisa las conexiones mensualmente — busca corrosión o cables sueltos</li>
<li>No descargues la batería más del 50% (baterías de plomo) o 20% (litio)</li>
<li>Mantén la batería en un lugar ventilado y seco — <strong>nunca en espacio cerrado</strong> (las de plomo liberan gases)</li>
</ul>

<div class="tip"><strong>Alternativa más simple:</strong> Un "power bank solar" de 20,000-30,000 mAh con panel integrado puede cargar un teléfono 3-5 veces. No requiere instalación — solo ponlo al sol. Es la opción más accesible para empezar.</div>

<h3>Costo aproximado de un kit básico</h3>
<ul>
<li>Panel 100W: $40-80 USD</li>
<li>Controlador PWM 10A: $10-15 USD</li>
<li>Batería 12V 50Ah (plomo): $50-80 USD</li>
<li>Cables y conectores: $10-20 USD</li>
<li><strong>Total: $110-195 USD</strong></li>
</ul>
<p>Cuba subsidia el 50% de instalaciones solares residenciales y exime de aranceles los equipos solares.</p>

<div class="tip"><strong>Fuentes verificadas:</strong> Solar Energy International (SEI), ONURE (Oficina Nacional para el Uso Racional de la Energía, Cuba), National Renewable Energy Laboratory (NREL).</div>
`
      }
    ]
  },
  {
    slug: 'piel-clima',
    title: 'Piel y Clima',
    emoji: '🌡️',
    description: 'Hongos, sarna, sarpullido, picaduras',
    color: 'bg-amber-600',
    articles: [
      {
        slug: 'hongos',
        title: 'Infecciones por Hongos',
        description: 'Prevención y tratamiento de infecciones fúngicas en clima tropical',
        content: `
<h3>¿Por qué son tan comunes en Cuba?</h3>
<p>El clima tropical de Cuba — calor intenso y humedad alta — crea las condiciones perfectas para las infecciones por hongos. Con apagones que impiden el uso de ventiladores y aire acondicionado, la sudoración constante empeora el problema. Las infecciones fúngicas más comunes son:</p>
<ul>
<li><strong>Tiña (ringworm):</strong> Manchas rojas circulares con borde elevado en cualquier parte del cuerpo.</li>
<li><strong>Pie de atleta:</strong> Picazón, descamación y grietas entre los dedos de los pies.</li>
<li><strong>Candidiasis:</strong> Erupción roja en pliegues de la piel (ingles, axilas, debajo de los senos).</li>
<li><strong>Pitiriasis versicolor:</strong> Manchas claras u oscuras en el pecho, espalda y hombros.</li>
</ul>

<h3>Prevención — la clave es mantener la piel SECA</h3>
<ul>
<li><strong>Seca bien los pliegues de la piel</strong> después del baño: entre los dedos de los pies, ingles, axilas, debajo de los senos.</li>
<li>Usa <strong>ropa interior y ropa de algodón</strong> — permite que la piel respire. Evita telas sintéticas.</li>
<li><strong>Cambia la ropa interior diariamente</strong> como mínimo, y más frecuentemente si sudas mucho.</li>
<li>No compartas toallas, ropa ni zapatos.</li>
<li>Si es posible, alterna zapatos para que se sequen entre usos.</li>
<li>Usa chancletas en baños compartidos.</li>
</ul>

<h3>Tratamientos con recursos limitados</h3>

<h4>Vinagre de manzana diluido</h4>
<p>El vinagre de manzana tiene propiedades antifúngicas verificadas por estudios publicados (Thomson Medical):</p>
<ul>
<li>Mezcla <strong>1 parte de vinagre de manzana con 3 partes de agua</strong>.</li>
<li>Aplica con un algodón o trapo limpio sobre la zona afectada.</li>
<li>Deja actuar 15-20 minutos, luego seca bien.</li>
<li>Repite 2-3 veces al día.</li>
<li><strong>No apliques vinagre sin diluir</strong> — puede irritar la piel dañada.</li>
</ul>

<h4>Agua con sal</h4>
<ul>
<li>Remoja la zona afectada en agua tibia con sal (2-3 cucharadas por litro) durante 15-20 minutos.</li>
<li>El ambiente salino inhibe el crecimiento de hongos.</li>
<li>Especialmente útil para pie de atleta.</li>
<li>Seca completamente después del remojo.</li>
</ul>

<h4>Mantener la zona seca y aireada</h4>
<ul>
<li>Expón la zona afectada al aire libre tanto como sea posible.</li>
<li>Si la infección está en los pies, usa sandalias abiertas.</li>
<li>Si está en pliegues, usa ropa holgada que permita ventilación.</li>
<li>El sol directo (moderado, 15-20 minutos) ayuda a secar y tiene efecto antimicrobiano.</li>
</ul>

<h3>Cuándo buscar atención médica</h3>
<div class="warning"><strong>Consulta un médico si:</strong>
<ul>
<li>La infección se extiende rápidamente o no mejora en 2 semanas.</li>
<li>Hay pus, dolor intenso o fiebre — puede haber una infección bacteriana secundaria.</li>
<li>La persona tiene diabetes — las infecciones fúngicas pueden ser más graves.</li>
<li>La infección afecta las uñas (requiere tratamiento prolongado).</li>
<li>Afecta el cuero cabelludo (especialmente en niños — puede causar pérdida de cabello).</li>
</ul></div>

<div class="tip"><strong>Fuentes verificadas:</strong> Thomson Medical — estudios sobre actividad antifúngica del vinagre, DermNet NZ, American Academy of Dermatology, OMS.</div>
`
      },
      {
        slug: 'sarna',
        title: 'Sarna (Escabiosis)',
        description: 'Identificación, tratamiento y control en la comunidad',
        content: `
<h3>¿Qué es la sarna?</h3>
<p>La sarna es una infección de la piel causada por un ácaro microscópico (<em>Sarcoptes scabiei</em>) que excava túneles bajo la piel. La OMS la clasificó como <strong>Enfermedad Tropical Desatendida en 2017</strong> y afecta a aproximadamente 200 millones de personas en el mundo.</p>

<h3>Cómo identificarla</h3>
<ul>
<li><strong>Picazón intensa</strong>, especialmente de noche (el síntoma principal).</li>
<li>Pequeñas líneas en la piel (los túneles del ácaro) — a veces difíciles de ver.</li>
<li>Erupción con pequeñas ampollas o granos rojos.</li>
<li><strong>Zonas más comunes:</strong> entre los dedos de las manos, muñecas, codos, axilas, cintura, genitales, glúteos.</li>
<li>En bebés y niños pequeños puede afectar palmas, plantas de los pies, cara y cuero cabelludo.</li>
</ul>

<div class="warning"><strong>La picazón puede tardar 2-6 semanas en aparecer</strong> después de la infección inicial. Durante ese tiempo, la persona ya puede contagiar a otros.</div>

<h3>Cómo se contagia</h3>
<ul>
<li><strong>Contacto prolongado piel con piel</strong> (compartir cama, abrazos prolongados, contacto sexual).</li>
<li>Compartir ropa, toallas o sábanas con una persona infectada.</li>
<li><strong>NO se contagia</strong> por un apretón de manos breve ni por sentarse en el mismo asiento.</li>
</ul>

<h3>Tratamiento en entornos con recursos limitados</h3>

<h4>Preparaciones de azufre (8-10%)</h4>
<p>El tratamiento más accesible y tradicional para la sarna en entornos sin acceso a permetrina:</p>
<ol>
<li>Mezcla azufre en polvo (disponible en farmacias y ferreterías) con vaselina o aceite de coco en proporción 8-10% (aproximadamente 1 cucharada de azufre por cada 10 cucharadas de base).</li>
<li><strong>Aplica en TODO el cuerpo</strong> del cuello para abajo (en niños y ancianos, incluye cara y cuero cabelludo, evitando ojos y boca).</li>
<li>Deja actuar durante la noche.</li>
<li>Lava por la mañana.</li>
<li><strong>Repite durante 3 noches consecutivas.</strong></li>
</ol>

<div class="danger"><strong>REGLA CRÍTICA: Trata a TODOS los miembros del hogar AL MISMO TIEMPO.</strong> Si solo tratas a la persona con síntomas, las personas sin síntomas (pero infectadas) la reinfectarán. Todos deben tratarse la MISMA noche, incluso si no tienen picazón.</div>

<h3>Descontaminación del hogar</h3>
<ul>
<li><strong>Lava TODA la ropa de cama, toallas y ropa</strong> con agua lo más caliente posible. Seca al sol directo.</li>
<li>Lo que no puedas lavar, <strong>séllalo en una bolsa plástica cerrada durante 1 semana</strong>. Los ácaros no sobreviven más de 3-4 días sin contacto con piel humana, pero 7 días es más seguro.</li>
<li>Colchones: si no puedes lavarlos, exponlos al sol fuerte por varias horas y cúbrelos con una sábana limpia.</li>
<li>Barre y limpia los pisos y muebles.</li>
</ul>

<h3>Después del tratamiento</h3>
<ul>
<li>La <strong>picazón puede continuar 2-4 semanas</strong> después del tratamiento exitoso — esto es normal (reacción alérgica residual).</li>
<li>Si la picazón continúa después de 4 semanas, o aparecen nuevos túneles, puede ser necesario repetir el tratamiento.</li>
<li>Baños con avena o compresas frías pueden aliviar la picazón residual.</li>
</ul>

<h3>Prevención</h3>
<ul>
<li>No compartas ropa de cama, toallas ni ropa con personas infectadas.</li>
<li>Trata rápidamente cualquier caso para evitar brotes comunitarios.</li>
<li>En instituciones (hogares de ancianos, centros infantiles), realiza inspecciones regulares y trata todos los contactos.</li>
</ul>

<div class="tip"><strong>Fuentes verificadas:</strong> OMS — Scabies Fact Sheet, OMS — Clasificación como Enfermedad Tropical Desatendida (2017), CDC, Hesperian Foundation.</div>
`
      },
      {
        slug: 'sarpullido-calor',
        title: 'Sarpullido por Calor',
        description: 'Tratamiento del sarpullido causado por sudoración excesiva',
        content: `
<h3>¿Qué es el sarpullido por calor?</h3>
<p>El sarpullido por calor (miliaria) ocurre cuando los <strong>poros se bloquean y atrapan el sudor</strong> debajo de la piel. Es extremadamente común en Cuba, especialmente durante apagones prolongados sin ventilación. Afecta más a bebés y personas que trabajan al aire libre.</p>

<h3>Tipos de sarpullido por calor</h3>

<h4>Miliaria cristalina (leve)</h4>
<ul>
<li>Pequeñas ampollas transparentes que se rompen fácilmente.</li>
<li>No pica ni duele mucho.</li>
<li>Se resuelve sola al enfriarse.</li>
</ul>

<h4>Miliaria roja ("sarpullido de calor" común)</h4>
<ul>
<li>Granos rojos pequeños, con picazón intensa.</li>
<li>Sensación de pinchazos o ardor.</li>
<li>Común en pliegues: cuello, ingles, axilas, interior de codos.</li>
</ul>

<h4>Miliaria profunda (rara, severa)</h4>
<ul>
<li>Lesiones más grandes, color piel, duras.</li>
<li>Puede causar mareos y náuseas porque el cuerpo no puede sudar bien.</li>
<li>Requiere atención médica.</li>
</ul>

<h3>Tratamiento</h3>
<ol>
<li><strong>Enfría la piel:</strong> Duchas o baños frescos (no fríos). Si no hay agua corriente, usa paños húmedos con agua fresca.</li>
<li><strong>Seca bien:</strong> Seca la piel suavemente dando toquecitos, no frotando.</li>
<li><strong>Ropa adecuada:</strong> Usa ropa holgada de algodón. Evita telas ajustadas y sintéticas. Si es posible, quédate sin camisa en casa.</li>
<li><strong>Ventilación:</strong> Abanica la zona afectada. Cualquier fuente de circulación de aire ayuda.</li>
<li><strong>Compresas húmedas:</strong> Aplica compresas de agua fresca sobre las zonas afectadas durante 15-20 minutos, varias veces al día.</li>
</ol>

<div class="warning"><strong>Lo que NO debes hacer:</strong>
<ul>
<li><strong>NO uses cremas espesas, vaselina ni aceites</strong> — bloquean más los poros y empeoran el sarpullido.</li>
<li><strong>NO uses talco en exceso</strong> — puede acumularse y bloquear los poros.</li>
<li><strong>NO rasques</strong> — puede causar infección. Si la picazón es insoportable, aplica compresas frías.</li>
</ul></div>

<h3>Prevención</h3>
<ul>
<li><strong>Ropa de algodón holgada</strong> y de colores claros.</li>
<li><strong>Báñate frecuentemente</strong> — al menos 2 veces al día en clima caluroso. Un baldazo de agua fresca es suficiente.</li>
<li><strong>Seca bien los pliegues</strong> de la piel después del baño.</li>
<li><strong>Ventila los espacios:</strong> Abre ventanas, usa abanicos manuales.</li>
<li>Evita actividad física intensa en las horas más calientes (10am-4pm).</li>
<li>Para bebés: vístelos con una sola capa de ropa ligera. No los envuelvas en exceso.</li>
</ul>

<h3>En bebés</h3>
<p>Los bebés son especialmente vulnerables porque sus poros son más pequeños:</p>
<ul>
<li>Viste al bebé con <strong>una sola capa de ropa ligera</strong> — no más de lo que tú usarías.</li>
<li>Baños frecuentes con agua tibia (no jabón excesivo).</li>
<li>Mantén al bebé en el lugar más fresco de la casa.</li>
<li>Si usas pañal, cámbialo frecuentemente y deja tiempo sin pañal.</li>
</ul>

<h3>Cuándo buscar atención médica</h3>
<div class="danger"><strong>Consulta si:</strong>
<ul>
<li>El sarpullido no mejora en 3-4 días a pesar de enfriarse.</li>
<li>Aparecen signos de infección: pus, dolor intenso, hinchazón creciente, fiebre.</li>
<li>Los granos se vuelven grandes y llenos de líquido turbio.</li>
<li>La persona tiene mareos, náuseas o deja de sudar (puede ser golpe de calor).</li>
</ul></div>

<div class="tip"><strong>Fuentes verificadas:</strong> DermNet NZ, Mayo Clinic, American Academy of Dermatology, NHS (National Health Service).</div>
`
      }
    ]
  }
]

export function getAllArticles(): { article: Article; category: Category }[] {
  const results: { article: Article; category: Category }[] = []
  for (const category of categories) {
    for (const article of category.articles) {
      results.push({ article, category })
    }
  }
  return results
}

export function searchArticles(query: string): { article: Article; category: Category }[] {
  const lower = query.toLowerCase()
  return getAllArticles().filter(({ article }) =>
    article.title.toLowerCase().includes(lower) ||
    article.description.toLowerCase().includes(lower) ||
    article.content.toLowerCase().includes(lower)
  )
}

export function findCategory(slug: string): Category | undefined {
  return categories.find(c => c.slug === slug)
}

export function findArticle(categorySlug: string, articleSlug: string): { article: Article; category: Category } | undefined {
  const category = findCategory(categorySlug)
  if (!category) return undefined
  const article = category.articles.find(a => a.slug === articleSlug)
  if (!article) return undefined
  return { article, category }
}
