const blogBody = [
    {
        "blog_no": 1,
        "title": "Working with QA Bands and Bitmasks in Google Earth Engine",
        "image_location": "./image/resource/CFC_1.jpg",
        "is_image": true,
        "body": `
        Most optical satellite imagery products come with one or more QA-bands that allows the user to assess quality of each pixel and extract pixels that meet their requirements. The most common application for QA-bands is to extract information about cloudy pixels and mask them. But the QA bands contain a wealth of other information that can help you remove low quality data from your analysis. Typically the information contained in QA bands is stored as Bitwise Flags. In this post, I will cover basic concepts related to Bitwise operations and how to extract and mask with specific quality indicators using Bitmasks.
        For this post, we will work with MOD11A1.006 Terra Land Surface Temperature and Emissivity Daily Global 1km dataset. But the concepts and code snippet can be applied to any other dataset easily. Looking at the bands metadata, we see that the LST_Day_1km band is accompanied by a QC_Day band containing LST Quality Indicators.
        <img src="./image/resource/CFC_1.jpg" width="350px" height="220px" alt="Bitmasks" >
        `,
        "introdcution": ""
    },
    {
        "blog_no": 2,
        "title": "Split Polygons into Equal Parts using QGIS",
        "is_image": false,
        "body": `In this post, I describe how we can use built-in QGIS processing tools to create a workflow to split polygons into equal parts. Using a clever algorithm and Feature Iterator tool in the Processing Framework, we can easily split all features in a given polygon layer into equal parts.
        `,
        "introdcution": "introduction blog 2"
    }
]

function returnBlog(){
    return blogBody
}