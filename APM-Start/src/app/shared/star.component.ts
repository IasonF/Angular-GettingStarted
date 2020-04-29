import {Component, EventEmitter, Input, OnChanges, Output} from "@angular/core";

@Component({
  selector: 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnChanges{
  starWidth: number ;
  @Input() rating: number;

  ngOnChanges(): void {
    this.starWidth = this.rating * 75 /5;
  }

  @Output() ratingClicked: EventEmitter<string> = new EventEmitter<string>();

  onClick() {
    console.log("You cannot rate yet. Rating is " + this.rating);
    this.ratingClicked.emit("You cannot rate yet. Rating is " + this.rating);
  }
}
