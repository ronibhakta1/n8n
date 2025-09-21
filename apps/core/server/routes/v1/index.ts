import { Router } from "express";

const router: Router = Router();

router.get("/", (req, res) => {
  res.send("n8n API v1 is working");
});

router.post("/signin", (req, res) => {
  res.json({
    msg: "signin route!",
  });
});

router.post("/signup", (req, res) => {
  res.json({
    msg: "signup route!",
  });
});

router.post("/workflow", (req, res) => {
  res.json({
    msg: "post workflow!",
  });
});

router.get("/workflow/:id", (req, res) => {
  const { id } = req.params;

  // dummy workflow data
  const dummyWorkflow = {
    id: parseInt(id),
    title: "Example Workflow",
    nodes: [
      { id: 1, label: "Start", positionX: 50, positionY: 50 },
      { id: 2, label: "Process", positionX: 100, positionY: 100 },
      { id: 3, label: "End", positionX: 250, positionY: 150 },
    ],
    edges: [
      { id: 1, sourceId: 1, targetId: 2 },
      { id: 2, sourceId: 2, targetId: 3 },
    ],
  };

  res.json({
    msg: `Fetched workflow with id: ${id}`,
    workflow: dummyWorkflow,
  });
});

router.put("/workflow/:id", (req, res) => {
  const id = req.params;
  res.json({
    msg: `get workflow:id! ${id}`,
  });
});

router.post("/credential", (req, res) => {
  res.json({
    msg: `post credential`,
  });
});

router.delete("/credential", (req, res) => {
  res.json({
    msg: `delete credential`,
  });
});

export default router;
