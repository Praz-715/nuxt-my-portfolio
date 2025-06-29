import content1 from "./contents/content1";
import content2 from "./contents/content2";
import content3 from "./contents/content3";
import installOracle19cLinux7 from "./contents/install-oracle-19c-linux-7";

const allBlog = [
    installOracle19cLinux7,
    // content1,
    // content2,
    // content3
];

const allBlogs = allBlog.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
});

export default allBlogs;