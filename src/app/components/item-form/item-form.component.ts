import { Component, OnInit } from '@angular/core'
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
import { ItemFormInterface } from 'src/app/interfaces/abstract/item-form.interface'

@Component({
  selector: 'app-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.css']
})
export class ItemFormComponent implements OnInit {
  private itemForm: FormGroup

  constructor(private fb: FormBuilder, private operation: ItemFormInterface) { 
    this.itemForm = fb.group({
      text: ['',[Validators.required]]
    })
  }

  public addItem(data: any): void {
    this.operation.addItem(data['text'])
    this.itemForm.controls.text.setValue('')
  }

  ngOnInit() {
  }

}
