import { Item } from "../../../../entities/item.entities";
import { AppError } from "../../../../errors/app-error";
import { ItemRepository } from "../../dommain/item.repository";

export class CreateItemUseCase {
  constructor(private readonly itemRepository: ItemRepository) {}

  async execute(name: string, price: number): Promise<Item> {
    if (price < 0) {
      throw new AppError('Field "price" cannot be negative', 400);
    }
    if (price === undefined || price === null) {
        throw new AppError('Field "price" is required', 400);
      }
    try {
      const newItem = new Item();
      newItem.name = name;
      newItem.price = price;

      return await this.itemRepository.save(newItem);
    } catch (error) {
      throw new AppError("Failed to create item", 404);
    }
  }
}
