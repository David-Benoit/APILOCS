const app =  require('./app');
const {connect} = require('./database')

async function main(){

    //Database connection 
    await connect();
    //express application
    app.listen(4000);
    console.log('listen on port 4000: connected')
}

main();