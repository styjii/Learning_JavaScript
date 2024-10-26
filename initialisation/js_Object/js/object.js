function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
}

var mark = new Person("Mark", "Zuckerberg", 34, true)


console.log(mark.firstName)