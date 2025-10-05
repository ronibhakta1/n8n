"use client";
import { useState, useCallback, useEffect } from "react";
import {
  ReactFlow,
  applyNodeChanges,
  applyEdgeChanges,
  addEdge,
  Controls,
  Background,
  MiniMap,
  Panel
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import axios from "axios";
import { server_url } from "../../config";

export default function Playground() {
  const [nodes, setNodes] = useState<any[]>([]);
  const [edges, setEdges] = useState<any[]>([]);

  useEffect(() => {
    axios
      .get(`${server_url}/api/v1/workflow/1`) 
      .then((res) => {
        console.log("📥 Workflow data:", res.data);
        setNodes(
          res.data.workflow.nodes.map((node: any) => ({
            id: String(node.id),
            position: { x: node.positionX, y: node.positionY },
            data: { label: node.label },
          })),
        );
        setEdges(
          res.data.workflow.edges.map((edge: any) => ({
            id: String(edge.id),
            source: String(edge.sourceId),
            target: String(edge.targetId),
          })),
        );
      })
      .catch((err) => console.error("❌ Error fetching workflow:", err));
  }, []);

  const onNodesChange = useCallback(
    (changes: any) =>
      setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes: any) =>
      setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params: any) =>
      setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        fitView
      >
        <Panel position="top-left"></Panel>
        <Panel position="top-center"></Panel>
        <Panel position="top-right"></Panel>
        <Panel position="bottom-left"></Panel>
        <Panel position="bottom-center"></Panel>
        <Panel position="bottom-right"></Panel>
        <Panel position="center-left"></Panel>
        <Panel position="center-right"></Panel>
        <Controls />
        <Background bgColor="#f1f1f1"/>
        <MiniMap nodeStrokeWidth={5} bgColor="#D3D3D3"/>
      </ReactFlow>
    </div>
  );
}
