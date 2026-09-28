# 4. Estructuras de control

Hasta ahora, hemos trabajado con algoritmos donde las instrucciones se ejecutan de manera secuencial, es decir, una detrás de otra en un orden específico. No obstante, en muchos casos, es necesario que el flujo del programa pueda cambiar dependiendo de ciertas condiciones. Para gestionar este tipo de control, se utilizan las **estructuras de control**.

Las estructuras de control permiten modificar el flujo de ejecución de un algoritmo. Existen dos tipos principales de estructuras de control:

1. **Estructuras Alternativas**: Permiten seleccionar diferentes conjuntos de instrucciones basadas en una condición. Estas pueden ser simples, dobles o múltiples.
2. **Estructuras Repetitivas**: Permiten ejecutar instrucciones repetidamente. (Este tema se cubrirá en la próxima unidad).

En esta unidad, nos enfocaremos en las estructuras alternativas.

## 4.1 Estructuras Alternativas

Las estructuras alternativas permiten que el algoritmo elija entre diferentes caminos de ejecución dependiendo de si se cumple una condición determinada. Esto es útil para tomar decisiones dentro del programa y realizar diferentes acciones basadas en el estado del sistema o los datos de entrada.

### 4.1.1 Estructura Alternativa Simple

La **estructura alternativa simple** se utiliza cuando hay una única condición que determina si se deben ejecutar ciertas instrucciones o no. Si la condición es verdadera, se ejecutan las instrucciones asociadas. Si la condición es falsa, se omiten.

> ***Ejemplo: Aplicación de descuento en una tienda***
>
> Imaginemos un programa que determina si una persona puede recibir un descuento en una tienda. Si la persona tiene una tarjeta de fidelidad, se aplica un descuento del 10% en la compra. Si no tiene la tarjeta, no se aplica ningún descuento.
>
> - **Datos de entrada**: Información sobre el coste total de la compra y si el cliente tiene una tarjeta de fidelidad.
> - **Dato de salida**: Coste total aplicando o no el descuento.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   ESCRIBIR "Dame el coste total de la compra:".
>   LEER total.
>   ESCRIBIR "¿Tienes una tarjeta de fidelidad? Sí (S), No (N):".
>   LEER respuesta.
>   Si respuesta = "S":
>     - total ← total - (total * 0,1).
>   FIN SI
>   ESCRIBIR total.
> FIN
> ```
>
>== Diagrama de flujo
>
>```mermaid
>graph TD
>    A((Inicio)) --> B[/ESCRIBIR "Dame el coste total de la compra:"/]
>    B --> C[/LEER total/]
>    C --> D[/"ESCRIBIR '¿Tienes una tarjeta de fidelidad? Sí (S), No (N):'"/]
>    D --> E[/LEER respuesta/]
>    E --> F{respuesta = 'S'?}
>    F -- Sí --> G["total = total - (total * 0,1)"]
>    F -- No --> I
>    G --> I[/ESCRIBIR total/]
>    I --> J((Fin))
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white;
>    classDef rectangulo fill:#43BA43, color:white;
>    classDef inicio_fin fill:#ccc, color:#000;
>    class B,C,D,E,I romboide
>    class G,H rectangulo
>    class F,K rombo
>    class A,J inicio_fin
>```
>
>:::
> Este ejemplo muestra cómo una estructura alternativa simple puede utilizarse para decidir si se aplica un descuento basándose en una condición específica.

### 4.1.2 Estructura Alternativa Doble

La **estructura alternativa doble** permite ejecutar diferentes conjuntos de instrucciones basándose en si una condición es verdadera o falsa. Es una forma más avanzada de la estructura simple, ya que permite manejar dos escenarios opuestos.

> ***Ejemplo: Aplicación de descuento en una tienda***
>
> Imaginemos un programa que determina qué descuento puede recibir una persona en una tienda en rebajas. Si la persona tiene una tarjeta de fidelidad, se aplica un descuento del 20% en la compra. Si no tiene la tarjeta, se aplicará un descuento del 10%.
>
> - **Datos de entrada**: Información sobre el coste total de la compra y si el cliente tiene una tarjeta de fidelidad.
> - **Dato de salida**: Coste total aplicando o no el descuento.
> - **Procedimiento**:
>
>::: tabs
>==Pseudocódigo
>
> ```plaintext
> INICIO
>   ESCRIBIR "Dame el coste total de la compra:".
>   LEER total.
>   ESCRIBIR "¿Tienes una tarjeta de fidelidad? Sí (S), No (N):".
>   LEER respuesta.
>   SI respuesta = "S":
>     - total ← total - (total * 0,2).
>   SI NO:
>     - total ← total - (total * 0,1).
>   FIN SI
>   ESCRIBIR total.
> FIN
> ```
>
>== Diagrama de flujo
>
>```mermaid
>graph TD
>    A((Inicio)) --> B[/ESCRIBIR "Dame el coste total de la compra:"/]
>    B --> C[/LEER total/]
>    C --> D[/"ESCRIBIR '¿Tienes una tarjeta de fidelidad? Sí (S), No (N):'"/]
>    D --> E[/LEER respuesta/]
>    E --> F{respuesta = 'S'?}
>    F -- Sí --> G["total = total - (total * 0,2)"]
>    F -- No --> H["total = total - (total * 0,1)"]
>    G --> I[/ESCRIBIR total/]
>    H --> I
>    I --> J((Fin))
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white;
>    classDef rectangulo fill:#43BA43, color:white;
>    classDef inicio_fin fill:#ccc, color:#000;
>    class B,C,D,E,I romboide
>    class G,H rectangulo
>    class F,K rombo
>    class A,J inicio_fin
>```
>
>:::
> Este ejemplo ilustra cómo una estructura alternativa doble puede manejar dos escenarios diferentes basados en una condición.

### 4.1.3 Concatenación de sentencias condicionales

En muchas ocasiones es posible encontrarnos con algoritmos que cuentan con múltiples condiciones consecutivas.

> ***Ejemplo: clasificación de empleados***
>
> Imaginemos un programa que clasifica el nivel de un empleado basándose en tres puntuaciones de evaluación anual. Dependiendo del rango de la puntuación, el empleado puede ser clasificado como "Satisfactorio", "Bueno" o "Excelente".
>
> - **Datos de entrada**: Puntuaciones de evaluación del empleado.
> - **Dato de salida**: Clasificación del empleado.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   ESCRIBIR "Dame la puntuación 1:".
>   LEER p1.
>   ESCRIBIR "Dame la puntuación 2:".
>   LEER p2.
>   ESCRIBIR "Dame la puntuación 3:".
>   LEER p3.
>   puntuación ← p1 + p2 + p3
>   Si la puntuación es >= 90:
>     - ESCRIBIR  "Excelente".
>   Si la puntuación está entre 70 y 89:
>     - ESCRIBIR  "Bueno".
>   Si la puntuación es < 70:
>     - ESCRIBIR  "Satisfactorio".
>   Si la puntuación no coincide con ninguno de los rangos esperados:
>     - ESCRIBIR  "Puntuación no válida".
> FIN
> ```
>
>== Diagrama de flujo
>
>```mermaid
>graph TD
>    A((INICIO)) --> B[/ESCRIBIR "Dame la puntuación 1:"/]
>    B --> C[/LEER p1/]
>    C --> D[/ESCRIBIR "Dame la puntuación 2:"/]
>    D --> E[/LEER p2/]
>    E --> F[/ESCRIBIR "Dame la puntuación 3:"/]
>    F --> G[/LEER p3/]
>    G --> H[puntuación = p1 + p2 + p3]
>    H --> I{puntuación >= 90?}
>    I -- Sí --> J[/ESCRIBIR "Excelente"/]
>    I -- No --> K{puntuación entre 70 y 89?}
>    K -- Sí --> L[/ESCRIBIR "Bueno"/]
>    K -- No --> M{puntuación < 70?}
>    M -- Sí --> N[/ESCRIBIR "Satisfactorio"/]
>    M -- No --> O[/ESCRIBIR "Puntuación no válida"/]
>    J --> P((FIN))
>    L --> P
>    N --> P
>    O --> P
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white; 
>    classDef rectangulo fill:#43BA43, color:white; 
>    classDef inicio_fin fill:#ccc, color:#000;
>
>    class A,P inicio_fin;
>    class B,C,D,E,F,G,J,L,N,O romboide;
>    class H rectangulo;
>    class I,K,M rombo;
>```
>
>:::
> Este ejemplo demuestra cómo manejar diversos escenarios basados en diferentes rangos de valores.

### 4.1.4 Estructura Alternativa Múltiple

La **estructura alternativa múltiple** permite que se ejecuten diferentes conjuntos de instrucciones basadas en el valor de una expresión, no solo en una condición booleana. Cada valor específico de la expresión tiene un conjunto de instrucciones asociado.

> ***Ejemplo: Premio de carrera***
>
> Imaginemos un programa que premia a un corredor dependiendo del puesto obtenido en la carrera. El premio se obtiene a partir del 5.º puesto y se premia con 10.000 € al 5.º, 12.000 € al 4.º, 15.000 € al 3.º, 17.500 € al 2.º y 20.000 € al 1.º. El resto de posiciones no obtienen premio, por lo que obtendrán 0 €.
>
> - **Datos de entrada**: Posición en la carrera.
> - **Dato de salida**: Premio obtenido.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   ESCRIBIR "Dame la posición:".
>   LEER posición.
>   switch (posición):
>     caso 1:
>       premio ← 20000.
>     caso 2:
>       premio ← 17500.
>     caso 3:
>       premio ← 15000.
>     caso 4:
>       premio ← 12000.
>     caso 5:
>       premio ← 10000.
>     por defecto:
>       premio ← 0.
>   ESCRIBIR "El premio obtenido es: " & premio.
> FIN
> ```
>
>== Diagrama de flujo
>
>```mermaid
>   graph TD
>       A((INICIO)) --> B[/ESCRIBIR "Dame la posición:"/]
>       B --> C[/LEER posición/]
>       C --> D{posición?}
>       D -- 1 --> E[premio = 20000]
>       D -- 2 --> F[premio = 17500]
>       D -- 3 --> G[premio = 15000]
>       D -- 4 --> H[premio = 12000]
>       D -- 5 --> I[premio = 10000]
>       D -- otro --> J[premio = 0]
>       E --> K[/ESCRIBIR "El premio obtenido es: " + premio/]
>       F --> K
>       G --> K
>       H --> K
>       I --> K
>       J --> K
>       K --> L((FIN))
>   
>       classDef romboide fill:#188CC4, color:white;
>       classDef rombo fill:#A08DB1, color:white; 
>       classDef rectangulo fill:#43BA43, color:white; 
>       classDef inicio_fin fill:#ccc, color:#000;
>   
>       class A,L inicio_fin;
>       class B,C,K romboide;
>       class E,F,G,H,I,J rectangulo;
>       class D rombo;
>```
>
>:::
> Este ejemplo demuestra cómo una estructura alternativa múltiple puede manejar diversos escenarios basados en diferentes valores concretos.

## 4.2 Estructuras Repetitivas

Las estructuras repetitivas o bucles permiten repetir una secuencia de instrucciones múltiples veces hasta que se cumpla una condición determinada. Esto es extremadamente útil para tareas que necesitan ser ejecutadas repetidamente, como procesar elementos de una lista, realizar cálculos hasta conseguir un resultado deseado, o interactuar con el usuario de manera continua.

### 4.2.1 Estructura Mientras (WHILE)

La estructura **Mientras** (WHILE) se utiliza para repetir un bloque de instrucciones mientras se cumpla una condición específica. La condición se evalúa antes de cada iteración del bucle, por lo que si la condición nunca se vuelve falsa, el bucle puede continuar indefinidamente, lo que se denomina bucle infinito.

```plaintext
MIENTRAS Condición
    Instrucción 1
    Instrucción 2
    ...
    Instrucción N
FIN MIENTRAS
```

> ***Ejemplo: cuenta atrás***
>
> Supongamos que queremos contar hacia atrás desde un número dado hasta llegar a 0. El algoritmo se ejecutará mientras el número sea mayor que 0.
>
> - **Datos de entrada**: Número de segundos.
> - **Dato de salida**: Secuencia de números en cuenta atrás.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   ESCRIBIR "Introduzca número de segundos:".
>   LEER segundos.
>   MIENTRAS segundos >= 0:
>     - ESCRIBIR segundos
>     - segundos ← segundos - 1.
>   FIN MIENTRAS
> FIN
> ```
>
>== Diagrama de flujo
>
>```mermaid
>graph TD
>    A((INICIO)) --> B[/ESCRIBIR "Introduzca número de segundos:"/]
>    B --> C[/LEER segundos/]
>    C --> D{segundos >= 0?}
>    D -- Sí --> E[/ESCRIBIR segundos/]
>    E --> F[segundos = segundos - 1]
>    F --> D
>    D -- No --> G((FIN))
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white; 
>    classDef rectangulo fill:#43BA43, color:white; 
>    classDef inicio_fin fill:#ccc, color:#000;
>
>    class A,G inicio_fin;
>    class B,C,E romboide;
>    class F rectangulo;
>    class D rombo;
>
>```
>
>:::
> Este ejemplo muestra cómo se puede utilizar un bucle WHILE para realizar una cuenta atrás desde un número dado hasta llegar a 0.

## 4.2.2 Estructura Hasta (DO-WHILE)

La estructura **Hasta** (DO-WHILE) garantiza que el bloque de instrucciones se ejecute al menos una vez antes de evaluar la condición. La condición se revisa después de la ejecución del bloque, lo que asegura que el bloque se ejecute al menos una vez aunque la condición sea falsa en la primera evaluación.

```plaintext
REPETIR
    Instrucción 1
    Instrucción 2
    ...
    Instrucción N
MIENTRAS Condición
```

> ***Ejemplo: solicitar número positivo***
>
> Imaginemos un programa que solicita al usuario introducir un número positivo. El programa debe continuar pidiendo un número hasta que el usuario introduzca un número positivo.
>
> - **Datos de entrada**: Números introducidos por el usuario.
> - **Dato de salida**: Número positivo introducido.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   REPETIR
>      - ESCRIBIR "Introduce un número positivo:".
>      - LEER numero.
>   MIENTRAS numero <= 0
>   ESCRIBIR "Tu número positivo es: " & numero
> FIN
> ```
>
>== Diagrama de flujo
>
>```mermaid
>graph TD
>    A((INICIO)) --> B[/ESCRIBIR "Introduce un número positivo:"/]
>    B --> C[/LEER numero/]
>    C --> D{numero <= 0?}
>    D -- Sí --> B
>    D -- No --> E[/ESCRIBIR "Tu número positivo es: " + numero/]
>    E --> F((FIN))
>
>    classDef romboide fill:#188CC4, color:white;
>    classDef rombo fill:#A08DB1, color:white; 
>    classDef rectangulo fill:#43BA43, color:white; 
>    classDef inicio_fin fill:#ccc, color:#000;
>
>    class A,F inicio_fin;
>    class B,C,E romboide;
>    class D rombo;
>
>```
>
>:::
> Este ejemplo ilustra cómo se puede utilizar un bucle DO-WHILE para asegurar que el usuario introduzca un número positivo, repitiendo la solicitud hasta que se cumpla la condición.

## 4.2.3 Estructura Para (FOR)

La estructura **Para** (FOR) se utiliza cuando se conoce de antemano el número de iteraciones que se deben realizar. Esta estructura es útil para repetir un bloque de instrucciones un número específico de veces, con una variable contadora que se actualiza en cada iteración.

**Características del bucle FOR**:

1. La variable contadora se inicializa con un valor inicial.
2. La condición del bucle se evalúa comparando la variable contadora con un valor final.
3. En cada iteración, la variable contadora se incrementa en un valor específico.

```plaintext
PARA Contador DE ValorInicial A ValorFinal CON INCREMENTO = n
    Instrucción 1
    Instrucción 2
    ...
    Instrucción N
FIN PARA
```

> ***Ejemplo: imprimir números del 1 al 5***
>
> Supongamos que queremos imprimir los números del 1 al 5. Utilizamos un bucle FOR para iterar desde el 1 hasta el 5.
>
> - **Datos de entrada**: Ninguno.
> - **Dato de salida**: Números del 1 al 5.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   PARA i DE 1 A 5 CON INCREMENTO = 1
>     - ESCRIBIR i
>   FIN PARA
> FIN
> ```
>
>
>== Diagrama de flujo
>
>```mermaid
> graph TD
>     A((INICIO)) --> B[i = 1]
>     B --> C{i <= 5?}
>     C -- Sí --> D[/ESCRIBIR i/]
>     D --> E[i = i + 1]
>     E --> C
>     C -- No --> F((FIN))
> 
>     classDef romboide fill:#188CC4, color:white;
>     classDef rombo fill:#A08DB1, color:white; 
>     classDef rectangulo fill:#43BA43, color:white; 
>     classDef inicio_fin fill:#ccc, color:#000;
> 
>     class A,F inicio_fin;
>     class D romboide;
>     class B,E rectangulo;
>     class C rombo;
>```
>
>:::
>
> **Explicación**:
>
> 1. Se inicializa la variable `i` en 1.
> 2. Se imprime el valor de `i`.
> 3. Se incrementa `i` en 1 y el proceso se repite hasta que `i` sea 6.
>
> Este ejemplo demuestra cómo se puede utilizar un bucle FOR para imprimir una secuencia de números, en este caso, del 1 al 5.

## 4.3 Elementos auxiliares

Los **elementos auxiliares** son variables que cumplen funciones específicas dentro de un programa. Se utilizan frecuentemente para realizar tareas como contar o acumular valores.

El uso de elementos auxiliares como contadores, acumuladores e interruptores puede facilitar el seguimiento y control del estado dentro de los bucles, permitiendo realizar cálculos acumulativos, controlar el número de iteraciones y gestionar condiciones de manera más estructurada.

### 4.3.1 Contadores

Un **contador** es una variable que se utiliza para contar el número de veces que se repite una acción. Normalmente se inicializa a cero y se incrementa en cada iteración.

### 4.3.2 Acumuladores

Un **acumulador** es una variable que se utiliza para sumar (o multiplicar) un conjunto de valores. Se inicializa en 0 para sumas y en 1 para multiplicaciones.

### 4.3.3 Interruptores

Un **interruptor** es una variable booleana que se utiliza para realizar ciertas acciones mientras su valor sea verdadero o falso.

### 4.3.4 Ejemplo

En el siguiente ejemplo se puede ver el uso de los diferentes elementos auxiliares descritos anteriormente:

> ***Ejemplo: Introducir datos de estudiantes y calcular su media.***
>
> Supongamos que queremos diseñar un algoritmo que permita al usuario introducir las notas de un estudiante y calcular la media de estas notas hasta que el usuario decida terminar.
>
> - **Datos de entrada**: Notas introducidas por el usuario.
> - **Dato de salida**: Media de las notas.
> - **Procedimiento**:
>
>::: tabs
>== Pseudocódigo
>
> ```plaintext
> INICIO
>   acumulador = 0
>   contador = 0
>   REPETIR
>      - ESCRIBIR "Introduce una nota:".
>      - LEER nota
>      - acumulador ← acumulador + nota
>      - contador ← contador + 1
>      - ESCRIBIR "¿Introducir más notas? (s/n)"
>      - LEER continuar
>   MIENTRAS (continuar = "s") o (continuar = "S")
>   SI contador > 0
>      - media ← acumulador / contador
>      - ESCRIBIR "La media es: " & media
>   SI NO
>      - ESCRIBIR "No se introdujeron notas."
>   FIN SI
> FIN
> ```
>
>== Diagrama de flujo
>
>```mermaid
> graph TD
>     A((INICIO)) --> B[acumulador = 0]
>     B --> C[contador = 0]
>     C --> D[/ESCRIBIR "Introduce una nota:"/]
>     D --> E[/LEER nota/]
>     E --> F[acumulador = acumulador + nota]
>     F --> G[contador = contador + 1]
>     G --> H[/"ESCRIBIR '¿Introducir más notas? (s/n)'"/]
>     H --> I[/LEER continuar/]
>     I --> J{¿continuar es 's' o 'S'?}
>     J -- Sí --> D
>     J -- No --> K{contador > 0?}
>     K -- Sí --> L[media = acumulador / contador]
>     L --> M[/ESCRIBIR "La media es: " + media/]
>     M --> N((FIN))
>     K -- No --> O[/ESCRIBIR "No se introdujeron notas."/]
>     O --> N
> 
>     classDef romboide fill:#188CC4, color:white;
>     classDef rombo fill:#A08DB1, color:white; 
>     classDef rectangulo fill:#43BA43, color:white; 
>     classDef inicio_fin fill:#ccc, color:#000;
> 
>     class A,N inicio_fin;
>     class D,E,H,I,M,O romboide;
>     class B,C,F,G,L rectangulo;
>     class J,K rombo;
>```
>
>:::
>
> - Este ejemplo demuestra cómo se puede utilizar un contador para llevar un registro del número de veces que se ha cumplido la condición deseada, de esta manera podrá calcular la media de notas.
> - Además, cuenta con un acumulador que irá sumando las notas del alumno concreto.
> - Finalmente, la variable continuar funcionará como interruptor para parar de introducir notas y continuar con el programa.

::: tip Conceptos clave para recordar
- Las **estructuras de control** permiten modificar el flujo de ejecución de un algoritmo.
- Las **estructuras alternativas** permiten tomar decisiones dentro del programa y ejecutar diferentes acciones basadas en el estado del sistema o los datos de entrada.
- Las **estructuras repetitivas** permiten repetir un bloque de instrucciones múltiples veces hasta que se cumpla una condición determinada.
- Los **elementos auxiliares** como contadores, acumuladores e interruptores facilitan el seguimiento y control del estado dentro de los bucles.
:::