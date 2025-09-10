import { Router } from 'express';


const router : Router = Router();

router.get('/', (req, res) => {
    res.send('API v1 is working');
});

export default router;