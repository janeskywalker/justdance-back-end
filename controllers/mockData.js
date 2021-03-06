const uuid = require('uuid')

module.exports.mockData = {
    mockUsers: [
        {
            _id: uuid(),
            username: 'Jane',
            email: 'jane@test.com',
            avatar: "/assets/avatar.JPG",
        }
    ],
    mockMessages: [

    ],
    mockStudios: [
        {
            _id: uuid(),
            name: 'Phoenix Aerial Art & Pole',
            image: 'assets/phoenix.png',
            messages: [],
            address: {
                street: "1636 University Ave",
                city: "Berkeley",
                zip: 94602
            }
        },

        {
            _id: uuid(),
            name: 'Inspiration Studios',
            image: 'assets/pole.png',
            messages: [],
            address: {
                street: "2682 Middlefield Rd",
                city: "Redwood City",
                zip: 94602
            }
        },

        {
            _id: uuid(),
            name: 'Crunch Fitness',
            image: 'assets/pole2.png',
            messages: [],
            address: {
                street: "61 New Montgomery St",
                city: "San Francisco",
                zip: 94602
            }
        },

        {
            _id: uuid(),
            name: "Gypsy Love Belly Dancing",
            image: 'assets/belly.png',
            messages: [],
            address: {
                street: "1731 Buchanan St",
                city: "Janpan Town",
                zip: 94602
            }
        },


        {
            _id: uuid(),
            name: "Albeto's Salsa & Bachata",
            image: 'assets/albeto.png',
            messages: [],
            address: {
                street: "736 West Dance St",
                city: "Mountain View",
                zip: 94602
            }
        },


        {
            _id: uuid(),
            name: "Allegro Salsa Dancing",
            image: 'assets/salsa.png',
            messages: [],
            address: {
                street: "4 Embarcadero Ctr",
                city: "San Francisco",
                zip: 94602
            }
        },
    ]
}