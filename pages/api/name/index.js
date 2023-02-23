const handler = (req, res) => {

  res.json({ code: 200, data: req.query.age })
}

export default handler