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

// 2026-03-09 - Práctica - Bienvenida e intro a Go 2026C1

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
$$

// Clase 1: audiencia, medios y formatos

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
