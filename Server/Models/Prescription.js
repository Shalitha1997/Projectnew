const mongoose =  require('mongoose')


const prescription = mongoose.Schema({
    patientid:String,
    doctorid:String,
    patientname:String,
    doctorname:String,
    date:String,
    medicine:[{
        drugname:String,
        quantity:Number,
        priceofone:Number,
        howtouse:String
    }]
})


module.exports = mongoose.model('prescription', prescription, "prescription");