System.register(["angular2/core"],function(exports_1,context_1){"use strict";var core_1,PuzzleComponent,__decorate=(context_1&&context_1.id,this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=3>c?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(3>c?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r}),__metadata=this&&this.__metadata||function(k,v){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(k,v):void 0};return{setters:[function(core_1_1){core_1=core_1_1}],execute:function(){PuzzleComponent=function(){function PuzzleComponent(){}return PuzzleComponent.prototype.ngOnInit=function(){this.number1=Math.round(Math.random()),this.number2=Math.round(Math.random()),this.number3=Math.round(Math.random()),this.number4=Math.round(Math.random()),console.log(this.number1,this.number2,this.number3,this.number4)},PuzzleComponent.prototype.ngOnChanges=function(){console.log("changed")},PuzzleComponent=__decorate([core_1.Component({selector:"my-puzzle",template:'\n        <section class="setup">\n            <h2>Game setup</h2>\n            <p>Veuillez entrer votre nom</p>\n            <input type="text" #name (keyup)="0">\n        </section>\n\n        <section\n            [ngClass] = "{\n                puzzle: true,\n                solved: case1.value == number1 && case2.value == number2 && case3.value == number3 && case4.value == number4\n                }"\n            [ngStyle] = "{display: name.value === \'\' ? \'none\' : \'block\'}"\n        >\n            <h2>Puzzle game</h2>\n            <p>Bonjour {{name.value}} Essaye de trouver la bonne combinaison</p>\n            <p> Puzzle | {{case1.value == number1 && case2.value == number2 && case3.value == number3 && case4.value == number4 ? \'SOLVED\' : \'NOT SOLVED\' }}</p>\n            Case 1\n            <input type="text" #case1 (keyup)="0">\n             Case 2\n            <input type="text" #case2 (keyup)="0">\n              Case 3\n            <input type="text" #case3 (keyup)="0">\n              Case 4\n            <input type="text" #case4 (keyup)="0">\n            <button (click) = "case1.value = \'1\'">Valider</button>\n\n            <p\n            [hidden] = "case1.value != number1 || case2.value != number2 || case3.value != number3 || case4.value != number4" >\n             Congratulation{{name.value}}, you solved the puzzle\n\n             </p>\n        </section>\n    '}),__metadata("design:paramtypes",[])],PuzzleComponent)}(),exports_1("PuzzleComponent",PuzzleComponent)}}});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInB1enpsZS9wdXp6bGUuY29tcG9uZW50LmpzIiwicHV6emxlL3B1enpsZS5jb21wb25lbnQudHMiXSwibmFtZXMiOlsiU3lzdGVtIiwicmVnaXN0ZXIiLCJleHBvcnRzXzEiLCJjb250ZXh0XzEiLCJjb3JlXzEiLCJQdXp6bGVDb21wb25lbnQiLCJfX2RlY29yYXRlIiwiaWQiLCJ0aGlzIiwiZGVjb3JhdG9ycyIsInRhcmdldCIsImtleSIsImRlc2MiLCJkIiwiYyIsImFyZ3VtZW50cyIsImxlbmd0aCIsInIiLCJPYmplY3QiLCJnZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IiLCJSZWZsZWN0IiwiZGVjb3JhdGUiLCJpIiwiZGVmaW5lUHJvcGVydHkiLCJfX21ldGFkYXRhIiwiayIsInYiLCJtZXRhZGF0YSIsInNldHRlcnMiLCJjb3JlXzFfMSIsImV4ZWN1dGUiLCJwcm90b3R5cGUiLCJuZ09uSW5pdCIsIm51bWJlcjEiLCJNYXRoIiwicm91bmQiLCJyYW5kb20iLCJudW1iZXIyIiwibnVtYmVyMyIsIm51bWJlcjQiLCJjb25zb2xlIiwibG9nIiwibmdPbkNoYW5nZXMiLCJDb21wb25lbnQiLCJzZWxlY3RvciIsInRlbXBsYXRlIl0sIm1hcHBpbmdzIjoiQUFBQUEsT0FBT0MsVUFBVSxpQkFBa0IsU0FBU0MsVUFBV0MsV0FDbkQsWUFDQSxJQVVJQyxRQUNBQyxnQkFWQUMsWUFEZUgsV0FBYUEsVUFBVUksR0FDeEJDLE1BQVFBLEtBQUtGLFlBQWUsU0FBVUcsV0FBWUMsT0FBUUMsSUFBS0MsTUFDN0UsR0FBMkhDLEdBQXZIQyxFQUFJQyxVQUFVQyxPQUFRQyxFQUFRLEVBQUpILEVBQVFKLE9BQWtCLE9BQVRFLEtBQWdCQSxLQUFPTSxPQUFPQyx5QkFBeUJULE9BQVFDLEtBQU9DLElBQ3JILElBQXVCLGdCQUFaUSxVQUFvRCxrQkFBckJBLFNBQVFDLFNBQXlCSixFQUFJRyxRQUFRQyxTQUFTWixXQUFZQyxPQUFRQyxJQUFLQyxVQUNwSCxLQUFLLEdBQUlVLEdBQUliLFdBQVdPLE9BQVMsRUFBR00sR0FBSyxFQUFHQSxLQUFTVCxFQUFJSixXQUFXYSxNQUFJTCxHQUFTLEVBQUpILEVBQVFELEVBQUVJLEdBQUtILEVBQUksRUFBSUQsRUFBRUgsT0FBUUMsSUFBS00sR0FBS0osRUFBRUgsT0FBUUMsT0FBU00sRUFDaEosT0FBT0gsR0FBSSxHQUFLRyxHQUFLQyxPQUFPSyxlQUFlYixPQUFRQyxJQUFLTSxHQUFJQSxJQUU1RE8sV0FBY2hCLE1BQVFBLEtBQUtnQixZQUFlLFNBQVVDLEVBQUdDLEdBQ3ZELE1BQXVCLGdCQUFaTixVQUFvRCxrQkFBckJBLFNBQVFPLFNBQWdDUCxRQUFRTyxTQUFTRixFQUFHQyxHQUF0RyxPQUlKLFFBQ0lFLFNBQ0ksU0FBVUMsVUFDTnpCLE9BQVN5QixXQUVqQkMsUUFBUyxXQ3dCakJ6QixnQkFBQSxXQUFBLFFBQUFBLG9CQXFCQSxNQWRJQSxpQkFBQTBCLFVBQUFDLFNBQUEsV0FDSXhCLEtBQUt5QixRQUFVQyxLQUFLQyxNQUFNRCxLQUFLRSxVQUMvQjVCLEtBQUs2QixRQUFVSCxLQUFLQyxNQUFNRCxLQUFLRSxVQUMvQjVCLEtBQUs4QixRQUFVSixLQUFLQyxNQUFNRCxLQUFLRSxVQUMvQjVCLEtBQUsrQixRQUFVTCxLQUFLQyxNQUFNRCxLQUFLRSxVQUUvQkksUUFBUUMsSUFBSWpDLEtBQUt5QixRQUFTekIsS0FBSzZCLFFBQVM3QixLQUFLOEIsUUFBUzlCLEtBQUsrQixVQUcvRGxDLGdCQUFBMEIsVUFBQVcsWUFBQSxXQUNJRixRQUFRQyxJQUFJLFlBeERwQnBDLGdCQUFBQyxZQUFDRixPQUFBdUMsV0FFR0MsU0FBUyxZQUNUQyxTQUFVLGs0Q0QrQk1yQixXQUFXLHlCQUNabkIsb0JDSW5CSCxVQUFBLGtCQUFBRyIsImZpbGUiOiJwdXp6bGUvcHV6emxlLmNvbXBvbmVudC5qcyIsInNvdXJjZXNDb250ZW50IjpbIlN5c3RlbS5yZWdpc3RlcihbJ2FuZ3VsYXIyL2NvcmUnXSwgZnVuY3Rpb24oZXhwb3J0c18xLCBjb250ZXh0XzEpIHtcbiAgICBcInVzZSBzdHJpY3RcIjtcbiAgICB2YXIgX19tb2R1bGVOYW1lID0gY29udGV4dF8xICYmIGNvbnRleHRfMS5pZDtcbiAgICB2YXIgX19kZWNvcmF0ZSA9ICh0aGlzICYmIHRoaXMuX19kZWNvcmF0ZSkgfHwgZnVuY3Rpb24gKGRlY29yYXRvcnMsIHRhcmdldCwga2V5LCBkZXNjKSB7XG4gICAgICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XG4gICAgICAgIGlmICh0eXBlb2YgUmVmbGVjdCA9PT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgUmVmbGVjdC5kZWNvcmF0ZSA9PT0gXCJmdW5jdGlvblwiKSByID0gUmVmbGVjdC5kZWNvcmF0ZShkZWNvcmF0b3JzLCB0YXJnZXQsIGtleSwgZGVzYyk7XG4gICAgICAgIGVsc2UgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIGlmIChkID0gZGVjb3JhdG9yc1tpXSkgciA9IChjIDwgMyA/IGQocikgOiBjID4gMyA/IGQodGFyZ2V0LCBrZXksIHIpIDogZCh0YXJnZXQsIGtleSkpIHx8IHI7XG4gICAgICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XG4gICAgfTtcbiAgICB2YXIgX19tZXRhZGF0YSA9ICh0aGlzICYmIHRoaXMuX19tZXRhZGF0YSkgfHwgZnVuY3Rpb24gKGssIHYpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKGssIHYpO1xuICAgIH07XG4gICAgdmFyIGNvcmVfMTtcbiAgICB2YXIgUHV6emxlQ29tcG9uZW50O1xuICAgIHJldHVybiB7XG4gICAgICAgIHNldHRlcnM6W1xuICAgICAgICAgICAgZnVuY3Rpb24gKGNvcmVfMV8xKSB7XG4gICAgICAgICAgICAgICAgY29yZV8xID0gY29yZV8xXzE7XG4gICAgICAgICAgICB9XSxcbiAgICAgICAgZXhlY3V0ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICBQdXp6bGVDb21wb25lbnQgPSAoZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGZ1bmN0aW9uIFB1enpsZUNvbXBvbmVudCgpIHtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgUHV6emxlQ29tcG9uZW50LnByb3RvdHlwZS5uZ09uSW5pdCA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIxID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIyID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXIzID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5udW1iZXI0ID0gTWF0aC5yb3VuZChNYXRoLnJhbmRvbSgpKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5udW1iZXIxLCB0aGlzLm51bWJlcjIsIHRoaXMubnVtYmVyMywgdGhpcy5udW1iZXI0KTtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIFB1enpsZUNvbXBvbmVudC5wcm90b3R5cGUubmdPbkNoYW5nZXMgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKCdjaGFuZ2VkJyk7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBQdXp6bGVDb21wb25lbnQgPSBfX2RlY29yYXRlKFtcbiAgICAgICAgICAgICAgICAgICAgY29yZV8xLkNvbXBvbmVudCh7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZWxlY3RvcjogJ215LXB1enpsZScsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZW1wbGF0ZTogXCJcXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVxcXCJzZXR1cFxcXCI+XFxuICAgICAgICAgICAgPGgyPkdhbWUgc2V0dXA8L2gyPlxcbiAgICAgICAgICAgIDxwPlZldWlsbGV6IGVudHJlciB2b3RyZSBub208L3A+XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiICNuYW1lIChrZXl1cCk9XFxcIjBcXFwiPlxcbiAgICAgICAgPC9zZWN0aW9uPlxcblxcbiAgICAgICAgPHNlY3Rpb25cXG4gICAgICAgICAgICBbbmdDbGFzc10gPSBcXFwie1xcbiAgICAgICAgICAgICAgICBwdXp6bGU6IHRydWUsXFxuICAgICAgICAgICAgICAgIHNvbHZlZDogY2FzZTEudmFsdWUgPT0gbnVtYmVyMSAmJiBjYXNlMi52YWx1ZSA9PSBudW1iZXIyICYmIGNhc2UzLnZhbHVlID09IG51bWJlcjMgJiYgY2FzZTQudmFsdWUgPT0gbnVtYmVyNFxcbiAgICAgICAgICAgICAgICB9XFxcIlxcbiAgICAgICAgICAgIFtuZ1N0eWxlXSA9IFxcXCJ7ZGlzcGxheTogbmFtZS52YWx1ZSA9PT0gJycgPyAnbm9uZScgOiAnYmxvY2snfVxcXCJcXG4gICAgICAgID5cXG4gICAgICAgICAgICA8aDI+UHV6emxlIGdhbWU8L2gyPlxcbiAgICAgICAgICAgIDxwPkJvbmpvdXIge3tuYW1lLnZhbHVlfX0gRXNzYXllIGRlIHRyb3V2ZXIgbGEgYm9ubmUgY29tYmluYWlzb248L3A+XFxuICAgICAgICAgICAgPHA+IFB1enpsZSB8IHt7Y2FzZTEudmFsdWUgPT0gbnVtYmVyMSAmJiBjYXNlMi52YWx1ZSA9PSBudW1iZXIyICYmIGNhc2UzLnZhbHVlID09IG51bWJlcjMgJiYgY2FzZTQudmFsdWUgPT0gbnVtYmVyNCA/ICdTT0xWRUQnIDogJ05PVCBTT0xWRUQnIH19PC9wPlxcbiAgICAgICAgICAgIENhc2UgMVxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiAjY2FzZTEgKGtleXVwKT1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgIENhc2UgMlxcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVxcXCJ0ZXh0XFxcIiAjY2FzZTIgKGtleXVwKT1cXFwiMFxcXCI+XFxuICAgICAgICAgICAgICBDYXNlIDNcXG4gICAgICAgICAgICA8aW5wdXQgdHlwZT1cXFwidGV4dFxcXCIgI2Nhc2UzIChrZXl1cCk9XFxcIjBcXFwiPlxcbiAgICAgICAgICAgICAgQ2FzZSA0XFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XFxcInRleHRcXFwiICNjYXNlNCAoa2V5dXApPVxcXCIwXFxcIj5cXG4gICAgICAgICAgICA8YnV0dG9uIChjbGljaykgPSBcXFwiY2FzZTEudmFsdWUgPSAnMSdcXFwiPlZhbGlkZXI8L2J1dHRvbj5cXG5cXG4gICAgICAgICAgICA8cFxcbiAgICAgICAgICAgIFtoaWRkZW5dID0gXFxcImNhc2UxLnZhbHVlICE9IG51bWJlcjEgfHwgY2FzZTIudmFsdWUgIT0gbnVtYmVyMiB8fCBjYXNlMy52YWx1ZSAhPSBudW1iZXIzIHx8IGNhc2U0LnZhbHVlICE9IG51bWJlcjRcXFwiID5cXG4gICAgICAgICAgICAgQ29uZ3JhdHVsYXRpb257e25hbWUudmFsdWV9fSwgeW91IHNvbHZlZCB0aGUgcHV6emxlXFxuXFxuICAgICAgICAgICAgIDwvcD5cXG4gICAgICAgIDwvc2VjdGlvbj5cXG4gICAgXCJcbiAgICAgICAgICAgICAgICAgICAgfSksIFxuICAgICAgICAgICAgICAgICAgICBfX21ldGFkYXRhKCdkZXNpZ246cGFyYW10eXBlcycsIFtdKVxuICAgICAgICAgICAgICAgIF0sIFB1enpsZUNvbXBvbmVudCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFB1enpsZUNvbXBvbmVudDtcbiAgICAgICAgICAgIH0oKSk7XG4gICAgICAgICAgICBleHBvcnRzXzEoXCJQdXp6bGVDb21wb25lbnRcIiwgUHV6emxlQ29tcG9uZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIiwiaW1wb3J0IHtDb21wb25lbnR9IGZyb20gJ2FuZ3VsYXIyL2NvcmUnO1xuaW1wb3J0e09uSW5pdH0gZnJvbSAnYW5ndWxhcjIvY29yZSc7XG5pbXBvcnQge09uQ2hhbmdlc30gZnJvbSBcImFuZ3VsYXIyL2NvcmVcIjtcblxuQENvbXBvbmVudCh7XG5cbiAgICBzZWxlY3RvcjonbXktcHV6emxlJyxcbiAgICB0ZW1wbGF0ZTogYFxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNldHVwXCI+XG4gICAgICAgICAgICA8aDI+R2FtZSBzZXR1cDwvaDI+XG4gICAgICAgICAgICA8cD5WZXVpbGxleiBlbnRyZXIgdm90cmUgbm9tPC9wPlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI25hbWUgKGtleXVwKT1cIjBcIj5cbiAgICAgICAgPC9zZWN0aW9uPlxuXG4gICAgICAgIDxzZWN0aW9uXG4gICAgICAgICAgICBbbmdDbGFzc10gPSBcIntcbiAgICAgICAgICAgICAgICBwdXp6bGU6IHRydWUsXG4gICAgICAgICAgICAgICAgc29sdmVkOiBjYXNlMS52YWx1ZSA9PSBudW1iZXIxICYmIGNhc2UyLnZhbHVlID09IG51bWJlcjIgJiYgY2FzZTMudmFsdWUgPT0gbnVtYmVyMyAmJiBjYXNlNC52YWx1ZSA9PSBudW1iZXI0XG4gICAgICAgICAgICAgICAgfVwiXG4gICAgICAgICAgICBbbmdTdHlsZV0gPSBcIntkaXNwbGF5OiBuYW1lLnZhbHVlID09PSAnJyA/ICdub25lJyA6ICdibG9jayd9XCJcbiAgICAgICAgPlxuICAgICAgICAgICAgPGgyPlB1enpsZSBnYW1lPC9oMj5cbiAgICAgICAgICAgIDxwPkJvbmpvdXIge3tuYW1lLnZhbHVlfX0gRXNzYXllIGRlIHRyb3V2ZXIgbGEgYm9ubmUgY29tYmluYWlzb248L3A+XG4gICAgICAgICAgICA8cD4gUHV6emxlIHwge3tjYXNlMS52YWx1ZSA9PSBudW1iZXIxICYmIGNhc2UyLnZhbHVlID09IG51bWJlcjIgJiYgY2FzZTMudmFsdWUgPT0gbnVtYmVyMyAmJiBjYXNlNC52YWx1ZSA9PSBudW1iZXI0ID8gJ1NPTFZFRCcgOiAnTk9UIFNPTFZFRCcgfX08L3A+XG4gICAgICAgICAgICBDYXNlIDFcbiAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiICNjYXNlMSAoa2V5dXApPVwiMFwiPlxuICAgICAgICAgICAgIENhc2UgMlxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2Nhc2UyIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICAgIENhc2UgM1xuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2Nhc2UzIChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICAgIENhc2UgNFxuICAgICAgICAgICAgPGlucHV0IHR5cGU9XCJ0ZXh0XCIgI2Nhc2U0IChrZXl1cCk9XCIwXCI+XG4gICAgICAgICAgICA8YnV0dG9uIChjbGljaykgPSBcImNhc2UxLnZhbHVlID0gJzEnXCI+VmFsaWRlcjwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgW2hpZGRlbl0gPSBcImNhc2UxLnZhbHVlICE9IG51bWJlcjEgfHwgY2FzZTIudmFsdWUgIT0gbnVtYmVyMiB8fCBjYXNlMy52YWx1ZSAhPSBudW1iZXIzIHx8IGNhc2U0LnZhbHVlICE9IG51bWJlcjRcIiA+XG4gICAgICAgICAgICAgQ29uZ3JhdHVsYXRpb257e25hbWUudmFsdWV9fSwgeW91IHNvbHZlZCB0aGUgcHV6emxlXG5cbiAgICAgICAgICAgICA8L3A+XG4gICAgICAgIDwvc2VjdGlvbj5cbiAgICBgXG59KVxuXG5leHBvcnQgY2xhc3MgUHV6emxlQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0LCBPbkNoYW5nZXMge1xuXG4gICAgbnVtYmVyMSA6IG51bWJlcjtcbiAgICBudW1iZXIyIDogbnVtYmVyO1xuICAgIG51bWJlcjMgOiBudW1iZXI7XG4gICAgbnVtYmVyNCA6IG51bWJlcjtcblxuICAgIG5nT25Jbml0KCkge1xuICAgICAgICB0aGlzLm51bWJlcjEgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLm51bWJlcjIgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLm51bWJlcjMgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuICAgICAgICB0aGlzLm51bWJlcjQgPSBNYXRoLnJvdW5kKE1hdGgucmFuZG9tKCkpO1xuXG4gICAgICAgIGNvbnNvbGUubG9nKHRoaXMubnVtYmVyMSwgdGhpcy5udW1iZXIyLCB0aGlzLm51bWJlcjMsIHRoaXMubnVtYmVyNClcbiAgICB9XG5cbiAgICBuZ09uQ2hhbmdlcygpIHtcbiAgICAgICAgY29uc29sZS5sb2coJ2NoYW5nZWQnKTtcbiAgICB9XG5cblxufSJdLCJzb3VyY2VSb290IjoiL3NvdXJjZS8ifQ==
