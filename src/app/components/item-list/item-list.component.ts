import { Component, OnInit } from '@angular/core'
import { Router } from '@angular/router'
import { Observable } from 'rxjs'
import { Item } from './../../interfaces/structures/item'
import { ItemListInterface } from 'src/app/interfaces/abstract/item-list.interface'
import { ItemFilterInterface } from 'src/app/interfaces/abstract/item-filter.interface'

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  private items : Array<Item>
  private itemSubject: Observable<Array<Item>>

  constructor(private operation: ItemListInterface, private Filter: ItemFilterInterface,private router: Router) { 
  }

  ngOnInit() {
    this.itemSubject = this.operation.getItems()
    this.itemSubject.subscribe(item => { 
      this.items = item
      this.items = this.Filter.completedFilter(this.router.url, this.items)
    })
  }

}
