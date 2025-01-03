// object literals
let user = {
  name: 'crystal',
  age: 30,
  email: 'crystal@thenetninga.co.uk',
  location: 'berlin', 
  blogs: ['why mac & cheese rules', '10 things to make with marmite'],
  login(){
    console.log('the user logged in');
  },
  logout(){
    console.log('the user logged out');
  },
  logBlogs(){
    console.log('this user has written the following blogs:');
    this.blogs.forEach(blog => {
      console.log(blog);
    });
  } 
};


// Dot notation
user.age = 35;
user.name = 'chun-li';

console.log(user.name);
console.log(user.age);

// Bracket notation
user['age'] = 36;
user['name'] = 'mario'

console.log(user['name']);
console.log(user['age']);


console.log (typeof user);
// You can access the different objects using . notation and square bracket notation.  
// You will probably

//Call the method
user.login();
user.logout();
user.logBlogs();
console.log(this);