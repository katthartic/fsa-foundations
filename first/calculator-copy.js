/* eslint-disable linebreak-style */
/* eslint-disable-next-line linebreak-style */
/* eslint-disable no-unused-vars */


function createCalculator() {
    const newCalculator = {
        currentValue: 0,
        value() {
            return this.currentValue
        },
        add(num) {
            this.currentValue += num
        },
        subtract(num) {
            this.currentValue -= num
        },
        clear() {
            this.currentValue = 0
        },
    }
    return newCalculator
}

function addSquareMethod(calculatorInstances) {
    for (let i = 0; i < calculatorInstances.length; i++) {
        const instance = calculatorInstances[i]
        instance.square = function () {
            return this.currentValue * this.currentValue
        }
    }
    return calculatorInstances
}

const humanCalculatorPrototype = {
     total: -10,
     value() {
         return this.total
     },
     add(num) {
         this.total += num
     },
     subtract(num) {
         this.total -= num
     },
     clear() {
         this.total = -10
     }
}

function createHumanCalculator() {
    const newHumanCalculator = Object.create(humanCalculatorPrototype)
    return newHumanCalculator
}

// const human = createHumanCalculator()

// console.log(human.total)
