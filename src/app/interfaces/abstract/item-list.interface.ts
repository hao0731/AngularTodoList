import { Item } from '../structures/item'
import { Observable } from 'rxjs'

export abstract class ItemListInterface {
    abstract getItems() : Observable<Array<Item>>
    abstract fixItem(id: number, text: string): void
}
