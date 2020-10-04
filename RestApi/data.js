module.exports = function () {
    return {
        people: [
            {
                id: 1, name: "Mehmet Ali", lastName: "Fırat", username: "admin"
            },
            {
                id: 2, name: "Ali", lastName: "Fırat", username: "admin"
            },
        ],
        users: [
            {
                email: "admin@admin.com", password: "e10adc3949ba59abbe56e057f20f883e", username: "admin", name: "system", lastName: "admin"
            }
        ],
        appointments: [
            {
                id: 1, username: "admin", personId: 2, startTime: "10-1-2020 10:12:36",
                note: "some note", status: "Completed", descriptin: "Appointment 1 desc", title: "Appointment 1"
            },
            {
                id: 2, username: "admin", personId: 1, startTime: "10-1-2020 10:12:36",
                note: "some note", status: "Waiting", descriptin: "Appointment 2 desc", title: "Appointment 2"
            },
        ]
    }
}