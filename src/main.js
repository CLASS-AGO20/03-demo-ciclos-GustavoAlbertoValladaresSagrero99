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

}

let app = new App();

console.log(app.sumarParesFor());

console.log(app.contarImparesFor(1,100));
