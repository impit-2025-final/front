export const plantUML = (nodes,edges) => {

      const [plantСode, setPlantCode] = useState(convertToPlantUML(nodes, edges));
  const convertToPlantUML = (nodes, edges) => {
    let uml = '@startuml\n';
    const nodeSet = new Set();
    const edgeSet = new Set();

    nodes.forEach((node) => {
      if (!nodeSet.has(node.id)) {
        uml += `object \"${node.data.label}\" as Node${node.id}\n`;
        nodeSet.add(node.id);
      }
    });

    edges.forEach((edge) => {
      const edgeKey = `${edge.source}-${edge.target}`;

      if (!edgeSet.has(edgeKey)) {
        const arrow = edge.directed ? '-->' : '--';
        uml += `Node${edge.source} ${arrow} Node${edge.target}\n`;
        edgeSet.add(edgeKey);
      }
    });

    uml += '@enduml';
    return uml;
  };

  useEffect(() => {
    setPlantCode(convertToPlantUML(nodes, edges));
  }, [edges]);
  return (
    <div className="w-96">
      <pre className="text-base p-2">{plantСode}</pre>
    </div>
  );
};
