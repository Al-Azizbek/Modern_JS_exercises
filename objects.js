let user = {
    //define a objects like dictionaries in Pyhon
    name: 'CodingNewBie',
    age: '12',
    email: 'urinovazizbek@gmail.com',
    location: 'Uzbekistan',
    //define as list
    blogs: [
        {title:'Hello my name is CodinNewBie', likes:30},
        {title:'Hello my is big han yours', likes:40}
    ],
    //define a function into objects in js
    login: function(){
        console.log('User is logged in.')
    },
    // : function can be delete it works ok
    logout(){
        console.log('User is log out.')
    },
    // to connect each blog with forEach
    eachblogs(){
        console.log('Here is the all articles:')
        this.blogs.forEach(blog => {
            console.log(blog.title, blog.likes)
        })
    }
}
user.login() // objects can be methods
user.eachblogs() // objects can be methods

