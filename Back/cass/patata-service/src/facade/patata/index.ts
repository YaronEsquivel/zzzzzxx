import patataFacade from './facade';
import { NextFunction, Request, Response } from 'express';
import HttpStatusCode from '../../commons/constants/HttpStatusCode';

/**
 * @export
 * @param {Request} req
 * @param {Response} res
 * @param {NextFunction} next
 * @returns {Promise < void >}
 */
export async function findAll(req: Request, res: Response, next: NextFunction): Promise < void > {
    try {
        const patata: any[] = await patataFacade.findAll();
        res.status(HttpStatusCode.OK).json(patata);
    } catch (error) {
        next(error);
    }
}