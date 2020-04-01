import { randomName } from "../../src/generator";

export default (req, res) => {
  const name = randomName();
  res.status(200).json({ name });
};
