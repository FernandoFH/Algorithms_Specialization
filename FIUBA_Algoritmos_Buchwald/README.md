## Algoritmos Fiuba Curso Buchwald

## 2026 - C1

#### Teórica - Bienvenida (09.03.2026)

- Informacion administartiva del curso
- Bibliografia: "Data Structures and Algorithm Analysis in C++" de Mark Allen Weiss
  "Introduction to Algorithms, Third Edition" de Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest y Clifford Stein

- Temas
  - Complejidad computacional
  - Estructuras de datos / TDAs
  - Algoritmos de resolución de problemas
  - Modelacion de problemas

#### Práctica - Bienvenida e intro a Go

- Lenguaje de programación: Go
- Lenguaje con una sintaxis simple y fácil de aprender.
- Simplifica conceptos complejos de Objetos por structs.
- Compilado, fuertemente y estaticamente tipado.
- Compilación rápida y eficiente.

1. En el directorio del archivo go correr

```go
go mod init ‹modulo>
cd ..
go work init
go work use <modulo>
```

2. Volver al directorio del archivo .go y correr

```go
go build -o ‹ejecutable>
./<ejecutable>

go run main.go

go fmt
go test -v
go help

```

Integer
Floats
Complex
Otros

#### Tipos de Datos compuestos

Collecton/Aggregatio or Non-reference Types

- Arrays
- Structs

Reference Types

- Slices
- Maps
- Channels
- Funciones/Métodos
- Pointers

Interfaces

Mayuscula -> Publico/Exportado
Minuscula -> Privado/No Exportado

#### Estructuras de Control

- If/Else
- Switch
- For
- defer

#### Introcciones de corte

- Break
- Continue
- Return

#### TDA - Bienvenida e Introducción a Demostraciones

- Bibliografia:
  Algorithms Design - Kleinberg, Tardos
  Introduction to Algorithms (4th edition) - Cormen, Leiserson, Rivest, Stein
  Introduction to Theory of Computation (3rd edition) - Sipser
  The Algorithms Design Manual (3rd edition) - Skiena

- Temas
  - Fundamentos matemáticos para algoritmos.
  - Algoritmos: Grafos, D&C, Aleatoreos, Estructura de datos con nuevvos analisis.
  - Tecnicas de diseño de algoritmos.
  - Complejidad computacional y reductiones.
  - Introduccion a la computabilidad.

---

- División y Conquista
- Algoritmos Greedy
- Backtracking
- Programación Dinámica
- Programación Lineal
- Redes de flujo
- Reducciones
- Aproximaciones

---

- Complejidad computacional:
  Comprar y contrastar algoritmos de diferentes complejidades para el mismo dominio.

- Que suscede cuantdo dos algoritmos tienen la misma complejidad?
  Hay que medir el tiempo de ejecución, la cantidad de memoria utilizada, la facilidad de implementación, la escalabilidad, entre otros factores.

#### Introduccion a matematicas.

- Demostraciones Matematicas
  - Implicacion logica
    H -> T (La Hipotesis implica la tesis)
    1. Metodo directo
    2. Metodo Indirecto o por contrarreciproco
    3. Metodo de contradiccion/absurdo
    4. Metodo de induccion
       P(h) -> P(h+1) (P es una propiedad que se cumple para h y se demuestra que se cumple para h+1)

- Grafos
  - GFS
  - BFS
  - Random Walk

- Conectividad de grafos
  - Grafo no dirigido -> Componentes conexas
  - Grafo dirigido -> Componentes fuertemente conexas
  - Algoritmo de Tarjan, Algoritmo de Kosaraju

- Grafos Bipartitos
  - Algoritmo de Hopcroft-Karp

- Puntos de Articulacion y Puentes
  - Algoritmo de Tarjan

- Representacciones
  - Matriz de Adyacencia
  - Lista de Adyacencia

- La matriz de adyacencia es cuadrada (VxV)
- Si el grafo es no dirigido, la matriz es simetrica.
- Si no hay bucles, la diagonal de la matriz es cero.

- Potenciacion de la Matriz
  - Siendo A la matriz de un grafo G -> A^n[i][j] representa la cantidad de caminos de longitud n entre los nodos i y j.

#### Paso indutivo

Supongamos que tenemos una Matriz F^n que nos indica la cantidad de caminos que hay ebtre i y j de largo n en el grafo.

- Si la propiedad vale para A^n, entces F^n = A^n.

Podemos expresar un camnino de n+1 de i a j como los caminos de largo n de i a k, y luego un camino de largo 1 de j a j.

Entonces, la cantidad de caminos de largo n+1 de i a j es la suma de los caminos de largo n de i a k multiplicados por los caminos de largo 1 de k a j, para todo k.

$$
F^{n+1}_{i,j} = \sum_{k} F^n_{i,k} \cdot A_{k,j}
= \sum_{k} A^n_{i,k} \cdot A_{k,j} = A^{n+1}_{i,j}
$$

- Por lo tanto, por inducción, F^n = A^n para todo n.

#### Propiedades de los autovectores y autovalores:

    - Una mendida de centralidad de los nodos
    - Una forma de clusterizar (Comunidades)
           (Mas de esto es Redes Camplejas)

#### Definicion formal de Arbol.

    Un Arbol es un grafo no dirigido tal que, para todo par de vertices existe un unico camino que los une.

$$
\forall u, v \in V, \; \exists! \; P(u, v)
$$

Donde:

- $V$ es el conjunto de vértices del grafo.
- $P(u, v)$ representa el camino entre los vértices $u$ y $v$.
- $\exists!$ indica que existe un único camino.

- El arbol es conexo y acíclico.
- El arbol tiene E = V - 1 aristas, donde E es el número de aristas y V es el número de vértices.

#### Teorema

- Todo arbol de al menso dois vertices tiene al menos dos vertices de grado 1.

#### Handshaking lemma:

- En toodo grafo no dirigido, la cantidad de vértices de grado impar es par.
- La suma de los grados de los vértices de un grafo es igual a dos veces el número de aristas.

Un grafo es bipartito si y solo si no contiene ciclos de longitud impar.

#### Grafos Hamiltonianos y Eulerianos

- Camino de Euler: Un camino que recorre cada arista exactamente una vez.
- Ciclo de Euler: Un ciclo que recorre cada arista exactamente una vez y regresa al vértice de inicio.
  un grafo tiene un ciclo de Euler si y solo si es conexo y cada vértice tiene grado par.
  un grafo tiene un camino de Euler si y solo si es conexo y tiene exactamente dos vértices de grado impar.

- Camino de Hamilton: Un camino que recorre cada vértice exactamente una vez.
- Ciclo de Hamilton: Un ciclo que recorre cada vértice exactamente una vez y regresa al vértice de inicio.
  Un grafo completo con n vértices tiene un ciclo de Hamilton si n >= 3.
  Un grafo con n vértices tiene un ciclo de Hamilton si cada vértice tiene grado al menos n/2.

- Grafos Regulares: Un grafo es k-regular si cada vértice tiene grado k.
  1. El vector unitario es un autovector de la matriz de adyacencia de un grafo k-regular con autovalor k.
  2. Un grafo completo es un grafo regular.
  3. Teorema de Nash-Willimas: Todo grafo k-regular en un grafo con 2k+1 vértices tiene un ciclo de Hamilton.

- Isomorfismo de grafos: Dos grafos G y H son isomorfos si existe una función biyectiva f: V(G) -> V(H) tal que (u, v) es una arista en G si y solo si (f(u), f(v)) es una arista en H.

// 2026-03-12 - Teórica - Introducción a Complejidad Computacional
// 2026-03-12 - Práctica - Punteros, Arreglos y Slices en Go
// 2026-03-12 - TDA - División y Conquista Avanzada

// 2026-03-16 - Teórica - Introducción a Tipos de Datos Abstractos
// 2026-03-16 - Práctica - Estructuras
// 2026-03-16 - TDA - Algoritmos Greedy I

// 2026-03-19 - Teórica - Implementaciones sobre Arreglos y Estructuras Enlazadas
// 2026-03-19 - Práctica - TDAs e Interfaces
// 2026-03-19 - TDA - Algoritmos Greedy II

// 2026-03-26 - Teórica - División y Conquista
// 2026-03-26 - Práctica - Generics en Go y Ejercitación
// 2026-03-26 - TDA - Backtracking I
