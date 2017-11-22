# Sitio web - portafolio personal

Por Sebastian Reategui.

* Diseñado con [Jekyll](https://jekyllrb.com), mediante el lenguaje [Liquid](https://shopify.github.io/liquid/)
* Utilizando el framework [Bootstrap](https://getbootstrap.com/) para:
  * Hacer que la estructura sea responsiva a los dispositivos móviles tanto como escritorios
  * Crear una barra de navegación útil
  * Suavizar los estilos de tipografía
* Sobre ello, código de CSS custom basado en [SCSS](http://sass-lang.com)
* Utilizando [ícones de Bytesize](https://github.com/danklammer/bytesize-icons)

### Como ver el código fuente
* La mayoría de la estructura de las páginas se queda dentro de la carpeta `/_layouts`, la cual tiene una plantilla para cada sección del sitio
  * e.g. `/_layouts/photography.html` determina la estructura para todas las subpáginas de fotografía
* De ahí, el contenido de esas páginas de hecho se mantiene en otro lugar, en los archivos `.html` en la carpeta de raíz.
  * e.g. `/photography/people.html` o `/video.html`
* El contenido en este formato se coloca mediante [YAML](https://es.wikipedia.org/wiki/YAML). A este fin, la idea es separar la definición de las colecciones, imágenes, descripciones de proyectos y fechas del código que los estructura.
* Finalmente, el CSS queda a través de varios archivos:
  * Primero, en `/css/style.css`
  * Luego, más hojas de estilos (`/_sass/index.scss`; `/_sass/about.scss`) que pertenecen especificamente a las secciones del sitio se agregan mediante una llamada de SCSS `@import`
  * Jekyll lo combina todo y lo comprime para crear un solo archivo, minificado

### Notas
* En este diseño no se utiliza un lógotipo gráfico, dado que tenía la preferencia de dejar que mi nombre fuera la marca mediante solamente letras, las cuales me llaman más la atención que un gráfico.
