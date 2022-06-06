#Função com condicional
def minhaFuncao(numero, comparador):
    if numero > comparador:
        texto = "{} é maior que {}"
        texto.format(numero, comparador)
    else:
        texto = "{} é menor que {}"
        texto.format(numero, comparador)
    print(texto.format(numero, comparador))

# Declaração de Variável
minhaVariavel = 5


#Declaação de array (List)
minhaLista = [2,4,6,8,10]

# Laço com condicional
for elemento in minhaLista:
    minhaFuncao(elemento, minhaVariavel)
    minhaFuncao(elemento, minhaVariavel)
print("Fora do loop")

