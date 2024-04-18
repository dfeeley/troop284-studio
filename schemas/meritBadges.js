export default {
  // This is the display name for the type
  title: "Merit Badge",

  // The identifier for this document type used in the api's
  name: "meritbadge",

  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",

  // Now we proceed to list the fields of our document
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
    },
    {
      title: 'Slug',
      name: 'slug',
      type: 'slug',
      options: {
        source: "name",
      },
    },
    {
      title: "Eagle Required?",
      name: "eagle_required",
      type: "boolean"
    },
    {
      title: "Eagle Alternates",
      name: "eagle_alternates",
      type: "array",
      of: [{type: 'string'}]
    },
    {
      title: "Pamphlet URL",
      name: "pamphlet_url",
      type: "string",
      validation: false
    },
    {
      title: "Workbook URL",
      name: "workbook_url",
      type: "string",
      validation: false
    },
    {
      title: "Image URL override",
      name: "override_image_url",
      description: "Only required if the image url does not match the usual pattern",
      type: "string",
      validation: false
    },
    {
      title: "Requirements URL override",
      name: "override_requirements_url",
      description: "Only required if the requirements url does not match the usual pattern",
      type: "string",
      validation: false
    }
  ]
}

