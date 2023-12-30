let blog1 = {
    title: `IF naredba grananja!`,
    likes: 50,
    dislikes: 21
};
let blog2 = {
    title: `While petlja`,
    likes: 25,
    dislikes: 36
};
let blog3 = {
    title: `For petlja`,
    likes: 100,
    dislikes: 12
};
let user1 = {
    username: `JohnDoe`,
    age: 29,
    blogs: [blog1, blog3],
    logBlogs: function () {
        this.blogs.forEach(el => {
            console.log(el.title);
        });
    }
};

let user2 = {
    username: `StefanStanimirovic`,
    age: 34,
    blogs: [blog2],
    logBlogs: function () {
        this.blogs.forEach(el => {
            console.log(el.title);
        });
    }
};

let nizUsera = [user1, user2];
// 1

let ukupanBrojLajkova = niz => {
    let sum = 0;
    niz.forEach(b => {
        b.likes.forEach(l => {
            sum += b.likes;
        });
    });

    return sum;
}
ukupanBrojLajkova(nizUsera);
console.log(ukupanBrojLajkova(nizUsera));
