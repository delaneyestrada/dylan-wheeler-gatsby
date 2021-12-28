import React, { useEffect, useState } from 'react';
import ShopifyBuy from '@shopify/buy-button-js';

export default function MerchSection() {
  const [products, setProducts] = useState([]);
  const shopifyClient = ShopifyBuy.buildClient({
    domain: 'dylan-wheeler.myshopify.com',
    storefrontAccessToken: '29af3b7767735775cbb7b82d70c14764',
  });

  const ui = ShopifyBuy.UI.init(shopifyClient);

  const collectionId = '276953268404';

  // shopifyClient.collection
  //   .fetchWithProducts(collectionId, { productsFirst: 20 })
  //   .then((collection) => {
  //     setProducts(collection.products);
  //   });
  console.log(ui);

  useEffect(() => {
    ui.createComponent('collection', {
      id: collectionId,
      node: document.getElementById('collection-component-1630375952164'),
      moneyFormat: '%24%7B%7Bamount%7D%7D',
      options: {
        product: {
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': 'calc(25% - 20px)',
                'margin-left': '20px',
                'margin-bottom': '50px',
                width: 'calc(25% - 20px)',
              },
              img: {
                height: 'calc(100% - 15px)',
                position: 'absolute',
                left: '0',
                right: '0',
                top: '0',
              },
              imgWrapper: {
                'padding-top': 'calc(75% + 15px)',
                position: 'relative',
                height: '0',
              },
            },
            title: {
              color: '#ffffff',
            },
            button: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              ':hover': {
                'background-color': '#ff0000',
              },
              'background-color': '#a70000',
              ':focus': {
                'background-color': '#ff0000',
              },
            },
            price: {
              color: '#ffffff',
            },
            compareAt: {
              color: '#ffffff',
            },
            unitPrice: {
              color: '#ffffff',
            },
          },
          text: {
            button: 'Add to cart',
          },
          googleFonts: ['Montserrat'],
        },
        productSet: {
          styles: {
            products: {
              '@media (min-width: 601px)': {
                'margin-left': '-20px',
              },
            },
          },
        },
        modalProduct: {
          contents: {
            img: false,
            imgWithCarousel: true,
            button: false,
            buttonWithQuantity: true,
          },
          styles: {
            product: {
              '@media (min-width: 601px)': {
                'max-width': '100%',
                'margin-left': '0px',
                'margin-bottom': '0px',
              },
            },
            button: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              ':hover': {
                'background-color': '#ff0000',
              },
              'background-color': '#a70000',
              ':focus': {
                'background-color': '#ff0000',
              },
            },
            title: {
              'font-family': 'Helvetica Neue, sans-serif',
              'font-weight': 'bold',
              'font-size': '26px',
              color: '#4c4c4c',
            },
            price: {
              'font-family': 'Helvetica Neue, sans-serif',
              'font-weight': 'normal',
              'font-size': '18px',
              color: '#4c4c4c',
            },
            compareAt: {
              'font-family': 'Helvetica Neue, sans-serif',
              'font-weight': 'normal',
              'font-size': '15.299999999999999px',
              color: '#4c4c4c',
            },
            unitPrice: {
              'font-family': 'Helvetica Neue, sans-serif',
              'font-weight': 'normal',
              'font-size': '15.299999999999999px',
              color: '#4c4c4c',
            },
          },
          googleFonts: ['Montserrat'],
          text: {
            button: 'Add to cart',
          },
        },
        option: {
          styles: {
            label: {
              color: '#ffffff',
            },
          },
        },
        cart: {
          styles: {
            button: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              ':hover': {
                'background-color': '#ff0000',
              },
              'background-color': '#a70000',
              ':focus': {
                'background-color': '#ff0000',
              },
            },
          },
          text: {
            total: 'Subtotal',
            button: 'Checkout',
          },
          googleFonts: ['Montserrat'],
        },
        toggle: {
          styles: {
            toggle: {
              'font-family': 'Montserrat, sans-serif',
              'font-weight': 'bold',
              'background-color': '#a70000',
              ':hover': {
                'background-color': '#ff0000',
              },
              ':focus': {
                'background-color': '#ff0000',
              },
            },
          },
          googleFonts: ['Montserrat'],
        },
      },
    });
  }, []);

  return (
    <div>
      <div class="card" id="merch-card">
        <div class="card-body">
          <div id="collection-component-1630375952164"></div>
        </div>
      </div>
    </div>
  );
}
