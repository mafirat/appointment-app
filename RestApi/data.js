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
                id: 1, username: "admin", personId: 2, start: "2020-10-30T21:00:00.000Z", end: "",
                note: "some note", status: "Completed", description: "Appointment 1 desc", title: "Appointment 1"
            },
            {
                id: 2, username: "admin", personId: 1, start: "2020-10-30T21:00:00.000Z", end: "",
                note: "some note", status: "Waiting", description: "Appointment 2 desc", title: "Appointment 2"
            },
        ]
    }
}