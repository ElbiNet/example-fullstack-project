import { Request, Response } from 'express';

export interface ProductContext {
	req: Request;
	res: Response;
	payload?: { productId: string; productname: string; };
}
