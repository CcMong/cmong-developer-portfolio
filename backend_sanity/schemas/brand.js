
export default {
    name: "brand",
    title: "Brand",
    type: "document",
    fields: [
        {
            name: "imgurl",
            title: "ImgURL",
            type: "image",
            options: {
                hotspot: true
            }
        },
        {
            name: "name",
            title: "Name",
            type: "string"
        }
    ]
}