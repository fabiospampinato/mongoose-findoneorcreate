# findOneOrCreate

Promise-based plugin for Mongoose that defines a "findOneOrCreate" static method.

Useful for finding a document, with support for creating it if doesn't exist already.

## Install

```shell
$ npm install --save mongoose-findoneorcreate
```

## Usage

```js
import * as mongoose from 'mongoose';
import findOneOrCreate from 'mongoose-findoneorcreate';
import BookSchema from './book_schema';

BookSchema.plugin ( findOneOrCreate );

const model = mongoose.model ( 'Book', BookSchema );

const book = await model.findOneOrCreate ( { title: 'My book title' }, {
  title: 'My book title',
  author: 'Me',
  category: 'fantasy'
});
```

## Related

- [findAnyoneOrCreate](https://github.com/fabiospampinato/mongoose-findanyoneorcreate) - Promise-based plugin for Mongoose that defines a "findAnyoneOrCreate" static method.

## License

MIT © Fabio Spampinato
