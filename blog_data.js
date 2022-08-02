const blogBody = [
  
    {
        "blog_no": 1,
        "title": "Building Beyond Land",
        "is_image": false,
        "body": `In coastal regions, reclaiming land from the sea has often been the preferred solution for meeting the need for more land for urban development. seaward land reclamation entails the formation of artificial land surfaces which are constructed in such a way as to extend outwards over the sea using advanced geoengineering techniques. Prominent examples are in the coastlines of UAE, Bahrain, China, Singapore, etc. However, recent inquiry into analyzing such a form of urban expansion towards the sea has shown an increasing trend in reclamation activities globally. My Doctoral research has been mainly on finding ways to use satellite dervied information to map this fairly old, but rapidly expanding human footprint on the coastal frontier. Explore cities using the app below to see the difference in coastlines between 2000 and 2020. You could also read my scientific papers and access the Java Script codes on mapping coastal land reclamation <a href="https://github.com/dhritirajsen/Mapping_Coastal_land_reclamation">here </a>
         <div class="container">
        <div class="row">
            <div class="col-sm-6">
                Split map UI to explore coastal land reclamation between 2000 and 2020 in 20 major cities of the world.<p>Please allow a few minutues for the map to load</p>
                <iframe width="800" height="800"
                    src="https://dhritirajsen.users.earthengine.app/view/reclamationsplit" frameborder="1"
                    allow="accelerometer; autoplay; clipboard-black; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    </div>`,
        "introdcution": ""
    }
]

function returnBlog(){
    return blogBody
}