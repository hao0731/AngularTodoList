import { Injectable } from '@angular/core'
import { Item } from 'src/app/interfaces/structures/item'

@Injectable({
  providedIn: 'root'
})
export class ItemFilterService {

  constructor() { }

  public completedFilter(url: string, items: Array<Item>): Array<Item> {
    let result = []
    if(!items.length) return []
    switch(url) {
      case '/undone':
        result = items.filter(item => { return !item.completed })
        break
      case '/completed':
        result = items.filter(item => { return item.completed })
        break
      default:
        result = items
    }
    return result
  }

  public numericUpSortFilter(items: Array<Item>): Array<Item> {
    if(!items.length) return []
    items.sort((a, b) => { return b.id - a.id })
    return items
  }

  public numericDownSortFilter(items: Array<Item>): Array<Item> {
    if(!items.length) return []
    items.sort((a, b) => { return a.id - b.id })
    return items
  }
}
