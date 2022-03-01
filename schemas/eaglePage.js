import eaglePageSection from './eaglePageSection.js'
import pageStatus from './pageStatus'

export default {
  // This is the display name for the type
  title: "Path to Eagle Page",
  
  // The identifier for this document type used in the api's
  name: "eaglePage",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  
  // Now we proceed to list the fields of our document
  fields: [
    {
      title: "Heading",
      name: "heading",
      type: "string",
    },
    pageStatus,
    {
      title: "Badge",
      name: "badge",
      type: "image",
    },
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {type: 'eaglePageSection'}
          ],
        }
      ]
    },
  ]
}

