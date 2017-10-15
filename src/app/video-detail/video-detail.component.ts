import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video']
})
export class VideoDetailComponent implements OnInit {

  private editTitle: boolean = false;
  private editDesc: boolean = false;
  private editUrl: boolean = false;
  onTitleClick() {
    this.editTitle = true;
  }
  onDescClick() {
    this.editDesc = true;
  }
  onUrlClick() {
    this.editUrl = true;
  }
  constructor() { }

  ngOnInit() {
  }
  ngOnChanges() {
    this.editTitle = false;
    this.editDesc = false;
    this.editUrl = false;
  }
}
