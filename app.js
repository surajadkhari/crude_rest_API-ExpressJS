const express=require('express');
const mysql=require('mysql');
const app=express();

//create connection
const db=mysql.createConnection({
    localHost: "localhost",
    port: "3306",
    user: "root",
    password: "password",
    database: "user",

});

//Connect Db

db.connect((err)=>{
    if(err) 
    console.log("Error in connection",+err);
    else 
    console.log("Database connected");

})
 
//Insert Data(Post Method)

app.get('/user1',(req,res)=>{
let post={user_name:'Devil4',user_address:'Jhapa4'};
// var sql='INSERT INTO users SET ?';
db.query('INSERT INTO USERS SET ?',post,(err,result)=>{
    if(err) throw err;
    else
    console.log(result);
    res.send('User1 added');

});

});

//second post
app.get('/user2',(req,res)=>{
    let post={user_name:'Hye',user_address:'Boys'};
    let sql='INSERT INTO users SET ?';
    let query = db.query(sql,post,(err,result)=>{
        if(err) throw err;
        else
        console.log(result);
        res.send('user2 added');
        // res.send(result);
    
    });
    
    });

//Fetach Data
app.get('/fetchalldata',(req,res)=>{
    let sql='SELECT * FROM USERS';
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        else
        console.log('All data from table is fetched ');
        res.send(result);
        // res.send(result);
    
    });
    
    });

    //Select single{inidivual } value data based on Key value
    app.get('/fetchdata/:id',(req,res)=>{
        let sql=`SELECT * FROM USERS WHERE USER_ID=${req.params.id}`;
        let query = db.query(sql,(err,result)=>{
            if(err) throw err;
            else
            console.log('Signle data is Featch ');
            res.send(result);
            // res.send(result);
        
        });
        
        });

//update DaTA
app.get('/updatedata/:id',(req,res)=>{
    let newusername='Programmer Devil';
    let sql=`UPDATE USERS SET USER_NAME ='${newusername}' WHERE USER_ID=${req.params.id}`;
    let query = db.query(sql,(err,result)=>{
        if(err) throw err;
        else
        console.log('Update value of userame for given ID ');
        res.send(result);
        // res.send(result);
    
    });


    });

    //Delete Data
    app.get('/deletedata/:id',(req,res)=>{
        
        let sql=`DELETE FROM USERS WHERE USER_ID=${req.params.id}`;
        let query = db.query(sql,(err,result)=>{
            if(err) throw err;
            else
            console.log('DElete data for given ID ');
            res.send(result);
            // res.send(result);
        
        });
    
    
        });
    



//ruuning server 

app.listen('9800',(err)=>{
    if(err) throw err;
    else 
 console.log("Server is running at port 9800");
}
);