/**
 * Created by mayukh on 6/7/15.
 */
var notes = require('nano')('http://localhost:5984/notes');

function save(params) {console.log('inside nanop');
    //var notes = nano.db.use('notes');

    update({"note": params.note}, params.ipAddress, function(err, res) {
        if (err) return console.log('No update!');
        console.log('Updated!',params.ipAddress);
    });
}

update = function(obj, key, callback) {
    var db = notes;
    db.get(key, function (error, existing) {
        if(!error) obj._rev = existing._rev;
        db.insert(obj, key, callback);
    });
}

exports.save = save;