const knex=require('knex')({
    client:'mysql',
    connection:{
        host:"localhost",
        user:"root",
        password:"Anurag@123",
        database:"login"
    }
});

knex.schema.createTable('ram',(table)=>{
    table.increments('id').primary();
    table.string('name');
    table.string('email');
    table.string('password');
}).then((data)=>{
    console.log("Table created")
}).catch(()=>{
    console.log("Table already exact")
});

module.exports=knex;