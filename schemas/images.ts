import { defineField, defineType } from "sanity";

export default defineType({
  name: "images",
  title: "Images",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Nombre",
      type: "string",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
    }),
    defineField({
      name: "imagen",
      title: "Imagen",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
  ],
});
