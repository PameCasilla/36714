import CalculatorVisitor from "./generated/CalculatorVisitor.js";

export class CustomCalculatorVisitor extends CalculatorVisitor {

    visitPrograma(ctx) {
        console.log("Iniciando recorrido del programa.");
        return this.visitChildren(ctx);
    }

    visitSeleccion(ctx) {
        console.log("Evaluando estructura 'según'...");
        return this.visitChildren(ctx);
    }

    visitCaso(ctx) {
        const constante = ctx.constante().getText();
        console.log(`Caso con constante: ${constante}`);
        return this.visitChildren(ctx);
    }

    visitCaso_defecto(ctx) {
        console.log("Ejecutando caso defecto.");
        return this.visitChildren(ctx);
    }

    visitSalida(ctx) {
        const texto = ctx.cadena().getText();
        console.log(`Salida: ${texto}`);
        return null;
    }

    visitTerminar(ctx) {
        console.log("Salida del programa detectada con 'salir'.");
        return null;
    }
}
