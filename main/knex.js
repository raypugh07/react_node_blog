module.exports = {
    development: {
        client: 'pg',
        connection: {
            host: 'ec2-54-174-229-152.compute-1.amazonaws.com',
            user: 'wkvxzjrpvafazl',
            password: '0f83b5c33291f8ac815e55cea45eed4cb1e4412f395ba8837d7758b5c42ba0ff',
            database: 'd7vn6cbq9dl4qh'
        },
        // migrations: {
        //     directory: __dirname + '/db/migrations',
        // },
        // seeds: {
        //     directory: __dirname + '/db/seeds/development',
        // },
    },
    production: {
        client: 'pg',
        connection: 'postgres://wkvxzjrpvafazl:0f83b5c33291f8ac815e55cea45eed4cb1e4412f395ba8837d7758b5c42ba0ff@ec2-54-174-229-152.compute-1.amazonaws.com:5432/d7vn6cbq9dl4qh',
        // migrations: {
        //     directory: __dirname + '/db/migrations',
        // },
        // seeds: {
        //     directory: __dirname + '/db/seeds/production',
        // },
    },
};