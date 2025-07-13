// 메인 화면의 코드 스니펫 애니메이션을 처리하는 스크립트
// 스니펫 목록
const originalSnippets: string[] = [
  "console.log('Hello World!'); //JavaScript ", // JavaScript
  'printf("Hello World!"); //C ', // C
  'std::cout << "Hello World!" << std::endl; //C++ ', // C++
  'Console.WriteLine("Hello World!"); //C# ', // C#
  'fmt.Println("Hello World!") //Go ', // Go
  'System.out.println("Hello World!"); //Java ', // Java
  'println("Hello World!") //Kotlin ', // Kotlin
  'print("Hello World!") #Python ', // Python
  'echo "Hello World!" #Linux-Shell ', // ShellScript
];

// 스니펫 출력 속도
const initTypingSpeed: number = 80;
const initDeletingSpeed: number = 40;
const waitTimeToDelete: number = 3000;

// 스니펫을 표시할 HTML 요소
const snippetElement: HTMLElement | null =
  document.getElementById("random-snippet");

// 현재 표시 중인 스니펫의 인덱스와 상태, 속도
let typingSpeed: number = 80;
let displayText: string = "";
let isDeleting: boolean = false;
let currentIndex: number = 0;

// 배열을 무작위로 섞는 함수
function shuffleSquence(array: string[]): string[] {
  const newArray = [...array];
  for (let i = newArray.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
  }
  return newArray;
}

// 무작위로 섞인 스니펫을 저장할 참조
// 초기화 시 한 번만 섞이도록 설정
// 이후 스니펫이 모두 출력되면 다시 섞음
let randomizedSnippetsRef: string[] = [];
// 애니메이션의 타이머 ID를 저장
let animationTimeoutId: ReturnType<typeof setTimeout> | null = null;

// 스니펫 애니메이션을 시작하는 함수
export default function seqSnippet() {
  // 기존 애니메이션이 실행 중이면 중단
  if (animationTimeoutId !== null) {
    clearTimeout(animationTimeoutId);
  }

  // 스니펫 요소가 없으면 종료
  if (randomizedSnippetsRef.length === 0) {
    randomizedSnippetsRef = shuffleSquence(originalSnippets);
  }

  // 애니메이션 상태 초기화
  function animate() {
    // 현재 출력할 스니펫 문자열
    const fullText = randomizedSnippetsRef[currentIndex];

    // 문자열을 지우고 있는 경우
    if (isDeleting) {
      // 문자열의 마지막 글자를 제거
      displayText = fullText.substring(0, displayText.length - 1);
      typingSpeed = initDeletingSpeed;

      // 문자열이 모두 지워졌다면 다음 스니펫으로 넘어감
      // 다음 스니펫으로 넘어가기 전에 대기 시간 설정
      if (displayText === "") {
        isDeleting = false;

        const nextIndex = (currentIndex + 1) % randomizedSnippetsRef.length;
        if (nextIndex === 0) {
          randomizedSnippetsRef = shuffleSquence(originalSnippets);
        }

        // 다음 인덱스로 설정하고 타이핑 속도를 초기화
        currentIndex = nextIndex;
        typingSpeed = initTypingSpeed;
      }
    } else {
      // 문자열을 추가하고 있는 경우
      // 현재 스니펫의 글자를 하나씩 추가
      displayText = fullText.substring(0, displayText.length + 1);

      // 문자열이 모두 추가되었다면 대기 시간 설정
      if (displayText === fullText) {
        typingSpeed = waitTimeToDelete;
        animationTimeoutId = setTimeout(() => {
          // 대기 시간이 끝나면 문자열을 지우기 시작
          isDeleting = true;
          // 타이핑 속도를 초기화
          typingSpeed = initDeletingSpeed;
          animate(); // 다음 애니메이션 계속 진행
        }, typingSpeed);
        return; // 대기 중이므로 바로 리턴
      }
    }

    // 현재 스니펫 요소를 찾고 텍스트 업데이트
    if (snippetElement) {
      // 기존 커서 요소를 보존하면서 텍스트만 업데이트
      const cursorElement = snippetElement.querySelector(".typing-cursor");
      if (cursorElement) {
        // 텍스트 노드만 업데이트하고 커서는 유지
        const textNode = document.createTextNode(displayText);
        snippetElement.innerHTML = "";
        snippetElement.appendChild(textNode);
        snippetElement.appendChild(cursorElement);
      } else {
        // 커서가 없으면 텍스트만 설정
        snippetElement.textContent = displayText;
      }
    }

    // 다음 프레임 예약
    animationTimeoutId = setTimeout(animate, typingSpeed);
  }

  // 애니메이션 시작
  animate();
}
