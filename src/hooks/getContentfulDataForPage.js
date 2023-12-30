import UseContentful from "./use-contentful";

// add extra conditions for future queries in different pages
const returnContentfulData = (nameOfPage) => {
    let query=``;
    if(nameOfPage==="About"){
        query = `  
        query {
          aboutGalleryImagesCollection {
            items {
              galleryImagesCollection{
                items {
                  title
                  description
                  url
                }
              }
            }
          }
        }
        `;
        const data = UseContentful(query)
        return data
    }
  };
  
  export default returnContentfulData;