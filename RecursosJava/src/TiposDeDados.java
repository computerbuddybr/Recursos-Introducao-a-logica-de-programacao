public class TiposDeDados {

    private int numero1;
    private int numero2;

    TiposDeDados(int a, int b){
        this.numero1 = a;
        this.numero2 = b;

    }
    public void apresentandoTipos() {
        //Tipos de Dados para números inteiros
        byte souUmByte = 127; // De -128 a 127
        short souUmShort = 32767; // De -32,768 a 32,767
        int souUmInteger = 2147483647; // De -2,147,483,648 a 2,147,483,647
        long souUmLong = 9223372036854775807L; // De -9,223,372,036,854,775,808 a 9,223,372,036,854,775,807

        //Tipos de Dados para Decimais
        float souUmFloat = 5.5F; //até 7 casas decimais
        double souUmDouble = 2.5000000008; //até 15 casas decimais

        //Em Java uso aspas duplas para strings e aspas simples para um caractere só
        String souUmString = "Uma sequência de caracteres";
        char souUmCaractere = 'a';

        boolean souUmBooleano = true;

        System.out.println(souUmByte);
        System.out.println(souUmShort);
        System.out.println(souUmInteger);
        System.out.println(souUmLong);
        System.out.println(souUmFloat);
        System.out.println(souUmDouble);
        System.out.println(souUmString);
        System.out.println(souUmCaractere);
        System.out.println(souUmBooleano);
    }

    protected int multiplicar (){
        return this.numero1 * this.numero2;
    }

    int soma(){
        return this.numero1 + this.numero2;
    }

}
