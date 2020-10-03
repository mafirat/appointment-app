module.exports = function () {
    return {
        people: [
            {
                id: 1, name: "Mehmet Ali", lastName: "Fırat"
            },
            {
                id: 2, name: "Ali", lastName: "Fırat"
            },
        ],
        users: [
            {
                id: 1, email: "admin@admin.com", password: "adm123", username: "admin"
            }
        ],
        appointments: [
            {
                id: 1, userId: 1, personId: 2, startTime: "10-1-2020 10:12:36",
                note: "some note", status: "Completed"
            },
            {
                id: 2, userId: 1, personId: 1, startTime: "10-1-2020 10:12:36",
                note: "some note", status: "Waiting"
            },
        ]
    }
}