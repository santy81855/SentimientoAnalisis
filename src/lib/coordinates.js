export default function getCoordinates(municipio) {
    switch (municipio) {
        case "Amagá":
            return {
                latitude: 6.040036365306395,
                longitude: -75.70279244467295,
                zoom: 15,
                url: "/images/mapa/amaga.jpg",
            };
        case "Fredonia":
            return {
                latitude: 5.926988789474928,
                longitude: -75.67157093824729,
                zoom: 16,
                url: "/images/mapa/fredonia.jpg",
            };
        case "Andes":
            return {
                latitude: 5.656850054649847,
                longitude: -75.87815590124973,
                zoom: 15,
                url: "/images/mapa/andes.jpg",
            };
        case "Ciudad Bolívar":
            return {
                latitude: 5.850597188636879,
                longitude: -76.02107478919025,
                zoom: 15,
                url: "/images/mapa/ciudad-bolivar.jpg",
            };
        case "Jardín":
            return {
                latitude: 5.598646180731506,
                longitude: -75.81948978778762,
                zoom: 16,
                url: "/images/mapa/jardin.jpg",
            };
        case "Jericó":
            return {
                latitude: 5.791238194896293,
                longitude: -75.78512186680732,
                zoom: 16,
                url: "/images/mapa/jerico.jpg",
            };
        case "La Pintada":
            return {
                latitude: 5.747072490594706,
                longitude: -75.60665830094318,
                zoom: 17,
                url: "/images/mapa/la-pintada.jpg",
            };
        case "Santa Bárbara":
            return {
                latitude: 5.874078195844012,
                longitude: -75.56757980599338,
                zoom: 16,
                url: "/images/mapa/santa-barbara.jpg",
            };
        case "Támesis":
            return {
                latitude: 5.665117423183381,
                longitude: -75.71481777833525,
                zoom: 16,
                url: "/images/mapa/tamesis.png",
            };
        case "Valparaíso":
            return {
                latitude: 5.616009581907938,
                longitude: -75.62463843609666,
                zoom: 16,
                url: "/images/mapa/valparaiso.jpg",
            };
        case "Venecia":
            return {
                latitude: 5.963868919879134,
                longitude: -75.73504991426107,
                zoom: 16,
                url: "/images/mapa/venecia.jpg",
            };
        case "Urrao":
            return {
                latitude: 6.313861448892473,
                longitude: -76.13146671902038,
                zoom: 15,
                url: "/images/mapa/urrao.jpg",
            };
        case "Tarso":
            return {
                latitude: 5.864901629075786,
                longitude: -75.82245801874683,
                zoom: 16.5,
                url: "/images/mapa/tarso.jpg",
            };
        case "Pueblorrico":
            return {
                latitude: 5.79163488717435,
                longitude: -75.84117075661426,
                zoom: 16,
                url: "/images/mapa/pueblorrico.jpg",
            };
        case "Caramanta":
            return {
                latitude: 5.54919140601753,
                longitude: -75.64471547110624,
                zoom: 16,
                url: "/images/mapa/caramanta.png",
            };
        case "Montebello":
            return {
                latitude: 5.945406287891866,
                longitude: -75.52398338067638,
                zoom: 17,
                url: "/images/mapa/montebello.jpg",
            };
        default:
            break;
    }
}

/*
    "Amagá",
    "Fredonia",
    "Andes" = 5.656850054649847, -75.87815590124973,
    "Ciudad Bolívar" = 5.850597188636879, -76.02107478919025,
    "Jardín" = 5.598646180731506, -75.81948978778762,
    "Jericó" = 5.791238194896293, -75.78512186680732,
    "La Pintada" = 5.747072490594706, -75.60665830094318,
    "Santa Bárbara" = 5.874078195844012, -75.56757980599338,
    "Támesis" = 5.665117423183381, -75.71481777833525,
    "Valparaíso" = 5.616009581907938, -75.62463843609666,
    "Venecia" = 5.963868919879134, -75.73504991426107,
    "Urrao" = 6.313861448892473, -76.13146671902038,
    "Tarso" = 5.864901629075786, -75.82245801874683,
    "Pueblorrico"= 5.79163488717435, -75.84117075661426,
    "Caramanta" = 5.54919140601753, -75.64471547110624,
    "Montebello" = 5.945406287891866, -75.52398338067638,
*/

/*
Hoteles
[
  {
    "municipio": "Caramanta",
    "name": "Hotel la Ruana Caramanta",
    "type": "Urbano",
    "alto": "80000",
    "bajo": "80000",
    "Redes Sociales": "hotellaruanacaramanta 5.4k",
    "Contacto": 3174417632,
    "ota": false
  },
  {
    "municipio": "Caramanta",
    "name": "Hotel el Abuelo",
    "type": "Urbano",
    "alto": "80000 ",
    "bajo": "80000 ",
    "Redes Sociales": "hotelabuelocaramanta 7.3",
    "Contacto": "3182036624/3046006511",
    "ota": false
  },
  {
    "municipio": "Caramanta",
    "name": "Hotel El Patio",
    "type": "Urbano",
    "alto": "Ya no exixte.",
    "bajo": "Ya no exixte.",
    "Redes Sociales": false,
    "Contacto": 3022599649,
    "ota": false
  },
  {
    "municipio": "Caramanta",
    "name": "Finca Hotel El Rancho de Monchito",
    "type": "Campestre",
    "alto": "110 - 150",
    "bajo": "80 - 120",
    "Redes Sociales": "elranchode_monchito 499",
    "Contacto": 3183251118,
    "ota": false
  },
  {
    "municipio": "La Pintada",
    "name": "Hotel Real Dinastia",
    "type": "Campestre",
    "alto": "360000 + 68 Imp",
    "bajo": "253000 + 50 Imp",
    "Redes Sociales": "hotelrealdinastia",
    "Contacto": 3187072114,
    "ota": true
  },
  {
    "municipio": "La Pintada",
    "name": "Hotel Villa Camila",
    "type": "Campestre",
    "alto": "356000",
    "bajo": "405000",
    "Redes Sociales": "villacamilahotel",
    "Contacto": 3052367136,
    "ota": true
  },
  {
    "municipio": "La Pintada",
    "name": "Hotel Los Molinos",
    "type": "Urbano",
    "alto": "60000 ",
    "bajo": "85000",
    "Redes Sociales": "hotellosmolinoslp",
    "Contacto": 3136410904,
    "ota": false
  },
  {
    "municipio": "La Pintada",
    "name": "Hotel Omni La Pintada",
    "type": "Urbano",
    "alto": "80000",
    "bajo": "110000 ",
    "Redes Sociales": "hotelomnilp",
    "Contacto": 3136410904,
    "ota": false
  },
  {
    "municipio": "Valparaiso",
    "name": "Hotel la Ceiba",
    "type": "Urbano",
    "alto": "168000 Inc Imp",
    "bajo": "180000",
    "Redes Sociales": "hotellaceibavalparaiso",
    "Contacto": 3022342244,
    "ota": true
  },
  {
    "municipio": "Valparaiso",
    "name": "Hotel Las Vegas",
    "type": "Urbano",
    "alto": "75000",
    "bajo": "65000",
    "Redes Sociales": "valparaisolasvegas",
    "Contacto": 3148362031,
    "ota": false
  },
  {
    "municipio": "Valparaiso",
    "name": "Hotel Guadalejo",
    "type": "Campestre",
    "alto": "280000",
    "bajo": "340000",
    "Redes Sociales": "ecohotel_guadalejo",
    "Contacto": 3226880992,
    "ota": false
  },
  {
    "municipio": "Valparaiso",
    "name": "La Posada Del Palmar",
    "type": "Urbano",
    "alto": "85000",
    "bajo": "75000",
    "Redes Sociales": "hotel_laposadaelpalmar",
    "Contacto": "6044843791  6048493791",
    "ota": false
  },
  {
    "municipio": "Jerico",
    "name": "Hotel Atenas Jericó",
    "type": "Urbano",
    "alto": "200000",
    "bajo": "140000",
    "Redes Sociales": "hotelatenasjerico",
    "Contacto": 3127693291,
    "ota": true
  },
  {
    "municipio": "Jerico",
    "name": "Casa Jacaranda Hotel Boutique",
    "type": "Campestre",
    "alto": "490000",
    "bajo": "550000",
    "Redes Sociales": "hotel_casa_jacaranda",
    "Contacto": 3173780567,
    "ota": true
  },
  {
    "municipio": "Jerico",
    "name": "Hotel Santa Laura",
    "type": "Urbano",
    "alto": "350000",
    "bajo": "210000",
    "Redes Sociales": "hotelsantalaurajerico",
    "Contacto": 3124086033,
    "ota": true
  },
  {
    "municipio": "Jerico",
    "name": "Hotel de Cauca Viejo",
    "type": "Campestre",
    "alto": "710.000 +  148.900 Imp",
    "bajo": "439200 + 97460 Imp Imp",
    "Redes Sociales": "caucaviejo",
    "Contacto": 6015879566,
    "ota": true
  },
  {
    "municipio": "Tamesis",
    "name": "Casa Hotel La Albertina",
    "type": "Urbano - Campestre",
    "alto": "250000",
    "bajo": "250000",
    "Redes Sociales": "la_albertina_tamesis",
    "Contacto": 3205218750,
    "ota": false
  },
  {
    "municipio": "Tamesis",
    "name": "Monte Mágico Chalets",
    "type": "Campestre",
    "alto": "380000 ",
    "bajo": "360000 ",
    "Redes Sociales": "montemagicotamesis",
    "Contacto": 3013354728,
    "ota": true
  },
  {
    "municipio": "Tamesis",
    "name": "Hotel Vegas del Rio",
    "type": "Urbano",
    "alto": "90 - 140",
    "bajo": "80 - 120",
    "Redes Sociales": "hotelvegasdelrio",
    "Contacto": 3002777549,
    "ota": false
  },
  {
    "municipio": "Tamesis",
    "name": "Hotel Boutique Cetro",
    "type": "Campestre",
    "alto": "330 - 470",
    "bajo": "260 - 350",
    "Redes Sociales": "hotelcetro",
    "Contacto": 3007710429,
    "ota": false
  },
  {
    "municipio": "Santa Barbara",
    "name": "Anthalia Glamping",
    "type": "Campestre",
    "alto": "612.000 + 61.200 Imp",
    "bajo": "342.000 + 34.200 Imp",
    "Redes Sociales": "anthalia.glamping",
    "Contacto": 3113455073,
    "ota": true
  },
  {
    "municipio": "Santa Barbara",
    "name": "Finca Villa Celina",
    "type": "Campestre",
    "alto": "300000 - 350000 Imp Inlc",
    "bajo": "230000 - 250000",
    "Redes Sociales": "fincavillacelinast",
    "Contacto": 3162280213,
    "ota": false
  },
  {
    "municipio": "Santa Barbara",
    "name": "Hotel el Castillo",
    "type": "Urbano",
    "alto": "150000",
    "bajo": "130000",
    "Redes Sociales": "elcastillosanta_",
    "Contacto": 3023607258,
    "ota": false
  },
  {
    "municipio": "Santa Barbara",
    "name": "Cabañas la Amapolita (Versalles - St. B)",
    "type": "Campestre",
    "alto": "420000",
    "bajo": "350000",
    "Redes Sociales": "cabanas_la_amapolita",
    "Contacto": 3225765639,
    "ota": true
  },
  {
    "municipio": "Venecia",
    "name": "Hotel Granja del Café",
    "type": "Campestre",
    "alto": "429000",
    "bajo": "290000",
    "Redes Sociales": "granjadelcafe",
    "Contacto": 3002514035,
    "ota": true
  },
  {
    "municipio": "Venecia",
    "name": "La Divisa Hotel Boutique",
    "type": "Campestre",
    "alto": "470.000 + 137 Imp",
    "bajo": "319.000 + 93000 Imp",
    "Redes Sociales": "ladivisa_finca",
    "Contacto": 3014026356,
    "ota": true
  },
  {
    "municipio": "Venecia",
    "name": "Nativo Hostel Venecia",
    "type": "Urbano",
    "alto": "135000 + 39000 Imp",
    "bajo": "94000 + 28000 Imp",
    "Redes Sociales": "nativohostelvenecia",
    "Contacto": 3106151833,
    "ota": true
  },
  {
    "municipio": "Venecia",
    "name": "Finca Hotel Carmonia del Bosque",
    "type": "Campestre",
    "alto": "286.000",
    "bajo": "286.000",
    "Redes Sociales": "carmoniadelbosque",
    "Contacto": "300 786 11 19.",
    "ota": true
  },
  {
    "municipio": "PuebloRico",
    "name": "El viajero Hospedaje",
    "type": "Urbano",
    "alto": "55000",
    "bajo": "45000",
    "Redes Sociales": "hotel_el_viajero_pueblorrico",
    "Contacto": 3136447427,
    "ota": false
  },
  {
    "municipio": "PuebloRico",
    "name": "No Aplica",
    "type": "No Aplica",
    "alto": "No Aplica",
    "bajo": "No Aplica",
    "Redes Sociales": "No Aplica",
    "Contacto": false,
    "ota": ""
  },
  {
    "municipio": "PuebloRico",
    "name": "No Aplica",
    "type": "No Aplica",
    "alto": "No Aplica",
    "bajo": "No Aplica",
    "Redes Sociales": "No Aplica",
    "Contacto": false,
    "ota": false
  },
  {
    "municipio": "PuebloRico",
    "name": "No Aplica",
    "type": "No Aplica",
    "alto": "No Aplica",
    "bajo": "No Aplica",
    "Redes Sociales": "No Aplica",
    "Contacto": false,
    "ota": false
  },
  {
    "municipio": "Fredonia",
    "name": "Prana Cabañas Fredonia",
    "type": "Campestre",
    "alto": "160000",
    "bajo": "140000",
    "Redes Sociales": "prana.cabana",
    "Contacto": 3147270138,
    "ota": ""
  },
  {
    "municipio": "Fredonia",
    "name": "Glamping Encanto de Luna",
    "type": "Campestre",
    "alto": "350000",
    "bajo": "300000",
    "Redes Sociales": "glampingencantodeluna",
    "Contacto": 3206641951,
    "ota": true
  },
  {
    "municipio": "Fredonia",
    "name": "Hotel Boutique Tahití",
    "type": "Campestre",
    "alto": "659000 + 126000 Imp",
    "bajo": "644120 + 122400 Imp",
    "Redes Sociales": "tahitihotel",
    "Contacto": 3243008934,
    "ota": true
  },
  {
    "municipio": "Fredonia",
    "name": "Hotel Hacienda La Sierra",
    "type": "Campestre",
    "alto": "750000",
    "bajo": "550000",
    "Redes Sociales": "haciendalasierra",
    "Contacto": 3244532154,
    "ota": true
  },
  {
    "municipio": "Montebello",
    "name": "Meraki EcoLodge",
    "type": "Campestre",
    "alto": "",
    "bajo": "",
    "Redes Sociales": "merakiecolodge",
    "Contacto": 3183407703,
    "ota": false
  },
  {
    "municipio": "Montebello",
    "name": "Hotel Escorial Montebello",
    "type": "Urbano",
    "alto": "75000",
    "bajo": "60000",
    "Redes Sociales": "elescorialhotel",
    "Contacto": 3126157201,
    "ota": false
  },
  {
    "municipio": "Montebello",
    "name": "Cabañas Las Nenas",
    "type": "Campestre",
    "alto": "180000",
    "bajo": "140000",
    "Redes Sociales": false,
    "Contacto": "3122882798 -",
    "ota": true
  },
  {
    "municipio": "Montebello",
    "name": "No Aplica",
    "type": "No Aplica",
    "alto": "No Aplica",
    "bajo": "No Aplica",
    "Redes Sociales": "No Aplica",
    "Contacto": "No Aplica",
    "ota": false
  },
  {
    "municipio": "Tarso",
    "name": "Reserva la Colina",
    "type": "Campestre",
    "alto": "165000",
    "bajo": "145000",
    "Redes Sociales": "reservalacolina_",
    "Contacto": "313 5969025",
    "ota": true
  },
  {
    "municipio": "Tarso",
    "name": "No Aplica",
    "type": "No Aplica",
    "alto": "No Aplica",
    "bajo": "No Aplica",
    "Redes Sociales": "No Aplica",
    "Contacto": "No Aplica",
    "ota": false
  },
  {
    "municipio": "Tarso",
    "name": "No Aplica",
    "type": "No Aplica",
    "alto": "No Aplica",
    "bajo": "No Aplica",
    "Redes Sociales": "No Aplica",
    "Contacto": "No Aplica",
    "ota": false
  },
  {
    "municipio": "Tarso",
    "name": "No Aplica",
    "type": "No Aplica",
    "alto": "No Aplica",
    "bajo": "No Aplica",
    "Redes Sociales": "No Aplica",
    "Contacto": "No Aplica",
    "ota": false
  },
  {
    "municipio": "Urrao",
    "name": "Hotel Colonial Urrao",
    "type": "Urbano",
    "alto": "95000",
    "bajo": "90000",
    "Redes Sociales": "hotelcolonialurrao",
    "Contacto": "323 4935313",
    "ota": false
  },
  {
    "municipio": "Urrao",
    "name": "Hotel Flores del Paraiso Urrao",
    "type": "Urbano",
    "alto": "136000",
    "bajo": "126000",
    "Redes Sociales": "hotelfloresdelparaisourrao",
    "Contacto": 3104151508,
    "ota": false
  },
  {
    "municipio": "Urrao",
    "name": "Parque Orquideas",
    "type": "Urbano",
    "alto": "80000",
    "bajo": "80000",
    "Redes Sociales": "hotelorquideasurrao",
    "Contacto": 3216100525,
    "ota": true
  },
  {
    "municipio": "Urrao",
    "name": "Hotel el Turista de Urrao",
    "type": "Urbano",
    "alto": "70000",
    "bajo": "70000",
    "Redes Sociales": "elturistadeurrao",
    "Contacto": 3117152545,
    "ota": false
  },
  {
    "municipio": "Jardin",
    "name": "Casa Passiflora Hotel Boutique",
    "type": "Campestre",
    "alto": "626480 + 119000 Imp",
    "bajo": "433600 + 82400 Imp",
    "Redes Sociales": "hotel_casa_passiflora",
    "Contacto": 3182421000,
    "ota": true
  },
  {
    "municipio": "Jardin",
    "name": "Gulupa Ecolodge",
    "type": "Campestre",
    "alto": "502800",
    "bajo": "342000",
    "Redes Sociales": "gulupaecolodge",
    "Contacto": 3023801155,
    "ota": true
  },
  {
    "municipio": "Jardin",
    "name": "Candileja hostel",
    "type": "Urbano",
    "alto": "129000",
    "bajo": "119000",
    "Redes Sociales": "candilejahostel",
    "Contacto": 3226818994,
    "ota": true
  },
  {
    "municipio": "Jardin",
    "name": "Hotel Plantacion",
    "type": "Urbano",
    "alto": "356000 + 68000 Imp",
    "bajo": "336000 + 64000 Imp",
    "Redes Sociales": "hotelplantacion",
    "Contacto": 3138501833,
    "ota": true
  },
  {
    "municipio": "Jardin",
    "name": "Hotel Lago Valdivia",
    "type": "Campestre",
    "alto": "689000 + 109000 Imp",
    "bajo": "667000 + 109000 Imp",
    "Redes Sociales": "hotelrestaurantelagovaldivia",
    "Contacto": 3113897979,
    "ota": true
  },
  {
    "municipio": "Amaga",
    "name": "Hotel Casa Real Amaga",
    "type": "Urbano",
    "alto": "95000",
    "bajo": "90000",
    "Redes Sociales": "hotelcasarealamaga",
    "Contacto": 3128046532,
    "ota": false
  },
  {
    "municipio": "Amaga",
    "name": "Hotel Campestre Amaga",
    "type": "Urbano",
    "alto": "70000",
    "bajo": "70000",
    "Redes Sociales": "hotel_campestre_amaga",
    "Contacto": 3194978674,
    "ota": false
  },
  {
    "municipio": "Amaga",
    "name": "Hotel Glamping la Polka",
    "type": "Campestre",
    "alto": "489000",
    "bajo": "289000",
    "Redes Sociales": "hotelglamping",
    "Contacto": 3118394652,
    "ota": false
  },
  {
    "municipio": "Amaga",
    "name": "Hotel Hacienda La Bonita",
    "type": "Campestre",
    "alto": "421000 + 122000 Imp",
    "bajo": "144000 + 42000 Imp",
    "Redes Sociales": "hotelhaciendalabonita",
    "Contacto": "3022457691  3052327998",
    "ota": true
  },
  {
    "municipio": "Ciudad Bolivar",
    "name": "Hotel Los Vitrales",
    "type": "Urbano",
    "alto": "120000",
    "bajo": "92000",
    "Redes Sociales": "hotellosvitrales",
    "Contacto": 3113095317,
    "ota": false
  },
  {
    "municipio": "Ciudad Bolivar",
    "name": "Residencia Su Casa",
    "type": "Urbano",
    "alto": "65000",
    "bajo": "65000",
    "Redes Sociales": "residenciasucasa",
    "Contacto": 3206972127,
    "ota": false
  },
  {
    "municipio": "Ciudad Bolivar",
    "name": "Hotel Farallones del Citara",
    "type": "Campestre",
    "alto": "450000",
    "bajo": "360000",
    "Redes Sociales": "hotelfarallonesdelcitara",
    "Contacto": 3127789739,
    "ota": false
  },
  {
    "municipio": "Ciudad Bolivar",
    "name": "Finca Hotel Lagos del Citara",
    "type": "Campestre",
    "alto": "220000",
    "bajo": "200000",
    "Redes Sociales": "fincahotellagosdelcitara",
    "Contacto": 3122989290,
    "ota": false
  },
  {
    "municipio": "Andes",
    "name": "Hotel San Juan Andes",
    "type": "Urbano",
    "alto": "94000",
    "bajo": "94000 Imp",
    "Redes Sociales": "sanjuan.hotelandes",
    "Contacto": 3117456624,
    "ota": false
  },
  {
    "municipio": "Andes",
    "name": "Finca Hotel Arrayanes",
    "type": "Campestre",
    "alto": "220000",
    "bajo": "200000",
    "Redes Sociales": "fincahotelarrayanes",
    "Contacto": 3108339740,
    "ota": false
  },
  {
    "municipio": "Andes",
    "name": "Altos del Molino",
    "type": "Campestre",
    "alto": "120000",
    "bajo": "105000",
    "Redes Sociales": "altosdelmolino_",
    "Contacto": 3114361768,
    "ota": true
  },
  {
    "municipio": "Andes",
    "name": "Hotel Ecológico Otrolado Lodge",
    "type": "Campestre",
    "alto": "160000",
    "bajo": "140000",
    "Redes Sociales": "No Aplica",
    "Contacto": 3002066029,
    "ota": true
  }
]



*/

/* 

restaurantes 
Municipio	Nombre Restaurantes 	Tipo de Restaurante
Caramanta	Mercado Campesino Caramanta	Urbano Parque Principal
Caramanta	La fonda Caramanta 	Campestre
Caramanta	Las Qsuditas Asados 	Urbano
Caramanta	Perumania	Urbano
La Pintada	Hotel y Restaurante Villa Camila	Campestre
La Pintada	Asados Doña Rosa La Pintada	Urbano
La Pintada	Antojos y delicias Bibi	Urbano
La Pintada	La Casona Hotel y Restaurante	Urbano
Valparaiso	Mulero Café	Campetsre
Valparaiso	Tejiendo Café	Urbano
Valparaiso	Restaurante Los Helechos	Urbano
Valparaiso	Perumania	Urbano
Valparaiso	Bassilico Pasta y Parrilla	Campestre
Jerico	Restaurante el Solar Jerico	Urbano
Jerico	isabelparrillacharcuteria	Urbano
Jerico	Bon Appetit Jerico 	Urbano
Jerico	Tomatitos Pizza y Parrilla	Urbano
Jerico	Ay Chabela Antojos Mexicanos	Urbano
Tamesis	Charco Azul Bar Restaurante	Campestre
Tamesis	Pa Cuates 	Urbano
Tamesis	Mirador del Cipres	Campestre
Tamesis	Pizzabella2016	Urbano
Santa Barbara	La ilduara Restaurante Bar	Urbano
Santa Barbara	Santa Parrilla Burger 	Urbano
Santa Barbara	Kokoriquisimo 	Urbano
Santa Barbara	Restaurante Parrilla Bar El Paisaje	Campestre
Venecia	La Italia Hosteria (Restaurante)	Campestre
Venecia	Restaurante Bar Balcones de Venecia	Urbano
Venecia	LA GRACIELA, Restaurante (Café de Origen)	Urbano
Venecia	Rústico venecia	Urbano
PuebloRico	Cafetería Los Glaciares	No Aplica
PuebloRico	Casas Viejas 	No Aplica
PuebloRico	Restaurante Mi Casita 	No Aplica
PuebloRico	Restaurante Dos Milagros 	No Aplica
Fredonia	Café Candilejas Brunch Reposteria	Urbano
Fredonia	Asados y Restaurante La Granjita 	Urbano
Fredonia	Restaurante Otra Parte	Urbano
Fredonia	No Aplica	No Aplica
Montebello	Restaurante Que Arepazo	Urbano
Montebello	Cafetería Montebravo	Urbano
Montebello	No Aplica	No Aplica
Montebello	No Aplica	No Aplica
Tarso	Meraki Restaurante Tarso	Urbano
Tarso	Divissa Parrilla Bar	Campestre
Tarso	Hotel y Restaurante Balcones del Cauca	Urbano
Tarso	Pollo Loco	Urbano
Urrao	Restaurante Bar La Viñeda	Urbano
Urrao	EcoUrmet S.A.S	Urbano
Urrao	Fonda La San Jose Restaurante Bar	Urbano
Urrao	Casa Bistró Urrao	Urbano
Ciudad Bolivar	Kapeira Coffee 	Urbano
Ciudad Bolivar	Restaurante La Cocina del Gordo	Urbano
Ciudad Bolivar	Theos Restaurante	Campestre
Ciudad Bolivar	Restaurante Cielito Lindo	Urbano
Andes	Restaurante La Antigua	Campestre
Andes	Restaurante Y Cafetería El Chaparral	Urbano
Andes	Restaurante Casa Vieja	No Aplica
Andes	Restaurante W&M Andes	No Aplica
Jardin	Bon Appetit Jardin 	Urbano
Jardin	Macanas Jardin	Urbano
Jardin	Consulado Vegetal Jardin	Urbano
Jardin	Mambru Jardin	Urbano
Jardin	Hotel Restaurante Lago Valdivia	Urbano
Amaga	La Curva Del Gordo - Amagá	Campestre
Amaga	Restaurante Soccer 7 	Campestre
Amaga	Restaurante Uripa Amaga	Urbano
Amaga	Sacramento Restaurante Bar	Urbano

*/
