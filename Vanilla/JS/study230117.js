// 클래스 필드(class field) 정의 제안
// 클래프 필드(필드 또는 멤버)는 클래스 기반 객체지향언어에서 클래스가 생성할 인스턴스의 프로퍼티를 가리키는 용어.

// JAVA 문법
// public class Person{
//
//     // 클래스 필드 정의
//     // 클래스 필드는 클래스 몸체에 this 없이 선언해야 함
//     private String firstName = "";
//     private String lastName = "";
//
//     // 생성자
//     Person(String firstName, String lastName){
//         //this는 언제나 클래스가 생성할 인스턴스를 가리킴.
//         this.firstName = firstName;
//         this.lastName = lastName;
//     }
//     public String getFirstName(){
//         //클래스 필드 참조
//     //this 없이도 클래스 필드를 참조할 수 있음.
//         return firstName + " " + lastName;
//     }
//
// }

// 자바스크립트의 클래스에서 인스턴스 프로퍼티를 선언하고 초기화하려면 반드시 constructor 내부에서 this에 프로퍼티를 추가해야 함.
// 하지만 자바의 클래스에서는 클래스 필드를 마치 변수처럼 클래스 몸체에 this 없이 선언함.
// 자바스크립트의 클래스엣 인스턴스 프로퍼티를 참조하려면 반드시 this를 사용하여 참조해야 함.
// 하지만 자바의 클래스에서는 this를 생략해도 클리스 필드를 참조할 수 있음.

class Person {
    //클래스 필드 정의
    name = 'Lee';
}

const me = new Person('Lee')
console.log(me.name); //Lee

const me2 = new Person();
console.log(me2);   //Person { name: 'Lee' }