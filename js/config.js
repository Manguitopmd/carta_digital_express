const CONFIG = {
    // Nombre del negocio, aparece en la página de inicio y el mapa
    businessName: "Don Tiburón",

    // Eslogan del negocio, mostrado en la página de inicio
    slogan: "¡El sabor del mar en cada bocado!",

    // Número de WhatsApp para pedidos (sin espacios ni signos, formato internacional)
    whatsappNumber: "+51961360935",

    // Moneda para precios, aparece en carta y carrito
    currency: "S/",

    // Dirección del negocio, mostrada en la página de inicio
    address: "Av. Los Delfines 456, Urbanización Miraflores, Piura, Perú",

    // Coordenadas para el mapa en la página de inicio
    map: {
        lat: -5.194492,
        lng: -80.632821,
        zoom: 15
    },

    // Horarios de atención, para reservas y página de inicio
    businessHours: {
        monday: [
            { start: '11:00', end: '22:00' }
        ],
        tuesday: [
            { start: '11:00', end: '22:00' }
        ],
        wednesday: [
            { start: '11:00', end: '22:00' }
        ],
        thursday: [
            { start: '11:00', end: '22:00' }
        ],
        friday: [
            { start: '11:00', end: '22:00' }
        ],
        saturday: [
            { start: '11:00', end: '22:00' }
        ],
        sunday: [
            { start: '11:00', end: '22:00' }
        ]
    },

    // Mínimo de horas de anticipación para reservas
    minBookingHours: 48,

    // Lista de cremas disponibles para personalizar ítems
    sauces: [
        { id: "1", name: "Salsa Criolla" },
        { id: "2", name: "Canchita Tostada" },
        { id: "3", name: "Salsa de Ají" },
        { id: "4", name: "Crema de Rocoto" },
        { id: "5", name: "Mayonesa Casera" },
        { id: "6", name: "Salsa de Huacatay" },
        { id: "7", name: "Limón" }
    ],

    // Información de la agencia creadora, para el crédito en inicio
    agency: {
        name: "Manguito Publicidad",
        website: "https://manguitopmd.github.io/biolink/",
        whatsapp: "+51961360935",
        socials: {
            instagram: "",
            facebook: "",
            tiktok: ""
        }
    },

    // Redes sociales del negocio, para botones en la página de inicio
    socials: {
        instagram: "https://www.instagram.com/manguitopublicidad/",
        facebook: "https://web.facebook.com/manguitopublicidadpmd",
        tiktok: "https://www.tiktok.com/@manguitopublicidad",
        twitter: "",
        youtube: ""
    }
};