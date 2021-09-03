import activityShowcase from './activityShowcase.js'

export default {
  // This is the display name for the type
  title: "Activities Page",
  
  // The identifier for this document type used in the api's
  name: "activityPage",
  
  // Documents have the type 'document'. Your schema may describe types beyond documents
  // but let's get back to that later.
  type: "document",
  
  // Now we proceed to list the fields of our document
  fields: [
    {
      title: "Intro",
      name: "intro",
      type: "array",
      of: [
        {
          type: "block"
        }
      ]
    },
    {
      title: "Status",
      name: "status",
      type: "string",
      options: {
        list: [
          {title: "Draft", value: "draft"},
          {title: "Final", value: "final"},
        ],
      },
    },
    {
      title: "Image",
      name: "image",
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
            {type: 'activityShowcase'}
          ],
        }
      ]
    },
  ]
}

