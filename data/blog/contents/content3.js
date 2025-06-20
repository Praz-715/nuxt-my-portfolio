import image1 from "../images/sql.png";

export default {
    title: "Understanding SQL Closures",
    description: "A deep dive into closures in SQL, exploring how they work and their practical applications.",
    author: "Jane Doe",
    slug: "understanding-sql-closures",
    coverImage: image1,
    publishedAt: "2023-10-01",
    content: [
        {
            type: "paragraph",
            text: "SQL closures are a powerful feature that allows functions to retain access to their lexical scope even when the function is executed outside of that scope."
        },
        {
            type: "code",
            lang: "python",
            code: `print("Hello, World!")`,
        },
        {
            type: "heading1",
            text: "What is a Closure?"
        },
        {
            type: "image",
            src: image1,
            alt: "Closure Diagram"
        }

    ]
}