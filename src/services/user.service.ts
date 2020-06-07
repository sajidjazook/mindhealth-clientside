import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  server: String = 'http://localhost:7000/api/';

  constructor(private http: HttpClient) {
    
  }

  addUser(User): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'user', User, { headers: headers })
  }

  getUser(id): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + `user/${id}`, { headers: headers })
  }
  getDocuments(id): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + `document/${id}`, { headers: headers })
  }

  getDocumentById(did,nid): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + `document/${did}/${nid}`, { headers: headers })
  }

  addDiscussion(discussions): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.post<any>(this.server + 'discussion', discussions, { headers: headers })
  }

  getDiscussionsPanel(): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'discussion', { headers: headers })
  }

  getDiscussionsPanelById(id): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'discussion/' + id, { headers: headers })
  }

  searchDiscussionPanelByID(key): Observable<any> {
    let headers = new HttpHeaders();
    headers.append('Content-Type', 'application/json');
    return this.http.get<any>(this.server + 'search/' + key, { headers: headers })
  }

}
