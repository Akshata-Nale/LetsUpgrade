console.log("Question 2")
class User
        {
            constructor(name,age,email)
            {
                this.name=name;
                this.age=age;
                this.email=email;
                this.coins=0;
                this.courses=[];
            }
            login()
            {
                console.log(`${this.name} has logged in`);
            }
            logout()
            {
                console.log(`${this.name} has logged out`);
            }
            addCoins(num)
            {
                coins=coins+num;
                console.log(`${this.user} has ${this.coins=num}`)
            }
            details()
            {
                console.log(`${this.name} is ${this.age} old and has ${this.coins} coins`);
            }

        }
class Moderator extends User
{
    addCoins(user,coins)
        {
            this.coins=coins;
        }
        removeCoins(user,coins)
        {
        this.coins=coins-5;
        }
}
class Admin extends Moderator
{
    
   addCourse(user,course)
    {
    user.courses.push(course);
    console.log(user);
    }
    deleteCourse(user,course)
    {
    let a=user.courses.pop(course);
    console.log(a)
    }
}




        let userobj1= new User('Akshata',20,'akshatanale111@gmail.com');
        let userobj2= new User('Misba',20,'misba@gmail.com');
        let userobj3= new User('Dnyan',20,'dnyan@gmail.com');
        
        let modobj= new Moderator('abc',25,'abc@gmail.com');
        modobj.addCoins();
        modobj.removeCoins()

        let adminobj= new Admin('Prasad Sir',24,'prasadsawant@gmail.com');
         let usersarr=[userobj1,userobj2,userobj3,modobj,adminobj];
        console.log(usersarr);
        usersarr.forEach(ele=> console.log(ele));
        adminobj.addCourse(userobj1,'Blockchain')
        adminobj.addCourse(userobj2,'Blockchain')
        adminobj.addCourse(userobj1,'Python');
        adminobj.deleteCourse(userobj2,'Blockchain');


        modobj.addCoins(userobj1,50);
        modobj.removeCoins(userobj1,100);