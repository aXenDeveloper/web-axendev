import { NextApiRequest, NextApiResponse } from 'next';
import productsDataAPI from '../../components/api/productsDataAPI';

export default (req: NextApiRequest, res: NextApiResponse) => {
  // Limit
  if (req.query.limit) {
    const queryLimit = parseInt(req.query.limit[0]);
    return res.status(200).json(productsDataAPI.slice(0, queryLimit));
  }

  // Find by category
  if (req.query.category) {
    return res.status(200).json(productsDataAPI.filter(el => el.category === req.query.category));
  }

  return res.status(200).json(productsDataAPI);
};
