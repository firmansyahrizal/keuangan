const express = require("express")
const path = require("path")
const app = express()
const portEx = 3002

// tamplate engine setup
app.set('view engine', 'ejs')
app.set("views",path.join(__dirname, "html"))



function cekData (req,res,next){
  console.log('cek data')
  console.log('cek token')
  
}
app.get('/',(req, res) =>{
  res.render("home.ejs")

})
app.get(`/about`,(req, res)=>{
    res.send("Nama saya Dony saya lahir pada 3 july 2003")
})

app.get(`/daftar/:nama`,(req, res) => {
  let name = req.params.nama
 res.send(`HALO ${name}`)
})
app.get(`/*`,(req, res)=>{
  res.status(404).send("404, sorry bro page ini gaada")
})


app.listen(portEx,()=>{
    console.log(`port ini berjalan pada ${portEx}`)
})