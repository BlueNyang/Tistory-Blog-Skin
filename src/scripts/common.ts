import seqSnippet from "./snippets.ts";
import { LoadedTheme } from "./toggleTheme.ts";
import setOffcanvasEvents from "./offcanvas.ts";
import changeSubsBtnIco from "./changeSubsBtn.ts";
//import handleScroll from "./navbarDoc.ts";
//import setEventListenersOnDropdown from "./dropdown.ts";

// 페이지가 로드되면 스니펫 애니메이션 시작
seqSnippet();

LoadedTheme();

setOffcanvasEvents();

changeSubsBtnIco();
