import { createLazyFileRoute } from '@tanstack/react-router'
import { addEdge, Background, ReactFlow, useEdgesState, useNodesState } from '@xyflow/react';
 
import '@xyflow/react/dist/style.css';
import { useCallback, useEffect, useState } from 'react';
import CustomNode from '../components/CustomNode';

function RouteComponent (){
   
const initialNodes = [
    { id: '1', position: { x: 0, y: 0 }, data: { label: '1' }, type:'custom' },
    { id: '2', position: { x: 0, y: 100 }, data: { label: '2' },type:'custom' },
    {id:'3',position:{x:0, y:200},data:{label:'3'}}
  ];
  const initialEdges = [{ id: 'e1-2', source: '1', target: '2' }];
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes);
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges);
  const nodeTypes = {
    custom:CustomNode
  }
  const onConnect = useCallback(
    (params) => setEdges((eds) => addEdge(params, eds)),
    [setEdges],
  );
  return(
    <div className='flex flex-row w-full h-screen'>
    <div className='flex-1'>
    <ReactFlow
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        nodeTypes={nodeTypes}
        onConnect={onConnect}
      >
        <Background />
        
        </ReactFlow>
    </div>
    </div>
  )
}
export const Route = createLazyFileRoute('/')({
  component: RouteComponent,
})
