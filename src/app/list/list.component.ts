import { Component, OnInit } from '@angular/core';
import { ContactService } from '../services/contact.service';
import { Contact } from '../model/contact';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent implements OnInit {
  contacts: Contact[] = [];

  constructor(private contactService: ContactService, private router: Router){}


  ngOnInit() {
    this.contactService.getContacts()
      .subscribe(
        (response) => {
          this.contacts = response;
        },
        (error) => {
          console.error('Erro ao buscar dados', error);
        }
      );
  }

  remove(id:number){
    this.contactService.deleteContact(id).subscribe(
      (response) => {
        this.router.navigate(['/']);
      },
      (error) => {
        console.error('Erro ao buscar dados', error);
      }
    )
  }
  criar(){
    window.location.href = '/new';
  }
}
