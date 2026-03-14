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
