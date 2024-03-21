import './App.css';

const products = [
    {
        id:1,
        titulo:"Auriculares inalámbricos Bose Sport Earbuds",
        precio:220000,
        img:"https://blog.stylestore.com.ar/wp-content/uploads/2022/07/mejores-auriculares-inalambricos-bose-sport-300x300.jpg",
        categoria:"Headphones",
        descripcion:"Ajuste seguro y cómodo. Sonido nítido, equilibrado y realista sin importar el volumen. Aplicación Bose Music gratuita. Control táctil. Aislación del ruido del entorno y resistencia a la humedad.",
        autor:"Bose",
        año:2022
    },
    {
        id:2,
        titulo:"Auriculares AirPods Pro",
        precio:210000,
        img:"https://blog.stylestore.com.ar/wp-content/uploads/2021/12/apple-airpods-pro-300x300.jpg",
        categoria:"Headphones", 
        descripcion:"Ajuste personalizable, almohadillas de silicona de tres tamaños diferentes, orificios de ventilación para ecualizar la presión: no vas a sentir que los tenés puestos. Excepcional  cancelación activa de ruido con  detección de sonido exterior y onda antifase.  Estuche de carga MagSafe con indicador.",
        autor:"Apple",
        año:2023, 
    },
    {  
        id:100,
        titulo:"Apple MacBook Air M2" , 
        precio:1700000 , 
        img:"https://www.ventasrosario.com.ar/wp-content/uploads/2023/06/design-hero_endframe__olurqzgtbh6e_large.jpg" ,
        categoria:"Notebooks" ,
        descripcion:"Cuando Apple actualizó la MacBook Air a su último procesador M2, no se quedó ahí. La computadora portátil se rediseñó por completo, comenzando con el chasis que adoptó el mismo diseño general que la MacBook Pro más grande. Se eliminó el icónico cono de la MacBook y se recortó el chasis, lo que dio como resultado una computadora portátil minimalista y elegante que se encuentra entre las más delgadas jamás fabricadas con solo 0.44 pulgadas de grosor.", 
        autor:"Apple",
        año:2024,
    },
    {
        id:101,
        titulo:"Dell XPS 13 (9315)" ,
        precio:2700000 ,
        img:"https://redstore.am/uploads/shop/products/large/a3073d4d107d93fe883078da0c528fc8.jpg" , 
        categoria:"Notebooks" , 
        descripcion:"Ninguna laptop en años recientes ha tenido un impacto mayor que la XPS 13. Esta fue la que comenzó la carrera por los biseles delgados en 2015, cosa que influyó sobre absolutamente todos los dispositivos que cuentan con pantalla.", 
        autor:"Dell", 
        año:2024,
    },
    {
        id:1001,
        titulo:"Samsung Galaxy Watch6 Classic" , 
        precio:270000 ,
        img:"https://images.samsung.com/is/image/samsung/p6pim/ar/2307/gallery/ar-galaxy-watch6-classic-r955-sm-r950nzsaaro-537402434?$650_519_PNG$" , 
        categoria:"SmartWatch" ,
        descripcion:"Samsung Galaxy Watch6 Classic, perteneciente a la última generación de relojes de la firma surcoreana. Como su propio nombre avanza, este modelo apuesta por un diseño de estilo clásico, tanto por la correa como por la construcción de su caja.", 
        autor:"Samsung",
        año:2024,
    },
    {
        id:1002 ,
        titulo:"Apple Watch Ultra 2" ,
        precio:240000 ,
        img:"https://www.ventasrosario.com.ar/wp-content/uploads/2023/10/MT633_VW_34FRwatch-49-titanium-ultra2_VW_34FRwatch-face-49-ocean-ultra2_VW_34FR.jpg" , 
        categoria:"SmartWatch" ,
        descripcion:"El Apple Watch Ultra 2 también merece un puesto entre los mejores smartwatches del mercado. Si tienes un iPhone, este Watch Ultra 2 es el compañero perfecto, pues te permitirá disfrutar de funciones muy útiles desde tu muñeca.", 
        autor:"Apple", 
        año:2023
    },
    {
        id:2000,
        titulo:"Apple iPhone 15" ,
        precio:1000000 ,
        img:"https://www.elindependiente.com/wp-content/uploads/2024/01/1-2-980x653.jpg" , 
        categoria:"Smartphones" , 
        descripcion:"El iPhone 15 llega para romper con los estándares. Su diseño robusto de aluminio y vidrio tintado en masa resiste agua y polvo. La pantalla Super Retina XDR de 6,1 brilla el doble bajo el sol. La cámara principal de 48 MPx con teleobjetivo x2 captura detalles asombrosos. Retratos de última generación permiten ajustar el enfoque postcaptura.",
        autor:"Apple",
        año:2023
    },
    {
        id:2001,
        titulo:"Samsung Galaxy S23+" , 
        precio:1100000 ,
        img:"https://www.elindependiente.com/wp-content/uploads/2024/01/2-2-980x653.jpg" , 
        categoria:"Smartphones" ,
        descripcion:"Un mundo sostenible con llega con el Galaxy S23+ de Samsung, confeccionado con vidrio reciclado, película PET y tintes naturales. La caja, elaborada con papel reciclado, y la película protectora a base de papel refuerzan nuestro compromiso ecológico.", 
        autor:"Samsung", 
        año:2023
    },
    {
        id:2002 ,
        titulo:"One plus 9 5G" ,
        precio:900000 ,
        img:"https://www.elindependiente.com/wp-content/uploads/2024/01/3-1-980x653.jpg" ,
        categoria:"Smartphones" ,
        descripcion:"Si lo que se busca es el mejor móvil calidad precio, entonces el modelo Oneplus 9 5G es probablemente la opción ideal. Para empezar, tiene una batería de 4500 mAh modelo Warp Charge 65T. Esto supone que con tan solo cargarlo 15 minutos, tendrá suficiente energía como para todo el día. Además, tan solo requiere de 29 minutos de carga para alcanzar el 100% de su capacidad.",
        autor:"OnePlus",
        año:2023
    },
    {
        id:3000 ,
        titulo:"Apple iPad Air",
        precio:1000000 ,
        img:"https://cdn.mos.cms.futurecdn.net/LtvLpRoubhzvaQLDgtSLQS-970-80.jpg.webp" ,
        categoria:"Tablets" ,
        descricpion:"El iPad Air 2022 de Apple es el primer Air que tiene un chip M1 y lleva esta tableta de $ 599 a nuevas alturas. Con una gran pantalla y mucha potencia, es la mejor tableta para la mayoría.", 
        autor:"Apple", 
        año:2022
    },
    {
        id:2003,
        titulo:"Xiaomi Mi 12" , 
        precio:200000 , 
        img:"https://www.elindependiente.com/wp-content/uploads/2024/01/4-1-980x653.jpg" ,
        categoria:"Smartphones" , 
        descricpion:"De entre los móviles Xiaomi este es, quizá, el mejor. Tiene 50 megapíxeles en su cámara, además de un modo noche absolutamente mejorado. Además, destaca por su sustancial mejoría en el tema del procesador con respecto a modelos anteriores. Incorpora un chip de última generación de 4 nm.",
        autor:"Xiaomi",
        año:2022
    },
    {
        id:3001,
        titulo:"OnePlus Pad" ,
        precio:1500000 ,
        img:"https://i.pinimg.com/236x/71/fe/4f/71fe4fc2c6b5ba308af2cb3cc0b76d66.jpg" ,
        categoria:"Tablets" ,
        descricpion:"La OnePlus Pad es una tableta Android por la que vale la pena entusiasmarse. Con una vívida pantalla de 11,6 pulgadas y 144 Hz, una enorme cámara trasera de 13 MP, bordes curvos y una gran duración de batería, la primera tableta de OnePlus se destaca de la competencia.",
        autor:"OnePlus",
        año:2021
    },
    {
        id:102,
        titulo:"Razer Blade 14",
        precio:2000000,
        img:"https://static1.pocketlintimages.com/wordpress/wp-content/uploads/wm/158791-laptops-review-razer-blade-14-review-image7-bdmxrnihng.jpg",
        categoria:"Notebooks",
        descricpion:"La Razer Blade 14 se siente como algo imposible. ¿Una tarjeta gráfica RTX 3080 en una laptop delgada de 14 pulgadas? Sí, y también viene con un rendimiento impresionante.",
        autor:"Razer",
        año:2024
    },
    {
        id:103,
        titulo:"Asus ZenBook 14 OLED" ,
        precio:6000000,
        img:"https://dlcdnwebimgs.asus.com/gain/838fbdac-6d10-4190-8e52-d4b9463f5d23/w800",
        categoria:"Notebooks",
        descricpion:"A veces, las empresas tienen que tomar atajos para adaptar una computadora portátil a un precio de $700 dólares. La pantalla suele ser una de las víctimas, con un panel que podría verse afectado en términos de calidad de color y contraste. La ZenBook 14 OLED es una excepción, ya que ofrece una espectacular pantalla OLED que es brillante, colorida y muestra negros como la tinta. Es equivalente a que las pantallas de las computadoras portátiles cuesten el doble.",
        autor:"Asus",
        año:2024
    },
    {
        id:3,
        titulo:"Auriculares Samsung Galaxy Buds Pro",
        precio:150000,
        img:"https://blog.stylestore.com.ar/wp-content/uploads/2022/07/mejores-auriculares-inalambricos-samsung-galaxy-buds-pro-300x300.jpg",
        categoria:"Headphones",
        descricpion:"Sonido 360° envolvente y realista. Cancelación de ruido activa inteligente que permite intercambiar sin problemas entre cancelación de ruido y sonido ambiente. Resistente al agua con IPX7.",
        autor:"Samsung",
        año:2021
    },

]

export const carrousel = [
    {id: "C1", img:"https://wallpapers.com/images/hd/digital-art-of-apple-logo-4k-1yj9mjlmu5srdina.jpg"},
    {id: "C2", img:"https://techtalk.com.pk/wp-content/uploads/2023/06/Samsung-is-Developing-the-Large-Language-Model-LLM-for-Internal-Use-like-CHATGPT.webp"},
    {id: "C3", img:"https://droider.ru/wp-content/uploads/2012/07/xiaomi-logo.jpg"},
    {id: "C4", img:"https://www.218tv.net/wp-content/uploads/2019/12/OnePlus-Logo.jpg"},
]; 

export const cargarProductos = new Promise ((resolve) => {
    setTimeout (()=> {
        resolve (products);
    },);
});

export const cargarProducto = (id) => {
    return products.find ((prod) => prod.id == id);
};