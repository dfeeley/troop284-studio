import pageStatus from './pageStatus'

export default {
  // This is the display name for the type
  title: "Misc. Verbiage",
  
  // The identifier for this document type used in the api's
  name: "verbiage",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  
  // Now we proceed to list the fields of our document
  fields: [
    pageStatus,
    {
      title: "Recent Page Preamble",
      name: "recent_preamble",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    },
    {
      title: "Upcoming Page Preamble",
      name: "upcoming_preamble",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    },
  ]
}
