import CalculatorListener from "./generated/CalculatorListener.js";

export class CustomCalculatorListener extends CalculatorListener {

    enterSeleccion(ctx) {
        console.log("Entrando a una instrucción 'según'.");
    }

    enterCaso(ctx) {
        console.log("Entrando a un 'caso'.");
    }

    enterCaso_defecto(ctx) {
        console.log("Entrando al 'caso defecto'.");
    }

    enterSalida(ctx) {
        const texto = ctx.cadena().getText();
        console.log(`Texto a imprimir: ${texto}`);
    }

    enterTerminar(ctx) {
        console.log("Se encontró una instrucción 'salir'.");
    }
}
