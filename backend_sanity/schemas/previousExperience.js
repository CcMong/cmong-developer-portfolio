
export default {
    name: "previousExperience",
    title: "Previous Experience",
    type: "document",
    fields: [
        {
            name: "year",
            title: "Year",
            type: "string"
        },
        {
            name: "work",
            title: "Work",
            type: "array",
            of: [{type: "workExperience"}]
        }
    ]
}