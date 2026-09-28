# 3. Instrucciones básicas

En el diseño de algoritmos, las instrucciones básicas son fundamentales para estructurar cómo se procesa la información. Estas instrucciones definen los elementos clave que permiten que un algoritmo funcione correctamente.

Como se ha visto en la UF1, los operadores pueden variar dependiendo del lenguaje de programación. En este caso, los operadores que se representan en los diagramas de flujo varían un poco respecto a los de pseudocódigo.

**Operadores en los diagramas de flujo**:

- **Asignación**: `=`.
- **Concatenación** `+`.
- **Aritméticos**: Suma `+`, resta `-`, multiplicación `*`, división `/`, módulo `%`.
- **Relacionales**: Menor que `<`, menor o igual que `<=`, mayor que `>`, mayor o igual que `>=`, igual a `==`, diferente de `!=`.
- **Lógicos**: Negación `NOT`, conjunción `AND`, disyunción `OR`.

Recuerda que los diagramas de flujo utilizan símbolos específicos como se vio en el tema anterior. Algunos de ellos son los siguientes:

| ***Símbolo***    | ***Función***           |
|-----------------|------------------------|
| Óvalos           | Inicio y fin             |
| Rectángulos      | Procesos              |
| Paralelogramos | Entrada/salida         |
| Rombos          | Decisiones              |
| Flechas         | Indicar el flujo        |

## 3.1 Instrucciones de inicio y fin

Cada algoritmo debe tener un punto de **inicio** y un punto de **fin** para definir claramente el comienzo y el final del proceso. Estos puntos son esenciales para asegurar que el algoritmo tenga un flujo definido y sea fácil de seguir.

- **INICIO**: Marca el punto donde el algoritmo comienza a ejecutarse.
- **FIN**: Indica el punto donde el algoritmo acaba.

> ***Ejemplo: inicio y fin***
>
> - **Datos de entrada**: ninguno.
> - **Dato de salida**: ninguno.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
> FIN
> ```
>
>== Diagrama de flujo
>
> ```mermaid
>   graph TD
>     A((INICIO)) --> B((FIN))
>     classDef inicio_fin fill:#ccc, color:#000;
>     class A,B inicio_fin
> ```
>
>:::
> Este sencillo ejemplo demuestra cómo marcar los límites de un algoritmo, permitiendo que el flujo de ejecución sea claro y estructurado.

## 3.2 Instrucciones de procesamiento de información

Todas las acciones que suponen una asignación de un valor, ya sea directo o a partir de algún cálculo o modificación, se representan con un **rectángulo**.

Mientras que en pseudocódigo se utilizaba la flecha `←` para asignar un valor, en los diagramas de flujo se utilizará el igual `=`

> ***Ejemplo: conversión de kilómetros a millas***
>
> - **Datos de entrada**: Distancia en kilómetros (10).
> - **Dato de salida**: Distancia en millas.
> - **Procedimiento**:
>
>::: tabs
> == Pseudocódigo
>
> ```plaintext
> INICIO
>   kilómetros ← 10
>   millas ← kilómetros * 0.621371
> FIN
> ```
>
>== Diagrama de flujo
>
> ```mermaid
>   graph TD
>     A((INICIO)) --> B[kilómetros = 10]
>     B --> C[millas = kilómetros * 0.621371]
>     C --> D((FIN))
>     classDef inicio_fin fill:#ccc, color:#000;
>     classDef rectangulo fill:#43BA43, color:white;
>     class A,D inicio_fin
>     class B,C rectangulo
> ```
>
>:::
>
> Este ejemplo ilustra cómo se puede convertir una distancia de kilómetros a millas utilizando una operación de multiplicación.

Si existen varios elementos consecutivos del mismo tipo con un flujo lineal como en el siguiente ejemplo, se pueden agrupar en un único elemento.

> ***Ejemplo: calcular el perímetro de un triángulo***
>
> - **Datos de entrada**: Longitudes de los lados del triángulo (7, 5, 3).
> - **Dato de salida**: Perímetro del triángulo.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   lado1 ← 7
>   lado2 ← 5
>   lado3 ← 3
>   perímetro ← lado1 + lado2 + lado3
> FIN
> ```
>
>== Diagrama de flujo (1)
>
> ```mermaid
>   graph TD
>     A((INICIO)) --> B[lado1 = 7]
>     B --> C[lado2 = 5]
>     C --> D[lado3 = 3]
>     D --> E[perímetro = lado1 + lado2 + lado3]
>     E --> F((FIN))
>     classDef inicio_fin fill:#ccc, color:#000;
>     classDef rectangulo fill:#43BA43, color:white;
>     class A,F inicio_fin
>     class B,C,D,E rectangulo
> ```
>
> ---
>
>== Diagrama de flujo (2)
>
> ```mermaid
>   graph TD
>     A((INICIO)) --> B[lado1 = 7 <br> lado2 = 5 <br> lado3 = 3 <br> perímetro = lado1 + lado2 + lado3]
>     B --> C((FIN))
>     classDef inicio_fin fill:#ccc, color:#000;
>     classDef rectangulo fill:#43BA43, color:white;
>     class A,C inicio_fin
>     class B rectangulo
> ```
>
>:::
> Este ejemplo muestra cómo se realiza un cálculo simple utilizando las longitudes de los lados de un triángulo para obtener su perímetro.

## 3.3 Instrucciones de Entrada y Salida de Información

La entrada y salida de información son esenciales para la interacción con el usuario. La entrada se refiere a los datos que el usuario proporciona al sistema, mientras que la salida es la información que el sistema devuelve al usuario.

**Dispositivos comunes**:

- **Entrada**: Teclado, ratón, micrófono.
- **Salida**: Pantalla, impresora, altavoces.

En pseudocódigo la entrada y salida se representan mediante las palabras **LEER** y **ESCRIBIR**, mientras que en los diagramas de flujo se representa haciendo uso de **paralelogramos**.

Estos ejemplos muestran cómo se maneja la entrada y salida de datos para permitir que los programas interactúen con los usuarios y proporcionen resultados útiles.

> ***Ejemplo: conversión de horas a minutos***
>
> - **Datos de entrada**: Número de horas.
> - **Dato de salida**: Número de minutos.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   ESCRIBIR "Introduzca el número de horas:".
>   LEER horas.
>   minutos ← horas * 60.
>   ESCRIBIR minutos.
> FIN
> ```
>
>== Diagrama de flujo
>
> ```mermaid
>   graph TD
>     A((INICIO)) --> B[/ESCRIBIR "Introduzca el número de horas:"/]
>     B --> C[/LEER horas/]
>     C --> D[minutos = horas * 60]
>     D --> E[/"ESCRIBIR minutos"/]
>     E --> F((FIN))
>     classDef inicio_fin fill:#ccc, color:#000;
>     classDef rectangulo fill:#43BA43, color:white;
>     classDef romboide fill:#188CC4, color:white;
>     class A,F inicio_fin
>     class D rectangulo
>     class B,C,E romboide
> ```
>
>:::
> Este ejemplo ilustra cómo se puede convertir una unidad de tiempo (horas) a otra (minutos) utilizando operaciones de entrada, procesamiento y salida.

> ***Ejemplo: cálculo del área de un triángulo***
>
> - **Datos de entrada**: Base y altura del triángulo.
> - **Dato de salida**: Área del triángulo.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   ESCRIBIR "Introduzca la base del triángulo:".
>   LEER base.
>   ESCRIBIR "Introduzca la altura del triángulo:".
>   LEER altura.
>   area ← base * altura / 2.
>   ESCRIBIR area.
> FIN
> ```
>
>== Diagrama de flujo
>
> ```mermaid
>   graph TD
>     A((INICIO)) --> B[/ESCRIBIR "Introduzca la base del triángulo:"/]
>     B --> C[/LEER base/]
>     C --> D[/ESCRIBIR "Introduzca la altura del triángulo:"/]
>     D --> E[/LEER altura/]
>     E --> F[area = base * altura / 2]
>     F --> G[/ESCRIBIR area/]
>     G --> H((FIN))
>     classDef inicio_fin fill:#ccc, color:#000;
>     classDef rectangulo fill:#43BA43, color:white;
>     classDef romboide fill:#188CC4, color:white;
>     class A,H inicio_fin
>     class F rectangulo
>     class B,C,D,E,G romboide
> ```
>
>:::
> Este ejemplo demuestra cómo se pueden utilizar instrucciones de entrada para obtener datos del usuario y de salida para mostrar el resultado del cálculo.

::: tip Conceptos clave para recordar
- **Inicio y fin**: Marcan los límites de un algoritmo.
- **Procesamiento**: Asignación de valores y cálculos.
- **Entrada y salida**: Interacción con el usuario mediante dispositivos de entrada y salida.
- **Dispositivos de entrada y salida**: Teclado, ratón, pantalla, impresora.
- **Paralelogramos**: Se utilizan para representar operaciones de entrada y salida en diagramas de flujo.
:::