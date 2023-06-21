# 강의 노트

👉 1.js

    : 원래 변수가 문자열일 경우, 그 외의 다른 변수는 받아서는 안됌 !
    : 근데..JS에서는 받아와도 에러가 발생 안함.

👉 TypeScript 알아보기 ?

    ✔️ 컴파일 에러 vs 런타임 에러
        : 컴파일을 할 수 없는 에러 vs 실행 되는 시점에 발생하는 에러(로직 이상)

    ✔️ 코드 실습
        step 01. 코드 작성
        step 02. npm install typescript
        step 03. npx tsc 2.ts
        step 04. node 2.ts

👉 TS 타입 알아보기

    ✔️ string/number/boolean

        string : 문자를 담을 때
        number : 숫자를 담을 때
        boolean : 참/거짓을 담을 때

👉 null/ undefined (유니언 타입)

    : 값을 할당할 수 없다 == 값을 할당하려고 하면 에러 발생 !


    ✔️ 초기화 여부
        : undefined( 초기화 하지 않음 ) VS null(초기화 후 null 값 할당)

---

# 참고 자료

https://radlohead.gitbook.io/typescript-deep-dive/recap/null-undefined
