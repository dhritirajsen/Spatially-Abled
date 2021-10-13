/*Keep the key as mentioned below while adding resources
        "resourceImageLink": "",
        "resourceTitle": "",
        "resourceDescription": "",
        "resourceLink": "",
        "resourceFooter": ""
*/

const resourceDetails = [
    {
        "resourceImageLink": "./image/resource/CFC_1.jpg",
        "resourceTitle": "Code for Climate",
        "resourceDescription": "According to latest study, the intensity of change in our local climate has changed tremendously. How to act with data science? This session focused on the available tools of advanced geospatial technology enabling everyone to understand and communicate climate change by applying geo data science and Earth Observation techniques",
        "resourceLink": "https://github.com/dhritirajsen/code_for_climate",
        "resourceFooter": "CFC_1"
    },
    {
        "resourceImageLink": "./image/resource/CFC_2.jpg",
        "resourceTitle": "Code For Climate 2.0",
        "resourceDescription": "This session of code for climate focused on the basics on satellite image interpreation and calculation of vegetation indices using Python",
        "resourceLink": "https://www.smartshanghai.com/event/67450",
        "resourceFooter": "CFC_2"
    },
    {
        "resourceImageLink": "./image/resource/climate.jpg",
        "resourceTitle": "Shanghai Climate Action Conference 2021",
        "resourceDescription": "Green Initiatives hosted the Climate Action Conference Shanghai with support from PwC China, The United States Consulate General, The British Consulate General, Australian Consulate-General, The Norwegian Consulate General and Consulate-General of the Kingdom of the Netherlands. I was fortunate enough to moderate the panel discussion on Solutions Towards Carbon Emissions",
        "resourceLink": "https://greeninitiatives.cn/event/forum-pwc-sep2021/",
        "resourceFooter": "climate"
    },
    {
        "resourceImageLink": "./image/resource/movie.jpg",
        "resourceTitle": "The Year Earth Changed : Green Initiatives August Film Screening",
        "resourceDescription": "I was invited as a guest speaker to connect with common people at Green Initiatives' 133rd film screening, “The Year Earth Changed” a special feature to reflect on nature’s resiliency and some of the lessons learned from global lockdowns.",
        "resourceLink": "https://learn.seedsofchange.tech/sessions/60ffabfcaa14b4001a8acad5",
        "resourceFooter": "movie"
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

