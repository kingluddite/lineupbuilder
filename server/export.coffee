jsZip      = Meteor.npmRequire 'jszip'
xmlBuilder = Meteor.npmRequire 'xmlbuilder'
fastCsv    = Meteor.npmRequire 'fast-csv'

Meteor.methods(
  exportData: (userId) ->
    # Make sure to "Check" the userId variable.
    check(userId,String)
    # We'll handle our actual export here.
)

zip = new jsZip()
assetsFolder = zip.folder 'assets'

getUser     = Meteor.users.findOne({"_id": userId}, {fields: {"profile.name": 1, "profile.photo": 1, "profile.biography": 1, "profile.location": 1, "profile.career": 1}})
getFriends  = Friends.find({"owner": userId}, {fields: {"_id": 1, "photo": 1, "name": 1}}).fetch()
getComments = Comments.find({"owner": userId}, {fields: {"_id": 1, "avatar": 1, "commenterName": 1, "commentDate": 1, "commentContent": 1}}).fetch()
getPosts    = Posts.find({"owner": userId}, {fields: {"_id": 1, "text": 1, "name": 1, "date": 1}}).fetch()

exportFriendsAsCsv = ->
 # Our exporting code will go here.
 csv = fastCsv

 csv.writeToString(getFriends,
 {headers: true},
 (error,data) ->
  if error
   console.log error
  else
   zip.file('friends.csv', data)
)

 profile = xmlBuilder.create('profile')

 userData = profile.ele('user')

userData.ele('name', getUser.profile.name)
userData.ele('photo', getUser.profile.photo)
userData.ele('biography', getUser.profile.biography)
userData.ele('location', getUser.profile.location)
userData.ele('career', getUser.profile.career)

friendsData = profile.ele('friends')

for friend in getFriends
  friendData = friendsData.ele('friend')
  friendData.ele('name', friend.name)
  friendData.ele('photo', friend.photo)

profileXmlString = profile.end({pretty: true})

zip.file('profile.xml', profileXmlString)

exportCss = Assets.getText("export/style.css")
exportJs  = Assets.getText("export/bootstrap.js")

assetsFolder.file('style.css', exportCss)
assetsFolder.file('bootstrap.js', exportJs)

head = "
  <head>
    <title>Blerg | Data Export</title>
    <meta charset='utf-8'>
    <meta name='viewport' content='width=device-width, initial-scale=1'>
    <link rel='stylesheet' type='text/css' href='assets/style.css'>
  </head>
"
scripts = "
  <script src='https://ajax.googleapis.com/ajax/libs/jquery/1.11.1/jquery.min.js'></script>
  <script src='assets/bootstrap.js'></script>
"
header = "<html>#{head}<body>"
footer = "#{scripts}</body></html>"

friendsList = "<ul>"
for friend in getFriends
  friendsList += "<li><img src='#{friend.photo}' class='img-responsive' alt='#{friend.name}'></li>"
friendsList += "</ul>"

htmlExportString = header + container + footer
zip.file('index.html', htmlExportString)

exportFriendsAsCsv()
exportProfileAsXml()
exportProfileAsHtml()

zip.generate({type: "base64"})