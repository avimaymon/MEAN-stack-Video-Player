import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';


@Injectable()
export class VideoService {

  constructor(private _http: Http) { }
  private _getUrl = 'api/videos';
  getVideos() {
    return this._http.get(this._getUrl)
      .map((response: Response) => response.json());
  }

}
