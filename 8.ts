let myInfo: { name: string; age: number; isRich: boolean } = {
    name: "최주연",
    age: 99,
    isRich: false,
};

console.log(myInfo.name);

//응용- 배열 사용할 경우
let myInfo2: { name: string; age: number; isRich: boolean }[] = [
    { name: "Choi", age: 99, isRich: true },
    { name: "Ju", age: 10, isRich: false },
    { name: "Yeon", age: 20, isRich: false },
];
console.log(myInfo2[0].name);
console.log(myInfo2[1].age);
console.log(myInfo2[2].isRich);
