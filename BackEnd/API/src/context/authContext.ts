import { Request, Response } from 'express';

export interface AuthContext {
	req: Request;
	res: Response;
	payload?: { companyId: number; companytitle: string; email: string };
}
