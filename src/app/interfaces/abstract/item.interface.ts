export abstract class ItemInterface {
    abstract completedItem(id: number): void
    abstract fixItem(id: number, text: string): void
    abstract removeItem(id: number): void
}
