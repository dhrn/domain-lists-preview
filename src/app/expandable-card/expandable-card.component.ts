import { Component, OnInit } from '@angular/core';
import { DomainService } from '../services/domain.service';
import { Domain } from '../services/domain.interface';

@Component({
  selector: 'app-expandable-card',
  templateUrl: './expandable-card.component.html',
  styleUrls: ['./expandable-card.component.scss']
})
export class ExpandableCardComponent implements OnInit {

  domainList: Domain[] = [];

  constructor(private  domainListService: DomainService) { }

  ngOnInit(): void {
    this.domainListService.getDomainList().subscribe((data)=>{
      console.log(data);
      this.domainList = data;
    })  
  }


  getOptions(count: any, total: any): any {
    return  {
      percent: 75,
      radius: 40,
      outerStrokeWidth: 10,
      innerStrokeWidth: 10,
      space: -10,
      outerStrokeColor: "#4882c2",
      innerStrokeColor: "#e7e8ea",
      showBackground: false,
      title: `${count} / ${total}`,
      animateTitle: false,
      showUnits: false,
      clockwise: true,
      animationDuration: 1000,
      startFromZero: false,
      outerStrokeGradient: true,
      outerStrokeGradientStopColor: '#53a9ff',
      lazy: true,
      subtitleFormat: (percent: number): string => {
        return ``;
      }
    }
  }

  getPercentage(min: number, max: number) {
    return Math.round((min / max) * 100)+"%";
  }
}
