import { defineField, defineType } from "sanity";

export default defineType({
  name: "role",
  title: "Rol",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
    }),
  ],
});
