// import { Server } from "@hapi/hapi";
// import { AppDataSource } from "./config/database/ormconfig";
// import { Item } from "./entities/item.entities";

// export const defineRoutes = (server: Server) => {
//   // server.route({
//   //   method: "GET",
//   //   path: "/ping",
//   //   handler: async (request, h) => {
//   //     return {
//   //       ok: true,
//   //     };
//   //   },
//   // });
//   server.route({
//     method: "GET",
//     path: "/items",
//     handler: async (request, h) => {
//       const itemRepository = AppDataSource.getRepository(Item);
//       const items = await itemRepository.find();
//       return h.response(items).code(200);
//     },
//   });
//   server.route({
//     method: "GET",
//     path: "/items/{id}",
//     handler: async (request, h) => {
//       const itemRepository = AppDataSource.getRepository(Item);
//       const itemId = parseInt(request.params.id, 10);

//       const item = await itemRepository.findOneBy({ id: itemId });

//       if (!item) {
//         return h.response({ message: "Item not found" }).code(404);
//       }

//       return item;
//     },
//   });

//   server.route({
//     method: "POST",
//     path: "/items",
//     handler: async (request, h) => {
//       const { name, price } = request.payload as {
//         name: string;
//         price: number;
//       };
//       if (price === undefined) {
//         return h
//           .response({
//             errors: [{ field: "price", message: 'Field "price" is required' }],
//           })
//           .code(400);
//       }
//       if (price < 0) {
//         return h
//           .response({
//             errors: [{ field: "price", message: 'Field "price" cannot be negative' }],
//           })
//           .code(400);
//       }
//       const itemRepository = AppDataSource.getRepository(Item);
//       const newItem = itemRepository.create(request.payload as Item);
//       const result = await itemRepository.save(newItem);
//       return h.response(result).code(201);
//     },
//   });

//   server.route({
//     method: "PUT",
//     path: "/items/{id}",
//     handler: async (request, h) => {
//       const { name, price } = request.payload as {
//         name: string;
//         price: number;
//       };
//       if (price < 0) {
//         return h
//           .response({
//             errors: [
//               { field: "price", message: 'Field "price" cannot be negative' },
//             ],
//           })
//           .code(400);
//       }
//       const itemRepository = AppDataSource.getRepository(Item);
//       const itemId = parseInt(request.params.id, 10);
//       const item = await itemRepository.findOneBy({ id: itemId });
//       if (!item) {
//         return h.response({ error: "Item not found" }).code(404);
//       }

//       item.name = name;
//       item.price = price;
//       const updatedItem = await itemRepository.save(item);
//       return h.response(updatedItem).code(200);
//     },
//   });
//   server.route({
//     method: "DELETE",
//     path: "/items/{id}",
//     handler: async (request, h) => {
//       const itemRepository = AppDataSource.getRepository(Item);
//       const item = await itemRepository.findOneBy({
//         id: Number(request.params.id),
//       });
//       if (!item) {
//         return h.response({ error: "Item not found" }).code(404);
//       }
//       await itemRepository.remove(item);
//       return h.response().code(204);
//     },
//   });
// };
