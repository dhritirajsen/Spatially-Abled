/*Keep the key as mentioned below while adding resources
        "resourceImageLink": "",
        "resourceTitle": "",
        "resourceDescription": "",
        "resourceLink": "",
        "resourceFooter": ""
*/

const resourceDetails = [
    {
        "resourceImageLink": "./image/resource/CFC_1.JPG",
        "resourceTitle": "Code for Climate",
        "resourceDescription": "According to latest study, the intensity of change in our local climate has changed tremendously. How to act with data science? This session focused on the available tools of advanced geospatial technology enabling everyone to understand and communicate climate change by applying geo data science and Earth Observation techniques",
        "resourceLink": "https://github.com/dhritirajsen/code_for_climate",
        "resourceFooter": "CFC_1"
    },
    {
        "resourceImageLink": "./image/resource/CFC_2.JPG",
        "resourceTitle": "Code For Climate 2.0",
        "resourceDescription": "This session of code for climate focused on the basics on satellite image interpreation and calculation of vegetation indices using Python",
        "resourceLink": "https://github.com/dhritirajsen/code_for_climate/blob/main/Earthpy_1.ipynb",
        "resourceFooter": "CFC_2"
    },
    
    
]

function Resources() {
    //document.getElementById("lastUpdated").innerHTML="Updated On 2021/05/01";
    document.getElementById("mapResources").innerHTML =
        resourceDetails.map((eachResource) => {
            return `            
                <div class="col-sm-4">
                <a href="${eachResource.resourceLink}">
                     <div class="blog-id">
                       <div class="blog-id-content">
                        <img style="padding:0px" src="${eachResource.resourceImageLink}" width="100%" height="auto" alt="${eachResource.resourceTitle}">
                        <h3 style="font-family: Georgia, 'Times New Roman', Times, serif;color:black">${eachResource.resourceTitle}</h3>
                        <p style="font-family: 'Times New Roman', Times, serif;">${eachResource.resourceDescription}</p>
                        </div>
                    </div>
                </a>
                </div>
        `;
        }).join("");
}

