import { Component, OnInit, Input } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { Item } from 'src/app/interfaces/structures/item'
import { ItemInterface } from 'src/app/interfaces/abstract/item.interface'

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent implements OnInit {
  @Input() item: Item
  private editing: boolean = false
  private fixItemForm: FormGroup

  constructor(private fb: FormBuilder, private operation: ItemInterface) { 
    this.fixItemForm = fb.group({
      text: ['', [Validators.required]]
    })
  }

  public completedItem(id: number): void {
    this.operation.completedItem(id)
  }

  public fixItem(id:number, text: string): void {
    this.operation.fixItem(id, text)
    this.editing = false
  }

  public removeItem(id: number): void {
    this.operation.removeItem(id)
  }

  public editItem(): void {
    this.fixItemForm.controls.text.setValue(this.item.text)
    this.editing = !this.editing
  }

  ngOnInit() {
  }

}
