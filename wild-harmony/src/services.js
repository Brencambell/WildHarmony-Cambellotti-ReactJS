const products = [
    {
      id: 1,
      image: 'url-imagen-1',
      category: 'maquillaje',
      name: 'Rubor Orgánico',
      description: 'Añade un toque de color natural a tus mejillas.',
      price: 12.99,
    },
    {
      id: 2,
      image: 'url-imagen-2',
      category: 'cuidado facial',
      name: 'Limpiador Facial de Aloe Vera',
      description: 'Limpia suavemente mientras hidrata tu piel.',
      price: 18.75,
    },
    {
      id: 3,
      image: 'url-imagen-3',
      category: 'cuidado corporal',
      name: 'Crema Corporal de Coco',
      description: 'Hidratación intensa con aroma a coco.',
      price: 22.50,
    },
    {
      id: 4,
      image: 'url-imagen-4',
      category: 'maquillaje',
      name: 'Barra de Labios Natural',
      description: 'Color duradero y cuidado para tus labios.',
      price: 14.99,
    },
    {
      id: 5,
      image: 'url-imagen-5',
      category: 'cuidado facial',
      name: 'Mascarilla de Arcilla',
      description: 'Purifica y revitaliza tu piel con arcilla natural.',
      price: 27.00,
    },
    {
      id: 6,
      image: 'url-imagen-6',
      category: 'cuidado corporal',
      name: 'Aceite de Masaje Relajante',
      description: 'Relaja cuerpo y mente con una mezcla de aceites esenciales.',
      price: 19.99,
    },
    {
      id: 7,
      image: 'url-imagen-7',
      category: 'maquillaje',
      name: 'Sombra de Ojos Mineral',
      description: 'Colores vibrantes y naturales para tus párpados.',
      price: 10.50,
    },
    {
      id: 8,
      image: 'url-imagen-8',
      category: 'cuidado facial',
      name: 'Tónico Facial de Rosas',
      description: 'Refresca y equilibra tu piel con agua de rosas.',
      price: 15.25,
    },
    {
      id: 9,
      image: 'url-imagen-9',
      category: 'cuidado corporal',
      name: 'Exfoliante Corporal de Café',
      description: 'Elimina células muertas y deja la piel suave con café orgánico.',
      price: 28.00,
    },
    {
      id: 10,
      image: 'url-imagen-10',
      category: 'maquillaje',
      name: 'Pintalabios Mate',
      description: 'Acabado mate y colores intensos para tus labios.',
      price: 13.49,
    },
    {
      id: 11,
      image: 'url-imagen-11',
      category: 'cuidado facial',
      name: 'Suero de Ácido Hialurónico',
      description: 'Hidratación profunda y reducción de líneas finas.',
      price: 32.99,
    },
    {
      id: 12,
      image: 'url-imagen-12',
      category: 'cuidado corporal',
      name: 'Loción Corporal de Vainilla',
      description: 'Hidratación con fragancia suave de vainilla.',
      price: 21.75,
    },
    {
      id: 13,
      image: 'url-imagen-13',
      category: 'maquillaje',
      name: 'Máscara de Pestañas Natural',
      description: 'Volumen y longitud sin químicos agresivos.',
      price: 15.99,
    },
    {
      id: 14,
      image: 'url-imagen-14',
      category: 'cuidado facial',
      name: 'Aceite Limpiador de Manzanilla',
      description: 'Elimina suavemente el maquillaje y las impurezas.',
      price: 24.50,
    },
    {
      id: 15,
      image: 'url-imagen-15',
      category: 'cuidado corporal',
      name: 'Bálsamo Labial de Menta',
      description: 'Hidratación y frescura para tus labios con aroma a menta.',
      price: 7.99,
    },
    {
      id: 16,
      image: 'url-imagen-16',
      category: 'maquillaje',
      name: 'Polvo Compacto Mineral',
      description: 'Acabado mate y natural para tu piel.',
      price: 19.25,
    },
    {
      id: 17,
      image: 'url-imagen-17',
      category: 'cuidado facial',
      name: 'Crema Antiarrugas de Camelia',
      description: 'Combate los signos del envejecimiento con camelia.',
      price: 39.99,
    },
    {
      id: 18,
      image: 'url-imagen-18',
      category: 'cuidado corporal',
      name: 'Aceite Corporal de Lavanda',
      description: 'Relajación y nutrición con aroma a lavanda.',
      price: 26.50,
    },
    {
      id: 19,
      image: 'url-imagen-19',
      category: 'maquillaje',
      name: 'Esmalte de Uñas Libre de Químicos',
      description: 'Colores vibrantes y duraderos sin ingredientes tóxicos.',
      price: 9.75,
    },
    {
      id: 20,
      image: 'url-imagen-20',
      category: 'cuidado facial',
      name: 'Crema Hidratante de Rosa Mosqueta',
      description: 'Hidratación profunda y restauración con aceite de rosa mosqueta.',
      price: 28.99,
    },
  ];

  //getProduct > recibe un id y nis devuelve un porducto. Funcion que retorna una promesa
  export const getProduct = (id) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            //busca el producto por id
            const product = products.find(p => p.id === id);

            //si existe el producto
            if (product) {
                resolve (product);
            //si no existe el producto
            } else {
                reject ("El producto no existe");
            }
        }, 3000);
    });
  };

  //getProducts devuelve lista de todos los porductos o de la categoria que querramos
  export const getProducts = (category) => {
    return new Promise((resolve, reject) => {
        setTimeout (() => {
            //si category existe filtramos por categaria y sino que nos devuelva todos los porductos
            const productsFiltered = category 
            ? products.filter ((product) => product.category === category) 
            : products; 

            resolve (productsFiltered);

        }, 3000);
    });
  };

