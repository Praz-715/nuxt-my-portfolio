import content1 from "./contents/content1";
import content2 from "./contents/content2";
import content3 from "./contents/content3";

const allBlog = [
    content1,
    content2,
    content3
];

const allBlogs = allBlog.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
});

export default allBlogs;