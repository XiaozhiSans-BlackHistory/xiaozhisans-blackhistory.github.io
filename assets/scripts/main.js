import {黑历史仓库} from "../data/黑历史仓库.js";
import initLibs from "https://fastly.jsdelivr.net/gh/XiaozhiSans/languagejs@0.1.0/libs/common.lib.js";

initLibs();

黑历史仓库.forEach(仓库 => {
	findEle("[repoList]").innerHTML += `<dd style="font-size: 1.25em;"><a class="-icon-link" href="https://github.com/XiaozhiSans/${仓库[0]}">${仓库[1]}</a></dd><dt>${仓库[2]}</dt><br>`;
});

layer.close(loadIndex);

// const checkDevice = () => {return browser().device;}
