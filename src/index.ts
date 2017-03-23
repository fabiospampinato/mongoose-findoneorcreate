
/* FIND ONE OR CREATE */

function findOneOrCreate ( schema ) {

  schema.statics.findOneOrCreate = function findOneOrCreate ( find, create ) {

    const model = this;

    return new Promise ( ( resolve, reject ) => {

      model.findOne ( find, ( err, result ) => {

        if ( err ) return reject ( err );
        if ( result ) return resolve ( result );

        model.create ( create, ( err, result ) => {

          if ( err ) return reject ( err );

          resolve ( result );

        });

      });

    });

  }

}

/* EXPORT */

export default findOneOrCreate;
