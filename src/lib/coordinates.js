export default function getCoordinates(municipio) {
    switch (municipio) {
        case "Amagá":
            return {
                latitude: 6.040036365306395,
                longitude: -75.70279244467295,
                zoom: 16,
            };
        case "Fredonia":
            return {
                latitude: 5.926988789474928,
                longitude: -75.67157093824729,
                zoom: 17,
            };
        case "Andes":
            return {
                latitude: 5.656850054649847,
                longitude: -75.87815590124973,
                zoom: 16,
            };
        case "Ciudad Bolívar":
            return {
                latitude: 4.579486605898935,
                longitude: -74.15755105293859,
                zoom: 15,
            };
        case "Jardín":
            return {
                latitude: 5.598646180731506,
                longitude: -75.81948978778762,
                zoom: 17,
            };
        case "Jericó":
            return {
                latitude: 5.791238194896293,
                longitude: -75.78512186680732,
                zoom: 17,
            };
        case "La Pintada":
            return {
                latitude: 5.747072490594706,
                longitude: -75.60665830094318,
                zoom: 18,
            };
        case "Santa Bárbara":
            return {
                latitude: 5.874078195844012,
                longitude: -75.56757980599338,
                zoom: 17,
            };
        case "Támesis":
            return {
                latitude: 5.665117423183381,
                longitude: -75.71481777833525,
                zoom: 17,
            };
        case "Valparaíso":
            return {
                latitude: 5.616009581907938,
                longitude: -75.62463843609666,
                zoom: 17,
            };
        case "Venecia":
            return {
                latitude: 5.963868919879134,
                longitude: -75.73504991426107,
                zoom: 17,
            };
        case "Urrao":
            return {
                latitude: 6.313861448892473,
                longitude: -76.13146671902038,
                zoom: 16,
            };
        case "Tarso":
            return {
                latitude: 5.864901629075786,
                longitude: -75.82245801874683,
                zoom: 17.5,
            };
        case "Pueblorrico":
            return {
                latitude: 5.79163488717435,
                longitude: -75.84117075661426,
                zoom: 17,
            };
        case "Caramanta":
            return {
                latitude: 5.54919140601753,
                longitude: -75.64471547110624,
                zoom: 17,
            };
        case "Montebello":
            return {
                latitude: 5.945406287891866,
                longitude: -75.52398338067638,
                zoom: 18,
            };
        default:
            break;
    }
}

/*
    "Amagá",
    "Fredonia",
    "Andes" = 5.656850054649847, -75.87815590124973,
    "Ciudad Bolívar" = 4.579486605898935, -74.15755105293859,
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
