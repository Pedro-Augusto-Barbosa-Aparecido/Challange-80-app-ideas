export default function handler (req, res) {
    let valid;
    const { email, password } = req.body;

    valid = (email === "pedro007augustobarbosa@gmail.com") && (password === "1234");

    res.status(200).json({
        result: valid

    });

}
