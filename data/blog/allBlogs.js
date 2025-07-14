import content1 from "./contents/content1";
import content2 from "./contents/content2";
import content3 from "./contents/content3";
import installOracle19cLinux7 from "./contents/install-oracle-19c-linux-7";
import installOracle19cLinux8 from "./contents/install-oracle-19c-linux-8";
import installOracle19cLinux9 from "./contents/install-oracle-19c-linux-9";
import localRepoLinux7 from "./contents/local-repo-linux-7";
import localRepoLinux8Or9 from "./contents/local-repo-linux-8-or-9";
import installOracleAsm19cLinux8 from "./contents/install-oracle-asm-19c-linux8";

const allBlog = [
    installOracle19cLinux7,
    installOracle19cLinux8,
    installOracle19cLinux9,
    localRepoLinux7,
    localRepoLinux8Or9,
    installOracleAsm19cLinux8,
    // content1,
    // content2,
    // content3
];

const allBlogs = allBlog.sort((a, b) => {
    return new Date(b.publishedAt) - new Date(a.publishedAt);
});

export default allBlogs;