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
    ayuda: "Los combustibles fósiles (carbón, petróleo y gas) son los que más contribuyen al cambio climático mundial",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2489272589/display_1500/stock-photo-co-or-carbon-concept-with-icons-on-green-background-co-emission-using-clean-energy-and-limit-2489272589.jpg",
    respuesta: "Dióxido de carbono (CO₂), Metano (CH₄), Oxido nitroso (N₂O)",
    distractores: ["Nitrógeno (N₂) y Oxigeno (O₂)", "Dióxido de carbono (CO₂), Metano (CH₄), Oxigeno (O₂)", "Metano (CH₄), Oxido nitroso (N₂O), Nitrógeno (N₂)"],
  },
  {
    pregunta: "¿Que procesos generan el CO₂ en exceso?",
    ayuda: "Las actividades humanas han elevado el contenido de dióxido de carbono de la atmósfera en un 50 % en menos de 200 años.",
    imagen: "https://i0.wp.com/imgs.hipertextual.com/wp-content/uploads/2019/05/hipertextual-amsterdam-prohibira-todos-coches-combustion-partir-2030-2019071710.jpg?resize=1200%2C675&quality=70&strip=all&ssl=1",
    respuesta: "Tudas las anteriores",
    distractores: ["Quema de combustibles en automóviles", "Combustibles de la generación eléctrica", "Deforestación y degradación de suelos"],
  },
  {
    pregunta: "¿Como se produce el exceso de metano(CH₄)?",
    ayuda: "Las actividades humanas han elevado el contenido de dióxido de carbono de la atmósfera en un 50 % en menos de 200 años.",
    imagen: "https://content.nationalgeographic.com.es/medio/2021/11/12/la-actividad-ganadera-puede-suponer-hasta-un-145de-las-emisiones-globales-de-gases-de-efecto-invernadero_d50c711d_1226x856.jpg",
    respuesta: "Cultivos de arroz, sobrepastoreo, disposicion inadecuada de residuos sólidos",
    distractores: ["Quema de combustibles fósiles en autos e industria", "sobreproducción de ganado en nuestros llanos", "Tala y quema de árboles"],
  },
  {
    pregunta: "¿Cual es la acción princpal para reducir los gases de efecto invernadero?",
    ayuda: "Las actividades humanas han elevado el contenido de dióxido de carbono de la atmósfera en un 50 % en menos de 200 años.",
    imagen: "http://naeco.com/modules/psblog/uploads/1613664530.jpg",
    respuesta: "Reducir la huella de carbono",
    distractores: ["Sustituir los automóviles a gasolina por eléctricos", "Reforestación (Sembrar mas arboles)", "Cuidar la capa de ozono"],
  },
  {
    pregunta: "¿Que es la huella de carbono?",
    ayuda: "Indicador ambiental que refleja la cantidad de gases de efecto invernadero expresado como: co2 equivalente",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2363791289/display_1500/stock-vector-icon-collection-with-zero-emission-symbol-concept-greenhouse-gas-carbon-credit-design-set-protect-2363791289.jpg",
    respuesta: "La personal se base en hábitos de consumo personal y la corporatuva mide el desempeño de la empresa frente a los compromisos",
    respuesta: "Indicador ambiental que refleja la cantidad de gases de efecto invernadero expresado como: co2 equivalente",
    distractores: ["Energia generada por las plantas generadoras de electrocidad", "Concentración de gase generados en las indistrias", "Kilómetros cuadrados o hectareas de bosques"],
  },
  {
    pregunta: "¿Como identificarias tu huella de carbono?",
    ayuda: "Las actividades humanas han elevado el contenido de dióxido de carbono de la atmósfera en un 50 % en menos de 200 años.",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2392639505/display_1500/stock-vector-carbon-footprint-symbol-paper-art-style-ecology-and-environment-sustainable-development-concept-2392639505.jpg",
    respuesta: "Identificar emisiones en equivalentes (consumo combustible, consumo energia eléctrica, desechos sólidos, consumo de carne",
    distractores: ["Sustituir los automóviles a gasolina por eléctricos", "Reforestación (Sembrar mas arboles)", "Cuidar la capa de oxono"],
  },
  {
    pregunta: "¿Cuales diferencias encuentras entre tu huella de carbono personal y la corporativa?",
    ayuda: "La  mide el potencial de calentamiento global en toneladas de CO2 equivalentes asociadas a un producto, una corporación o empresa, etc.",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2393389339/display_1500/stock-photo-carbon-footprint-a-human-footprint-in-the-middle-of-a-lush-crystal-globe-concepts-of-sustainable-2393389339.jpg",
    respuesta: "La personal se base en hábitos de consumo personal y la corporatuva mide el desempeño de la empresa frente a los compromisos",
    distractores: ["No hay diferencias porque son el mismo compromiso", "la huella personal no es útil para reducír la contaminación", "la huella personal se debe aumentar y la corporatva reducir"],
  },
  {
    pregunta: "¿Como constribuye el óxido nitroso (NO2) a tu huella de carbono?",
    ayuda: "El óxido nitroso es un subproducto de los procesos naturales de los suelos y los océanos. Se produce mediante la nitrificación y desnitrificación bacteriana y, por tanto, forma parte del ciclo natural del nitrógeno.",
    imagen: "https://www.shutterstock.com/shutterstock/photos/2393389339/display_1500/stock-photo-carbon-footprint-a-human-footprint-in-the-middle-of-a-lush-crystal-globe-concepts-of-sustainable-2393389339.jpg",
    respuesta: "El óxido nitroso tendrá en un siglo un efecto de calentamiento global aproximadamente 300 veces superior al del dióxido de carbono.",
    distractores: ["No se considea en el calculo de la huella de carbono", "Los óxidos de nitrógeno son degradados rápidamente en la atmósfera", " El óxido nitroso no se considera uno de los gases de efecto invernadero "],
  },
];
