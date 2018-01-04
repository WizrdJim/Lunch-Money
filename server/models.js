const mongoose = require('mongoose')
const Schema = mongoose.Schema

mongoose.Promise = Promise
mongoose.connect('mongodb://Winter:test@ds237967.mlab.com:37967/lunchmoney', {useMongoClient: true})

const SchoolSchema = new Schema({
  address: String,
  name: String,
  mascot: String,
  amountOfDonations: Number,
  image: String,
  location: {
    type: [Number], //[<longitude>, <latitude>]
    index: '2dSphere' //create the geospatial index
  },
  founded: Number,
  phone: Number,
  email: String,
  bio: String,
  state: String,
  city: String,
})
const UserSchema = new Schema({
  firstName: String,
  lastName: String,
  username: {
    required: true,
    type: String,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  amountOfDonations: {
    type: Number
  }
})
const DonationSchema = new Schema({
  username: {
    type: String
  },
  school: {
    type: String,
  },
  amount: Number,
  date: Date,
})
SchoolSchema.index({location: '2dsphere'});

School = mongoose.model("Property", SchoolSchema)
Donation = mongoose.model("OpenHouse", DonationSchema)
User = mongoose.model("User", UserSchema)

module.exports = {
  School,
  Donation,
  User
}