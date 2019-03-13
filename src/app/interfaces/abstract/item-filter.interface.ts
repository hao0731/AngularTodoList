import { Item } from './../structures/item'
export abstract class ItemFilterInterface {
    abstract completedFilter(url: string, items: Array<Item>): Array<Item>
}
