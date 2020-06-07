import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoutersService {

  private previousUrl: string = undefined;
  private currentUrl: string = undefined;
  
}
