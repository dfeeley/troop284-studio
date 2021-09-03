export default {
  // This is the display name for the type
  title: "Activity Showcase",
  
  // The identifier for this document type used in the api's
  name: "activityShowcase",
  
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
      title: "Body",
      name: "body",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    },
    {
      title: "Images",
      name: "images",
      type: "array",
      of: [
        {
          type: "image"
        }
      ]
    },
  ]
}
