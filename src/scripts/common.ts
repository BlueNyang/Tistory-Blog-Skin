import seqSnippet from "./snippets";
import { LoadedTheme } from "./toggleTheme";
import setOffcanvasEvents from "./offcanvas";
import changeSubsBtnIco from "./changeSubsBtn";
//import handleScroll from "./navbarDoc";
//import setEventListenersOnDropdown from "./dropdown";

// 페이지가 로드되면 스니펫 애니메이션 시작
seqSnippet();

LoadedTheme();

setOffcanvasEvents();

changeSubsBtnIco();
