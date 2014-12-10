// leagues
if (Leagues.find().count() === 0) {
  Leagues.insert({
      '_id': '6RtH74QbxGG7xbZXh',
      'author': 'howley.phil@gmail.com',
      'leagueAdminEmail': '',
      'leagueAdminFirstName': 'aaac',
      'leagueAdminLastName': '',
      'leagueAdminPhone': '',
      'leagueName': 'South Bay Sports',
      'leagueSummary': '',
      'submitted': 1415502595358,
      'userId': 'KSoEcpnJx7fpaRYuu'
    }

  );
  Leagues.insert({
      'leagueName': 'Santa Monica',
      'leagueAdminFirstName': '',
      'leagueAdminLastName': '',
      'leagueAdminEmail': '',
      'leagueAdminPhone': '',
      'userId': 'KSoEcpnJx7fpaRYuu',
      'author': 'howley.phil@gmail.com',
      'submitted': 1416188508462,
      '_id': 'ZfYboCv4sD4MeHYab'
    }

  );
}

// users
if (Meteor.users.find().count() === 0) {
  Meteor.users.insert({
    'createdAt': Date('2014-11-30T04:01:13.348Z'),
    '_id': '3xjSi8bG2tHFtLWD8',
    'services': {
      'password': {
        'bcrypt': '$2a$10$m1AljBUqHWT79G8AkrEO6OvvJzmQR7uTQ4BoK8Lnih8nCy4p9JHPW'
      }
    },
    'username': 'player',
    'emails': [{
      'address': 'player@example.com',
      'verified': false
    }],
    'profile': {
      'name': 'Player'
    }
  });
  Meteor.users.insert({
    '_id': 'jt87hPrfjpryRvzDD',
    'createdAt': Date('2014-11-30T04:01:13.425Z'),
    'emails': [{
      'address': 'coach@example.com',
      'verified': false
    }],
    'profile': {
      'name': 'Coach'
    },
    'roles': [
      'team'
    ],
    'services': {
      'password': {
        'bcrypt': '$2a$10$/9Fnb9WWaiCmyQbdoVmXfeUs2KIiWpnJgv7KparwWrlC2x3rSL1ca'
      }
    },
    'username': 'coach'
  });
  Meteor.users.insert({
    '_id': '4MKaZK84AdZ8j3xr2',
    'createdAt': Date('2014-11-30T04:01:13.498Z'),
    'emails': [{
      'address': 'league@example.com',
      'verified': false
    }],
    'profile': {
      'name': 'League'
    },
    'roles': [
      'league'
    ],
    'services': {
      'password': {
        'bcrypt': '$2a$10$eDepCk/baU1uofOM.CWKKul4LxQQ95xkSAsGqYCEGjXnE6ykaYiXa'
      },
      'resume': {
        'loginTokens': [{
          'when': Date('2014-12-01T02:20:42.253Z'),
          'hashedToken': 'wwNnm5dkDlpAt2ek7FoQ1YC8TOVnbGWO/30vATppxgo='
        }, {
          'when': Date('2014-12-02T05:30:58.796Z'),
          'hashedToken': 'bdrNF+B0tVtluE05hG5dnNHjO4wEt1iOhj6D2A5YHRQ='
        }, {
          'when': Date('2014-12-03T07:38:51.984Z'),
          'hashedToken': 'H24sCs9a6ugtKRrcvPO7Odl16epNpTu8K88m+Y1L5JQ='
        }, {
          'when': Date('2014-12-07T19:35:25.713Z'),
          'hashedToken': 'yNdb12mSe3ByYTBJs0jFmZSUkdA8ayFKpoBJuciZ42g='
        }]
      }
    },
    'username': 'league'
  });
}
// teams
if (Teams.find().count() === 0) {

  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "FC Gringos",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "BxPNATEj4EvDtGkim"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Civitas United",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "ouSqkRQPQvKTowwPC"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "AC Sparta",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "MYBw2RiNwrBhfh9W8"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Civitas FC",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "bdFEn5jZfHdG4xPKD"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Tom Thomas and Friends",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "QpEWPdxcH8FZzd3yf"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "FC Gardena",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "ffbdSMxmafAxtWWCJ"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Z-Tronix Power",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "T8iGBv3rCmutk4bes"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "5 Estrellas",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "R2dDQnZdyTZAtARQi"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Tasmania",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "q862JFgEKNakNcsHy"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "SpaceX-Men",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "fwx79JJFob5XbaAx6"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Juventus",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "8jWuLQuzfMqk68GCe"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Evolution FC",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "9FwAJiBLytWr4TCnZ"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Fram",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "AqmBqaTNGWtMfo99N"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Beach Mex",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": Date("2014-12-09T07:15:27.486Z"),
    "_id": "Dd9GFMsJzLRF6yLMe"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "United XI",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": Date("2014-12-09T07:16:25.505Z"),
    "_id": "gcjxkfaA62ThR43EM"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Lionside FC",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": Date("2014-12-09T07:19:27.531Z"),
    "_id": "cBHjuzqmWSybNmYSH"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Dogos FC",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": Date("2014-12-09T07:19:44.112Z"),
    "_id": "G8Jf2gQS4RHbWrDms"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Gunners",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": Date("2014-12-09T07:30:11.703Z"),
    "_id": "3C266scWzdw6frrMY"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "South Bay Royals",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": Date("2014-12-09T07:30:28.400Z"),
    "_id": "MQ5qMBgg7j9AozXAs"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Dinamo Red Star",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": Date("2014-12-09T07:31:28.902Z"),
    "_id": "nPJnAoW77E3YeFBds"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "Long Beach",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": Date("2014-12-09T07:32:38.531Z"),
    "_id": "PMr94aTFdGCL9kwpK"
  });
  Teams.insert({
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "teamName": "FC Illuminati",
    "aboutTeam": "",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": Date("2014-12-09T07:32:48.481Z"),
    "_id": "QdExXmeoLdBNa99Aw"
  });
}
// seasons
if (Seasons.find().count() === 0) {
  Seasons.insert({
    'leagueId': '6RtH74QbxGG7xbZXh',
    'regionId': 'KDbqfAoKDx2iDDXSS',
    'seasonName': '11 v 11 Sunday Mens',
    'seasonStartDate': '',
    'seasonStatus': 'open',
    'seasonFee': '',
    'seasonSummary': '',
    'userId': '4MKaZK84AdZ8j3xr2',
    'author': 'league',
    'submitted': Date('2014-12-01T04:13:38.797Z'),
    '_id': 'b5HkGcWFNenpGGvCd'
  });
  Seasons.insert({
    'leagueId': '6RtH74QbxGG7xbZXh',
    'regionId': 'KDbqfAoKDx2iDDXSS',
    'seasonName': '7 v 7 Friday Coed',
    'seasonStartDate': '',
    'seasonStatus': 'open',
    'seasonFee': '',
    'seasonSummary': '',
    'userId': '4MKaZK84AdZ8j3xr2',
    'author': 'league',
    'submitted': Date('2014-12-01T04:13:56.051Z'),
    '_id': 'npR9BgkRJhLuT6asC'
  });
  Seasons.insert({
    'leagueId': '6RtH74QbxGG7xbZXh',
    'regionId': 'KDbqfAoKDx2iDDXSS',
    'seasonName': '7 v 7 Thursday Coed',
    'seasonStartDate': '',
    'seasonStatus': 'open',
    'seasonFee': '',
    'seasonSummary': '',
    'userId': '4MKaZK84AdZ8j3xr2',
    'author': 'league',
    'submitted': Date('2014-12-01T04:14:09.068Z'),
    '_id': 'MrrLW8cvt3hfqFLoA'
  });
  Seasons.insert({
    'leagueId': '6RtH74QbxGG7xbZXh',
    'regionId': 'FnEixdohcAW7EnG2a',
    'seasonName': '7 v 7 Saturday Men',
    'seasonStartDate': '',
    'seasonStatus': 'open',
    'seasonFee': '',
    'seasonSummary': '',
    'userId': '4MKaZK84AdZ8j3xr2',
    'author': 'league',
    'submitted': Date('2014-12-01T04:14:30.108Z'),
    '_id': '3cAjLoESSRzRXP5Qy'
  });
  Seasons.insert({
    'leagueId': 'S8msXLCw8sC9fbzBQ',
    'regionId': 'WREPHedp7z6zBpbBc',
    'seasonName': 'ccc',
    'seasonStartDate': '',
    'seasonStatus': 'open',
    'seasonFee': '',
    'seasonSummary': '',
    'userId': '4MKaZK84AdZ8j3xr2',
    'author': 'league',
    'submitted': Date('2014-12-03T07:41:51.174Z'),
    '_id': 'un4WpxyCph7vgXzBJ'
  });
}
// games
if (Games.find().count() === 0) {
  Games.insert({

    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "gameTime": "08:00",
    "gameDate": "11/02/2014",
    "gameNumber": "1",
    "homeTeam": "8jWuLQuzfMqk68GCe",
    "awayTeam": "9FwAJiBLytWr4TCnZ",
    "userId": "4MKaZK84AdZ8j3xr2",
    "author": "league",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "_id": "cHuAJJbxF7Z8v5tDs"
  });
  Games.insert({

    "_id": "z2PiY9Py6RLSsXvYk",
    "author": "league",
    "awayTeam": "QpEWPdxcH8FZzd3yf",
    "gameDate": "11/01/2014",
    "gameNumber": "1",
    "gameTime": "16:30",
    "gameType": "",
    "homeTeam": "MYBw2RiNwrBhfh9W8",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
  Games.insert({
    "_id": "xD5GHrh3DdPNgKJu7",
    "author": "league",
    "awayTeam": "cBHjuzqmWSybNmYSH",
    "gameDate": "11/02/2014",
    "gameNumber": "1",
    "gameTime": "09:45",
    "gameType": "",
    "homeTeam": "G8Jf2gQS4RHbWrDms",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
  Games.insert({
    "_id": "ARCaom2NFTNxih9tY",
    "author": "league",
    "awayTeam": "fwx79JJFob5XbaAx6",
    "gameDate": "11/01/2014",
    "gameNumber": "1",
    "gameTime": "08:00",
    "gameType": "",
    "homeTeam": "R2dDQnZdyTZAtARQi",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
  Games.insert({
    "_id": "ia7qng6QypK3hpMnY",
    "author": "league",
    "awayTeam": "ouSqkRQPQvKTowwPC",
    "gameDate": "11/01/2014",
    "gameNumber": "1",
    "gameTime": "18:15",
    "gameType": "",
    "homeTeam": "bdFEn5jZfHdG4xPKD",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
  Games.insert({
    "_id": "hjkzmux9PadbMJ7WD",
    "author": "league",
    "awayTeam": "BxPNATEj4EvDtGkim",
    "gameDate": "11/02/2014",
    "gameNumber": "1",
    "gameTime": "13:15",
    "gameType": "",
    "homeTeam": "T8iGBv3rCmutk4bes",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
  Games.insert({
    "_id": "STWkYPEZox8MkvE6k",
    "author": "league",
    "awayTeam": "gcjxkfaA62ThR43EM",
    "gameDate": "11/02/2014",
    "gameNumber": "1",
    "gameTime": "15:00",
    "gameType": "",
    "homeTeam": "Dd9GFMsJzLRF6yLMe",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
  Games.insert({
    "_id": "PTwyroLMf4qHdqPMM",
    "author": "league",
    "awayTeam": "q862JFgEKNakNcsHy",
    "gameDate": "11/02/2014",
    "gameNumber": "1",
    "gameTime": "16:45",
    "gameType": "",
    "homeTeam": "ffbdSMxmafAxtWWCJ",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
  Games.insert({
    "_id": "zJpHpcA9Zpqw3F7Gx",
    "author": "league",
    "awayTeam": "nPJnAoW77E3YeFBds",
    "gameDate": "11/02/2014",
    "gameNumber": "1",
    "gameTime": "18:30",
    "gameType": "",
    "homeTeam": "AqmBqaTNGWtMfo99N",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
  Games.insert({
    "_id": "wW6yFzD4PTjcG2rex",
    "author": "league",
    "awayTeam": "PMr94aTFdGCL9kwpK",
    "gameDate": "11/02/2014",
    "gameNumber": "1",
    "gameTime": "20:15",
    "gameType": "",
    "homeTeam": "QdExXmeoLdBNa99Aw",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
  Games.insert({
    "_id": "iTZkxkxehJMEWiNDP",
    "author": "league",
    "awayTeam": "MQ5qMBgg7j9AozXAs",
    "gameDate": "11/02/2014",
    "gameNumber": "1",
    "gameTime": "11:30",
    "gameType": "",
    "homeTeam": "3C266scWzdw6frrMY",
    "leagueId": "6RtH74QbxGG7xbZXh",
    "regionId": "KDbqfAoKDx2iDDXSS",
    "seasonId": "b5HkGcWFNenpGGvCd",
    "submitted": "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
    "userId": "4MKaZK84AdZ8j3xr2"
  });
}
// players
if (Players.find().count() === 0) {
  Players.insert({
    'firstName': 'Phil',
    'lastNameInitial': 'H',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'right-fullback',
    'gameStatus': 'sub',
    'jerseyNumber': '17',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413777961333,
    '_id': 'E8zm6oBztJgkpgkay'
  });

  Players.insert({
    'firstName': 'Scott',
    'lastNameInitial': 'M',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'right-midfielder',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778009791,
    '_id': 'P4hoWS5HTqDuLmSiY'
  });

  Players.insert({
    'firstName': 'Mark ',
    'lastNameInitial': 'W',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'stopper',
    'gameStatus': 'sub',
    'jerseyNumber': '1',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778062531,
    '_id': '2wWrsa4ebwc2uh4y9'
  });

  Players.insert({
    'firstName': 'Abe',
    'lastNameInitial': 'P',
    'teamId': '',
    'fieldPosition': 'left-midfielder',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778103615,
    '_id': 'twjKRfKXsiuvjPm3P'
  });

  Players.insert({
    'firstName': 'Aaron',
    'lastNameInitial': 'H',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'right-fullback',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '70',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778150833,
    '_id': 'NBW6GdstnotzsZo6M'
  });

  Players.insert({
    '_id': 'rQ2MpQYGghngTx3Fh',
    'author': 'howley.phil@gmail.com',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'fieldPosition': 'defensive-midfielder',
    'firstName': 'Carlos',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'lastNameInitial': 'C',
    'playerNotes': '',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'submitted': 1413778195290,
    'teamId': '3sZSXrQAtGcKXiEER'
  });

  Players.insert({
    '_id': 'b4jzxohdcAfHX9A3w',
    'author': 'howley.phil@gmail.com',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'fieldPosition': 'left-fullback',
    'firstName': 'Sergio',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'lastNameInitial': 'B',
    'playerNotes': '',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'submitted': 1413778344766,
    'teamId': '3sZSXrQAtGcKXiEER'
  });
  Players.insert({
    'firstName': 'Oliver',
    'lastNameInitial': 'A',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'goalie',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '60',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778380903,
    '_id': 'Eq3Rws5njCgQvWqDW'
  });
  Players.insert({
    'firstName': 'Chris',
    'lastNameInitial': 'O',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'goalie',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '60',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778399150,
    '_id': 'GXBoRpnSjvobrE4bu'
  });
  Players.insert({
    'firstName': 'Ryan',
    'lastNameInitial': 'P',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'left-striker',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778438292,
    '_id': 'yapq5epHRrsusJkyr'
  });
  Players.insert({
    'firstName': 'Jesse',
    'lastNameInitial': 'L',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'sweeper',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778469197,
    '_id': 'Y5P6dARKaR8rzhWBB'
  });
  Players.insert({
    'firstName': 'Justin',
    'lastNameInitial': 'R',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'left-striker',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '70',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778497476,
    '_id': 'zurvoMX42dLKKRYEh'
  });
  Players.insert({
    'firstName': 'Adrian',
    'lastNameInitial': 'F',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'left-striker',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778551311,
    '_id': 'gidM2RmZxqHwRD2pF'
  });
  Players.insert({
    'firstName': 'Craig',
    'lastNameInitial': 'N',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'offensive-midfielder',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778583206,
    '_id': 'neiP52vaphxbfMngu'
  });
  Players.insert({
    'firstName': 'Juan',
    'lastNameInitial': 'P',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'right-fullback',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778616877,
    '_id': 'cdhbXNXE54tJzxScq'
  });
  Players.insert({
    'firstName': 'Keito',
    'lastNameInitial': 'H',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'right-midfielder',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778647073,
    '_id': 'FgsywyHejseKqmFpg'
  });
  Players.insert({
    'firstName': 'Greg',
    'lastNameInitial': 'S',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'right-striker',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '70',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778716671,
    '_id': 'ym34HhNf84KC9NNzq'
  });
  Players.insert({
    'firstName': 'Alex',
    'lastNameInitial': 'S',
    'teamId': 'WSNoNmbiT63pxxLr4',
    'fieldPosition': 'right-fullback',
    'gameStatus': 'sub',
    'jerseyNumber': '?',
    'seasonFeeOwed': '120',
    'seasonFeePaid': '0',
    'playerNotes': '',
    'createdBy': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1413778741933,
    '_id': 'F4fLpW6kMNWc7i3mL'
  });
  Players.insert({
    'firstName': 'a',
    'lastNameInitial': '',
    'teamId': '',
    'fieldPosition': 'right-fullback',
    'gameStatus': 'starting',
    'jerseyNumber': '',
    'seasonFeeOwed': '',
    'seasonFeePaid': '',
    'playerNotes': '',
    'userId': '4MKaZK84AdZ8j3xr2',
    'author': 'league',
    'submitted': Date('2014-12-03T07:40:47.734Z'),
    '_id': 'ze9iBddczrveRFrQQ'
  });
}

// regions
if (Regions.find().count() === 0) {
  Regions.insert({
    'regionName': 'South Bay',
    'leagueId': '6RtH74QbxGG7xbZXh',
    'userId': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1416110477853,
    '_id': 'KDbqfAoKDx2iDDXSS'
  });
  Regions.insert({
    'regionName': 'test region',
    'leagueId': 'ZfYboCv4sD4MeHYab',
    'userId': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1416189517071,
    '_id': 'B5YTFswBpWDN7PzTr'
  });
  Regions.insert({
    'regionName': 'Santa Monica',
    'leagueId': '6RtH74QbxGG7xbZXh',
    'userId': 'KSoEcpnJx7fpaRYuu',
    'author': 'howley.phil@gmail.com',
    'submitted': 1416189760529,
    '_id': 'FnEixdohcAW7EnG2a'
  });
  Regions.insert({
    'regionName': 'santa monica region 1',
    'leagueId': 'ZfYboCv4sD4MeHYab',
    'userId': 'fxCBNE43HjjTzAZXJ',
    'author': 'me@you.com',
    'submitted': Date('2014-11-27T22:02:33.400Z'),
    '_id': 'Yd58f3FNujfXN6DZW'
  });
  Regions.insert({
    'regionName': 'bbb',
    'leagueId': 'S8msXLCw8sC9fbzBQ',
    'userId': '4MKaZK84AdZ8j3xr2',
    'author': 'league',
    'submitted': Date('2014-12-03T07:41:45.278Z'),
    '_id': 'WREPHedp7z6zBpbBc'
  });
}
/*
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "15:00",
  "gameDate" : "11/23/2014",
  "gameNumber" : "4",
  "homeTeam" : "MYBw2RiNwrBhfh9W8",
  "homeTeamScore" : "4",
  "awayTeam" : "fwx79JJFob5XbaAx6",
  "awayTeamScore" : "2",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:12:24.071Z"),
  "_id" : "Gwsu6X6DXXzavdqZQ"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "16:45",
  "gameDate" : "11/23/2014",
  "gameNumber" : "4",
  "homeTeam" : "G8Jf2gQS4RHbWrDms",
  "homeTeamScore" : "0",
  "awayTeam" : "BxPNATEj4EvDtGkim",
  "awayTeamScore" : "5",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:13:15.698Z"),
  "_id" : "5Gwf2PyPayfAxbKku"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "18:30",
  "gameDate" : "11/23/2014",
  "gameNumber" : "4",
  "homeTeam" : "PMr94aTFdGCL9kwpK",
  "homeTeamScore" : "1",
  "awayTeam" : "cBHjuzqmWSybNmYSH",
  "awayTeamScore" : "2",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:14:29.842Z"),
  "_id" : "JL35btYCvPuJNfyQv"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "20:15",
  "gameDate" : "11/23/2014",
  "gameNumber" : "4",
  "homeTeam" : "QdExXmeoLdBNa99Aw",
  "homeTeamScore" : "3",
  "awayTeam" : "Dd9GFMsJzLRF6yLMe",
  "awayTeamScore" : "2",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:15:38.604Z"),
  "_id" : "pGMEXpREmApSwa4p8"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "18:00",
  "gameDate" : "12/06/2014",
  "gameNumber" : "5",
  "homeTeam" : "ouSqkRQPQvKTowwPC",
  "homeTeamScore" : "1",
  "awayTeam" : "cBHjuzqmWSybNmYSH",
  "awayTeamScore" : "5",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:16:50.240Z"),
  "_id" : "gYLuPo7Raeo7S5xQC"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "18:00",
  "gameDate" : "12/06/2014",
  "gameNumber" : "5",
  "homeTeam" : "R2dDQnZdyTZAtARQi",
  "homeTeamScore" : "2",
  "awayTeam" : "T8iGBv3rCmutk4bes",
  "awayTeamScore" : "8",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:17:42.686Z"),
  "_id" : "QDLNnJhZXhA5D3RTz"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "20:00",
  "gameDate" : "12/06/2014",
  "gameNumber" : "5",
  "homeTeam" : "ffbdSMxmafAxtWWCJ",
  "homeTeamScore" : "1",
  "awayTeam" : "fwx79JJFob5XbaAx6",
  "awayTeamScore" : "3",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:18:23.011Z"),
  "_id" : "WK7KYKtcFLt5BBFBB"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "08:00",
  "gameDate" : "12/07/2014",
  "gameNumber" : "5",
  "homeTeam" : "nPJnAoW77E3YeFBds",
  "homeTeamScore" : "3",
  "awayTeam" : "gcjxkfaA62ThR43EM",
  "awayTeamScore" : "0",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:19:14.553Z"),
  "_id" : "KStiXY755T9oyzfZK"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "18:30",
  "gameDate" : "11/02/2014",
  "gameNumber" : "2",
  "homeTeam" : "PMr94aTFdGCL9kwpK",
  "homeTeamScore" : "1",
  "awayTeam" : "AqmBqaTNGWtMfo99N",
  "awayTeamScore" : "3",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:48:29.651Z"),
  "_id" : "ZQXnvnH4sWpzzJ8NZ"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "20:15",
  "gameDate" : "11/09/2014",
  "gameNumber" : "2",
  "homeTeam" : "9FwAJiBLytWr4TCnZ",
  "homeTeamScore" : "5",
  "awayTeam" : "QdExXmeoLdBNa99Aw",
  "awayTeamScore" : "2",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:49:24.724Z"),
  "_id" : "X24TjGMzrwRHD29PN"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "16:30",
  "gameDate" : "11/15/2014",
  "gameNumber" : "3",
  "homeTeam" : "ouSqkRQPQvKTowwPC",
  "homeTeamScore" : "2",
  "awayTeam" : "QpEWPdxcH8FZzd3yf",
  "awayTeamScore" : "4",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:50:37.526Z"),
  "_id" : "zqgZtQNLvLA4jmBwL"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "18:15",
  "gameDate" : "11/15/2014",
  "gameNumber" : "3",
  "homeTeam" : "nPJnAoW77E3YeFBds",
  "homeTeamScore" : "1",
  "awayTeam" : "Dd9GFMsJzLRF6yLMe",
  "awayTeamScore" : "0",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:52:39.987Z"),
  "_id" : "yCAHsT2WDYeNs63qk"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "20:00",
  "gameDate" : "11/15/2014",
  "gameNumber" : "3",
  "homeTeam" : "ffbdSMxmafAxtWWCJ",
  "homeTeamScore" : "1",
  "awayTeam" : "R2dDQnZdyTZAtARQi",
  "awayTeamScore" : "7",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:53:59.870Z"),
  "_id" : "JgmYvJbQuxB825Pwy"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "08:00",
  "gameDate" : "11/16/2014",
  "gameNumber" : "3",
  "homeTeam" : "MYBw2RiNwrBhfh9W8",
  "homeTeamScore" : "2",
  "awayTeam" : "BxPNATEj4EvDtGkim",
  "awayTeamScore" : "4",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:55:10.259Z"),
  "_id" : "3JTFvBHu5QGpz2icu"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "09:45",
  "gameDate" : "11/16/2014",
  "gameNumber" : "3",
  "homeTeam" : "fwx79JJFob5XbaAx6",
  "homeTeamScore" : "0",
  "awayTeam" : "8jWuLQuzfMqk68GCe",
  "awayTeamScore" : "0",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:56:01.825Z"),
  "_id" : "ucePB4oADYQcAaWgf"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "11:30",
  "gameDate" : "11/16/2014",
  "gameNumber" : "3",
  "homeTeam" : "T8iGBv3rCmutk4bes",
  "homeTeamScore" : "3",
  "awayTeam" : "q862JFgEKNakNcsHy",
  "awayTeamScore" : "3",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:57:01.956Z"),
  "_id" : "3DmLdmRRsaG8z5hjG"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "13:15",
  "gameDate" : "11/16/2014",
  "gameNumber" : "3",
  "homeTeam" : "bdFEn5jZfHdG4xPKD",
  "homeTeamScore" : "0",
  "awayTeam" : "PMr94aTFdGCL9kwpK",
  "awayTeamScore" : "7",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:57:54.327Z"),
  "_id" : "hxgiAejWjNC3Zrgai"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "15:00",
  "gameDate" : "11/16/2014",
  "gameNumber" : "3",
  "homeTeam" : "gcjxkfaA62ThR43EM",
  "homeTeamScore" : "1",
  "awayTeam" : "9FwAJiBLytWr4TCnZ",
  "awayTeamScore" : "3",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:00:21.233Z"),
  "_id" : "BNiKKKdLYysyPFTHH"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "16:45",
  "gameDate" : "11/16/2014",
  "gameNumber" : "3",
  "homeTeam" : "cBHjuzqmWSybNmYSH",
  "homeTeamScore" : "1",
  "awayTeam" : "AqmBqaTNGWtMfo99N",
  "awayTeamScore" : "2",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:02:02.502Z"),
  "_id" : "9tQtFtb738iWd2o4u"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "18:30",
  "gameDate" : "11/16/2014",
  "gameNumber" : "3",
  "homeTeam" : "G8Jf2gQS4RHbWrDms",
  "homeTeamScore" : "0",
  "awayTeam" : "3C266scWzdw6frrMY",
  "awayTeamScore" : "5",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:02:52.532Z"),
  "_id" : "CwkTY6h3pbvDjS3Cg"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "20:15",
  "gameDate" : "11/16/2014",
  "gameNumber" : "3",
  "homeTeam" : "MQ5qMBgg7j9AozXAs",
  "homeTeamScore" : "2",
  "awayTeam" : "QdExXmeoLdBNa99Aw",
  "awayTeamScore" : "4",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:03:46.418Z"),
  "_id" : "acRSgemTxPmrsPKWc"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "16:30",
  "gameDate" : "11/22/2014",
  "gameNumber" : "4",
  "homeTeam" : "QpEWPdxcH8FZzd3yf",
  "homeTeamScore" : "",
  "awayTeam" : "",
  "awayTeamScore" : "",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:05:36.159Z"),
  "_id" : "QjMY7eKcKuQYqT6Dh"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "18:15",
  "gameDate" : "11/22/2014",
  "gameNumber" : "4",
  "homeTeam" : "ouSqkRQPQvKTowwPC",
  "homeTeamScore" : "13",
  "awayTeam" : "T8iGBv3rCmutk4bes",
  "awayTeamScore" : "0",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:07:01.265Z"),
  "_id" : "QeZjXadLLDAqLpkeP"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "20:00",
  "gameDate" : "11/22/2014",
  "gameNumber" : "4",
  "homeTeam" : "bdFEn5jZfHdG4xPKD",
  "homeTeamScore" : "4",
  "awayTeam" : "ffbdSMxmafAxtWWCJ",
  "awayTeamScore" : "5",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:07:46.094Z"),
  "_id" : "oQBtc3EHWy5REiizQ"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "08:00",
  "gameDate" : "11/23/2014",
  "gameNumber" : "4",
  "homeTeam" : "9FwAJiBLytWr4TCnZ",
  "homeTeamScore" : "0",
  "awayTeam" : "AqmBqaTNGWtMfo99N",
  "awayTeamScore" : "0",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:08:48.379Z"),
  "_id" : "ghqme8WnQpjsSbEC4"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "09:45",
  "gameDate" : "11/23/2014",
  "gameNumber" : "4",
  "homeTeam" : "3C266scWzdw6frrMY",
  "homeTeamScore" : "7",
  "awayTeam" : "gcjxkfaA62ThR43EM",
  "awayTeamScore" : "1",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:09:58.955Z"),
  "_id" : "K73xLZeXRuLSbcCgm"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "11:30",
  "gameDate" : "11/23/2014",
  "gameNumber" : "4",
  "homeTeam" : "q862JFgEKNakNcsHy",
  "homeTeamScore" : "1",
  "awayTeam" : "8jWuLQuzfMqk68GCe",
  "awayTeamScore" : "2",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:10:55.413Z"),
  "_id" : "A2k4ndT5iJWDziLSn"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "13:15",
  "gameDate" : "11/23/2014",
  "gameNumber" : "4",
  "homeTeam" : "nPJnAoW77E3YeFBds",
  "homeTeamScore" : "2",
  "awayTeam" : "MQ5qMBgg7j9AozXAs",
  "awayTeamScore" : "1",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T03:11:42.636Z"),
  "_id" : "kW3K8z6AD2HcTx8ma"
}
{
  "_id" : "ARCaom2NFTNxih9tY",
  "author" : "league",
  "awayTeam" : "fwx79JJFob5XbaAx6",
  "awayTeamScore" : "",
  "gameDate" : "11/01/2014",
  "gameNumber" : "1",
  "gameStatus" : "to_be_played",
  "gameTime" : "08:00",
  "gameType" : "regulation",
  "homeTeam" : "R2dDQnZdyTZAtARQi",
  "homeTeamScore" : "",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "z2PiY9Py6RLSsXvYk",
  "author" : "league",
  "awayTeam" : "QpEWPdxcH8FZzd3yf",
  "awayTeamScore" : "7",
  "gameDate" : "11/01/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "16:30",
  "gameType" : "regulation",
  "homeTeam" : "MYBw2RiNwrBhfh9W8",
  "homeTeamScore" : "2",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "ia7qng6QypK3hpMnY",
  "author" : "league",
  "awayTeam" : "ouSqkRQPQvKTowwPC",
  "awayTeamScore" : "5",
  "gameDate" : "11/01/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "18:15",
  "gameType" : "regulation",
  "homeTeam" : "bdFEn5jZfHdG4xPKD",
  "homeTeamScore" : "2",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "cHuAJJbxF7Z8v5tDs",
  "author" : "league",
  "awayTeam" : "9FwAJiBLytWr4TCnZ",
  "awayTeamScore" : "4",
  "gameDate" : "11/02/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "08:00",
  "gameType" : "regulation",
  "homeTeam" : "8jWuLQuzfMqk68GCe",
  "homeTeamScore" : "1",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "xD5GHrh3DdPNgKJu7",
  "author" : "league",
  "awayTeam" : "cBHjuzqmWSybNmYSH",
  "awayTeamScore" : "3",
  "gameDate" : "11/02/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "09:45",
  "gameType" : "regulation",
  "homeTeam" : "G8Jf2gQS4RHbWrDms",
  "homeTeamScore" : "1",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "iTZkxkxehJMEWiNDP",
  "author" : "league",
  "awayTeam" : "MQ5qMBgg7j9AozXAs",
  "awayTeamScore" : "5",
  "gameDate" : "11/02/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "11:30",
  "gameType" : "regulation",
  "homeTeam" : "3C266scWzdw6frrMY",
  "homeTeamScore" : "1",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "hjkzmux9PadbMJ7WD",
  "author" : "league",
  "awayTeam" : "BxPNATEj4EvDtGkim",
  "awayTeamScore" : "5",
  "gameDate" : "11/02/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "13:15",
  "gameType" : "regulation",
  "homeTeam" : "T8iGBv3rCmutk4bes",
  "homeTeamScore" : "1",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "STWkYPEZox8MkvE6k",
  "author" : "league",
  "awayTeam" : "gcjxkfaA62ThR43EM",
  "awayTeamScore" : "2",
  "gameDate" : "11/02/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "15:00",
  "gameType" : "regulation",
  "homeTeam" : "Dd9GFMsJzLRF6yLMe",
  "homeTeamScore" : "4",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "PTwyroLMf4qHdqPMM",
  "author" : "league",
  "awayTeam" : "q862JFgEKNakNcsHy",
  "awayTeamScore" : "2",
  "gameDate" : "11/02/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "16:45",
  "gameType" : "regulation",
  "homeTeam" : "ffbdSMxmafAxtWWCJ",
  "homeTeamScore" : "3",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "zJpHpcA9Zpqw3F7Gx",
  "author" : "league",
  "awayTeam" : "nPJnAoW77E3YeFBds",
  "awayTeamScore" : "1",
  "gameDate" : "11/02/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "18:30",
  "gameType" : "regulation",
  "homeTeam" : "AqmBqaTNGWtMfo99N",
  "homeTeamScore" : "2",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "wW6yFzD4PTjcG2rex",
  "author" : "league",
  "awayTeam" : "PMr94aTFdGCL9kwpK",
  "awayTeamScore" : "1",
  "gameDate" : "11/02/2014",
  "gameNumber" : "1",
  "gameStatus" : "played",
  "gameTime" : "20:15",
  "gameType" : "regulation",
  "homeTeam" : "QdExXmeoLdBNa99Aw",
  "homeTeamScore" : "0",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : "Mon Dec 08 2014 21:31:11 GMT-0800 (PST)",
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "JaJSJeXaKDRCni4XC",
  "author" : "league",
  "awayTeam" : "nPJnAoW77E3YeFBds",
  "awayTeamScore" : "2",
  "gameDate" : "11/08/2014",
  "gameNumber" : "2",
  "gameStatus" : "played",
  "gameTime" : "16:30",
  "gameType" : "regulation",
  "homeTeam" : "R2dDQnZdyTZAtARQi",
  "homeTeamScore" : "2",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : ISODate("2014-12-10T01:35:08.167Z"),
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "2sr5CxJayj7J4eZw2",
  "author" : "league",
  "awayTeam" : "q862JFgEKNakNcsHy",
  "awayTeamScore" : "1",
  "gameDate" : "11/08/2014",
  "gameNumber" : "2",
  "gameStatus" : "played",
  "gameTime" : "18:15",
  "gameType" : "regulation",
  "homeTeam" : "QpEWPdxcH8FZzd3yf",
  "homeTeamScore" : "0",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : ISODate("2014-12-10T01:36:04.108Z"),
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "jSoWz7n9QiuimJKcP",
  "author" : "league",
  "awayTeam" : "ffbdSMxmafAxtWWCJ",
  "awayTeamScore" : "0",
  "gameDate" : "11/08/2014",
  "gameNumber" : "2",
  "gameStatus" : "played",
  "gameTime" : "20:00",
  "gameType" : "regulation",
  "homeTeam" : "ouSqkRQPQvKTowwPC",
  "homeTeamScore" : "8",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : ISODate("2014-12-10T01:37:08.883Z"),
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "_id" : "97vKLQnQw5rFB9nRe",
  "author" : "league",
  "awayTeam" : "cBHjuzqmWSybNmYSH",
  "awayTeamScore" : "3",
  "gameDate" : "11/09/2014",
  "gameNumber" : "2",
  "gameStatus" : "",
  "gameTime" : "08:00",
  "gameType" : "regulation",
  "homeTeam" : "3C266scWzdw6frrMY",
  "homeTeamScore" : "2",
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "submitted" : ISODate("2014-12-10T02:39:25.640Z"),
  "userId" : "4MKaZK84AdZ8j3xr2"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "09:45",
  "gameDate" : "11/09/2014",
  "gameNumber" : "2",
  "homeTeam" : "Dd9GFMsJzLRF6yLMe",
  "homeTeamScore" : "1",
  "awayTeam" : "MQ5qMBgg7j9AozXAs",
  "awayTeamScore" : "2",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:42:06.186Z"),
  "_id" : "cj4fSkyYrsYkCr4R5"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "11:30",
  "gameDate" : "11/09/2014",
  "gameNumber" : "2",
  "homeTeam" : "bdFEn5jZfHdG4xPKD",
  "homeTeamScore" : "1",
  "awayTeam" : "8jWuLQuzfMqk68GCe",
  "awayTeamScore" : "1",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:43:16.715Z"),
  "_id" : "xSgd7GtNDWCBF6hWd"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "13:15",
  "gameDate" : "11/02/2014",
  "gameNumber" : "2",
  "homeTeam" : "fwx79JJFob5XbaAx6",
  "homeTeamScore" : "0",
  "awayTeam" : "BxPNATEj4EvDtGkim",
  "awayTeamScore" : "2",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:45:08.640Z"),
  "_id" : "ekZeiCnQdM9WhZxHW"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "15:00",
  "gameDate" : "11/09/2014",
  "gameNumber" : "2",
  "homeTeam" : "MYBw2RiNwrBhfh9W8",
  "homeTeamScore" : "5",
  "awayTeam" : "T8iGBv3rCmutk4bes",
  "awayTeamScore" : "1",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:46:19.057Z"),
  "_id" : "ZDBRDsJDsMqzZPdNB"
}
{
  "leagueId" : "6RtH74QbxGG7xbZXh",
  "regionId" : "KDbqfAoKDx2iDDXSS",
  "seasonId" : "b5HkGcWFNenpGGvCd",
  "gameTime" : "16:45",
  "gameDate" : "11/09/2014",
  "gameNumber" : "2",
  "homeTeam" : "gcjxkfaA62ThR43EM",
  "homeTeamScore" : "3",
  "awayTeam" : "G8Jf2gQS4RHbWrDms",
  "awayTeamScore" : "0",
  "gameType" : "regulation",
  "userId" : "4MKaZK84AdZ8j3xr2",
  "author" : "league",
  "submitted" : ISODate("2014-12-10T02:47:20.775Z"),
  "_id" : "bcRv9ptoEMk37q5Fw"
}*/
