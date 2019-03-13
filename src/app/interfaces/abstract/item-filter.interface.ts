import { Item } from './../structures/item'
export abstract class ItemFilterInterface {
    abstract completedFilter(url: string, items: Array<Item>): Array<Item>
    abstract numericUpSortFilter(items: Array<Item>): Array<Item>
    abstract numericDownSortFilter(items: Array<Item>): Array<Item>
}
