import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { createChart } from 'lightweight-charts';

@Component({
  selector: 'ms-home-page',
  templateUrl: 'home-page.component.html',
  styleUrls: ['home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  testForm!: FormGroup;
  
  constructor(
    private formBuilder: FormBuilder,
  ) {}

  ngOnInit(): void {
    const chartContainer = document.getElementById('chart');

    const chart = createChart(chartContainer, { height: 600, width: chartContainer.clientWidth + 30 });
    const lineSeries = chart.addLineSeries();
    lineSeries.setData([
        { time: '2019-04-11', value: 80.01 },
        { time: '2019-04-12', value: 96.63 },
        { time: '2019-04-13', value: 76.64 },
        { time: '2019-04-14', value: 45.89 },
        { time: '2019-04-15', value: 74.43 },
        { time: '2019-04-16', value: 34.01 },
        { time: '2019-04-17', value: 96.63 },
        { time: '2019-04-18', value: 76.64 },
        { time: '2019-04-19', value: 81.89 },
        { time: '2019-04-20', value: 90.00 },
        { time: '2019-04-21', value: 74.43 },
        { time: '2019-04-22', value: 33.01 },
        { time: '2019-04-23', value: 96.63 },
        { time: '2019-04-24', value: 76.64 },
        { time: '2019-04-25', value: 81.89 },
        { time: '2019-04-26', value: 74.43 },
    ]);

    this.initForm();
  }

  initForm(): void {
    this.testForm = this.formBuilder.group({
      test: [''],
    });
  }

  onSubmit(): void {
    console.log('form', this.testForm.value);
  }
}
