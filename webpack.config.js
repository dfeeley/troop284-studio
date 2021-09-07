// you can just require the js file
let js = require('./config/@sanity/google-maps-input.js');

function modify(buffer) {
   var transformed = JSON.stringify(js)

   // pretty print to JSON with two spaces
   var json = JSON.stringify(transformed, null, 2);
   return json;
}


module.exports = {


   plugins: [
      new CopyWebpackPlugin([
         {
            from: "./config/@sanity/google-maps-input.js",
            to:   "./config/@sanity/google-maps-input.json",
            transform (content, path) {
                return modify(content)
            }
         }])
   ]

}
