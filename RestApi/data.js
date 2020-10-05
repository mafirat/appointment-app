module.exports = function () {
    // using 'username' property to authentication filtering on people and appointments
    return {
        people: [
            {
                id: 1, name: "Gandalf", lastname: "the Gray", username: "admin"
            },
            {
                id: 2, name: "Saruman", lastname: "the White", username: "admin"
            },
            {
                id: 3, name: "Aragorn", lastname: "Elessar Telcontar", username: "admin"
            },
        ],
        users: [
            {
                email: "admin@admin.com", password: "e10adc3949ba59abbe56e057f20f883e", username: "admin", name: "Elrond", lastName: "Peredhil"
            }
        ],
        appointments: [
            {
                id: 1, username: "admin", personId: 1, start: "", end: "",
                notes: "Just as I guessed. Saruman spends a lot of time with Palantir.", status: "Completed", description: "Talk to Gandalf about Saruman.", title: "About Saruman"
            },
            {
                id: 2, username: "admin", personId: 3, start: "", end: "",
                notes: "", status: "Waiting", description: "Aragorn wants to talk about Arwen. I've seen it happen.", title: "Aragorn..."
            },
        ]
    }
}