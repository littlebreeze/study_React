let age: number;
age = 12;

let userName: string;
userName = 'Max';

let isInstructor: boolean;
isInstructor = true;

let hobbies: string[];
hobbies = ['Sports', 'Cooking'];

// any 라는 타입이 있지만 그냥 js 되버림
let person: {
  name: string;
  age: number;
};

person = { name: 'Max', age: 32 };
// person = {isEmployee:true}

// 객체 배열
let people: {
  name: string;
  age: number;
}[];
