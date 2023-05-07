const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 8000;

app.use(cors());
app.use(express.static('public'));

const states = {
    "Alabama": {
      "state": "Alabama",
      "capital": "Montgomery",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Alabama-Outline-Map.jpg"
    },
    "Alaska": {
      "state": "Alaska",
      "capital": "Juneau",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Alaska-Outline-Map.jpg"
    },
    "Arizona": {
      "state": "Arizona",
      "capital": "Phoenix",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Arizona-Outline-Map.jpg"
    },
    "Arkansas": {
      "state": "Arkansas",
      "capital": "Little Rock",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Arkansas-Outline-Map.jpg"
    },
    "California": {
      "state": "California",
      "capital": "Sacramento",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/California-Outline-Map.jpg"
    },
     "Colorado": {
      "state": "Colorado",
      "capital": "Denver",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Colorado-Outline-Map.jpg"
    },
    "Connecticut": {
      "state": "Connecticut",
      "capital": "Hartford",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Connecticut-Outline-Map.jpg"
    },
    "Delaware": {
      "state": "Delaware",
      "capital": "Dover",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Delaware-Outline-Map.jpg"
    },
    "Florida": {
      "state": "Florida",
      "capital": "Tallahassee",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Florida-Outline-Map.jpg"
    },
    "Georgia": {
      "state": "Georgia",
      "capital": "Atlanta",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Georgia-Outline-Map.jpg"
    },
    "Hawaii": {
      "state": "Hawaii",
      "capital": "Honolulu",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Hawaii-Outline-Map.jpg"
    },
    "Idaho": {
      "state": "Idaho",
      "capital": "Boise",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Idaho-Outline-Map.jpg"
    },
    "Illinois": {
        "state": "Illinois",
        "capital": "Springfield",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Illinois-Outline-Map.jpg"
        },
        "Indiana": {
        "state": "Indiana",
        "capital": "Indianapolis",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Indiana-Outline-Map.jpg"
        },
        "Iowa": {
        "state": "Iowa",
        "capital": "Des Moines",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Iowa-Outline-Map.jpg"
        },
        "Kansas": {
        "state": "Kansas",
        "capital": "Topeka",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Kansas-Outline-Map.jpg"
        },
        "Kentucky": {
        "state": "Kentucky",
        "capital": "Frankfort",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Kentucky-Outline-Map.jpg"
        },
        "Louisiana": {
        "state": "Louisiana",
        "capital": "Baton Rouge",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Louisiana-Outline-Map.jpg"
        },
        "Maine": {
        "state": "Maine",
        "capital": "Augusta",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Maine-Outline-Map.jpg"
        },
        "Maryland": {
        "state": "Maryland",
        "capital": "Annapolis",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Maryland-Outline-Map.jpg"
        },
        "Massachusetts": {
        "state": "Massachusetts",
        "capital": "Boston",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Massachusetts-Outline-Map.jpg"
        },
        "Michigan": {
        "state": "Michigan",
        "capital": "Lansing",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Michigan-Outline-Map.jpg"
        },
        "Minnesota": {
        "state": "Minnesota",
        "capital": "St. Paul",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Minnesota-Outline-Map.jpg"
        },
        "Mississippi": {
        "state": "Mississippi",
        "capital": "Jackson",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Mississippi-Outline-Map.jpg"
        },
        "Missouri": {
        "state": "Missouri",
        "capital": "Jefferson City",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Missouri-Outline-Map.jpg"
        },
        "Montana": {
        "state": "Montana",
        "capital": "Helena",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Montana-Outline-Map.jpg"
        },
        "Nebraska": {
        "state": "Nebraska",
        "capital": "Lincoln",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Nebraska-Outline-Map.jpg"
        },
    "Nevada": {
      "state": "Nevada",
      "capital": "Carson City",
      "URL": "https://gisgeography.com/wp-content/uploads/2020/04/Nevada-Outline-Map.jpg"
    },
    "New Hampshire": {
        "state": "New Hampshire",
        "capital": "Concord",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/New-Hampshire-Outline-Map.jpg"
        },
        "New Jersey": {
        "state": "New Jersey",
        "capital": "Trenton",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/New-Jersey-Outline-Map.jpg"
        },
        "New Mexico": {
        "state": "New Mexico",
        "capital": "Santa Fe",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/New-Mexico-Outline-Map.jpg"
        },
        "New York": {
        "state": "New York",
        "capital": "Albany",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/New-York-Outline-Map.jpg"
        },
        "North Carolina": {
        "state": "North Carolina",
        "capital": "Raleigh",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/North-Carolina-Outline-Map.jpg"
        },
        "North Dakota": {
        "state": "North Dakota",
        "capital": "Bismarck",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/North-Dakota-Outline-Map.jpg"
        },
        "Ohio": {
        "state": "Ohio",
        "capital": "Columbus",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Ohio-Outline-Map.jpg"
        },
        "Oklahoma": {
        "state": "Oklahoma",
        "capital": "Oklahoma City",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Oklahoma-Outline-Map.jpg"
        },
        "Oregon": {
        "state": "Oregon",
        "capital": "Salem",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Oregon-Outline-Map.jpg"
        },
        "Pennsylvania": {
        "state": "Pennsylvania",
        "capital": "Harrisburg",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Pennsylvania-Outline-Map.jpg"
        },
        "Rhode Island": {
        "state": "Rhode Island",
        "capital": "Providence",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Rhode-Island-Outline-Map.jpg"
        },
        "South Carolina": {
        "state": "South Carolina",
        "capital": "Columbia",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/South-Carolina-Outline-Map.jpg"
        },
        "South Dakota": {
        "state": "South Dakota",
        "capital": "Pierre",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/South-Dakota-Outline-Map.jpg"
        },
        "Tennessee": {
        "state": "Tennessee",
        "capital": "Nashville",
        "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Tennessee-Outline-Map.jpg"
        },
        "Texas": {
            "state": "Texas",
            "capital": "Austin",
            "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Texas-Outline-Map.jpg"
            },
            "Utah": {
            "state": "Utah",
            "capital": "Salt Lake City",
            "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Utah-Outline-Map.jpg"
            },
            "Vermont": {
            "state": "Vermont",
            "capital": "Montpelier",
            "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Vermont-Outline-Map.jpg"
            },
            "Virginia": {
            "state": "Virginia",
            "capital": "Richmond",
            "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Virginia-Outline-Map.jpg"
            },
            "Washington": {
            "state": "Washington",
            "capital": "Olympia",
            "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Washington-Outline-Map.jpg"
            },
            "West Virginia": {
            "state": "West Virginia",
            "capital": "Charleston",
            "URL": "https://gisgeography.com/wp-content/uploads/2020/03/West-Virginia-Outline-Map.jpg"
            },
            "Wisconsin": {
            "state": "Wisconsin",
            "capital": "Madison",
            "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Wisconsin-Outline-Map.jpg"
            },
            "Wyoming": {
            "state": "Wyoming",
            "capital": "Cheyenne",
            "URL": "https://gisgeography.com/wp-content/uploads/2020/03/Wyoming-Outline-Map.jpg"
            }
            }

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html');
});

app.get('/api', (request, response) => {
    const state = request.query.state;
    if (states[state]) {
        response.json(states[state]);
    } else {
        response.status(404).json({ error: 'State not found' });
    }
});

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is running on port ${PORT}!`);
});
