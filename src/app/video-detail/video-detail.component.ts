
import { Component, OnInit, EventEmitter } from '@angular/core';

@Component({
  selector: 'video-detail',
  templateUrl: './video-detail.component.html',
  styleUrls: ['./video-detail.component.css'],
  inputs: ['video'],
  outputs: ['updateVideoEvent', 'deleteVideoEvent']
})
export class VideoDetailComponent implements OnInit {
  video: any;
  private editTitle: boolean = false;
  private editDesc: boolean = false;
  private editUrl: boolean = false;
  private updateVideoEvent = new EventEmitter();
  private deleteVideoEvent = new EventEmitter();
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

  updateVideo() {
    this.updateVideoEvent.emit(this.video);
  }
  deleteVideo() {
    this.deleteVideoEvent.emit(this.video);
  }


}
