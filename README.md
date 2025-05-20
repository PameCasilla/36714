# 36714
Proyecto analizador de sintaxis
## 📚 ¿Qué hace el programa?

- Lee una entrada desde un archivo `input.txt` o desde la consola.
- Analiza si la entrada tiene una sintaxis válida según la gramática.
- Construye el árbol de derivación.
- Si no hay errores de sintaxis:
  - Recorta el árbol con un Visitor para simular la ejecución de las sentencias.
  - Imprime el resultado de los `imprimir(...)`.
