import { useConnection,Handle, Position } from "@xyflow/react"

export const ContainerNode = (node,isConnectable)=>{
    const connection = useConnection()
    console.log(node)
    return(
        <>
        <Handle
        type="target"
        position={Position.Left}
        isConnectable={isConnectable}
      />
        <div className="bg-white w-[206px] h-[88px] p-4 rounded-2xl">
            <p>{node.data.label}</p>
            <div className="flex flex-row items-center justify-between">
            <p>Статус</p>
            <div className={`w-2 h-2 rounded-full ${node.data.status === 'online' ? 'bg-green-500' : 'bg-red-500'}`}></div>
            </div>
        </div>
      <Handle
        type="source"
        position={Position.Right}
        isConnectable={isConnectable}
      />
        </>
    )
}