# 2. Representación de Algoritmos

Es necesario poder representar las instrucciones o los pasos de un algoritmo de una manera ordenada que se puedan entender.
A primera vista se puede pensar que se podrían describir los pasos usando el lenguaje natural. Pero el problema es que el lenguaje natural puede resultar impreciso y ambiguo.

Por este motivo existen otros métodos de representar algoritmos, empezando por el pseudocódigo, que nos permite expresar la lógica de un programa en un lenguaje cercano al natural.

También es posible tener una representación más visual, utilizando metodologías como los diagramas de flujo, que facilita la comprensión y comunicación de los algoritmos ya que se puede ver cómo las acciones se comunican entre ellas y el flujo del algoritmo.

## 2.1 Pseudocódigo

El Pseudocódigo es una técnica que permite sustituir las instrucciones de un programa por frases que describan qué debe hacerse en lenguaje natural.

**Características del pseudocódigo**

- Utiliza palabras y frases en lugar de instrucciones de código.
- Permite describir de manera clara y concisa los pasos a seguir.
- No está sujeto a las reglas sintácticas de un lenguaje de programación específico.
- Facilita la comprensión y comunicación de los algoritmos.

> ***Ejemplo:***
>
> En el siguiente ejemplo se pueden ver dos algoritmos que indican si un número es par o impar. Ambos realizan la misma tarea, pero el algoritmo B es más eficiente que el algoritmo A. Esto se debe a que el algoritmo B tarda un tiempo constante, mientras que el algoritmo A tardará más cuanto mayor sea el valor de "n".
>
>:::tabs
>
>==Algoritmo A
> ```text
> INICIO
>   1. Escribir "Introduce valor para n".
>   2. Leer n.  
>   3. Si n = 2 escribir "Es par"
>   4. Si no, si n = 1 escribir "Es impar"
>   5. Si no, n = n - 2 y volvemos al paso 3.
> FIN
> ```
>
>==Algoritmo B
>
> ```
> INICIO
>   1. Escribir "Introduce valor para n".
>   2. Leer n.  
>   3. M ← n % 2
>   4. Si M = 0, escribir "Es par"
>   5. Si no, escribir "Es impar"
> FIN
> ```
>
>:::
>
> Al crear un algoritmo, no solo es importante que realice su tarea, sino que también sea eficiente y consuma la menor cantidad de recursos posible.

## 2.2 Diagrama de flujo

El diagrama de flujo es una técnica que representa los elementos de los algoritmos utilizando símbolos conectados entre ellos.

Los símbolos básicos que equivalen a los elementos de un algoritmo son los siguientes:

- **Las líneas** conectan los símbolos para indicar la secuencia de las acciones en el algoritmo.
- **Los rectángulos** representan las acciones.
- **Los paralelogramos** representan las operaciones de entrada/salida.
- **Los rombos** representan las decisiones y repeticiones.

### 2.2.1 Importancia de los diagramas de flujo

- **Visualización clara**: Permiten entender rápidamente la lógica de un algoritmo.
- **Comunicación efectiva**: Facilitan la explicación de procesos a otros programadores o stakeholders.
- **Planificación**: Ayudan a identificar posibles problemas o ineficiencias antes de comenzar a programar.
- **Documentación**: Sirven como referencia visual para el mantenimiento y mejora del código.
> ***Ejemplo: Diagrama de flujo del algoritmo A***
>
> En el siguiente ejemplo se puede ver el algoritmo A representado con un diagrama de flujo.
> ![Imagen de diagrama de flujo del algoritmo A](/uf2/2.2.png)

::: tip Conceptos clave para recordar

- **Pseudocódigo**: Representación de algoritmos en lenguaje natural.
- **Diagrama de flujo**: Representación gráfica de algoritmos con símbolos.
- **Símbolos básicos**: Líneas, rectángulos, paralelogramos y rombos.
:::