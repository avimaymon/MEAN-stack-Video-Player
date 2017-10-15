import { Video } from './video';
import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VideoService {

  constructor(private _http: Http) { }
  private _getUrl = 'api/videos';
  private _postUrl = 'api/videos';
  private _putUrl = 'api/videos/';  // because of /:id
  private _deleteUrl = 'api/videos/';
  getVideos() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

  addVideo(video: Video) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.post(this._postUrl, JSON.stringify(video), options)
      .map((response: Response) => response.json());
  }

  updateVideo(video: Video) {
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });
    return this._http.put(this._putUrl + video._id, JSON.stringify(video), options)
      .map((response: Response) => response.json());
  }

  deleteVideo(video: Video) {
    return this._http.delete(this._deleteUrl + video._id)
      .map((response: Response) => response.json());
  }
}
