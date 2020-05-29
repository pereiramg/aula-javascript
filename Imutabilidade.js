const user = {
    name: 'Marcelo',
    lastname: 'Galdino Pereira'
}

function getuserwithfullname(user) {
    return{
        ...user,
        fullname : `${user.name} ${user.lastname}`
    }
}
const userwithfullname = getuserwithfullname(user);
console.log(userwithfullname);