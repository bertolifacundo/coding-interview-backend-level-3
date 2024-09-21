import { Server } from "@hapi/hapi";
import { ItemController } from "./item.controller";

const itemController = new ItemController();

export const ItemRoutes = (server: Server) => {
  server.route([
    {
      method: "GET",
      path: "/ping",
      handler: async (request, h) => {
        return {
          ok: true,
        };
      },
    },
    {
      method: "GET",
      path: "/items",
      handler: itemController.getItems.bind(itemController),
    },
    {
      method: "GET",
      path: "/items/{id}",
      handler: itemController.getItemById.bind(itemController),
    },
    {
      method: "POST",
      path: "/items",
      handler: itemController.createItem.bind(itemController),
    },
    {
      method: "PUT",
      path: "/items/{id}",
      handler: itemController.updateItem.bind(itemController),
    },
    {
      method: "DELETE",
      path: "/items/{id}",
      handler: itemController.deleteItem.bind(itemController),
    },
  ]);
};
