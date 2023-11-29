class Calculator {
    constructor() {
        //* Aqui é a propriedade que recebe os valores digitados pelo usuário
        this.displayValue = "";
    }

    //* Este método Adiciona valores a propriedade display value
    appendToDisplay(value) {
        this.displayValue += value;
        this.updateDisplay();
    }
    
    //* Este método atualiza o visor (input) com os valores que o usuário digitou
    updateDisplay() {
        document.getElementById("displayContent").value = this.displayValue;
    }

    //* Este método limpa os valores do displayValue (input) 
    clearDisplay() {
        this.displayValue = "";
        this.updateDisplay()
    }

    calculate() {
        try {
            const result = eval(this.displayValue)
            this.displayValue = result
            this.updateDisplay()
        } catch (error) {
            document.getElementById("displayContent").value = error.name;
        }
    }
}

//* Instanciando o objeto

const calc = new Calculator();