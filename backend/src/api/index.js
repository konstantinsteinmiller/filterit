import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

var http = require('http'),
    inspect = require('util').inspect,
    path = require('path'),
    os = require('os'),
    fs = require('fs');


var Busboy = require('busboy');


export default ({ config, db }) => {
    let api = Router();

    // mount the facets resource
    api.use('/facets', facets({ config, db }));

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.status(200).json({ version, text: 'some ' + JSON.stringify(req) });
    });

    api.post('/checkFile', (req, res) => {
        if (req.method === 'POST') {
            // var busboy = new Busboy({ headers: req.headers });
            // busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
            //   console.log('File [' + fieldname + ']: filename: ' + filename + ', encoding: ' + encoding + ', mimetype: ' + mimetype);
            //   file.on('data', function(data) {
            //     console.log('File [' + fieldname + '] got ' + data.length + ' bytes');
            //   });
            //   file.on('end', function() {
            //     console.log('File [' + fieldname + '] Finished', file);
            //   });
            // });
            // busboy.on('field', function(fieldname, val, fieldnameTruncated, valTruncated, encoding, mimetype) {
            //   console.log('Field [' + fieldname + ']: value: ' + inspect(val));
            // });
            // busboy.on('finish', function() {
            //   console.log('Done parsing form!');
            //   res.status(200).json({ 'Connection': 'close' });
            // });
            // req.pipe(busboy);


          /* save file to Disk */
          let busboy = new Busboy({ headers: req.headers });
          busboy.on('file', function(fieldname, file, filename, encoding, mimetype) {
            let saveTo = path.join(__dirname, '../' + filename);
            // console.log('file, filename', saveTo, filename)
            file.pipe(fs.createWriteStream(saveTo));

            if (~filename.indexOf('Michael Jackson')){
              res.status(403).json({ 'Connection': 'close' });
            }else {
              res.status(200).json({ 'Connection': 'close' });
            }
          });
          busboy.on('finish', function() {
            /* send file to Azure service */

          });
          return req.pipe(busboy);
        }


    });

    // get a tracking object with states etc. by tracking number
    api.get('/get', (req, res) => {

        const details = { '_id': req.query.id };
        // db.collection('collection').findOne(details)
        //     .then(item => {
        //         /* if item exists, send back the item with its states, otherwise send error message */
        //         let json = (item) ? item : { error: `Could not find item information for ${req.query.id}` }
        //         res.status(200).json(json);
        //     }).catch(err => {
        //     console.log('err', err)
        //     res.json({ error: `An error has occurred while searching for ${req.query.id} ${err}`});
        // });

    });

    // create a new tracking number with mocked states data
    api.post('/post', (req, res) => {

        console.log('req', req.body)
        res.json({ error: `Bla Blub Error`});

    });

    /* update existing shipment by tracking number, notice and state to update */
    api.put('/put', (req, res) => {

        console.log('req', req.body)
        res.json({ error: `Bla Blub Error`});

    });

    /* update existing shipment by tracking number, notice and state to update */
    api.delete('/delete', (req, res) => {

        console.log('req', req.query)
        res.json({ error: `Bla Blub Error`});

    });

    return api;
}
