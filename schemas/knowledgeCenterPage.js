import pageStatus from './pageStatus'

export default {
  // This is the display name for the type
  title: "Knowledge Center Pages",
  
  // The identifier for this document type used in the api's
  name: "knowledgeCenterPage",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  
  // Now we proceed to list the fields of our document
  fields: [
    pageStatus,
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
      title: "Heading",
      name: "heading",
      type: "string",
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
    {
      title: "Sort Order",
      name: "sortOrder",
      type: "number"
    },
  ]
}

