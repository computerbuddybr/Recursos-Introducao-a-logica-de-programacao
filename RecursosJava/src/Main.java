import java.util.ArrayList;
import java.util.List;

public class Main {
    public static void main(String[] args) {
//        TiposDeDados tipos = new TiposDeDados(4,7);
//        //System.out.println(tipos.numero1);
//        System.out.println(tipos.numero2);
//
//        System.out.println(tipos.soma(2,5));
//        //System.out.println(tipos.numero1);
//        System.out.println(tipos.numero2);
        //EstrurasDeDados estruturas = new EstrurasDeDados();

        //tipos.apresentandoTipos();
        //estruturas.apresentandoEstruturas();

        List<TiposDeDados> tipos = new ArrayList<>();

        tipos.add(new NovoTipo(5,4));
        tipos.add(new TiposDeDados(5,4));
        tipos.add(new NovoTipo(15,20));
        tipos.add(new TiposDeDados(15,20));

        for (TiposDeDados dado:
             tipos) {
            System.out.println(dado.soma());
        }



    }
}
