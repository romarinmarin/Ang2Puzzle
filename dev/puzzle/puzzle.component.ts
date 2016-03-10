import {Component} from 'angular2/core';
import{OnInit} from 'angular2/core';
import {OnChanges} from "angular2/core";

@Component({

    selector:'my-puzzle',
    template: `
        <section class="setup">
            <h2>Game setup</h2>
            <p>Veuillez entrer votre nom</p>
            <input type="text" #name (keyup)="0">
        </section>

        <section
            [ngClass] = "{
                puzzle: true,
                solved: case1.value == number1 && case2.value == number2 && case3.value == number3 && case4.value == number4
                }"
            [ngStyle] = "{display: name.value === '' ? 'none' : 'block'}"
        >
            <h2>Puzzle game</h2>
            <p>Bonjour {{name.value}} Essaye de trouver la bonne combinaison</p>
            <p> Puzzle | {{case1.value == number1 && case2.value == number2 && case3.value == number3 && case4.value == number4 ? 'SOLVED' : 'NOT SOLVED' }}</p>
            Case 1
            <input type="text" #case1 (keyup)="0">
             Case 2
            <input type="text" #case2 (keyup)="0">
              Case 3
            <input type="text" #case3 (keyup)="0">
              Case 4
            <input type="text" #case4 (keyup)="0">
            <button (click) = "case1.value = '1'">Valider</button>

            <p
            [hidden] = "case1.value != number1 || case2.value != number2 || case3.value != number3 || case4.value != number4" >
             Congratulation{{name.value}}, you solved the puzzle

             </p>
        </section>
    `
})

export class PuzzleComponent implements OnInit, OnChanges {

    number1 : number;
    number2 : number;
    number3 : number;
    number4 : number;

    ngOnInit() {
        this.number1 = Math.round(Math.random());
        this.number2 = Math.round(Math.random());
        this.number3 = Math.round(Math.random());
        this.number4 = Math.round(Math.random());

        console.log(this.number1, this.number2, this.number3, this.number4)
    }

    ngOnChanges() {
        console.log('changed');
    }


}