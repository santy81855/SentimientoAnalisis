export default function getCoordinates(municipio) {
    switch (municipio) {
        case "Amagá":
            return {
                latitude: 6.040036365306395,
                longitude: -75.70279244467295,
                zoom: 15,
                url: "/images/mapa/amaga.jpg",
                restaurants: [
                    {
                        name: "La Curva Del Gordo - Amagá",
                        rating: 4,
                        type: "Campestre",
                    },
                    {
                        name: "Restaurante Soccer 7",
                        rating: 3,
                        type: "Campestre",
                    },
                    {
                        name: "Restaurante Uripa Amaga",
                        rating: 2,
                        type: "Urbano",
                    },
                    {
                        name: "Sacramento Restaurante Bar",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel Casa Real Amaga",
                        rating: 4,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel Campestre Amaga",
                        rating: 3,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel Glamping la Polka",
                        rating: 2,
                        type: "Campestre",
                        ota: false,
                    },
                    {
                        name: "Hotel Hacienda La Bonita",
                        rating: 5,
                        type: "Campestre",
                        ota: true,
                    },
                ],
            };
        case "Fredonia":
            return {
                latitude: 5.926988789474928,
                longitude: -75.67157093824729,
                zoom: 16,
                url: "/images/mapa/fredonia.jpg",
                restaurants: [
                    {
                        name: "Café Candilejas Brunch Reposteria",
                        rating: 4,
                        type: "Urbano",
                    },
                    {
                        name: "Asados y Restaurante La Granjita",
                        rating: 3,
                        type: "Urbano",
                    },
                    {
                        name: "Restaurante Otra Parte",
                        rating: 2,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Prana Cabañas Fredonia",
                        rating: 4,
                        type: "Campestre",
                        ota: false,
                    },
                    {
                        name: "Glamping Encanto de Luna",
                        rating: 3,
                        type: "Campestre",
                        ota: false,
                    },
                    {
                        name: "Hotel Boutique Tahití",
                        rating: 2,
                        type: "Campestre",
                        ota: true,
                    },
                    {
                        name: "Hotel Hacienda La Sierra",
                        rating: 5,
                        type: "Campestre",
                        ota: true,
                    },
                ],
            };
        case "Andes":
            return {
                latitude: 5.656850054649847,
                longitude: -75.87815590124973,
                zoom: 15,
                url: "/images/mapa/andes.jpg",
                restaurants: [
                    {
                        name: "Restaurante La Antigua",
                        rating: 4,
                        type: "Campestre",
                    },
                    {
                        name: "Restaurante Y Cafetería El Chaparral",
                        rating: 3,
                        type: "Urbano",
                    },
                    {
                        name: "Restaurante Casa Vieja",
                        rating: 2,
                        type: "No Aplica",
                    },
                    {
                        name: "Restaurante W&M Andes",
                        rating: 5,
                        type: "No Aplica",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel San Juan Andes",
                        rating: 4,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Finca Hotel Arrayanes",
                        rating: 3,
                        type: "Campestre",
                        ota: false,
                    },
                    {
                        name: "Altos del Molino",
                        rating: 2,
                        type: "Campestre",
                        ota: false,
                    },
                    {
                        name: "Hotel Ecológico Otrolado Lodge",
                        rating: 5,
                        type: "Campestre",
                        ota: true,
                    },
                ],
            };
        case "Ciudad Bolívar":
            return {
                latitude: 5.850597188636879,
                longitude: -76.02107478919025,
                zoom: 15,
                url: "/images/mapa/ciudad-bolivar.jpg",
                restaurants: [
                    { name: "Kapeira Coffee", rating: 4, type: "Urbano" },
                    {
                        name: "Restaurante La Cocina del Gordo",
                        rating: 3,
                        type: "Urbano",
                    },
                    {
                        name: "Theos Restaurante",
                        rating: 2,
                        type: "Campestre",
                    },
                    {
                        name: "Restaurante Cielito Lindo",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel Los Vitrales",
                        rating: 4,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Residencia Su Casa",
                        rating: 3,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel Farallones del Citara",
                        rating: 2,
                        type: "Campestre",
                        ota: false,
                    },
                    {
                        name: "Finca Hotel Lagos del Citara",
                        rating: 5,
                        type: "Campestre",
                        ota: false,
                    },
                ],
            };
        case "Jardín":
            return {
                latitude: 5.598646180731506,
                longitude: -75.81948978778762,
                zoom: 16,
                url: "/images/mapa/jardin.jpg",
                restaurants: [
                    { name: "Bon Appetit Jardin", rating: 4, type: "Urbano" },
                    { name: "Macanas Jardin", rating: 3, type: "Urbano" },
                    {
                        name: "Consulado Vegetal Jardin",
                        rating: 2,
                        type: "Urbano",
                    },
                    { name: "Mambru Jardin", rating: 5, type: "Urbano" },
                    {
                        name: "Hotel Restaurante Lago Valdivia",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Casa Passiflora Hotel Boutique",
                        rating: 4,
                        type: "Campestre",
                        ota: true,
                    },
                    {
                        name: "Gulupa Ecolodge",
                        rating: 3,
                        type: "Campestre",
                        ota: true,
                    },
                    {
                        name: "Candileja hostel",
                        rating: 2,
                        type: "Urbano",
                        ota: true,
                    },
                    {
                        name: "Hotel Plantacion",
                        rating: 5,
                        type: "Urbano",
                        ota: true,
                    },
                    {
                        name: "Hotel Lago Valdivia",
                        rating: 5,
                        type: "Campestre",
                        ota: true,
                    },
                ],
            };
        case "Jericó":
            return {
                latitude: 5.791238194896293,
                longitude: -75.78512186680732,
                zoom: 16,
                url: "/images/mapa/jerico.jpg",
                restaurants: [
                    {
                        name: "Restaurante el Solar Jerico",
                        rating: 4,
                        type: "Urbano",
                    },
                    {
                        name: "isabelparrillacharcuteria",
                        rating: 3,
                        type: "Urbano",
                    },
                    {
                        name: "Bon Appetit Jerico",
                        rating: 2,
                        type: "Urbano",
                    },
                    {
                        name: "Tomatitos Pizza y Parrilla",
                        rating: 5,
                        type: "Urbano",
                    },
                    {
                        name: "Ay Chabela Antojos Mexicanos",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel Atenas Jericó",
                        rating: 4,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Casa Jacaranda Hotel Boutique",
                        rating: 3,
                        type: "Campestre",
                        ota: false,
                    },
                    {
                        name: "Hotel Santa Laura",
                        rating: 2,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel de Cauca Viejo",
                        rating: 5,
                        type: "Campestre",
                        ota: true,
                    },
                ],
            };
        case "La Pintada":
            return {
                latitude: 5.747072490594706,
                longitude: -75.60665830094318,
                zoom: 17,
                url: "/images/mapa/la-pintada.jpg",
                restaurants: [
                    {
                        name: "Hotel y Restaurante Villa Camila",
                        rating: 4,
                        type: "Campestre",
                    },
                    {
                        name: "Asados Doña Rosa La Pintada",
                        rating: 3,
                        type: "Urbano",
                    },
                    {
                        name: "Antojos y delicias Bibi",
                        rating: 2,
                        type: "Urbano",
                    },
                    {
                        name: "La Casona Hotel y Restaurante",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel Real Dinastia",
                        rating: 4,
                        type: "Campestre",
                        ota: true,
                    },
                    {
                        name: "Hotel Villa Camila",
                        rating: 3,
                        type: "Campestre",
                        ota: true,
                    },
                    {
                        name: "Hotel Los Molinos",
                        rating: 2,
                        type: "Urbano",
                        ota: true,
                    },
                    {
                        name: "Hotel Omni La Pintada",
                        rating: 5,
                        type: "Urbano",
                        ota: true,
                    },
                ],
            };
        case "Santa Bárbara":
            return {
                latitude: 5.874078195844012,
                longitude: -75.56757980599338,
                zoom: 16,
                url: "/images/mapa/santa-barbara.jpg",
                restaurants: [
                    {
                        name: "La ilduara Restaurante Bar",
                        rating: 4,
                        type: "Urbano",
                    },
                    {
                        name: "Santa Parrilla Burger",
                        rating: 3,
                        type: "Urbano",
                    },
                    {
                        name: "Kokoriquisimo",
                        rating: 2,
                        type: "Urbano",
                    },
                    {
                        name: "Restaurante Parrilla Bar El Paisaje",
                        rating: 5,
                        type: "Campestre",
                    },
                ],
                hotels: [
                    {
                        name: "Anthalia Glamping",
                        rating: 4,
                        type: "Campestre",
                        ota: true,
                    },
                    {
                        name: "Finca Villa Celina",
                        rating: 3,
                        type: "Campestre",
                        ota: false,
                    },
                    {
                        name: "Hotel el Castillo",
                        rating: 2,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Cabañas la Amapolita",
                        rating: 5,
                        type: "Campestre",
                        ota: true,
                    },
                ],
            };
        case "Támesis":
            return {
                latitude: 5.665117423183381,
                longitude: -75.71481777833525,
                zoom: 16,
                url: "/images/mapa/tamesis.png",
                restaurants: [
                    {
                        name: "Charco Azul Bar Restaurante",
                        rating: 4,
                        type: "Campestre",
                    },
                    {
                        name: "Pa Cuates",
                        rating: 3,
                        type: "Urbano",
                    },
                    {
                        name: "Mirador del Cipres",
                        rating: 2,
                        type: "Campestre",
                    },
                    {
                        name: "Pizzabella2016",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Casa Hotel La Albertina",
                        rating: 4,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Monte Mágico Chalets",
                        rating: 3,
                        type: "Campestre",
                        ota: false,
                    },
                    {
                        name: "Hotel Vegas del Rio",
                        rating: 2,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel Boutique Cetro",
                        rating: 5,
                        type: "Campestre",
                        ota: false,
                    },
                ],
            };
        case "Valparaíso":
            return {
                latitude: 5.616009581907938,
                longitude: -75.62463843609666,
                zoom: 16,
                url: "/images/mapa/valparaiso.jpg",
                restaurants: [
                    { name: "Mulero Café", rating: 4, type: "Campetsre" },
                    { name: "Tejiendo Café", rating: 3, type: "Urbano" },
                    {
                        name: "Restaurante Los Helechos",
                        rating: 2,
                        type: "Urbano",
                    },
                    { name: "Perumania", rating: 5, type: "Urbano" },
                    {
                        name: "Bassilico Pasta y Parrilla",
                        rating: 5,
                        type: "Campestre",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel la Ceiba",
                        rating: 4,
                        type: "Urbano",
                        ota: true,
                    },
                    {
                        name: "Hotel Las Vegas",
                        rating: 3,
                        type: "Urbano",
                        ota: true,
                    },
                    {
                        name: "Hotel Guadalejo",
                        rating: 2,
                        type: "Campestre",
                        ota: true,
                    },
                    {
                        name: "La Posada Del Palmar",
                        rating: 5,
                        type: "Urbano",
                        ota: true,
                    },
                ],
            };
        case "Venecia":
            return {
                latitude: 5.963868919879134,
                longitude: -75.73504991426107,
                zoom: 16,
                url: "/images/mapa/venecia.jpg",
                restaurants: [
                    {
                        name: "La Italia Hosteria (Restaurante)",
                        rating: 4,
                        type: "Campestre",
                    },
                    {
                        name: "Restaurante Bar Balcones de Venecia",
                        rating: 3,
                        type: "Urbano",
                    },
                    {
                        name: "LA GRACIELA, Restaurante (Café de Origen)",
                        rating: 2,
                        type: "Urbano",
                    },
                    {
                        name: "Rústico venecia",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel Granja del Café",
                        rating: 4,
                        type: "Campestre",
                        ota: true,
                    },
                    {
                        name: "La Divisa Hotel Boutique",
                        rating: 3,
                        type: "Campestre",
                        ota: true,
                    },
                    {
                        name: "Nativo Hostel Venecia",
                        rating: 2,
                        type: "Urbano",
                        ota: true,
                    },
                    {
                        name: "Finca Hotel Carmonia del Bosque",
                        rating: 5,
                        type: "Campestre",
                        ota: true,
                    },
                ],
            };
        case "Urrao":
            return {
                latitude: 6.313861448892473,
                longitude: -76.13146671902038,
                zoom: 15,
                url: "/images/mapa/urrao.jpg",
                restaurants: [
                    {
                        name: "Restaurante Bar La Viñeda",
                        rating: 4,
                        type: "Urbano",
                    },
                    {
                        name: "EcoUrmet S.A.S",
                        rating: 3,
                        type: "Urbano",
                    },
                    {
                        name: "Fonda La San Jose Restaurante Bar",
                        rating: 2,
                        type: "Urbano",
                    },
                    {
                        name: "Casa Bistró Urrao",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel El Viajero",
                        rating: 4,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel La Casona",
                        rating: 3,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel La Cabaña",
                        rating: 2,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel La Cabaña",
                        rating: 5,
                        type: "Urbano",
                        ota: false,
                    },
                ],
            };
        case "Tarso":
            return {
                latitude: 5.864901629075786,
                longitude: -75.82245801874683,
                zoom: 16.5,
                url: "/images/mapa/tarso.jpg",
                restaurants: [
                    {
                        name: "Meraki Restaurante Tarso",
                        rating: 4,
                        type: "Urbano",
                    },
                    {
                        name: "Divissa Parrilla Bar",
                        rating: 3,
                        type: "Campestre",
                    },
                    {
                        name: "Hotel y Restaurante Balcones del Cauca",
                        rating: 2,
                        type: "Urbano",
                    },
                    {
                        name: "Pollo Loco",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel y Restaurante Balcones del Cauca",
                        rating: 4,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel La Casona",
                        rating: 3,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel La Cabaña",
                        rating: 2,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel La Cabaña",
                        rating: 5,
                        type: "Urbano",
                        ota: false,
                    },
                ],
            };
        case "Pueblorrico":
            return {
                latitude: 5.79163488717435,
                longitude: -75.84117075661426,
                zoom: 16,
                url: "/images/mapa/pueblorrico.jpg",
                restaurants: [
                    {
                        name: "Cafetería Los Glaciares",
                        rating: 4,
                        type: "No Aplica",
                    },
                    {
                        name: "Casas Viejas",
                        rating: 3,
                        type: "No Aplica",
                    },
                    {
                        name: "Restaurante Mi Casita",
                        rating: 2,
                        type: "No Aplica",
                    },
                    {
                        name: "Restaurante Dos Milagros",
                        rating: 5,
                        type: "No Aplica",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel La Casona",
                        rating: 4,
                        type: "No Aplica",
                        ota: false,
                    },
                    {
                        name: "Hotel La Cabaña",
                        rating: 3,
                        type: "No Aplica",
                        ota: false,
                    },
                    {
                        name: "Hotel La Cabaña",
                        rating: 2,
                        type: "No Aplica",
                        ota: false,
                    },
                    {
                        name: "Hotel La Cabaña",
                        rating: 5,
                        type: "No Aplica",
                        ota: false,
                    },
                ],
            };
        case "Caramanta":
            return {
                latitude: 5.54919140601753,
                longitude: -75.64471547110624,
                zoom: 16,
                url: "/images/mapa/caramanta.png",
                restaurants: [
                    {
                        name: "Mercado Campesino Caramanta",
                        rating: 4,
                        type: "Urbano Parque Principal",
                    },
                    {
                        name: "La fonda Caramanta",
                        rating: 3,
                        type: "Campestre",
                    },
                    {
                        name: "Las Qsuditas Asados",
                        rating: 2,
                        type: "Urbano",
                    },
                    {
                        name: "Perumania",
                        rating: 5,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel la Ruana Caramanta",
                        rating: 4,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel el Abuelo",
                        rating: 3,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel El Patio",
                        rating: 2,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Finca Hotel El Rancho de Monchito",
                        rating: 5,
                        type: "Campestre",
                        ota: false,
                    },
                ],
            };
        case "Montebello":
            return {
                latitude: 5.945406287891866,
                longitude: -75.52398338067638,
                zoom: 17,
                url: "/images/mapa/montebello.jpg",
                restaurants: [
                    {
                        name: "Restaurante Que Arepazo",
                        rating: 4,
                        type: "Urbano",
                    },
                    {
                        name: "Cafetería Montebravo",
                        rating: 3,
                        type: "Urbano",
                    },
                ],
                hotels: [
                    {
                        name: "Hotel La Casona",
                        rating: 4,
                        type: "Urbano",
                        ota: false,
                    },
                    {
                        name: "Hotel La Cabaña",
                        rating: 3,
                        type: "Urbano",
                        ota: false,
                    },
                ],
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
Municipio	Nombre Hotel 	Tipo de Hotel	Tarifa T Alta	Tarifa T Baja 	Redes Sociales	Contacto	OTA'S
Caramanta	Hotel la Ruana Caramanta	Urbano	80000 Imp Inc	80000 Imp Inc	hotellaruanacaramanta 5.4k	3174417632	no
Caramanta	Hotel el Abuelo 	Urbano	80000  Imp Inc	80000  Imp Inc	hotelabuelocaramanta 7.3	3182036624/3046006511	no
Caramanta	Hotel El Patio	Urbano	Ya no exixte. 	Ya no exixte. 	no	3022599649	no
Caramanta	Finca Hotel El Rancho de Monchito	Campestre	110 - 150 Imp Inc	80 - 120 Imp Inc	elranchode_monchito 499	3183251118	no
La Pintada	Hotel Real Dinastia 	Campestre	360000 + 68 Imp	253000 + 50 Imp	hotelrealdinastia	3187072114	si
La Pintada	Hotel Villa Camila	Campestre	 356000 Imp Inc	 405000 Imp Inc	villacamilahotel 	3052367136	si
La Pintada	Hotel Los Molinos   	Urbano	60000  Imp Inc	85000 Imp Inc	hotellosmolinoslp	3136410904	no
La Pintada	Hotel Omni La Pintada	Urbano	80000 Imp Inc	110000  Imp Inc	hotelomnilp	3136410904	no
Valparaiso	Hotel la Ceiba	Urbano	168000 Inc Imp	180000 Imp Inc	hotellaceibavalparaiso	3022342244	si
Valparaiso	Hotel Las Vegas	Urbano 	75000 Imp Inc	65000 Imp Inc	valparaisolasvegas	3148362031	no
Valparaiso	Hotel Guadalejo	Campestre	280000 Imp Inc	340000 Imp Inc	ecohotel_guadalejo	3226880992	no
Valparaiso	La Posada Del Palmar	Urbano	85000 Imp Inc	75000 Imp Inc	hotel_laposadaelpalmar	6044843791  6048493791	no
Jerico	Hotel Atenas Jericó	Urbano	200000 Imp Inc	140000 Imp Inc	hotelatenasjerico	3127693291	si
Jerico	Casa Jacaranda Hotel Boutique	Campestre	490000 Imp Inc	550000 Imp Inc	hotel_casa_jacaranda	3173780567	si
Jerico	Hotel Santa Laura	Urbano	350000 Imp Inc	210000 Imp Inc	hotelsantalaurajerico	3124086033	si
Jerico	Hotel de Cauca Viejo	Campestre	710.000 +  148.900 Imp	439200 + 97460 Imp Imp	caucaviejo	6015879566	si
Tamesis	Casa Hotel La Albertina 	Urbano - Campestre	250000 Imp Inc	250000 Imp Inc	la_albertina_tamesis	3205218750	no
Tamesis	Monte Mágico Chalets	Campestre	380000  Imp Inc	360000  Imp Inc	montemagicotamesis	3013354728	si
Tamesis	Hotel Vegas del Rio	Urbano	90 - 140 Imp Inc	80 - 120 Imp Inc	hotelvegasdelrio	3002777549	no
Tamesis	Hotel Boutique Cetro	Campestre	330 - 470 Imp Inc	260 - 350 Imp Inc	hotelcetro	3007710429	no
Santa Barbara	Anthalia Glamping	Campestre	612.000 + 61.200 Imp	342.000 + 34.200 Imp	anthalia.glamping	3113455073	si
Santa Barbara	Finca Villa Celina	Campestre	300000 - 350000 Imp Inlc	230000 - 250000 Imp Inc	fincavillacelinast	3162280213	no
Santa Barbara	Hotel el Castillo	Urbano	150000 Imp Inc	130000 Imp Inc	elcastillosanta_	3023607258	no
Santa Barbara	Cabañas la Amapolita (Versalles - St. B)	Campestre	420000 Imp Inc	350000 Imp Inc	cabanas_la_amapolita	3225765639	si
Venecia	Hotel Granja del Café	Campestre	 429000 Imp Inc	290000 Imp Inc	granjadelcafe 	3002514035	si
Venecia	La Divisa Hotel Boutique	Campestre	470.000 + 137 Imp	319.000 + 93000 Imp	ladivisa_finca	3014026356	si
Venecia	Nativo Hostel Venecia	Urbano	135000 + 39000 Imp	94000 + 28000 Imp	nativohostelvenecia	3106151833	si
Venecia	Finca Hotel Carmonia del Bosque	Campestre	286.000 Imp Inc	286.000 Imp Inc	carmoniadelbosque	300 786 11 19.	si
PuebloRico	El viajero Hospedaje	Urbano	55000 Imp Inc	45000 Imp Inc	hotel_el_viajero_pueblorrico	3136447427	no
PuebloRico	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	no	
PuebloRico	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	no	no
PuebloRico	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	no	no
Fredonia	Prana Cabañas Fredonia	Campestre	160000 Imp Inc	140000 Imp Inc	prana.cabana	3147270138	
Fredonia	Glamping Encanto de Luna	Campestre	350000 Imp Inc	300000 Imp Inc	glampingencantodeluna	3206641951	si
Fredonia	Hotel Boutique Tahití	Campestre	659000 + 126000 Imp	 644120 + 122400 Imp	tahitihotel	3243008934	si
Fredonia	Hotel Hacienda La Sierra	Campestre	750000 Imp Inc	550000 Imp Inc	haciendalasierra	3244532154	si
Montebello	Meraki EcoLodge	Campestre			merakiecolodge	3183407703	no
Montebello	Hotel Escorial Montebello 	Urbano	75000 Imp Inc	60000 Imp Inc	elescorialhotel	3126157201	no
Montebello	Cabañas Las Nenas	Campestre	180000 Imp Inc	140000 Imp Inc	no	3122882798 - 	si
Montebello	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	no
Tarso	Reserva la Colina	Campestre	165000 Imp Inc	145000 Imp Inc	reservalacolina_	 313 5969025	si
Tarso	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	no
Tarso	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	no
Tarso	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	No Aplica	no
Urrao	Hotel Colonial Urrao	Urbano	95000 Imp Inc	90000 Imp Inc	hotelcolonialurrao	323 4935313	no
Urrao	Hotel Flores del Paraiso Urrao	Urbano	136000 Imp Inc	126000 Imp Inc	hotelfloresdelparaisourrao	3104151508	no
Urrao	Parque Orquideas	Urbano	80000 Imp Inc	80000 Imp Inc	hotelorquideasurrao	3216100525	si
Urrao	Hotel el Turista de Urrao	Urbano	70000 Imp Inc	70000 Imp Inc	elturistadeurrao	3117152545	no
Jardin	Casa Passiflora Hotel Boutique	Campestre	 626480 + 119000 Imp	433600 + 82400 Imp	hotel_casa_passiflora	3182421000	si
Jardin	Gulupa Ecolodge	Campestre	 502800 Imp Inc	342000 Imp Inc	gulupaecolodge 	3023801155	si
Jardin	Candileja hostel	Urbano	129000 Imp Inc	119000 Imp Inc	candilejahostel	3226818994	si
Jardin	Hotel Plantacion	Urbano	356000 + 68000 Imp	336000 + 64000 Imp	hotelplantacion	3138501833	si
Jardin	Hotel Lago Valdivia	Campestre	689000 + 109000 Imp	 667000 + 109000 Imp	hotelrestaurantelagovaldivia	3113897979	si
Amaga	Hotel Casa Real Amaga	Urbano	95000 Imp Inc	90000 Imp Inc	hotelcasarealamaga	3128046532	no
Amaga	Hotel Campestre Amaga	Urbano 	70000 Imp Inc	70000 Imp Inc	hotel_campestre_amaga	3194978674	no
Amaga	Hotel Glamping la Polka	Campestre	489000 Imp Inc	289000 Imp Inc	hotelglamping	3118394652	no
Amaga	Hotel Hacienda La Bonita	Campestre	421000 + 122000 Imp	144000 + 42000 Imp	hotelhaciendalabonita	3022457691  3052327998	si
Ciudad Bolivar	Hotel Los Vitrales	Urbano	120000 Imp Inc	92000 Imp Inc	hotellosvitrales	3113095317	no
Ciudad Bolivar	Residencia Su Casa 	Urbano	65000 Imp Inc	65000 Imp Inc	residenciasucasa	3206972127	no
Ciudad Bolivar	Hotel Farallones del Citara	Campestre	450000 Imp Inc	360000 Imp Inc	hotelfarallonesdelcitara	3127789739	no
Ciudad Bolivar	Finca Hotel Lagos del Citara	Campestre	220000 Imp Inc	200000 Imp Inc	fincahotellagosdelcitara	3122989290	no
Andes	Hotel San Juan Andes	Urbano	94000 Imp Inc	94000 Imp	sanjuan.hotelandes	3117456624	no
Andes	Finca Hotel Arrayanes	Campestre	220000 Imp Inc	200000 Imp Inc	fincahotelarrayanes	3108339740	no
Andes	Altos del Molino	Campestre	120000 Imp Inc	105000 Imp Inc	altosdelmolino_	3114361768	si
Andes	Hotel Ecológico Otrolado Lodge	Campestre	160000 Imp Inc	140000 Imp Inc	No Aplica	3002066029	si


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
