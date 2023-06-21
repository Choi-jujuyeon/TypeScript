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

👉 any

    : 모든 타입을 수용할 수 있는 타입 ==  Js를 사용하는 것과 차이점이 없다.
    : 데이터 타입을 추론할 수 없을때만 사용하는게 좋다.

👉 유니온 타입

    : 여러 타입을 가지는 경우 사용

👉 array

👉 Object

    : key-value 값으로 존재하는 객체를 말한다.

👉Function

    : 함수에도 타입을 적어줘야 한다.
    : 반환 값이 없는 경우 void 사용

    ✔️ 9.ts
        : function Add( input ) output {}

---

# 참고 자료

https://radlohead.gitbook.io/typescript-deep-dive/recap/null-undefined
