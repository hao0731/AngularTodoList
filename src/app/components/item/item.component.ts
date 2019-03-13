import { Component, OnInit, Input } from '@angular/core'
import { Item } from 'src/app/interfaces/structures/item'
import { ItemInterface } from 'src/app/interfaces/abstract/item.interface'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item
  constructor(private operation: ItemInterface) { }

  public completedItem(id: number): void {
    this.operation.completedItem(id)
  }

  ngOnInit() {
  }

}
