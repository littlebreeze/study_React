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

let course = 'React';
// course = 1235; => 오류발생

let course2: string | number = 'React';
course2 = 1234;

// 위에서 person과 people이 반복
// type : ts 에만 존재하는 키워드기 때문에 js로 컴파일하면 해당 코드는 사라짐
type Person = {
  name: string;
  age: number;
};

let person2: Person;
let people2: Person[];

function add(a: number, b: number) {
  return a + b; // 반환값에 대한 타입 추론 발생
}

function print() {
  console.log('wow');
}

function insertAtBeginning<T>(array: T[], value: T) {
  const newArray = [value, ...array];
  return newArray;
}

const demoArr = [1, 2, 3];
const updatedArr = insertAtBeginning(demoArr, -1);
const StringArr = insertAtBeginning(['1', '2', '3'], '4');
updatedArr[0].split('');
StringArr[0].split('');
