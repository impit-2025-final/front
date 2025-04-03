import { createLazyFileRoute } from '@tanstack/react-router'

import { addEdge, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
import { useCallback } from 'react';

export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})

function RouteComponent() {

const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' } },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' } },
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
 
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return(
    <div>
 
 
    <div className='w-[500px] h-[500px]'>
    <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
      />
    </div>
    </div>
  )
}
