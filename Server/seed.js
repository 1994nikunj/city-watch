const dbConnection = require('./config/mongoConnection');
const data = require('./data/index');
const eventData = data.events;
const reportData = data.reports;

const report1 = {
    id: 1,
    title: 'Graffiti',
    description: 'There was a new graffiti.',
    images: [
        'https://th.bing.com/th/id/OIP.zqPlkWZ3EJH6t19TA_C3nAHaEL?pid=ImgDet&rs=1',
        'https://cdn.britannica.com/93/171293-050-D99BEDB2/Graffiti-Berlin-Wall.jpg',
        'https://static.dw.com/image/16379135_303.jpg',
        'https://static01.nyt.com/images/2020/07/06/nyregion/nygraffiti-06/nygraffiti-06-articleLarge.jpg?quality=75&auto=webp&disable=upscale'
    ],
    date: '2021-09-01',
    location: '1234 Main St, San Diego, CA 92109',
    time: '12:00 PM',
    comments: [
        {
            id: 1,
            text: 'This is a comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'John Doe'
        },
        {
            id: 2,
            text: 'This is another comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'Jane Doe'
        }
    ]
};

const report2 = {
    id: 2,
    title: 'Potholes',
    description: 'A pothole is a depression in a road surface, usually asphalt pavement, where traffic has removed broken pieces of the pavement.',
    images: [
        'https://th.bing.com/th/id/R.d55de9a594834aa131ba7fb3946efda6?rik=dP2ewhYVi4oddQ&riu=http%3a%2f%2fwww.automoblog.net%2fwp-content%2fuploads%2f2017%2f05%2fPotHole.jpg&ehk=uuFtDGr%2bExacfmZnMx635qxvCsNW4MyDIpzA2Gkkdqk%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.d55de9a594834aa131ba7fb3946efda6?rik=dP2ewhYVi4oddQ&riu=http%3a%2f%2fwww.automoblog.net%2fwp-content%2fuploads%2f2017%2f05%2fPotHole.jpg&ehk=uuFtDGr%2bExacfmZnMx635qxvCsNW4MyDIpzA2Gkkdqk%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.d55de9a594834aa131ba7fb3946efda6?rik=dP2ewhYVi4oddQ&riu=http%3a%2f%2fwww.automoblog.net%2fwp-content%2fuploads%2f2017%2f05%2fPotHole.jpg&ehk=uuFtDGr%2bExacfmZnMx635qxvCsNW4MyDIpzA2Gkkdqk%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.d55de9a594834aa131ba7fb3946efda6?rik=dP2ewhYVi4oddQ&riu=http%3a%2f%2fwww.automoblog.net%2fwp-content%2fuploads%2f2017%2f05%2fPotHole.jpg&ehk=uuFtDGr%2bExacfmZnMx635qxvCsNW4MyDIpzA2Gkkdqk%3d&risl=&pid=ImgRaw&r=0'
    ],
    date: '2021-09-01',
    location: '1234 Main St, San Diego, CA 92109',
    time: '12:00 PM',
    comments: [
        {
            id: 1,
            text: 'This is a comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'John Doe'
        },
        {
            id: 2,
            text: 'This is another comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'Jane Doe'
        }
    ]
};

const report3 = {
    id: 3,
    title: 'Trash',
    description: 'Trash is unwanted or useless materials. Trash is something that is disposed of or thrown away.',
    images: [
        'https://th.bing.com/th/id/R.a758268923df50e618b54899db2c3c8c?rik=mqHyrTRXqMBlgA&riu=http%3a%2f%2fwww.photos-public-domain.com%2fwp-content%2fuploads%2f2011%2f03%2fgarbage-cans-overflowing.jpg&ehk=p78Xn8C9jN%2friDPhIeKZmtgKZqA3KRW5Lt8SbSCed9U%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.a758268923df50e618b54899db2c3c8c?rik=mqHyrTRXqMBlgA&riu=http%3a%2f%2fwww.photos-public-domain.com%2fwp-content%2fuploads%2f2011%2f03%2fgarbage-cans-overflowing.jpg&ehk=p78Xn8C9jN%2friDPhIeKZmtgKZqA3KRW5Lt8SbSCed9U%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.a758268923df50e618b54899db2c3c8c?rik=mqHyrTRXqMBlgA&riu=http%3a%2f%2fwww.photos-public-domain.com%2fwp-content%2fuploads%2f2011%2f03%2fgarbage-cans-overflowing.jpg&ehk=p78Xn8C9jN%2friDPhIeKZmtgKZqA3KRW5Lt8SbSCed9U%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.a758268923df50e618b54899db2c3c8c?rik=mqHyrTRXqMBlgA&riu=http%3a%2f%2fwww.photos-public-domain.com%2fwp-content%2fuploads%2f2011%2f03%2fgarbage-cans-overflowing.jpg&ehk=p78Xn8C9jN%2friDPhIeKZmtgKZqA3KRW5Lt8SbSCed9U%3d&risl=&pid=ImgRaw&r=0'
    ],
    date: '2021-09-01',
    location: '1234 Main St, San Diego, CA 92109',
    time: '12:00 PM',
    comments: [
        {
            id: 1,
            text: 'This is a comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'John Doe'
        },
        {
            id: 2,
            text: 'This is another comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'Jane Doe'
        }
    ]
};

const report4 = {
    id: 4,
    title: 'Hoboken Traffic',
    description: 'Traffic at Willow and 14st, watch out hoboken residents',
    images: [
        'https://pyxis.nymag.com/v1/imgs/c31/3a5/c01b3f0cb3f32f34ac1670ff10991d9e47-hoboken-lede.jpg'
        ],
    date: '2021-09-01',
    location: 'Willow Av, 14 st',
    time: '12:00 PM',
    comments: [
        {
            id: 1,
            text: 'We need to do something about the traffic',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'John Doe'
        },
        
    ]
};

const event1 = {
    id: 1,
    title: 'Shopping Festival',
    description: 'Shopping is an activity in which a customer browses the available goods or services presented by one or more retailers with the potential intent to purchase a suitable selection of them',
    images: [
        'https://th.bing.com/th/id/R.a455dbc490e2b2feae79ba84409a90a1?rik=Ofj7hha9mhypUw&riu=http%3a%2f%2fblog.imonholidays.com%2fwp-content%2fuploads%2f2017%2f06%2fDubai-Shopping-Festival.jpg&ehk=jrcnHrL8KpB1WEpq5gCA6neGK85EgTAZIMshAoGLS%2fs%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.a455dbc490e2b2feae79ba84409a90a1?rik=Ofj7hha9mhypUw&riu=http%3a%2f%2fblog.imonholidays.com%2fwp-content%2fuploads%2f2017%2f06%2fDubai-Shopping-Festival.jpg&ehk=jrcnHrL8KpB1WEpq5gCA6neGK85EgTAZIMshAoGLS%2fs%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.a455dbc490e2b2feae79ba84409a90a1?rik=Ofj7hha9mhypUw&riu=http%3a%2f%2fblog.imonholidays.com%2fwp-content%2fuploads%2f2017%2f06%2fDubai-Shopping-Festival.jpg&ehk=jrcnHrL8KpB1WEpq5gCA6neGK85EgTAZIMshAoGLS%2fs%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.a455dbc490e2b2feae79ba84409a90a1?rik=Ofj7hha9mhypUw&riu=http%3a%2f%2fblog.imonholidays.com%2fwp-content%2fuploads%2f2017%2f06%2fDubai-Shopping-Festival.jpg&ehk=jrcnHrL8KpB1WEpq5gCA6neGK85EgTAZIMshAoGLS%2fs%3d&risl=&pid=ImgRaw&r=0'
    ],
    date: '2021-09-01',
    location: '1234 Main St, San Diego, CA 92109',
    time: '12:00 PM',
    comments: [
        {
            id: 1,
            text: 'This is a comment',
            date: '2021-09-01',
            time: '10:00 AM',
            user: 'John Doe'
        },
        {
            id: 2,
            text: 'This is another comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'Jane Doe'
        }
    ]
};

const event2 = {
    id: 2,
    title: 'Food Fest',
    description: 'A food festival is a festival, usually held annually, that uses food, often produce, as its central theme. These festivals have always been a means of uniting communities through celebrations of harvests and giving thanks for a plentiful growing season',
    images: [
        'https://th.bing.com/th/id/R.dff6e062c7f376d77ef54ede1a8b1023?rik=OwloDEl8vKo3GA&riu=http%3a%2f%2fgettysburgian.com%2fwp-content%2fuploads%2f2017%2f09%2fEdited-2.jpg&ehk=%2b0AKoRy0n7a4ZLgQI%2fmiIYK5alo1QgM47v3NYuVqI6g%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.dff6e062c7f376d77ef54ede1a8b1023?rik=OwloDEl8vKo3GA&riu=http%3a%2f%2fgettysburgian.com%2fwp-content%2fuploads%2f2017%2f09%2fEdited-2.jpg&ehk=%2b0AKoRy0n7a4ZLgQI%2fmiIYK5alo1QgM47v3NYuVqI6g%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.dff6e062c7f376d77ef54ede1a8b1023?rik=OwloDEl8vKo3GA&riu=http%3a%2f%2fgettysburgian.com%2fwp-content%2fuploads%2f2017%2f09%2fEdited-2.jpg&ehk=%2b0AKoRy0n7a4ZLgQI%2fmiIYK5alo1QgM47v3NYuVqI6g%3d&risl=&pid=ImgRaw&r=0',
        'https://th.bing.com/th/id/R.dff6e062c7f376d77ef54ede1a8b1023?rik=OwloDEl8vKo3GA&riu=http%3a%2f%2fgettysburgian.com%2fwp-content%2fuploads%2f2017%2f09%2fEdited-2.jpg&ehk=%2b0AKoRy0n7a4ZLgQI%2fmiIYK5alo1QgM47v3NYuVqI6g%3d&risl=&pid=ImgRaw&r=0'
    ],
    date: '2021-09-01',
    location: '1234 Main St, San Diego, CA 92109',
    time: '12:00 PM',
    comments: [
        {
            id: 1,
            text: 'This is a comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'John Doe'
        },
        {
            id: 2,
            text: 'This is another comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'Jane Doe'
        }
    ]
};

const event3 = {
    id: 3,
    title: 'Circus',
    description: 'A circus is a company of performers who put on diverse entertainment shows that may include clowns, acrobats, trained animals, trapeze acts, musicians, dancers, hoopers, tightrope walkers, jugglers, magicians, unicyclists, as well as other object manipulation and stunt-oriented artists.',
    images: [
        'https://www.gannett-cdn.com/presto/2019/03/11/PGRE/9aca1e61-d68f-404a-8e03-2fecb293a9db-js02-Circus-0031.jpg?crop=1999,1124,x1,y59&width=3200&height=1680&fit=bounds',
        'https://www.gannett-cdn.com/presto/2019/03/11/PGRE/9aca1e61-d68f-404a-8e03-2fecb293a9db-js02-Circus-0031.jpg?crop=1999,1124,x1,y59&width=3200&height=1680&fit=bounds',
        'https://www.gannett-cdn.com/presto/2019/03/11/PGRE/9aca1e61-d68f-404a-8e03-2fecb293a9db-js02-Circus-0031.jpg?crop=1999,1124,x1,y59&width=3200&height=1680&fit=bounds',
        'https://www.gannett-cdn.com/presto/2019/03/11/PGRE/9aca1e61-d68f-404a-8e03-2fecb293a9db-js02-Circus-0031.jpg?crop=1999,1124,x1,y59&width=3200&height=1680&fit=bounds'
    ],
    date: '2021-09-01',
    location: '1234 Main St, San Diego, CA 92109',
    time: '12:00 PM',
    comments: [
        {
            id: 1,
            text: 'This is a comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'John Doe'
        },
        {
            id: 2,
            text: 'This is another comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'Jane Doe'
        }
    ]
};
const event4 = {
    id: 4,
    title: 'Hoboken Recreational Event',
    description: 'A good Recreational event in hoboken at 10 st',
    images: [
        'https://www.westend61.de/images/0000689102pw/four-women-having-an-outdoor-workout-MADF000557.jpg'
       ],
    date: '2021-09-01',
    location: '10 st Bloomfield , hoboken',
    time: '12:00 PM',
    comments: [
        {
            id: 1,
            text: 'This is a comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'John Doe'
        }
    ]
};
const event5 = {
    id: 5,
    title: 'Hoboken Soccer Event',
    description: 'Soccer tournament at Sinatra park',
    images: [
        'https://nydlfc.com/wp-content/uploads/2019/04/nydl-fc-cps-3-1024x683.jpg'
       ],
    date: '2021-09-01',
    location: 'Sinatra Park',
    time: '12:00 PM',
    comments: [
        {
            id: 1,
            text: 'This is a comment',
            date: '2021-09-01',
            time: '12:00 PM',
            user: 'John Doe'
        }
    ]
};

const main = async () => {
    let db = {};
    try {
        db = await dbConnection.dbConnection();
        await db.dropDatabase();
    } catch (e) {
        console.log(e);
    }

    try {
        console.log('Adding reports...');
        await reportData.createReport(
            report1.title,
            report1.description,
            report1.images,
            report1.date,
            report1.location,
            report1.time,
            report1.comments
        );

        await reportData.createReport(
            report2.title,
            report2.description,
            report2.images,
            report2.date,
            report2.location,
            report2.time,
            report2.comments
        );

        await reportData.createReport(
            report3.title,
            report3.description,
            report3.images,
            report3.date,
            report3.location,
            report3.time,
            report3.comments
        );

        await reportData.createReport(
            report4.title,
            report4.description,
            report4.images,
            report4.date,
            report4.location,
            report4.time,
            report4.comments
        );

        await eventData.createEvent(
            event1.title,
            event1.description,
            event1.images,
            event1.date,
            event1.location,
            event1.time,
            event1.comments
        );

        await eventData.createEvent(
            event2.title,
            event2.description,
            event2.images,
            event2.date,
            event2.location,
            event2.time,
            event2.comments
        );

        await eventData.createEvent(
            event3.title,
            event3.description,
            event3.images,
            event3.date,
            event3.location,
            event3.time,
            event3.comments
        );

        await eventData.createEvent(
            event4.title,
            event4.description,
            event4.images,
            event4.date,
            event4.location,
            event4.time,
            event4.comments
        );
        await eventData.createEvent(
            event5.title,
            event5.description,
            event5.images,
            event5.date,
            event5.location,
            event5.time,
            event5.comments
        );

    } catch (e) {
        console.log(e);
    }

    try {
        console.log('Done seeding database');
        await dbConnection.closeConnection();
    } catch (e) {
        console.log(e);
    }
};

main().catch(console.log);
