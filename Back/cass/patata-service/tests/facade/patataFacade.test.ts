process.env.NODE_ENV = 'test'

import { expect } from "chai";
import patataFacade from '../../src/facade/patata/facade';
import { db } from '../../src/config/connection/database';
import patata from "../../src/models/patata.model";


describe('patataFacade Test', () => {

    before('Init', async() => {
        await db.sync({ force: true});
        patata.create({
        id: 1,
        name: 'test',
        createdAt: '2020-01-01',
        updatedAt: '2020-01-01'
        });

        //Para lanzar pruebas con kafka
        // let topics = [
        //     'pruebas',
        //     'test'
        // ];
        // try{
        //     await Kafka.init(topics);
        //     console.log('Connected to Kafka');

        // }catch(err){
        //     console.log('Error', err);
        // }
    });
  
    describe('FindAll', () => {
        it('should return one user', async () => {
            const patata: any[] = await patataFacade.findAll();
            expect(1).equal(patata.length);
        });
    });
});