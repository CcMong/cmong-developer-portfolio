export default {
    name: "testimonials",
    title: "Testimonials",
    type: "document",
    fields: [
        {
            name: "name",
            title: "Name",
            type: "string"
        },
        {
            name: "company",
            title: "Company",
            type: "string"
        },
        {
            name: "imageurl",
            title: "ImgURL",
            type: "image",
            options: {
                hotspot: true, // from the docs, this will allow the user to be able to crop images in the interface
            }
        },
        {
            name: "feedback",
            title: "Feedback",
            type: "string"
        }

    ] // define an array of fields that the testimonial section will have. Each field will be an object
}