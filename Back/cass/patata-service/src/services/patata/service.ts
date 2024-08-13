import { IpatataService } from "./interface";
import patata from "../../models/patata.model";


/**
 * @export
 * @implements {IpatataModelService}
 */
const patataService: IpatataService = {
    /**
     * @returns {Promise < any[] >}
     * @memberof patataFacade
     */
    async findAll(): Promise<any[]> {
        // Para enviar un mensaje a kafka
        // await Kafka.send("test", 'Hello');
        return patata.findAll();
    }
}

export default patataService;