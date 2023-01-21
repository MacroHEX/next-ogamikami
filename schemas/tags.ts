import { defineField, defineType } from "sanity";

export default defineType({
  name: "tags",
  title: "Etiquetas",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
    }),
  ],
});
