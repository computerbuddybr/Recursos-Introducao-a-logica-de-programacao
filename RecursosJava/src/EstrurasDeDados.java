import java.sql.SQLOutput;
import java.util.ArrayList;
import java.util.List;

public class EstrurasDeDados{
    public void apresentandoEstruturas() {

        //Em Java, vetores ou Arrays tem número fixo de elementos que determino ao declarar a variável
        String[] alunos = new String[4];
        alunos[0] = "Adriana";
        alunos[1] = "Laura";
        alunos[2] = "Cerdeira";
        alunos[3] = "Novo";
        for (int i = 0; i <= 3; i++) {
            System.out.println(alunos[i]);

        }

        //Para número variável de elementos eu preciso usar uma das muitas estruturas de dados da linguagem Java como o exemplo abaixo com a lista
        List<Integer> listaNumeros = new ArrayList<>();
        for (int a = 1; a <= 5; a++) {
            listaNumeros.add(a);

        }
        //For each do Java
        for (Integer numero:
                listaNumeros) {
            System.out.println(numero);
        }

        while (!listaNumeros.isEmpty()) {
            int elementoLista = listaNumeros.remove(0);
            System.out.printf("%d ", elementoLista);

        }


    }
}
