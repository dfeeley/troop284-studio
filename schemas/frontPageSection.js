export default {
  // This is the display name for the type
  title: "Front Page Sections",
  
  // The identifier for this document type used in the api's
  name: "frontPageSection",
  
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
      title: "Slug",
      name: "slug",
      type: "slug",
      options: {
        source: "name",
      },
    },
    {
      title: "Image",
      name: "image",
      type: "image",
    },
    {
      title: "Image Quote Overlay",
      name: "imageQuote",
      type: "array",
      of: [
        { 
          type: "block"
        }
      ],
    },
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    {
      title: "Heading Image",
      name: "headingImage",
      type: "image",
    },
    {
      title: "Body",
      name: "body",
      type: "array",
      of: [
        { 
          type: "block"
        }
      ],
    },
    {
      title: "Components",
      name: "components",
      type: "array",
      of: [
        {
          type: "string"
        }
      ]
    },
  ]
}
