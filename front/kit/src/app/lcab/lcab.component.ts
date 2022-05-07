import { Component } from '@angular/core';

@Component({
  selector: 'app-lcab',
  templateUrl: './lcab.component.html',
  styleUrls: ['./lcab.component.css']
})
export class LcabComponent  {
  step = 0;

  setStep(index: number) {
    this.step = index;
  }

  nextStep() {
    this.step++;
  }

  prevStep() {
    this.step--;
  }
}

