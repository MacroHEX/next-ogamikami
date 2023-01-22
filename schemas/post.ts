import { defineField, defineType } from "sanity";

export default defineType({
  name: "post",
  title: "Post",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Titulo",
      type: "string",
      validation: (Rule) => Rule.required(),
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
      name: "author",
      title: "Autor",
      type: "reference",
      to: { type: "author" },
    }),
    defineField({
      name: "staff",
      title: "Staff",
      type: "array",
      of: [{ type: "reference", to: { type: "author" } }],
    }),
    defineField({
      name: "mainImage",
      title: "Imagen Principal",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "miniImage",
      title: "Imagen Miniatura",
      type: "image",
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "categories",
      title: "Categorias",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    defineField({
      name: "tags",
      title: "Etiquetas",
      type: "array",
      of: [{ type: "reference", to: { type: "tags" } }],
    }),
    defineField({
      name: "publishedAt",
      title: "Publicado el",
      type: "datetime",
    }),
    defineField({
      name: "description",
      title: "Descripción Corta",
      type: "string",
    }),
    defineField({
      name: "body",
      title: "Cuerpo",
      type: "blockContent",
    }),
    defineField({
      name: "isHighlighted",
      title: "Destacado",
      type: "boolean",
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
