import CONFIG from "../config/config.js";

export const getBackendValueControl = async (req, res) => {
  const { key } = req.body;
  if (!key) return null;

  const value = CONFIG[key];

  return res.json(value);
};

//BUILD
