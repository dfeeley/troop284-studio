// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator'

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type'

import recent from './recent.js'
import activityShowcase from './activityShowcase.js'
import activityPage from './activityPage.js'
import frontPage from './frontPage.js'
import frontPageSection from './frontPageSection.js'
import upcoming from './upcoming.js'

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    frontPage,
    frontPageSection,
    activityPage,
    activityShowcase,
    recent,
    upcoming,
  ]),
})
