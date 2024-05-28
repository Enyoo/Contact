import { Injectable } from '@angular/core';
import { ApiService } from './api.service';
import { Contact } from '../model/contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {

  constructor(private apiService: ApiService) { }

  getContacts(){
    return this.apiService.getData("contacts");
  }

  getContact(id:number){
    return this.apiService.getData(`contacts/${id}`);
  }

  postContact(contact:Contact){
    return this.apiService.postData("contacts", contact)
  }

  putContact(contact:Contact){
    return this.apiService.putData(`contacts/${contact.id}`, contact)
  }

  deleteContact(id:number){
    return this.apiService.deleteData(`contacts/${id}`);

  }
}
