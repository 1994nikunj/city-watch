const reports = [
	{
		id: 1,
		title: 'Graffiti',
		description: 'Graffiti is writing or drawings made on a wall or other surface, usually without permission and within public view.',
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
				comment: 'This is a comment',
				date: '2021-09-01',
				time: '12:00 PM',
				author: 'John Doe'
			},
			{
				id: 2,
				comment: 'This is another comment',
				date: '2021-09-01',
				time: '12:00 PM',
				author: 'Jane Doe'
			}
		]
	},
	{
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
		comments: []
	},
	{
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
				comment: 'This is a comment',
				date: '2021-09-01',
				time: '12:00 PM'
			},
			{
				id: 2,
				comment: 'This is another comment',
				date: '2021-09-01',
				time: '12:00 PM'
			}
		]
	}
]

const events = [
	{
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
				comment: 'This is a comment',
				date: '2021-09-01',
				time: '12:00 PM'
			},
			{
				id: 2,
				comment: 'This is another comment',
				date: '2021-09-01',
				time: '12:00 PM'
			}
		]
	},
	{
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
				comment: 'This is a comment',
				date: '2021-09-01',
				time: '12:00 PM'
			},
			{
				id: 2,
				comment: 'This is another comment',
				date: '2021-09-01',
				time: '12:00 PM'
			}
		]
	},
	{
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
				comment: 'This is a comment',
				date: '2021-09-01',
				time: '12:00 PM'
			},
			{
				id: 2,
				comment: 'This is another comment',
				date: '2021-09-01',
				time: '12:00 PM'
			}
		]
	}
]

module.exports = { reports, events };