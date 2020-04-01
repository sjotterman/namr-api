import { randomName } from "../../src/generator";

export default (req, res) => {
  const name = randomName();
  res.setHeader('Access-Control-Allow-origin', 'https://namr.samuelotterman.com');
  res.status(200).json({ name });
};
