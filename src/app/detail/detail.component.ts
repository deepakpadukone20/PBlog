import { BsModalRef } from 'ngx-bootstrap/modal/bs-modal-ref.service';
import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  newsDetails;

  closeBtnName: string;
  list: any[] = [];
  title;
  source;
  pub_date;
  snippet;
  url;

  constructor(private route: ActivatedRoute, public bsModalRef: BsModalRef) {}

  ngOnInit() {
    this.list.push();
  }
}
