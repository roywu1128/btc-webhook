export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method not allowed' });
  }

  console.log('收到Webhook訊息:', req.body);

  res.status(200).json({
    message: 'Webhook Received Successfully',
    data: req.body, // 把收到的資料也一起回傳
  });
}
