import activityMapPin from './activityMapPin'

export default {
  // This is the display name for the type
  title: "Recent",
  
  // The identifier for this document type used in the api's
  name: "recent",
  
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
      title: "Subtitle",
      name: "subtitle",
      type: "string",
      description: "Usually the date (August 20xx) of the activity"
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
      title: "Date",
      name: "date",
      type: "date",
      description: "Date of this activity.  For a range of dates, just enter the start"
    },
    {
      title: 'Location',
      name: 'location',
      type: 'geopoint'
    },
    activityMapPin,
    {
      title: "Other Images",
      name: "otherimages",
      type: "array",
      of: [
        {
          type: "image"
        }
      ]
    },
    {
      title: "Photo Album",
      name: "photoalbum",
      type: "string",
    },
  ]
}
