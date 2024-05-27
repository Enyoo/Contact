import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../model/contact';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService){}


  ngOnInit() {
    this.contactService.getContacts()  // Substitua 'products' pelo seu endpoint real
      .subscribe(
        (response) => {
          this.contacts = response;
        },
        (error) => {
          console.error('Erro ao buscar dados', error);
        }
      );
  }
}
