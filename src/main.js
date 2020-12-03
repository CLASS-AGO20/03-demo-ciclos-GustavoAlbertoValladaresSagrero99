export default class App {

    sumarParesFor()
    {
        let suma= 0;

        for(let i=1;i<=20;i++)
        {

            if (i%2==0)
            {
                suma+=i;
            }
        }

        return suma;
    }

    contarImparesFor(inicio,fin)
    {
        let cuenta = 0;

        for (let i=inicio;i<=fin;i++)
        {
            
            if (i%2!=0)
            {
                cuenta++;
            }
        }

        return cuenta;
    }


    sumarParesWhile()
    {
        let suma= 0;
        let fin = 0;

        while(fin<=20)
        {
            fin++;
            if(fin%2==0)
            {
                suma+=fin;
            }

        }

        return suma;
    }

    contarImparesWhile(inicio, fin)
    {
        let impares = 0;

        while(inicio<=fin)
        {
            if(inicio%2!=0)
            {
                impares++;
            }
            inicio++;
        }

        return impares;

    }

    sumarParesDo()
    {
        let suma = 0;

        let i = 0;

        do{

            i++;
            if(i%2==0)
            {
                suma+=i;
            }

        }while(i<=20)

        return suma;
    }

}

let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(5,11));

console.log(app.sumarParesWhile());

console.log(app.contarImparesWhile(1,11));

console.log(app.sumarParesDo());
