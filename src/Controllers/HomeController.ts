import { Request, Response } from "express"

const home = (req: Request, res: Response) => {
    res.send({
        message:"Hello World"
    })
}

export {
    home
}
