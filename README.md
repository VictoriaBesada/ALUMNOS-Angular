# Alumnos - App created using Angular

***

# How it works

Este proyecto tiene como origen uno de mis sueños de toda la vida, que es tener mi propia agencia de viajes. Yo soy licenciada en Turismo y Hotelería y como apasionada del turismo siempre tuve como objetivo tener mi propia agencia online. Sin embargo, hace unos meses me empezó  a interesar mucho la tecnología y la programación mas específicamente y este proyecto me pareció una excelente oportunidad para combinar mis dos pasiones. 

## Sobre el proyecto

El objetivo de este sitio web es comercializar paquetes de viajes populares alrededor de todo el mundo y brindar al usuario una experiencia de compra fácil y dinámica.

En la página principal podemos observar todos los paquetes de viajes disponibles para comprar, los mismos se muestran en cards que incluyen una imagen ilustrativa del destino, el nombre de la ciudad, el tipo de turismo que se puede practicar en esa región, el precio global del paquete con todo incluido, un botón para ver el detalle del paquete y un botón de compra que agrega el paquete al carrito.

Al hacer click en "Ver itinerario", podemos ver una breve descripción del producto y el itinerario detallado día por día de lo que incluye el paquete. Además, también esta incluido el botón de comprar, que también agrega el producto al carrito. 

Una vez que terminamos de agregar productos al carrito, hay que hacer click en el widget del carrito, ubicado en el navbar, el cual nos redirige a la pagina de carrito. Allí, tendremos una lista de todos los productos que agregamos y también tenemos un icono de un cesto en caso de que queramos eliminar algún producto. 

Una vez que estemos listos para comprar, se hace click en el botón "Finalizar compra", el cual abre un modal que pide nuestros datos y luego nos devuelve el código de compra de nuestra orden.

Por otro lado, en la pagina Nosotros, hay una breve historia de cómo surgió Mundi Travel y de la misión, vision y valores de la empresa. 

Por último, decidi implementar una página de contacto para que el usuario pueda contactar directamente al equipo de atención al cliente en caso de que tenga alguna consulta o quiera personalizar algún paquete.


## Estructura del proyecto

Este sitio web esta creado usando React Js y esta compuesto por: 

- 10 componentes. 
> Los cuales construyen el navbar, catálogo, detalle de producto, cart widget, carrito, contador y footer,
- 6 paginas.
> Las cuales contienen el home,  detalle de producto, carrito, página no encontrada, nosotros y contacto.
- 1 contexto. 
> Perteneciente al Cart.
- 1 data.
> Contiene un array de los productos a comercializar.
- 1 util.
> Contiene un mock de producto.
- App.js y App.css.
> Archivos en los cuales se encuentran las rutas del sitio web y los estilos principales de los diferentes componentes y páginas.

Además utilice firebase para crear la base de datos de mis productos.

## Muestra de compra

![Alt Text](./public/ejemplo-compra.gif)
