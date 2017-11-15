---
title:      Como abrir un proyecto de Premiere en versiones anteriores sin problema
date:       2017-11-15T11:36:19Z
description: |
  Hay una solución. Se puede modificar el archivo de proyecto para esforzarle a Premiere abrir el proyecto, para que puedas rescatar tu trabajo y seguir editando.
slug:       como-convertir-un-archivo-premiere-de-una-version-a-otra
lang:       es
categories: tutorials español
thumbnail:  
  url:      "/post/img/guia-como-convertir-archivo-premiere-pro-banner.png"
  width:    853
  height:   480
---


¿Te ha salido este error mientras trabajando en un proyecto importante a través de varios computadores?

<blockquote class="blockquote text-muted">
Este proyecto se ha guardado en una version más reciente de Adobe Premiere Pro y no se puede abrir en esta versión.
</blockquote>

Lo más probable es que no habría problemas de abrir el proyecto si Premiere te permitiera.

Pero hay una solución.

Se puede modificar el archivo de proyecto para esforzarle a Premiere abrir el proyecto, para que puedas rescatar tu trabajo y seguir editando.

<div class="alert">For instructions in English, see <a href="https://video.stackexchange.com/questions/3804/how-do-i-downgrade-an-adobe-premiere-pro-project-file-to-open-in-older-version#answer-21635" target="_blank">this StackExchange post by user nmu</a>.</div>

### Como se hace

Los archivos de proyectos Premiere de hecho son del formato [XML](https://es.wikipedia.org/wiki/XML), un formato leible y editable por humanos. Toda la estructura del proyecto, las secuencias, archivos de medio y ajustes especificas al proyecto se guardan adentro. El número de la versión de Premiere en que se hubo guardado el proyecto está indicada en una sola linea en este XML. Al abrir el proyecto, Premiere Pro verificará que su propia versión coincida con el numero de la versión indicada en esta linea. El truco reside en el hecho de que si Premiere Pro lee que el numero es `1`, le permitirá a abrir sin problema, a pesar de que el *contenido* del proyecto si mismo podría no ser compatible.

Además de esta estructura, el archivo XML es de hecho comprimido por Premiere utilizando [Gzip](https://es.wikipedia.org/wiki/Gzip). Al abrir el proyecto, Premiere descomprime el archivo y al guardar lo comprime de nuevo. Los archivos de proyectos no utilizan la extensión `.gzip` sino `.prproj`. Sin embargo, en realidad son nada más que un XML comprimido con Gzip.

#### Solución rápida

* Descomprima el archivo de proyecto con `gzip`
* Ábrelo con un editor de texto
* Cambie la cuarta linea donde contiene el atributo de versión del proyecto, desde el numero presente (e.g. `33`) al `1`
* Gúardelo y comprímalo de nuevo con `gzip`, restaurando la extensión `.prproj` antes de abrirlo en Premiere Pro

#### Solución detallada

Estas indicaciones son para Mac OS X o macOS. Para Windows, vea [la sección a la parte inferior de la página](#windows): se necesita más software para poder hacerlo.

1. Abre una ventana de Terminal

2. Cambie la ubicación a la carpeta en dónde queda el archivo por ingresar el siguiente comando en la ventana:

    `cd /Volumes/DISCODURO/Proyecto.prproj`
    
    Modifique `/Volumes/DISCODURO/` según su disco o su carpeta. También se puede ingresar la ruta de la carpeta utilizando este truco: mantenga y arrastre el ícon de la carpeta y muévelo a la ventana después de escribir `cd `.
    
    ![paso2](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-10.png)

3. Cree una copia del archivo con nombre distinto, pero también déle la extensión `.gz`

    ![paso3](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-1.png)

4. Utilice el programa Gzip para descomprimir la copia

    `gzip -d Proyecto-copia.gz`
    
    ![paso4](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-2.png)

    Ahora, ya se debería haber creado un nuevo archivo `Proyecto-copia`, el cual *no* tiene extensión.
    
    ![paso4b](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-11.png)

5. Déle a este archivo una extensión, la de `.xml`
    
    ![paso5](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-3.png)

6. Abre el XML en TextEdit y busca la cuarta linea

    `<Project ObjectID='1' ClassID='[...]' Version='33'>`
      
    El numero exacto que le sale podría ser distinto dependiende de la versión de Premiere.
      
    ![paso6](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-4.png)

      Cambie el valor del atributo ‘Version’ simplemente a ‘1’:

    `<Project ObjectID='1' ClassID='[...]' Version='1'>`
      
    ![paso6](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-5.png)

7. Guarde el archivo y cierre TextEdit.

    Ya necesitamos empaqueatar el archivo de nuevo.
    
##### Empaqueatar el archivo de nuevo

8. En Terminal, comprime el XML:

    `gzip Proyecto-copia.xml`

    Ya se debería haber creado el archivo `Proyecto-copia.xml.gz`
    
    ![paso8](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-12.png)

9. Déle a este archivo resultado la extensión `.prproj` de nuevo

    `mv Proyecto-copia.xml.gz Proyecto-copia.prproj`
    
    ![paso9](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-7.png)
{:start="8"}
    
##### Intentar abrirlo en Premiere

10. Abre `Proyecto-copia.prproj` en Premiere Pro. Al abrirlo, encontrará que el primer mensaje que sale dirá que:

    ![paso10](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-8.png)

11. Escoja un nombre y una carpeta para el nuevo proyecto y asegúrase que elija un nombre distinto a los demás para evitar confundirse mientras trabajar.

    Es recomendable indicar que el proyecto ha sido "convertido" por este método:
    
    e.g.: `proyecto-convertido.prproj`

12. Podría haber que se necesita vincular los medios del proyecto, si le salga este error, simplemente intentar ubicarlos y guardar el proyecto.

    ![paso12](/post/img/guia-como-convertir-archivo-premiere-pro-sebreategui-9.png)
    
13. ¡Ya listo!
{:start="10"}

#### Notas

* **No todos los efectos, transiciones y atributos del proyecto se van a trasladar exitosamente al nuevo archivo de proyecto mediante este método.** Tenga en cuenta que en versiones de Premiere de distintos periodos de tiempo, se han realizado muchos cambios por los desarrolladores. La razón de que ellos no nos permiten abrir archivos nuevos en versiones viejas tiene que ver con la decisión de Adobe de no implementar [retrocompatibilidad](https://es.wikipedia.org/wiki/Retrocompatibilidad) en Premiere Pro y After Effects.

* El proceso anterior se podría sonar arriesgado pero si uno crea una copia de seguridad del archivo de proyecto original, no hay nada que perder.

* Le doy crédito al usuario `nmu` en StackExchange por ya haber compartido [el técnico en mayo de este año](https://video.stackexchange.com/questions/3804/how-do-i-downgrade-an-adobe-premiere-pro-project-file-to-open-in-older-version).

#### ¿Como hago para hacer esto en Windows?
{:id="windows"}

Las instalaciones de Windows por defecto suelen no tener Gzip, el cual es el componente necesario de todo lo anterior. Si quiere realizar el proceso en Windows y abrir proyectos de versiones nuevas en Premiere Pro, hay que descargar Cygwin u otro framework que le permite utilizar programas de GNU en Windows. 

Naturalmente, el archivo resultado se puede abrir en Windows tal como en Mac, sin embargo, no el proceso de conversión.