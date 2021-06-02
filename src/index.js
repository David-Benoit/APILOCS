const app =  require('./app');
const {connect} = require('./database')

async function main(){

    //Database connection 
    await connect();
    //express application
    app.listen(3000);
    console.log('listen on port 3000: connected')
}

main();
