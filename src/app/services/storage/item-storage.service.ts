import { Injectable } from '@angular/core'
import { BehaviorSubject, Observable } from 'rxjs'
import { Item } from '../../interfaces/structures/item'
import { ItemFormInterface } from 'src/app/interfaces/abstract/item-form.interface'
import { ItemListInterface } from 'src/app/interfaces/abstract/item-list.interface'
import { ItemInterface } from 'src/app/interfaces/abstract/item.interface'

@Injectable({
  providedIn: 'root'
})
export class ItemStorageService implements ItemFormInterface, ItemListInterface, ItemInterface {
  private itemsStore: BehaviorSubject<Array<Item>> = new BehaviorSubject([])
  private items: Observable<Array<Item>> = this.itemsStore

  constructor() { }

  public addItem(text: string): void {
    const items = this.itemsStore.getValue()
    const length = items.length
    const id = (length)? items[length - 1].id + 1: 1
    let item = { id: id, text: text, completed: false }
    items.push(item)
    this.itemsStore.next(items)
  }

  public fixItem(id: number, text: string): void {
    let items = this.itemsStore.getValue()
    const length = items.length
    for(let i = 0;i < length;i++) {
      if(items[i].id === id) {
        items[i].text = text
        break
      }
    }
  }

  public completedItem(id: number): void {
    let items = this.itemsStore.getValue()
    const length = items.length
    for(let i = 0;i < length;i++) {
      if(items[i].id === id) {
        items[i].completed = !items[i].completed
        break
      }
    }        
  }

  public removeItem(id: number): void {
    const items = this.itemsStore.getValue()
    const result = items.filter(item => { return item.id !== id })
    this.itemsStore.next(result)
  }

  public removeCompletedItems(): void {
    const items = this.itemsStore.getValue()
    const result = items.filter(item => { return item.completed === false }) 
    this.itemsStore.next(result) 
  }

  public getItems(): Observable<Array<Item>> {
    return this.items
  }
}
