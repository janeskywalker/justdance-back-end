const uuid = require('uuid')

module.exports.mockData = {
        mockUsers: [
        {
            id: uuid(),
            name: 'Jane',
            email: 'test@test.com',
            avatar: "/assets/avatar.JPG",
        }
    ],
    mockMessages: [

    ],
    mockStudios: [
        {
            id: uuid(),
            name: 'Phoenix Aerial Art & Pole',
            image: 'assets/phoenix.png',
            reviews: [],
            address: {
                street: "1636 University Ave",
                city: "Berkeley",
                zip: 99999
            }
        },

        {
            id: uuid(),
            name: 'Inspiration Studios',
            image: 'assets/pole.png',
            reviews: [],
            address: {
                street: "2682 Middlefield Rd",
                city: "Redwood City",
                zip: 99999
            }
        },

        {
            id: uuid(),
            name: 'Crunch Fitness',
            image: 'assets/pole2.png',
            reviews: [],
            address: {
                street: "61 New Montgomery St",
                city: "San Francisco",
                zip: 99999
            }
        },

        {
            id: uuid(),
            name: "Gypsy Love Belly Dancing",
            image: 'assets/belly.png',
            reviews: [],
            address: {
                street: "1731 Buchanan St",
                city: "Janpan Town",
                zip: 99999
            }
        },


        {
            id: uuid(),
            name: "Albeto's Salsa & Bachata",
            image: 'assets/albeto.png',
            reviews: [],
            address: {
                street: "736 West Dance St",
                city: "Mountain View",
                zip: 99999
            }
        },


        {
            id: uuid(),
            name: "Allegro Salsa Dancing",
            image: 'assets/salsa.png',
            reviews: [],
            address: {
                street: "4 Embarcadero Ctr",
                city: "San Francisco",
                zip: 99999
            }
        },
    ]
}