const draftBtn = document.querySelector("#draft");
const select = document.querySelector("#dropdown");
let count = 1;
let teamId = 1;
let countUp = true;
let allDraftedPlayers = [];

let players = [
    {id: 0, name: "Jonathan Taylor", team: "Indianapolis Colts", position: "RB", bye: 14},
    {id: 1, name: "Christian McCaffrey", team: "San Francisco 49ers", position: "RB", bye: 9},
    {id: 2, name: "Derrick Henry", team: "Tennessee Titans", position: "RB", bye: 6},
    {id: 3, name: "Dalvin Cook", team: "Minnesota Vikings", position: "RB", bye: 7},
    {id: 4, name: "Austin Ekeler", team: "Los Angeles Chargers", position: "RB", bye: 8},
    {id: 5, name: "Joe Mixon", team: "Cincinnati Bengals", position: "RB", bye: 10},
    {id: 6, name: "Najee Harris", team: "Pittsburgh Steelers", position: "RB", bye: 9},
    {id: 7, name: "Nick Chubb", team: "Cleveland Browns", position: "RB", bye: 9},
    {id: 8, name: "Justin Jefferson", team: "Minnesota Vikings", position: "WR", bye: 7},
    {id: 9, name: "Cooper Kupp", team: "Los Angeles Rams", position: "WR", bye: 7},
    {id: 10, name: "Ja'Marr Chase", team: "Cincinnati Bengals", position: "WR", bye: 10},
    {id: 11, name: "Travis Kelce", team: "Kansas City Chiefs", position: "TE", bye: 8},
    {id: 12, name: "D'Andre Swift", team: "Detroit Lions", position: "RB", bye: 6},
    {id: 13, name: "Stefon Diggs", team: "Buffalo Bills", position: "WR", bye: 7},
    {id: 14, name: "Mark Andrews", team: "Baltimore Ravens", position: "TE", bye: 10},
    {id: 15, name: "Davante Adams", team: "Las Vegas Raiders", position: "WR", bye: 6},
    {id: 16, name: "Saquon Barkley", team: "New York Giants", position: "RB", bye: 9},
    {id: 17, name: "Alvin Kamara", team: "New Orleans Saints", position: "RB", bye: 14},
    {id: 18, name: "Deebo Samuel", team: "San Francisco 49ers", position: "WR", bye: 9},
    {id: 19, name: "CeeDee Lamb", team: "Dallas Cowboys", position: "WR", bye: 9},
    {id: 20, name: "Aaron Jones", team: "Green Bay Packers", position: "RB", bye: 14},
    {id: 21, name: "Javonte Williams", team: "Denver Broncos", position: "RB", bye: 9},
    {id: 22, name: "Leonard Fournette", team: "Tampa Bay Buccaneers", position: "RB", bye: 11},
    {id: 23, name: "Mike Evans", team: "Tampa Bay Buccaneers", position: "WR", bye: 11},
    {id: 24, name: "Tyreek Hill", team: "Miami Dolphins", position: "WR", bye: 11},
    {id: 25, name: "James Conner", team: "Arizona Cardinals", position: "RB", bye: 13},
    {id: 26, name: "A.J. Brown", team: "Philadelphia Eagles", position: "WR", bye: 7},
    {id: 27, name: "Ezekiel Elliott", team: "Dallas Cowboys", position: "RB", bye: 9},
    {id: 28, name: "Tee Higgins", team: "Cincinnati Bengals", position: "WR", bye: 10},
    {id: 29, name: "Kyle Pitts", team: "Atlanta Falcons", position: "TE", bye: 14},
    {id: 30, name: "Josh Allen", team: "Buffalo Bills", position: "QB", bye: 7},
    {id: 31, name: "Michael Pittman Jr.", team: "Indianapolis Colts", position: "WR", bye: 14},
    {id: 32, name: "Keenan Allen", team: "Los Angeles Chargers", position: "WR", bye: 8},
    {id: 33, name: "Cam Akers", team: "Los Angeles Rams", position: "RB", bye: 7},
    {id: 34, name: "Mike Williams", team: "Los Angeles Chargers", position: "WR", bye: 8},
    {id: 35, name: "DJ Moore", team: "Carolina Panthers", position: "WR", bye: 13},
    {id: 36, name: "Terry McLaurin", team: "Washington Commanders", position: "WR", bye: 14},
    {id: 37, name: "David Montgomery", team: "Chicago Bears", position: "RB", bye: 14},
    {id: 38, name: "Courtland Sutton", team: "Denver Broncos", position: "WR", bye: 9},
    {id: 39, name: "Breece Hall", team: "New York Jets", position: "RB", bye: 10},
    {id: 40, name: "George Kittle", team: "San Francisco 49ers", position: "TE", bye: 9},
    {id: 41, name: "Diontae Johnson", team: "Pittsburgh Steelers", position: "WR", bye: 9},
    {id: 42, name: "Elijah Mitchell", team: "San Francisco 49ers", position: "RB", bye: 9},
    {id: 43, name: "DK Metcalf", team: "Seattle Seahawks", position: "WR", bye: 11},
    {id: 44, name: "Justin Herbert", team: "Los Angeles Chargers", position: "QB", bye: 8},
    {id: 45, name: "Jaylen Waddle", team: "Miami Dolphins", position: "WR", bye: 11},
    {id: 46, name: "Antonio Gibson", team: "Washington Commanders", position: "RB", bye: 14},
    {id: 47, name: "J.K. Dobbins", team: "Baltimore Ravens", position: "RB", bye: 10},
    {id: 48, name: "Travis Etienne Jr.", team: "Jacksonville Jaguars", position: "RB", bye: 11},
    {id: 49, name: "Brandin Cooks", team: "Houston Texans", position: "WR", bye: 6},
    {id: 50, name: "Darren Waller", team: "Las Vegas Raiders", position: "TE", bye: 6},
    {id: 51, name: "Patrick Mahomes II", team: "Kansas City Chiefs", position: "QB", bye: 8},
    {id: 52, name: "Lamar Jackson", team: "Baltimore Ravens", position: "QB", bye: 10},
    {id: 53, name: "Marquise Brown", team: "Arizona Cardinals", position: "WR", bye: 13},
    {id: 54, name: "Gabriel Davis", team: "Buffalo Bills", position: "WR", bye: 7},
    {id: 55, name: "Allen Robinson II", team: "Los Angeles Rams", position: "WR", bye: 7},
    {id: 56, name: "Josh Jacobs", team: "Las Vegas Raiders", position: "RB", bye: 6},
    {id: 57, name: "Jerry Jeudy", team: "Denver Broncos", position: "WR", bye: 9},
    {id: 58, name: "Amari Cooper", team: "Cleveland Browns", position: "WR", bye: 9},
    {id: 59, name: "AJ Dillon", team: "Green Bay Packers", position: "RB", bye: 14},
    {id: 60, name: "Darnell Mooney", team: "Chicago Bears", position: "WR", bye: 14},
    {id: 61, name: "Kyler Murray", team: "Arizona Cardinals", position: "QB", bye: 14},
    {id: 62, name: "Damien Harris", team: "New England Patriots", position: "RB", bye: 10},
    {id: 63, name: "Rashod Bateman", team: "Baltimore Ravens", position: "WR", bye: 10},
    {id: 64, name: "Jalen Hurts", team: "Philadelphia Eagles", position: "QB", bye: 7},
    {id: 65, name: "Elijah Moore", team: "New York Jets", position: "WR", bye: 10},
    {id: 66, name: "Chris Godwin", team: "Tampa Bay Buccaneers", position: "WR", bye: 11},
    {id: 67, name: "Dalton Schultz", team: "Dallas Cowboys", position: "TE", bye: 9},
    {id: 68, name: "Miles Sanders", team: "Philadelphia Eagles", position: "RB", bye: 7},
    {id: 69, name: "Michael Thomas", team: "New Orleans Saints", position: "WR", bye: 14},
    {id: 70, name: "Adam Thielen", team: "Minnesota Vikings", position: "WR", bye: 7},
    {id: 71, name: "Joe Burrow", team: "Cincinnati Bengals", position: "QB", bye: 10},
    {id: 72, name: "Dallas Goedert", team: "Philadelphia Eagles", position: "TE", bye: 7},
    {id: 73, name: "Juju Smith-Schuster", team: "Kansas City Chiefs", position: "WR", bye: 8},
    {id: 74, name: "T.J. Hockenson", team: "Detroit Lions", position: "TE", bye: 6},
    {id: 75, name: "Rashaad Penny", team: "Seattle Seahawks", position: "RB", bye: 11},
    {id: 76, name: "Amon-Ra St. Brown", team: "Detroit Lions", position: "WR", bye: 6},
    {id: 77, name: "Clyde Edwards-Helaire", team: "Kansas City Chiefs", position: "RB", bye: 8},
    {id: 78, name: "DeVonta Smith", team: "Philadelphia Eagles", position: "WR", bye: 7},
    {id: 79, name: "Tom Brady", team: "Tampa Bay Buccaneers", position: "QB", bye: 11},
    {id: 80, name: "Brandon Aiyuk", team: "San Francisco 49ers", position: "WR", bye: 9},
    {id: 81, name: "Kareem Hunt", team: "Cleveland Browns", position: "RB", bye: 9},
    {id: 82, name: "Dak Prescott", team: "Dallas Cowboys", position: "QB", bye: 9},
    {id: 83, name: "Russell Wilson", team: "Denver Broncos", position: "QB", bye: 9},
    {id: 84, name: "Chase Edmonds", team: "Miami Dolphins", position: "RB", bye: 11},
    {id: 85, name: "Devin Singletary", team: "Buffalo Bills", position: "RB", bye: 7},
    {id: 86, name: "Tony Pollard", team: "Dallas Cowboys", position: "RB", bye: 9},
    {id: 87, name: "Allen Lazard", team: "Green Bay Packers", position: "WR", bye: 14},
    {id: 88, name: "Tyler Lockett", team: "Seattle Seahawks", position: "WR", bye: 11},
    {id: 89, name: "Melvin Gordon III", team: "Denver Broncos", position: "RB", bye: 9},
    {id: 90, name: "Drake London", team: "Atlanta Falcons", position: "WR", bye: 14},
    {id: 91, name: "DeAndre Hopkins", team: "Arizona Cardinals", position: "WR", bye: 14},
    {id: 92, name: "Dawson Knox", team: "Buffalo Bills", position: "TE", bye: 7},
    {id: 93, name: "Rhamondre Stevenson", team: "New England Patriots", position: "RB", bye: 10},
    {id: 94, name: "Ken Walker III", team: "Seattle Seahawks", position: "RB", bye: 11},
    {id: 95, name: "Zach Ertz", team: "Arizona Cardinals", position: "TE", bye: 14},
    {id: 96, name: "Christian Kirk", team: "Jacksonville Jaguars", position: "WR", bye: 11},
    {id: 97, name: "Cordarrelle Patterson", team: "Atlanta Falcons", position: "RB", bye: 14},
    {id: 98, name: "Trey Lance", team: "San Francisco 49ers", position: "QB", bye: 9},
    {id: 99, name: "Hunter Renfrow", team: "Las Vegas Raiders", position: "WR", bye: 6},
    {id: 100, name: "Matthew Stafford", team: "Los Angeles Rams", position: "QB", bye: 7},
    {id: 101, name: "Treylon Burks", team: "Tennessee Titans", position: "WR", bye: 6},
    {id: 102, name: "Robert Woods", team: "Tennessee Titans", position: "WR", bye: 6},
    {id: 103, name: "Aaron Rodgers", team: "Green Bay Packers", position: "QB", bye: 14},
    {id: 104, name: "Chase Claypool", team: "Pittsburgh Steelers", position: "WR", bye: 9},
    {id: 105, name: "Kadarius Toney", team: "New York Giants", position: "WR", bye: 9},
    {id: 106, name: "Kirk Cousins", team: "Minnesota Vikings", position: "QB", bye: 7},
    {id: 107, name: "Derek Carr", team: "Las Vegas Raiders", position: "QB", bye: 6},
    {id: 108, name: "Hunter Henry", team: "New England Patriots", position: "TE", bye: 10},
    {id: 109, name: "Chris Olave", team: "New Orleans Saints", position: "WR", bye: 14},
    {id: 110, name: "James Cook", team: "Buffalo Bills", position: "RB", bye: 7},
    {id: 111, name: "Pat Freiermuth", team: "Pittsburgh Steelers", position: "TE", bye: 9},
    {id: 112, name: "Garrett Wilson", team: "New York Jets", position: "WR", bye: 10},
    {id: 113, name: "Darrell Henderson Jr.", team: "Los Angeles Rams", position: "RB", bye: 7},
    {id: 114, name: "James Robinson", team: "Jacksonville Jaguars", position: "RB", bye: 11},
    {id: 115, name: "Ronald Jones II", team: "Kansas City Chiefs", position: "RB", bye: 8},
    {id: 116, name: "Cole Kmet", team: "Chicago Bears", position: "TE", bye: 14},
    {id: 117, name: "Michael Carter", team: "New York Jets", position: "RB", bye: 10},
    {id: 118, name: "Tua Tagovailoa", team: "Miami Dolphins", position: "QB", bye: 11},
    {id: 119, name: "Russell Gage", team: "Tampa Bay Buccaneers", position: "WR", bye: 11},
    {id: 120, name: "Mike Gesicki", team: "Miami Dolphins", position: "TE", bye: 11},
    {id: 121, name: "Justin Fields", team: "Chicago Bears", position: "QB", bye: 14},
    {id: 122, name: "Alexander Mattison", team: "Minnesota Vikings", position: "RB", bye: 7},
    {id: 123, name: "Skyy Moore", team: "Kansas City Chiefs", position: "WR", bye: 8},
    {id: 124, name: "Marquez Valdes-Scantling", team: "Kansas City Chiefs", position: "WR", bye: 8},
    {id: 125, name: "Tyler Boyd", team: "Cincinnati Bengals", position: "WR", bye: 10},
    {id: 126, name: "Trevor Lawrence", team: "Jacksonville Jaguars", position: "QB", bye: 11},
    {id: 127, name: "Dameon Pierce", team: "Houston Texans", position: "RB", bye: 6},
    {id: 128, name: "Isaiah Spiller", team: "Los Angeles Chargers", position: "RB", bye: 8},
    {id: 129, name: "Kenny Golladay", team: "New York Giants", position: "WR", bye: 9},
    {id: 130, name: "Noah Fant", team: "Seattle Seahawks", position: "TE", bye: 11},
    {id: 131, name: "Irv Smith Jr.", team: "Minnesota Vikings", position: "TE", bye: 7},
    {id: 132, name: "Raheem Mostert", team: "Miami Dolphins", position: "RB", bye: 11},
    {id: 133, name: "Michael Gallup", team: "Dallas Cowboys", position: "WR", bye: 9},
    {id: 134, name: "Jarvis Landry", team: "New Orleans Saints", position: "WR", bye: 14},
    {id: 135, name: "DeVante Parker", team: "New England Patriots", position: "WR", bye: 10},
    {id: 136, name: "Jakobi Meyers", team: "New England Patriots", position: "WR", bye: 10},
    {id: 137, name: "Kenneth Gainwell", team: "Philadelphia Eagles", position: "RB", bye: 7},
    {id: 138, name: "Albert Okwuegbunam", team: "Denver Broncos", position: "TE", bye: 9},
    {id: 139, name: "Robert Tonyan", team: "Green Bay Packers", position: "TE", bye: 14},
    {id: 140, name: "Jameis Winston", team: "New Orleans Saints", position: "QB", bye: 14},
    {id: 141, name: "Jamaal Williams", team: "Detroit Lions", position: "RB", bye: 6},
    {id: 142, name: "David Njoku", team: "Cleveland Browns", position: "TE", bye: 9},
    {id: 143, name: "DJ Chark Jr.", team: "Carolina Panthers", position: "WR", bye: 13},
    {id: 144, name: "Tyler Higbee", team: "Los Angeles Rams", position: "TE", bye: 7},
    {id: 145, name: "Matt Ryan", team: "Indianapolis Colts", position: "QB", bye: 14},
    {id: 146, name: "Gus Edwards", team: "Baltimore Ravens", position: "RB", bye: 10},
    {id: 147, name: "Gerald Everett", team: "Los Angeles Chargers", position: "TE", bye: 8},
    {id: 148, name: "Ryan Tannehill", team: "Tennessee Titans", position: "QB", bye: 6},
    {id: 149, name: "Tyler Allgeier", team: "Atlanta Falcons", position: "RB", bye: 14},
    {id: 150, name: "Nyheim Hines", team: "Indianapolis Colts", position: "RB", bye: 14},
    {id: 151, name: "Khalil Herbert", team: "Chicago Bears", position: "RB", bye: 14},
    {id: 152, name: "Buffalo Bills Defense", team: "Buffalo Bills", position: "D/ST", bye: 7},
    {id: 153, name: "Rondale Moore", team: "Arizona Cardinals", position: "WR", bye: 13},
    {id: 154, name: "Marlon Mack", team: "Houston Texans", position: "RB", bye: 6},
    {id: 155, name: "Daniel Jones", team: "New York Giants", position: "QB", bye: 9},
    {id: 156, name: "Tampa Bay Buccaneers Defense", team: "Tampa Bay Buccaneers", position: "D/ST", bye: 11},
    {id: 157, name: "Evan Engram", team: "Jacksonville Jaguars", position: "TE", bye: 11},
    {id: 158, name: "Mac Jones", team: "New England Patriots", position: "QB", bye: 10},
    {id: 159, name: "Sony Michel", team: "Los Angeles Chargers", position: "RB", bye: 8},
    {id: 160, name: "Julio Jones", team: "Tampa Bay Buccaneers", position: "WR", bye: 11},
    {id: 161, name: "Rachaad White", team: "Tampa Bay Buccaneers", position: "RB", bye: 11},
    {id: 162, name: "Zach Wilson", team: "New York Jets", position: "QB", bye: 10},
    {id: 163, name: "J.D. McKissic", team: "Washington Commanders", position: "RB", bye: 14},
    {id: 164, name: "Logan Thomas", team: "Washington Commanders", position: "TE", bye: 14},
    {id: 165, name: "San Francisco 49ers Defense", team: "San Francisco 49ers", position: "D/ST", bye: 9},
    {id: 166, name: "Corey Davis", team: "New York Jets", position: "WR", bye: 10},
    {id: 167, name: "Jahan Dotson", team: "Washington Commanders", position: "WR", bye: 14},
    {id: 168, name: "Austin Hooper", team: "Tennessee Titans", position: "TE", bye: 6},
    {id: 169, name: "Indianapolis Colts Defense", team: "Indianapolis Colts", position: "D/ST", bye: 14},
    {id: 170, name: "Carson Wentz", team: "Washington Commanders", position: "QB", bye: 14},
    {id: 171, name: "Mecole Hardman", team: "Kansas City Chiefs", position: "WR", bye: 8},
    {id: 172, name: "Van Jefferson", team: "Los Angeles Rams", position: "WR", bye: 7},
    {id: 173, name: "Jameson Williams", team: "Detroit Lions", position: "WR", bye: 6},
    {id: 174, name: "Darrel Williams", team: "Arizona Cardinals", position: "RB", bye: 13},
    {id: 175, name: "Mark Ingram II", team: "New Orleans Saints", position: "RB", bye: 14},
    {id: 176, name: "D'Onta Foreman", team: "Carolina Panthers", position: "RB", bye: 13},
    {id: 177, name: "Robbie Anderson", team: "Carolina Panthers", position: "WR", bye: 13},
    {id: 178, name: "Justin Tucker", team: "Baltimore Ravens", position: "K", bye: 10},
    {id: 179, name: "Denver Broncos Defense", team: "Denver Broncos", position: "D/ST", bye: 9},
    {id: 180, name: "New England Patriots Defense", team: "New England Patriots", position: "D/ST", bye: 10},
    {id: 181, name: "Nico Collins", team: "Houston Texans", position: "WR", bye: 6},
    {id: 182, name: "New Orleans Saints Defense", team: "New Orleans Saints", position: "D/ST", bye: 14},
    {id: 183, name: "Jared Goff", team: "Detroit Lions", position: "QB", bye: 6},
    {id: 184, name: "Los Angeles Rams Defense", team: "Los Angeles Rams", position: "D/ST", bye: 7},
    {id: 185, name: "Christian Watson", team: "Green Bay Packers", position: "WR", bye: 14},
    {id: 186, name: "Hayden Hurst", team: "Cincinnati Bengals", position: "TE", bye: 10},
    {id: 187, name: "Deshaun Watson", team: "Cleveland Browns", position: "QB", bye: 9},
    {id: 188, name: "Tyler Bass", team: "Buffalo Bills", position: "K", bye: 7},
    {id: 189, name: "Marvin Jones Jr.", team: "Jacksonville Jaguars", position: "WR", bye: 11},
    {id: 190, name: "Brian Robinson Jr.", team: "Washington Commanders", position: "RB", bye: 14},
    {id: 191, name: "K.J. Osborn", team: "Minnesota Vikings", position: "WR", bye: 7},
    {id: 192, name: "Joshua Palmer", team: "Los Angeles Chargers", position: "WR", bye: 8},
    {id: 193, name: "George Pickens", team: "Pittsburgh Steelers", position: "WR", bye: 9},
    {id: 194, name: "Matt Gay", team: "Los Angeles Rams", position: "K", bye: 7},
    {id: 195, name: "Davis Mills", team: "Houston Texans", position: "QB", bye: 6},
    {id: 196, name: "Dallas Cowboys Defense", team: "Dallas Cowboys", position: "D/ST", bye: 9},
    {id: 197, name: "Kendrick Bourne", team: "New England Patriots", position: "WR", bye: 10},
    {id: 198, name: "Baker Mayfield", team: "Carolina Panthers", position: "QB", bye: 13},
    {id: 199, name: "Daniel Carlson", team: "Las Vegas Raiders", position: "K", bye: 6},
    {id: 200, name: "Donovan Peoples-Jones", team: "Cleveland Browns", position: "WR", bye: 9},
    {id: 201, name: "Zamir White", team: "Las Vegas Raiders", position: "RB", bye: 6},
    {id: 202, name: "Evan McPherson", team: "Cincinnati Bengals", position: "K", bye: 10},
    {id: 203, name: "Los Angeles Chargers Defense", team: "Los Angeles Chargers", position: "D/ST", bye: 8},
    {id: 204, name: "Jamison Crowder", team: "Buffalo Bills", position: "WR", bye: 7},
    {id: 205, name: "Jalen Tolbert", team: "Dallas Cowboys", position: "WR", bye: 9},
    {id: 206, name: "Miami Dolphins Defense", team: "Miami Dolphins", position: "D/ST", bye: 11},
    {id: 207, name: "Boston Scott", team: "Philadelphia Eagles", position: "RB", bye: 7},
    {id: 208, name: "Green Bay Packers Defense", team: "Green Bay Packers", position: "D/ST", bye: 14},
    {id: 209, name: "Curtis Samuel", team: "Washington Commanders", position: "WR", bye: 14},
    {id: 210, name: "Kansas City Chiefs Defense", team: "Kansas City Chiefs", position: "D/ST", bye: 8},
    {id: 211, name: "KJ Hamler", team: "Denver Broncos", position: "WR", bye: 9},
    {id: 212, name: "Kenyan Drake", team: "Baltimore Ravens", position: "RB", bye: 10},
    {id: 213, name: "Parris Campbell", team: "Indianapolis Colts", position: "WR", bye: 14},
    {id: 214, name: "Ryan Succop", team: "Tampa Bay Buccaneers", position: "K", bye: 11},
    {id: 215, name: "Harrison Butker", team: "Kansas City Chiefs", position: "K", bye: 8},
    {id: 216, name: "A.J. Green", team: "Arizona Cardinals", position: "WR", bye: 13},
    {id: 217, name: "Matt Prater", team: "Arizona Cardinals", position: "K", bye: 13},
    {id: 218, name: "Cleveland Browns Defense", team: "Cleveland Browns", position: "D/ST", bye: 9},
    {id: 219, name: "Tyrion Davis-Price", team: "San Francisco 49ers", position: "RB", bye: 9},
    {id: 220, name: "Brevin Jordan", team: "Houston Texans", position: "TE", bye: 6},
    {id: 221, name: "Baltimore Ravens Defense", team: "Baltimore Ravens", position: "D/ST", bye: 10},
    {id: 222, name: "Chubba Hubbard", team: "Carolina Panthers", position: "RB", bye: 13},
    {id: 223, name: "Philadelphia Eagles Defense", team: "Philadelphia Eagles", position: "D/ST", bye: 7},
    {id: 224, name: "David Bell", team: "Cleveland Browns", position: "WR", bye: 9},
    {id: 225, name: "Pittsburgh Steelers Defense", team: "Pittsburgh Steelers", position: "D/ST", bye: 9},
    {id: 226, name: "Wan'Dale Robinson", team: "New York Giants", position: "WR", bye: 9},
    {id: 227, name: "Sterling Shepard", team: "New York Giants", position: "WR", bye: 9},
    {id: 228, name: "Rodrigo Blankenship", team: "Indianapolis Colts", position: "K", bye: 14},
    {id: 229, name: "Younghoe Koo", team: "Atlanta Falcons", position: "K", bye: 14},
    {id: 230, name: "Marcus Mariota", team: "Atlanta Falcons", position: "QB", bye: 14},
    {id: 231, name: "Jonnu Smith", team: "New England Patriots", position: "TE", bye: 10},
    {id: 232, name: "Alec Pierce", team: "Indianapolis Colts", position: "WR", bye: 14},
    {id: 233, name: "Laviska Shenault Jr.", team: "Carolina Panthers", position: "WR", bye: 13},
    {id: 234, name: "Jason Sanders", team: "Miami Dolphins", position: "K", bye: 11},
    {id: 235, name: "Damien Williams", team: "Atlanta Falcons", position: "RB", bye: 14},
    {id: 236, name: "Brandon McManus", team: "Denver Broncos", position: "K", bye: 9},
    {id: 237, name: "Nick Folk", team: "New England Patriots", position: "K", bye: 10},
    {id: 238, name: "Arizona Cardinals Defense", team: "Arizona Cardinals", position: "D/ST", bye: 13},
    {id: 239, name: "D'Ernest Johnson", team: "Cleveland Browns", position: "RB", bye: 9},
    {id: 240, name: "Adam Trautman", team: "New Orleans Saints", position: "TE", bye: 14},
    {id: 241, name: "Trey Sermon", team: "Philadelphia Eagles", position: "RB", bye: 7},
    {id: 242, name: "Samaje Perine", team: "Cincinnati Bengals", position: "RB", bye: 10},
    {id: 243, name: "Mitch Trubisky", team: "Pittsburgh Steelers", position: "QB", bye: 14},
    {id: 244, name: "Terrace Marshall Jr.", team: "Carolina Panthers", position: "WR", bye: 13},
    {id: 245, name: "Robbie Gould", team: "San Francisco 49ers", position: "K", bye: 9},
    {id: 246, name: "Jake Elliott", team: "Philadelphia Eagles", position: "K", bye: 7},
    {id: 247, name: "Mo Alie-Cox", team: "Indianapolis Colts", position: "TE", bye: 14},
    {id: 248, name: "Byron Pringle", team: "Chicago Bears", position: "WR", bye: 14},
    {id: 249, name: "Cincinnati Bengals Defense", team: "Cincinnati Bengals", position: "D/ST", bye: 10},
    {id: 250, name: "Jeff Wilson Jr.", team: "San Francisco 49ers", position: "RB", bye: 9},
    {id: 251, name: "Tennessee Titans Defense", team: "Tennessee Titans", position: "D/ST", bye: 6},
    {id: 252, name: "Myles Gaskin", team: "Miami Dolphins", position: "RB", bye: 11},
    {id: 253, name: "Dan Arnold", team: "Jacksonville Jaguars", position: "TE", bye: 11},
    {id: 254, name: "William Fuller V", team: "Free Agent", position: "WR", bye: 0},
    {id: 255, name: "Bryan Edwards", team: "Atlanta Falcons", position: "WR", bye: 14},
    {id: 256, name: "Dustin Hopkins", team: "Los Angeles Chargers", position: "K", bye: 8},
    {id: 257, name: "Jerick McKinnon", team: "Kansas City Chiefs", position: "RB", bye: 8},
    {id: 258, name: "Carolina Panthers Defense", team: "Carolina Panthers", position: "D/ST", bye: 13},
    {id: 259, name: "Braxton Berrios", team: "New York Jets", position: "WR", bye: 10},
    {id: 260, name: "Isaiah McKenzie", team: "Buffalo Bills", position: "WR", bye: 7},
    {id: 261, name: "Rex Burkhead", team: "Houston Texans", position: "RB", bye: 6},
    {id: 262, name: "Greg Zuerlein", team: "New York Jets", position: "K", bye: 10},
    {id: 263, name: "Zack Moss", team: "Buffalo Bills", position: "RB", bye: 7},
    {id: 264, name: "Zay Jones", team: "Jacksonville Jaguars", position: "WR", bye: 11},
    {id: 265, name: "Will Lutz", team: "New Orleans Saints", position: "K", bye: 14},
    {id: 266, name: "Marquez Callaway", team: "New Orleans Saints", position: "WR", bye: 14},
    {id: 267, name: "Odell Beckham Jr.", team: "Free Agent", position: "WR", bye: 0},
    {id: 268, name: "C.J. Uzomah", team: "Cincinnati Bengals", position: "TE", bye: 10},
    {id: 269, name: "Minnesota Vikings Defense", team: "Minnesota Vikings", position: "D/ST", bye: 7},
    {id: 270, name: "Chris Boswell", team: "Pittsburgh Steelers", position: "K", bye: 9},
    {id: 271, name: "Randall Cobb", team: "Green Bay Packers", position: "WR", bye: 14},
    {id: 272, name: "Mike Davis", team: "Baltimore Ravens", position: "RB", bye: 10},
    {id: 273, name: "Sammy Watkins", team: "Green Bay Packers", position: "WR", bye: 14},
    {id: 274, name: "Cameron Brate", team: "Tampa Bay Buccaneers", position: "TE", bye: 11},
    {id: 275, name: "Matt Breida", team: "New York Giants", position: "RB", bye: 9},
    {id: 276, name: "Chicago Bears Defense", team: "Chicago Bears", position: "D/ST", bye: 14},
    {id: 277, name: "Mason Crosby", team: "Green Bay Packers", position: "K", bye: 14},
    {id: 278, name: "Cedrick Wilson Jr.", team: "Miami Dolphins", position: "WR", bye: 11},
    {id: 279, name: "Romeo Doubs", team: "Green Bay Packers", position: "WR", bye: 14},
    {id: 280, name: "Hassan Haskins", team: "Tennessee Titans", position: "RB", bye: 6},
    {id: 281, name: "O.J. Howard", team: "Houston Texans", position: "TE", bye: 6},
    {id: 282, name: "Phillip Lindsay", team: "Indianapolis Colts", position: "RB", bye: 14},
    {id: 283, name: "Trey McBride", team: "Arizona Cardinals", position: "TE", bye: 13},
    {id: 284, name: "Graham Gano", team: "New York Giants", position: "K", bye: 9},
    {id: 285, name: "Washington Commanders Defense", team: "Washington Commanders", position: "D/ST", bye: 14},
    {id: 286, name: "Nelson Agholor", team: "New England Patriots", position: "WR", bye: 10},
    {id: 287, name: "Jason Myers", team: "Seattle Seahawks", position: "K", bye: 11},
    {id: 288, name: "Greg Joseph", team: "Minnesota Vikings", position: "K", bye: 7},
    {id: 289, name: "New York Giants Defense", team: "New York Giants", position: "D/ST", bye: 9},
    {id: 290, name: "Eno Benjamin", team: "Arizona Cardinals", position: "RB", bye: 13},
    {id: 291, name: "Ke'Shawn Vaughn", team: "Tampa Bay Buccaneers", position: "RB", bye: 11},
    {id: 292, name: "Cairo Santos", team: "Chicago Bears", position: "K", bye: 14},
    {id: 293, name: "Seattle Seahawks Defense", team: "Seattle Seahawks", position: "D/ST", bye: 11},
    {id: 294, name: "New York Jets Defense", team: "New York Jets", position: "D/ST", bye: 10},
    {id: 295, name: "Tre'Quan Smith", team: "New Orleans Saints", position: "WR", bye: 14},
    {id: 296, name: "Randy Bullock", team: "Tennessee Titans", position: "K", bye: 6},
    {id: 297, name: "Ka'imi Fairbairn", team: "Houston Texans", position: "K", bye: 6},
    {id: 298, name: "Drew Lock", team: "Seattle Seahawks", position: "QB", bye: 11},
    {id: 299, name: "Josh Reynolds", team: "Detroit Lions", position: "WR", bye: 6},
    {id: 300, name: "Jimmy Garoppolo", team: "San Francisco 49ers", position: "QB", bye: 9},
    {id: 301, name: "Jacksonville Jaguars Defense", team: "Jacksonville Jaguars", position: "D/ST", bye: 11},
    {id: 302, name: "Kenny Pickett", team: "Pittsburgh Steelers", position: "QB", bye: 9},
    {id: 303, name: "Darius Slayton", team: "New York Giants", position: "WR", bye: 9},
    {id: 304, name: "Quez Watkins", team: "Philadelphia Eagles", position: "WR", bye: 7},
    {id: 305, name: "Pierre Strong Jr.", team: "New England Patriots", position: "RB", bye: 10},
    {id: 306, name: "Kyle Rudolph", team: "Tampa Bay Buccaneers", position: "TE", bye: 11},
    {id: 307, name: "Dyami Brown", team: "Washington Commanders", position: "WR", bye: 14},
    {id: 308, name: "Kyren Williams", team: "Los Angeles Rams", position: "RB", bye: 7},
    {id: 309, name: "Emmanuel Sanders", team: "Free Agent", position: "WR", bye: 0},
    {id: 310, name: "Chris Evans", team: "Cincinnati Bengals", position: "RB", bye: 10},
    {id: 311, name: "Isiah Pacheco", team: "Kansas City Chiefs", position: "RB", bye: 8},
    {id: 312, name: "Ty Johnson", team: "New York Jets", position: "RB", bye: 10},
    {id: 313, name: "Jalen Reagor", team: "Minnesota Vikings", position: "WR", bye: 7},
    {id: 314, name: "Justin Jackson", team: "Detroit Lions", position: "RB", bye: 6},
    {id: 315, name: "Quintez Cephus", team: "Detroit Lions", position: "WR", bye: 6},
    {id: 316, name: "Joshua Kelley", team: "Los Angeles Chargers", position: "RB", bye: 8},
    {id: 317, name: "Velus Jones Jr.", team: "Chicago Bears", position: "WR", bye: 14},
    {id: 318, name: "Duke Johnson Jr.", team: "Buffalo Bills", position: "RB", bye: 7},
    {id: 319, name: "Geno Smith", team: "Seattle Seahawks", position: "QB", bye: 11},
    {id: 320, name: "Greg Dulcich", team: "Denver Broncos", position: "TE", bye: 9},
    {id: 321, name: "Chase McLaughlin", team: "Indianapolis Colts", position: "K", bye: 14},
    {id: 322, name: "Darrynton Evans", team: "Chicago Bears", position: "RB", bye: 14},
    {id: 323, name: "Devin Duvernay", team: "Baltimore Ravens", position: "WR", bye: 10},
    {id: 324, name: "Tyler Badie", team: "Baltimore Ravens", position: "RB", bye: 10},
    {id: 325, name: "Cole Beasley", team: "Tampa Bay Buccaneers", position: "WR", bye: 11},
    {id: 326, name: "Jacoby Brissett", team: "Cleveland Browns", position: "QB", bye: 9},
    {id: 327, name: "Josh Lambo", team: "Free Agent", position: "K", bye: 0},
    {id: 328, name: "Sam Darnold", team: "Carolina Panthers", position: "QB", bye: 13},
    {id: 329, name: "Nick Westbrook-Ikhine", team: "Tennessee Titans", position: "WR", bye: 6},
    {id: 330, name: "Giovani Bernard", team: "Tampa Bay Buccaneers", position: "RB", bye: 11},
    {id: 331, name: "Harrison Bryant", team: "Cleveland Browns", position: "TE", bye: 9},
    {id: 332, name: "Jared Cook", team: "Free Agent", position: "TE", bye: 0},
    {id: 333, name: "Tevin Coleman", team: "San Francisco 49ers", position: "RB", bye: 9},
    {id: 334, name: "Salvon Ahmed", team: "Miami Dolphins", position: "RB", bye: 11},
    {id: 335, name: "Tyler Conklin", team: "New York Jets", position: "TE", bye: 10},
    {id: 336, name: "Daniel Bellinger", team: "New York Giants", position: "TE", bye: 9},
    {id: 337, name: "Ricky Seals-Jones", team: "Free Agent", position: "TE", bye: 0},
    {id: 338, name: "Snoop Conner", team: "Jacksonville Jaguars", position: "RB", bye: 11},
    {id: 339, name: "Jaret Patterson", team: "Washington Commanders", position: "RB", bye: 14},
    {id: 340, name: "Jerome Ford", team: "Cleveland Browns", position: "RB", bye: 9},
    {id: 341, name: "Tommy Tremble", team: "Carolina Panthers", position: "TE", bye: 13},
    {id: 342, name: "Desmond Ridder", team: "Atlanta Falcons", position: "QB", bye: 14},
    {id: 343, name: "David Johnson", team: "Free Agent", position: "RB", bye: 0},
    {id: 344, name: "Tyquan Thornton", team: "New England Patriots", position: "WR", bye: 10},
    {id: 345, name: "T.Y. Hilton", team: "Free Agent", position: "WR", bye: 0},
    {id: 346, name: "Donald Parham Jr.", team: "Los Angeles Chargers", position: "TE", bye: 8},
    {id: 347, name: "Anthony Firkser", team: "Atlanta Falcons", position: "TE", bye: 14},
    {id: 348, name: "Malcolm Brown", team: "Los Angeles Rams", position: "RB", bye: 7},
    {id: 349, name: "Jalen Guyton", team: "Los Angeles Chargers", position: "WR", bye: 8},
    {id: 350, name: "Dontrell Hilliard", team: "Tennessee Titans", position: "RB", bye: 6},
    {id: 351, name: "James Washington", team: "Dallas Cowboys", position: "WR", bye: 9},
    {id: 352, name: "Latavius Murray", team: "Denver Broncos", position: "RB", bye: 9},
    {id: 353, name: "James Proche II", team: "Baltimore Ravens", position: "WR", bye: 10},
    {id: 354, name: "John Metchie III", team: "Houston Texans", position: "WR", bye: 6},
    {id: 355, name: "Las Vegas Raiders Defense", team: "Las Vegas Raiders", position: "D/ST", bye: 6},
    {id: 356, name: "Jelani Woods", team: "Indianapolis Colts", position: "TE", bye: 14},
    {id: 357, name: "Devontae Booker", team: "Free Agent", position: "RB", bye: 0},
    {id: 358, name: "Foster Moreau", team: "Las Vegas Raiders", position: "TE", bye: 6},
    {id: 359, name: "Demarcus Robinson", team: "Baltimore Ravens", position: "WR", bye: 10},
    {id: 360, name: "Atlanta Falcons Defense", team: "Atlanta Falcons", position: "D/ST", bye: 14},
    {id: 361, name: "Keaontay Ingram", team: "Arizona Cardinals", position: "RB", bye: 13},
    {id: 362, name: "Devonta Freeman", team: "Free Agent", position: "RB", bye: 0},
    {id: 363, name: "Amari Rodgers", team: "Green Bay Packers", position: "WR", bye: 14},
    {id: 364, name: "Detroit Lions Defense", team: "Detroit Lions", position: "D/ST", bye: 6},
    {id: 365, name: "Cade Otton", team: "Tampa Bay Buccaneers", position: "TE", bye: 11},
    {id: 366, name: "Cade York", team: "Cleveland Browns", position: "K", bye: 9},
    {id: 367, name: "Kyle Philips", team: "Tennessee Titans", position: "WR", bye: 6},
    {id: 368, name: "Khalil Shakir", team: "Buffalo Bills", position: "WR", bye: 7},
    {id: 369, name: "Wayne Gallman Jr.", team: "Kansas City Chiefs", position: "RB", bye: 8},
    {id: 370, name: "Jonathan Garibay", team: "Free Agent", position: "K", bye: 0},
    {id: 371, name: "John Bates", team: "Washington Commanders", position: "TE", bye: 14},
    {id: 372, name: "Olamide Zaccheaus", team: "Atlanta Falcons", position: "WR", bye: 14},
    {id: 373, name: "Benny Snell Jr.", team: "Pittsburgh Steelers", position: "RB", bye: 9},
    {id: 374, name: "Anthony Schwartz", team: "Cleveland Browns", position: "WR", bye: 9},
    {id: 375, name: "Kylen Granson", team: "Indianapolis Colts", position: "TE", bye: 14},
    {id: 376, name: "Calvin Austin III", team: "Pittsburgh Steelers", position: "WR", bye: 9},
    {id: 377, name: "Taysom Hill", team: "New Orleans Saints", position: "TE", bye: 14},
    {id: 378, name: "Dee Eskridge", team: "Seattle Seahawks", position: "WR", bye: 11},
    {id: 379, name: "Teddy Bridgewater", team: "Miami Dolphins", position: "QB", bye: 11},
    {id: 380, name: "Houston Texans Defense", team: "Houston Texans", position: "D/ST", bye: 6},
    {id: 381, name: "Malik Willis", team: "Tennessee Titans", position: "QB", bye: 6},
    {id: 382, name: "Jauan Jennings", team: "San Francisco 49ers", position: "WR", bye: 9},
    {id: 383, name: "Laquon Treadwell", team: "Arizona Cardinals", position: "WR", bye: 13},
    {id: 384, name: "Rashard Higgins", team: "Carolina Panthers", position: "WR", bye: 13},
    {id: 385, name: "Kene Nwangwu", team: "Minnesota Vikings", position: "RB", bye: 7},
    {id: 386, name: "Danny Gray", team: "San Francisco 49ers", position: "WR", bye: 9},
    {id: 387, name: "Joey Slye", team: "Washington Commanders", position: "K", bye: 14},
    {id: 388, name: "Tristan Vizcaino", team: "Free Agent", position: "K", bye: 0},
    {id: 389, name: "Austin Seibert", team: "Free Agent", position: "K", bye: 0},
    {id: 390, name: "Antonio Brown", team: "Free Agent", position: "WR", bye: 0},
    {id: 391, name: "Zane Gonzalez", team: "Carolina Panthers", position: "K", bye: 13},
    {id: 392, name: "Ryan Santoso", team: "Free Agent", position: "K", bye: 0},
    {id: 393, name: "Riley Patterson", team: "Jacksonville Jaguars", position: "K", bye: 11},
    {id: 394, name: "Brett Maher", team: "Dallas Cowboys", position: "K", bye: 9},
    {id: 395, name: "Lirim Hajrullahu", team: "Free Agent", position: "K", bye: 0},
    {id: 396, name: "Eddy Pineiro", team: "Carolina Panthers", position: "K", bye: 13},
    {id: 397, name: "Andrew Jacas", team: "Free Agent", position: "K", bye: 0},
    {id: 398, name: "KaVontae Turpin", team: "Dallas Cowboys", position: "WR", bye: 9}
];

//append player list to options in dropdown
function displayPlayers() {
    let playerLength = players.length;

    for (let i = 0; i < playerLength; i++) {
        var playerName = document.createElement("option");
        let name = players[i].name;
        playerName.textContent = name;
        playerName.value = name;
        select.append(playerName);
    }
}

const getPlayer = function() {
    let draftedPlayer = select.value;
    addToBoard(draftedPlayer);
    allDraftedPlayers.push(draftedPlayer);
}

function addToBoard(draftedPlayer) {
    for (let i = 0; i < players.length; i++) {
    //Need to filter player by select.value so that the correct player is put on the board
    //once player is added to the board increase the count by 1 and repeat process.
    if (draftedPlayer == players[i].name && !(allDraftedPlayers.includes(draftedPlayer))) {
        let pickedPlayerEl = document.querySelector("#pick" + count);
        let id = players[i].id;
        //need to use id to save player as selected and loop through selected to compare and make sure player has not been selected already
        //add player from select.value to column
        let pickedPlayerName = document.createElement("p");
        pickedPlayerName.textContent = players[id].name;
        let pickedPlayerBye = document.createElement("p");
        pickedPlayerBye.textContent = "Bye Week: " + players[id].bye;
        let pickedPlayerTeam = document.createElement("p");
        pickedPlayerTeam.textContent = players[id].team;
        let pickedPlayerPosition = document.createElement("p");
        pickedPlayerPosition.textContent = players[id].position;
        pickedPlayerEl.appendChild(pickedPlayerName);
        pickedPlayerEl.appendChild(pickedPlayerPosition);
        pickedPlayerEl.appendChild(pickedPlayerTeam);
        pickedPlayerEl.appendChild(pickedPlayerBye);
        switch (pickedPlayerPosition.textContent) {
            case "RB":
                pickedPlayerEl.style.background = "aqua";
                break;   
            case "WR":
                pickedPlayerEl.style.background = "green";
                break;
            case "TE":
                pickedPlayerEl.style.background = "orange";
                break;
            case "QB":
                pickedPlayerEl.style.background = "red";
                break;
            case "D/ST":
                pickedPlayerEl.style.background = "brown";
                break;
            case "K":
                pickedPlayerEl.style.background = "pink";
        }
        if (countUp) {
            if (teamId <= 12) {
                addtoTeam(teamId, id, pickedPlayerName.textContent, pickedPlayerPosition.textContent, pickedPlayerTeam.textContent, pickedPlayerBye.textContent);
                teamId++;
            } else {
                countUp = false;
                teamId = 12;
                addtoTeam(teamId, id, pickedPlayerName.textContent, pickedPlayerPosition.textContent, pickedPlayerTeam.textContent, pickedPlayerBye.textContent);
                teamId --;
            }
        } else {
            if (teamId >= 1) {
                addtoTeam(teamId, id, pickedPlayerName.textContent, pickedPlayerPosition.textContent, pickedPlayerTeam.textContent, pickedPlayerBye.textContent);
                teamId--;
            } else {
                countUp = true;
                teamId = 1;
                addtoTeam(teamId, id, pickedPlayerName.textContent, pickedPlayerPosition.textContent, pickedPlayerTeam.textContent, pickedPlayerBye.textContent);
                teamId++;
            }
        }
        count++;
}
}   
};

function addtoTeam(teamId, id, name, position, team, bye) {
    console.log (teamId);
    console.log(id);
    console.log(name);
    console.log(position);
    console.log(team);
    console.log(bye);
    //add player from select.value to assign based on id values
}

displayPlayers();

draftBtn.addEventListener("click", getPlayer);


$(document).ready(function() {
    $('.dropdown').select2();
});