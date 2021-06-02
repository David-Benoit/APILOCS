const {Router} = require('express');

const router = Router();

const Location = require('../models/Location');

//see alll documents
router.get('/api/locs', async (req, res) => {
    const Locations = await Location.find();
    res.json({Locations});
});

//crete a new document onto the collection
router.get('/api/locs/create/:id/:lat/:lon',async (req, res) => {
    await Location.create({
        id: req.params.id,
        Latitude: req.params.lat,
        Longitude: req.params.lon
    });
     res.json({message:'location created'});
});

//find and update one documento into the collection
router.get('/api/locs/update/:id/:lat/:lon', async (req, res)=>{
    await Location.updateOne({id: req.params.id},{
        $set:{
            Latitude: req.params.lat,
            Longitude: req.params.lon
        }
    },
    function(error, info){
        if(error){
            res.json({
                resultado: false,
                msg: 'no se pudo actualizar',
                err
            });
        } else{
            res.json({
                resultado:true,
                info: info
            });
        }
    }
    );
});


module.exports = router;