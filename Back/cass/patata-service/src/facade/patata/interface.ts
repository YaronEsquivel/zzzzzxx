
/**
 * @export
 * @interface IpatataFacade
 */
export interface IpatataFacade {

    /**
     * @returns {Promise<any[]>}
     * @memberof IpatataFacade
     */
    findAll(): Promise<any[]>;
}