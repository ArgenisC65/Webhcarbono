function LaTeX(code) {
  return `https://latex.codecogs.com/svg.image?\\large&space;${code}`;
}

function opnLaTeX(code) {
  return `<img src="${LaTeX(code)}" style="height:40px">`;
}

let baseDePreguntas = [
  {
    pregunta: "¿Que se conoce por cambio climático?",
    ayuda: "Algunos efectos del cambio climático son: aumento del nivel de mares, escasez de agua, eventos climáticos inesperados",
    imagen: "https://media.istockphoto.com/id/1339138376/es/foto/cambio-clim%C3%A1tico-de-la-sequ%C3%ADa-al-crecimiento-verde.jpg?s=612x612&w=0&k=20&c=f6g23NIS6Se_L_TjBOOQiKSUqaVhscqUHlv0XyItXAI=",
    respuesta: "Variación global del clima de la tierra y sus efectos",
    distractores: ["Calentamiento del océano pacífico", "Enfriamiento del océano pacífico", "Igual a calentamiento global"],
  },
  {
    pregunta: "¿Cuales son los recursos necesarios para nuestra vida y que están amenazados por el cambio climático?",
    ayuda: "El cambio climático puede agravar fenómenos tales como la erosión, la reducción de la materia orgánica, la salinización, la pérdida de biodiversidad del suelo",
    imagen: "https://media.istockphoto.com/id/1333718098/es/foto/incendios-forestales-causados-por-el-cambio-clim%C3%A1tico.jpg?s=2048x2048&w=is&k=20&c=P4oc7UHTX_YqTUFl3XD5vvlTbsdlCkRXJqUN1HNXFC4=",
    respuesta: "Todas las anteriores",
    distractores: ["El agua potable", "Alimentos", "Temperatura y clima adecuado"],
  },
  {
    pregunta: "¿Porque esta ocurriendo el cambio climático?",
    ayuda: "Los combustibles fósiles (carbón, petróleo y gas) son los que más contribuyen al cambio climático mundial",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2329381811/display_1500/stock-photo-green-industry-eco-power-plant-petrochemical-industrial-factory-saving-environment-ozone-low-2329381811.jpg",
    respuesta: "En el aire hay aumento de gases que atrapan el calor",
    distractores: ["No se está produciendo suficiente CO₂", "Disminición de la temperatura global", "Aumento de la actividad nuclear"],
  },
  {
    pregunta: "¿Algunos gases de efecto invernadero?",
    ayuda: "En la atmósfera de la Tierra, los principales gases de efecto invernadero (GEI) son el vapor de agua (H2O), el dióxido de carbono (CO2), el óxido nitroso (N2O), el metano (CH4) y el ozono (O3).",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2489272589/display_1500/stock-photo-co-or-carbon-concept-with-icons-on-green-background-co-emission-using-clean-energy-and-limit-2489272589.jpg",
    respuesta: "Dióxido de carbono (CO₂), Metano (CH₄), Oxido nitroso (N₂O)",
    distractores: ["Nitrógeno (N₂) y Oxigeno (O₂)", "Dióxido de carbono (CO₂), Metano (CH₄), Oxigeno (O₂)", "Metano (CH₄), Oxido nitroso (N₂O), Nitrógeno (N₂)"],
  },
  {
    pregunta: "¿Que procesos generan el CO₂ en exceso?",
    ayuda: "Las actividades humanas han elevado el contenido de dióxido de carbono de la atmósfera en un 50 % en menos de 200 años.",
    imagen: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/05/hipertextual-amsterdam-prohibira-todos-coches-combustion-partir-2030-2019071710.jpg?resize=1200%2C675&quality=70&strip=all&ssl=1",
    respuesta: "Todas las anteriores",
    distractores: ["Quema de combustibles en automóviles", "Combustibles de la generación eléctrica", "Deforestación y degradación de suelos"],
  },
  {
    pregunta: "¿Como se produce el exceso de metano(CH₄)?",
    ayuda: "Las fuentes más grandes de metano son la agricultura, los combustibles fósiles y la descomposición de residuos en vertederos. ",
    imagen: "https://content.nationalgeographic.com.es/medio/2021/11/12/la-actividad-ganadera-puede-suponer-hasta-un-145de-las-emisiones-globales-de-gases-de-efecto-invernadero_d50c711d_1226x856.jpg",
    respuesta: "Cultivos de arroz, sobrepastoreo, disposicion inadecuada de residuos sólidos",
    distractores: ["Quema de combustibles fósiles en autos e industria", "Sobreproducción de ganado en nuestros llanos", "Tala y quema de árboles"],
  },
  {
    pregunta: "¿Cual es la acción principal para reducir los gases de efecto invernadero?",
    ayuda: "Las actividades humanas han elevado el contenido de dióxido de carbono de la atmósfera en un 50 % en menos de 200 años.",
    imagen: "http://naeco.com/modules/psblog/uploads/1613664530.jpg",
    respuesta: "Reducir la huella de carbono",
    distractores: ["Sustituir los automóviles a gasolina por eléctricos", "Reforestación (Sembrar mas árboles)", "Cuidar la capa de ozono"],
  },
  {
    pregunta: "¿Que es la huella de carbono?",
    ayuda: "Indicador ambiental que refleja la cantidad de gases de efecto invernadero expresado como: co2 equivalente",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2363791289/display_1500/stock-vector-icon-collection-with-zero-emission-symbol-concept-greenhouse-gas-carbon-credit-design-set-protect-2363791289.jpg",
    respuesta: "La personal se base en hábitos de consumo personal y la corporatuva mide el desempeño de la empresa frente a los compromisos",
    respuesta: "Indicador ambiental que refleja la cantidad de gases de efecto invernadero expresado como: co2 equivalente",
    distractores: ["Energia generada por las plantas generadoras de electrcidad", "Concentración de gase generados en las industrias", "Kilómetros cuadrados o hectareas de bosques"],
  },
  {
    pregunta: "¿Como identificas tu huella de carbono?",
    ayuda: "La huella de carbono representa el volumen total de gases de efecto invernadero (GEI) que producen las actividades económicas y cotidianas del ser humano.",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2392639505/display_1500/stock-vector-carbon-footprint-symbol-paper-art-style-ecology-and-environment-sustainable-development-concept-2392639505.jpg",
    respuesta: "Identificar emisiones en equivalentes (consumo combustible, consumo energia eléctrica, desechos sólidos, consumo de carne",
    distractores: ["Identificar las emisiones GEI que son generadas por Organizaciones e Industrias de su Sector", "Medir el Impacto de la Deforestación en tu ciudad", "Identificar las medidas de el Oxigeno consumido en realación con el CO₂ generado"],
  },
  {
    pregunta: "¿Como reducir tu huella de carbono?",
    ayuda: "La huella de carbono representa el volumen total de gases de efecto invernadero (GEI) que producen las actividades económicas y cotidianas del ser humano.",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2392639505/display_1500/stock-vector-carbon-footprint-symbol-paper-art-style-ecology-and-environment-sustainable-development-concept-2392639505.jpg",
    respuesta: "Consumo responsable y cambio de hábitos",
    distractores: ["Sustituir los automóviles a gasolina por eléctricos", "Reforestación (Sembrar mas arboles)", "Sustituir los combustibles gasolina y ACPM por gas licuado de petróleo"],
  },
  {
    pregunta: "¿Cuales diferencias encuentras entre tu huella de carbono personal y la corporativa?",
    ayuda: "La  mide el potencial de calentamiento global en toneladas de CO2 equivalentes asociadas a un producto, una corporación o empresa, etc.",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2393389339/display_1500/stock-photo-carbon-footprint-a-human-footprint-in-the-middle-of-a-lush-crystal-globe-concepts-of-sustainable-2393389339.jpg",
    respuesta: "La personal se base en hábitos de consumo personal y la corporatuva mide el desempeño de la empresa frente a los compromisos",
    distractores: ["No hay diferencias porque ayudan a cumplir con el mismo compromiso", "La huella personal no es útil para reducír la contaminación", "En la huella personal no se mide impacto ambiental y en la corporatva si"],
  },
  {
    pregunta: "¿Como afecta el óxido nitroso (N₂O) al medio ambiente?",
    ayuda: "El óxido nitroso es un subproducto de los procesos naturales de los suelos y los océanos. Se produce mediante la nitrificación y desnitrificación bacteriana y, por tanto, forma parte del ciclo natural del nitrógeno.",
    imagen: "https://grupovierci.brightspotcdn.com/dims4/default/2f9e90f/2147483647/strip/true/crop/1251x704+0+63/resize/1000x563!/format/webp/quality/90/?url=https%3A%2F%2Fk2-prod-grupo-vierci.s3.us-east-1.amazonaws.com%2Fbrightspot%2Fadjuntos%2F161%2Fimagenes%2F009%2F058%2F0009058045.png",
    respuesta: "Es el principal constituyente de la lluvia ácida",
    distractores: ["No afecta al medio ambiente ya que se presenta en bajas concentraciones", "Los óxidos de nitrógeno son degradados rápidamente en la atmósfera", " El óxido nitroso no se considera uno de los gases de efecto invernadero "],
  },
  {
    pregunta: "¿Como se calcula la huella de carbono de un gas?",
    ayuda: "Los estándares más utilizados en el mundo vienen establecidos por el Greenhouse Gas Protocol (GHG). Según el GHG Protocol, y de forma simplificada, la huella de carbono se calcula multiplicando un dato de actividad por un factor de emisión. ",
    imagen: "https://cdn.laopinon.cl/sites/laopinon.cl/files/imagecache/380x285/imagen_noticia/Calculadora%20huella%20de%20carbono%20CGE_%201.jpg",
    respuesta: "CO₂ equivalente = (Masa de Gas x Potencial de Calentamiento Global)",
    distractores: ["CO₂ equivalente = (Volúmen de Gas x Potencial de Calentamiento Global)", "CO₂ equivalente = Volúmen de Gas", " CO₂ equivalente = (Volúmen de Gas / Volúmen de Oxigeno"],
  },
  {
    pregunta: "¿Una acción para compensar la huella de carbono puede ser?",
    ayuda: "Compensar la huella de carbono significa capturar la misma cantidad de CO2 que emitimos. Una de las acciones más conocidas para compensar las emisiones de carbono o huella de carbono, es la plantación y conservación de bosques. ",
    imagen: "https://eos.com/wp-content/uploads/2023/02/reforestation-against-ghg-emission.jpg.webp",
    respuesta: "Plantación y conservación de bosques",
    distractores: ["Compraren centros comerciales", "Siempre hacer uso de moto o automóvil para translarse", " No clasificar los residuos sólios en el hogar"],
  },
  {
    pregunta: "¿Por qué plantar árboles compensa la huella de carbono?",
    ayuda: "Compensar la huella de carbono significa capturar la misma cantidad de CO2 que emitimos. Una de las acciones más conocidas para compensar las emisiones de carbono o huella de carbono, es la plantación y conservación de bosques. ",
    imagen: "https://eos.com/wp-content/uploads/2023/02/reforestation-against-ghg-emission.jpg.webp",
    respuesta: "Las plantas hacen fotosíntesis, y transforman el dióxido de carbono en oxígeno",
    distractores: ["Los árboles capturan el carbono en sus hojas y lo disuelven", "Es falso, los arboles no absorben el carbono", "Los árboles solo limpian el aire de todos los gases "],
  },
  {
    pregunta: "¿Que significa ser carbono neutral?",
    ayuda: "La neutralidad de carbono se alcanza cuando se emite la misma cantidad de CO2 a la atmósfera de la que se retira por distintas vías, lo que deja un balance cero",
    imagen: "https://eos.com/wp-content/uploads/2023/02/reforestation-against-ghg-emission.jpg.webp",
    respuesta: "Cuando se emite la misma cantidad de CO2 a la atmósfera de la que se retira por distintas vías",
    distractores: ["Cuando el CO2 generado al aire no contamina", "Cuando se emite a la atmósfera la misma cantdad de oxígeno que CO2", "Cuando no se generan emisiones de CO2 a la atmósfera "],
  },
  {
    pregunta: "¿El derretimiento de glaciares es una consecuencia de la huella de carbono, esto causa a su vez lo siguiente?",
    ayuda: "El derretimiento de los glaciares provoca el aumento del nivel del mar, lo que a su vez incrementa la erosión costera y eleva las marejadas a medida que el calentamiento del aire y del mar ocasionan tormentas costeras",
    imagen: "https://content.nationalgeographic.com.es/medio/2023/11/22/deshielo-de-un-glaciar_dd5f54dc_231122105425_1280x744.jpg",
    respuesta: "Todas las anteriores",
    distractores: ["El aumento del nivel del mar", "Incrementa la erosión costera", "Ocasionan tormentas costera"],
  },
  {
    pregunta: "¿Que pueden hacer las empresas para reducir la huella de carbono de manera efectiva?",
    ayuda: "Las principales líneas de actuación son: la implantación de energías renovables, políticas de movilidad de los trabajadores y transporte de mercancías, instaurar tecnologías más eficientes, reducir el consumo de recursos y minimizar los residuos",
    imagen: "https://eos.com/wp-content/uploads/2023/02/reforestation-against-ghg-emission.jpg.webp",
    respuesta: "La implantación de energías renovables y reducir el consumo de recursos",
    distractores: ["Aumentar el consumo de energas no renovables", "Aumentar la producción y el consumo de combustibles", "Reducir elnúmero de trabajadores en la industria "],
  },
  {
    pregunta: "¿Que paises crees que tienen la mayor huella de carbono per cápita y por qué?",
    ayuda: "China, con más de 14 mil millones de toneladas de CO2 emitido. Estados Unidos, con 6 mil millones de toneladas de CO2. India, con 3.5 mil millones de toneladas de CO2. Los 27 países de la UE con 3.4 mil millones de toneladas de CO2.",
    imagen: "https://elordenmundial.com/wp-content/webp-express/webp-images/doc-root/wp-content/uploads/2019/06/Mapa-emisiones-CO2-habitante.png.webp",
    respuesta: "China, Esados Unidos y paises de la Union Europea",
    distractores: ["La India, Nepal, Banglades", "El Reino Unido, Francia y Alemania", "Brasil, Venezuela y Colombia "],
  },
  {
    pregunta: "Impactos de la huella de carbono",
    ayuda: "Cada vez que viajamos en coche, cargamos el teléfono móvil o ponemos una lavadora, entre otras miles de rutinas, dejamos atrás una estela de gases que se acumulan en la atmósfera y sobrecalientan el planeta.",
    imagen: "https://www.portalambiental.com.mx/sites/default/files/styles/full_content/public/media/image/2021/10/8492aver.unam_.jpeg?itok=qdG9nQKv",
    respuesta: "Todas las anteriores",
    distractores: ["Los cambios en los ecosistemas y Fenómenos meteorológicos extremos", "Migraciones masivas y extinción de especies", "Acidificación y subida del nivel del mar "],
  }
];
