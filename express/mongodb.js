use < db_name >
    eg: use hotel

db.createCollection("users")

db.users.insertOne({ name: "ram" })
db.users.insertOne({ name: "hari", phone: 98404255, email: "hari@hari.com" })


db.tables.insertMany([
    { table_number: "A-2" },
    { table_number: "A-3" }
])

db.tables.insertMany([
    { table_number: "A-4" },
    { table_number: "A-five" }
])

db.tables.find(filter_options)

db.tables.find({ name: "A-1" })


/* udpate operators */

db.tables.updateOne({ table_number: "A-five" }, { $set: { table_number: "A-5" } })


db.tables.updateOne({ name: "A-1" }, { $rename: { name: "table_number" } })

db.tables.deleteOne({})


db.users.insertMany([
    {name:"ram",age:20},
    {name:"hari",age:30},
    {name:"ram",age:30},
    {name:"shyam",age:25},
])


db.users.find({age:{$gt:25} })
db.users.find({age:{$gte:25} })
