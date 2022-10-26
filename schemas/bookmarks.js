export default {
  // This is the display name for the type
  title: "Bookmarks",
  
  // The identifier for this document type used in the api's
  name: "bookmarks",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  
  // Now we proceed to list the fields of our document
  fields: [
    {
      title: "Title",
      name: "title",
      type: "string",
    },
    {
      title: 'Link',
      name: 'url',
      type: 'url'
    },
    {
      title: "Sort Order",
      name: "sortOrder",
      type: "number"
    },
  ]
}

