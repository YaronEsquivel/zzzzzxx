import { patataService } from "../../services";
import { IpatataFacade } from "./interface";


/**
 * @export
 * @implements {IpatataModelService}
 */
const patataFacade: IpatataFacade = {
    /**
     * @returns {Promise < any[] >}
     * @memberof patataFacade
     */
    async findAll(): Promise<any[]> {

        let patata = await patataService.findAll();
        return patata;
    }
}

export default patataFacade;