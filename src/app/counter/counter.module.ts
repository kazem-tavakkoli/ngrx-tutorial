import { CommonModule } from "@angular/common";
import { NgModule } from "@angular/core";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { RouterModule, Routes } from "@angular/router";
import { StoreModule } from "@ngrx/store";
import { CounterButtonsComponent } from "./counter-buttons/counter-buttons.component";
import { CounterOutputComponent } from "./counter-output/counter-output.component";
import { CounterComponent } from "./counter/counter.component";
import { CustomCounterInputComponent } from "./custom-counter-input/custom-counter-input.component";
import { counterReduser } from "./state/counter.reduser";
import { COUNTER_STATE_NAME } from "./state/counter.selectors";

 const routes:Routes = [
    {
        path: '',
        component: CounterComponent
    }
 ]
@NgModule({
 declarations: [
    CounterComponent,
    CounterOutputComponent,
    CounterButtonsComponent,
    CustomCounterInputComponent,
 ],
 imports:[
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(COUNTER_STATE_NAME,counterReduser),
    RouterModule.forChild(routes)
]
})

export class CounterModule {

}