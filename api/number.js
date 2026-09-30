export default async function handler(req, res) {
  const { number } = req.query;

  if (!number) {
    return res.status(400).json({
      status: "error",
      message: "number parameter required",
      developer: "Aditya",
      youtube: "https://youtube.com/@YourChannelHere"
    });
  }

  try {
    const upstream = await fetch(
      `https://numberinfo-api-adibhai.vercel.app/api/number?number=${encodeURIComponent(number)}`
    );
    const data = await upstream.json();

    return res.status(200).json({
      status: data.status || "success",
      number: data.number || number,
      data: data.data || null,
      developer: "Aditya",
      youtube: "https://youtube.com/@YourChannelHere"
    });
  } catch (err) {
    return res.status(500).json({
      status: "error",
      message: "upstream fetch failed",
      developer: "Aditya",
      youtube: "https://youtube.com/@YourChannelHere"
    });
  }
}
