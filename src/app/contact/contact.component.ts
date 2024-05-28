import { Component, Input, OnInit, inject } from '@angular/core';
import { Contact } from '../model/contact';
import { ApiService } from '../services/api.service';
import { Router, ActivatedRoute, NavigationEnd, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { ContactService } from '../services/contact.service';
import moment from 'moment';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css'
})
export class ContactComponent implements OnInit {
  public edit:boolean = true;
  @Input() contact: Contact = {
    id: 0,
    name: "",
    email: "",
    phone: "",
		cell: "",
    created_at: '',
    updated_at: moment(new Date()).format('YYYY-MM-DD[T00:00:00.000Z]')
};

  constructor(private contactService: ContactService, 
    private route: ActivatedRoute, 
    private router: Router)
  {
     // Get the route parameter
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      let id = params.get('c')
      this.edit = !params.get('e') ? true : false;
      console.log(this.edit);
      if(id){
        this.contactService.getContact(parseInt(id)) 
          .subscribe(
            (response) => {
              this.contact = response;
            },
            (error) => {
              console.error('Erro ao buscar dados', error);
            }
          );
      }
    });
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        let currentRoute = this.router.url;
        console.log('Rota atual:', currentRoute);
      }
    });
  }

  save(){
    if(this.contact.id == 0){
      this.contactService.postContact(this.contact).subscribe(
        (response) => {
          this.contact = response;
          this.router.navigate(['/']);
        },
        (error) => {
          alert('Erro ao salvar dados');
        }
      )
    }else{
      this.contactService.putContact(this.contact).subscribe(
        (response) => {
          this.contact = response;
        },
        (error) => {
          alert('Erro ao salvar dados');
        }
      )
    }
  }
}
