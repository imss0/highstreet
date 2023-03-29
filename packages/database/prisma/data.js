const imageData = require('./images');

const users = [
  {
    user_id: 'user-with-1-store',
    user_first_name: 'Bruce',
    user_last_name: 'Willis',
    user_email: 'bruce@diehard.me',
    password_hash:
      '$2b$10$pY0slrF/SSudvwTxJbn5auCzPheNrw59GN8CZEqo.qL1hvMnAdqaS',
  },
  {
    user_id: 'user-with-2-stores',
    user_first_name: 'Natasha',
    user_last_name: 'Romanoff',
    user_email: 'bobbio@prisma.co.uk',
    password_hash:
      '$2b$10$zNPounz3ZNqzISLGJkthL.XKZYDqHS2BAK3q1WBR3hIlpYxA/SFRC',
  },
  {
    user_id: 'user-with-3-stores',
    user_first_name: 'Tony',
    user_last_name: 'Stark',
    user_email: 'whatsupdoc@prisma.com',
    password_hash:
      '$2b$10$i1K2wEv5PNBgBT/LVO7cSut.cJO/AFXAcmL0wgeFAqAT1aCTldC52',
  },
];

const stores = [
  {
    store_id: 'store-1-product-with-storefront-but-lacking-detail',
    store_owner_id: 'user-with-1-store',
    store_name: 'Guns & Ammo',
    store_url: 'yippie-kay-yay',
  },
  {
    store_id: 'store-10-products-with-storefront-detail',
    store_owner_id: 'user-with-2-stores',
    store_name: 'Teapots Galore',
    store_url: 'teapots-galore',
  },
  {
    store_id: 'store-no-products-with-storefront-detail',
    store_owner_id: 'user-with-2-stores',
    store_name: 'Fruit & Veg Goodies',
    store_url: 'gotta-stay-healthy',
  },
  {
    store_id: 'store-2-products-with-storefront-detail',
    store_owner_id: 'user-with-3-stores',
    store_name: "Tony's Toys & Socks",
    store_url: 'toys-n-socks-bit-weird',
  },
  {
    store_id: 'store-6-products-with-storefront-detail',
    store_owner_id: 'user-with-3-stores',
    store_name: 'Electronics Emporium',
    store_url: 'elec-emp',
  },
  {
    store_id: 'nice-mvp-store',
    store_owner_id: 'user-with-3-stores',
    store_name: 'Toothbrush Central',
    store_url: 'toothbrushes-etc',
  },
];

const storeFronts = [
  {
    storefront_id: 'storefront-with-logo-with-hero-long-desc',
    store_id: 'store-10-products-with-storefront-detail',
    support_email: 'support@mystore.com',
    store_description:
      'Here is a short description to describe my amazing store. I hope you like my products and buy many of them because they are amazing quality at low, low prices',
    store_logo: imageData.teapotsLogo,
    store_hero_image: imageData.teapotHero,
    global_styles: JSON.stringify([
      { type: 'primaryColour', selected: '#e81a2a' },
      { type: 'secondaryColour', selected: '#131a3d' },
      { type: 'saleActive', selected: 'false' },
    ]),
  },
  {
    storefront_id: 'storefront1-with-logo-with-hero-normal desc',
    store_id: 'nice-mvp-store',
    support_email: 'no-emails-please@go-away.co.uk',
    store_description:
      'We have long delivery times so you should probably shop elsewhere...',
    store_logo: imageData.toothbrushLogo,
    store_hero_image: imageData.toothbrushHero,
  },
  {
    storefront_id: 'storefront-with-no-logo-no-hero-no-desc-no-email',
    store_id: 'store-1-product-with-storefront-but-lacking-detail',
  },
  {
    storefront_id: 'storefront-with-logo-no-hero-normal desc',
    store_id: 'store-2-products-with-storefront-detail',
    support_email: 'i-am@iron.man',
    store_description:
      'Well we have two products: toys or socks and that is it - enjoy',
    store_logo: imageData.toysNsocksLogo,
  },
  {
    storefront_id: 'storefront2-with-logo-with-hero-normal-desc',
    store_id: 'store-6-products-with-storefront-detail',
    support_email: 'nothingElectronic@everBreaks.com',
    store_description:
      'Quality electronics at bargain prices, consoles, TVs, radios, laptops, premium goods guaranteed!',
    store_hero_image: imageData.elecEmpHero,
    store_logo: imageData.elecEmpLogo,
  },
  {
    storefront_id: 'storefront-no-logo-with-hero-normal-desc',
    store_id: 'store-no-products-with-storefront-detail',
    support_email: 'straight-to-trash@outlook.com',
    store_description:
      'An apple a day keeps the doctor away, but too many and the dentist will come calling',
    store_hero_image: imageData.fruitNvegHero,
  },
];

const products = [
  {
    product_id: 'prd-w-lng-dtls-and-big-nums',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: 'SKU-17937494797934',
    product_name:
      'product1 - with a rather long name  just to see how this looks when displayed',
    inventory_qty: 123456,
    description:
      "Hi JACK, how are you doing? Hopefully you are enjoying your non-Stripe address fields? :) Hey ALLAN, there's a product called potato just for you. Hi YI-YING, hope you enjoyed the Foxes biscuits. Hey GECCO, your auth sign in is lovely. Hey SOHYUN, stop staying too late ;) this is a product description which is really long and annoying because we need to check the space. And so we need to keep going and going and making this long just so it is annoying and causes formatting issues. Is this long enough? Probably not. Let's keep going so that this gets really long and then we can see how this fits.",
    product_price: 1234567,
    product_name_slug:
      'product-name-slug-which-is-also-rather-long-is-it-too-long-do-not-know-yet',
    product_images: imageData.longTeapotImages,
  },
  {
    product_id: 'prd-w-sml-dtls-and-0s-no-img',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: '',
    product_name: 'potato',
    inventory_qty: 0,
    description: 'tiny description',
    product_price: 0,
    product_name_slug: 'slug',
  },
  {
    product_id: 'prd-w-neg-inv-and-price',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: '456-997',
    product_name: 'Negative Teapot',
    inventory_qty: -2,
    description:
      "This teapot shouldn't exist because it is negative - it's like there's a hole in the universe",
    product_price: -1,
    product_name_slug: 'negative-teapot',
    product_images: imageData.negativeTeapotImages,
  },
  {
    product_id: 'prd1-w-nrml-dtls-1-img',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: '868434',
    product_name: 'should we correct lowercase first letter?',
    inventory_qty: 10,
    description: 'same here, should we correct lowercase first letter?',
    product_price: 17.99,
    product_name_slug: 'lowercase-teapot',
    product_images: imageData.tinyTeapotImages,
  },
  {
    product_id: 'prd2-w-nrml-dtls-1-img',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: '4837',
    product_name: 'Quirky Teapot',
    inventory_qty: 5,
    description:
      'This is a lovely teapot with lots of character. Designed to be a talking point and will fit in well to most kitchens but especially if you already have an Aga oven it can sit alongside! Check out all the lovely details, there are so many to find...',
    product_price: 33.27,
    product_name_slug: 'quirky-teapot',
    product_images: imageData.quirkyTeapotImages,
  },
  {
    product_id: 'prd1-w-nrml-dtls-2-imgs',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: '4H56K-7',
    product_name: 'See-through Teapot',
    inventory_qty: 300,
    description:
      'Does what it says on the tin, you can see through it. Marvel at the tea you have brewing, it is not quite watching the kettle boil, it is better. Guaranteed to make your tea-making experience at least 4.5% better',
    product_price: 5,
    product_name_slug: 'see-through-teapot',
    product_images: imageData.seeThroughTeapotImages,
  },
  {
    product_id: 'prd2-w-nrml-dtls-2-imgs',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: '5454-BGH',
    product_name: 'Blue Teapot',
    inventory_qty: 1753,
    description:
      'Blue is nice, blue is calming, blue is the colour of the sky and the sea. A stone-cold classic colour paired with a briliant design, this is a teapot for the ages. Never let anyone tell you otherwise',
    product_price: 199.9,
    product_name_slug: 'blue-teapot',
    product_images: imageData.blueTeapotImages,
  },
  {
    product_id: 'prd-w-nrml-dtls-3-imgs',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: '43324',
    product_name: 'Green Teapot',
    inventory_qty: 487,
    description:
      "When a blue teapot just won't cut it, here we present our incredible new green teapot. Enjoy, and if you don't then your money back* (*no refunds)",
    product_price: 850.25,
    product_name_slug: 'green-teapot',
    product_images: imageData.greenTeapotImages,
  },
  {
    product_id: 'prd-w-nrml-dtls-4-imgs',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: '098789',
    product_name: 'Black Teapot',
    inventory_qty: 62,
    description:
      "The OG, this is basically the physical manifestation of the main character from the phrase where the 'pot calls the kettle black'",
    product_price: 1200,
    product_name_slug: 'dark-teapot',
    product_images: imageData.blackTeapotImages,
  },
  {
    product_id: 'prd-w-nrml-dtls-5-imgs',
    store_id: 'store-10-products-with-storefront-detail',
    SKU: '5398789',
    product_name: 'Mega-pot',
    inventory_qty: 1,
    description:
      'So you like teapots? Well prove it by getting the Mega-pot. This is the mother of all teapots and you will be the envy of all your friends and family when this gets delivered. Can brew approximately all the tea in the world.',
    product_price: 1200,
    product_name_slug: 'xxxl-teapot',
    product_images: imageData.megaTeapotImages,
  },
  {
    product_id: 'prd3-w-nrml-dtls-2-imgs',
    store_id: 'store-1-product-with-storefront-but-lacking-detail',
    SKU: '786241',
    product_name: 'Beach Ball',
    inventory_qty: 34,
    description:
      'Yeah, so I decided to sell a random really expensive beach ball because it can be enjoyed anywhere, including the beach. So pair this bad boy with your next holiday and have some fun in the sun!',
    product_price: 4000.75,
    product_name_slug: 'beach-ball',
    product_images: imageData.beachballImages,
  },
  {
    product_id: 'prd4-w-nrml-dtls-2-imgs',
    store_id: 'store-2-products-with-storefront-detail',
    SKU: '7241',
    product_name: 'Instant Sock Collection',
    inventory_qty: 399,
    description:
      'Did you ever want more socks than you know what to deal with? Well select our XL lucky dip sock collection and get a ton of random socks',
    product_price: 345.99,
    product_name_slug: 'bunch-o-socks',
    product_images: imageData.socksImages,
  },
  {
    product_id: 'prd5-w-nrml-dtls-2-imgs',
    store_id: 'store-2-products-with-storefront-detail',
    SKU: '6f241',
    product_name: 'Bulk buy of toys',
    inventory_qty: 76,
    description:
      'This is a big batch of toys, you get a random selection which may or may not include some of the items in the images. Take your chances and you might get something awesome, but most likely not',
    product_price: 652.43,
    product_name_slug: 'bunch-o-toys',
    product_images: imageData.toysImages,
  },
  {
    product_id: 'prd6-w-nrml-dtls-2-imgs',
    store_id: 'nice-mvp-store',
    SKU: '89767',
    product_name: 'Toothbrush',
    inventory_qty: 76,
    description:
      'Some toothbrushes. Perfect for cleaning your teeth. But also useful, once they have got a bit worn out, for household cleaning. Basically a 2 in 1 functionality. What a bargain.',
    product_price: 6.67,
    product_name_slug: 'toothbrush',
    product_images: imageData.toothbrushImages,
  },
  {
    product_id: 'prd7-w-nrml-dtls-2-imgs',
    store_id: 'nice-mvp-store',
    SKU: '574',
    product_name: 'Cool Dog',
    inventory_qty: 1,
    description:
      'A dog to silently judge you whilst you brush your teeth. Includes sunglasses to protect its eyes from the gleam after you have done a great job brushing.',
    product_price: 545.29,
    product_name_slug: 'woof-woof',
    product_images: imageData.dogImages,
  },
];

const customers = [
  {
    store_id: 'store-10-products-with-storefront-detail',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    customer_first_name: 'Tekraj',
    customer_last_name: 'Gurung',
    customer_email: 'tek@broken-microphone.co.uk',
    phone_number: '01234 123456',
  },
  {
    store_id: 'nice-mvp-store',
    customer_id: 'cust-with-long-name-bill-and-ship-different',
    customer_first_name: 'Samayamantri',
    customer_last_name: 'Hebblethwaite',
    customer_email: 'MrShoes@gmail.com',
    phone_number: '447722123465',
  },
  {
    store_id: 'store-1-product-with-storefront-but-lacking-detail',
    customer_id: 'cust-2-with-normal-name-bill-and-ship-same',
    customer_first_name: 'Sebastien',
    customer_last_name: 'Ringrose',
    customer_email: 'seb-loves@help-requests.com',
    phone_number: '07771777777',
  },
  {
    store_id: 'store-2-products-with-storefront-detail',
    customer_id:
      'cust-with-double-barrelled-name-bill-and-ship-different-no-phonenumber',
    customer_first_name: 'Rose-Marie',
    customer_last_name: 'Jones-Smith',
    customer_email: 'a@a.com',
  },
];

const addresses = [
  {
    address_id: 'addr-bill-and-ship-(ship)',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    address_first_name: 'Marty',
    address_last_name: 'McFly',
    address_line_1: '88 mph',
    address_line_2: 'Twin Pines Mall',
    city: 'Hill Valley',
    county: 'California',
    country: 'United Kingdom',
    postcode: 'BTF1 985',
  },
  {
    address_id: 'addr-bill-and-ship-(bill)',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    address_first_name: 'Marty',
    address_last_name: 'McFly',
    address_line_1: '88 mph',
    address_line_2: 'Twin Pines Mall',
    city: 'Hill Valley',
    county: 'California',
    country: 'United Kingdom',
    postcode: 'BTF1 985',
  },
  {
    address_id: 'addr-as-shipping-only',
    customer_id: 'cust-with-long-name-bill-and-ship-different',
    address_first_name: 'Roberto',
    address_last_name: 'Martinez',
    address_line_1: '221B Baker Street',
    address_line_2: 'Marylebone',
    city: 'London',
    county: 'Greator London',
    country: 'United Kingdom',
    postcode: 'NW1 6XE',
  },
  {
    address_id: 'addr-as-billing-only',
    customer_id: 'cust-with-long-name-bill-and-ship-different',
    address_first_name: 'Lupito',
    address_last_name: "Nyong'o",
    address_line_1: '123 Normal Street',
    address_line_2: 'Penarth',
    city: 'Leeds',
    county: 'Wiltshire',
    country: 'United Kingdom',
    postcode: 'Postcode',
  },
  {
    address_id: 'addr1-normal-(ship)',
    customer_id: 'cust-2-with-normal-name-bill-and-ship-same',
    address_first_name: 'Suzuki',
    address_last_name: 'Ichiro',
    address_line_1: 'Pretty Cottage',
    address_line_2: 'Countryside',
    city: 'Small Village',
    county: 'Berkshire',
    country: 'United Kingdom',
    postcode: 'BS13 6RT',
  },
  {
    address_id: 'addr1-normal-(bill)',
    customer_id: 'cust-2-with-normal-name-bill-and-ship-same',
    address_first_name: 'Suzuki',
    address_last_name: 'Ichiro',
    address_line_1: 'Pretty Cottage',
    address_line_2: 'Countryside',
    city: 'Small Village',
    county: 'Berkshire',
    country: 'United Kingdom',
    postcode: 'BS13 6RT',
  },
  {
    address_id: 'addr-with-long-fields-bill-and-ship-(ship)',
    customer_id:
      'cust-with-double-barrelled-name-bill-and-ship-different-no-phonenumber',
    address_first_name: 'Addr First Name Longer Than Normal',
    address_last_name: 'Addr Last Name Longer Than Normal',
    address_line_1: 'Addr Line 1 making this long, longer, longest',
    address_line_2: 'Addr Line 2 also long sometimes, but how long',
    city: 'City Name Here Long',
    county: 'County Name Long',
    country: 'United Kingdom',
    postcode: 'Postcode',
  },
  {
    address_id: 'addr-with-empty-optional-fields-(bill)',
    customer_id:
      'cust-with-double-barrelled-name-bill-and-ship-different-no-phonenumber',
    address_first_name: 'Magnus',
    address_last_name: 'Magnusson',
    address_line_1: '10 Penny Lane',
    city: 'Liverpool',
    country: 'United Kingdom',
    postcode: 'SW1P 2AF',
  },
  {
    address_id: 'addr2-normal-(ship)',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    address_first_name: 'Harry',
    address_last_name: 'Potter',
    address_line_1: 'Hogwarts',
    city: 'MagicLand',
    country: 'United Kingdom',
    postcode: 'VLD0 MRT',
  },
  {
    address_id: 'addr2-normal-(bill)',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    address_first_name: 'Harry',
    address_last_name: 'Potter',
    address_line_1: 'Hogwarts',
    city: 'MagicLand',
    country: 'United Kingdom',
    postcode: 'VLD0 MRT',
  },
];

const orders = [
  {
    order_id: 'order-with-1-item-some-cost',
    store_id: 'store-1-product-with-storefront-but-lacking-detail',
    customer_id: 'cust-2-with-normal-name-bill-and-ship-same',
    friendly_order_number: 23,
    bill_address_id: 'addr1-normal-(ship)',
    ship_address_id: 'addr1-normal-(bill)',
    products: {
      connect: [{ product_id: 'prd3-w-nrml-dtls-2-imgs' }],
    },
    order_details: [
      {
        productId: 'prd3-w-nrml-dtls-2-imgs',
        quantity: 2,
        price: 4000.75,
        name: 'Beach Ball',
        sku: '786241',
      },
    ],
    total_order_cost: 8001.5,
  },
  {
    order_id: 'order-with-many-items-high-cost',
    store_id: 'store-10-products-with-storefront-detail',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    friendly_order_number: 4617644,
    bill_address_id: 'addr-bill-and-ship-(bill)',
    ship_address_id: 'addr-bill-and-ship-(ship)',
    products: {
      connect: [
        { product_id: 'prd-w-nrml-dtls-4-imgs' },
        { product_id: 'prd-w-lng-dtls-and-big-nums' },
        { product_id: 'prd2-w-nrml-dtls-1-img' },
        { product_id: 'prd1-w-nrml-dtls-2-imgs' },
        { product_id: 'prd-w-nrml-dtls-3-imgs' },
      ],
    },
    order_details: [
      {
        productId: 'prd-w-nrml-dtls-4-imgs',
        quantity: 1,
        price: 1200,
        name: 'Black Teapot',
        sku: '098789',
      },
      {
        productId: 'prd-w-lng-dtls-and-big-nums',
        quantity: 4,
        price: 1234567,
        name: 'product1 - with a rather long name  just to see how this looks when displayed',
        sku: 'SKU-17937494797934',
      },
      {
        productId: 'prd2-w-nrml-dtls-1-img',
        quantity: 3,
        price: 33.27,
        name: 'Quirky Teapot',
        sku: '4837',
      },
      {
        productId: 'prd1-w-nrml-dtls-2-imgs',
        quantity: 2,
        price: 5,
        name: 'See-through Teapot',
        sku: '4H56K-7',
      },
      {
        productId: 'prd-w-nrml-dtls-3-imgs',
        quantity: 5,
        price: 850.25,
        name: 'Green Teapot',
        sku: '43324',
      },
    ],
    total_order_cost: 4943829.06,
  },
  {
    order_id: 'order-with-different-addresses',
    store_id: 'store-10-products-with-storefront-detail',
    customer_id: 'cust-with-long-name-bill-and-ship-different',
    friendly_order_number: 32432,
    bill_address_id: 'addr-with-empty-optional-fields-(bill)',
    ship_address_id: 'addr-with-long-fields-bill-and-ship-(ship)',
    products: {
      connect: [{ product_id: 'prd-w-nrml-dtls-4-imgs' }],
    },
    order_details: [
      {
        productId: 'prd-w-nrml-dtls-4-imgs',
        quantity: 3,
        price: 1200,
        name: 'Black Teapot',
        sku: '098789',
      },
    ],
    total_order_cost: 1200,
  },
  {
    order_id: 'order-with-4-items-normal-cost',
    store_id: 'store-10-products-with-storefront-detail',
    customer_id:
      'cust-with-double-barrelled-name-bill-and-ship-different-no-phonenumber',
    friendly_order_number: 543,
    bill_address_id: 'addr-as-billing-only',
    ship_address_id: 'addr-as-shipping-only',
    products: {
      connect: [
        { product_id: 'prd1-w-nrml-dtls-1-img' },
        { product_id: 'prd2-w-nrml-dtls-2-imgs' },
        { product_id: 'prd-w-nrml-dtls-5-imgs' },
        { product_id: 'prd-w-neg-inv-and-price' },
      ],
    },
    order_details: [
      {
        productId: 'prd1-w-nrml-dtls-1-img',
        quantity: 2,
        price: 17.99,
        name: 'should we correct lowercase first letter?',
        sku: '868434',
      },
      {
        productId: 'prd2-w-nrml-dtls-2-imgs',
        quantity: 3,
        price: 199.9,
        name: 'Blue Teapot',
        sku: '5454-BGH',
      },
      {
        productId: 'prd-w-nrml-dtls-5-imgs',
        quantity: 1,
        price: 1200,
        name: 'Mega-pot',
        sku: '5398789',
      },
      {
        productId: 'prd-w-neg-inv-and-price',
        quantity: -1,
        price: -1,
        name: 'Negative Teapot',
        sku: '456-997',
      },
    ],
    total_order_cost: 1834.68,
  },
  {
    order_id: 'order-with-1-item-zero-cost',
    store_id: 'store-10-products-with-storefront-detail',
    customer_id: 'cust-1-with-normal-name-bill-and-ship-same',
    friendly_order_number: 7,
    bill_address_id: 'addr2-normal-(bill)',
    ship_address_id: 'addr2-normal-(ship)',
    products: {
      connect: [{ product_id: 'prd-w-sml-dtls-and-0s-no-img' }],
    },
    order_details: [
      {
        productId: 'prd-w-sml-dtls-and-0s-no-img',
        quantity: 0,
        price: 0,
        name: 'potato',
        sku: '',
      },
    ],
    total_order_cost: 0,
  },
];

module.exports = {
  users,
  stores,
  storeFronts,
  products,
  customers,
  addresses,
  orders,
};