import { version } from '../../package.json';
import { Router } from 'express';
import facets from './facets';

var http = require('http'),
    inspect = require('util').inspect,
    path = require('path'),
    os = require('os'),
    fs = require('fs');


var Busboy = require('busboy');

let videos = [
  {
    id: 'bfTOOpGr7Vw',
    title: "Teletabbies - Alle hatten ihre Lieblingssachen dabei",
    thumbnail:
      "https://img.youtube.com/vi/bfTOOpGr7Vw/default.jpg",
    youtubeURL: "https://www.youtube.com/embed/bfTOOpGr7Vw",
    creator: "Teletabbies",
    likes: 0,
    views: 0
  },{
    id: 'ZbZSe6N_BXs',
    title: "Pharrell Williams - Happy",
    thumbnail:
      "https://i.ytimg.com/vi/JRMOMjCoR58/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDYO17BuSTD_XxF_-u_T2fp2qVYRQ",
    youtubeURL: "https://www.youtube.com/embed/ZbZSe6N_BXs",
    creator: "Pharrell Williams",
    likes: 0,
    views: 0
  },
  {
    id: 'qD2wi-I3JpY',
    title: "Witziges Katzen Video zum Totlachen 2018 [Witzige Videos/Witzige Tier Videos]",
    thumbnail:
      "https://i.ytimg.com/vi/qD2wi-I3JpY/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDAC2zgmLIlc8zq_bLP9MBGR6JuPQ",
    youtubeURL: "https://www.youtube.com/embed/qD2wi-I3JpY",
    creator: "Witziges Katzen",
    likes: 0,
    views: 0
  },
  {
    id: 'b5hOKAIs0Is',
    title: "Titanic in 10 Sekunden",
    thumbnail:
      "https://i.ytimg.com/vi/b5hOKAIs0Is/hqdefault.jpg?sqp=-oaymwEZCPYBEIoBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDFfV7URq5EAgegWAHzoM2v-x3hzg",
    youtubeURL: "https://www.youtube.com/embed/b5hOKAIs0Is",
    creator: "Titanic in 10 Sekunden",
    likes: 0,
    views: 0
  },
  {
    id: '_DboMAghWcA',
    title: "Rise Against - Hero Of War",
    thumbnail:
      "https://i.ytimg.com/vi/_DboMAghWcA/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCyNsjbwvVsIs8E5mTyRdIbC4Vccw",
    youtubeURL: "https://www.youtube.com/embed/_DboMAghWcA",
    creator: "Rise Against",
    likes: 0,
    views: 0
  },
  {
    id: 'EFZMQ_GjYII',
    title: "10 Sekunden Musik",
    thumbnail:
      "https://i.ytimg.com/vi/EFZMQ_GjYII/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLCyn3Sug_yWJCbhvKk_ZsFWMwhpDw",
    youtubeURL: "https://www.youtube.com/embed/EFZMQ_GjYII",
    creator: "10 Sekunden Musik",
    likes: 0,
    views: 0
  },
  // {
  //   id: 'u8G10UCVonM',
  //   title: "Lustige kurze Videos",
  //   thumbnail:
  //     "https://img.youtube.com/vi/u8G10UCVonM/default.jpg",
  //   youtubeURL: "https://www.youtube.com/embed/u8G10UCVonM",
  //   creator: "Lustige kurze Videos",
  //   likes: 0,
  //   views: 0,
  //   display: false
  // },

];

export default ({ config, db }) => {
    let api = Router();

    // mount the facets resource
    api.use('/facets', facets({ config, db }));

    // perhaps expose some API metadata at the root
    api.get('/', (req, res) => {
        res.status(200).json({ version, text: 'some ' + JSON.stringify(req) });
    });

    api.get('/videos', (req, res) => {
        res.status(200).json({ data: videos });
    });

    api.post('/videos', (req, res) => {
        console.log('req.body', req.body)

        res.status(200).json({ data: videos });
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

            file.pipe(fs.createWriteStream(saveTo));

            if (~filename.indexOf('Michael Jackson')){
              res.status(403).json({ 'Connection': 'close', message: 'The file can\'t be uploaded due to copyright infringement.' });
            }else {
              if (videos.every((vid) => {
                  return vid.id !== 'Fp-t3gic6qw';
                })) {
                videos.push({
                  id: 'Fp-t3gic6qw',
                  title: "Super süßes Katzen-Video",
                  thumbnail:
                    "https://i.ytimg.com/vi/Fp-t3gic6qw/hqdefault.jpg?sqp=-oaymwEZCNACELwBSFXyq4qpAwsIARUAAIhCGAFwAQ==&amp;rs=AOn4CLDikvh6K1otRdAV1Zgx9s2KXjvAGg",
                  youtubeURL: "https://www.youtube.com/embed/Fp-t3gic6qw",
                  creator: "Super süßes Katzen-Video",
                  likes: 0,
                  views: 0
                })
              }
              res.status(200).json({ 'Connection': 'close', data: videos, vidId: 'Fp-t3gic6qw' });
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
