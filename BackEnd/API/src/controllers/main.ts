import { Request, Response } from 'express';
import { verify } from 'jsonwebtoken';
import { Company } from '../entity/Company';
import { createAccessToken, createRefreshToken } from '../util/auth';
import { setRefreshtoken } from '../util/setRefreshToken';

export const handleRefreshToken = async (req: Request, res: Response) => {
	const token = req.cookies.jref;
	if (!token) {
		return res.json({ ok: false, accessToken: '' });
	}

	let payload = null;
	try {
		payload = verify(token, process.env.REFRESH_TOKEN_SECRET!) as any;
	} catch (err) {
		return res.send({ ok: false, accessToken: '' });
	}

	const company = await Company.findOne({ id: payload.companyId });
	if (!company) {
		return res.send({ ok: false, accessToken: '' });
	}

	setRefreshtoken(res, createRefreshToken(company));
	return res.send({ ok: true, accessToken: createAccessToken(company) });
};
