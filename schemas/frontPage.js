import frontPageSection from './frontPageSection.js'
import pageStatus from './pageStatus'

export default {
  // This is the display name for the type
  title: "Front Page",
  
  // The identifier for this document type used in the api's
  name: "frontPage",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  
  // Now we proceed to list the fields of our document
  fields: [
    pageStatus,
    {
      title: "Sections",
      name: "sections",
      type: "array",
      of: [
        {
          type: "reference",
          to: [
            {type: 'frontPageSection'}
          ],
        }
      ]
    },
  ]
}

